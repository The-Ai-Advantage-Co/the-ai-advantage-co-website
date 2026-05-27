import type { Metadata } from 'next';
import {
  getMasters,
  getCoreForPlatform,
  getTopicalForPlatform,
  Platform,
} from '@/lib/manifest';
import GuidesTabs from './GuidesTabs';

export const metadata: Metadata = {
  title: 'User Guide Library',
  description:
    "The full library of user guides for Copilot, ChatGPT, Claude, and Gemini — included with every coaching engagement.",
  robots: { index: false, follow: false },
};

const PLATFORMS: Platform[] = ['chatgpt', 'claude', 'gemini', 'copilot'];
const PLATFORM_LABEL: Record<Platform, string> = {
  chatgpt: 'ChatGPT',
  claude: 'Claude',
  gemini: 'Gemini',
  copilot: 'Copilot',
};

const pageStyles = `
  .guides-hero {
    padding: 96px var(--gutter) 32px;
    text-align: center;
  }
  .guides-hero-inner { max-width: 880px; margin: 0 auto; }
  .guides-hero .eyebrow { margin-bottom: 16px; }
  .guides-hero h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin-bottom: 18px;
  }
  .guides-hero p { font-size: 19px; line-height: 1.5; color: var(--ink-secondary); max-width: 640px; margin: 0 auto; }

  .guides-section {
    padding: 32px var(--gutter);
  }
  .guides-section-inner { max-width: var(--max-w); margin: 0 auto; }
  .guides-section-header { margin-bottom: 24px; }
  .guides-section-header .eyebrow { display: block; margin-bottom: 6px; }
  .guides-section-header h2 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.02em;
    color: var(--ink-primary);
  }

  /* Masters row — 4 always-visible cards */
  .masters-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .master-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 28px 24px;
    background: var(--surface-0);
    background-image: linear-gradient(to bottom, rgba(217,184,112,0.08), transparent);
    border: 1px solid var(--hairline);
    border-left: 4px solid var(--gold-2);
    border-radius: 14px;
    text-decoration: none;
    color: inherit;
    transition: all 0.18s ease;
    min-height: 180px;
  }
  .master-card:hover {
    transform: translateY(-2px);
    border-color: var(--copper);
    border-left-color: var(--copper);
    box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  }
  .master-card .platform {
    color: var(--copper);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .master-card .title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.02em;
    color: var(--ink-primary);
    margin-bottom: 8px;
  }
  .master-card .sub {
    font-size: 14px;
    line-height: 1.5;
    color: var(--ink-secondary);
    flex-grow: 1;
  }
  .master-card .arrow {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: var(--copper);
    font-size: 20px;
    transition: transform 0.2s ease;
  }
  .master-card:hover .arrow { transform: translateX(4px); }

  /* Drill-down section — tabs + grids */
  .guides-tabs-bar {
    display: flex;
    gap: 4px;
    border-bottom: 1px solid var(--hairline);
    margin-bottom: 32px;
    overflow-x: auto;
  }
  .guides-tab {
    padding: 12px 20px;
    border: none;
    background: transparent;
    color: var(--ink-secondary);
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: all 0.18s ease;
    white-space: nowrap;
  }
  .guides-tab:hover { color: var(--ink-primary); }
  .guides-tab.is-active {
    color: var(--ink-primary);
    border-bottom-color: var(--copper);
    font-weight: 600;
  }
  .guides-tab-select-wrap { display: none; }

  .guide-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .guide-card {
    display: flex;
    flex-direction: column;
    padding: 20px 22px;
    background: var(--surface-0);
    border: 1px solid var(--hairline);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.18s ease;
    min-height: 120px;
  }
  .guide-card:hover {
    transform: translateY(-2px);
    border-color: var(--copper);
    box-shadow: 0 4px 18px rgba(0,0,0,0.05);
  }
  .guide-card:hover .title { color: var(--copper); }
  .guide-card .title {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 17px;
    letter-spacing: -0.01em;
    color: var(--ink-primary);
    margin-bottom: 6px;
    transition: color 0.18s ease;
  }
  .guide-card .sub {
    font-size: 14px;
    line-height: 1.5;
    color: var(--ink-secondary);
  }

  .guides-subsection { margin-bottom: 48px; }
  .guides-subsection-header {
    margin-bottom: 16px;
  }
  .guides-subsection-header .eyebrow {
    color: var(--ink-tertiary);
    font-size: 12px;
    letter-spacing: 0.14em;
  }
  .guides-subsection-header h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.015em;
    color: var(--ink-primary);
    margin-top: 4px;
  }

  @media (max-width: 980px) {
    .masters-row { grid-template-columns: repeat(2, 1fr); }
    .guide-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .masters-row { grid-template-columns: 1fr; }
    .guide-grid { grid-template-columns: 1fr; }
    .guides-tabs-bar { display: none; }
    .guides-tab-select-wrap { display: block; margin-bottom: 24px; }
    .guides-tab-select {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid var(--hairline);
      border-radius: 10px;
      background: var(--surface-0);
      font-family: var(--font-body);
      font-size: 15px;
      color: var(--ink-primary);
    }
  }
`;

export default function GuidesLibraryPage() {
  // All data loads server-side. The client component handles the tab state
  // (URL-bound via ?tool=) without any client-side data fetching.
  const masters = getMasters();
  const platformsData = PLATFORMS.map((p) => ({
    platform: p,
    label: PLATFORM_LABEL[p],
    core: getCoreForPlatform(p),
    topical: getTopicalForPlatform(p),
  }));

  return (
    <div className="page-guides">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <section className="guides-hero">
        <div className="guides-hero-inner">
          <span className="eyebrow">User Guide Library</span>
          <h1>Your AI Guides.</h1>
          <p>
            Start with the Master Guide for the platform you use most. Then drop into the topic you
            need this week.
          </p>
        </div>
      </section>

      <section className="guides-section">
        <div className="guides-section-inner">
          <div className="guides-section-header">
            <span className="eyebrow">Master Guides</span>
            <h2>Start here.</h2>
          </div>
          <div className="masters-row">
            {masters.map((g) => (
              <a key={g.slug} href={`/guides/${g.file}`} className="master-card">
                <span className="platform">{PLATFORM_LABEL[g.platform]}</span>
                <span className="title">Master Guide</span>
                <span className="sub">{g.sub || 'The complete reference. Start here.'}</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="guides-section" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div className="guides-section-inner">
          <div className="guides-section-header">
            <span className="eyebrow">Go Deeper</span>
            <h2>Browse by platform.</h2>
          </div>
          <GuidesTabs platforms={platformsData} platformLabel={PLATFORM_LABEL} />
        </div>
      </section>
    </div>
  );
}
