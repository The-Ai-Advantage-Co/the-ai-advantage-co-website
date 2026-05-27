# Sub-Lines Draft — Gated Guide Library
**Author:** Brené Brown (Education Lead)
**Date:** 2026-05-26
**Status:** Draft — awaiting Brad's approval before merge into guides.json
**Source:** Extracted from guide intro/banner text across 94 HTML files

---

## Notes on approach

Each `sub` is written to describe what the guide is *for*, not to restate the title. Where the guide's own subtitle was already precise and within 90 characters, I used it as a strong base and kept or lightly adapted it. Where it was over-long or too abstract, I rewrote it from the intro content.

Template files (the two `.html` templates in Claude and Gemini) are internal build artefacts — flagged for Brad's attention in section 5 below.

---

## Platform 1 — ChatGPT (24 guides)

| Filename | Slug | Title | Group | Sub (≤90 chars) |
|---|---|---|---|---|
| `Master Guide - ChatGPT.html` | `master-guide-chatgpt` | ChatGPT Master Guide | master | The single-reference guide to ChatGPT — for onboarding, training, and handover packs. |
| `ChatGPT-101-User-Guide.html` | `chatgpt-101-user-guide` | ChatGPT 101 | core | A complete getting-started guide — what ChatGPT is, how it works, and how to get results. |
| `ChatGPT-Prompt-Guide-User-Guide.html` | `chatgpt-prompt-guide-user-guide` | Prompt Guide | core | How to write prompts that get useful output — structure, context, and iteration. |
| `ChatGPT-Memory-Custom-Instructions-User-Guide.html` | `chatgpt-memory-custom-instructions-user-guide` | Memory & Custom Instructions | core | Set up persistent context so ChatGPT always knows who you are and how you work. |
| `ChatGPT-GPTs-Custom-Assistants-User-Guide.html` | `chatgpt-gpts-custom-assistants-user-guide` | GPTs & Custom Assistants | core | Build specialised AI assistants for your exact tasks and find the best ready-made GPTs. |
| `ChatGPT-Advanced-Reasoning-User-Guide.html` | `chatgpt-advanced-reasoning-user-guide` | Advanced Reasoning | core | When to use o1 and o3 for complex analysis and problems GPT-4o can't reliably solve. |
| `ChatGPT-Voice-Vision-Files-User-Guide.html` | `chatgpt-voice-vision-files-user-guide` | Voice, Vision & Files | core | Analyse images, work with documents, and hold real-time voice conversations. |
| `ChatGPT-Research-Web-Search-User-Guide.html` | `chatgpt-research-web-search-user-guide` | Research & Web Search | core | Real-time web grounding, citation workflows, and research patterns in ChatGPT. |
| `ChatGPT-Projects-User-Guide.html` | `chatgpt-projects-user-guide` | Projects | core | Persistent workspaces with shared files, custom instructions, and organised conversations. |
| `ChatGPT-Writing-Editing-User-Guide.html` | `chatgpt-writing-editing-user-guide` | Writing & Editing | core | Drafting, editing, tone control, and writing workflows that produce polished output. |
| `ChatGPT-Workflows-User-Guide.html` | `chatgpt-workflows-user-guide` | Workflows | core | Automation, integration, repeatable processes, and API basics for non-developers. |
| `ChatGPT Actions.html` | `chatgpt-actions` | Actions | topical | Connecting custom GPTs to external APIs and services. |
| `ChatGPT API Basics for Non-Developers.html` | `chatgpt-api-basics-for-non-developers` | API Basics | topical | Using the OpenAI API for everyday automation — without writing production code. |
| `ChatGPT Canvas.html` | `chatgpt-canvas` | Canvas | topical | The side-by-side editing mode for long-form writing and code. |
| `ChatGPT Custom Instructions.html` | `chatgpt-custom-instructions` | Custom Instructions | topical | The always-on rules that shape every ChatGPT response — set once, apply everywhere. |
| `ChatGPT for Content and Social Media.html` | `chatgpt-for-content-and-social-media` | Content & Social Media | topical | Generating, repurposing, and scheduling content at scale. |
| `ChatGPT for Data Analysis.html` | `chatgpt-for-data-analysis` | Data Analysis | topical | Code Interpreter, chart generation, and statistical analysis without writing code. |
| `ChatGPT for Meeting Prep and Follow-Up.html` | `chatgpt-for-meeting-prep-and-follow-up` | Meeting Prep & Follow-Up | topical | Pre-meeting briefs, in-meeting capture, and post-meeting actions. |
| `ChatGPT Customer-Facing Use.html` | `chatgpt-customer-facing-use` | Customer-Facing Use | topical | When and how to use ChatGPT for customer-facing comms, support, and content. |
| `ChatGPT Image Generation.html` | `chatgpt-image-generation` | Image Generation | topical | Generating, editing, and iterating images with DALL-E and the 2026 image models. |
| `ChatGPT Operator Mode and System Prompts.html` | `chatgpt-operator-mode-and-system-prompts` | Operator Mode & System Prompts | topical | Autonomous task execution and the system-prompt layer that controls Custom GPTs. |
| `ChatGPT Team and Enterprise Plan Guide.html` | `chatgpt-team-and-enterprise-plan-guide` | Team & Enterprise Plans | topical | The paid plans for organisations — what's included, when to choose which, and how to deploy. |
| `ChatGPT vs Other Tools.html` | `chatgpt-vs-other-tools` | ChatGPT vs Other Tools | topical | When to use ChatGPT, when to use Claude, Copilot, or Gemini, and how to run multiple tools. |
| `GPT User Guide.html` | `gpt-user-guide` | Guide Template | topical | The reusable template for any ChatGPT-related user guide. |

---

## Platform 2 — Claude (21 guides)

| Filename | Slug | Title | Group | Sub (≤90 chars) |
|---|---|---|---|---|
| `Master Guide - Claude.html` | `master-guide-claude` | Claude Master Guide | master | The single-reference guide to Claude — for onboarding, training, and handover packs. |
| `Claude-101-User-Guide.html` | `claude-101-user-guide` | Claude 101 | core | Everything you need to start using Claude — account setup, interface, prompts, and limits. |
| `Claude-Prompt-Engineering-User-Guide.html` | `claude-prompt-engineering-user-guide` | Prompt Engineering | core | How to communicate clearly with Claude — from basic structure to advanced techniques. |
| `Claude-Projects-User-Guide.html` | `claude-projects-user-guide` | Projects | core | Organise conversations with shared context, persistent instructions, and a knowledge base. |
| `Claude-Memory-Context-User-Guide.html` | `claude-memory-context-user-guide` | Memory & Context | core | How Claude remembers, what it forgets, and how to give it the right information each session. |
| `Claude-Multimodal-User-Guide.html` | `claude-multimodal-user-guide` | Multimodal | core | Analyse images, read documents, interpret data, and review code across formats. |
| `Claude-Cowork-User-Guide.html` | `claude-cowork-user-guide` | Cowork Mode | core | Claude's persistent desktop workspace — files, tools, and integrations for real work. |
| `Claude-Agents-User-Guide.html` | `claude-agents-user-guide` | Agents | core | Claude in agentic mode — planning, using tools, and delivering finished results. |
| `Claude-Workflows-User-Guide.html` | `claude-workflows-user-guide` | Workflows | core | How to embed Claude into your existing processes for consistent, repeatable outputs. |
| `Claude-Code-User-Guide.html` | `claude-code-user-guide` | Claude Code | core | The AI coding assistant that works in your terminal and understands your codebase. |
| `Claude-API-Basics-User-Guide.html` | `claude-api-basics-user-guide` | API Basics | core | A plain-English guide to accessing Claude via the API — no development background needed. |
| `Claude Cowork Mode.html` | `claude-cowork-mode` | Cowork Mode (Topical) | topical | Claude's collaborative working pattern — files, tools, and persistent context in long sessions. |
| `Claude for Coding Assistance.html` | `claude-for-coding-assistance` | Coding Assistance | topical | Patterns for using Claude as a coding partner — debugging, writing, reviewing, refactoring. |
| `Claude for Data Extraction and Document Processing.html` | `claude-for-data-extraction-and-document-processing` | Data Extraction & Documents | topical | Pulling structured data from PDFs, contracts, invoices, and unstructured documents. |
| `Claude for Internal Knowledge Base Building.html` | `claude-for-internal-knowledge-base-building` | Knowledge Base Building | topical | Turning scattered docs, emails, and tribal knowledge into a queryable knowledge base. |
| `Claude for Sensitive and Nuanced Business Writing.html` | `claude-for-sensitive-and-nuanced-business-writing` | Sensitive Business Writing | topical | Letters and communications where tone, restraint, and judgement matter most. |
| `Claude for Systems Thinking and Strategic Planning.html` | `claude-for-systems-thinking-and-strategic-planning` | Systems Thinking & Strategy | topical | Using Claude as a thinking partner for strategy, root-cause analysis, and complex decisions. |
| `Claude for Writing Editing and Tone Refinement.html` | `claude-for-writing-editing-and-tone-refinement` | Writing, Editing & Tone | topical | Practical patterns for using Claude as your everyday writing and editing partner. |
| `Claude Safety and Refusals.html` | `claude-safety-and-refusals` | Safety & Refusals | topical | How Claude handles risk, what it refuses, and how to work when it pushes back. |
| `Claude User Guide Template.html` | `claude-user-guide-template` | Guide Template | topical | The reusable template for any Claude-related user guide The AI Advantage Co produces. |
| `Claude-User-Guide-Template.html` | `claude-user-guide-template-core` | User Guide Template | topical | Internal template for building structured Claude user guides in the core series format. |

---

## Platform 3 — Gemini (26 guides)

| Filename | Slug | Title | Group | Sub (≤90 chars) |
|---|---|---|---|---|
| `Master Guide - Gemini.html` | `master-guide-gemini` | Gemini Master Guide | master | The single-reference guide to Gemini — for onboarding, training, and handover packs. |
| `Gemini-101-User-Guide.html` | `gemini-101-user-guide` | Gemini 101 | core | Google's AI — grounded in real-time search and deeply connected to your Google Workspace. |
| `Gemini-Prompt-Guide-User-Guide.html` | `gemini-prompt-guide-user-guide` | Prompt Guide | core | Write prompts that make use of Gemini's web grounding, Workspace access, and multimodal input. |
| `Gemini-Deep-Research-User-Guide.html` | `gemini-deep-research-user-guide` | Deep Research | core | Turn hours of manual research into comprehensive, cited reports in minutes. |
| `Gemini-Extensions-User-Guide.html` | `gemini-extensions-user-guide` | Extensions & Workspace | core | Connect Gemini to Drive, Gmail, Maps, YouTube, and more for answers grounded in your data. |
| `Gemini-Gems-User-Guide.html` | `gemini-gems-user-guide` | Gems | core | Create personalised AI assistants with custom instructions and built-in knowledge. |
| `Gemini-Gmail-User-Guide.html` | `gemini-gmail-user-guide` | Gmail | core | Write better emails faster, tame your inbox, and manage communications without leaving Gmail. |
| `Gemini-Docs-User-Guide.html` | `gemini-docs-user-guide` | Google Docs | core | Write faster, refine smarter, and understand any document with Gemini inside Docs. |
| `Gemini-Sheets-User-Guide.html` | `gemini-sheets-user-guide` | Google Sheets | core | Generate formulas, analyse data, clean spreadsheets, and build templates in plain English. |
| `Gemini-Slides-User-Guide.html` | `gemini-slides-user-guide` | Google Slides | core | Generate full presentations, write speaker notes, and refine decks with Gemini in Slides. |
| `Gemini-Meet-User-Guide.html` | `gemini-meet-user-guide` | Google Meet | core | Capture every decision and action item automatically so you can focus on the meeting. |
| `Gemini-NotebookLM-User-Guide.html` | `gemini-notebooklm-user-guide` | NotebookLM | core | Turn your documents and research into an interactive knowledge base with Q&A and summaries. |
| `Gemini Advanced.html` | `gemini-advanced` | Gemini Advanced | topical | Google's premium Gemini tier — what's included and when to upgrade. |
| `Gemini API Basics for Non-Developers.html` | `gemini-api-basics-for-non-developers` | API Basics | topical | Using the Gemini API for everyday automation — without writing production code. |
| `Gemini as an Agent - NotebookLM and Autonomous Research.html` | `gemini-as-an-agent-notebooklm-and-autonomous-research` | Gemini as an Agent | topical | Using Gemini's agentic surfaces for autonomous research and knowledge work. |
| `Gemini for Content Creation and Drafting.html` | `gemini-for-content-creation-and-drafting` | Content Creation & Drafting | topical | Using Gemini for long-form writing, content strategy, and creative drafting. |
| `Gemini for Customer-Facing Use Cases.html` | `gemini-for-customer-facing-use-cases` | Customer-Facing Use | topical | Using Gemini for customer comms, support, and external content with appropriate discipline. |
| `Gemini for Image Generation and Creative Work.html` | `gemini-for-image-generation-and-creative-work` | Image Generation & Creative | topical | Imagen, video generation, and creative workflows in the Gemini and Workspace ecosystem. |
| `Gemini for Research with Web Grounding.html` | `gemini-for-research-with-web-grounding` | Research with Web Grounding | topical | Using Gemini and Deep Research for fact-grounded research workflows. |
| `Gemini for Teams on Google Workspace.html` | `gemini-for-teams-on-google-workspace` | Teams on Workspace | topical | Deploying Gemini for organisations on Google Workspace — admin, governance, adoption. |
| `Gemini in Google Chat.html` | `gemini-in-google-chat` | Google Chat | topical | Using Gemini inside Google Chat and Spaces for team collaboration. |
| `Gemini in Workflows.html` | `gemini-in-workflows` | Gemini in Workflows | topical | Automating cross-app workflows with Gemini in Google Workspace. |
| `Gemini Live - Voice and Real-Time Conversation Mode.html` | `gemini-live-voice-and-real-time-conversation-mode` | Gemini Live | topical | Real-time voice conversation with Gemini for hands-free, in-the-moment work. |
| `Gemini Multimodal.html` | `gemini-multimodal` | Multimodal | topical | Vision, document understanding, file analysis, and combined-modality inputs in Gemini. |
| `Gemini vs ChatGPT.html` | `gemini-vs-chatgpt` | Gemini vs ChatGPT | topical | When to use Google Gemini, when to use ChatGPT, and how to deploy both tools well. |
| `Gemini User Guide - Template.html` | `gemini-user-guide-template` | Guide Template | topical | The reusable template for any Gemini-related user guide. |

---

## Platform 4 — Copilot (23 guides)

| Filename | Slug | Title | Group | Sub (≤90 chars) |
|---|---|---|---|---|
| `Master Guide - Copilot.html` | `master-guide-copilot` | Copilot Master Guide | master | The single-reference guide to M365 Copilot — for onboarding, training, and handover packs. |
| `Copilot-101-User-Guide.html` | `copilot-101-user-guide` | Copilot 101 | core | How to activate, navigate, and start using Microsoft Copilot across your M365 apps. |
| `Copilot-Prompt-Guide-User-Guide.html` | `copilot-prompt-guide-user-guide` | Prompt Guide | core | Prompt patterns and examples for every Microsoft 365 app. |
| `Copilot-Outlook-User-Guide.html` | `copilot-outlook-user-guide` | Outlook | core | Email summaries, AI drafts, tone coaching, and inbox management in Outlook. |
| `Copilot-Teams-User-Guide.html` | `copilot-teams-user-guide` | Teams | core | Recap meetings, assist in real time, summarise chats, and draft follow-ups in Teams. |
| `Copilot-Excel-User-Guide.html` | `copilot-excel-user-guide` | Excel | core | Analyse data, build formulas, create charts, and surface insights in plain English. |
| `Copilot-Word-User-Guide.html` | `copilot-word-user-guide` | Word | core | Draft documents, rewrite for any audience, summarise files, and transform content in Word. |
| `Copilot-PowerPoint-User-Guide.html` | `copilot-powerpoint-user-guide` | PowerPoint | core | Create full decks from a prompt, rewrite slides, and generate speaker notes in PowerPoint. |
| `Copilot-Pages-User-Guide.html` | `copilot-pages-user-guide` | Pages | core | Turn Copilot responses into persistent, collaborative documents shareable across M365. |
| `Copilot-Notebooks-User-Guide.html` | `copilot-notebooks-user-guide` | Notebooks | core | A persistent AI workspace for your projects — context that carries across every session. |
| `Copilot-Agents-User-Guide.html` | `copilot-agents-user-guide` | Agents | core | Autonomous AI assistants that act on your behalf — connecting your data and workflows. |
| `Copilot Adoption Guide.html` | `copilot-adoption-guide` | Adoption Guide | topical | A 90-day plan to roll out Microsoft 365 Copilot across a team or organisation. |
| `Copilot BizChat - Microsoft 365 Chat.html` | `copilot-bizchat-microsoft-365-chat` | Copilot Chat (M365) | topical | The standalone Chat experience that spans every M365 app — your everyday Copilot entry point. |
| `Copilot for Business - M365 Enterprise Setup and Rollout.html` | `copilot-for-business-m365-enterprise-setup-and-rollout` | Business Setup & Rollout | topical | M365 Enterprise setup and rollout — what IT and operations leads need to know. |
| `Copilot for IT and Admin Teams.html` | `copilot-for-it-and-admin-teams` | IT & Admin Teams | topical | Day-to-day Copilot patterns for IT operations, M365 admin, and infrastructure work. |
| `Copilot in Dynamics 365.html` | `copilot-in-dynamics-365` | Dynamics 365 | topical | AI-assisted CRM, ERP, and customer service workflows inside Dynamics. |
| `Copilot in Loop.html` | `copilot-in-loop` | Loop | topical | Real-time collaborative components powered by Copilot. |
| `Copilot in OneNote.html` | `copilot-in-onenote` | OneNote | topical | AI-assisted note-taking, knowledge capture, and notebook synthesis in OneNote. |
| `Copilot in Power Automate.html` | `copilot-in-power-automate` | Power Automate | topical | Build workflows from plain-English descriptions across M365 and 1,000+ connectors. |
| `Copilot in SharePoint.html` | `copilot-in-sharepoint` | SharePoint | topical | AI-assisted intranet authoring, document discovery, and site management. |
| `Copilot Security and Compliance.html` | `copilot-security-and-compliance` | Security & Compliance | topical | How Copilot handles your data, what admins control, and how to meet compliance obligations. |
| `Copilot Studio.html` | `copilot-studio` | Copilot Studio | topical | Build, deploy, and govern custom Copilot agents — no code required. |
| `Copilot vs ChatGPT.html` | `copilot-vs-chatgpt` | Copilot vs ChatGPT | topical | When to use Microsoft Copilot, when to use ChatGPT, and how to run both tools well. |

---

## Flags for Brad

### Guides where sub was adapted from source (not taken verbatim)

These are guides where the source subtitle either did not exist in the same pattern, was extracted from first-paragraph prose, or was too long and required cutting. All are sound but worth a quick read before sign-off:

1. **`chatgpt-101-user-guide`** — Banner text was "Your complete getting-started guide to the world's most widely-used AI..." Shortened. Check the phrasing is right.
2. **`claude-101-user-guide`** — Doc subtitle was long. Condensed to fit ≤90 chars while keeping the scope.
3. **`claude-cowork-user-guide`** (core) — Intro is "persistent, AI-powered workspace." The topical file `Claude Cowork Mode.html` has a different (shorter) subtitle. Two Claude Cowork files exist — flagged below.
4. **`gemini-live-voice-and-real-time-conversation-mode`** — Source subtitle read "the strongest live voice AI in 2026." Removed the comparative claim (brand voice rule: no hype). Replaced with a factual descriptor.
5. **`copilot-in-sharepoint`** — Subtitle confirmed from source file: "AI-assisted intranet authoring, document discovery, and site management." (70 chars — clean).

### Duplicate / ambiguous Claude files

Two files appear to cover overlapping ground:
- `Claude Cowork Mode.html` (topical, no `-User-Guide.html` suffix)
- `Claude-Cowork-User-Guide.html` (core, has `-User-Guide.html` suffix)

I have written distinct subs for each. Brad should confirm whether both belong in the library or whether one supersedes the other.

Similarly:
- `Claude User Guide Template.html` (topical)
- `Claude-User-Guide-Template.html` (core — but content is an internal template)

The `-User-Guide-Template.html` file looks like a build template, not a client-facing guide. Brad should confirm whether it belongs in the public library at all.

### Copilot Master Guide sub

The source subtitle ("The single-reference guide to Microsoft 365 Copilot — for onboarding, training, and handover packs.") is 101 characters. The table uses a trimmed version that abbreviates "Microsoft 365" to "M365". Brad to confirm the abbreviation is acceptable in this context, or provide a preferred alternative under 90 chars.

---

## Total count

| Platform | Count |
|---|---|
| ChatGPT | 24 |
| Claude | 21 |
| Gemini | 26 |
| Copilot | 23 |
| **Total** | **94** |

---

*This file is a draft for Brad's approval. Do not merge into `guides.json` without sign-off. Jony (Website Lead) owns the import step.*
