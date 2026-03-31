# Glow Docs — Makefile
#
# Canonical workflow:
#   make sync-types    → fetch specs from running servers, generate docs + TS types
#   make dev           → start dev server on :3300

.PHONY: dev build fetch-specs sync-types gen-docs gen-ts-types generate docker-build docker-up docker-down help

# ── Configuration ────────────────────────────────────────────────
GLOW_API_URL ?= http://localhost:8000
GLOW_CLI_URL ?= http://localhost:9000

# ── Development ──────────────────────────────────────────────────

dev:
	bun run next dev --port 3300

build:
	bun run build

# ── Spec Management ──────────────────────────────────────────────

## Fetch specs from running servers (local development)
## Requires: Glow API on :8000, Glow CLI on :9000 (make run in each repo)
sync-types:
	@mkdir -p public/specs
	@echo "Fetching specs from live servers..."
	@curl -sf $(GLOW_API_URL)/openapi.json -o public/specs/glow-api.json && echo "  ✅ glow-api.json from $(GLOW_API_URL)" || echo "  ❌ glow-api: could not reach $(GLOW_API_URL)"
	@curl -sf $(GLOW_CLI_URL)/cli-spec.json -o public/specs/cli.json && echo "  ✅ cli.json from $(GLOW_CLI_URL)" || echo "  ❌ cli: could not reach $(GLOW_CLI_URL)"
	@API_VER=$$(jq -r '.info.version // "unknown"' public/specs/glow-api.json 2>/dev/null || echo "unknown") && \
		CLI_VER=$$(jq -r '.version // "unknown"' public/specs/cli.json 2>/dev/null || echo "unknown") && \
		echo "{\"glow-api\":{\"version\":\"$$API_VER\",\"synced_at\":\"$$(date -u +%%Y-%%m-%%dT%%H:%%M:%%SZ)\"},\"cli\":{\"version\":\"$$CLI_VER\",\"synced_at\":\"$$(date -u +%%Y-%%m-%%dT%%H:%%M:%%SZ)\"}}" | python3 -m json.tool > api-versions.json
	@echo ""
	@echo "Generating docs..."
	@bun run scripts/gen-api-docs.ts
	@echo ""
	@echo "Generating TS types..."
	@bash scripts/gen-ts-types.sh
	@echo ""
	@echo "✅ All docs and types updated."

## Fetch specs from GitHub releases (CI / production)
fetch-specs:
	@bun run scripts/fetch-specs.ts

# ── Code Generation ──────────────────────────────────────────────

gen-docs:
	@bun run scripts/gen-api-docs.ts

gen-ts-types:
	@bash scripts/gen-ts-types.sh

generate: fetch-specs gen-docs gen-ts-types
	@echo "All generation complete."

# ── Docker ───────────────────────────────────────────────────────

docker-build:
	docker build -t ghcr.io/learnloopllc/glow-docs:latest .

docker-up: docker-build
	docker compose up -d

docker-down:
	docker compose down

# ── Help ─────────────────────────────────────────────────────────

help:
	@echo "Glow Docs"
	@echo ""
	@echo "Development:"
	@echo "  make dev              Start dev server (port 3300)"
	@echo "  make build            Production build"
	@echo ""
	@echo "Specs & Generation:"
	@echo "  make sync-types       Fetch from live servers + generate docs + TS types"
	@echo "  make fetch-specs      Fetch specs from GitHub releases (CI)"
	@echo "  make gen-docs         Generate MDX pages from existing specs"
	@echo "  make gen-ts-types     Generate TypeScript types from existing specs"
	@echo "  make generate         fetch-specs + gen-docs + gen-ts-types (CI pipeline)"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-build     Build Docker image"
	@echo "  make docker-up        Build and start"
	@echo "  make docker-down      Stop"
