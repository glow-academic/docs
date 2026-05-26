# Glow — Docs

Glow is source-available for academic, research, educational, and other noncommercial use under the [PolyForm Noncommercial License 1.0.0](./LICENSE).

Commercial use requires a separate written license from Purdue Research Foundation / Purdue University. Contact: ashok@learn-loop.org.

This repository contains the **documentation site** — Nextra-powered, statically exported, deployed to GitHub Pages at <https://glow-academic.github.io/docs/>. It is one of four components in the Glow platform:

| Component | What it is |
|---|---|
| [api](https://github.com/glow-academic/api) | FastAPI backend |
| [client](https://github.com/glow-academic/client) | Next.js frontend |
| [cli](https://github.com/glow-academic/cli) | Rust CLI — the canonical deploy + management tool |
| **docs** (this repo) | Nextra docs site |

## Local development

```bash
bun install
bun run dev   # serves on http://localhost:3300
```

## Build (static export)

```bash
bun run build       # emits ./out/ — what GH Pages serves
```

The `.github/workflows/pages.yml` workflow runs this on every push to `main` and publishes to GitHub Pages.

## `llms.txt`

Deployed at:

- <https://glow-academic.github.io/docs/llms.txt> (summary index)
- <https://glow-academic.github.io/docs/llms-full.txt> (full reference)

Every page also has a clean Markdown view for LLMs at its own URL — e.g. `/docs/activity.md` next to `/docs/activity/`, `/docs/api-reference/agent/post-agent-create.md`, etc.

Note: GitHub Pages serves this site under the `/docs/` path (org project-page convention). `llms.txt` links to the page `.md` with **relative** paths, so they resolve under `/docs/` today and at a custom domain later (just drop `basePath` from `next.config.mjs`).

How the three pieces are produced:

- **per-page `<route>.md` + `llms.txt`** — emitted at **build time** by `scripts/emit-page-md.mjs` (runs in `bun run build`, after `next build`). It walks the real page tree, so coverage is complete and links always resolve. These are build artifacts in `out/` — not committed.
- **`llms-full.txt`** (full page bodies, one file) — `bun run gen:llms` (`scripts/generate-llms-txt.mjs`). Checked into `public/`; re-run + commit after content edits.

## License

This project is licensed under the [PolyForm Noncommercial License 1.0.0](./LICENSE).

This is not an OSI-approved open-source license. It is intended to support academic and research dissemination while preserving separate commercial licensing rights.
