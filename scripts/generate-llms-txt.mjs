#!/usr/bin/env node
// Regenerates public/llms.txt + public/llms-full.txt from the MDX tree.
//
// Maintainers run this manually after touching docs content:
//   node scripts/generate-llms-txt.mjs
//
// Not wired into the build step on purpose — the .txt files are checked
// into public/ so static export ships them as-is, and we don't want a
// regenerator quirk to brick the GH Pages deploy. Re-run after content
// edits, commit the diff, push.

import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const APP_DIR = join(ROOT, 'app')
const PUBLIC = join(ROOT, 'public')
const MD_DIR = join(PUBLIC, 'md')

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    const stat = statSync(path)
    if (stat.isDirectory()) walk(path, out)
    else if (name.endsWith('.mdx')) out.push(path)
  }
  return out
}

function routeFor(mdxPath) {
  // app/foo/bar/page.mdx → /foo/bar
  // app/page.mdx         → /
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

const files = walk(APP_DIR).sort()
const entries = []
const full = []

mkdirSync(MD_DIR, { recursive: true })

for (const file of files) {
  const route = routeFor(file)
  const raw = stripFrontmatter(readFileSync(file, 'utf8'))
  const title = titleFrom(raw, slugTitle(route))
  entries.push({ route, title })
  full.push(`# ${title}\n\nRoute: ${route}\n\n${raw.trim()}\n\n---\n`)

  // Mirror to public/md/<route>.md so /<route>.md works for LLM clients.
  const mdPath = join(MD_DIR, `${route === '/' ? 'index' : route.slice(1)}.md`)
  mkdirSync(dirname(mdPath), { recursive: true })
  writeFileSync(mdPath, `# ${title}\n\n${raw}`)
}

const sections = new Map()
for (const e of entries) {
  const seg = e.route.split('/').filter(Boolean)[0] ?? 'Top'
  const section = seg
    ? seg.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    : 'Top'
  if (!sections.has(section)) sections.set(section, [])
  sections.get(section).push(e)
}

const llms =
  `# Glow Documentation\n\n` +
  `> Glow is an open-source conversational AI training platform.\n\n` +
  `- [Full Reference](llms-full.txt)\n\n` +
  [...sections.entries()]
    .map(([sec, list]) =>
      `## ${sec}\n\n` +
      list.map(e => `- [${e.title}](${e.route}.md)`).join('\n')
    )
    .join('\n\n') + '\n'

writeFileSync(join(PUBLIC, 'llms.txt'), llms)
writeFileSync(join(PUBLIC, 'llms-full.txt'), full.join('\n'))

console.log(`✓ wrote llms.txt (${entries.length} pages) + llms-full.txt`)
console.log(`✓ mirrored ${entries.length} .md files into public/md/`)
