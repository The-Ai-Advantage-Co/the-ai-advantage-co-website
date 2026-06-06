import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design',
  description:
    'Four website design directions to pick from — Editorial, Tech, Boutique, and Statement. Same price, different aesthetic. We design, deploy, and host on Vercel from $10/mo.',
  alternates: { canonical: '/website-design' },
};

export default function WebsiteDesignPage() {
  return (
    <>
      <style>{`
        /* PAGE HERO */
        .page-hero { background: transparent !important; }
        .page-hero-bg { display: none !important; }
        .page-hero {
          position: relative;
          background: var(--surface-0);
          padding: 120px var(--gutter) 56px;
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
          font-size: clamp(36px, 4.5vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin-bottom: 18px;
        }
        .page-hero h1 .accent { color: var(--gold-1); font-style: italic; font-weight: 700; text-shadow: 0 0 24px rgba(217,184,112,0.22); }
        .page-hero p { font-size: 19px; line-height: 1.5; color: var(--ink-secondary); max-width: 660px; margin: 0 auto; }
        .page-hero .hero-cta { margin-top: 28px; }

        /* SHOWCASE / SECTIONS */
        .showcase {
          padding: 80px var(--gutter);
          position: relative;
        }
        .showcase + .showcase { border-top: 1px solid var(--hairline); }
        .showcase.is-alt { background: var(--surface-1); }
        .showcase-inner { max-width: var(--max-w); margin: 0 auto; }
        .showcase-header { text-align: center; max-width: 720px; margin: 0 auto 48px; }
        .showcase-header .eyebrow {
          display: inline-block;
          color: var(--copper);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .showcase-header h2 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 3.2vw, 40px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }
        .showcase-header p {
          font-size: 17px;
          line-height: 1.55;
          color: var(--ink-secondary);
        }

        /* MOCKUP GRID */
        .mockup-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
        }
        .mockup-card {
          background: var(--surface-0);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mockup-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
        }
        .mockup-thumb {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #000;
        }
        .mockup-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .mockup-meta {
          padding: 22px 26px 24px;
        }
        .mockup-meta .num {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 6px;
        }
        .mockup-meta h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 22px;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .mockup-meta p {
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-secondary);
          margin-bottom: 14px;
        }
        .mockup-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .mockup-tag {
          display: inline-block;
          padding: 4px 10px;
          background: var(--surface-1);
          border: 1px solid var(--hairline);
          border-radius: 999px;
          font-size: 11px;
          color: var(--ink-secondary);
          letter-spacing: 0.04em;
        }
        .mockup-inspired {
          display: block;
          margin-top: 12px;
          font-size: 12px;
          color: var(--ink-tertiary);
          letter-spacing: 0.04em;
        }
        .mockup-inspired strong { color: var(--copper); font-weight: 600; }

        /* PROCESS STEPS */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .process-step {
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 16px;
          padding: 28px 24px;
        }
        .process-step .num-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface-cream);
          color: var(--copper);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 14px;
        }
        .process-step h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .process-step p {
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-secondary);
        }

        /* CAPABILITY CARDS */
        .capability-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .capability-card {
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 16px;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
        }
        .capability-card .ico {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--surface-cream);
          color: var(--copper);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .capability-card h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 19px;
          letter-spacing: -0.015em;
          margin-bottom: 10px;
        }
        .capability-card p {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--ink-secondary);
        }
        .capability-card p + p { margin-top: 10px; }
        .capability-card .note {
          margin-top: 12px;
          font-size: 12px;
          color: var(--ink-tertiary);
          letter-spacing: 0.02em;
        }
        .capability-card .note strong { color: var(--copper); font-weight: 600; }

        /* PRICING / HOSTING */
        .pricing-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pricing-card {
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 18px;
          padding: 28px 26px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .pricing-card.is-featured {
          border-color: var(--rose-gold-2);
          box-shadow: 0 18px 48px rgba(183, 117, 127, 0.10);
        }
        .pricing-card .tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 14px;
        }
        .pricing-card h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .pricing-card .price-row {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: var(--ink-primary);
          margin: 8px 0 14px;
        }
        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          text-align: left;
          flex: 1;
        }
        .pricing-card ul li {
          position: relative;
          padding-left: 22px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-primary);
          margin-bottom: 8px;
        }
        .pricing-card ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 7px;
          width: 11px; height: 5px;
          border-left: 1.5px solid var(--rose-gold-2);
          border-bottom: 1.5px solid var(--rose-gold-2);
          transform: rotate(-45deg);
        }

        /* HOSTING CALLOUT */
        .hosting-callout {
          background: var(--surface-cream);
          border-radius: 18px;
          padding: 36px 40px;
          max-width: 920px;
          margin: 36px auto 0;
          text-align: center;
        }
        .hosting-callout h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .hosting-callout p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-secondary);
          max-width: 720px;
          margin: 0 auto;
        }
        .hosting-callout p strong { color: var(--ink-primary); font-weight: 600; }

        /* ENQUIRY FORM */
        .contact-section { padding: 88px var(--gutter); }
        .contact-section-inner { max-width: 720px; margin: 0 auto; }
        .contact-form {
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 20px;
          padding: 40px 40px 36px;
        }
        .contact-form h2 {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.025em;
          margin-bottom: 8px;
        }
        .contact-form .form-sub { color: var(--ink-secondary); font-size: 15px; margin-bottom: 32px; }
        .form-row { margin-bottom: 20px; }
        .form-row.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--ink-primary);
          margin-bottom: 8px;
        }
        .form-label .req { color: var(--rose-gold-2); }
        .form-label .opt {
          color: var(--ink-tertiary);
          font-weight: 400;
          letter-spacing: 0;
          text-transform: none;
          margin-left: 6px;
        }
        .form-input, .form-textarea, .form-select {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--hairline);
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink-primary);
          background: var(--surface-0);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus, .form-textarea:focus, .form-select:focus {
          outline: none;
          border-color: var(--rose-gold-2);
          box-shadow: 0 0 0 3px rgba(183, 117, 127, 0.12);
        }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit { width: 100%; justify-content: center; margin-top: 8px; }
        .form-note {
          text-align: center;
          margin-top: 20px;
          font-size: 13px;
          color: var(--ink-tertiary);
          line-height: 1.55;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .mockup-grid { grid-template-columns: 1fr; gap: 28px; }
          .pricing-strip { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; gap: 16px; }
          .capability-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 560px) {
          .process-steps { grid-template-columns: 1fr; }
        }
        @media (max-width: 780px) {
          .form-row.two-col { grid-template-columns: 1fr; }
          .contact-form { padding: 32px 24px 28px; }
          .hosting-callout { padding: 28px 24px; }
        }
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Website Design</span>
          <h1>
            Built around <span className="accent">your brand.</span>
          </h1>
          <p>
            Below are four examples of the range we work in — from quiet editorial to bold
            statement. We&apos;ll meet, talk through your business, then design{' '}
            <strong>two bespoke draft concepts</strong> for you to pick from. Iterate from there
            to the final build.
          </p>
          <div className="hero-cta">
            <a href="#enquiry" className="btn btn-primary">
              Send an enquiry
            </a>
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">Style range</span>
            <h2>Four examples of where we can take it.</h2>
            <p>
              These are <strong>not templates</strong>, and not options to pick from. They&apos;re
              just style references — a quick sense of the aesthetic range we work in, from quiet
              minimal to bold statement.
            </p>
            <p style={{ marginTop: '14px' }}>
              Your actual site starts with a discovery meeting and{' '}
              <strong>two bespoke draft concepts</strong> built around your business.
            </p>
          </div>

          <div className="mockup-grid">
            {/* MOCKUP 01 — EDITORIAL */}
            <div className="mockup-card">
              <div className="mockup-thumb">
                <img
                  src="/assets/website-design/mockup-1-editorial.jpg"
                  alt="Website mockup — Editorial style — warm cream background, large serif headline, single product photo."
                />
              </div>
              <div className="mockup-meta">
                <span className="num">01 · The Editorial</span>
                <h3>Premium minimal · restrained, confident.</h3>
                <p>
                  Warm cream backgrounds, large serif display headlines, generous whitespace, and a
                  single hero image. Quiet confidence — every element earns its place.
                </p>
                <div className="mockup-tags">
                  <span className="mockup-tag">Serif display</span>
                  <span className="mockup-tag">Cream + brown</span>
                  <span className="mockup-tag">Whitespace</span>
                  <span className="mockup-tag">Copper accent</span>
                </div>
                <span className="mockup-inspired">
                  <strong>Inspired by:</strong> Aesop · Apple · The Browser Company
                </span>
              </div>
            </div>

            {/* MOCKUP 02 — TECH */}
            <div className="mockup-card">
              <div className="mockup-thumb">
                <img
                  src="/assets/website-design/mockup-2-tech.jpg"
                  alt="Website mockup — Tech style — dark navy background with purple-blue gradient mesh and a modern dashboard preview."
                />
              </div>
              <div className="mockup-meta">
                <span className="num">02 · The Tech</span>
                <h3>Modern SaaS · sharp, technical, premium.</h3>
                <p>
                  Deep navy background with gradient mesh glows, clean grotesk sans, and crisp
                  product UI previews. The look of every great software company shipping today.
                </p>
                <div className="mockup-tags">
                  <span className="mockup-tag">Dark mode</span>
                  <span className="mockup-tag">Gradient mesh</span>
                  <span className="mockup-tag">Grotesk sans</span>
                  <span className="mockup-tag">Product UI</span>
                </div>
                <span className="mockup-inspired">
                  <strong>Inspired by:</strong> Linear · Stripe · Vercel · Anthropic
                </span>
              </div>
            </div>

            {/* MOCKUP 03 — BOUTIQUE */}
            <div className="mockup-card">
              <div className="mockup-thumb">
                <img
                  src="/assets/website-design/mockup-3-boutique.jpg"
                  alt="Website mockup — Boutique style — soft cream + sage + dusty rose, lifestyle photo of a hand holding a coffee cup."
                />
              </div>
              <div className="mockup-meta">
                <span className="num">03 · The Boutique</span>
                <h3>Warm boutique · approachable, modern, friendly.</h3>
                <p>
                  Soft pastel palettes, friendly sans typography, lifestyle photography, and
                  card-based layouts. Inviting and human — the small business that feels personal.
                </p>
                <div className="mockup-tags">
                  <span className="mockup-tag">Pastel palette</span>
                  <span className="mockup-tag">Lifestyle photo</span>
                  <span className="mockup-tag">Card grid</span>
                  <span className="mockup-tag">Friendly sans</span>
                </div>
                <span className="mockup-inspired">
                  <strong>Inspired by:</strong> Squarespace premium · Ghost · Notion
                </span>
              </div>
            </div>

            {/* MOCKUP 04 — STATEMENT */}
            <div className="mockup-card">
              <div className="mockup-thumb">
                <img
                  src="/assets/website-design/mockup-4-statement.jpg"
                  alt="Website mockup — Statement style — asymmetric bold layout with brick red display headline, mustard color block, brutalist design."
                />
              </div>
              <div className="mockup-meta">
                <span className="num">04 · The Statement</span>
                <h3>Bold editorial · distinctive, confident, memorable.</h3>
                <p>
                  Asymmetric layouts, oversized display type, bold color blocks, and strong
                  personality. The look of a business that doesn&apos;t blend in with the wallpaper.
                </p>
                <div className="mockup-tags">
                  <span className="mockup-tag">Asymmetric</span>
                  <span className="mockup-tag">Bold color blocks</span>
                  <span className="mockup-tag">Display serif</span>
                  <span className="mockup-tag">Brutalist edge</span>
                </div>
                <span className="mockup-inspired">
                  <strong>Inspired by:</strong> Robin Mastromarino · Mast · Awwwards picks
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="showcase is-alt">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">How it works</span>
            <h2>From your business to a live site.</h2>
            <p>
              Four steps, no surprises. Most websites land in 2–4 weeks depending on how fast you
              feed back.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="num-badge">01</div>
              <h3>Discovery meeting</h3>
              <p>
                We sit down and walk through your business — who you serve, what you sell, the
                tone you want, the examples you love (the four above are a starting reference).
              </p>
            </div>
            <div className="process-step">
              <div className="num-badge">02</div>
              <h3>2 draft concepts</h3>
              <p>
                We design <strong>two bespoke direction concepts</strong> shaped around your
                business — different aesthetics, both worth shipping. Sent to you to review.
              </p>
            </div>
            <div className="process-step">
              <div className="num-badge">03</div>
              <h3>Pick + iterate</h3>
              <p>
                You pick the direction you want to build out. We refine the chosen draft —
                feedback rounds, copy tweaks, layout adjustments — until it&apos;s right.
              </p>
            </div>
            <div className="process-step">
              <div className="num-badge">04</div>
              <h3>Build + deploy</h3>
              <p>
                We build the final 5-page site, deploy it on Vercel, hand over login + edit
                access, and walk you through how to update it yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND THE DESIGN — extra capabilities */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">Beyond the design</span>
            <h2>Build it bigger, if you need to.</h2>
            <p>
              The design direction is the foundation. We can also build in functionality your
              business actually needs — match the feel of a site you already love, take payments,
              run bookings, or add interactive tools. These are additional scope items, quoted
              separately in the discovery meeting.
            </p>
          </div>

          <div className="capability-grid">
            {/* CARD 1 — Reference site matching */}
            <div className="capability-card">
              <div className="ico" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>Got a website you already love?</h3>
              <p>
                Drop us the link in the enquiry form. We&apos;ll aim to bring the same feel and
                proportions across to your site, then re-skin it with your brand so it&apos;s
                yours — not a copy.
              </p>
            </div>

            {/* CARD 2 — Payments / bookings / enquiries */}
            <div className="capability-card">
              <div className="ico" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="13" rx="2" />
                  <line x1="2" y1="11" x2="22" y2="11" />
                  <line x1="6" y1="15.5" x2="9" y2="15.5" />
                </svg>
              </div>
              <h3>Payments, bookings, enquiry flows.</h3>
              <p>
                We can build a payment system directly into the site (Stripe / Square / similar),
                wire up a booking calendar, or set up smarter enquiry flows that route to your
                inbox — depending on what your business actually needs.
              </p>
              <span className="note"><strong>Quote in discovery:</strong> scope sets the cost.</span>
            </div>

            {/* CARD 3 — Interactive tools */}
            <div className="capability-card">
              <div className="ico" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Interactive tools, calculators, mini-apps.</h3>
              <p>
                Quote calculators, lead-qualifiers, simple customer dashboards, an Ai-powered
                chatbot trained on your business — we can build them into the site too. These
                are bigger pieces of work, so we walk through what you actually want in the
                discovery call before scoping.
              </p>
              <span className="note"><strong>Discussed in discovery:</strong> sized to fit.</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTING + PRICING */}
      <section className="showcase is-alt">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">Pricing</span>
            <h2>One build cost. Tiny ongoing fees.</h2>
            <p>
              Same price whichever style you pick. Choose to buy the website standalone, or get it
              bundled into the Ai Business Kick Starter for a small saving.
            </p>
          </div>

          <div className="pricing-strip">
            <div className="pricing-card">
              <span className="tag">Standalone</span>
              <h3>Website only</h3>
              <div className="price-row">$900</div>
              <ul>
                <li>5-page responsive site</li>
                <li>Discovery meeting + 2 bespoke draft concepts</li>
                <li>Vercel deploy + basic SEO</li>
                <li>Handover with login + edit access</li>
                <li style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                  Payments, bookings, and interactive tools quoted separately
                </li>
              </ul>
              <a href="#enquiry" className="btn btn-bronze" style={{ width: '100%', justifyContent: 'center' }}>
                Enquire about Website only
              </a>
            </div>

            <div className="pricing-card is-featured">
              <span className="tag">⭐ Bundled — best value</span>
              <h3>Standard Kick Starter</h3>
              <div className="price-row">$2,000</div>
              <ul>
                <li>Everything in Lite (brand kit · docs · social ads · videos)</li>
                <li><strong>+ Website Design + Deploy</strong></li>
                <li>+ Ai Platform Setup (1 platform)</li>
                <li>+ Booking integration + GBP setup</li>
              </ul>
              <a href="/kick-starter" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                See Kick Starter
              </a>
            </div>

            <div className="pricing-card">
              <span className="tag">Full kit</span>
              <h3>Plus Kick Starter</h3>
              <div className="price-row">$3,000</div>
              <ul>
                <li>Everything in Standard</li>
                <li>+ Brand Kit upgraded to Full Design</li>
                <li>+ Ai Integration (6 workflows)</li>
                <li>+ 3 months post-launch support included</li>
              </ul>
              <a href="/kick-starter" className="btn btn-bronze" style={{ width: '100%', justifyContent: 'center' }}>
                See Kick Starter
              </a>
            </div>
          </div>

          {/* HOSTING + PASS-THROUGH CALLOUT */}
          <div className="hosting-callout">
            <h3>We host. So you don&apos;t pay agency-grade fees.</h3>
            <p>
              Once your site is built, we host it ourselves on Vercel for <strong>$10/mo</strong> —
              far less than most agency hosting plans. The only other ongoing costs are{' '}
              <strong>your domain</strong> (paid directly to your registrar — we pass the cost
              through with no markup) and, if you add booking, <strong>Calendly Basic at $15/mo</strong>{' '}
              paid to Calendly directly. After handover, any post-launch edits are{' '}
              <strong>$100/hr</strong> — new offers or larger builds are POA.
            </p>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="contact-section" id="enquiry">
        <div className="contact-section-inner">
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="website-design-form"
          >
            <input type="hidden" name="access_key" value="bed839a8-b01a-443f-b32b-2187256a17c5" />
            <input
              type="hidden"
              name="subject"
              value="New Website Design enquiry — The Ai Advantage Co."
            />
            <input
              type="hidden"
              name="from_name"
              value="The Ai Advantage Co. — Website Design"
            />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <h2>Website Design enquiry</h2>
            <p className="form-sub">
              Tell us about your business and we&apos;ll call you back within one business day to
              set up the discovery meeting. The two draft concepts come after that — built around
              you, not picked from a list.
            </p>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="wd-name">
                  Name <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="wd-name" name="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="wd-email">
                  Email <span className="req">*</span>
                </label>
                <input className="form-input" type="email" id="wd-email" name="email" required />
              </div>
            </div>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="wd-phone">
                  Phone <span className="opt">(so we can call you back)</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="wd-phone"
                  name="phone"
                  placeholder="04xx xxx xxx"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="wd-business">
                  Business / Organisation <span className="opt">(optional)</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="wd-business"
                  name="business"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="wd-style">
                Which of the four examples speaks to you most? <span className="opt">(just a starting reference)</span>
              </label>
              <select className="form-select" id="wd-style" name="style_direction" defaultValue="">
                <option value="">Not sure yet — we&apos;ll work it out in the meeting</option>
                <option value="editorial">01 · The Editorial (Aesop / Apple)</option>
                <option value="tech">02 · The Tech (Linear / Stripe / Vercel)</option>
                <option value="boutique">03 · The Boutique (Squarespace / Ghost)</option>
                <option value="statement">04 · The Statement (Awwwards / Mast)</option>
                <option value="blend">A blend of two or more</option>
                <option value="other">Something different from all four</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="wd-reference">
                Got a website you already love? <span className="opt">(drop the URL — we&apos;ll aim for the same feel)</span>
              </label>
              <input
                className="form-input"
                type="url"
                id="wd-reference"
                name="reference_url"
                placeholder="https://..."
                autoComplete="url"
              />
            </div>

            <div className="form-row">
              <label className="form-label">
                Extras you might want <span className="opt">(we&apos;ll scope in discovery)</span>
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  <input type="checkbox" name="extras" value="payments" /> Payments
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  <input type="checkbox" name="extras" value="bookings" /> Bookings
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  <input type="checkbox" name="extras" value="enquiry-flows" /> Enquiry flows
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  <input type="checkbox" name="extras" value="interactive-tools" /> Interactive tools
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  <input type="checkbox" name="extras" value="ai-chatbot" /> Ai chatbot
                </label>
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="wd-option">
                Buying option
              </label>
              <select className="form-select" id="wd-option" name="option" defaultValue="">
                <option value="">Not sure — help me pick</option>
                <option value="website-only">Website only ($900)</option>
                <option value="standard">Bundled in Standard Kick Starter ($2,000)</option>
                <option value="plus">Bundled in Plus Kick Starter ($3,000)</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="wd-callback">
                Best time to call you
              </label>
              <select
                className="form-select"
                id="wd-callback"
                name="best_time_to_call"
                defaultValue=""
              >
                <option value="">Any time during business hours</option>
                <option value="morning">Morning (8am–12pm)</option>
                <option value="midday">Midday (12pm–2pm)</option>
                <option value="afternoon">Afternoon (2pm–5pm)</option>
                <option value="evening">Evening (5pm–7pm)</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="wd-message">
                Tell us about your business and what you need <span className="req">*</span>
              </label>
              <textarea
                className="form-textarea"
                id="wd-message"
                name="message"
                placeholder="A few sentences on what your business does, what your current site looks like (if any), and what you'd like the new one to do. Plain English is fine."
                required
              />
            </div>

            <button className="btn btn-primary form-submit" type="submit">
              Send enquiry
            </button>
            <p className="form-note">
              We&apos;ll call you back within one business day. We don&apos;t add you to a mailing
              list and we don&apos;t share your details.
            </p>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>
            Like what you see? <span className="accent">Let&apos;s draft yours.</span>
          </h2>
          <p>
            Send a short note via the enquiry form above. We&apos;ll set up the discovery meeting,
            draft two concepts shaped around your business, and you pick the direction from there.
          </p>
          <div className="ctas">
            <a href="#enquiry" className="btn btn-primary">
              Send enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
