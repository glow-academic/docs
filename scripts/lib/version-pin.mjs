// Shared helper: resolve <VersionPin /> in MDX source to a plain-markdown
// version string, read from api-versions.json (the single source of truth,
// refreshed by `make sync-types`). Used by emit-page-md.mjs + generate-llms-txt.mjs
// so the .md / llms-full.txt outputs show the same pin the website renders
// via components/VersionPin.tsx — keep the format below in sync with it.

import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')

export function versionPinText() {
  try {
    const v = JSON.parse(readFileSync(join(ROOT, 'api-versions.json'), 'utf8'))
    return `**Glow API v${v.api.version}** · **CLI v${v.cli.version}**`
  } catch {
    return '' // api-versions.json missing/malformed — drop the pin rather than emit raw JSX
  }
}

// Replace every <VersionPin /> (with or without trailing space/slash) in MDX
// source with the resolved markdown string.
export function resolveVersionPin(src) {
  return src.replace(/<VersionPin\s*\/>/g, versionPinText())
}
