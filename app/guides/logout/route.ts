import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { cookieName } from '@/lib/auth';

/**
 * POST /guides/logout — clears the access cookie and 302s home.
 * Only POST is accepted to prevent accidental sign-out via prefetch/link.
 */
export async function POST(req: Request) {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
  const home = new URL('/', req.url);
  return NextResponse.redirect(home, { status: 302 });
}

// GET intentionally not exported — Sign Out is a deliberate action via the
// form in the nav.
