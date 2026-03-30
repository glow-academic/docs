# LearnLoop Docs — Makefile
#
# Canonical workflow:
#   make sync-types    → fetch specs from running servers, generate docs + TS types
#   make dev           → start dev server
#
# For CI/production (no local servers):
#   make fetch-specs   → download specs from GitHub releases
#   make gen-docs      → generate MDX pages from specs

.PHONY: dev build fetch-specs sync-types gen-docs gen-ts-types generate docker-build docker-up docker-down help

# ── Configuration ────────────────────────────────────────────────
GLOW_API_URL     ?= http://localhost:8000
PLATFORM_API_URL ?= http://localhost:8100

# ── Development ──────────────────────────────────────────────────

dev:
	bun run dev

build:
	bun run build

# ── Spec Management ──────────────────────────────────────────────

## Fetch specs from running servers (local development)
sync-types: ## Fetch specs from live servers, generate docs + TS types
	@mkdir -p public/specs
	@echo "Fetching specs from live servers..."
	@curl -sf $(PLATFORM_API_URL)/openapi.json -o public/specs/platform-api.json && echo "  ✅ platform-api.json from $(PLATFORM_API_URL)" || echo "  ❌ platform-api: could not reach $(PLATFORM_API_URL)"
	@curl -sf $(GLOW_API_URL)/openapi.json -o public/specs/glow-api.json && echo "  ✅ glow-api.json from $(GLOW_API_URL)" || echo "  ❌ glow-api: could not reach $(GLOW_API_URL)"
	@echo "{\"platform-api\":{\"version\":\"$$(jq -r '.info.version' public/specs/platform-api.json)\",\"synced_at\":\"$$(date -u +%%Y-%%m-%%dT%%H:%%M:%%SZ)\"},\"glow-api\":{\"version\":\"$$(jq -r '.info.version' public/specs/glow-api.json)\",\"synced_at\":\"$$(date -u +%%Y-%%m-%%dT%%H:%%M:%%SZ)\"}}" | jq . > api-versions.json
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

## Generate MDX reference pages from specs
gen-docs:
	@bun run scripts/gen-api-docs.ts

## Generate TypeScript types from specs
gen-ts-types:
	@bash scripts/gen-ts-types.sh

## Fetch specs from GitHub + generate pages (CI pipeline)
generate: fetch-specs gen-docs gen-ts-types
	@echo "All generation complete."

# ── Docker / Deploy ─────────────────────────────────────────────

docker-build:
	docker build -t ghcr.io/learnloopllc/docs:latest .

docker-up: docker-build
	docker compose up -d

docker-down:
	docker compose down

# ── Help ─────────────────────────────────────────────────────────

help:
	@echo "LearnLoop Docs"
	@echo ""
	@echo "Development:"
	@echo "  make dev              Start dev server (port 3200)"
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
	@echo "  make docker-up        Build and start services"
	@echo "  make docker-down      Stop services"
