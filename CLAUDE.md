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
5. /context/claura-*.png — visual reference screenshots

## Visual reference
Style reference site: https://claura.framer.ai/
Replicate its layout patterns, section structure, typography hierarchy,
and component feel — with AIQUIRE content and the colour tokens
from DESIGN_BRIEF.md.

Key patterns to replicate from Claura:
- Light warm off-white page background throughout (no dark sections)
- Large editorial serif headlines (Playfair Display)
- Eyebrow pill tags above section headlines
- Numbered process steps with large faded number behind title
- Large bold stat callouts (number + short label)
- Two-column comparison block (Others vs AIQUIRE)
- Full-width serif pull quote testimonial
- Accordion FAQ
- Dark inverted card for featured/highlighted items
- Pill-shaped buttons (rounded-full)
- Subtle fade-up scroll animations via framer-motion

## Fonts — load both via next/font/google
- Playfair Display — headlines only (h1, h2)
- Inter — everything else

## Colour tokens — set these in globals.css :root
--background:        250 33% 98%      /* #FAF9F6 warm off-white */
--foreground:        0 0% 6%          /* #0F0F0F near-black */
--card:              0 0% 100%        /* #FFFFFF */
--card-foreground:   0 0% 6%
--border:            0 0% 92%         /* #EBEBEB */
--muted:             40 20% 93%       /* #F2F0EB warm grey */
--muted-foreground:  0 0% 53%         /* #888888 */
--primary:           160 47% 19%      /* #1B4D3E deep forest green */
--primary-foreground:0 0% 100%
--accent:            155 30% 93%      /* #EBF2EF soft green tint */
--accent-foreground: 160 47% 19%
--radius:            1rem             /* rounded-2xl base */

## Page build order (strict — one page per session)
1.  Scaffold + globals.css + layout.tsx
2.  Homepage — /app/page.tsx
3.  Contact — /app/contact/page.tsx
4.  Packages — /app/packages/page.tsx
5.  Claude Training overview — /app/claude-training/page.tsx
6.  Claude Training Business Track — /app/claude-training/business-track/page.tsx
7.  Claude Training Engineering Track — /app/claude-training/engineering-track/page.tsx
8.  Services AI Strategy — /app/services/ai-strategy/page.tsx
9.  Services AI Productivity — /app/services/ai-productivity/page.tsx
10. Services Customer & Revenue AI — /app/services/customer-revenue-ai/page.tsx
11. Services Operations & Intelligence — /app/services/operations-intelligence/page.tsx
12. Services Custom AI Development — /app/services/custom-ai-development/page.tsx
13. About — /app/about/page.tsx
14. Industries — /app/industries/[vertical]/page.tsx

## Global components — build once in Prompt 3, reuse everywhere
- components/layout/Header.tsx
- components/layout/Footer.tsx
- components/ui/Eyebrow.tsx          pill tag above headlines
- components/ui/StatBlock.tsx        large number + label
- components/ui/ProcessStep.tsx      numbered step with faded bg number
- components/ui/CardInverted.tsx     dark green card for featured items
- components/ui/ComparisonBlock.tsx  Others vs AIQUIRE two-col checklist
- components/ui/Testimonial.tsx      full-width serif pull quote
- components/ui/FAQ.tsx              accordion FAQ
- components/ui/CTASection.tsx       warm bg CTA with pill button

## Content rules
- All copy from /context/CONTENT.md — verbatim, no paraphrasing
- If copy is missing for a section, add: {/* TODO: copy needed for [section] */}
- Never invent taglines, stats, or descriptions

## After every page
- Run: next build — fix all errors before committing
- Commit: "feat: [page-name] complete"
- Do not proceed to next page until build is clean

## Do NOT
- Use dark hero sections or dark page backgrounds
- Use gradients
- Use blue or purple anywhere
- Use bright or fluorescent green
- Use square corners on cards or buttons
- Use any font other than Playfair Display (headlines) + Inter (body)
- Copy anything from Siprahub's codebase
- Invent or rewrite copy

## MCP Servers

**GitHub MCP** — Read open issues, create issues when bugs are found, write PR descriptions automatically. Useful during review cycles.

**Filesystem MCP** — Structured access to content files. Pull copy from markdown files without manual pasting.

**Browsertools MCP** — Screenshot the rendered page in browser, compare to design reference, self-correct layout issues. Install: `npx @agentdeskai/browser-tools-mcp@latest`

**Vercel MCP** — Trigger deployments, check deployment status, read build logs directly. Useful for preview deployment review cycle.

## Custom Slash Commands

Defined in `.claude/commands/`. Use these for repeated tasks:

- `/new-page` — Given a page name and its content section from CONTENT.md, scaffold the page component, extract copy, build layout using shadcn components, apply AIQUIRE design tokens, and commit to a new branch.
- `/content-check` — Review the current page against CONTENT.md and flag any copy that was invented, missing, or changed from the source document.
- `/design-check` — Compare the current page's Tailwind classes against AIQUIRE's component patterns and flag any deviations from the design system.
- `/seo-pass` — Add metadata exports, Open Graph tags, canonical URLs, and structured data to the current page based on its content.

## Agent Strategy

**Single agent (default):** Building one page at a time, component work, styling.

**Plan mode (always use for):**
- Starting any new page
- Touching globals.css or tailwind.config
- Any change that affects shared components

**Parallel sub-agents (use for):**
- Content extraction while coding runs in parallel
- Test writing while next page is being built

**MCP tools available:**
- GitHub: issue tracking, PR descriptions
- Browsertools: visual regression checks
- Vercel: deployment triggers and build logs

**Custom commands:**
- /new-page — scaffold a new page from content
- /content-check — verify copy against source
- /design-check — verify design system compliance
- /seo-pass — add metadata to completed page