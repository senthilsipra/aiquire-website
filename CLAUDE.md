# AIQUIRE Website — Claude Code Instructions

## What this project is
AIQUIRE is an AI adoption consulting practice under Siprahub.
Standalone website — no shared codebase with Siprahub.
Deployed at: aiquire.siprahub.com
Stack: Next.js App Router, shadcn/ui, Tailwind CSS, Vercel

## Read before writing any code — in this order
1. /context/DESIGN_BRIEF.md — full design system spec
2. /context/CONTENT.md — all page copy (use verbatim, never invent)
3. /context/PACKAGES.md — package details and pricing
4. /context/CLAUDE_TRAINING.md — Claude Training practice content

## Visual reference
Style reference: browserbase.com — warm off-white background, PP Neue Montreal font,
orange-red CTA, subtle grid pattern, nearly rectangular elements, minimal border radius.

Key patterns:
- Warm off-white page background (#f9f6f4) with subtle grid crosshatch
- Compact geometric sans-serif headlines (Plus Jakarta Sans)
- Eyebrow dark-chip tags (bg-[#100d0d] text-white rounded) above section headlines
- Numbered process steps with large faded number behind title
- Large bold stat callouts on dark teal backgrounds
- Two-column comparison block (Others vs AIQUIRE)
- Full-width pull quote testimonial
- Accordion FAQ
- Dark inverted card (bg-[#002329]) for featured items
- Orange-red CTA buttons (bg-[#f03603]) with white text
- Rectangular buttons (rounded, NOT rounded-full)
- Alt sections use bg-white on the off-white page base
- Subtle fade-up scroll animations via framer-motion

## Fonts — load both via next/font/google
- Plus Jakarta Sans — headlines, h1, h2, h3, card titles, stats, blockquotes (font-display class)
- Inter — everything else (body, nav, buttons, labels)

## Colour tokens
--background:        #f9f6f4          warm off-white (Browserbase)
--foreground:        #100d0d          near-black (headings)
--card:              #ffffff
--card-foreground:   #100d0d
--border:            #e6e4e2          warm border
--muted:             #f0eeec          warm muted bg
--muted-foreground:  #7d7d7d
--primary:           #002329          dark teal (AIQUIRE brand)
--primary-foreground:#ffffff
--accent:            #fff8e8          warm cream
--accent-foreground: #100d0d
--cta:               #f03603          orange-red (Browserbase)
--body-text:         #514f4f          warm dark grey
--radius:            0.375rem         6px — nearly rectangular

## Content rules
- All copy from /context/CONTENT.md — verbatim, no paraphrasing
- If copy is missing for a section, add: {/* TODO: copy needed for [section] */}
- Never invent taglines, stats, or descriptions

## After every page
- Run: next build — fix all errors before committing
- Commit: "feat: [page-name] complete"
- Do not proceed to next page until build is clean

## Do NOT
- Use warm off-whites (#FAF9F6, #F2F0EB) or old green (#1B4D3E)
- Use gradients
- Use blue or purple anywhere
- Use square corners on cards or buttons
- Use any font other than DM Sans (headlines) + Inter (body)
- Copy anything from Siprahub's codebase
- Invent or rewrite copy

## MCP Servers

**GitHub MCP** — Read open issues, create issues when bugs are found, write PR descriptions automatically.

**Filesystem MCP** — Structured access to content files. Pull copy from markdown files without manual pasting.

**Browsertools MCP** — Screenshot the rendered page in browser, compare to design reference, self-correct layout issues. Install: `npx @agentdeskai/browser-tools-mcp@latest`

**Vercel MCP** — Trigger deployments, check deployment status, read build logs directly.

## Custom Slash Commands

Defined in `.claude/commands/`. Use these for repeated tasks:

- `/new-page` — Scaffold a new page from CONTENT.md content.
- `/content-check` — Verify copy against source document.
- `/design-check` — Verify design system compliance.
- `/seo-pass` — Add metadata to completed page.

## Agent Strategy

**Single agent (default):** Building one page at a time, component work, styling.

**Plan mode (always use for):**
- Starting any new page
- Touching globals.css or tailwind.config
- Any change that affects shared components

**Parallel sub-agents (use for):**
- Content extraction while coding runs in parallel
- Test writing while next page is being built
