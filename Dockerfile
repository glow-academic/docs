# syntax=docker/dockerfile:1.7

############################
# 1 — deps (bun for fast install)
############################
FROM oven/bun:1.3 AS deps
WORKDIR /app
COPY package.json bun.lockb ./
# Skip native builds — rebuilt in builder stage
RUN bun install --frozen-lockfile --ignore-scripts

############################
# 2 — builder (node for native addon compat)
############################
FROM node:22-slim AS builder
WORKDIR /app
RUN apt-get update -qq && apt-get install -y --no-install-recommends git python3 make g++ && rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/node_modules ./node_modules
# Rebuild native modules (better-sqlite3) against this glibc
RUN npm rebuild better-sqlite3
COPY . .
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
RUN npx next build

############################
# 3 — runtime
############################
FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
