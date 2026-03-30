# syntax=docker/dockerfile:1.7

############################
# 1 — deps (bun for fast install)
############################
FROM oven/bun:1.3 AS deps
WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

############################
# 2 — builder (node for native addon compat)
############################
FROM node:22-slim AS builder
WORKDIR /app

RUN apt-get update -qq && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Specs and generated pages are pre-built by CI before docker build.
# The COPY above includes specs/ and app/**/*.mdx from the build context.

ARG DOCS_BASE_PATH=""
ENV DOCS_BASE_PATH=$DOCS_BASE_PATH \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN npx next build

############################
# 3 — runtime
############################
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
