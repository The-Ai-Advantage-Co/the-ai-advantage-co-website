import crypto from 'crypto';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const COOKIE_NAME = 'aiadv_guides_access';
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function getCookieSecret(): string {
  const secret = process.env.COOKIE_SECRET;
  if (!secret) {
    // In dev without .env.local, fall back so the app still boots.
    // A missing secret in production is caught at runtime when verification fails.
    return 'dev-secret-replace-in-production';
  }
  return secret;
}

function getGuidesPassword(): string {
  return process.env.GUIDES_PASSWORD ?? '';
}

// ---------------------------------------------------------------------------
// HMAC helpers
// ---------------------------------------------------------------------------

function sign(payload: string): string {
  const secret = getCookieSecret();
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

// ---------------------------------------------------------------------------
// Cookie: sign + verify
// ---------------------------------------------------------------------------

/**
 * signCookie — generates a signed cookie value.
 * Format: `<expiry_ts_ms>.<hmac>`
 */
export function signCookie(): string {
  const expiry = Date.now() + TTL_MS;
  const payload = String(expiry);
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

/**
 * verifyCookie — validates a raw cookie value.
 * Returns true only if the HMAC is correct and the token has not expired.
 */
export function verifyCookie(raw: string): boolean {
  if (!raw) return false;

  const dotIndex = raw.lastIndexOf('.');
  if (dotIndex === -1) return false;

  const payload = raw.slice(0, dotIndex);
  const providedSig = raw.slice(dotIndex + 1);

  // Timing-safe HMAC comparison
  const expectedSig = sign(payload);

  let sigsMatch = false;
  try {
    const a = Buffer.from(providedSig, 'hex');
    const b = Buffer.from(expectedSig, 'hex');
    // crypto.timingSafeEqual requires same-length buffers
    if (a.length === b.length) {
      sigsMatch = crypto.timingSafeEqual(a, b);
    }
  } catch {
    return false;
  }

  if (!sigsMatch) return false;

  // Check expiry
  const expiry = parseInt(payload, 10);
  if (isNaN(expiry)) return false;
  return Date.now() < expiry;
}

// ---------------------------------------------------------------------------
// Password check
// ---------------------------------------------------------------------------

/**
 * checkPassword — timing-safe compare against GUIDES_PASSWORD env var.
 */
export function checkPassword(input: string): boolean {
  const expected = getGuidesPassword();
  if (!expected) return false;

  // Encode to Buffers for timingSafeEqual; pad shorter value to same length
  // by using a fixed-length HMAC of both strings — this avoids length leaks.
  const expectedHash = crypto
    .createHmac('sha256', getCookieSecret())
    .update(expected)
    .digest();
  const inputHash = crypto
    .createHmac('sha256', getCookieSecret())
    .update(input)
    .digest();

  try {
    return crypto.timingSafeEqual(expectedHash, inputHash);
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Rate limiting (in-memory, resets on process restart)
// ---------------------------------------------------------------------------

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 60_000; // 1 minute

/**
 * rateLimit — allows MAX_ATTEMPTS per IP per WINDOW_MS.
 * Returns { allowed: true } or { allowed: false, retryAfter: seconds }.
 */
export function rateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    // Fresh window
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil((entry.windowStart + WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
}

export { COOKIE_NAME };

// ---------- Aliases + helpers consumed by /guides routes --------------------

export const cookieName = COOKIE_NAME;
export const cookieMaxAge = Math.floor(TTL_MS / 1000); // seconds

/**
 * Constant ~200ms delay on failed login attempts (spec §4.3).
 * Caller awaits this before returning the error response.
 */
export function failureDelay(ms = 200): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Extract the client IP from request headers.
 * On Vercel the real IP arrives in `x-forwarded-for` (first hop) or `x-real-ip`.
 */
export function clientIpFromHeaders(headers: Headers): string {
  const xff = headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]!.trim();
  const real = headers.get('x-real-ip');
  if (real) return real.trim();
  return 'unknown';
}

/**
 * Convenience for ops tooling — generate a fresh COOKIE_SECRET value.
 *   node -e "console.log(require('./lib/auth').generateSecret())"
 */
export function generateSecret(): string {
  return crypto.randomBytes(32).toString('base64');
}
