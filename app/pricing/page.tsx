import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    "Simple, clear pricing for Ai coaching. Single sessions, packs, and team training — all with what's included and what's not.",
  alternates: { canonical: '/pricing' },
};

const pageStyles = `
  .page-hero { background: transparent !important; }
  .page-hero-bg { display: none !important; }
  .page-hero {
    position: relative;
    background: var(--surface-0);
    padding: 140px var(--gutter) 96px;
    text-align: center;
    overflow: hidden;
  }
  .page-hero-inner { position: relative; z-index: 2; max-width: 880px; margin: 0 auto; }
  .page-hero .eyebrow { margin-bottom: 18px; }
  .page-hero h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(40px, 5vw, 64px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin-bottom: 22px;
  }
  .page-hero h1 .accent { color: var(--gold-1); font-style: italic; font-weight: 700; text-shadow: 0 0 24px rgba(217, 184, 112, 0.22); }
  .page-hero p { font-size: 20px; line-height: 1.5; color: var(--ink-secondary); max-width: 680px; margin: 0 auto; }

  .pricing-page { padding: 32px var(--gutter) 64px; }
  .pricing-page-inner { max-width: var(--max-w); margin: 0 auto; }
  .pricing-page .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }

  .pricing-extras {
    max-width: 880px;
    margin: 64px auto 0;
    padding: 32px 40px;
    background: var(--surface-1);
    border-radius: 16px;
  }
  .pricing-extras h3 {
    font-family: var(--font-display);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: -0.01em;
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

  .faq { padding: 96px var(--gutter); background: var(--surface-cream); }
  .faq-inner { max-width: 880px; margin: 0 auto; }
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

  @media (max-width: 980px) {
    .pricing-page .pricing-grid { grid-template-columns: 1fr; }
    .pricing-extras-grid { grid-template-columns: 1fr; }
  }
`;

export default function PricingPage() {
  return (
    <div className="page-pricing">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Pricing</span>
          <h1>
            Simple. Clear.
            <br />
            <span className="accent">Coaching Focused.</span>
          </h1>
          <p>
            Pick the format that fits, see exactly what's included, and book directly. No quotes for
            standard sessions, no surprise fees.
          </p>
        </div>
      </section>

      <section className="pricing-page" id="pricing-cards">
        <div className="pricing-page-inner">
          <div className="pricing-grid">
            <div className="pricing-card" id="single">
              <div className="tier-name">Single Session</div>
              <div className="price">$100</div>
              <div className="duration">1 × 60 minutes &nbsp;·&nbsp; online or face-to-face</div>
              <div className="who">For individuals getting started or solving a specific problem.</div>
              <ul>
                <li>Pre-session intake form</li>
                <li>Role / task-specific coaching</li>
                <li>Practical workflows you can use</li>
                <li>Platform user guides included</li>
                <li>Choose your platform focus (Copilot, ChatGPT, Claude, Gemini)</li>
              </ul>
              <a
                href="https://calendly.com/theaiadvantagecoadmin/single-ai-coaching-session-60-mins-zoom-100"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
                style={{ marginBottom: '10px' }}
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

            <div className="pricing-card is-featured" id="kickstart">
              <span className="popular-tag">Most popular</span>
              <div className="tier-name">Kick-Start Pack</div>
              <div className="price">$250</div>
              <div className="duration">3 × 60 minutes &nbsp;·&nbsp; Zoom or face-to-face</div>
              <div className="who">
                For people who want to become genuinely confident with Ai — not just dabble.
              </div>
              <ul>
                <li>Session 1 · Discovery &amp; setup</li>
                <li>Session 2 · Application to real tasks</li>
                <li>Session 3 · Close-out with action plan</li>
                <li>Personalised action plan after session 2</li>
                <li>One platform focus per pack</li>
                <li>Platform user guides included</li>
              </ul>
              <a
                href="https://calendly.com/theaiadvantagecoadmin/ai-kick-start-pack-x3-60-mins-250-zoom"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
                style={{ marginBottom: '10px' }}
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

            <div className="pricing-card" id="team">
              <div className="tier-name">Team &amp; Business</div>
              <div className="price">
                <span className="from">from</span>$250
              </div>
              <div className="duration">2 hours &nbsp;·&nbsp; Zoom or face-to-face · up to ~5 people</div>
              <div className="who">For small teams getting on the same page about Ai together.</div>
              <ul>
                <li>Pre-session business intake</li>
                <li>Tailored session plan</li>
                <li>Real-world workflows worked live</li>
                <li>Q&amp;A with whole team</li>
              </ul>
              <a
                href="https://calendly.com/theaiadvantagecoadmin/small-business-team-intro-2-hrs-250-zoom"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
                style={{ marginBottom: '10px' }}
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
            </div>
          </div>

          <div className="pricing-extras">
            <h3>Add-ons &amp; extras</h3>
            <div className="pricing-extras-grid">
              <div className="pricing-extra-item">
                <span>
                  <strong>Additional participant</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>+$50</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Max 1 extra · same platform · same sessions (e.g. partner / co-worker)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Custom Business Training</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$500</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    1 × up to 4-hour session · role-based breakouts (admin, ops, managers)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Business-Supported Individual Coaching</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>POA</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Business books Kick-Start Packs for individual staff · scoped per person
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Face-to-face travel</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$50 up to 50km, then $0.80/km</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Flat $50 covers travel within 50km of Warrnambool; longer trips by the km (one-way)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Ai Business Kick Starter</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$500 / $2,000 / $3,000</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Done-for-you small-business setup — brand, docs, Ai, website.{' '}
                    <a href="/kick-starter" style={{ color: 'var(--copper)' }}>
                      See Kick Starter →
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq-inner">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Common questions.</h2>
          </div>

          <details className="faq-item">
            <summary>Who is this for?</summary>
            <div className="faq-body">
              <p>
                Three groups, mostly. <strong>Professionals</strong> who want to use Ai better in their
                role. <strong>Small business owners</strong> looking to apply it across their team.{' '}
                <strong>Individuals and learners</strong> who are curious and want a coach to cut through
                the noise.
              </p>
              <p>
                If you're unsure whether you're a fit, the simplest thing is to{' '}
                <a href="/contact">send a short enquiry</a> — we'll be honest about whether coaching is
                right for you.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Do I need Ai experience already?</summary>
            <div className="faq-body">
              <p>
                No. About half of our coaching clients have never opened ChatGPT or Copilot before. The
                session is built around your starting point — whether that's "I've never used it" or "I
                use it daily but feel I'm only scratching the surface."
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Are sessions online or in person?</summary>
            <div className="faq-body">
              <p>
                Both. Sessions run on Zoom (Australia-wide) or face-to-face in Warrnambool. Face-to-face
                travel is a flat $50 for up to 50km from Warrnambool; beyond that, $0.80/km (one-way).
              </p>
              <p>
                Most clients pick Zoom — it works well, the screen-share lets you see workflows being
                built in real time, and it's easier to fit into a workday.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What tools do you cover?</summary>
            <div className="faq-body">
              <p>
                <strong>Copilot, ChatGPT, Claude, and Gemini.</strong> These four cover the vast majority
                of what people actually need at work.
              </p>
              <p>
                One of the most useful things we do in a session is help you pick the right one for the
                right kind of task — they're each better at different things, and using them all badly
                is worse than using one well.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Can I book for my business or team?</summary>
            <div className="faq-body">
              <p>
                Yes. The <strong>Small Business Team Intro</strong> (2 hours, up to ~5 people, $250) is
                the most common starting point. For more bespoke needs — multiple departments,
                role-specific training, longer formats — we'll quote on Custom Business Training.
              </p>
              <p>
                If you're a business that wants to put individual staff through coaching as a development
                investment, that's also a thing — see "Business-Supported Individual Coaching" in the
                add-ons above.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What happens after I enquire?</summary>
            <div className="faq-body">
              <p>
                You'll get a reply within one business day. Usually it's a short email asking a couple of
                clarifying questions so the session you book is the right fit. From there, you either
                book yourself in via the calendar link we send, or we set up a quick chat first if you'd
                prefer.
              </p>
              <p>No pressure, no hard sell. If we don't think coaching is the right thing for you yet, we'll say so.</p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What's NOT included?</summary>
            <div className="faq-body">
              <p>
                Important to be upfront — sessions are <strong>coaching</strong>, not implementation.
                They don't include:
              </p>
              <p>
                • Ongoing support, retainer access, or follow-up outside the session
                <br />
                • Automation builds, custom integrations, or MCP setup
                <br />
                • Business-wide rollout / change management
                <br />
                • Documents, workflows, or systems built for you
                <br />
                • Anything done for you after the session ends
              </p>
              <p>
                You leave with the knowledge and the plan. If you need done-for-you implementation,
                the right starting point is still a single session — we'll scope what's actually
                required and quote separately, or point you to the{' '}
                <a href="/kick-starter" style={{ color: 'var(--copper)' }}>
                  Kick Starter
                </a>{' '}
                if it fits.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Is this tax deductible?</summary>
            <div className="faq-body">
              <p>
                Coaching and training may be tax deductible if it's related to your current role or
                business. We're not your accountant — confirm with them before relying on it.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready when you are.</h2>
          <p>
            Book directly above, or send a short enquiry if you'd like to chat through the right fit
            first.
          </p>
          <div className="ctas">
            <a href="#pricing-cards" className="btn btn-primary">
              Choose a session
            </a>
            <a href="/contact" className="btn btn-secondary">
              Send an enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
