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

      {/* TIER 1 · LITE */}
      <section className="service-block" id="lite">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-w2.jpg"
              alt="A solo business owner setting up at a warm desk."
            />
          </div>
          <div className="service-content">
            <span className="label">Lite · Identity Starter</span>
            <h2>Lite — $500</h2>
            <p className="desc">
              The minimum kit to start looking like a real business. Brand basics, document templates,
              and a hands-on handover so you can use them straight away.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Solo operators and brand-new small businesses who need to look professional today and
                will add Ai + website later. No website included in this tier.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s included</h4>
              <ul>
                <li>Brand Kit (Light Design) — wordmark, palette, fonts, 1-page style guide</li>
                <li>Doc Template Pack — letterhead, quote, invoice, email signature, SOP template</li>
                <li>Handover Training — 2-hour live walk-through, recording included</li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Save vs à la carte</h4>
              <p>
                À la carte total: $650 · Package: <strong>$500</strong> · You save $150 (23%).
              </p>
            </div>
            <div className="cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Enquire about Lite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 2 · STANDARD (Most popular) */}
      <section className="service-block is-alt is-reverse" id="standard">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/hero-workspace-a.jpg"
              alt="A small-business workspace with brand, docs, and a website on screen."
            />
          </div>
          <div className="service-content">
            <span className="label">Most popular · Done-for-you setup</span>
            <h2>Standard — Business Kick Starter — $2,000</h2>
            <p className="desc">
              The full done-for-you setup. Brand, docs, one Ai platform, a 5-page website, and a
              booking system — handed over working, with you trained on how to drive it.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Small businesses that want to start trading properly: brand, website, AI in their
                workflow, and a way for customers to book — all delivered in one bundle.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s included</h4>
              <ul>
                <li>Brand Kit (Light Design)</li>
                <li>Doc Template Pack</li>
                <li>Ai Platform Setup — pick one (Copilot, ChatGPT, Claude, or Gemini)</li>
                <li>Website Design + Deploy — 5 pages, responsive, Vercel-hosted</li>
                <li>Booking Integration — Calendly setup, branded, embedded</li>
                <li>Google Business Profile setup</li>
                <li>Social Media Starter — LinkedIn + 1 other platform</li>
                <li>Handover Training — 2-hour live walk-through</li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Save vs à la carte</h4>
              <p>
                À la carte total: $2,300 · Package: <strong>$2,000</strong> · You save $300 (13%).
              </p>
            </div>
            <div className="cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Enquire about Standard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 3 · PLUS */}
      <section className="service-block" id="plus">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-man-polo.jpg"
              alt="A confident small-business owner with a polished, finished brand."
            />
          </div>
          <div className="service-content">
            <span className="label">Plus · The full kit</span>
            <h2>Plus — Full Kick Starter — $3,000</h2>
            <p className="desc">
              Everything in Standard, plus full custom brand design, two Ai platforms, six integrated
              workflows, and three months of included support after handover.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Small businesses that want a properly finished launch — bespoke brand, AI integrated
                into real day-to-day workflows, and someone on call for the first three months while
                you settle in.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s included</h4>
              <ul>
                <li>
                  Brand Kit (<strong>Full Design</strong>) — logo from scratch, 2 revisions, full
                  identity
                </li>
                <li>Doc Template Pack</li>
                <li>
                  Ai Platform Setup — <strong>two platforms</strong> (e.g. Copilot for office work +
                  ChatGPT for marketing)
                </li>
                <li>Ai Integration — 6 workflows documented as 1-page SOPs</li>
                <li>Website Design + Deploy</li>
                <li>Booking Integration</li>
                <li>Google Business Profile setup</li>
                <li>Social Media Starter</li>
                <li>Handover Training</li>
                <li>
                  <strong>3 months Support Retainer included</strong> — 1 hour/month of changes &amp;
                  fixes
                </li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Save vs à la carte</h4>
              <p>
                À la carte total: $3,250 · Package: <strong>$3,000</strong> · You save $250 (8%).
              </p>
            </div>
            <div className="cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Enquire about Plus
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
