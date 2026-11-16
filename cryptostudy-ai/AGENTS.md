# CryptoStudy AI — Agent Development Rules

## Mission & scope
Build a beginner-friendly **Traditional Chinese** cryptography learning website with reusable lessons, accurate worked examples, and a research-paper reading library. The current site is a **static educational application**, not a live AI chatbot, PDF parser, or production-grade cryptographic system. Never label a canned answer as AI-generated.

## Tech & deployment
- HTML5, vanilla CSS, JavaScript ES modules; no build step, server, framework, login, or secret API keys.
- Pages are `index.html`, `pages/topics.html`, `pages/papers.html`, `pages/solver.html`.
- Shared CSS in `css/style.css`; shared navigation/data rendering in `js/main.js`.
- Solver pure calculation logic in `js/crypto.js`; interface wiring in `js/solver.js`.
- Content in `data/topics.json` and `data/papers.json`.
- Use **relative URLs** (e.g. `../data/topics.json` on subpages); site must work at `https://USERNAME.github.io/REPO/`.
- No secrets, API tokens, copyrighted full papers, or unsafe HTML injection.

## Visual design
- Dark navy background; cyan/violet accents; readable Traditional Chinese interface.
- Reuse `.container`, `.panel`, `.card`, `.tag`, `.btn`, `.section-title` and the common header/footer.
- Mobile-first and keyboard-accessible: semantic headings, accessible labels, visible focus indicators, responsive cards.
- Keep consistent page title, navigation labels, active state, and spacing across pages.

## Content schemas
### `data/topics.json`
JSON array of objects with **unique** lowercase kebab-case `id`; required: `title`, `category`, `level` (入門/進階), `intro`, `formula`, `steps` (array of strings), `example`, `mistakes` (array), `related` (array of existing topic ids). All explanations must be accurate; show intermediate steps, not just final answers. Formulas are **text**, so no rich HTML markup in JSON.

### `data/papers.json`
JSON array of objects with unique lowercase kebab-case `id`; required: `title`, `authors`, `year`, `venue`, `url` (original/credible source), `question`, `contribution`, `method`, `beginnerSummary`, `keywords` (array). Verify bibliographic metadata using the original publisher or author site; differentiate original paper claims from our interpretations. Never fabricate titles, DOIs, citations, or experiments. Summaries are our own concise descriptions.

## Add a topic (repeatable workflow)
1. Inspect `topics.json` and reuse its exact fields.
2. Choose an unused `id` such as `elliptic-curve-cryptography`.
3. Explain key terms in simple Chinese, include one **checked** example with every calculation step and common mistakes.
4. Link relevant existing topic IDs in `related`.
5. Add one object to the JSON array; listing/details update automatically; do **not** create duplicate HTML pages.
6. Validate JSON, open topics page, try search and detail view, check on mobile.

## Add a paper (repeatable workflow)
1. Confirm metadata and a stable legitimate source link.
2. Add one object following `papers.json`, with an accessible interpretation that does not overstate security.
3. Check paper listing and search; test source URL; keep summaries concise and distinguish fact from interpretation.

## Add a calculator (repeatable workflow)
1. Create a pure exported function in `js/crypto.js`, with BigInt for integer arithmetic.
2. Add operation choice, fields, validation and step rendering to `pages/solver.html` and `js/solver.js`; keep the UI separate from logic.
3. Guard invalid inputs (nonintegers, zero/negative modulus, impossible inverse, unsupported size).
4. Explain *why* each step follows; do not omit intermediate steps.
5. Add normal and edge-case assertions in `tests/crypto.test.mjs`, run `npm test` (uses built-in Node runner; no npm install needed).
6. Clearly state that the solver is educational and **not secure cryptographic software**.

## AI agent change policy
- Read this file first, inspect relevant code and data before editing.
- Prefer adding data over duplicating markup; preserve existing APIs/classes and working lessons.
- Do not silently change the math or the paper sources; recheck correctness.
- Escape dynamic text using `textContent` or DOM nodes (never insert user content as `innerHTML`).
- Test links, search, calculator outputs and mobile layout after each change.
- Use meaningful commit titles, e.g. `content: add elliptic curve topic`.
- Never claim an AI integration or PDF upload works without an implemented backend.

## Definition of done
All links navigate correctly, JSON loads on GitHub Pages, topic/paper entries are searchable, calculator error cases are handled, automated tests pass, and site remains responsive. README reflects actual capabilities.

## Future expansion
Add authenticated backend-based LLM question answering and PDF extraction only after privacy/security design. API keys must remain on server. Attribute paper sources and review hallucination risk.
