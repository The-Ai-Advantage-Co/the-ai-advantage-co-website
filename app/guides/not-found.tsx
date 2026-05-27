import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide not found',
  robots: { index: false, follow: false },
};

const pageStyles = `
  .nf-wrap {
    min-height: calc(100vh - 160px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px var(--gutter);
    text-align: center;
  }
  .nf-card { max-width: 520px; }
  .nf-card .eyebrow { margin-bottom: 16px; }
  .nf-card h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(36px, 4.5vw, 48px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin-bottom: 18px;
  }
  .nf-card p {
    font-size: 17px;
    line-height: 1.5;
    color: var(--ink-secondary);
    margin-bottom: 28px;
  }
`;

export default function GuidesNotFound() {
  return (
    <div className="page-guides-404">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <div className="nf-wrap">
        <div className="nf-card">
          <span className="eyebrow">Not found</span>
          <h1>We can't find that guide.</h1>
          <p>
            The link may have changed, or the guide has been retired. Head back to the library and
            pick from what's there.
          </p>
          <a href="/guides" className="btn btn-primary">
            ← Back to library
          </a>
        </div>
      </div>
    </div>
  );
}
