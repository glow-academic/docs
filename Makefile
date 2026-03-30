# Glow Docs — Makefile

.PHONY: dev build fetch-specs gen-docs gen-ts-types generate docker-build docker-up docker-down help

# ── Development ──────────────────────────────────────────────────

dev:
	bun run dev

build:
	bun run build

# ── Spec Management ──────────────────────────────────────────────

## Fetch specs from GitHub releases (reads compat.yml)
fetch-specs:
	@bun run scripts/fetch-specs.ts

## Generate TypeScript types from specs
gen-ts-types:
	@bash scripts/gen-ts-types.sh

## Generate MDX reference pages from specs
gen-docs:
	@bun run scripts/gen-api-docs.ts

## Fetch specs + generate pages + types
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
	@echo "  make dev              Start dev server"
	@echo "  make build            Production build"
	@echo ""
	@echo "Specs:"
	@echo "  make fetch-specs      Fetch specs from GitHub releases"
	@echo "  make gen-docs         Generate MDX pages from specs"
	@echo "  make gen-ts-types     Generate TypeScript types"
	@echo "  make generate         Fetch + generate all"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-build     Build Docker image"
	@echo "  make docker-up        Build and start"
	@echo "  make docker-down      Stop"
