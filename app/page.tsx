import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ai Advantage Co. — Practical Ai coaching for real work',
  description:
    'One-on-one coaching, small-business sessions, and team training across Copilot, ChatGPT, Claude, and Gemini. Tailored to your role and what you actually need to get done.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'The Ai Advantage Co. — Practical Ai coaching',
    description: 'From learning the basics to automating repetitive workflows.',
  },
};

export default function HomePage() {
  return (
    <div className="page-home">
      {/* ============================================================
          1 · HERO
          ============================================================ */}
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Practical Ai coaching</span>
          <h1>
            Ai that helps you
            <br />
            do <span className="accent">real work</span>.
          </h1>
          <p className="sub">
            Coaching across Copilot, ChatGPT, Claude, and Gemini — built around your role and what
            you actually need to get done.
          </p>
          <p className="supporting">From your first prompt to automating what you do every day.</p>
          <div className="ctas">
            <a href="/pricing" className="btn btn-primary">
              Book a Session
            </a>
            <a href="/services" className="btn btn-link">
              View services
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          2 · VALUE STRIP
          ============================================================ */}
      <section className="value-strip">
        <div className="value-strip-inner">
          <div className="value-item">
            <span className="dot" />
            <span>
              <strong>Practical.</strong>&nbsp; Never theoretical.
            </span>
          </div>
          <div className="value-item">
            <span className="dot" />
            <span>
              <strong>Tailored.</strong>&nbsp; Built around your role.
            </span>
          </div>
          <div className="value-item">
            <span className="dot" />
            <span>
              <strong>Real.</strong>&nbsp; Workflows you&apos;ll use this week.
            </span>
          </div>
          <div className="value-item">
            <span className="dot" />
            <span>
              <strong>Honest.</strong>&nbsp; No hype, no buzzwords.
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          4 · WHO IT'S FOR
          ============================================================ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Who it&apos;s for</span>
            <h2 className="h2">Built for real people doing real work.</h2>
            <p className="lead">
              If you&apos;ve stared at a blank chat window wondering where to start — you&apos;re in
              the right place.
            </p>
          </div>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
                </svg>
              </div>
              <h3>Professionals</h3>
              <p>
                You&apos;ve got a role to do. Coaching shows you exactly where Ai fits into{' '}
                <em>your</em> work — not someone else&apos;s demo.
              </p>
            </div>
            <div className="audience-card">
              <div className="icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3>Small business owners</h3>
              <p>
                Whether it&apos;s one of you or a small team, we&apos;ll find the workflows worth
                automating — and the ones to leave alone.
              </p>
            </div>
            <div className="audience-card">
              <div className="icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M3 9v7a2 2 0 0 0 1.06 1.76l7 3.5a2 2 0 0 0 1.88 0l7-3.5A2 2 0 0 0 21 16V9" />
                </svg>
              </div>
              <h3>Individuals &amp; learners</h3>
              <p>
                Curious about Ai but want a guide who&apos;ll cut through the noise. Bring your real
                questions — we&apos;ll work through them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4.5 · WHO'S BEHIND IT (Founder)
          ============================================================ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Who&apos;s behind it</span>
            <h2 className="h2">
              Brad Harle — <span className="accent">practical Ai, plainly</span>.
            </h2>
          </div>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
            <p style={{ marginBottom: '20px' }}>
              I&apos;m <strong>Brad Harle</strong>. I run The Ai Advantage Co. from{' '}
              <strong>Warrnambool, Victoria</strong> — coaching individuals, small businesses,
              and teams across Copilot, ChatGPT, Claude, and Gemini.
            </p>
            <p style={{ marginBottom: '20px' }}>
              After years leading teams and training, I started this because most Ai content
              is hype, demos, or guesswork. None of that helps you do your actual job
              tomorrow.
            </p>
            <p style={{ marginBottom: '0' }}>
              Sessions are one-on-one or small group, live, and built around your real tasks.
              No slides. No fluff. You leave with something usable.
            </p>
          </div>
          <div
            className="ctas"
            style={{
              marginTop: '40px',
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="/pricing" className="btn btn-primary">
              Book a Session
            </a>
            <a href="/contact" className="btn btn-link">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          5 · HOW IT WORKS
          ============================================================ */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">How it works</span>
            <h2 className="h2">Three steps.</h2>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="num">01 · Book</div>
              <h3>Pick a session that fits</h3>
              <p>
                Choose Single, Kick-Start Pack, or Team — Online (Zoom) or Face-to-Face, whichever
                suits you. All bookings handled through Calendly.
              </p>
            </div>
            <div className="step">
              <div className="num">02 · Share</div>
              <h3>Complete the intake form</h3>
              <p>
                Tell us your role, your tools, and your goals. We use it to build a{' '}
                <strong>tailored session plan</strong> built around what you actually want to walk
                away with.
              </p>
            </div>
            <div className="step">
              <div className="num">03 · Use</div>
              <h3>Walk away with something usable</h3>
              <p>
                We work through your real tasks live. You leave with a prompt, a workflow, a next
                step — plus <strong>platform user guides</strong> for the tools we covered (Copilot,
                ChatGPT, Claude, Gemini).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6 · WHAT WE COACH
          ============================================================ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">What we coach</span>
            <h2 className="h2">Three ways we work together.</h2>
            <p className="lead">
              Every session starts with an intake form so it&apos;s built around your actual
              situation.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-preview">
                <div className="mini-intake">
                  <div
                    style={{
                      fontSize: '9px',
                      color: 'var(--copper)',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      marginBottom: '6px',
                    }}
                  >
                    PRE-SESSION INTAKE
                  </div>
                  <div className="line" />
                  <div className="line short" />
                  <div className="line" />
                  <div className="line copper" />
                </div>
              </div>
              <div className="service-card-body">
                <span className="label">1:1 Coaching</span>
                <h3>Single Session</h3>
                <p className="desc">One focused hour to solve a specific problem or get unstuck.</p>
                <ul>
                  <li>Pre-session intake form</li>
                  <li>Role-specific workflows</li>
                  <li>Platform user guides</li>
                </ul>
                <a href="/services#single" className="btn btn-link card-cta">
                  Learn more
                </a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-preview">
                <div className="mini-timeline">
                  <div className="mini-timeline-node active">1</div>
                  <div className="mini-timeline-line" />
                  <div className="mini-timeline-node">2</div>
                  <div className="mini-timeline-line" />
                  <div className="mini-timeline-node">3</div>
                </div>
              </div>
              <div className="service-card-body">
                <span className="label">Most popular</span>
                <h3>Kick-Start Pack</h3>
                <p className="desc">
                  Three sessions taking you from confused to confident on one platform.
                </p>
                <ul>
                  <li>Discovery &amp; setup</li>
                  <li>Application to real tasks</li>
                  <li>Action plan to keep going</li>
                </ul>
                <a href="/services#kickstart" className="btn btn-link card-cta">
                  Learn more
                </a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-preview">
                <div className="mini-team">
                  <div className="avatar">B</div>
                  <div className="avatar">A</div>
                  <div className="avatar">M</div>
                  <div className="avatar">+</div>
                </div>
              </div>
              <div className="service-card-body">
                <span className="label">Teams &amp; business</span>
                <h3>Small Business &amp; Team</h3>
                <p className="desc">
                  Two- to four-hour sessions for whole teams. Role-specific. Practical from minute
                  one.
                </p>
                <ul>
                  <li>Tailored to your business</li>
                  <li>Real-world workflows</li>
                  <li>Q&amp;A built in</li>
                </ul>
                <a href="/services#team" className="btn btn-link card-cta">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7 · WHAT'S INCLUDED
          ============================================================ */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="h2">Substance, not slides.</h2>
            <p className="lead">
              Every session includes the things that actually move the needle — and skips the rest.
            </p>
          </div>
          <div className="included-grid">
            {[
              {
                title: 'Practical coaching',
                body: "Worked through on your real role and your real tasks — never a generic demo.",
              },
              {
                title: 'Real examples',
                body: "Prompts and workflows worked live, on screen, so you see exactly how they're built.",
              },
              {
                title: 'Tools across the board',
                body: "Copilot, ChatGPT, Claude, and Gemini. We help you pick the right one for the job.",
              },
              {
                title: 'Tailored recommendations',
                body: "What to use, what to skip, and what to leave manual — based on your actual setup.",
              },
              {
                title: 'Clear next steps',
                body: "Every session ends with a short action plan so you know exactly what to try next.",
              },
              {
                title: "Support that's usable",
                body: "Platform user guides included — written in plain English, not vendor marketing.",
              },
            ].map(({ title, body }) => (
              <div className="included-item" key={title}>
                <div className="check">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          8 · WHY THE AI ADVANTAGE
          ============================================================ */}
      <section className="why-us">
        <div className="why-us-inner">
          <span className="eyebrow">Why The Ai Advantage</span>
          <h2>
            Practical, direct, <span className="accent">no hype</span>.
          </h2>
          <div className="why-us-points">
            <div className="why-us-point">
              <span className="num-tag">01</span>
              <h4>Specific beats clever</h4>
              <p>
                One concrete example you can use beats three abstract claims about what&apos;s
                possible.
              </p>
            </div>
            <div className="why-us-point">
              <span className="num-tag">02</span>
              <h4>Trade-offs called out</h4>
              <p>Every recommendation names what you give up. No tool is right for everything.</p>
            </div>
            <div className="why-us-point">
              <span className="num-tag">03</span>
              <h4>Manual first</h4>
              <p>
                We figure out what works manually before automating it. Skip that step and you end
                up unwinding bad automations later.
              </p>
            </div>
            <div className="why-us-point">
              <span className="num-tag">04</span>
              <h4>Plain English</h4>
              <p>
                If a word isn&apos;t earning its place, we cut it. Jargon never made anyone better
                at their job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          9 · PRICING PREVIEW
          ============================================================ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Pricing</span>
            <h2 className="h2">
              Simple. Clear.
              <br />
              <span className="accent">Coaching Focused.</span>
            </h2>
            <p className="lead">
              Pick the format that fits, see what&apos;s included, and book directly.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="tier-name">Single Session</div>
              <div className="price">$100</div>
              <div className="duration">1 × 60 minutes &nbsp;·&nbsp; Zoom or face-to-face</div>
              <div className="who">
                For individuals getting started or solving a specific problem.
              </div>
              <ul>
                <li>Pre-session intake form</li>
                <li>Role-specific coaching</li>
                <li>Platform user guides</li>
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

            <div className="pricing-card is-featured">
              <span className="popular-tag">Most popular</span>
              <div className="tier-name">Kick-Start Pack</div>
              <div className="price">$250</div>
              <div className="duration">3 × 60 minutes &nbsp;·&nbsp; Zoom or face-to-face</div>
              <div className="who">
                For people who want to become genuinely confident — not just dabble.
              </div>
              <ul>
                <li>Discovery &amp; setup</li>
                <li>Application to real tasks</li>
                <li>Close-out with action plan</li>
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

            <div className="pricing-card">
              <div className="tier-name">Team &amp; Business</div>
              <div className="price">
                <span className="from">from</span>$250
              </div>
              <div className="duration">2 hours &nbsp;·&nbsp; Zoom or face-to-face</div>
              <div className="who">
                For small teams getting on the same page about Ai together.
              </div>
              <ul>
                <li>Pre-session business intake</li>
                <li>Tailored session plan</li>
                <li>Real-world workflows</li>
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
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a href="/pricing" className="btn btn-link">
              See full pricing &amp; FAQ
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          10 · TESTIMONIALS
          ============================================================ */}
      <section className="testimonials">
        <div className="section-header">
          <span className="eyebrow">What people are saying</span>
          <h2>
            Real results from <span className="accent">real people</span>.
          </h2>
          <div className="testimonials-stats">
            <span>100+ people coached</span>
            <span>Individuals</span>
            <span>Small businesses</span>
            <span>Teams</span>
          </div>
        </div>
        <div className="testimonials-belt">
          {[...Array(2)].map((_, setIndex) =>
            [
              {
                name: 'Sarah',
                initial: 'S',
                role: 'Secondary Teacher',
                town: 'Warrnambool',
                quote:
                  "Planning session materials used to take me two full days. I’d tried ChatGPT but never got the most out of it. After a 10-minute walkthrough, I got everything done in under two hours. Genuinely can’t believe the difference.",
              },
              {
                name: 'James',
                initial: 'J',
                role: 'Civil Engineer',
                town: 'Port Fairy',
                quote:
                  "Writing a full findings report usually takes me a solid day. After one session, I got two reports done in an hour — and they read better than what I’d normally produce. It even suggested things I hadn’t thought to include.",
              },
              {
                name: 'Danielle',
                initial: 'D',
                role: 'Operations Manager',
                town: 'Colac',
                quote:
                  'Following up on open orders, tracking and updating the team end to end — that used to take me 12 hours. After being shown how to set up my agent and workflow, it now takes 45 minutes and updates everything automatically.',
              },
              {
                name: 'Mark',
                initial: 'M',
                role: 'Project Coordinator',
                town: 'Timboon',
                quote:
                  "I was shown how to connect Gmail to my registers so Claude pulls the data I need each week and updates my databases automatically. I’m saving hours and finally working on the things I should be.",
              },
              {
                name: 'Kate',
                initial: 'K',
                role: 'Office Manager',
                town: 'Port Campbell',
                quote:
                  "I thought AI was an overhyped chatbot — until I was shown how to actually set it up properly. I’m saving 10 hours a week and getting great feedback from my team. It’s completely changed my mindset.",
              },
              {
                name: 'Rachel',
                initial: 'R',
                role: 'Small Business Owner',
                town: 'Camperdown',
                quote:
                  'Since being shown how to set up Claude for my business, I have all my social media posts prepared for the month in advance. Enquiries are up 15% in the first month alone.',
              },
              {
                name: 'Louise',
                initial: 'L',
                role: 'Administration Officer',
                town: 'Hamilton',
                quote:
                  "We went through Word, PowerPoint, Excel, and Agents live — real examples of each. I had no idea I could do any of this, and I’m not IT-savvy at all. Can’t believe everyone isn’t using it.",
              },
              {
                name: 'Tom',
                initial: 'T',
                role: 'Trades Business Owner',
                town: 'Koroit',
                quote:
                  "I was drowning in admin. After two sessions, everything is set up and I’m saving hours every week — which means I’m finally working on the things I never had time for and actually growing my business.",
              },
            ].map((t, i) => (
              <div className="testimonial-card" key={`${setIndex}-${i}`}>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">
                      {t.role}, {t.town}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ============================================================
          11 · FINAL CTA
          ============================================================ */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>
            Ready to make Ai <span className="accent">actually useful</span>&nbsp;?
          </h2>
          <p>
            Book a session, or get in touch first — happy to talk through which format fits before
            you commit.
          </p>
          <div className="ctas">
            <a href="/pricing" className="btn btn-primary">
              Book a Session
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
