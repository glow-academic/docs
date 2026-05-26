#!/usr/bin/env node
// Postbuild: give every doc page a canonical Markdown view for LLMs.
//
// For each app/**/page.mdx it writes out/<route>.md — so /docs/activity.md
// sits next to /docs/activity/, /docs/api-reference/agent/post-agent-create.md
// next to its page, etc. Also (re)writes out/llms.txt as a complete index
// linking to those .md with RELATIVE paths (so they resolve under the /docs
// basePath today and at a custom domain later).
//
// Why a postbuild step: static export can't use rewrites, so the .md must be
// real files in out/. Runs after `next build` (see package.json "build").
// Nothing here is committed — out/ is a build artifact.

import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const APP_DIR = join(ROOT, 'app')
const OUT = join(ROOT, 'out')

if (!existsSync(OUT)) {
  console.error('✗ out/ not found — run `next build` first')
  process.exit(1)
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (name.endsWith('.mdx')) out.push(p)
  }
  return out
}

// app/foo/bar/page.mdx → 'foo/bar' ; app/page.mdx → '' (home)
function routeFor(mdxPath) {
  const rel = relative(APP_DIR, mdxPath)
    .replace(/\\/g, '/')
    .replace(/\/page\.mdx$/, '')
    .replace(/\.mdx$/, '')
  return rel === '' || rel === 'page' ? '' : rel
}

const stripFrontmatter = s => s.replace(/^---\n[\s\S]*?\n---\n/, '')
const titleFrom = (s, f) => { const m = s.match(/^#\s+(.+)$/m); return m ? m[1].trim() : f }
const slugTitle = r => r === '' ? 'Home'
  : r.split('/').filter(Boolean).pop().replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

// Strip MDX-only noise so the .md reads as plain Markdown (mermaid kept).
function cleanBody(s) {
  return s
    .replace(/^import .*$/gm, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<DemoVideo[\s\S]*?\/>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const pages = []
for (const f of walk(APP_DIR).sort()) {
  const route = routeFor(f)
  const raw = stripFrontmatter(readFileSync(f, 'utf8'))
  const title = titleFrom(raw, slugTitle(route))
  const mdRoute = route === '' ? 'index' : route
  const mdPath = join(OUT, `${mdRoute}.md`)
  mkdirSync(dirname(mdPath), { recursive: true })
  writeFileSync(mdPath, cleanBody(raw) + '\n')
  pages.push({ route, title, mdRoute })
}

// llms.txt index: home + every top-level content page individually, with the
// big auto-generated reference trees collapsed to their index pages.
const byRoute = r => pages.find(p => p.route === r)
const home = byRoute('')
const topLevel = pages
  .filter(p => p.route && !p.route.includes('/') && p.route !== 'api-reference' && p.route !== 'cli-reference')
  .sort((a, b) => a.title.localeCompare(b.title))

const lines = [
  '# Glow Documentation', '',
  '> Glow is a conversational AI training platform.', '',
  '- [Full reference](llms-full.txt)', '',
  '## Pages', '',
]
if (home) lines.push(`- [${home.title}](index.md)`)
for (const p of topLevel) lines.push(`- [${p.title}](${p.mdRoute}.md)`)

const refs = []
if (byRoute('api-reference')) refs.push('- [API Reference](api-reference.md)')
if (byRoute('cli-reference')) refs.push('- [CLI Reference](cli-reference.md)')
if (refs.length) lines.push('', '## Reference', '', ...refs)
lines.push('')

writeFileSync(join(OUT, 'llms.txt'), lines.join('\n'))
console.log(`✓ emitted ${pages.length} per-page .md + llms.txt into out/`)
