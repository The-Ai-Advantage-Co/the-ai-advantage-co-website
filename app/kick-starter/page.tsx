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
        /* PAGE HERO */
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

        /* SERVICE BLOCKS — three tier blocks + section wrappers */
        .service-block {
          padding: 96px var(--gutter);
          position: relative;
        }
        .service-block:first-of-type { padding-top: 32px; }
        .service-block + .service-block { border-top: 1px solid var(--hairline); }
        .service-block.is-alt { background: var(--surface-1); }
        .service-block-inner {
          max-width: var(--max-w);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .service-block.is-reverse .service-block-inner { grid-template-columns: 1fr 1.1fr; }
        .service-block.is-reverse .service-content { order: 1; }
        .service-block.is-reverse .service-visual { order: 2; }
        .service-block:not(.is-reverse) .service-visual { order: 0; }
        .service-block:not(.is-reverse) .service-content { order: 1; }
        .service-visual {
          aspect-ratio: 4/3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
        }
        .service-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .service-content .label {
          color: var(--copper);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 18px;
          display: inline-block;
        }
        .service-content h2 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 44px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }
        .service-content .desc {
          font-size: 18px;
          line-height: 1.5;
          color: var(--ink-secondary);
          margin-bottom: 28px;
        }
        .service-detail { margin-bottom: 24px; }
        .service-detail h4 {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-primary);
          margin-bottom: 8px;
        }
        .service-detail p { font-size: 16px; line-height: 1.55; color: var(--ink-secondary); }
        .service-detail ul { list-style: none; margin-top: 8px; }
        .service-detail ul li {
          position: relative;
          padding-left: 22px;
          font-size: 16px;
          line-height: 1.55;
          color: var(--ink-primary);
          margin-bottom: 8px;
        }
        .service-detail ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 9px;
          width: 12px; height: 6px;
          border-left: 1.5px solid var(--rose-gold-2);
          border-bottom: 1.5px solid var(--rose-gold-2);
          transform: rotate(-45deg);
        }
        .service-content .cta-row {
          display: flex;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        /* PRICING EXTRAS GRID — à la carte + recurring fees */
        .pricing-extras {
          max-width: 880px;
          margin: 0 auto;
          padding: 32px 40px;
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 16px;
        }
        .pricing-extras-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 32px; }
        .pricing-extra-item {
          font-size: 14px;
          line-height: 1.5;
          color: var(--ink-secondary);
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .pricing-extra-item::before {
          content: '+';
          color: var(--copper);
          font-weight: 600;
          flex-shrink: 0;
        }
        .pricing-extra-item strong { color: var(--ink-primary); font-weight: 600; }

        /* FAQ */
        .faq { padding: 96px var(--gutter); background: var(--surface-cream); }
        .faq-inner { max-width: 880px; margin: 0 auto; }
        .faq .section-header { text-align: center; }
        .faq .section-header .eyebrow { display: inline-block; margin-bottom: 14px; }
        .faq .section-header h2 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 44px);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        .faq-item {
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 14px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .faq-item[open] { border-color: var(--rose-gold-2); }
        .faq-item summary {
          padding: 22px 28px;
          cursor: pointer;
          list-style: none;
          font-size: 17px;
          font-weight: 600;
          color: var(--ink-primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::after {
          content: '+';
          color: var(--copper);
          font-size: 24px;
          font-weight: 400;
          line-height: 1;
          transition: transform 0.25s ease;
        }
        .faq-item[open] summary::after { transform: rotate(45deg); }
        .faq-item .faq-body {
          padding: 0 28px 24px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-secondary);
        }
        .faq-item .faq-body p + p { margin-top: 10px; }

        /* ENQUIRY FORM — single column (no side panel) */
        .contact-section { padding: 96px var(--gutter); }
        .contact-section-inner {
          max-width: 720px;
          margin: 0 auto;
        }
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
          .service-block-inner,
          .service-block.is-reverse .service-block-inner { grid-template-columns: 1fr; gap: 32px; }
          .service-block.is-reverse .service-content,
          .service-block:not(.is-reverse) .service-content { order: 2; }
          .service-block.is-reverse .service-visual,
          .service-block:not(.is-reverse) .service-visual { order: 1; }
          .pricing-extras-grid { grid-template-columns: 1fr; }
          .form-row.two-col { grid-template-columns: 1fr; }
          .contact-form { padding: 32px 24px 28px; }
          .pricing-extras { padding: 24px 20px; }
        }
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

      {/* À LA CARTE */}
      <section className="service-block is-alt" id="itemised">
        <div className="service-block-inner" style={{ display: 'block', maxWidth: '1080px' }}>
          <div className="service-content" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label">Or build your own</span>
            <h2>Pick the pieces you need.</h2>
            <p className="desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
              Prefer to mix-and-match instead of picking a tier? Every item from the packages is
              available individually. Add what you need now, add the rest later.
            </p>
          </div>
          <div className="pricing-extras">
            <div className="pricing-extras-grid">
              <div className="pricing-extra-item">
                <span>
                  <strong>Brand Kit — Light Design</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$250</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Polish existing logo or simple wordmark · palette · fonts · style guide
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Brand Kit — Full Design</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$400</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Logo from scratch · 2 revisions · full identity · style guide
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Doc Template Pack</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$200</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Letterhead · quote · invoice · email signature · 1 SOP template (Word + PDF)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Ai Platform Setup</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$300</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    One platform · account · workspace · 5 saved prompts · user guide
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Additional Ai Platform</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>+$200/each</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Each extra platform set up to the same standard
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Ai Integration</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$50/workflow</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    1-page SOP per workflow · e.g. quote drafting, customer-email triage
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Website Design + Deploy</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$900</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    5 pages · responsive · Vercel deploy · basic SEO (sitemap, robots, metadata)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Booking Integration</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$100</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Calendly setup · branded · embedded on site · 1-hour training
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Handover Training</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$200</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    2-hour live walk-through · recording included
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Google Business Profile setup</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$100</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Create · verify · categorise · service areas
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Social Media Starter</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$250</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    LinkedIn + 1 other · profile · branded banner · bio · 3-post starter
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECURRING FEES */}
      <section className="service-block" id="recurring">
        <div className="service-block-inner" style={{ display: 'block', maxWidth: '960px' }}>
          <div className="service-content" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label">What you&apos;ll pay each month</span>
            <h2>Transparent. No surprises.</h2>
            <p className="desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
              The one-off package price covers the build. These are the ongoing fees — most paid
              directly to the provider, so there&apos;s no markup hidden in there.
            </p>
          </div>
          <div className="pricing-extras">
            <div className="pricing-extras-grid">
              <div className="pricing-extra-item">
                <span>
                  <strong>Website hosting (Vercel Basic)</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$10/mo</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Payable to The Ai Advantage Co. — covers your site staying live
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Vercel Pro upgrade</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>Current Vercel Pro price</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Only if you need Pro features · paid to Vercel directly
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Calendly Basic</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$15/mo</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Only if booking added · paid to Calendly directly
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Business email</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>~$8–10/mo per mailbox</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Google Workspace or Microsoft 365 · you arrange · we&apos;ll advise on which
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Domain name</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>~$15–25/yr</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Paid to your registrar directly · we&apos;ll recommend one
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Support retainer (optional)</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$100/mo</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    1 hour/month of small-business updates · larger work POA
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="faq-inner">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Common questions.</h2>
          </div>

          <details className="faq-item">
            <summary>How long does the whole thing take?</summary>
            <div className="faq-body">
              <p>
                <strong>Lite</strong> — usually about a week from kick-off to handover.
                <br />
                <strong>Standard</strong> — usually 3–4 weeks (most of that is your time on the brand
                and website content).
                <br />
                <strong>Plus</strong> — usually 5–6 weeks. Full custom brand design takes longer, and
                the AI integration workflows need real examples from your day-to-day.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What do I need to bring?</summary>
            <div className="faq-body">
              <p>
                A business name, any existing brand assets (if you have them), website content (we
                can help shape this), and a decision on which Ai platform you want set up. If you
                don&apos;t know which platform, we&apos;ll help you pick — that&apos;s usually the
                first 30 minutes of the kick-off call.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Who owns the brand kit, docs, and website after?</summary>
            <div className="faq-body">
              <p>
                You do. All source files are handed over to you. The website stays hosted with us at
                $10/mo for convenience, but you own the code and can migrate it any time. No lock-in.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Can I pay in instalments?</summary>
            <div className="faq-body">
              <p>
                Yes. The default is 50% deposit to start, 50% on handover. If you need a longer
                payment plan, send us a note via the enquiry form and we&apos;ll work something out.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What&apos;s not included?</summary>
            <div className="faq-body">
              <p>
                Custom software development, photography, copywriting beyond the 5 website pages,
                paid ad accounts (Google Ads, Meta), and any third-party subscriptions (your Ai
                platform plan, your email, your domain). We&apos;ll always tell you what something
                costs before you sign up.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Can I add items later?</summary>
            <div className="faq-body">
              <p>
                Yes — every à la carte item is available individually at the listed price. You can
                start with Lite and add Ai setup and a website in three months when you&apos;re
                ready. We keep your brand kit on file so it carries through.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="contact-section" id="enquiry">
        <div className="contact-section-inner">
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="kick-starter-form"
          >
            <input type="hidden" name="access_key" value="bed839a8-b01a-443f-b32b-2187256a17c5" />
            <input
              type="hidden"
              name="subject"
              value="New Kick Starter enquiry — The Ai Advantage Co."
            />
            <input
              type="hidden"
              name="from_name"
              value="The Ai Advantage Co. — Kick Starter"
            />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <h2>Send a Kick Starter enquiry</h2>
            <p className="form-sub">
              Fill this out and we&apos;ll call you back within one business day to talk through which
              tier fits.
            </p>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="ks-name">
                  Name <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="ks-name" name="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="ks-email">
                  Email <span className="req">*</span>
                </label>
                <input className="form-input" type="email" id="ks-email" name="email" required />
              </div>
            </div>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="ks-phone">
                  Phone <span className="opt">(so we can call you back)</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="ks-phone"
                  name="phone"
                  placeholder="04xx xxx xxx"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="ks-business">
                  Business / Organisation <span className="opt">(optional)</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="ks-business"
                  name="business"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="ks-tier">
                Tier interested in
              </label>
              <select className="form-select" id="ks-tier" name="tier" defaultValue="">
                <option value="">Not sure — help me pick</option>
                <option value="lite">Lite — Identity Starter — $500</option>
                <option value="standard">Standard — Business Kick Starter — $2,000</option>
                <option value="plus">Plus — Full Kick Starter — $3,000</option>
                <option value="custom">Custom (à la carte)</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="ks-callback">
                Best time to call you
              </label>
              <select
                className="form-select"
                id="ks-callback"
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
              <label className="form-label" htmlFor="ks-message">
                Tell us about your business and what you want help with{' '}
                <span className="req">*</span>
              </label>
              <textarea
                className="form-textarea"
                id="ks-message"
                name="message"
                placeholder="A few sentences on what your business does, where you're at, and what you'd like sorted. Plain English is fine."
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
            Not sure which tier fits? <span className="accent">Just ask.</span>
          </h2>
          <p>
            Send a short note via the enquiry form above and we&apos;ll call you back within one
            business day. We&apos;ll help you pick — or recommend you don&apos;t book if it&apos;s
            not the right fit.
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
