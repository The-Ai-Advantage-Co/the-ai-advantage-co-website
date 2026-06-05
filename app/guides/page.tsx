import { redirect } from 'next/navigation';

/**
 * /guides — redirects to the standalone filterable guide library.
 *
 * The middleware in middleware.ts still runs first (cookie auth check),
 * so unauthenticated visitors are sent to /guides/login before reaching
 * this redirect. Once authenticated, they land on library.html which
 * lives at public/guides/library.html and is also behind the middleware
 * matcher (/guides/:path*).
 */
export default function GuidesPage() {
  redirect('/guides/library.html');
}
