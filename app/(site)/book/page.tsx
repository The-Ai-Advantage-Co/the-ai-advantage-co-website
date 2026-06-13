import type { Metadata } from 'next';
import BookingConsent from '@/components/BookingConsent';

export const metadata: Metadata = {
  title: 'Book a Session',
  description:
    'Book your AI coaching session with The Ai Advantage Co. Review and accept our Terms, then choose your session.',
  alternates: { canonical: '/book' },
};

const pageStyles = `
  .page-hero { background: transparent !important; }
  .page-hero-bg { display: none !important; }
  .page-hero {
    position: relative;
    background: var(--surface-0);
    padding: 140px var(--gutter) 56px;
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
  .page-hero p { font-size: 18px; line-height: 1.5; color: var(--ink-secondary); max-width: 580px; margin: 0 auto; }

  .book-section { padding: 16px var(--gutter) 96px; }
  .book-flow { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 28px; }

  .book-step {
    background: var(--surface-0);
    border: 1px solid var(--hairline);
    border-radius: 20px;
    padding: 32px clamp(20px, 4vw, 40px);
  }
  .book-step.is-locked { opacity: 0.55; }
  .book-step-head { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
  .book-step-num {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--gold-1); color: #1c1c1c;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 15px; flex-shrink: 0;
  }
  .book-step-head h2 {
    font-family: var(--font-display); font-size: 24px; font-weight: 700;
    letter-spacing: -0.02em; color: var(--ink-primary); margin: 0;
  }
  .book-step-sub { font-size: 14.5px; color: var(--ink-secondary); margin: 0 0 18px; line-height: 1.55; }
  .book-step-sub a { color: var(--rose-gold-2); font-weight: 500; }

  .book-terms-scroll {
    max-height: 320px;
    overflow-y: auto;
    border: 1px solid var(--hairline);
    border-radius: 12px;
    padding: 22px 26px;
    background: var(--surface-cream);
    margin-bottom: 20px;
  }
  .book-terms-scroll:focus { outline: 2px solid var(--rose-gold-2); outline-offset: 2px; }

  .book-accept {
    display: flex; align-items: flex-start; gap: 12px;
    background: var(--surface-cream); border: 1px solid var(--hairline);
    border-radius: 12px; padding: 16px 18px; cursor: pointer;
    font-size: 14px; line-height: 1.55; color: var(--ink-secondary);
  }
  .book-accept input { width: 20px; height: 20px; margin-top: 1px; accent-color: var(--rose-gold-2); flex-shrink: 0; cursor: pointer; }
  .book-accept strong { color: var(--ink-primary); }

  .book-locked-note { font-size: 13.5px; color: var(--ink-tertiary); margin: 0 0 16px; }

  .book-options { display: flex; flex-direction: column; gap: 14px; }
  .book-option {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 16px;
    border: 1px solid var(--hairline);
    border-radius: 14px;
    padding: 18px 20px;
  }
  .book-option-info h3 { font-size: 16px; font-weight: 600; margin: 0 0 2px; color: var(--ink-primary); }
  .book-option-detail { font-size: 13px; color: var(--ink-tertiary); margin: 0; }
  .book-option-price { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--ink-primary); }
  .book-option-buttons { display: flex; gap: 8px; }
  .book-btn-locked { opacity: 0.5; cursor: not-allowed; }

  @media (max-width: 640px) {
    .book-option { grid-template-columns: 1fr auto; }
    .book-option-buttons { grid-column: 1 / -1; }
  }
`;

export default function BookPage() {
  return (
    <div className="page-book">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Book</span>
          <h1>
            Book your <span className="accent">session</span>
          </h1>
          <p>Two quick steps: read and accept our Terms, then choose the session that suits you.</p>
        </div>
      </section>

      <section className="book-section">
        <BookingConsent />
      </section>
    </div>
  );
}
