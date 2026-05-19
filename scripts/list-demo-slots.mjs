#!/usr/bin/env node
// Print every DemoVideo slot declared in hand-authored MDX pages.
//
// Source of truth is app/**/*.mdx. public/md is generated from app and
// intentionally ignored to avoid double-counting each slot.

import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const APP_DIR = join(ROOT, 'app')

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...walk(full))
    } else if (entry.isFile() && full.endsWith('.mdx')) {
      out.push(full)
    }
  }
  return out
}

function findMarkerSlots(file, text) {
  const slots = []
  const markerRe = /\{\/\*\s*DEMO_VIDEO:\s*([^|*}\n]+?)\s*(?:\|\s*([^*}\n]+?))?\s*\*\/\}/g
  for (const match of text.matchAll(markerRe)) {
    slots.push({
      topic: match[1].trim(),
      kind: (match[2] || '').trim() || 'unspecified',
      file: relative(ROOT, file),
    })
  }
  return slots
}

const slots = walk(APP_DIR).flatMap((file) => findMarkerSlots(file, readFileSync(file, 'utf8')))
slots.sort((a, b) => a.kind.localeCompare(b.kind) || a.topic.localeCompare(b.topic))

const byKind = new Map()
for (const slot of slots) {
  if (!byKind.has(slot.kind)) byKind.set(slot.kind, [])
  byKind.get(slot.kind).push(slot)
}

console.log(`Demo slots: ${slots.length}`)
for (const [kind, items] of [...byKind.entries()].sort(([a], [b]) => a.localeCompare(b))) {
  console.log(`\n${kind} (${items.length})`)
  for (const item of items) {
    console.log(`  ${item.topic.padEnd(36)} ${item.file}`)
  }
}
