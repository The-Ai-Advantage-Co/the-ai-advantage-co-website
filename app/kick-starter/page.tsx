import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Business Kick Starter',
  description:
    'Brand, docs, Ai platform setup, and a website — bundled for small businesses. Three tiers from $500. Transparent pricing, no surprises.',
  alternates: { canonical: '/kick-starter' },
};

export default function KickStarterPage() {
  return (
    <>
      <style>{`
        .page-hero { background: transparent !important; }
        .page-hero-bg { display: none !important; }
        .page-hero {
          position: relative;
          background: var(--surface-0);
          padding: 140px var(--gutter) 96px;
          text-align: center;
          overflow: hidden;
        }
        .page-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 880px;
          margin: 0 auto;
        }
        .page-hero .eyebrow { margin-bottom: 18px; }
        .page-hero h1 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin-bottom: 22px;
        }
        .page-hero h1 .accent { color: var(--gold-1); font-style: italic; font-weight: 700; text-shadow: 0 0 24px rgba(217,184,112,0.22); }
        .page-hero p { font-size: 20px; line-height: 1.5; color: var(--ink-secondary); max-width: 680px; margin: 0 auto; }
        .page-hero .hero-cta { margin-top: 36px; }
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Kick Starter</span>
          <h1>
            Start your business with Ai, <span className="accent">properly.</span>
          </h1>
          <p>
            Brand, documents, Ai platform setup, and a working website — bundled into one done-for-you
            setup. Three tiers, transparent pricing, and you keep everything we build.
          </p>
          <div className="hero-cta">
            <a href="#enquiry" className="btn btn-primary">
              Send an enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
