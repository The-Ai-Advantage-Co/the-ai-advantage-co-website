# Testimonials Carousel — Design Spec

**Date:** 2026-06-06
**Status:** Approved

## Overview

Add an infinite-scroll testimonial conveyor belt to the landing page, positioned between the Pricing Preview and Final CTA sections. Dark background, cream cards, seamless CSS-only animation.

## Placement

Between section 9 (Pricing Preview) and section 10 (Final CTA) in `app/page.tsx`.

## Visual Design

- **Background:** `--surface-deep-brown` (#2C1F12) — dark section for contrast punch
- **Stats strip:** Centered muted gold text: "100+ people coached · Individuals · Small businesses · Teams"
- **Heading:** Copper eyebrow "What people are saying" + h2 "Real results from real people." in white
- **Cards:** Cream (`--surface-cream` #F8F5F0), 340px wide, rounded corners (16px), subtle warm shadow
- **Card content:** Gold `"` quotation mark (decorative, top-left), quote text in dark ink, then name + role + town below in muted text
- **Animation:** Infinite horizontal scroll left via CSS `@keyframes`, ~30s per full loop, `animation-play-state: paused` on hover
- **Seam trick:** Cards array duplicated in HTML (8 × 2 = 16 rendered) so loop is seamless
- **Responsive:** ~3 cards visible on desktop, ~1.5 on mobile

## Testimonials (first name only)

| # | Name | Role | Town | Quote |
|---|------|------|------|-------|
| 1 | Sarah | Secondary Teacher | Warrnambool | "Planning session materials used to take me two full days. I'd tried ChatGPT but never got the most out of it. After a 10-minute walkthrough, I got everything done in under two hours. Genuinely can't believe the difference." |
| 2 | James | Civil Engineer | Port Fairy | "Writing a full findings report usually takes me a solid day. After one session, I got two reports done in an hour — and they read better than what I'd normally produce. It even suggested things I hadn't thought to include." |
| 3 | Danielle | Operations Manager | Colac | "Following up on open orders, tracking and updating the team end to end — that used to take me 12 hours. After being shown how to set up my agent and workflow, it now takes 45 minutes and updates everything automatically." |
| 4 | Mark | Project Coordinator | Timboon | "I was shown how to connect Gmail to my registers so Claude pulls the data I need each week and updates my databases automatically. I'm saving hours and finally working on the things I should be." |
| 5 | Kate | Office Manager | Port Campbell | "I thought AI was an overhyped chatbot — until I was shown how to actually set it up properly. I'm saving 10 hours a week and getting great feedback from my team. It's completely changed my mindset." |
| 6 | Rachel | Small Business Owner | Camperdown | "Since being shown how to set up Claude for my business, I have all my social media posts prepared for the month in advance. Enquiries are up 15% in the first month alone." |
| 7 | Louise | Administration Officer | Hamilton | "We went through Word, PowerPoint, Excel, and Agents live — real examples of each. I had no idea I could do any of this, and I'm not IT-savvy at all. Can't believe everyone isn't using it." |
| 8 | Tom | Trades Business Owner | Koroit | "I was drowning in admin. After two sessions, everything is set up and I'm saving hours every week — which means I'm finally working on the things I never had time for and actually growing my business." |

## Technical Approach

- Pure CSS `@keyframes translateX` animation — no JS carousel libraries
- Cards rendered twice in a `testimonials-track` wrapper for seamless loop
- `overflow: hidden` on outer container
- Hover pauses animation via `animation-play-state: paused`
- All styles added to `public/styles.css` following existing patterns
- JSX added directly to `app/page.tsx` as a new section

## Additional Tasks (same session)

1. **Fix remaining guide thumbnails:** Copy existing thumbnail URLs from same-platform guides to replace the 7 remaining `thumbnail:null` Copilot entries in `public/guides/library.html`
2. **Website offer clarity audit:** Review all service/pricing pages for ambiguous scope language and tighten copy to prevent scope creep
