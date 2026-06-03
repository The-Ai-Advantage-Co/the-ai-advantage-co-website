import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Kit',
  description:
    'A complete brand identity built for you — logo, business cards, social ads, videos, and document templates. From $250 standalone, or bundled into the Ai Business Kick Starter from $500.',
  alternates: { canonical: '/brand-kit' },
};

export default function BrandKitPage() {
  return (
    <>
      <style>{`
        /* PAGE HERO */
        .page-hero { background: transparent !important; }
        .page-hero-bg { display: none !important; }
        .page-hero {
          position: relative;
          background: var(--surface-0);
          padding: 120px var(--gutter) 64px;
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
        .hero-logo-wrap {
          margin: 36px auto 0;
          max-width: 880px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 56px rgba(0,0,0,0.08);
        }
        .hero-logo-wrap img { width: 100%; height: auto; display: block; }

        /* SHOWCASE SECTIONS */
        .showcase {
          padding: 88px var(--gutter);
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

        /* LOGO SECTION */
        .logo-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 32px;
          align-items: stretch;
        }
        .logo-card {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(0,0,0,0.06);
          background: var(--surface-0);
        }
        .logo-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* STATIC AD MOSAIC */
        .static-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .static-card {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          background: var(--surface-0);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .static-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.10);
        }
        .static-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .static-card.is-portrait { grid-row: span 2; }

        /* VIDEO SHOWCASE — two rows: portraits + landscapes */
        .video-row {
          display: grid;
          gap: 16px;
        }
        .video-row.is-portrait { grid-template-columns: repeat(4, 1fr); }
        .video-row.is-landscape {
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 36px;
        }
        .video-row-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 14px;
        }
        .video-card {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(0,0,0,0.10);
          background: #000;
        }
        .video-card video {
          width: 100%;
          height: auto;
          display: block;
          background: #000;
        }
        .video-caption {
          padding: 10px 12px;
          background: var(--surface-0);
          font-size: 13px;
          color: var(--ink-secondary);
          text-align: center;
          border-top: 1px solid var(--hairline);
        }
        .video-caption strong { color: var(--ink-primary); font-weight: 600; }
        .video-row.is-landscape .video-caption { padding: 14px 16px; font-size: 14px; }

        /* BUSINESS CARDS */
        .card-options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .card-option-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }
        .card-option-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 22px;
          letter-spacing: -0.015em;
          margin-bottom: 18px;
          text-align: center;
        }
        .card-frame {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
          background: var(--surface-0);
          aspect-ratio: 7 / 4;
        }
        .card-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .card-label {
          text-align: center;
          margin-top: 12px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-tertiary);
        }

        /* DOC PREVIEWS */
        .doc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1080px;
          margin: 0 auto;
          align-items: start;
        }
        .doc-frame {
          background: var(--surface-0);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 18px 48px rgba(0,0,0,0.12);
          transform: rotate(-1deg);
          transition: transform 0.4s ease;
        }
        .doc-frame:nth-child(2) { transform: rotate(1deg); }
        .doc-frame:hover { transform: rotate(0deg) translateY(-4px); }
        .doc-frame img {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid var(--hairline);
          border-radius: 4px;
        }
        .doc-label {
          text-align: center;
          margin-top: 16px;
          font-size: 14px;
          color: var(--ink-secondary);
        }
        .doc-label strong { color: var(--ink-primary); font-weight: 600; display: block; margin-bottom: 2px; }

        /* PRICING */
        .pricing-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 920px;
          margin: 0 auto;
        }
        .pricing-card {
          background: var(--surface-0);
          border: 1px solid var(--hairline);
          border-radius: 18px;
          padding: 32px 28px;
          text-align: center;
        }
        .pricing-card.is-featured {
          border-color: var(--rose-gold-2);
          box-shadow: 0 18px 48px rgba(183,117,127,0.10);
        }
        .pricing-card .tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 14px;
        }
        .pricing-card h3 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .pricing-card .price-row {
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 700;
          color: var(--ink-primary);
          margin: 12px 0 16px;
        }
        .pricing-card .price-row .alt {
          color: var(--ink-tertiary);
          font-size: 20px;
          font-weight: 500;
        }
        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          text-align: left;
        }
        .pricing-card ul li {
          position: relative;
          padding-left: 22px;
          font-size: 15px;
          line-height: 1.5;
          color: var(--ink-primary);
          margin-bottom: 8px;
        }
        .pricing-card ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 7px;
          width: 12px; height: 6px;
          border-left: 1.5px solid var(--rose-gold-2);
          border-bottom: 1.5px solid var(--rose-gold-2);
          transform: rotate(-45deg);
        }

        /* ENQUIRY FORM (centered, single column — same pattern as kick-starter) */
        .contact-section { padding: 96px var(--gutter); }
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
        @media (max-width: 1080px) {
          .static-grid { grid-template-columns: repeat(3, 1fr); }
          .video-row.is-portrait { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 780px) {
          .logo-grid { grid-template-columns: 1fr; }
          .static-grid { grid-template-columns: repeat(2, 1fr); }
          .video-row.is-portrait { grid-template-columns: repeat(2, 1fr); }
          .video-row.is-landscape { grid-template-columns: 1fr; }
          .card-option-group { grid-template-columns: 1fr; gap: 20px; }
          .doc-grid { grid-template-columns: 1fr; }
          .pricing-strip { grid-template-columns: 1fr; }
          .form-row.two-col { grid-template-columns: 1fr; }
          .contact-form { padding: 32px 24px 28px; }
        }
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Brand Kit</span>
          <h1>
            A complete brand identity, <span className="accent">ready to use.</span>
          </h1>
          <p>
            Logo, business cards, social ads, intro videos, and document templates — designed and
            handed over as a working kit. Buy standalone from $250, or get the lot bundled into the
            Lite Kick Starter from $500.
          </p>
          <div className="hero-cta">
            <a href="#enquiry" className="btn btn-primary">
              Send an enquiry
            </a>
          </div>
        </div>
        <div className="hero-logo-wrap">
          <img
            src="/assets/brand-kit/logo-hero.jpg"
            alt="The Ai Advantage Co. logo — gilded gold A on a warm cream background with circuit lines."
          />
        </div>
      </section>

      {/* LOGO */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">01 · Logo Design</span>
            <h2>10 logo designs · every use case.</h2>
            <p>
              Primary lockup, monogram, square, dark and light variants, favicon-ready — so the
              brand reads cleanly everywhere from a business card to a website tab.
            </p>
          </div>
          <div className="logo-grid">
            <div className="logo-card">
              <img
                src="/assets/brand-kit/logo-hero.jpg"
                alt="Primary horizontal logo lockup."
              />
            </div>
            <div className="logo-card">
              <img
                src="/assets/brand-kit/logo-variant.jpg"
                alt="Square / monogram logo variant."
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATIC ADS */}
      <section className="showcase is-alt">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">02 · Social Static Ads</span>
            <h2>10 ready-to-post social ads.</h2>
            <p>
              Sized for Facebook, Instagram, LinkedIn, and X — landscape, square, and story
              formats. Same brand. Ready to schedule.
            </p>
          </div>
          <div className="static-grid">
            <div className="static-card">
              <img src="/assets/brand-kit/static-1-premium-light-woman.jpg" alt="Static ad: Get more done in less time, light premium style." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-2-premium-dark-woman.jpg" alt="Static ad: Learn the basics in less time, dark premium style." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-3-premium-dark-time.jpg" alt="Static ad: Get more done in less time, dark variant." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-4-premium-light-man.jpg" alt="Static ad: Work smarter not harder, light premium style." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-5-social-time-back.jpg" alt="Social ad: Time back is the new advantage." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-6-social-align.jpg" alt="Social ad: Align your time, grow your business." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-7-premium-time-back-glasses.jpg" alt="Static ad: Time back is the new advantage, man with glasses holding business card, premium light style." />
            </div>
            <div className="static-card">
              <img src="/assets/brand-kit/static-8-social-feature-bullets.jpg" alt="Social ad: Get more done in less time, purple accent feature bullets." />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">03 · Video Ads</span>
            <h2>A library of brand videos.</h2>
            <p>
              Vertical cuts for Reels, TikTok, and Stories; landscape cuts for Facebook, LinkedIn,
              and YouTube. A mix of polished brand spots, UGC-style intros, and end-card outros —
              all on-brand and ready to schedule.
            </p>
          </div>

          {/* PORTRAIT / VERTICAL */}
          <div className="video-row-label">Vertical · Reels / TikTok / Stories</div>
          <div className="video-row is-portrait">
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-1-approved-2.jpg" playsInline>
                <source src="/assets/brand-kit/video-1-approved-2.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Brand Spot 01</strong></div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-2-approved-7.jpg" playsInline>
                <source src="/assets/brand-kit/video-2-approved-7.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Brand Spot 02</strong></div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-4-approved-4.jpg" playsInline>
                <source src="/assets/brand-kit/video-4-approved-4.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Brand Spot 03</strong></div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-5-approved-5.jpg" playsInline>
                <source src="/assets/brand-kit/video-5-approved-5.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Brand Spot 04</strong></div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-6-approved-6.jpg" playsInline>
                <source src="/assets/brand-kit/video-6-approved-6.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Brand Spot 05</strong></div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-7-approved-8.jpg" playsInline>
                <source src="/assets/brand-kit/video-7-approved-8.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Brand Spot 06</strong></div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-10-ugc-3.jpg" playsInline>
                <source src="/assets/brand-kit/video-10-ugc-3.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>UGC-style</strong></div>
            </div>
          </div>

          {/* LANDSCAPE */}
          <div className="video-row-label" style={{ marginTop: '36px' }}>Landscape · Facebook / LinkedIn / YouTube</div>
          <div className="video-row is-landscape">
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-3-approved-11.jpg" playsInline>
                <source src="/assets/brand-kit/video-3-approved-11.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Social Spot 01</strong> · Landscape</div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-8-approved-9.jpg" playsInline>
                <source src="/assets/brand-kit/video-8-approved-9.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Social Spot 02</strong> · Landscape</div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-9-approved-10.jpg" playsInline>
                <source src="/assets/brand-kit/video-9-approved-10.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>Social Spot 03</strong> · Landscape</div>
            </div>
            <div className="video-card">
              <video controls preload="none" poster="/assets/brand-kit/video-11-outro.jpg" playsInline>
                <source src="/assets/brand-kit/video-11-outro.mp4" type="video/mp4" />
              </video>
              <div className="video-caption"><strong>End-card / Outro</strong> · Landscape</div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CARDS */}
      <section className="showcase is-alt">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">04 · Business Cards</span>
            <h2>2 business card designs.</h2>
            <p>
              Print-ready front and back in both light and dark options, built to match the logo
              and palette. Hand them out tomorrow.
            </p>
          </div>
          <div className="card-options">
            {/* LIGHT OPTION */}
            <div>
              <div className="card-option-label">Light option</div>
              <div className="card-option-group">
                <div>
                  <div className="card-frame">
                    <img src="/assets/brand-kit/card-light-front.jpg" alt="Business card — light option, front with gold logo on cream." />
                  </div>
                  <div className="card-label">Front</div>
                </div>
                <div>
                  <div className="card-frame">
                    <img src="/assets/brand-kit/card-light-back.jpg" alt="Business card — light option, back with contact details." />
                  </div>
                  <div className="card-label">Back</div>
                </div>
              </div>
            </div>

            {/* DARK OPTION */}
            <div>
              <div className="card-option-label">Dark option</div>
              <div className="card-option-group">
                <div>
                  <div className="card-frame">
                    <img src="/assets/brand-kit/card-dark-front.jpg" alt="Business card — dark option, front with gold logo on black." />
                  </div>
                  <div className="card-label">Front</div>
                </div>
                <div>
                  <div className="card-frame">
                    <img src="/assets/brand-kit/card-dark-back.jpg" alt="Business card — dark option, back with contact details." />
                  </div>
                  <div className="card-label">Back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">05 · Document Templates</span>
            <h2>Up to 10 branded document templates.</h2>
            <p>
              Letterheads, session plans, intake forms, checklists, proposals, invoices — all
              on-brand and editable in Word + PDF.
            </p>
          </div>
          <div className="doc-grid">
            <div>
              <div className="doc-frame">
                <img src="/assets/brand-kit/doc-session-plan.jpg" alt="Sample session plan document — letterheaded layout." />
              </div>
              <div className="doc-label">
                <strong>Session Plan</strong>
                Letterheaded · Word + PDF
              </div>
            </div>
            <div>
              <div className="doc-frame">
                <img src="/assets/brand-kit/doc-intake-form.jpg" alt="Pre-session intake form — client-facing PDF." />
              </div>
              <div className="doc-label">
                <strong>Pre-Session Intake Form</strong>
                Client-facing · Fillable PDF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="showcase is-alt">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">Pricing</span>
            <h2>Two ways to buy.</h2>
            <p>
              Buy the Brand Kit standalone at à la carte pricing, or get every deliverable above
              bundled into the Lite Kick Starter package.
            </p>
          </div>
          <div className="pricing-strip">
            <div className="pricing-card">
              <span className="tag">À la carte</span>
              <h3>Brand Kit only</h3>
              <div className="price-row">
                $250 <span className="alt">/ $350</span>
              </div>
              <ul>
                <li>
                  <strong>Light Design — $250</strong>
                </li>
                <li>Wordmark or redesign of existing logo</li>
                <li>Palette, fonts, 1-page style guide</li>
                <li style={{ marginTop: '14px' }}>
                  <strong>Full Design — $350</strong>
                </li>
                <li>Logo from scratch OR redesign</li>
                <li>Deeper revisions · full identity</li>
              </ul>
              <a href="#enquiry" className="btn btn-bronze" style={{ width: '100%', justifyContent: 'center' }}>
                Enquire about Brand Kit
              </a>
            </div>

            <div className="pricing-card is-featured">
              <span className="tag">⭐ Bundled — best value</span>
              <h3>Lite Kick Starter</h3>
              <div className="price-row">$500</div>
              <ul>
                <li>1.5–2 hour discovery meeting</li>
                <li>10 logo designs for different uses</li>
                <li>2 business card designs</li>
                <li>10 static social media ads</li>
                <li>2 × 40-second social videos</li>
                <li>2 × 40-second UGC-style videos</li>
                <li>Up to 10 document templates</li>
                <li>Handover training (2 hours)</li>
              </ul>
              <a href="/kick-starter" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                See Kick Starter
              </a>
            </div>
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
            id="brand-kit-form"
          >
            <input type="hidden" name="access_key" value="bed839a8-b01a-443f-b32b-2187256a17c5" />
            <input
              type="hidden"
              name="subject"
              value="New Brand Kit enquiry — The Ai Advantage Co."
            />
            <input
              type="hidden"
              name="from_name"
              value="The Ai Advantage Co. — Brand Kit"
            />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <h2>Brand Kit enquiry</h2>
            <p className="form-sub">
              Fill this out and we&apos;ll call you back within one business day to talk through
              which option fits.
            </p>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="bk-name">
                  Name <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="bk-name" name="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="bk-email">
                  Email <span className="req">*</span>
                </label>
                <input className="form-input" type="email" id="bk-email" name="email" required />
              </div>
            </div>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="bk-phone">
                  Phone <span className="opt">(so we can call you back)</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="bk-phone"
                  name="phone"
                  placeholder="04xx xxx xxx"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="bk-business">
                  Business / Organisation <span className="opt">(optional)</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="bk-business"
                  name="business"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="bk-option">
                Option interested in
              </label>
              <select className="form-select" id="bk-option" name="option" defaultValue="">
                <option value="">Not sure — help me pick</option>
                <option value="brand-light">Brand Kit — Light Design ($250)</option>
                <option value="brand-full">Brand Kit — Full Design ($350)</option>
                <option value="lite-kick-starter">Lite Kick Starter package ($500)</option>
                <option value="larger">Standard or Plus Kick Starter</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="bk-callback">
                Best time to call you
              </label>
              <select
                className="form-select"
                id="bk-callback"
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
              <label className="form-label" htmlFor="bk-message">
                Tell us about your business and what you need{' '}
                <span className="req">*</span>
              </label>
              <textarea
                className="form-textarea"
                id="bk-message"
                name="message"
                placeholder="A few sentences on your business and which deliverables you're most interested in. Redesign of an existing logo, or build from scratch? Any colours or styles you like? Plain English is fine."
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
            Like what you see? <span className="accent">Let&apos;s build yours.</span>
          </h2>
          <p>
            Send a short note via the enquiry form above and we&apos;ll call you back within one
            business day to talk through which option fits.
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
