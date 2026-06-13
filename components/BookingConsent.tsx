'use client';

import { useState } from 'react';
import TermsContent from '@/components/TermsContent';

interface BookingOption {
  label: string;
  href: string;
}
interface Session {
  title: string;
  price: string;
  detail: string;
  options: BookingOption[];
}

const SESSIONS: Session[] = [
  {
    title: 'Single AI Coaching Session',
    price: '$100',
    detail: '60 minutes · 1:1',
    options: [
      { label: 'In person', href: 'https://calendly.com/theaiadvantagecoadmin/single-ai-coaching-session-60-mins-in-person' },
      { label: 'Online (Zoom)', href: 'https://calendly.com/theaiadvantagecoadmin/single-ai-coaching-session-60-mins-zoom-100' },
    ],
  },
  {
    title: 'AI Kick-Start Pack',
    price: '$250',
    detail: '3 × 60 minutes',
    options: [
      { label: 'In person', href: 'https://calendly.com/theaiadvantagecoadmin/ai-kick-start-pack-x3-60-mins-250-face-to-face' },
      { label: 'Online (Zoom)', href: 'https://calendly.com/theaiadvantagecoadmin/ai-kick-start-pack-x3-60-mins-250-zoom' },
    ],
  },
  {
    title: 'Small Business Team Intro',
    price: '$250',
    detail: '2 hours · up to 5 people',
    options: [
      { label: 'In person', href: 'https://calendly.com/theaiadvantagecoadmin/small-business-team-intro-2-hrs-250-face-to-face' },
      { label: 'Online (Zoom)', href: 'https://calendly.com/theaiadvantagecoadmin/small-business-team-intro-2-hrs-250-zoom' },
    ],
  },
];

export default function BookingConsent() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="book-flow">
      {/* Step 1 — read + accept */}
      <div className="book-step">
        <div className="book-step-head">
          <span className="book-step-num">1</span>
          <h2>Read &amp; accept our Terms</h2>
        </div>
        <p className="book-step-sub">
          Please read the Terms &amp; Conditions below, then tick the box to continue.
          You can also{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer">open the full Terms in a new tab</a>.
        </p>

        <div className="book-terms-scroll" tabIndex={0} aria-label="Terms and Conditions, scrollable">
          <TermsContent />
        </div>

        <label className="book-accept" htmlFor="accept-terms">
          <input
            id="accept-terms"
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <span>
            I have read and agree to the <strong>Terms &amp; Conditions</strong>. I understand
            the session is general AI education (not financial, legal, tax or business advice),
            that AI outputs must be verified before I rely on them, and that I am responsible
            for my own data and account security.
          </span>
        </label>
      </div>

      {/* Step 2 — choose + book (gated) */}
      <div className={`book-step ${accepted ? '' : 'is-locked'}`} aria-disabled={!accepted}>
        <div className="book-step-head">
          <span className="book-step-num">2</span>
          <h2>Choose your session</h2>
        </div>
        {!accepted && (
          <p className="book-locked-note">Tick the box above to unlock booking.</p>
        )}

        <div className="book-options">
          {SESSIONS.map((s) => (
            <div className="book-option" key={s.title}>
              <div className="book-option-info">
                <h3>{s.title}</h3>
                <p className="book-option-detail">{s.detail}</p>
              </div>
              <div className="book-option-price">{s.price}</div>
              <div className="book-option-buttons">
                {s.options.map((o) =>
                  accepted ? (
                    <a
                      key={o.label}
                      href={o.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      {o.label}
                    </a>
                  ) : (
                    <button key={o.label} type="button" className="btn btn-primary btn-sm book-btn-locked" disabled>
                      {o.label}
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
