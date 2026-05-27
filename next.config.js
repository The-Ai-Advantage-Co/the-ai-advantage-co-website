/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .html files under public/guides/ to be served as static assets.
  // Next.js serves everything in public/ verbatim; no special config needed.
  // This file exists to make the project explicit and allow future config.

  // Disable x-powered-by header
  poweredByHeader: false,

  // Trailing slash consistency
  trailingSlash: false,

  // Headers for guide HTML pages — private, short-TTL cache
  async headers() {
    return [
      {
        source: '/guides/:platform/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, max-age=300, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
