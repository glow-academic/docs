# Glow Docs — Makefile
#
# Canonical workflow:
#   make sync-types    → fetch specs from running servers, generate api + cli reference
#   make dev           → start dev server on :3300

.PHONY: dev build sync-types fetch-specs gen-docs gen-ts-types gen-llms generate help

# ── Configuration ────────────────────────────────────────────────
GLOW_API_URL ?= http://localhost:8000
GLOW_CLI_URL ?= http://localhost:9000

# ── Development ──────────────────────────────────────────────────

dev:
	bun run next dev --port 3300

build:
	bun run build

# ── Spec sync (dev: from running local servers) ──────────────────

## Fetch specs from running local servers + regenerate references.
## Requires: glow-academic-api on :8000 (make run in the api repo)
##           and glow-academic-cli on :9000 (cargo run -- serve in the cli repo).
sync-types:
	@mkdir -p public/specs
	@rm -f public/specs/cli.json public/specs/glow-api.json public/specs/glow-mcp.json
	@echo "Fetching specs from live servers..."
	@curl -sf $(GLOW_API_URL)/openapi.json -o public/specs/glow-api.json \
		&& echo "  ✅ glow-api.json from $(GLOW_API_URL)" \
		|| echo "  ❌ glow-api: could not reach $(GLOW_API_URL) — is the api running?"
	@curl -sf $(GLOW_CLI_URL)/cli-spec.json -o public/specs/cli.json \
		&& echo "  ✅ cli.json from $(GLOW_CLI_URL)" \
		|| echo "  ❌ cli: could not reach $(GLOW_CLI_URL) — start it with \`glow serve\`"
	@API_VER=$$(jq -r '.info.version // "unknown"' public/specs/glow-api.json 2>/dev/null || echo "unknown") && \
		CLI_VER=$$(jq -r '.version // "unknown"' public/specs/cli.json 2>/dev/null || echo "unknown") && \
		echo "{\"api\":{\"version\":\"$$API_VER\",\"synced_at\":\"$$(date -u +%Y-%m-%dT%H:%M:%SZ)\"},\"cli\":{\"version\":\"$$CLI_VER\",\"synced_at\":\"$$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}}" | python3 -m json.tool > api-versions.json
	@echo ""
	@echo "Generating reference docs..."
	@bun run scripts/gen-api-docs.ts
	@echo ""
	@echo "Generating TS types..."
	@bash scripts/gen-ts-types.sh
	@echo ""
	@echo "Regenerating llms.txt..."
	@node scripts/generate-llms-txt.mjs
	@echo ""
	@echo "✅ Sync complete. Commit api-versions.json + app/api-reference/ + app/cli-reference/ + public/."

# ── Spec sync (CI: from GH release assets) ───────────────────────

## Fetch specs from GitHub releases. Requires compat.yml at repo root
## (not committed by default; create when ready to use this flow).
fetch-specs:
	@bun run scripts/fetch-specs.ts

# ── Individual gen steps ─────────────────────────────────────────

gen-docs:
	@bun run scripts/gen-api-docs.ts

gen-ts-types:
	@bash scripts/gen-ts-types.sh

gen-llms:
	@node scripts/generate-llms-txt.mjs

# ── Help ─────────────────────────────────────────────────────────

help:
	@echo "Glow Docs"
	@echo ""
	@echo "Development:"
	@echo "  make dev              Start dev server (port 3300)"
	@echo "  make build            Static export build (→ out/)"
	@echo ""
	@echo "Spec sync (dev — needs api + cli running locally):"
	@echo "  make sync-types       Fetch specs from \$$GLOW_API_URL + \$$GLOW_CLI_URL,"
	@echo "                        regenerate references, TS types, llms.txt"
	@echo ""
	@echo "Spec sync (CI — needs compat.yml):"
	@echo "  make fetch-specs      Pull spec assets from GH releases"
	@echo ""
	@echo "Individual gen steps:"
	@echo "  make gen-docs         MDX pages from existing public/specs/"
	@echo "  make gen-ts-types     TS types from existing public/specs/"
	@echo "  make gen-llms         llms.txt + llms-full.txt + public/md/"
