Review the current page against CONTENT.md and flag any copy that was invented, missing, or changed from the source document.

## Steps

1. Read /context/CONTENT.md in full.
2. Read /context/CLAUDE_TRAINING.md if the page is a Claude Training page.
3. Read the current page component file.
4. Compare every text string, heading, tagline, stat, bullet point, and description in the page against the source document.
5. Flag:
   - **Invented copy** — text that does not appear in the source document.
   - **Missing copy** — content from the source document that should be on this page but is absent.
   - **Changed copy** — text that was paraphrased, reworded, or altered from the source.
6. Report findings with line numbers from both the page file and the source document.
7. If any issues are found, suggest the exact correction using the verbatim source text.
