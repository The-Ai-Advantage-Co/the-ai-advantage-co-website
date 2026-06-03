# Ai Business Kick Starter — Design Spec

**Date:** 2026-06-03
**Status:** Draft for review
**Author:** Brad Harle (with Claude)

---

## 1. Purpose

Add a new top-tier service offering: **Ai Business Kick Starter** — a done-for-you small-business setup that bundles brand, docs, AI platform setup, website, booking, GBP, and social into three tiers. Lives on a dedicated `/kick-starter` page, linked from the top nav.

This is positioned as a **market-undercutting** offering: prices are deliberately half (or less) of typical agency rates for the same work, rounded to clean numbers. Goal: high-volume entry for small businesses who have nothing dialled in and need a one-stop fix.

---

## 2. Scope

**In scope:**
- New page at `/app/kick-starter/page.tsx` with the same look-and-feel as `/app/services/page.tsx`
- New top-nav entry "Kick Starter" between "Services" and "Pricing"
- Cross-links: one-paragraph mention on `/services`, one-row item on `/pricing`
- Web3Forms-backed enquiry form (reuses existing access key `bed839a8-b01a-443f-b32b-2187256a17c5`) with tier dropdown + best-time-to-call field
- Metadata: page title, description, canonical, OG fields (matching site pattern)

**Out of scope:**
- Custom backend / database
- Payment gateway (sales are quote-driven via the form, invoiced by Brad)
- Logo design tool / brand asset uploader
- Discovery-call Calendly link (Brad calls the lead back after the form lands)
- Business email setup (customer arranges + pays direct)
- Domain registration (customer pays registrar direct)
- Analytics + privacy basics

---

## 3. The offering

### 3.1 Itemised (à la carte)

| Code | Item | Price (AUD) | Notes |
|---|---|---|---|
| 01 | Brand Kit — Light Design | $250 | Polish existing logo OR simple wordmark · palette · fonts · 1-page style guide PDF |
| 02 | Brand Kit — Full Design | $400 | Logo concepts from scratch · 2 revisions · full identity · style guide |
| 03 | Doc Template Pack | $200 | Letterhead · quote/proposal · invoice · email signature · 1 SOP template (Word + PDF) |
| 04 | AI Platform Setup (1 platform) | $300 | Account configured · workspace structure · 5 saved prompts/projects · platform user guide |
| 04+ | Additional AI platform | +$200/each | Each extra platform set up to same standard |
| 05 | AI Integration | $50/workflow | 1-page SOP per workflow (e.g. quote drafting, customer-email triage) |
| 06 | Website Design + Deploy | $900 | 5-page responsive site (Home/About/Services/Pricing/Contact) · Vercel deploy · basic SEO (sitemap, robots, metadata) |
| 07 | Booking Integration | $100 | Calendly setup · branded · embedded on site · 1-hour training |
| 08 | Handover Training | $200 | 2-hour live walk-through; recording included |
| A1 | Google Business Profile setup | $100 | Create · verify · categorise · service areas (per existing SEO doc process) |
| A2 | Social Media Starter | $250 | LinkedIn + 1 other: profile setup · branded banner · bio copy · 3-post starter pack |

**Note on Brand Kit tiers:** Light Design ($250) covers customers who either have an existing logo to polish, or want a simple wordmark made. Full Design ($400) covers logo-from-scratch work with concepts and revisions. Only two tiers exist; there is no "Packaging-only" option.

### 3.2 Packaged tiers

| Tier | Name | Price | Includes | À la carte total | Save |
|---|---|---|---|---|---|
| Lite | Identity Starter | **$500** | Brand Light · Docs · Handover Training | $650 | $150 (23%) |
| Standard ⭐ | Business Kick Starter | **$2,000** | Brand Light · Docs · AI Setup (1 platform) · Website + Deploy · Booking · GBP · Social Starter · Handover Training | $2,300 | $300 (13%) |
| Plus | Full Kick Starter | **$3,000** | Brand **Full** · Docs · AI Setup (2 platforms) · AI Integration (6 workflows) · Website + Deploy · Booking · GBP · Social Starter · Handover Training · **+ 3-month support retainer included** | $3,250 | $250 (8%) |

Standard is the recommended tier — marked with the ⭐ "Most popular" eyebrow.

### 3.3 Recurring monthly fees (transparent)

| Item | Cost | Payable to | Notes |
|---|---|---|---|
| Hosting — Vercel Basic | $10/mo | The Ai Advantage Co. | Default for all Kick Starter sites |
| Hosting — Vercel Pro upgrade | Current Vercel Pro price | Vercel directly | Only if customer needs Pro features |
| Calendly Basic | $15/mo | Calendly directly | Only if booking added |
| Business email (Google Workspace ~$8.40/mailbox/mo or M365 Business Basic ~$9.20/mailbox/mo) | Variable | Provider directly | Customer arranges; we advise |
| Domain | ~$15–25/yr typical | Registrar directly | Customer arranges; we advise |
| Support retainer (optional) | $100/mo | The Ai Advantage Co. | Small-business updates as required; larger work POA |

---

## 4. Page structure

The page lives at `/app/kick-starter/page.tsx` and follows the exact same component structure and CSS conventions as `/app/services/page.tsx`. Each tier renders as a `service-block` (visual + content grid).

### 4.1 Section-by-section

1. **Page hero**
   - Eyebrow: "Kick Starter"
   - H1: "Start your business with Ai, *properly.*" (italic accent on "properly")
   - Intro paragraph (~40 words): positions Kick Starter as the done-for-you path for small businesses who need brand, docs, AI, and a website set up at once
   - Primary CTA: "Send an enquiry" (anchor to `#enquiry`)

2. **Three tier blocks** (stacked, alternating background like `/services`)
   - **Lite** — `service-block` (not alt, not reverse)
   - **Standard** — `service-block is-alt is-reverse` with eyebrow "Most popular · Done-for-you setup"
   - **Plus** — `service-block` (not alt, not reverse)
   - Each block: visual image · label · h2 · short description · 3 detail sections (Who it's for / What's included / Save vs à la carte) · CTA row with "Enquire about [tier]" button (anchors to `#enquiry`; user picks tier from the dropdown — no auto-select)

3. **À la carte section**
   - Eyebrow: "Or build your own"
   - H2: "Pick the pieces you need."
   - Intro paragraph
   - Pricing-style grid showing all 11 itemised items (using the existing `pricing-extra-item` pattern from `/pricing`). Includes Google Business Profile and Social Media Starter as cards within this grid (no separate "Add-ons" section — keeps the page simpler).

4. **Recurring fees section**
   - Eyebrow: "What you'll pay each month"
   - H2: "Transparent. No surprises."
   - List of recurring items with payable-to column (matches table in §3.3)

5. **FAQ section** (`details`-based, same as `/pricing` FAQ)
   - "How long does the whole thing take?" — Lite ~1 week · Standard ~3–4 weeks · Plus ~5–6 weeks
   - "What do I need to bring?" — Business name, any existing brand assets, content for the website, decision on which AI platform
   - "Who owns the brand kit, docs, and site after?" — You own everything. Source files handed over. Site stays hosted with us at $10/mo, or migrate any time.
   - "Can I pay in instalments?" — 50% deposit to start, 50% on handover. POA for longer plans.
   - "What's not included?" — Custom software, photography, copywriting beyond the website 5 pages, paid ad accounts
   - "Can I add items later?" — Yes. À la carte items can be added to any tier at the listed price.

6. **Enquiry form** (`#enquiry`)
   - Posts to `https://api.web3forms.com/submit` (same as existing `/contact`)
   - Hidden inputs: `access_key`, `subject` = "New Kick Starter enquiry — The Ai Advantage Co.", `from_name`, `redirect`, `botcheck`
   - Visible fields:
     - Name (required)
     - Email (required)
     - Phone (optional but recommended — labelled "Phone (so we can call you back)")
     - Business / Organisation (optional)
     - **Tier interested in** (select): Not sure — help me pick / Lite — $500 / Standard — $2,000 / Plus — $3,000 / Custom (à la carte)
     - **Best time to call you** (select): Morning (8am–12pm) / Midday (12pm–2pm) / Afternoon (2pm–5pm) / Evening (5pm–7pm) / Any time during business hours
     - Message — "Tell us about your business and what you want help with" (required, textarea)
   - Submit button: "Send enquiry"
   - Below button: small note "We'll call you back within one business day."

7. **Final CTA / footer prompt**
   - H2: "Not sure which tier fits?" with accent on "*Just ask.*"
   - Paragraph + single button "Send enquiry" (anchors to `#enquiry`)

### 4.2 Visuals

Reuse existing `/public/assets/web/` photography (the `/services` page already uses `portrait-woman-table.jpg`, `portrait-man-glasses.jpg`, `portrait-woman-armchair.jpg` — those are taken). For Kick Starter:

- Lite → `portrait-w2.jpg` (starting-out feel)
- Standard → `hero-workspace-a.jpg` (workspace setup, fits "Most popular" framing)
- Plus → `portrait-man-polo.jpg` (polished professional)

Alt text written fresh for each block (no copy-paste from `/services`).

### 4.3 Metadata

```typescript
export const metadata: Metadata = {
  title: 'Ai Business Kick Starter',
  description: 'Brand, docs, Ai platform setup, and a website — bundled for small businesses. Three tiers from $500. Transparent pricing, no surprises.',
  alternates: { canonical: '/kick-starter' },
};
```

---

## 5. Navigation + cross-link changes

### 5.1 Top navigation

Add "Kick Starter" between "Services" and "Pricing":

`Home · Services · Kick Starter · Pricing · User Guides · Contact`

File: `components/SiteNav.tsx` (verified).

### 5.2 Cross-link from `/services`

At the bottom of the existing `/services` page (after the "Why this works" section or before the final CTA), add a single short callout paragraph:

> Need the whole business set up at once — brand, docs, AI, and website? See the **[Ai Business Kick Starter](/kick-starter)** — three done-for-you tiers from $500.

### 5.3 Cross-link from `/pricing`

In the existing "pricing-extra-item" grid on the pricing page, add a new row:

> **Ai Business Kick Starter** — *3 tiers · $500 / $2,000 / $3,000*
> Done-for-you setup: brand, docs, AI, website. [See Kick Starter →](/kick-starter)

---

## 6. Form handling

Reuses the existing Web3Forms access key (`bed839a8-b01a-443f-b32b-2187256a17c5`). All Kick Starter enquiries land in the same inbox as `/contact` enquiries, but the subject line (`New Kick Starter enquiry — The Ai Advantage Co.`) and `from_name` distinguish them.

No backend changes required. Form submission redirects to the existing Web3Forms success page (same pattern as `/contact`).

---

## 7. Architecture / file layout

```
the-ai-advantage-co-website/
├── app/
│   ├── kick-starter/
│   │   └── page.tsx          ← NEW (mirrors /services pattern)
│   ├── services/
│   │   └── page.tsx          ← EDIT (add cross-link callout)
│   └── pricing/
│       └── page.tsx          ← EDIT (add Kick Starter row in extras)
├── components/
│   └── SiteNav.tsx           ← EDIT (add "Kick Starter" nav link)
└── docs/specs/
    └── 2026-06-03-ai-business-kick-starter-design.md  ← THIS FILE
```

**CSS:** The new page reuses existing global classes (`service-block`, `service-content`, `service-detail`, `pricing-extra-item`, `page-hero`, `final-cta`, `faq-item`, `contact-form`). No new global styles needed. Any page-specific overrides go in a `<style>` block at the top of `kick-starter/page.tsx` matching the `/services` pattern.

---

## 8. Testing / verification

Manual smoke-check after build:

1. `/kick-starter` page renders without console errors
2. All 3 tier blocks visible and styled identically to `/services` blocks
3. À la carte table shows all 11 items
4. FAQ items expand/collapse
5. Enquiry form posts successfully (test with a real submit to confirm Web3Forms accepts it)
6. Top nav link visible on every page, active state on `/kick-starter`
7. Cross-links from `/services` and `/pricing` resolve correctly
8. Mobile responsive — service blocks stack, form usable on small viewports
9. Lighthouse: no major accessibility regressions vs `/services`

---

## 9. Open questions

None remaining. All design decisions are locked.

---

## 10. Out-of-scope / future enhancements (not in this spec)

- Online payment / deposit collection
- Customer portal for tracking project status
- Asset uploader for brand inputs
- Discovery-call Calendly integration (Brad calls the lead manually)
- Case studies / testimonials section on `/kick-starter` (add once first customer ships)
