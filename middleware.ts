/**
 * middleware.ts — Cookie gate for /guides/* (spec §4.4).
 *
 * Runs on Vercel's Edge runtime, so we can't import Node's `crypto` module
 * or anything that depends on it. This file re-implements just the cookie
 * verification using Web Crypto API. Keep this in sync with lib/auth.ts:
 *
 *   Cookie value = `${expiry_ms}.${hmac_sha256_hex(payload, COOKIE_SECRET)}`
 *
 * Exceptions: /guides/login and /guides/logout always pass through.
 * Missing / invalid / expired cookie → 302 to /guides/login?next=<originalPath>.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'aiadv_guides_access';

async function verifyCookieEdge(raw: string | undefined): Promise<boolean> {
  if (!raw) return false;

  const dot = raw.lastIndexOf('.');
  if (dot <= 0 || dot === raw.length - 1) return false;

  const payload = raw.slice(0, dot);
  const sigHex = raw.slice(dot + 1).toLowerCase();

  const secret = process.env.COOKIE_SECRET;
  if (!secret) return false;

  try {
    // HMAC-SHA256 of payload with secret.
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const sigBuf = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
    const expectedHex = Array.from(new Uint8Array(sigBuf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    if (expectedHex.length !== sigHex.length) return false;

    // Constant-time-ish compare in pure JS (Edge has no timingSafeEqual).
    let diff = 0;
    for (let i = 0; i < expectedHex.length; i++) {
      diff |= expectedHex.charCodeAt(i) ^ sigHex.charCodeAt(i);
    }
    if (diff !== 0) return false;

    // Payload is expiry-ms as a decimal string.
    const expiry = parseInt(payload, 10);
    if (!Number.isFinite(expiry)) return false;
    return Date.now() < expiry;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Always allow login + logout through.
  if (
    pathname === '/guides/login' ||
    pathname.startsWith('/guides/login/') ||
    pathname === '/guides/logout' ||
    pathname.startsWith('/guides/logout/')
  ) {
    return NextResponse.next();
  }

  const raw = req.cookies.get(COOKIE_NAME)?.value;
  const ok = await verifyCookieEdge(raw);
  if (ok) return NextResponse.next();

  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = '/guides/login';
  loginUrl.search = `?next=${encodeURIComponent(pathname + search)}`;
  return NextResponse.redirect(loginUrl, 302);
}

export const config = {
  // Match every /guides path. The function above excludes login + logout.
  matcher: ['/guides/:path*'],
};
