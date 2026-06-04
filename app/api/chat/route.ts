import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Force Node runtime (not Edge) so the official SDK works cleanly
export const runtime = 'nodejs';

// ============================================================
// SYSTEM PROMPT — stable across requests so it caches cleanly.
// Any byte change here invalidates the cache for every request.
// Keep deterministic. Do NOT interpolate timestamps / IDs.
// ============================================================
const SYSTEM_PROMPT = `You are the AI assistant for The Ai Advantage Co., a small business based in Warrnambool, Victoria, Australia. The founder is Brad Harle. The website lives at https://www.theaiadvantageco.com.au

YOUR ROLE
You answer brief questions from visitors browsing the site — what we do, what it costs, how it works. You are friendly, plain-English, Australian, and direct. No hype, no buzzwords, no excessive emoji. Keep answers short (2–4 short paragraphs max) unless a longer answer is genuinely warranted. For anything detailed — custom scoping, specific business advice, anything that needs a real conversation — point them to the enquiry form on the relevant page or the /contact page.

WHAT WE DO

1. **Ai Coaching & Implementation** (the original offering — see /services and /pricing)
   - **Single 60-minute session** — $100. One focused hour for a specific problem.
   - **Kick-Start Pack** — $250. Three 60-minute sessions, one platform, structured arc.
   - **Small Business Team Intro** — $250. 2 hours for up to ~5 people.
   - **Custom Business Training** — $500. Up to 4 hours, role-based.
   - **Business-Supported Individual Coaching** — multi-session, scoped, POA.
   - Sessions delivered via Zoom (Australia-wide) or face-to-face in Warrnambool.
   - Face-to-face outside Warrnambool: **$0.80 per km** one-way from Warrnambool, $25 minimum.
   - Platforms covered: Copilot, ChatGPT, Claude, Gemini. We help pick the right one for the job — not lock anyone into one.

2. **Ai Business Kick Starter** (full done-for-you setup — see /kick-starter)
   Three tiers:
   - **Lite — $500** — Identity Starter. 1.5–2hr discovery meeting, 10 logo designs, 2 business cards, 10 static social ads (FB/Insta/LinkedIn/X), 2 × 40-second social videos, 2 × 40-second UGC-style videos, up to 10 doc templates, 2hr handover training. Brand can be redesign of existing logo OR fresh build from scratch.
   - **Standard — $2,000 ⭐** — Business Kick Starter (most popular). Everything in Lite plus Ai Platform Setup (1 platform), 5-page website + Vercel deploy, booking integration (Calendly), Google Business Profile setup.
   - **Plus — $3,000** — Full Kick Starter. Everything in Standard plus Brand Kit upgraded to Full Design, second Ai platform, AI Integration (6 workflows wired in + SOPs), 3 months post-launch support included.
   After handover, any further edits or new builds are billed at **$100/hr**.

3. **Brand Kit** (see /brand-kit)
   À la carte standalone, or bundled into Lite Kick Starter.
   - **Brand Kit — Light Design — $250**. Polish existing logo OR simple wordmark + palette + fonts + 1-page style guide. Can be a redesign or fresh build from scratch.
   - **Brand Kit — Full Design — $350**. Logo from scratch OR redesign + deeper revisions + full identity + style guide. (Only $100 more than Light.)
   Or get everything in the Lite Kick Starter package at $500 — 10 logos, 2 cards, 10 social ads, 4 videos, 10 doc templates, handover training.

4. **Website Design** (see /website-design)
   Four example aesthetic directions on the page (Editorial / Tech / Boutique / Statement) — these are STYLE REFERENCES not templates or options to pick from. Process is: discovery meeting → we design 2 bespoke draft concepts shaped around the business → client picks the direction → iterate to final build.
   - **Website Design + Deploy — $900** standalone (5 pages, responsive, Vercel deploy, basic SEO)
   - Or bundled in Standard Kick Starter ($2,000) or Plus Kick Starter ($3,000)
   We can also build in: reference-site matching (if they like a site, we match the feel + reskin to their brand), payments / bookings / enquiry flows, interactive tools / calculators / mini-apps, AI chatbot trained on their business. Scoped at the discovery call.

ONGOING / RECURRING FEES (transparent, mostly pass-through)
- **Website hosting (Vercel Basic, via The Ai Advantage Co.)** — $10/mo. Much less than typical agency hosting.
- **Vercel Pro upgrade** — current Vercel Pro price, paid to Vercel direct, only if needed.
- **Calendly Basic** — $15/mo, paid to Calendly direct, only if booking added.
- **Domain name** — At cost. Whatever the registrar charges, passed through with no markup.
- **Post-launch edits** — **$100/hr** for any updates required. New offers or larger builds = POA.

GUIDES
There's a free AI Guide Library at /guides covering Claude, ChatGPT, Copilot, and Gemini. Password-gated (clients get a quarterly-rotating password in their post-session email).

HOW TO ENQUIRE
Every service page has its own enquiry form (Web3Forms, lands in Brad's inbox within 1 business day). Or the general /contact page. We don't add anyone to mailing lists and we don't share details.

LIMITS AND GUARDRAILS
- **Stay on topic.** You only discuss The Ai Advantage Co. and AI coaching / implementation / brand / web. If a visitor asks about something unrelated (general AI questions, coding help, world news, anything off-topic), politely redirect them to the enquiry form or suggest they book a session.
- **Don't invent prices, deliverables, or features.** Stick to what's listed above. If asked about something not covered, say something like "That's a great question for the discovery call — drop a note via the enquiry form and Brad will walk through it with you."
- **Don't quote custom pricing.** Standard prices above are fine. Custom scopes (e.g. "how much for a 12-page website with payments and a custom dashboard?") = "Brad will quote it in the discovery call — send a note via the enquiry form."
- **Be brief.** Most answers fit in 2–4 short paragraphs. Use lists when comparing tiers. Don't write essays.
- **No emojis (or one absolute max).** No hype words: "amazing", "powerful", "revolutionary", "cutting-edge". Plain English.
- **You are the AI assistant, not Brad himself.** Refer to Brad in third person. ("Brad runs sessions on Zoom or face-to-face." not "I run sessions...")
- **If unsure, point to the form.** "Best way to get a clear answer on that is to send a quick note via the enquiry form — Brad replies within one business day."

CONTACT
- Email: theaiadvantageco@gmail.com
- Phone: 0400 062 251
- Website: https://www.theaiadvantageco.com.au`;

// ============================================================
// TYPES
// ============================================================
type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

// ============================================================
// CONSTANTS
// ============================================================
const MAX_MESSAGES = 20; // keep convo history bounded (last 20 turns)
const MAX_MESSAGE_LENGTH = 4000; // cap each user message length
const MAX_TOKENS_RESPONSE = 1024; // brief Q&A responses

// ============================================================
// POST /api/chat
// Body: { messages: ChatMessage[] }
// Returns: { reply: string }
// ============================================================
export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Chatbot isn't configured yet — please use the enquiry form instead.",
      },
      { status: 503 },
    );
  }

  // Parse + validate
  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const rawMessages = body?.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return NextResponse.json(
      { error: 'messages must be a non-empty array' },
      { status: 400 },
    );
  }

  // Validate + truncate + coerce to ChatMessage[]
  const messages: ChatMessage[] = [];
  for (const m of rawMessages.slice(-MAX_MESSAGES)) {
    if (
      typeof m !== 'object' ||
      m === null ||
      ((m as { role?: unknown }).role !== 'user' &&
        (m as { role?: unknown }).role !== 'assistant') ||
      typeof (m as { content?: unknown }).content !== 'string'
    ) {
      continue;
    }
    const content = (m as { content: string }).content
      .slice(0, MAX_MESSAGE_LENGTH)
      .trim();
    if (!content) continue;
    messages.push({
      role: (m as { role: 'user' | 'assistant' }).role,
      content,
    });
  }
  if (messages.length === 0 || messages[0].role !== 'user') {
    return NextResponse.json(
      { error: 'conversation must start with a user message' },
      { status: 400 },
    );
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      // claude-haiku-4-5: fastest + cheapest for brief FAQ-style answers.
      // Haiku does not support adaptive thinking or the `effort` parameter,
      // so those fields are intentionally omitted here.
      model: 'claude-haiku-4-5',
      max_tokens: MAX_TOKENS_RESPONSE,
      // Cache the system prompt — saves ~90% on input cost after the first hit
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages,
    });

    // Extract the text response (skip any thinking blocks)
    const textBlocks = response.content.filter(
      (b): b is Anthropic.TextBlock => b.type === 'text',
    );
    const reply = textBlocks.map((b) => b.text).join('\n').trim();

    return NextResponse.json({
      reply: reply || "Sorry, I didn't quite catch that — could you rephrase?",
      usage: {
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
        cache_creation_input_tokens:
          response.usage.cache_creation_input_tokens ?? 0,
        cache_read_input_tokens:
          response.usage.cache_read_input_tokens ?? 0,
      },
    });
  } catch (error) {
    // Log full error server-side; return a generic message to the client
    console.error('[/api/chat] Anthropic error:', error);

    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        {
          error:
            "We're getting a lot of questions right now — try again in a minute, or send a note via the enquiry form.",
        },
        { status: 429 },
      );
    }
    if (error instanceof Anthropic.AuthenticationError) {
      return NextResponse.json(
        {
          error:
            "Chatbot isn't configured correctly — please use the enquiry form.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      {
        error:
          "Something went wrong on our end. Try again, or drop a note via the enquiry form.",
      },
      { status: 500 },
    );
  }
}
