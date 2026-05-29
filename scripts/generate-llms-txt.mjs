#!/usr/bin/env node
// Regenerates public/llms-full.txt — the full-content reference: every
// MDX page body concatenated into one file for LLM ingestion.
//
// Maintainers run this manually after touching docs content:
//   node scripts/generate-llms-txt.mjs
//
// Scope split: the curated INDEX (public/llms.txt, with .md links) is
// written by scripts/gen-api-docs.ts. This script owns ONLY llms-full.txt
// so the two don't fight over the same file — previously both wrote it and
// the content-less index version won, leaving llms-full.txt with no bodies.
//
// Not wired into the build on purpose — the .txt is checked into public/ so
// static export ships it as-is. Re-run after content edits, commit, push.

import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveVersionPin } from './lib/version-pin.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const APP_DIR = join(ROOT, 'app')
const PUBLIC = join(ROOT, 'public')

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path, out)
    else if (name.endsWith('.mdx')) out.push(path)
  }
  return out
}

function routeFor(mdxPath) {
  // app/foo/bar/page.mdx → /foo/bar ; app/page.mdx → /
  const rel = relative(APP_DIR, mdxPath)
    .replace(/\\/g, '/')
    .replace(/\/page\.mdx$/, '')
    .replace(/\.mdx$/, '')
  return rel === '' || rel === 'page' ? '/' : `/${rel}`
}

function stripFrontmatter(src) {
  return src.replace(/^---\n[\s\S]*?\n---\n/, '')
}

function titleFrom(src, fallback) {
  const m = src.match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : fallback
}

function slugTitle(route) {
  if (route === '/') return 'Home'
  return route
    .split('/')
    .filter(Boolean)
    .pop()
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

// Strip MDX-only noise so the concatenated text reads as plain Markdown.
// Mermaid blocks are kept — they carry meaning as text.
function cleanBody(src) {
  return resolveVersionPin(src)              // <VersionPin /> → live pin from api-versions.json
    .replace(/^import .*$/gm, '')             // import statements
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')     // MDX brace comments (e.g. DEMO_VIDEO markers)
    .replace(/<DemoVideo[\s\S]*?\/>/g, '')    // video embeds — meaningless in plain text
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const files = walk(APP_DIR).sort()
const full = []
for (const file of files) {
  const route = routeFor(file)
  const raw = stripFrontmatter(readFileSync(file, 'utf8'))
  const title = titleFrom(raw, slugTitle(route))
  full.push(`# ${title}\n\nRoute: ${route}\n\n${cleanBody(raw)}\n\n---\n`)
}

writeFileSync(join(PUBLIC, 'llms-full.txt'), full.join('\n'))
console.log(`✓ wrote llms-full.txt (${files.length} pages)`)
