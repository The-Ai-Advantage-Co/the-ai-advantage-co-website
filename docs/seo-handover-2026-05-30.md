# SEO Setup — Handover (30 May 2026)

Goal: surface **theaiadvantageco.com.au** when people Google **Brad Harle**.

## Diagnosis

- Site is indexed by Google (confirmed via URL Inspection in GSC).
- Site already ranks **#1 for "The Ai Advantage Co"** (business name).
- Site does **NOT** rank for "Brad Harle" because:
  1. Body copy never mentioned "Brad Harle" (now fixed — see Founder section on homepage).
  2. Existing "Brad Harle" search results are dominated by prior roles (Woolworths, genU, TAFE / Trinity College Colac).
  3. No external entity signals tying Brad to the new company (LinkedIn is now updated; IG/YouTube/FB still need finishing).

## What's done

### Website code (deployed via Vercel)
- `app/sitemap.ts` → serves `/sitemap.xml` listing home, /services, /pricing, /contact
- `app/robots.ts` → serves `/robots.txt`; allow all except `/guides` (gated); declares sitemap + host
- `app/layout.tsx`:
  - `metadataBase` updated to `https://www.theaiadvantageco.com.au` (matches canonical host)
  - `alternates.canonical` set
  - JSON-LD `@graph` injected via `<script type="application/ld+json">`:
    - `Organization` + `LocalBusiness` + `ProfessionalService` (combined)
    - `Person` (Brad Harle, founder)
    - `WebSite` (publisher → Organization)
    - `sameAs` includes LinkedIn, YouTube channel, Instagram
- `app/page.tsx`: new "Who's behind it" Founder section mentioning **Brad Harle** + **Warrnambool, Victoria** in visible body text
- Per-page canonicals on `/`, `/services`, `/pricing`, `/contact`

Commits: `c0ee263`, `7fd8e8d`, `f4c933a` — all pushed to `main`.

### Google Search Console
- Domain property `sc-domain:theaiadvantageco.com.au` verified.
- URL Inspection on homepage confirms: **URL is on Google · Page is indexed · HTTPS**.
- Sitemap **submitted successfully** at `/sitemap.xml` — Google discovered 4 pages.

### LinkedIn
- Custom URL changed: `linkedin.com/in/brad-harle-aiadvantage` (was `/brad-harle-731447407`).
- Headline already set: "Ai Coach at The Ai Advantage Co" (confirmed).
- Location: Warrnambool, Victoria, Australia (confirmed).
- About section saved with full bio (mentions Brad Harle, founder, The Ai Advantage Co., Warrnambool, all 4 platforms, services, contact).
- Contact info → Website added: `https://www.theaiadvantageco.com.au` (type: Company).

### Instagram (@theaiadvantageco)
- Bio updated (133/150 chars): "Practical Ai coaching for individuals & small business. Warrnambool VIC + online Australia-wide. Copilot · ChatGPT · Claude · Gemini."
- **⚠ Website link is mobile-only on Instagram**. See punch list below.

## Punch list (you / Brad)

### 1 — Instagram website link (mobile app only, ~30 seconds)
Open the Instagram app on your phone → your profile → **Edit profile** → **Website** → paste `https://www.theaiadvantageco.com.au` → Done. Instagram blocks website edits on desktop.

### 2 — YouTube channel description + Links (~3 minutes)
1. Go to https://studio.youtube.com/channel/UCV9iaiC2izg6pBA5LjCNjzw/editing/profile (dismiss the "Welcome to YouTube Studio" modal that pops up).
2. **Description** field — paste:
   ```
   The Ai Advantage Co. — practical Ai coaching for individuals, small businesses, and teams across Australia.

   I'm Brad Harle. I run The Ai Advantage Co. from Warrnambool, Victoria. We cover Copilot, ChatGPT, Claude, and Gemini — and figure out which one fits your job, not someone else's demo.

   Sessions are one-on-one or small group, live, and built around your real tasks. No slides. No fluff.

   🌐 theaiadvantageco.com.au
   📍 Warrnambool, Victoria (sessions online Australia-wide)
   📧 theaiadvantagecoadmin@gmail.com
   ```
3. **Links** → click **Add link** → Title: `Website` → URL: `https://www.theaiadvantageco.com.au`. Add another for Instagram if you want: Title `Instagram` → URL `https://www.instagram.com/theaiadvantageco/`.
4. **Contact info → Email** — paste `theaiadvantagecoadmin@gmail.com`.
5. Click **Publish** (top-right).

### 3 — Facebook Business Page (~10 minutes)
- The Chrome extension was blocked from facebook.com; you'd need to grant permission via the Claude in Chrome extension icon → Allow site access for `facebook.com`. Or just do this manually:
- If a Page already exists: go to https://www.facebook.com/pages/?category=your_pages → click the page → **About** tab → fill website, hours, address, phone, short/long bio.
- If no Page yet: https://www.facebook.com/pages/creation/ → Business or Brand → name: `The Ai Advantage Co.` → category: `Education` (or `Business Consultant`) → add website, address, hours, phone.

### 4 — Google Business Profile, Warrnambool (~15 minutes incl. verification start)
1. Go to https://business.google.com/create
2. Business name: `The Ai Advantage Co.`
3. Business type: **Service business** (no storefront customers visit) — this lets you list a service area instead of a public address.
4. Category: `Business consultant` (primary). Add `Educational consultant` as a secondary later.
5. Service area: Warrnambool VIC + surrounding region; you can add "Online — Australia-wide" as well.
6. Contact: phone `0400 062 251`, website `https://www.theaiadvantageco.com.au`.
7. Verification: Google will offer **postcard** (5–14 days) or possibly **video** (quicker). Either works. **Until you verify, the listing won't appear in Google Maps or the Knowledge Panel.**
8. After verification:
   - Upload your logo + cover photo (use the same brand assets as the website).
   - Add Services (Single Session, Kick-Start Pack, Small Business & Team) with prices.
   - Post your first **Update** (1–2 sentences pointing back to the website).
   - Ask 3–5 past coaching clients to leave a Google review. Reviews are the single biggest local-pack ranking factor.

### 5 — LinkedIn Company Page (optional but recommended, ~10 minutes)
You currently have a personal profile, not a Company Page. A Company Page gives you a second sameAs URL (huge entity signal for Google) plus a place to post company content.
1. https://www.linkedin.com/company/setup/new/
2. Page name: `The Ai Advantage Co.` · Tagline: "Practical Ai coaching." · Logo + banner same as site.
3. Once live, edit your personal profile → Experience → "Founder & Ai Coach" → link to the Company Page (instead of just typing the name).
4. Add the company page URL (e.g. `linkedin.com/company/the-ai-advantage-co`) to `SAME_AS` in `app/layout.tsx` and push.

### 6 — Re-check rankings in 2–6 weeks
- Search `"Brad Harle"`, `Brad Harle Warrnambool`, `Brad Harle Ai`. The new Founder section + LinkedIn entity signals should start surfacing the site over the next few weeks. Google name-search ranking is a long game (4–12 weeks typical) — biggest accelerator is reviews on the Google Business Profile.
- Re-run **URL Inspection → Request Indexing** on `/`, `/services`, `/pricing`, `/contact` in GSC once you've published any Facebook page or GBP listing, so Google re-crawls and picks up the freshness.

## Why each item matters

| Action | Why |
|---|---|
| Visible "Brad Harle" copy + JSON-LD Person | Lets Google associate the site with your name |
| sameAs URLs (LinkedIn, YT, IG, FB, GBP) | Disambiguates entity — confirms "this Brad Harle" = "this company" across the web |
| Sitemap + canonicals | Faster, fuller indexing of every page |
| LinkedIn update | LinkedIn is Google's most-trusted entity source for people |
| Google Business Profile | Unlocks local pack + Knowledge Panel candidacy for the brand |
| Reviews on GBP | Biggest single ranking lever for local + brand searches |
