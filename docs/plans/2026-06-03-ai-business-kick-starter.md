# Ai Business Kick Starter — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new `/kick-starter` page that markets three done-for-you small-business setup tiers (Lite $500, Standard $2,000, Plus $3,000) plus à la carte items, with a Web3Forms-backed enquiry form and a "Best time to call" field.

**Architecture:** Single Next.js App Router page (`app/kick-starter/page.tsx`) that mirrors the existing `app/services/page.tsx` structure exactly — reuses the same global CSS classes (`service-block`, `pricing-extra-item`, `page-hero`, `final-cta`, `faq-item`, `contact-form`) so visual consistency is automatic. Three additional touch-ups: add a nav link in `components/SiteNav.tsx`, add a cross-link callout on `/services`, add a row to the extras grid on `/pricing`.

**Tech Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Vercel deploy · Web3Forms for form submission (existing access key reused).

**Spec reference:** [`docs/specs/2026-06-03-ai-business-kick-starter-design.md`](../specs/2026-06-03-ai-business-kick-starter-design.md)

---

## Testing model (read first)

This project has no automated test framework. After each implementation task, the verification gate is:

1. **`npm run build`** — catches TypeScript errors, missing imports, broken routes, JSX syntax errors
2. **`npm run dev` + visual check** — open the relevant page in a browser, eyeball that the new section renders correctly and matches the existing visual style
3. **`git diff` review** — confirm only the intended file(s) changed

A "PASS" gate means: build green, page renders without console errors, diff scoped.

For the form-submission task, there's an additional gate: a real test submit through Web3Forms confirming the email lands in the existing inbox.

---

## Pre-flight setup

### Task 0: Verify local dev environment

**Files:** none

- [ ] **Step 1: Confirm Node.js + npm are available**

Run: `node --version && npm --version`
Expected: Node 18+ and npm 9+

- [ ] **Step 2: Install dependencies if not already installed**

Run from repo root (`C:/Users/harle/OneDrive/Github/the-ai-advantage-co-website`):

```bash
npm install
```

Expected: Completes without errors, creates `node_modules/`.

- [ ] **Step 3: Run a baseline build to confirm the existing site still builds**

Run: `npm run build`
Expected: Build succeeds, output ends with "✓ Compiled successfully" or equivalent.

- [ ] **Step 4: Start the dev server in a separate terminal**

Run: `npm run dev`
Expected: Server starts on http://localhost:3000.

- [ ] **Step 5: Open http://localhost:3000/services in browser**

Expected: Existing services page renders correctly. Confirms hot-reload is working.

- [ ] **Step 6: Confirm working tree is clean**

Run: `git status`
Expected: `nothing to commit, working tree clean` (or only the new plan/spec docs as added). If there are uncommitted changes from prior work, address before proceeding.

---

## Task 1: Scaffold `/kick-starter` page with hero only

Get the route live with just the hero so we have a stable scaffold to build on.

**Files:**
- Create: `app/kick-starter/page.tsx`

- [ ] **Step 1: Create the file with hero + metadata**

Create `app/kick-starter/page.tsx` with this exact content:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Business Kick Starter',
  description:
    'Brand, docs, Ai platform setup, and a website — bundled for small businesses. Three tiers from $500. Transparent pricing, no surprises.',
  alternates: { canonical: '/kick-starter' },
};

export default function KickStarterPage() {
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
        .page-hero .hero-cta { margin-top: 36px; }
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Kick Starter</span>
          <h1>
            Start your business with Ai, <span className="accent">properly.</span>
          </h1>
          <p>
            Brand, documents, Ai platform setup, and a working website — bundled into one done-for-you
            setup. Three tiers, transparent pricing, and you keep everything we build.
          </p>
          <div className="hero-cta">
            <a href="#enquiry" className="btn btn-primary">
              Send an enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success, includes `/kick-starter` in the route list.

- [ ] **Step 3: Visual check in dev**

With `npm run dev` running, open http://localhost:3000/kick-starter
Expected: Hero renders with eyebrow "Kick Starter", h1 with italic accent on "properly.", intro paragraph, and "Send an enquiry" button. Looks identical in style to `/services` hero.

- [ ] **Step 4: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): scaffold /kick-starter page with hero"
```

---

## Task 2: Add the three tier blocks (Lite, Standard, Plus)

Add the three core service-block sections. Lite + Plus use the default layout, Standard uses `is-alt is-reverse` (matches "Kick-Start Pack" on `/services`).

**Files:**
- Modify: `app/kick-starter/page.tsx` (insert before the closing `</>` fragment)

- [ ] **Step 1: Insert the three tier blocks after the PAGE HERO section**

In `app/kick-starter/page.tsx`, immediately after the closing `</section>` of `{/* PAGE HERO */}` and before the closing `</>`, insert:

```tsx
      {/* TIER 1 · LITE */}
      <section className="service-block" id="lite">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-w2.jpg"
              alt="A solo business owner setting up at a warm desk."
            />
          </div>
          <div className="service-content">
            <span className="label">Lite · Identity Starter</span>
            <h2>Lite — $500</h2>
            <p className="desc">
              The minimum kit to start looking like a real business. Brand basics, document templates,
              and a hands-on handover so you can use them straight away.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Solo operators and brand-new small businesses who need to look professional today and
                will add Ai + website later. No website included in this tier.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s included</h4>
              <ul>
                <li>Brand Kit (Light Design) — wordmark, palette, fonts, 1-page style guide</li>
                <li>Doc Template Pack — letterhead, quote, invoice, email signature, SOP template</li>
                <li>Handover Training — 2-hour live walk-through, recording included</li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Save vs à la carte</h4>
              <p>
                À la carte total: $650 · Package: <strong>$500</strong> · You save $150 (23%).
              </p>
            </div>
            <div className="cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Enquire about Lite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 2 · STANDARD (Most popular) */}
      <section className="service-block is-alt is-reverse" id="standard">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/hero-workspace-a.jpg"
              alt="A small-business workspace with brand, docs, and a website on screen."
            />
          </div>
          <div className="service-content">
            <span className="label">Most popular · Done-for-you setup</span>
            <h2>Standard — Business Kick Starter — $2,000</h2>
            <p className="desc">
              The full done-for-you setup. Brand, docs, one Ai platform, a 5-page website, and a
              booking system — handed over working, with you trained on how to drive it.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Small businesses that want to start trading properly: brand, website, AI in their
                workflow, and a way for customers to book — all delivered in one bundle.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s included</h4>
              <ul>
                <li>Brand Kit (Light Design)</li>
                <li>Doc Template Pack</li>
                <li>Ai Platform Setup — pick one (Copilot, ChatGPT, Claude, or Gemini)</li>
                <li>Website Design + Deploy — 5 pages, responsive, Vercel-hosted</li>
                <li>Booking Integration — Calendly setup, branded, embedded</li>
                <li>Google Business Profile setup</li>
                <li>Social Media Starter — LinkedIn + 1 other platform</li>
                <li>Handover Training — 2-hour live walk-through</li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Save vs à la carte</h4>
              <p>
                À la carte total: $2,300 · Package: <strong>$2,000</strong> · You save $300 (13%).
              </p>
            </div>
            <div className="cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Enquire about Standard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 3 · PLUS */}
      <section className="service-block" id="plus">
        <div className="service-block-inner">
          <div className="service-visual">
            <img
              src="/assets/web/portrait-man-polo.jpg"
              alt="A confident small-business owner with a polished, finished brand."
            />
          </div>
          <div className="service-content">
            <span className="label">Plus · The full kit</span>
            <h2>Plus — Full Kick Starter — $3,000</h2>
            <p className="desc">
              Everything in Standard, plus full custom brand design, two Ai platforms, six integrated
              workflows, and three months of included support after handover.
            </p>
            <div className="service-detail">
              <h4>Who it&apos;s for</h4>
              <p>
                Small businesses that want a properly finished launch — bespoke brand, AI integrated
                into real day-to-day workflows, and someone on call for the first three months while
                you settle in.
              </p>
            </div>
            <div className="service-detail">
              <h4>What&apos;s included</h4>
              <ul>
                <li>
                  Brand Kit (<strong>Full Design</strong>) — logo from scratch, 2 revisions, full
                  identity
                </li>
                <li>Doc Template Pack</li>
                <li>
                  Ai Platform Setup — <strong>two platforms</strong> (e.g. Copilot for office work +
                  ChatGPT for marketing)
                </li>
                <li>Ai Integration — 6 workflows documented as 1-page SOPs</li>
                <li>Website Design + Deploy</li>
                <li>Booking Integration</li>
                <li>Google Business Profile setup</li>
                <li>Social Media Starter</li>
                <li>Handover Training</li>
                <li>
                  <strong>3 months Support Retainer included</strong> — 1 hour/month of changes &amp;
                  fixes
                </li>
              </ul>
            </div>
            <div className="service-detail">
              <h4>Save vs à la carte</h4>
              <p>
                À la carte total: $3,250 · Package: <strong>$3,000</strong> · You save $250 (8%).
              </p>
            </div>
            <div className="cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Enquire about Plus
              </a>
            </div>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success, no TypeScript or JSX errors.

- [ ] **Step 3: Visual check in dev**

Reload http://localhost:3000/kick-starter
Expected:
- Three tier blocks stacked below the hero
- Lite renders with image on the left, content on the right
- Standard has alternate background and is reversed (image right, content left)
- Plus matches Lite's layout
- All three styled identically to the existing `/services` blocks
- Each block has an "Enquire about [tier]" button that anchors to `#enquiry` (won't scroll anywhere yet — form not built — that's fine)

- [ ] **Step 4: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): add three tier blocks (Lite, Standard, Plus)"
```

---

## Task 3: Add the à la carte itemised section

After the tier blocks, add a "Or build your own" section listing all 11 itemised items using the existing `pricing-extra-item` pattern from `/pricing`.

**Files:**
- Modify: `app/kick-starter/page.tsx` (insert after Plus tier section)

- [ ] **Step 1: Insert the à la carte section after the Plus tier block**

Insert immediately after the closing `</section>` of `{/* TIER 3 · PLUS */}`:

```tsx
      {/* À LA CARTE */}
      <section className="service-block is-alt" id="itemised">
        <div className="service-block-inner" style={{ display: 'block', maxWidth: '1080px' }}>
          <div className="service-content" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label">Or build your own</span>
            <h2>Pick the pieces you need.</h2>
            <p className="desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
              Prefer to mix-and-match instead of picking a tier? Every item from the packages is
              available individually. Add what you need now, add the rest later.
            </p>
          </div>
          <div className="pricing-extras">
            <div className="pricing-extras-grid">
              <div className="pricing-extra-item">
                <span>
                  <strong>Brand Kit — Light Design</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$250</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Polish existing logo or simple wordmark · palette · fonts · style guide
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Brand Kit — Full Design</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$400</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Logo from scratch · 2 revisions · full identity · style guide
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Doc Template Pack</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$200</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Letterhead · quote · invoice · email signature · 1 SOP template (Word + PDF)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Ai Platform Setup</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$300</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    One platform · account · workspace · 5 saved prompts · user guide
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Additional Ai Platform</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>+$200/each</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Each extra platform set up to the same standard
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Ai Integration</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$50/workflow</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    1-page SOP per workflow · e.g. quote drafting, customer-email triage
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Website Design + Deploy</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$900</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    5 pages · responsive · Vercel deploy · basic SEO (sitemap, robots, metadata)
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Booking Integration</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$100</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Calendly setup · branded · embedded on site · 1-hour training
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Handover Training</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$200</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    2-hour live walk-through · recording included
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Google Business Profile setup</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$100</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Create · verify · categorise · service areas
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Social Media Starter</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$250</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    LinkedIn + 1 other · profile · branded banner · bio · 3-post starter
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 3: Visual check**

Reload `/kick-starter`. Scroll down past the tier blocks.
Expected: 11 cards in the extras grid, each showing the title in bold, price in copper colour, description below. Layout matches the existing extras grid on `/pricing` exactly.

- [ ] **Step 4: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): add à la carte itemised section"
```

---

## Task 4: Add recurring fees section

A clear, transparent block listing the monthly/annual costs the customer should expect.

**Files:**
- Modify: `app/kick-starter/page.tsx` (insert after à la carte section)

- [ ] **Step 1: Insert recurring fees section after the à la carte block**

```tsx
      {/* RECURRING FEES */}
      <section className="service-block" id="recurring">
        <div className="service-block-inner" style={{ display: 'block', maxWidth: '960px' }}>
          <div className="service-content" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label">What you&apos;ll pay each month</span>
            <h2>Transparent. No surprises.</h2>
            <p className="desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
              The one-off package price covers the build. These are the ongoing fees — most paid
              directly to the provider, so there&apos;s no markup hidden in there.
            </p>
          </div>
          <div className="pricing-extras">
            <div className="pricing-extras-grid">
              <div className="pricing-extra-item">
                <span>
                  <strong>Website hosting (Vercel Basic)</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$10/mo</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Payable to The Ai Advantage Co. — covers your site staying live
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Vercel Pro upgrade</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>Current Vercel Pro price</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Only if you need Pro features · paid to Vercel directly
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Calendly Basic</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$15/mo</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Only if booking added · paid to Calendly directly
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Business email</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>~$8–10/mo per mailbox</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Google Workspace or Microsoft 365 · you arrange · we&apos;ll advise on which
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Domain name</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>~$15–25/yr</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    Paid to your registrar directly · we&apos;ll recommend one
                  </span>
                </span>
              </div>
              <div className="pricing-extra-item">
                <span>
                  <strong>Support retainer (optional)</strong> &nbsp;
                  <span style={{ color: 'var(--copper)' }}>$100/mo</span>
                  <br />
                  <span style={{ color: 'var(--ink-tertiary)', fontSize: '13px' }}>
                    1 hour/month of small-business updates · larger work POA
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 3: Visual check**

Reload `/kick-starter`. Scroll to the recurring section.
Expected: 6 cards showing recurring fees with prices in copper, secondary description below.

- [ ] **Step 4: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): add recurring fees section"
```

---

## Task 5: Add FAQ section

Six questions answered, using the existing `details`/`summary`-based `faq-item` pattern from `/pricing`.

**Files:**
- Modify: `app/kick-starter/page.tsx` (insert after recurring fees section)

- [ ] **Step 1: Insert the FAQ section**

```tsx
      {/* FAQ */}
      <section className="faq">
        <div className="faq-inner">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Common questions.</h2>
          </div>

          <details className="faq-item">
            <summary>How long does the whole thing take?</summary>
            <div className="faq-body">
              <p>
                <strong>Lite</strong> — usually about a week from kick-off to handover.
                <br />
                <strong>Standard</strong> — usually 3–4 weeks (most of that is your time on the brand
                and website content).
                <br />
                <strong>Plus</strong> — usually 5–6 weeks. Full custom brand design takes longer, and
                the AI integration workflows need real examples from your day-to-day.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What do I need to bring?</summary>
            <div className="faq-body">
              <p>
                A business name, any existing brand assets (if you have them), website content (we
                can help shape this), and a decision on which Ai platform you want set up. If you
                don&apos;t know which platform, we&apos;ll help you pick — that&apos;s usually the
                first 30 minutes of the kick-off call.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Who owns the brand kit, docs, and website after?</summary>
            <div className="faq-body">
              <p>
                You do. All source files are handed over to you. The website stays hosted with us at
                $10/mo for convenience, but you own the code and can migrate it any time. No lock-in.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Can I pay in instalments?</summary>
            <div className="faq-body">
              <p>
                Yes. The default is 50% deposit to start, 50% on handover. If you need a longer
                payment plan, send us a note via the enquiry form and we&apos;ll work something out.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What&apos;s not included?</summary>
            <div className="faq-body">
              <p>
                Custom software development, photography, copywriting beyond the 5 website pages,
                paid ad accounts (Google Ads, Meta), and any third-party subscriptions (your Ai
                platform plan, your email, your domain). We&apos;ll always tell you what something
                costs before you sign up.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Can I add items later?</summary>
            <div className="faq-body">
              <p>
                Yes — every à la carte item is available individually at the listed price. You can
                start with Lite and add Ai setup and a website in three months when you&apos;re
                ready. We keep your brand kit on file so it carries through.
              </p>
            </div>
          </details>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 3: Visual check**

Reload `/kick-starter`. Scroll to the FAQ.
Expected: 6 collapsed FAQ items, click each one to expand, content readable, matches `/pricing` FAQ styling.

- [ ] **Step 4: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): add FAQ section"
```

---

## Task 6: Add the enquiry form (Web3Forms)

The form is the page's main conversion mechanism. It reuses the existing Web3Forms access key from `/contact`, with a tier dropdown and a "best time to call" field added.

**Files:**
- Modify: `app/kick-starter/page.tsx` (insert after FAQ section)

- [ ] **Step 1: Insert the enquiry form section**

```tsx
      {/* ENQUIRY FORM */}
      <section className="contact-section" id="enquiry">
        <div className="contact-section-inner">
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="kick-starter-form"
          >
            <input type="hidden" name="access_key" value="bed839a8-b01a-443f-b32b-2187256a17c5" />
            <input
              type="hidden"
              name="subject"
              value="New Kick Starter enquiry — The Ai Advantage Co."
            />
            <input
              type="hidden"
              name="from_name"
              value="The Ai Advantage Co. — Kick Starter"
            />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <h2>Send a Kick Starter enquiry</h2>
            <p className="form-sub">
              Fill this out and we&apos;ll call you back within one business day to talk through which
              tier fits.
            </p>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="ks-name">
                  Name <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="ks-name" name="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="ks-email">
                  Email <span className="req">*</span>
                </label>
                <input className="form-input" type="email" id="ks-email" name="email" required />
              </div>
            </div>

            <div className="form-row two-col">
              <div>
                <label className="form-label" htmlFor="ks-phone">
                  Phone <span className="opt">(so we can call you back)</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="ks-phone"
                  name="phone"
                  placeholder="04xx xxx xxx"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="ks-business">
                  Business / Organisation <span className="opt">(optional)</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="ks-business"
                  name="business"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="ks-tier">
                Tier interested in
              </label>
              <select className="form-select" id="ks-tier" name="tier" defaultValue="">
                <option value="">Not sure — help me pick</option>
                <option value="lite">Lite — Identity Starter — $500</option>
                <option value="standard">Standard — Business Kick Starter — $2,000</option>
                <option value="plus">Plus — Full Kick Starter — $3,000</option>
                <option value="custom">Custom (à la carte)</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="ks-callback">
                Best time to call you
              </label>
              <select
                className="form-select"
                id="ks-callback"
                name="best_time_to_call"
                defaultValue=""
              >
                <option value="">Any time during business hours</option>
                <option value="morning">Morning (8am–12pm)</option>
                <option value="midday">Midday (12pm–2pm)</option>
                <option value="afternoon">Afternoon (2pm–5pm)</option>
                <option value="evening">Evening (5pm–7pm)</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="ks-message">
                Tell us about your business and what you want help with{' '}
                <span className="req">*</span>
              </label>
              <textarea
                className="form-textarea"
                id="ks-message"
                name="message"
                placeholder="A few sentences on what your business does, where you're at, and what you'd like sorted. Plain English is fine."
                required
              />
            </div>

            <button className="btn btn-primary form-submit" type="submit">
              Send enquiry
            </button>
            <p className="form-note">
              We&apos;ll call you back within one business day. We don&apos;t add you to a mailing
              list and we don&apos;t share your details.
            </p>
          </form>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 3: Visual check**

Reload `/kick-starter`. Scroll to or click any "Enquire about [tier]" button to anchor to the form.
Expected:
- Form renders with same look as `/contact` form
- All fields present: Name, Email, Phone, Business, Tier dropdown, Best time to call, Message
- Submit button visible and styled
- Anchor link from `#enquiry` works (scrolls to the form)

- [ ] **Step 4: Submit a real test enquiry**

Fill in test details:
- Name: "Test from Plan"
- Email: your own email or `theaiadvantagecoadmin@gmail.com`
- Phone: any number
- Tier: pick Standard
- Best time: Morning
- Message: "Test submission from local dev — please ignore"

Click "Send enquiry".
Expected: Redirects to https://web3forms.com/success. Within ~1 minute, an email arrives at `theaiadvantagecoadmin@gmail.com` with subject "New Kick Starter enquiry — The Ai Advantage Co." and all fields populated.

If the email doesn't arrive: check the access key matches `/contact`, check the Web3Forms dashboard for delivery logs.

- [ ] **Step 5: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): add Web3Forms enquiry form with tier and callback fields"
```

---

## Task 7: Add the final CTA section

Closes the page with a single "Send enquiry" prompt, matching the `final-cta` pattern from `/services`.

**Files:**
- Modify: `app/kick-starter/page.tsx` (insert after enquiry form section, before closing `</>`)

- [ ] **Step 1: Insert the final CTA section**

```tsx
      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>
            Not sure which tier fits? <span className="accent">Just ask.</span>
          </h2>
          <p>
            Send a short note via the enquiry form above and we&apos;ll call you back within one
            business day. We&apos;ll help you pick — or recommend you don&apos;t book if it&apos;s
            not the right fit.
          </p>
          <div className="ctas">
            <a href="#enquiry" className="btn btn-primary">
              Send enquiry
            </a>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 3: Visual check**

Reload `/kick-starter`. Scroll to the very bottom.
Expected: Final CTA renders identically to the one on `/services`, single "Send enquiry" button anchoring to the form.

- [ ] **Step 4: Full-page review**

Top-to-bottom scroll through `/kick-starter`. Confirm:
- Hero
- Three tier blocks (Lite, Standard alt-reversed, Plus)
- À la carte 11-card grid
- Recurring fees 6-card grid
- FAQ with 6 collapsible questions
- Enquiry form
- Final CTA
- No console errors
- Mobile responsive — open dev tools, switch to a narrow viewport (e.g. 375px), confirm everything stacks readably

- [ ] **Step 5: Commit**

```bash
git add app/kick-starter/page.tsx
git commit -m "feat(kick-starter): add final CTA section"
```

---

## Task 8: Add "Kick Starter" link to top navigation

Insert between "Services" and "Pricing" in `components/SiteNav.tsx`.

**Files:**
- Modify: `components/SiteNav.tsx`

- [ ] **Step 1: Add the new nav link**

Find the existing block (around lines 36–45):

```tsx
          <li>
            <a href="/services" className={isActive('/services') ? 'is-active' : ''}>
              Services
            </a>
          </li>
          <li>
            <a href="/pricing" className={isActive('/pricing') ? 'is-active' : ''}>
              Pricing
            </a>
          </li>
```

Replace with:

```tsx
          <li>
            <a href="/services" className={isActive('/services') ? 'is-active' : ''}>
              Services
            </a>
          </li>
          <li>
            <a
              href="/kick-starter"
              className={isActive('/kick-starter') ? 'is-active' : ''}
            >
              Kick Starter
            </a>
          </li>
          <li>
            <a href="/pricing" className={isActive('/pricing') ? 'is-active' : ''}>
              Pricing
            </a>
          </li>
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 3: Visual check across pages**

In dev, visit:
- http://localhost:3000/ — confirm "Kick Starter" link appears between Services and Pricing
- http://localhost:3000/services — same
- http://localhost:3000/kick-starter — same, "Kick Starter" should have the `is-active` styling (underline / accent state)
- http://localhost:3000/pricing — same, Pricing should have `is-active` styling
- http://localhost:3000/contact — same

- [ ] **Step 4: Commit**

```bash
git add components/SiteNav.tsx
git commit -m "feat(nav): add Kick Starter link to top navigation"
```

---

## Task 9: Add cross-link callout on `/services`

A short paragraph at the bottom of `/services` pointing to `/kick-starter`.

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Locate the insertion point**

Find the `{/* FINAL CTA */}` comment in `app/services/page.tsx` (currently around line 393).

- [ ] **Step 2: Insert a callout section immediately before the FINAL CTA**

Insert this new section directly before `{/* FINAL CTA */}`:

```tsx
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
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 4: Visual check**

Reload http://localhost:3000/services. Scroll to the bottom.
Expected: A new alt-background section appears between the "Why this works" section and the final CTA, with the Kick Starter callout and a "See Kick Starter" button that links to `/kick-starter`.

- [ ] **Step 5: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat(services): add Kick Starter callout cross-link"
```

---

## Task 10: Add a Kick Starter row to `/pricing` extras grid

A new card in the existing extras grid on `/pricing`.

**Files:**
- Modify: `app/pricing/page.tsx`

- [ ] **Step 1: Locate the insertion point**

In `app/pricing/page.tsx`, find the closing of the existing `pricing-extras-grid` block — specifically the last `pricing-extra-item` (currently the "Face-to-face travel" item around lines 270–279).

- [ ] **Step 2: Insert the Kick Starter row at the end of the grid**

Directly after the closing `</div>` of the "Face-to-face travel" item and before the closing `</div>` of `pricing-extras-grid`, insert:

```tsx
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
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Success.

- [ ] **Step 4: Visual check**

Reload http://localhost:3000/pricing. Scroll to the "Add-ons & extras" section.
Expected: A new card appears at the end of the extras grid with the Kick Starter tier pricing and a "See Kick Starter →" inline link.

- [ ] **Step 5: Commit**

```bash
git add app/pricing/page.tsx
git commit -m "feat(pricing): add Kick Starter row to extras grid"
```

---

## Task 11: Final verification + push live

Push the whole feature to `main`, which triggers a Vercel production deploy. Then verify on production.

**Files:** none (deploy)

- [ ] **Step 1: Confirm clean git status and review commits**

Run: `git status`
Expected: `nothing to commit, working tree clean`.

Run: `git log --oneline -12`
Expected: See the commits from Tasks 1–10 stacked on top of `main`. Approximately:
- `feat(pricing): add Kick Starter row to extras grid`
- `feat(services): add Kick Starter callout cross-link`
- `feat(nav): add Kick Starter link to top navigation`
- `feat(kick-starter): add final CTA section`
- `feat(kick-starter): add Web3Forms enquiry form with tier and callback fields`
- `feat(kick-starter): add FAQ section`
- `feat(kick-starter): add recurring fees section`
- `feat(kick-starter): add à la carte itemised section`
- `feat(kick-starter): add three tier blocks (Lite, Standard, Plus)`
- `feat(kick-starter): scaffold /kick-starter page with hero`

- [ ] **Step 2: Run final local build**

Run: `npm run build`
Expected: Success. Look in the route table for `/kick-starter` — should appear as a statically generated page.

- [ ] **Step 3: Push to origin/main**

Run: `git push origin main`
Expected: Push succeeds. Vercel webhook triggers a production deploy.

- [ ] **Step 4: Wait for Vercel deploy to finish**

Either check the Vercel dashboard or wait ~2 minutes.

- [ ] **Step 5: Smoke-check the live site**

Visit `https://www.theaiadvantageco.com.au/kick-starter` in a browser. Confirm:
- Hero renders
- Three tier blocks render with correct images
- À la carte 11-card grid renders
- Recurring fees 6-card grid renders
- 6-item FAQ expands when clicked
- Enquiry form renders with all fields
- Final CTA renders

Also confirm:
- Top nav shows "Kick Starter" link between Services and Pricing on every page
- `/services` shows the callout cross-link section
- `/pricing` extras grid includes the Kick Starter row

- [ ] **Step 6: Submit a real enquiry on production**

Fill out the live form with a test entry. Confirm the email arrives at `theaiadvantagecoadmin@gmail.com` within ~1 minute with subject "New Kick Starter enquiry — The Ai Advantage Co.".

- [ ] **Step 7: Done**

The feature is live. No further action required.

---

## Self-review checklist (run before handing off)

Engineer should do these before starting Task 1:

- [ ] Read the spec at `docs/specs/2026-06-03-ai-business-kick-starter-design.md` first
- [ ] Confirm `npm install` has been run and `npm run build` passes baseline
- [ ] Confirm working tree is clean
- [ ] Confirm the Web3Forms access key matches the one in `/contact` (sanity check — both should be `bed839a8-b01a-443f-b32b-2187256a17c5`)

After each task, before committing:

- [ ] `npm run build` PASS
- [ ] Visual check in dev PASS
- [ ] `git diff` shows only the intended file(s)
- [ ] No console errors in the browser

If any of those fail, fix before committing.
