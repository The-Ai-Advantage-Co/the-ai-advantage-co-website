import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'One-on-one Ai coaching, small-business sessions, and team training. Practical, tailored, and built around what you actually need to get done.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
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
        @media (max-width: 980px) {
          .service-block-inner,
          .service-block.is-reverse .service-block-inner { grid-template-columns: 1fr; gap: 32px; }
          .service-block.is-reverse .service-content,
          .service-block:not(.is-reverse) .service-content { order: 2; }
          .service-block.is-reverse .service-visual,
          .service-block:not(.is-reverse) .service-visual { order: 1; }
        }
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Services</span>
          <h1>
            Three ways we <span className="accent">work together</span>.
          </h1>
          <p>
            Practical Ai coaching for individuals, small businesses, and teams. Every session is
            shaped around your actual role, your tools, and the problem you&apos;re trying to solve.
          </p>
        </div>
      </section>

      {/* SERVICE 1 · 1:1 SINGLE SESSION */}
      <section className="service-block" id="single">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-woman-table.jpg"
              alt="A professional reviewing AI tools at a warm cafe table."
            />
          </div>
          <div className="service-content">
            <span className="label">1:1 Coaching</span>
            <h2>Single Session</h2>
            <p className="desc">
              One focused hour with a coach who&apos;s done this before. Bring a real problem; leave
              with a real answer.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Individuals and professionals who want to get started — or who have a specific
                blocker they want unstuck. New to Ai or curious? This is the lowest-risk way in.
              </p>
            </div>
            <div className="service-detail">
              <h4>What it helps with</h4>
              <ul>
                <li>
                  Choosing the right tool (Copilot, ChatGPT, Claude, Gemini) for your work
                </li>
                <li>Writing prompts that actually return useful answers</li>
                <li>Walking through a real task together on screen — you drive, we guide</li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>How it&apos;s delivered</h4>
              <p>
                60 minutes, online or face-to-face. Pre-session intake form to make every minute
                count. Platform user guides included so you can keep going on your own.
              </p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', color: 'var(--ink-tertiary)', fontSize: '14px' }}>
                This is coaching — we teach and show you how. It doesn&apos;t include building
                workflows, writing documents, or implementation work done for you after the session.
              </p>
            </div>
            <div className="cta-row">
              <a
                href="https://calendly.com/theaiadvantagecoadmin/single-ai-coaching-session-60-mins-zoom-100"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book Online (Zoom)
              </a>
              <a
                href="https://calendly.com/theaiadvantagecoadmin/single-ai-coaching-session-60-mins-in-person"
                target="_blank"
                rel="noopener"
                className="btn btn-bronze"
              >
                Book Face-to-Face
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2 · KICK-START PACK */}
      <section className="service-block is-alt is-reverse" id="kickstart">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-man-glasses.jpg"
              alt="A coaching session in progress in a warm professional setting."
            />
          </div>
          <div className="service-content">
            <span className="label">Most popular · 1:1 coaching pack</span>
            <h2>Kick-Start Pack</h2>
            <p className="desc">
              Three sessions, one platform, one clear arc. By the end you&apos;re not &ldquo;trying
              out Ai&rdquo; — you&apos;re using it.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                People who want to get genuinely confident with Ai — not just dabble. Pick one
                platform; we&apos;ll take you from setup to applying it to your actual work in three
                structured sessions.
              </p>
            </div>
            <div className="service-detail">
              <h4>The three sessions</h4>
              <ul>
                <li>
                  <strong>01 · Discovery &amp; setup</strong> — what you do, what&apos;s slow,
                  where Ai fits
                </li>
                <li>
                  <strong>02 · Application</strong> — working your real tasks live, learning to
                  build the workflows yourself
                </li>
                <li>
                  <strong>03 · Close-out &amp; next steps</strong> — what to keep, what to drop,
                  what to try next
                </li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>How it&apos;s delivered</h4>
              <p>
                3 × 60 minutes, online or face-to-face. Personalised action plan after session 2.
                Platform user guides included so you can refer back any time.
              </p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', color: 'var(--ink-tertiary)', fontSize: '14px' }}>
                Coaching only — we teach you how to use the tools yourself. Doesn&apos;t include
                implementation, automation builds, or ongoing support between sessions.
              </p>
            </div>
            <div className="cta-row">
              <a
                href="https://calendly.com/theaiadvantagecoadmin/ai-kick-start-pack-x3-60-mins-250-zoom"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book Online (Zoom)
              </a>
              <a
                href="https://calendly.com/theaiadvantagecoadmin/ai-kick-start-pack-x3-60-mins-250-face-to-face"
                target="_blank"
                rel="noopener"
                className="btn btn-bronze"
              >
                Book Face-to-Face
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3 · TEAM / BUSINESS */}
      <section className="service-block" id="team">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-woman-armchair.jpg"
              alt="A small team gathered around a laptop in a warm coworking space."
            />
          </div>
          <div className="service-content">
            <span className="label">Teams &amp; Business</span>
            <h2>Small Business &amp; Team Sessions</h2>
            <p className="desc">
              A focused team session built around your business — not a generic Ai 101 deck.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Small businesses (ideally up to ~5 people) and team leaders who want everyone on the
                same page about Ai — what to use, what to skip, and how to apply it across roles.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s covered</h4>
              <ul>
                <li>Pre-session intake from the business owner / team lead</li>
                <li>Tailored session plan — admin, ops, customer-facing, leadership</li>
                <li>Real-world workflows worked through live</li>
                <li>Q&amp;A so every team member leaves with something useful</li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Formats</h4>
              <p>
                <strong>Small Business Team Intro</strong> — 1 × 2-hour group session · up to ~5 people · $250
                <br />
                <strong>Custom Business Training</strong> — 1 × up to 4-hour session · role-based
                breakouts (admin, ops, managers) · $500
                <br />
                <strong>Business-Supported Individual Coaching</strong> — a business books Kick-Start
                Packs for individual staff members · scoped per person · POA
              </p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', color: 'var(--ink-tertiary)', fontSize: '14px' }}>
                All formats are coaching sessions — we don&apos;t build systems, write SOPs, or do
                implementation work for you. For done-for-you setup, see the{' '}
                <a href="/kick-starter" style={{ color: 'var(--copper)' }}>Kick Starter</a>.
              </p>
            </div>
            <div className="cta-row">
              <a
                href="https://calendly.com/theaiadvantagecoadmin/small-business-team-intro-2-hrs-250-zoom"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book Online (Zoom)
              </a>
              <a
                href="https://calendly.com/theaiadvantagecoadmin/small-business-team-intro-2-hrs-250-face-to-face"
                target="_blank"
                rel="noopener"
                className="btn btn-bronze"
              >
                Book Face-to-Face
              </a>
              <a href="/contact?service=custom-training" className="btn btn-link">
                Enquire about custom training
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          USER GUIDES SHOWCASE
          ============================================================ */}
      <section className="guides-showcase" id="user-guides">
        <style>{`
          .guides-showcase {
            padding: 96px var(--gutter);
            background: var(--surface-1);
            border-top: 1px solid var(--hairline);
          }
          .guides-showcase-inner {
            max-width: var(--max-w);
            margin: 0 auto;
          }
          .guides-showcase .section-header {
            text-align: center;
            max-width: 780px;
            margin: 0 auto 56px;
          }
          .guides-showcase .section-header .eyebrow {
            color: var(--copper);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            margin-bottom: 18px;
            display: block;
          }
          .guides-showcase .section-header h2 {
            font-family: var(--font-display);
            font-weight: 700;
            font-size: clamp(32px, 3.5vw, 44px);
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 18px;
          }
          .guides-showcase .section-header h2 .accent {
            color: var(--gold-1);
            font-style: italic;
            font-weight: 700;
          }
          .guides-showcase .section-header .lead {
            font-size: 18px;
            line-height: 1.55;
            color: var(--ink-secondary);
          }

          /* Stats bar */
          .guides-stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin: 0 auto 56px;
            flex-wrap: wrap;
          }
          .guides-stat {
            text-align: center;
          }
          .guides-stat .stat-number {
            font-family: var(--font-display);
            font-size: clamp(32px, 3vw, 48px);
            font-weight: 700;
            color: var(--copper);
            line-height: 1;
            margin-bottom: 6px;
          }
          .guides-stat .stat-label {
            font-size: 14px;
            color: var(--ink-secondary);
            letter-spacing: 0.04em;
          }

          /* Guide types info */
          .guides-types {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 64px;
          }
          .guide-type-card {
            background: var(--surface-0);
            border: 1px solid var(--hairline);
            border-radius: 16px;
            padding: 32px 28px;
            text-align: center;
          }
          .guide-type-card .type-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--copper), var(--gold-1));
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            color: #fff;
            font-size: 20px;
            font-weight: 700;
          }
          .guide-type-card h4 {
            font-family: var(--font-display);
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--ink-primary);
          }
          .guide-type-card p {
            font-size: 15px;
            line-height: 1.5;
            color: var(--ink-secondary);
          }

          /* Subsection headers */
          .guides-showcase .sub-header {
            text-align: center;
            margin-bottom: 36px;
          }
          .guides-showcase .sub-header h3 {
            font-family: var(--font-display);
            font-weight: 700;
            font-size: clamp(22px, 2.5vw, 30px);
            letter-spacing: -0.02em;
            margin-bottom: 8px;
          }
          .guides-showcase .sub-header p {
            font-size: 16px;
            color: var(--ink-secondary);
          }

          /* Video grid */
          .guides-video-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 64px;
          }
          .guides-video-grid .video-card:nth-child(4),
          .guides-video-grid .video-card:nth-child(5) {
            /* Centre the last two under the top three */
          }
          .video-card {
            border-radius: 14px;
            overflow: hidden;
            background: var(--surface-0);
            border: 1px solid var(--hairline);
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          }
          .video-card video {
            width: 100%;
            display: block;
            aspect-ratio: 16/9;
            object-fit: cover;
            background: #111;
          }
          .video-card .video-label {
            padding: 14px 18px;
          }
          .video-card .video-label span {
            display: block;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--copper);
            margin-bottom: 4px;
          }
          .video-card .video-label h4 {
            font-size: 15px;
            font-weight: 600;
            color: var(--ink-primary);
            line-height: 1.3;
          }

          /* Guide thumbnail grid */
          .guides-thumb-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 64px;
          }
          .guide-thumb {
            border-radius: 12px;
            overflow: hidden;
            background: var(--surface-0);
            border: 1px solid var(--hairline);
            box-shadow: 0 4px 16px rgba(0,0,0,0.04);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .guide-thumb:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.08);
          }
          .guide-thumb img {
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
            display: block;
          }
          .guide-thumb .thumb-info {
            padding: 12px 14px;
          }
          .guide-thumb .thumb-platform {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--copper);
            margin-bottom: 3px;
          }
          .guide-thumb .thumb-title {
            font-size: 13px;
            font-weight: 600;
            color: var(--ink-primary);
            line-height: 1.3;
          }
          .guide-thumb .thumb-type {
            font-size: 11px;
            color: var(--ink-tertiary);
            margin-top: 2px;
          }

          /* Access callout */
          .guides-access-callout {
            background: var(--surface-0);
            border: 1px solid var(--hairline);
            border-radius: 20px;
            padding: 48px;
            text-align: center;
            max-width: 780px;
            margin: 0 auto;
          }
          .guides-access-callout h3 {
            font-family: var(--font-display);
            font-weight: 700;
            font-size: clamp(22px, 2.5vw, 28px);
            letter-spacing: -0.02em;
            margin-bottom: 16px;
          }
          .guides-access-callout p {
            font-size: 16px;
            line-height: 1.55;
            color: var(--ink-secondary);
            margin-bottom: 12px;
          }
          .guides-access-callout .access-steps {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin: 28px 0;
            flex-wrap: wrap;
          }
          .guides-access-callout .access-step {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .guides-access-callout .step-num {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--copper);
            color: #fff;
            font-size: 13px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .guides-access-callout .step-text {
            font-size: 15px;
            color: var(--ink-primary);
            font-weight: 500;
          }
          .guides-access-callout .cta-row {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin-top: 28px;
            flex-wrap: wrap;
          }

          /* 5-col bottom row centering for video grid */
          .guides-video-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            justify-content: center;
            margin-bottom: 64px;
          }
          .guides-video-wrap .video-card {
            flex: 0 1 calc(33.333% - 16px);
            min-width: 280px;
          }

          @media (max-width: 980px) {
            .guides-types { grid-template-columns: 1fr; gap: 20px; }
            .guides-video-wrap .video-card { flex: 0 1 calc(50% - 12px); min-width: 260px; }
            .guides-thumb-grid { grid-template-columns: repeat(2, 1fr); }
            .guides-stats { gap: 24px; }
            .guides-access-callout { padding: 32px 24px; }
            .guides-access-callout .access-steps { flex-direction: column; align-items: center; gap: 16px; }
          }
          @media (max-width: 560px) {
            .guides-video-wrap .video-card { flex: 0 1 100%; }
            .guides-thumb-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
            .guides-stat .stat-number { font-size: 32px; }
          }
        `}</style>

        <div className="guides-showcase-inner">
          {/* Section Header */}
          <div className="section-header">
            <span className="eyebrow">Included with every session</span>
            <h2>
              Over 100 user guides. <span className="accent">Four platforms.</span>
            </h2>
            <p className="lead">
              Every coaching session includes full access to our guide library — covering
              Copilot, ChatGPT, Claude, and Gemini. Master guides, focused topic guides,
              role-specific playbooks, instructional videos, and prompt libraries — all written
              in plain English and built for people who want to get things done.
            </p>
          </div>

          {/* Stats */}
          <div className="guides-stats">
            <div className="guides-stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">User Guides</div>
            </div>
            <div className="guides-stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Ai Platforms</div>
            </div>
            <div className="guides-stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Role Playbooks</div>
            </div>
            <div className="guides-stat">
              <div className="stat-number">5</div>
              <div className="stat-label">Instructional Videos</div>
            </div>
          </div>

          {/* Guide Types */}
          <div className="guides-types">
            <div className="guide-type-card">
              <div className="type-icon">M</div>
              <h4>Master Guides</h4>
              <p>
                Comprehensive references for each platform — ChatGPT, Claude, Gemini, and
                Copilot. Everything in one place. Start here.
              </p>
            </div>
            <div className="guide-type-card">
              <div className="type-icon">T</div>
              <h4>Topic &amp; Feature Guides</h4>
              <p>
                Shorter, focused guides on specific features — prompting, memory, voice,
                data analysis, image generation, integrations, and more.
              </p>
            </div>
            <div className="guide-type-card">
              <div className="type-icon">R</div>
              <h4>Role Playbooks</h4>
              <p>
                Tailored for Educators, Engineers, Small Business Owners, and Ops &amp; Admin
                professionals. Practical workflows for your actual role.
              </p>
            </div>
          </div>

          {/* Instructional Videos */}
          <div className="sub-header">
            <h3>Instructional Videos — Did You Know?</h3>
            <p>
              Short walkthroughs showing what Copilot can actually do across Microsoft 365.
              Real examples, not marketing demos.
            </p>
          </div>

          <div className="guides-video-wrap">
            <div className="video-card">
              <video
                controls
                preload="metadata"
                poster="/assets/videos/copilot-word-poster.jpg"
              >
                <source src="/assets/videos/copilot-word.mp4" type="video/mp4" />
              </video>
              <div className="video-label">
                <span>Copilot in Word</span>
                <h4>Draft, rewrite, and summarise documents with Ai</h4>
              </div>
            </div>
            <div className="video-card">
              <video
                controls
                preload="metadata"
                poster="/assets/videos/copilot-excel-poster.jpg"
              >
                <source src="/assets/videos/copilot-excel.mp4" type="video/mp4" />
              </video>
              <div className="video-label">
                <span>Copilot in Excel</span>
                <h4>Analyse data, build formulas, and generate insights</h4>
              </div>
            </div>
            <div className="video-card">
              <video
                controls
                preload="metadata"
                poster="/assets/videos/copilot-powerpoint-poster.jpg"
              >
                <source src="/assets/videos/copilot-powerpoint.mp4" type="video/mp4" />
              </video>
              <div className="video-label">
                <span>Copilot in PowerPoint</span>
                <h4>Create presentations and slides from prompts</h4>
              </div>
            </div>
            <div className="video-card">
              <video
                controls
                preload="metadata"
                poster="/assets/videos/copilot-teams-poster.jpg"
              >
                <source src="/assets/videos/copilot-teams.mp4" type="video/mp4" />
              </video>
              <div className="video-label">
                <span>Copilot in Teams</span>
                <h4>Meeting summaries, action items, and catch-ups</h4>
              </div>
            </div>
            <div className="video-card">
              <video
                controls
                preload="metadata"
                poster="/assets/videos/copilot-agents-poster.jpg"
              >
                <source src="/assets/videos/copilot-agents.mp4" type="video/mp4" />
              </video>
              <div className="video-label">
                <span>Copilot Agents</span>
                <h4>Build autonomous agents that handle tasks for you</h4>
              </div>
            </div>
          </div>

          {/* Guide Preview Thumbnails */}
          <div className="sub-header">
            <h3>A Sample of What&apos;s Inside</h3>
            <p>
              From comprehensive master guides to focused feature walkthroughs and role-specific
              playbooks — here&apos;s a preview of what you get access to.
            </p>
          </div>

          <div className="guides-thumb-grid">
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143715_0d2355d6-7891-496f-b110-2a8df851844a.jpeg"
                alt="Master Guide — ChatGPT"
              />
              <div className="thumb-info">
                <div className="thumb-platform">ChatGPT</div>
                <div className="thumb-title">Master Guide</div>
                <div className="thumb-type">Comprehensive Reference</div>
              </div>
            </div>
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143720_9aadbb95-11fd-4ced-9c21-d4749971a370.png"
                alt="Master Guide — Copilot"
              />
              <div className="thumb-info">
                <div className="thumb-platform">Copilot</div>
                <div className="thumb-title">Master Guide</div>
                <div className="thumb-type">Comprehensive Reference</div>
              </div>
            </div>
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143731_8800d573-820e-49b1-82ab-8e912601a8d7.jpeg"
                alt="Educator's AI Playbook — Claude"
              />
              <div className="thumb-info">
                <div className="thumb-platform">Claude</div>
                <div className="thumb-title">Educator&apos;s AI Playbook</div>
                <div className="thumb-type">Role Playbook</div>
              </div>
            </div>
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143734_d34fa891-38bf-40f5-acf1-323a0fb2b7d1.jpeg"
                alt="Engineer's AI Playbook — ChatGPT"
              />
              <div className="thumb-info">
                <div className="thumb-platform">ChatGPT</div>
                <div className="thumb-title">Engineer&apos;s AI Playbook</div>
                <div className="thumb-type">Role Playbook</div>
              </div>
            </div>
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143757_de8b446f-bcbc-4914-8bff-63b990184c99.png"
                alt="ChatGPT 101 — Getting Started"
              />
              <div className="thumb-info">
                <div className="thumb-platform">ChatGPT</div>
                <div className="thumb-title">ChatGPT 101</div>
                <div className="thumb-type">Core Guide</div>
              </div>
            </div>
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143742_8dd6e008-8683-4ded-9cf3-29799c28d3e2.png"
                alt="Small Business Owner's AI Playbook — Copilot"
              />
              <div className="thumb-info">
                <div className="thumb-platform">Copilot</div>
                <div className="thumb-title">Small Business Playbook</div>
                <div className="thumb-type">Role Playbook</div>
              </div>
            </div>
            <div className="guide-thumb">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D3swqoskWbIdTP2lieGkLfsKtF/hf_20260605_143718_40bab962-a179-43cc-95e0-2a2108203208.jpeg"
                alt="Master Guide — Gemini"
              />
              <div className="thumb-info">
                <div className="thumb-platform">Gemini</div>
                <div className="thumb-title">Master Guide</div>
                <div className="thumb-type">Comprehensive Reference</div>
              </div>
            </div>
          </div>

          {/* Access Info Callout */}
          <div className="guides-access-callout">
            <h3>How You Get Access</h3>
            <p>
              Once your coaching session is complete, you&apos;ll be emailed a password
              to unlock the full guide library on this website. You&apos;ll also be sent
              the relevant user guides directly as documents you can keep.
            </p>
            <div className="access-steps">
              <div className="access-step">
                <div className="step-num">1</div>
                <span className="step-text">Book &amp; complete your session</span>
              </div>
              <div className="access-step">
                <div className="step-num">2</div>
                <span className="step-text">Receive your password via email</span>
              </div>
              <div className="access-step">
                <div className="step-num">3</div>
                <span className="step-text">Access 100+ guides any time</span>
              </div>
            </div>
            <p style={{ fontSize: '15px', fontStyle: 'italic', color: 'var(--ink-tertiary)' }}>
              The library is continually updated to reflect the latest tools, features, and
              platform changes — so you&apos;re always kept up to speed with the fast-moving
              updates happening across Ai.
            </p>
            <div className="cta-row">
              <a
                href="https://calendly.com/theaiadvantagecoadmin/single-ai-coaching-session-60-mins-zoom-100"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book a Session
              </a>
              <a href="/pricing" className="btn btn-secondary">
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS APPROACH WORKS */}
      <section className="why-us">
        <div className="why-us-inner">
          <span className="eyebrow">Why this works</span>
          <h2>
            Practical first. Tailored to you. <span className="accent">No hype.</span>
          </h2>
          <div className="why-us-points">
            <div className="why-us-point">
              <span className="num-tag">01</span>
              <h4>Built on real use</h4>
              <p>
                We don&apos;t teach Ai from theory. We work through your actual tasks, on your
                tools, in your role.
              </p>
            </div>
            <div className="why-us-point">
              <span className="num-tag">02</span>
              <h4>Trade-offs called out</h4>
              <p>
                We&apos;ll tell you what Ai is bad at, where it&apos;ll cost you time, and where
                automation is the wrong answer.
              </p>
            </div>
            <div className="why-us-point">
              <span className="num-tag">03</span>
              <h4>Tools across the board</h4>
              <p>
                Copilot, ChatGPT, Claude, Gemini. We help you pick the right one for each kind of
                work — not lock you in to one.
              </p>
            </div>
            <div className="why-us-point">
              <span className="num-tag">04</span>
              <h4>Usable next steps</h4>
              <p>
                Every session ends with something you can use this week. Not a 40-page report. A
                short, clear plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KICK STARTER CALLOUT */}
      <section
        className="service-block is-alt"
        id="kick-starter-callout"
        style={{ padding: '64px var(--gutter)' }}
      >
        <div
          className="service-block-inner"
          style={{ display: 'block', maxWidth: '880px', textAlign: 'center' }}
        >
          <div className="service-content">
            <span className="label">Need the whole business set up?</span>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}>
              Brand · Docs · Ai · Website — done in one bundle.
            </h2>
            <p className="desc" style={{ maxWidth: '640px', margin: '0 auto 24px' }}>
              For small businesses that need everything sorted at once, the{' '}
              <strong>Ai Business Kick Starter</strong> bundles brand, document templates, Ai
              platform setup, and a 5-page website into three done-for-you tiers from $500.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <a href="/kick-starter" className="btn btn-primary">
                See Kick Starter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>
            Not sure which fits? <span className="accent">Let&apos;s talk first.</span>
          </h2>
          <p>
            If you&apos;re unsure which session is right for you, the simplest thing is to ask.
            We&apos;ll help you pick — or recommend you don&apos;t book if it&apos;s not the right
            fit.
          </p>
          <div className="ctas">
            <a href="/pricing" className="btn btn-primary">
              See pricing
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
