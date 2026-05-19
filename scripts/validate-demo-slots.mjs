#!/usr/bin/env node
// Validate DemoVideo markers in hand-authored MDX pages.
//
// Checks:
//   - every DEMO_VIDEO marker has a matching <DemoVideo topic kind>
//   - every <DemoVideo> has a matching marker
//   - topics are unique in app/**/*.mdx
//   - existing real demo files are represented in components/demo-manifest.ts

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const APP_DIR = join(ROOT, 'app')
const DEMOS_DIR = join(ROOT, 'public', 'demos')
const MANIFEST = join(ROOT, 'components', 'demo-manifest.ts')
const VALID_KINDS = new Set(['playwright', 'vhs', 'manual'])

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

function attrs(tag) {
  const out = {}
  for (const match of tag.matchAll(/(\w+)=["']([^"']+)["']/g)) {
    out[match[1]] = match[2]
  }
  return out
}

function markerSlots(file, text) {
  const slots = []
  const markerRe = /\{\/\*\s*DEMO_VIDEO:\s*([^|*}\n]+?)\s*(?:\|\s*([^*}\n]+?))?\s*\*\/\}/g
  for (const match of text.matchAll(markerRe)) {
    slots.push({
      topic: match[1].trim(),
      kind: (match[2] || '').trim(),
      file: relative(ROOT, file),
    })
  }
  return slots
}

function componentSlots(file, text) {
  const slots = []
  const componentRe = /<DemoVideo\b[\s\S]*?\/>/g
  for (const match of text.matchAll(componentRe)) {
    const props = attrs(match[0])
    if (!props.topic) continue
    slots.push({
      topic: props.topic.trim(),
      kind: (props.kind || '').trim(),
      file: relative(ROOT, file),
    })
  }
  return slots
}

const errors = []
const files = walk(APP_DIR)
const markers = []
const components = []

for (const file of files) {
  const text = readFileSync(file, 'utf8')
  markers.push(...markerSlots(file, text))
  components.push(...componentSlots(file, text))
}

const markerKeys = new Set(markers.map((s) => `${s.file}:${s.topic}:${s.kind}`))
const componentKeys = new Set(components.map((s) => `${s.file}:${s.topic}:${s.kind}`))

for (const marker of markers) {
  if (!VALID_KINDS.has(marker.kind)) {
    errors.push(`${marker.file}: marker ${marker.topic} has invalid kind "${marker.kind}"`)
  }
  if (!componentKeys.has(`${marker.file}:${marker.topic}:${marker.kind}`)) {
    errors.push(`${marker.file}: marker ${marker.topic} | ${marker.kind} has no matching <DemoVideo>`)
  }
}

for (const component of components) {
  if (!VALID_KINDS.has(component.kind)) {
    errors.push(`${component.file}: <DemoVideo topic="${component.topic}"> has invalid kind "${component.kind}"`)
  }
  if (!markerKeys.has(`${component.file}:${component.topic}:${component.kind}`)) {
    errors.push(`${component.file}: <DemoVideo topic="${component.topic}" kind="${component.kind}"> has no matching marker`)
  }
}

const byTopic = new Map()
for (const slot of markers) {
  if (!byTopic.has(slot.topic)) byTopic.set(slot.topic, [])
  byTopic.get(slot.topic).push(slot.file)
}
for (const [topic, places] of byTopic.entries()) {
  const uniquePlaces = [...new Set(places)]
  if (uniquePlaces.length > 1) {
    errors.push(`duplicate demo topic "${topic}" in ${uniquePlaces.join(', ')}`)
  }
}

if (existsSync(DEMOS_DIR) && existsSync(MANIFEST)) {
  const manifest = readFileSync(MANIFEST, 'utf8')
  const realVideos = readdirSync(DEMOS_DIR)
    .filter((name) => name.endsWith('.mp4') && name !== '_placeholder.mp4')
    .map((name) => name.replace(/\.mp4$/, ''))

  for (const topic of realVideos) {
    if (!manifest.includes(`'${topic}'`)) {
      errors.push(`public/demos/${topic}.mp4 is missing from components/demo-manifest.ts; run make gen-demo-manifest`)
    }
  }
}

if (errors.length) {
  console.error(`Demo slot validation failed (${errors.length}):`)
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}

console.log(`Demo slot validation passed: ${markers.length} slot(s), ${components.length} component(s).`)
