import type { Metadata } from 'next';
import ContactServicePrefill from './ContactServicePrefill';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch about Ai coaching. We'll reply within one business day — and we're happy to talk through which session would fit before you commit.",
  alternates: { canonical: '/contact' },
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
  .page-hero-inner { position: relative; z-index: 2; max-width: 760px; margin: 0 auto; }
  .page-hero .eyebrow { margin-bottom: 18px; }
  .page-hero h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(40px, 5vw, 60px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin-bottom: 22px;
  }
  .page-hero h1 .accent { color: var(--gold-1); font-style: italic; font-weight: 700; text-shadow: 0 0 24px rgba(217, 184, 112, 0.22); }
  .page-hero p { font-size: 19px; line-height: 1.5; color: var(--ink-secondary); max-width: 580px; margin: 0 auto; }

  .contact-section { padding: 32px var(--gutter) 80px; }
  .contact-section-inner {
    max-width: var(--max-w);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 64px;
    align-items: start;
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
  .form-radio-group { display: flex; gap: 16px; flex-wrap: wrap; }
  .form-radio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid var(--hairline);
    border-radius: 980px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
  }
  .form-radio input { accent-color: var(--rose-gold-2); }
  .form-radio:has(input:checked) {
    border-color: var(--rose-gold-2);
    background: rgba(183, 117, 127, 0.06);
  }
  .form-submit { width: 100%; justify-content: center; margin-top: 8px; }
  .form-note {
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    color: var(--ink-tertiary);
    line-height: 1.55;
  }

  .contact-side { display: flex; flex-direction: column; gap: 32px; }
  .side-portrait {
    aspect-ratio: 4/5;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0,0,0,0.06);
  }
  .side-portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .direct-contact { background: var(--surface-cream); border-radius: 18px; padding: 32px 28px; }
  .direct-contact h3 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--copper);
    margin-bottom: 18px;
  }
  .direct-contact-item { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
  .direct-contact-item:last-child { margin-bottom: 0; }
  .direct-contact-item .ico {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--surface-0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--copper);
    flex-shrink: 0;
  }
  .direct-contact-item a, .direct-contact-item span {
    color: var(--ink-primary);
    font-size: 15px;
    font-weight: 500;
  }
  .direct-contact-item a:hover { color: var(--copper); }
  .direct-contact-item .label {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-tertiary);
    display: block;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .reassurance { padding: 80px var(--gutter); background: var(--surface-cream); text-align: center; }
  .reassurance-inner { max-width: 720px; margin: 0 auto; }
  .reassurance .eyebrow { margin-bottom: 16px; color: var(--rose-gold-2); }
  .reassurance h2 {
    font-family: var(--font-display);
    font-size: clamp(28px, 3.5vw, 40px);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.15;
    margin-bottom: 32px;
  }
  .reassurance-points {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    text-align: left;
    margin-top: 40px;
  }
  .reassurance-point h4 { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
  .reassurance-point p { font-size: 14px; line-height: 1.55; color: var(--ink-secondary); }

  @media (max-width: 980px) {
    .contact-section-inner { grid-template-columns: 1fr; }
    .contact-side { order: 2; }
    .contact-form { order: 1; }
    .reassurance-points { grid-template-columns: 1fr; }
    .form-row.two-col { grid-template-columns: 1fr; }
  }
`;

export default function ContactPage() {
  return (
    <div className="page-contact">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>
            Talk to us before <span className="accent">you book</span>.
          </h1>
          <p>
            Or skip ahead and book — both work. If you're not sure which session fits, send us a short
            note and we'll point you in the right direction.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section-inner">
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="enquiry-form"
          >
            <input type="hidden" name="access_key" value="bed839a8-b01a-443f-b32b-2187256a17c5" />
            <input
              type="hidden"
              name="subject"
              value="New enquiry from The Ai Advantage Co. website"
            />
            <input type="hidden" name="from_name" value="The Ai Advantage Co. — Website" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <h2>Send an enquiry</h2>
            <p className="form-sub">
              We'll reply within one business day. No pressure, no sales script.
            </p>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="name">
                  Name <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="name" name="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Email <span className="req">*</span>
                </label>
                <input className="form-input" type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="business">
                  Business / Organisation <span className="opt">(optional)</span>
                </label>
                <input className="form-input" type="text" id="business" name="business" />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">
                  Phone <span className="opt">(optional)</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="04xx xxx xxx"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="service">
                Service interested in
              </label>
              <select className="form-select" id="service" name="service" defaultValue="">
                <option value="">Not sure — help me decide</option>
                <option value="single-session">Single Session — $100</option>
                <option value="kickstart">Kick-Start Pack — $250</option>
                <option value="team-intro">Small Business Team Intro — $250</option>
                <option value="custom-training">Custom Business Training — $500</option>
                <option value="business-supported">Business-Supported Individual Coaching</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="message">
                What do you want help with? <span className="req">*</span>
              </label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                placeholder="A few sentences on your role, your tools, and what you'd like to walk away with. Plain English is fine."
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Preferred contact method</label>
              <div className="form-radio-group">
                <label className="form-radio">
                  <input type="radio" name="contact-method" value="email" defaultChecked /> Email
                </label>
                <label className="form-radio">
                  <input type="radio" name="contact-method" value="phone" /> Phone
                </label>
                <label className="form-radio">
                  <input type="radio" name="contact-method" value="either" /> Either's fine
                </label>
              </div>
            </div>

            <button className="btn btn-primary form-submit" type="submit">
              Send enquiry
            </button>
            <p className="form-note">
              By sending, you agree we can email you back. We don't add you to a mailing list and we
              don't share your details.
            </p>
          </form>

          <div className="contact-side">
            <div className="side-portrait">
              <img
                src="/assets/web/portrait-man-polo.jpg"
                alt="A coach welcoming a new client in a warm professional setting."
              />
            </div>
            <div className="direct-contact">
              <h3>Or reach out directly</h3>
              <div className="direct-contact-item">
                <div className="ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="label">Email</span>
                  <a href="mailto:theaiadvantagecoadmin@gmail.com">
                    theaiadvantagecoadmin@gmail.com
                  </a>
                </div>
              </div>
              <div className="direct-contact-item">
                <div className="ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="label">Phone</span>
                  <a href="tel:0400062251">0400 062 251</a>
                </div>
              </div>
              <div className="direct-contact-item">
                <div className="ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="label">Based in</span>
                  <span>Warrnambool · online Australia-wide</span>
                </div>
              </div>
              <div className="direct-contact-item">
                <div className="ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div>
                  <span className="label">Response time</span>
                  <span>Within 1 business day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reassurance">
        <div className="reassurance-inner">
          <span className="eyebrow">What to expect</span>
          <h2>No pressure. No script. Just a useful conversation.</h2>
          <div className="reassurance-points">
            <div className="reassurance-point">
              <h4>No hard sell</h4>
              <p>
                If coaching isn't the right fit for what you need, we'll say so — and point you somewhere
                that is.
              </p>
            </div>
            <div className="reassurance-point">
              <h4>Happy to talk options</h4>
              <p>
                If you're stuck between session types, we'll help you pick. Bring the messy thinking —
                that's the point.
              </p>
            </div>
            <div className="reassurance-point">
              <h4>Practical first</h4>
              <p>
                Even the first email reply will usually have something useful in it — a link, a
                suggestion, or a question that gets you unstuck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client island that reads ?service= and selects the matching option */}
      <ContactServicePrefill />
    </div>
  );
}
