import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  checkPassword,
  signCookie,
  cookieName,
  cookieMaxAge,
  rateLimit,
  failureDelay,
  clientIpFromHeaders,
} from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Sign in — Guide Library',
  description: 'Sign in to your AI Guide Library with the password from your post-session email.',
  robots: { index: false, follow: false },
};

interface LoginPageProps {
  searchParams: { next?: string; error?: string };
}

// ---------- Server action ----------------------------------------------------

async function loginAction(formData: FormData) {
  'use server';

  const password = String(formData.get('password') ?? '');
  const next = String(formData.get('next') ?? '/guides');

  const hdrs = headers();
  const ip = clientIpFromHeaders(hdrs);

  const limit = rateLimit(ip);
  if (!limit.allowed) {
    redirect(
      `/guides/login?next=${encodeURIComponent(next)}&error=rate-limited&retryAfter=${limit.retryAfter ?? 60}`
    );
  }

  if (!checkPassword(password)) {
    await failureDelay(); // Constant 200ms delay on miss (spec §4.3).
    redirect(`/guides/login?next=${encodeURIComponent(next)}&error=invalid`);
  }

  // Success — set signed cookie and bounce to next.
  const value = signCookie();
  cookies().set(cookieName, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: cookieMaxAge,
  });

  // Validate next is a same-origin path before redirecting.
  const safeNext = next.startsWith('/') && !next.startsWith('//') ? next : '/guides';
  redirect(safeNext);
}

// ---------- Page styles ------------------------------------------------------

const pageStyles = `
  .login-wrap {
    min-height: calc(100vh - 160px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px var(--gutter);
  }
  .login-card {
    width: 100%;
    max-width: 480px;
    text-align: center;
  }
  .login-card .eyebrow { margin-bottom: 18px; }
  .login-card h1 {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(40px, 5vw, 56px);
    line-height: 1.05;
    letter-spacing: -0.045em;
    margin-bottom: 18px;
  }
  .login-card .lead {
    font-size: 18px;
    line-height: 1.5;
    color: var(--ink-secondary);
    margin-bottom: 32px;
  }
  .login-form {
    background: var(--surface-0);
    border: 1px solid var(--hairline);
    border-radius: 18px;
    padding: 32px;
    text-align: left;
  }
  .login-input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--hairline);
    border-radius: 12px;
    font-family: var(--font-body);
    font-size: 16px;
    color: var(--ink-primary);
    background: var(--surface-0);
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }
  .login-input:focus {
    outline: none;
    border-color: var(--copper);
    box-shadow: 0 0 0 3px rgba(184,116,26,0.12);
  }
  .login-input.is-error { border-color: #B45309; }
  .login-button {
    width: 100%;
    margin-top: 18px;
    justify-content: center;
  }
  .login-meta {
    margin-top: 18px;
    font-size: 13px;
    line-height: 1.55;
    color: var(--ink-tertiary);
    text-align: center;
  }
  .login-meta a { color: var(--copper); }
  .login-meta a:hover { text-decoration: underline; }
  .login-error {
    margin-top: 14px;
    padding: 10px 14px;
    border-radius: 10px;
    background: rgba(180,83,9,0.08);
    color: #8a3f00;
    font-size: 14px;
    text-align: center;
  }
`;

export default function GuidesLoginPage({ searchParams }: LoginPageProps) {
  const next = typeof searchParams.next === 'string' ? searchParams.next : '/guides';
  const error = searchParams.error;

  const errorMessage =
    error === 'invalid'
      ? "That password didn't work. Check your post-session email."
      : error === 'rate-limited'
        ? 'Too many attempts. Try again in a minute.'
        : null;

  return (
    <div className="page-guides-login">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <div className="login-wrap">
        <div className="login-card">
          <span className="eyebrow">Client Resources</span>
          <h1>Your AI Guide Library.</h1>
          <p className="lead">
            The full library of user guides for Copilot, ChatGPT, Claude, and Gemini — included
            with every coaching engagement.
          </p>

          <form className="login-form" action={loginAction} method="POST">
            <input type="hidden" name="next" value={next} />
            <label htmlFor="password" className="form-label" style={{ marginBottom: '8px' }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              autoComplete="current-password"
              required
              className={`login-input ${error === 'invalid' ? 'is-error' : ''}`}
              aria-invalid={error === 'invalid'}
              aria-describedby={errorMessage ? 'login-error' : 'login-meta'}
            />

            <button
              type="submit"
              className="btn btn-primary login-button"
              disabled={error === 'rate-limited'}
            >
              Unlock library
            </button>

            {errorMessage ? (
              <p id="login-error" className="login-error" role="alert" aria-live="polite">
                {errorMessage}
              </p>
            ) : (
              <p id="login-meta" className="login-meta">
                Your password is in the email you received after your last session.
                <br />
                Lost it? <a href="mailto:theaiadvantagecoadmin@gmail.com">theaiadvantagecoadmin@gmail.com</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
