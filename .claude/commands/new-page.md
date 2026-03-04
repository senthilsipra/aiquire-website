Given a page name and its content section from CONTENT.md, scaffold the page component, extract copy into a content file, build the layout using shadcn components, apply AIQUIRE design tokens, and commit to a new branch.

## Steps

1. Read CLAUDE.md for build order, design tokens, and component list.
2. Read /context/CONTENT.md and locate the section for the requested page.
3. Read /context/DESIGN_BRIEF.md for layout patterns and spacing rules.
4. Create the page file at the correct route path per CLAUDE.md build order.
5. Use only existing global components from /components/aiquire/ and /components/ui/.
6. Apply AIQUIRE colour tokens — never hardcode colours outside the design system.
7. Use DM Sans (font-display) for h1/h2/h3 headlines, Inter (font-sans) for body.
8. Wrap sections in SectionWrapper with alternating `alt` prop where appropriate.
9. Add ScrollAnimation wrappers for fade-up effects on key sections.
10. All copy must be verbatim from CONTENT.md — never invent or paraphrase.
11. Run `next build` — fix all errors before proceeding.
12. Create a new branch and commit: "feat: [page-name] complete"
