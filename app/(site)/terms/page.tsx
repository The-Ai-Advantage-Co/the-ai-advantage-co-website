import type { Metadata } from 'next';
import TermsContent from '@/components/TermsContent';

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
          <TermsContent />
        </div>
      </section>
    </div>
  );
}
