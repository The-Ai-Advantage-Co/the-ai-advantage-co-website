# Gated Guide Library — Design Spec

**Date:** 2026-05-26
**Author:** Brad (with Claude facilitating brainstorm)
**Status:** Approved by Brad — ready for delegation via Tim Cook
**Repo:** `the-ai-advantage-co-website`
**Target URL:** `https://theaiadvantageco.com.au/guides`

---

## 1. Purpose

Give coaching clients password-gated access to the full library of 94 user guides (ChatGPT, Claude, Gemini, Copilot) via a polished section of the existing brand site. The password lives in each client's post-session email. One shared password, rotated quarterly.

## 2. Decisions locked

| Decision | Choice |
|----------|--------|
| Credential model | One shared password, rotated quarterly |
| Hosting | Folder on main site (`theaiadvantageco.com.au/guides`) |
| Site platform | Lift-and-shift existing static HTML into one Next.js 14 project |
| Layout | Landing row of all 4 Master Guide hero cards (always visible at top of `/guides`), then platform tabs below for Core/Topical drill-down |
| Click behaviour | Opens in same tab at its own URL (e.g. `/guides/copilot/copilot-excel.html`) |
| Grouping within tab | Below the always-visible Master row: Core User Guides section → Topical Guides section for the active tab |
| Brand alignment | Reuse existing `styles.css`, fonts (Inter + Cormorant + JetBrains Mono), copper/gold tokens, fixed circuit video bg |
| Sub-line writing | Brené Brown (Education Lead) extracts 94 one-liners from guide intros |

## 3. Architecture

### 3.1 Repo layout (target state)

```
the-ai-advantage-co-website/
├── app/
│   ├── layout.tsx                # Loads styles.css, renders nav + video bg + footer
│   ├── page.tsx                  # Home (was index.html)
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   └── guides/
│       ├── page.tsx              # Library: tabs + cards (gated)
│       ├── login/page.tsx        # Password gate (matches hero pattern)
│       ├── logout/route.ts       # POST → clear cookie, 302 home
│       └── not-found.tsx         # Branded 404 for bad slugs
├── middleware.ts                 # Cookie check on /guides/* (excludes /guides/login)
├── content/
│   ├── guides.json               # Manifest of 94 guides
│   └── guides.schema.json        # JSON schema for validation
├── public/
│   ├── assets/                   # Existing logos, web/, etc — unchanged
│   ├── styles.css                # Existing site CSS — verbatim
│   └── guides/
│       ├── chatgpt/              # 24 HTML files
│       ├── claude/               # 21 HTML files
│       ├── gemini/               # 26 HTML files
│       └── copilot/              # 23 HTML files
├── lib/
│   ├── auth.ts                   # Password check + signed cookie helpers
│   └── manifest.ts               # Load + validate + group guides.json
├── scripts/
│   ├── sync-guides.js            # Copy from OneDrive → public/guides/, regen manifest
│   ├── inject-back-link.js       # Idempotent prebuild step — adds back-pill to each HTML
│   └── seed-manifest.js          # One-time seed of guides.json from filesystem
├── package.json
├── next.config.js
├── .env.local                    # Local: GUIDES_PASSWORD, COOKIE_SECRET
└── docs/specs/                   # This spec lives here
```

### 3.2 Brand alignment (locked)

The shell pages (gate + library) MUST feel like native pages of [theaiadvantageco.com.au](https://theaiadvantageco.com.au):

- Reuse `styles.css` verbatim — same tokens (`--surface-0`, `--ink-primary`, `--copper`, `--gold-1/2/3`, `--hairline`)
- Same fonts (`--font-display`, `--font-body`, `--font-serif`, `--font-mono`)
- Same fixed `circuit-loop.mp4` video background, same `.site-bg-mask` overlay
- Same `.site-nav` markup (logo lockup + Home/Services/Pricing/Contact + gold "Book a Session")
- Gate page mirrors the home hero pattern: `.eyebrow` → `.h1` → `.lead` → input → `.btn.btn-primary`
- Library page uses the same `.eyebrow / .h2 / .lead` rhythm and hairline-bordered cards
- Same footer

Anna Wintour PASS-gates the final render before launch.

## 4. Auth flow

### 4.1 Model
- Single shared password stored in `GUIDES_PASSWORD` env var on Vercel
- On successful submit, server sets a signed HTTP-only cookie
- `middleware.ts` validates the cookie on every request under `/guides/*` (except `/guides/login`)

### 4.2 Cookie spec
- **Name:** `aiadv_guides_access`
- **Value:** HMAC-SHA256 signed token. Payload = expiry timestamp. Signature key = `COOKIE_SECRET`.
- **Attributes:** HTTP-only, Secure, SameSite=Lax
- **Lifetime:** 30 days
- Rotating `COOKIE_SECRET` invalidates all existing cookies the moment the redeploy goes live.

### 4.3 Rate limiting
- 5 attempts per IP per minute on `POST /guides/login`
- Backed by Vercel KV (production) with an in-memory map fallback for local dev
- Failed attempts get a 200ms artificial delay to prevent timing leaks

### 4.4 Request flow

```
Client clicks email link → /guides
        │
        ▼
  middleware.ts intercepts
        │
        ├─ Valid cookie? ──► continue to /guides (library)
        │
        └─ No / invalid ──► 302 /guides/login?next=/guides

Client enters password → POST /guides/login (server action)
        │
        ▼
  lib/auth.ts: timing-safe compare against GUIDES_PASSWORD
        │
        ├─ Match ──► set cookie, redirect to ?next= or /guides
        │
        └─ Miss ──► render login again with error, rate-limit (5/min per IP)
```

### 4.5 Sign-out
- "Sign out" pill in the nav, only visible when authenticated
- `POST /guides/logout` → clears cookie → 302 to `/`

## 5. UI specs

### 5.1 Gate page (`/guides/login`)

Vertically centred, mirrors home hero pattern.

- Eyebrow: `CLIENT RESOURCES` (copper, uppercase, 0.18em tracking)
- H1: `Your AI Guide Library.` (Inter 800, -0.055em tracking)
- Lead: "The full library of user guides for Copilot, ChatGPT, Claude, and Gemini — included with every coaching engagement."
- Password input: 480px max, single field, autofocus, `type="password"`
- Submit: gold `.btn.btn-primary`, full-width on mobile
- Small print: "Your password is in the email you received after your last session. Lost it? theaiadvantagecoadmin@gmail.com"
- Error state: red hairline on input, message replaces small print, `aria-live="polite"`
- Rate-limit state: "Too many attempts. Try again in a minute." Button disabled 60s.
- Mobile: input full width, padding reduces, video bg stays
- Native `<form>`, Enter key submits, fully keyboard accessible

### 5.2 Library page (`/guides`)

```
┌──────────────────────────────────────────────────────────────────────┐
│  [site-nav with Sign out pill]                                       │
├──────────────────────────────────────────────────────────────────────┤
│        USER GUIDE LIBRARY                                            │
│        Your AI Guides.                                               │
│        Start with the Master Guide for the platform you use most.    │
│        Then drop into the topic you need this week.                  │
│                                                                      │
│        MASTER GUIDES                                                 │
│  ┌──────────┬──────────┬──────────┬──────────┐                       │
│  │ ChatGPT  │  Claude  │  Gemini  │ Copilot  │   ← 4 Master cards    │
│  │  Master  │  Master  │  Master  │  Master  │     (always visible)  │
│  │  Guide   │  Guide   │  Guide   │  Guide   │                       │
│  └──────────┴──────────┴──────────┴──────────┘                       │
│                                                                      │
│        GO DEEPER                                                     │
│        [ ChatGPT ][ Claude ][ Gemini ][ Copilot ]   ← drill-down tabs│
│                                                                      │
│        CORE USER GUIDES                                              │
│        The structured series.                                        │
│  [ 3-column grid of Core cards for active tab ]                      │
│                                                                      │
│        TOPICAL GUIDES                                                │
│        Use cases & deep dives.                                       │
│  [ 3-column grid of Topical cards for active tab ]                   │
├──────────────────────────────────────────────────────────────────────┤
│                          [existing site footer]                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Master Guides row (always visible at top, all 4 platforms):**
- 4-card row, equal width, ~180px tall each
- Each card: platform name eyebrow (copper), "Master Guide" title (Inter 700, 22px), short sub from manifest, right-arrow on hover
- Subtle gold left border (4px) on each
- Subtle gradient bg: `linear-gradient(to bottom, rgba(217,184,112,0.08), transparent)`
- Whole card links to `/guides/<platform>/master-<platform>.html`
- Mobile (<640px): stacks to 1 column, each card full-width
- Tablet (640–1023px): 2×2 grid

**Tabs (drill-down section below Masters):**
- 4 platform tabs (ChatGPT, Claude, Gemini, Copilot)
- URL-bound: `/guides?tool=copilot` so tabs are bookmarkable
- Default active tab on landing: `chatgpt` (alphabetical) so the Core/Topical area is always populated — Masters above carry the "all 4 platforms" prominence so the tab default carries no special weight
- Mobile: tabs collapse to a single full-width `<select>` dropdown

**Card anatomy (Core + Topical cards under the active tab):**
- Hairline border, white surface, 24px padding, 8px radius
- Title: Inter 600, 18px, `--ink-primary`
- 1-line sub from manifest (≤ 90 chars), `--ink-secondary`
- Hover: 2px lift, subtle shadow, title becomes copper
- Whole card links to `/guides/<platform>/<slug>.html`

**Responsive grid:**
- Desktop ≥1024px: 3 columns
- Tablet 640–1023px: 2 columns
- Mobile <640px: 1 column

### 5.3 Individual guide pages

HTML files served verbatim from `public/guides/<platform>/<slug>.html`. No iframe.

**Back-pill (injected at build time):**

Build script `scripts/inject-back-link.js` walks every `public/guides/**/*.html` and, if marker `<!-- aiadv-back -->` is absent, injects after `<body>`:

```html
<!-- aiadv-back -->
<a id="aiadv-back" href="/guides">← Guide Library</a>
<style>
  #aiadv-back {
    position: fixed; top: 16px; right: 16px; z-index: 9999;
    font-family: Inter, -apple-system, sans-serif;
    font-size: 13px; font-weight: 500; letter-spacing: -0.01em;
    padding: 8px 14px; border-radius: 999px;
    background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
    border: 1px solid #D2D2D7; color: #1D1D1F;
    text-decoration: none; transition: all 0.18s ease;
  }
  #aiadv-back:hover { color: #B8741A; border-color: #B8741A; }
  @media print { #aiadv-back { display: none; } }
</style>
```

Source files in OneDrive are NEVER modified. Only the copies under `public/guides/` get injection, only during build, and only if the marker is absent (idempotent).

**Caching:** `Cache-Control: private, max-age=300, must-revalidate`

**404:** Bad slug → branded `not-found.tsx` with "← Back to library" link

## 6. The manifest (`content/guides.json`)

### 6.1 Schema (per entry)

```json
{
  "slug": "copilot-excel-user-guide",
  "platform": "copilot",
  "group": "core",
  "title": "Excel",
  "sub": "Spreadsheets, formulas, and analysis with Copilot.",
  "file": "copilot/copilot-excel-user-guide.html",
  "order": 30,
  "updated": "2026-04-12"
}
```

### 6.2 Field rules
- `slug` — kebab-case, unique across the whole file
- `platform` — `chatgpt | claude | gemini | copilot`
- `group` — `master | core | topical`
- `title` — short display title (~3 words), distinct from the long file title
- `sub` — ≤ 90 chars, shown under title on card
- `file` — relative path inside `public/guides/`
- `order` — integer sort key within each group (10, 20, 30…)
- `updated` — optional ISO date

### 6.3 Build-time validation
- Every `file` exists on disk — fail build if not
- Every `slug` is unique
- `platform` and `group` are in their allowed sets
- Exactly one `master` per platform (warn otherwise)
- `sub` ≤ 90 chars (warn if exceeded)

### 6.4 Seeding
`scripts/seed-manifest.js` walks `public/guides/`, infers `platform` from folder, infers `group` from filename pattern:
- Filename matches `Master Guide - *.html` → `master`
- Filename ends in `-User-Guide.html` → `core`
- Otherwise → `topical`

Auto-generates kebab-case `slug` and `title`. Leaves `sub: ""` for Brené to fill.

## 7. Deployment & ops

### 7.1 Vercel project
- One project: `the-ai-advantage-co-website`
- Connected to single GitHub repo
- Production: `main`
- Preview deploys on every PR

### 7.2 Domain
- Production: `theaiadvantageco.com.au` apex + `www.` alias
- DNS cutover: update A and CNAME records to Vercel (Charlie Munger or Brad to action)
- SSL auto-issued

### 7.3 Environment variables

| Name | Scope | Purpose |
|------|-------|---------|
| `GUIDES_PASSWORD` | Production + Preview | Shared client password |
| `COOKIE_SECRET` | Production + Preview | HMAC key for cookie signature |
| `KV_REST_API_URL` | Production | Rate-limit store |
| `KV_REST_API_TOKEN` | Production | Rate-limit auth |

Preview gets a SEPARATE `GUIDES_PASSWORD` so QA doesn't expose the live one. Local reads from `.env.local` (git-ignored).

### 7.4 Quarterly rotation playbook (owned by Mary Barra)

```
EVERY QUARTER (1st of Feb / May / Aug / Nov, ~5 minutes)

1. Generate new password
   Format: <season>-<year>-aiadv  (e.g. autumn-2026-aiadv)

2. Generate fresh COOKIE_SECRET
   `openssl rand -base64 32` or 1Password generator

3. Vercel dashboard → Environment Variables
   Update GUIDES_PASSWORD + COOKIE_SECRET → Save

4. Trigger redeploy
   Vercel → Deployments → "Redeploy" latest production (~60s)

5. Update postclient skill template with new password

6. Log entry in ops register: date, new password (last 4), rotator
```

### 7.5 Post-session email integration

The `postclient` skill template gains a PS block:

```
PS — Your AI Guide Library is live at:
https://theaiadvantageco.com.au/guides

Password: {{GUIDES_PASSWORD}}

Bookmark it for quick reference. The password rotates each quarter —
you'll get the new one in your next post-session email.
```

The session cookie itself lasts 30 days; clients re-enter the same password after that to extend by another 30. The password remains valid until the next quarterly rotation (so on average, ~45 days of validity at any point in a quarter, max ~90).

Joe Rogan updates the template each quarter when the password rotates.

### 7.6 Logging & monitoring
- Vercel logs every login attempt (no PII — IPs + status only)
- Weekly Vercel Analytics email for page view trends
- No custom dashboarding v1

### 7.7 Rollback
- Every deploy is immutable on Vercel — one-click "Promote previous deployment"
- 94 HTML sources live in OneDrive; repo is a sync target, never source of truth
- No DB to back up

### 7.8 Cost
- Vercel Hobby: $0/month
- Vercel KV: free tier covers expected traffic
- Domain: existing
- Total new run-cost: $0

## 8. Acceptance criteria

Ship when all 9 are green:

1. Main site routes (`/`, `/services`, `/pricing`, `/contact`) render visually identical to current static HTML
2. `/guides/login` renders gate page; valid password sets cookie, invalid shows error, 5 wrong in 60s rate-limits
3. `/guides` renders library with the always-visible 4 Master Guide hero row at top, then 4 drill-down tabs with Core + Topical sections below; landing loads in <100ms
4. All 94 guides accessible from cards; back-pill present and styled on every guide page
5. Direct URL like `/guides/copilot/copilot-excel.html` redirects unauthenticated visitors to login, returns them post-auth
6. Sign-out clears cookie and redirects home
7. `guides.json` validates at build time — no missing files, no duplicate slugs, exactly one master per platform
8. **Anna Wintour PASS** on gate page, library page, and back-pill
9. Deployed to `theaiadvantageco.com.au` with DNS cut over and SSL green

## 9. Explicit out-of-scope (do NOT build v1)

- Per-client tracking / analytics by client identity
- Per-client passwords or revocation
- Search bar
- Read time / favourites / recently-viewed
- In-guide next/previous nav
- Watermarking
- 2FA, account recovery, "remember me"
- Custom analytics dashboard
- Native mobile app
- PDF download buttons

All of these can be added Phase 2 without throwing v1 work away.

## 10. Delegation plan (Tim Cook dispatch)

```
Tim Cook (single intake — receives this approved spec from Brad)
│
├── Sheryl Sandberg  ─  Head of Delivery (owns the deadline + scope)
│       │
│       ├── Jony Ive  ─  PRIMARY BUILDER (website lead)
│       │     ├── Migrate 4 static pages → Next.js app routes
│       │     ├── /guides + /guides/login + middleware.ts + auth lib
│       │     ├── Library page UI (tabs + Master hero + Core/Topical grids)
│       │     ├── Build scripts: sync-guides, inject-back-link, seed-manifest
│       │     ├── Vercel deploy + env vars + DNS cutover
│       │     ├── QA all 94 deep links
│       │     └── Handover doc
│       │
│       └── Brené Brown  ─  Education Lead (parallel workstream)
│             └── Write the 94 sub lines for guides.json (≤90 chars each)
│
├── Steve Jobs  ─  Head of Brand & Marketing (brand sign-off)
│       │
│       └── Anna Wintour  ─  Brand Guardian
│             └── PASS/FAIL gate on the final visual render. PASS required.
│
├── Warren Buffett  ─  Head of Ops & Finance (internal engine)
│       │
│       ├── Mary Barra  ─  Ops Coordinator
│       │     ├── Write the quarterly rotation SOP from Section 7.4
│       │     └── Add calendar reminder for next rotation (1 Aug 2026)
│       │
│       └── Jimmy Wales  ─  Build & Standards Archivist
│             ├── Add project to Build Log
│             ├── Advance stages: scoped → in build → in QA → live → retained
│             └── Frontmatter + naming hygiene on new files
│
└── Howard Schultz  ─  Head of Growth & CS (client-facing touchpoint)
        │
        └── Joe Rogan  ─  Account Manager
              └── Update postclient skill template with PS block + password
                  (No announcement email — no paid client base yet. New
                  clients pick up the URL + password via their post-session
                  email automatically.)
```

## 11. Suggested sequencing

| Week | Owner | Deliverable |
|------|-------|-------------|
| 1 | Jony | Lift-and-shift 4 main pages into Next.js, deploy preview |
| 1 | Brené | Draft all 94 sub lines, Brad approves |
| 2 | Jony | Build /guides + /guides/login + middleware + scripts |
| 2 | Mary | Draft rotation SOP |
| 3 | Jony | Library UI + back-pill injection + QA |
| 3 | Anna | Brand QA pass — PASS or specific fixes |
| 4 | Jony | DNS cutover, production launch |
| 4 | Joe | Update postclient template with new PS block (no announcement email — no paid client base yet) |
| 4 | Jimmy | Mark project Live in Build Log |

Realistic timeline: 4–6 weeks accounting for review cycles.

## 12. Open items at hand-off

- **Read time on cards** — left out v1. Add Phase 2 if clients ask.
- **Updated date pill** — `updated` field exists in manifest schema but no UI v1.

### Resolved during dispatch (2026-05-26)

- ~~Default tab on first load~~ — landing page now shows all 4 Master Guides at top (always visible); below them, drill-down tabs default to `chatgpt` alphabetical.
- ~~Lost-password mailto~~ — resolved to `theaiadvantagecoadmin@gmail.com`.
- ~~Announcement email to existing clients~~ — dropped. No paid client base yet. New clients pick up the URL + password via their post-session email automatically once Joe updates the postclient skill template.
