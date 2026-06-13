import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The Terms & Conditions for coaching, training and education services provided by The Ai Advantage Co.',
  alternates: { canonical: '/terms' },
};

const pageStyles = `
  .page-hero { background: transparent !important; }
  .page-hero-bg { display: none !important; }
  .page-hero {
    position: relative;
    background: var(--surface-0);
    padding: 140px var(--gutter) 64px;
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
  .page-hero p { font-size: 17px; line-height: 1.5; color: var(--ink-secondary); max-width: 560px; margin: 0 auto; }

  .legal-section { padding: 24px var(--gutter) 96px; }
  .legal-inner {
    max-width: 820px;
    margin: 0 auto;
    background: var(--surface-0);
    border: 1px solid var(--hairline);
    border-radius: 20px;
    padding: 48px clamp(24px, 4vw, 56px);
  }
  .legal-intro {
    font-size: 16px;
    line-height: 1.65;
    color: var(--ink-secondary);
    padding-bottom: 28px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--hairline);
  }
  .legal-inner h2 {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink-primary);
    margin: 36px 0 12px;
  }
  .legal-inner p, .legal-inner li {
    font-size: 15.5px;
    line-height: 1.7;
    color: var(--ink-secondary);
  }
  .legal-inner p { margin-bottom: 12px; }
  .legal-inner ul { margin: 0 0 12px; padding-left: 22px; }
  .legal-inner li { margin-bottom: 8px; }
  .legal-inner strong { color: var(--ink-primary); font-weight: 600; }
  .legal-callout {
    background: var(--surface-cream);
    border-radius: 14px;
    padding: 20px 24px;
    margin: 32px 0 8px;
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--ink-secondary);
  }
  .legal-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
    font-size: 13px;
    color: var(--ink-tertiary);
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid var(--hairline);
  }
`;

export default function TermsPage() {
  return (
    <div className="page-terms">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1>
            Terms &amp; <span className="accent">Conditions</span>
          </h1>
          <p>The plain-English agreement that applies when you book a session with us.</p>
        </div>
      </section>

      <section className="legal-section">
        <div className="legal-inner">
          <p className="legal-intro">
            <strong>Last updated: 14 June 2026.</strong> These Terms &amp; Conditions
            (&ldquo;Terms&rdquo;) govern the coaching, training and education services
            (&ldquo;Services&rdquo;) provided by <strong>Bradley Harle trading as The Ai
            Advantage Co</strong>, ABN 36 845 513 681 (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;), to you, the client (&ldquo;you&rdquo;, &ldquo;your&rdquo;).
            By booking, paying for, or attending a session, or by ticking the box at
            booking or signing our session agreement, you agree to these Terms.
          </p>

          <h2>1. Our Services</h2>
          <p>
            We provide education, coaching and training on the use of artificial
            intelligence (AI) tools (such as ChatGPT, Claude, Microsoft Copilot, Google
            Gemini and similar), including how to set them up, prompt them, and apply them
            to your own work.
          </p>
          <p>
            <strong>
              Our Services are general in nature and for educational purposes only. They
              are not financial advice, legal advice, tax advice, accounting advice,
              business advice, agricultural or veterinary advice, or professional advice of
              any kind.
            </strong>{' '}
            You should obtain your own independent professional advice before making
            decisions in those areas.
          </p>
          <p>
            Any examples, templates, prompts and pre-built tools we show you are
            illustrations to help you learn &mdash; they are not tailored professional
            recommendations for your specific circumstances.
          </p>

          <h2>2. No Guarantee of Results</h2>
          <p>
            AI is a rapidly changing field. We do not guarantee any particular outcome,
            result, time saving, accuracy, income, or business result from the Services or
            from your use of any AI tool. Any examples of results or time savings are
            illustrative only.
          </p>

          <h2>3. AI Outputs &mdash; Accuracy and Your Responsibility</h2>
          <p>
            AI tools can produce information that is inaccurate, incomplete, biased, out of
            date, or fabricated (&ldquo;hallucinations&rdquo;). This is a known limitation
            of the technology.
          </p>
          <p>
            <strong>
              You are solely responsible for reviewing, verifying and validating any AI
              output before relying on or acting on it.
            </strong>{' '}
            Do not use AI output for important decisions (including financial, legal,
            safety, health, animal-welfare or business decisions) without independent
            verification and, where appropriate, professional advice. You are responsible
            for all decisions you make and actions you take using AI tools or anything
            produced during or after a session.
          </p>

          <h2>4. Third-Party AI Tools and Platforms</h2>
          <p>
            The AI tools and platforms we help you use are provided by third parties (for
            example OpenAI, Anthropic, Microsoft, Google). Your use of those tools is
            governed by those providers&rsquo; own terms of service and privacy policies,
            which you are responsible for reading and complying with.
          </p>
          <p>
            We are not responsible for third-party tools, including their availability,
            changes, pricing, features, security, data handling, or any loss arising from
            their use. Costs of third-party subscriptions are your responsibility.
          </p>

          <h2>5. Data, Privacy and Cyber-Security &mdash; Your Responsibility</h2>
          <ul>
            <li>
              <strong>
                You are responsible for the security of your own accounts, passwords,
                devices, networks and data
              </strong>
              , including using strong passwords, multi-factor authentication, and keeping
              your own backups.
            </li>
            <li>
              <strong>
                You accept full responsibility for any cyber-security risk and for any
                loss, corruption or unauthorised access to your data
              </strong>{' '}
              arising from your use of AI tools, your devices, or your accounts, except to
              the extent caused by our negligence and to the maximum extent permitted by
              law.
            </li>
            <li>
              <strong>You are responsible for what you input into AI tools.</strong> Do not
              enter confidential information, personal information about other people,
              sensitive data, or third-party data into AI tools unless you are authorised
              to do so and have considered the privacy and security implications.
            </li>
            <li>
              We handle your personal information in line with our privacy practices and
              the <em>Privacy Act 1988</em> (Cth) where it applies, and collect only what
              we need to deliver the Services.
            </li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All materials we provide &mdash; including guides, the online guide library,
            templates, prompts, frameworks, and pre-built tools &mdash; are our
            intellectual property (or licensed to us) and are provided to you for your own
            personal or internal business use only. You must not copy, resell,
            redistribute, publish, or share our materials or the guide-library password
            with anyone outside your household or business without our written permission.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            Each party will keep the other&rsquo;s confidential information confidential
            and use it only to deliver or receive the Services, except where disclosure is
            required by law.
          </p>

          <h2>8. Fees, Payment, Cancellations</h2>
          <ul>
            <li>
              Fees are as quoted at the time of booking. Sessions and packages are payable
              upfront unless we agree otherwise in writing.
            </li>
            <li>
              Accepted payment methods may include online booking/card, bank transfer,
              PayID, or cash, as advised.
            </li>
            <li>
              <strong>Rescheduling:</strong> please give at least 24 hours&rsquo; notice.
              Cancellations with less than 24 hours&rsquo; notice, or non-attendance, may
              be charged in full.
            </li>
            <li>
              <strong>Refunds:</strong> we do not offer refunds for change of mind. Nothing
              in this clause limits your rights under the Australian Consumer Law (see
              clause 9).
            </li>
          </ul>

          <h2>9. Liability</h2>
          <p>
            Nothing in these Terms excludes, restricts or modifies any consumer guarantee,
            right or remedy you have under the <strong>Australian Consumer Law</strong>{' '}
            that cannot lawfully be excluded.
          </p>
          <p>
            To the maximum extent permitted by law, and other than for those
            non-excludable rights:
          </p>
          <ul>
            <li>our Services are provided &ldquo;as is&rdquo;, and we exclude all other warranties;</li>
            <li>
              we are not liable for any indirect, special or consequential loss, loss of
              profit, loss of data, loss of opportunity, or business interruption; and
            </li>
            <li>
              our total liability to you for any claim arising out of or in connection with
              the Services is limited to the amount you paid us for the Service giving rise
              to the claim.
            </li>
          </ul>
          <p>
            Where the Australian Consumer Law applies and the failure does not relate to a
            good or service of a kind ordinarily acquired for personal, domestic or
            household use, our liability is limited (at our option) to re-supplying the
            Services or paying the cost of re-supply.
          </p>

          <h2>10. Indemnity</h2>
          <p>
            You indemnify us against any claim, loss, damage, cost or liability we suffer
            arising from your misuse of AI tools, your breach of these Terms, your inputs
            into AI tools, or your reliance on AI output without verification &mdash;
            except to the extent caused by our negligence and to the maximum extent
            permitted by law.
          </p>

          <h2>11. General</h2>
          <ul>
            <li>
              <strong>Governing law:</strong> these Terms are governed by the laws of
              Victoria, Australia, and the parties submit to the courts of that State.
            </li>
            <li>If any part of these Terms is unenforceable, the rest continues to apply.</li>
            <li>
              We may update these Terms from time to time; the version in force is the one
              published at the time you book.
            </li>
          </ul>

          <div className="legal-callout">
            These Terms are a plain-English summary of our agreement with you. They are not
            legal advice to you. If you have questions about your rights, please seek
            independent legal advice.
          </div>

          <div className="legal-meta">
            <span>The Ai Advantage Co &mdash; Bradley Harle</span>
            <span>ABN 36 845 513 681</span>
            <span>Warrnambool, Victoria, Australia</span>
            <span>theaiadvantagecoadmin@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
