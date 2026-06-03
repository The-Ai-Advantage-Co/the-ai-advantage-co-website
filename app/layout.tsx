import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyCookie } from '@/lib/auth';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const SITE_URL = 'https://www.theaiadvantageco.com.au';

// Social profiles — feed into JSON-LD sameAs to disambiguate the entity for Google.
const SAME_AS: string[] = [
  'https://www.linkedin.com/in/brad-harle-aiadvantage/',
  'https://www.youtube.com/channel/UCV9iaiC2izg6pBA5LjCNjzw',
  'https://www.instagram.com/theaiadvantageco/',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Ai Advantage Co. — Practical Ai coaching for real work',
    template: '%s — The Ai Advantage Co.',
  },
  description:
    'One-on-one coaching, small-business sessions, and team training across Copilot, ChatGPT, Claude, and Gemini. Tailored to your role and what you actually need to get done.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'The Ai Advantage Co.',
    url: SITE_URL,
  },
  icons: {
    icon: '/assets/web/logo-mark.png',
  },
};

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#brad-harle`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'The Ai Advantage Co.',
      alternateName: ['The AI Advantage Co.', 'The AI Advantage Co'],
      url: SITE_URL,
      logo: `${SITE_URL}/assets/web/logo-mark.png`,
      image: `${SITE_URL}/assets/web/logo-mark.png`,
      email: 'theaiadvantagecoadmin@gmail.com',
      telephone: '+61400062251',
      priceRange: 'AU$100 – AU$250',
      description:
        'Practical Ai coaching for individuals, teams, and small businesses across Copilot, ChatGPT, Claude, and Gemini.',
      areaServed: { '@type': 'Country', name: 'Australia' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warrnambool',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      founder: { '@id': PERSON_ID },
      ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Brad Harle',
      jobTitle: 'Founder & Ai Coach',
      worksFor: { '@id': ORG_ID },
      url: SITE_URL,
      ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: 'The Ai Advantage Co.',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-AU',
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side cookie check to conditionally render Sign Out pill in nav.
  const cookieStore = await cookies();
  const rawCookie = cookieStore.get('aiadv_guides_access')?.value ?? null;
  const isAuthenticated = rawCookie ? verifyCookie(rawCookie) : false;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Site-wide fixed video background — same as original static site */}
        <video
          className="site-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/web/circuit-still.jpg"
          aria-hidden="true"
        >
          <source src="/assets/web/circuit-loop.mp4" type="video/mp4" />
        </video>
        <div className="site-bg-mask" aria-hidden="true" />

        <SiteNav isAuthenticated={isAuthenticated} />
        <div className="nav-spacer" />

        {children}

        <SiteFooter />

        {/* Mobile nav toggle script — identical to static site */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var toggle = document.querySelector('.nav-menu-toggle');
                var links = document.querySelector('.nav-links');
                if (toggle && links) {
                  toggle.addEventListener('click', function() {
                    var open = links.classList.toggle('is-open');
                    toggle.setAttribute('aria-expanded', open);
                    if (open) {
                      Object.assign(links.style, {
                        display: 'flex', flexDirection: 'column',
                        position: 'absolute', top: '100%',
                        left: 0, right: 0,
                        background: '#fff', padding: '24px',
                        borderBottom: '1px solid #D2D2D7'
                      });
                    } else {
                      links.style.display = '';
                    }
                  });
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
