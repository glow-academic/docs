/**
 * fetch-specs.ts — Fetch OpenAPI + CLI specs from GitHub releases
 *
 * Reads compat.yml and downloads the latest release assets from private
 * GitHub repos. For large OpenAPI specs (glow-api), splits into per-tag
 * chunks for efficient client-side loading.
 *
 * Auth: uses `gh` CLI (local) or GITHUB_TOKEN env var (CI/Docker).
 *
 * Output:
 *   public/specs/{name}.json                     — full spec
 *   public/specs/{name}/{tag}.json               — per-tag chunk (OpenAPI only)
 *   public/specs/versions.json                   — manifest with release tags
 *
 * Usage: bun run scripts/fetch-specs.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public/specs')

// ── YAML parser (minimal, handles our compat.yml structure) ─────

interface SpecConfig {
  repo: string
  asset: string
}

interface Compat {
  specs: Record<string, SpecConfig>
}

function parseCompat(path: string): Compat {
  const text = readFileSync(path, 'utf-8')
  const specs: Record<string, SpecConfig> = {}

  let currentSpec = ''

  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    if (line === 'specs:') continue

    const indent = raw.length - raw.trimStart().length

    // Spec name (indent 2)
    if (indent === 2 && line.endsWith(':') && !line.includes(' ')) {
      currentSpec = line.slice(0, -1)
      specs[currentSpec] = { repo: '', asset: '' }
      continue
    }

    if (!currentSpec) continue

    // Spec properties (indent 4)
    if (indent === 4) {
      const [key, ...rest] = line.split(':')
      const val = rest.join(':').trim()
      const s = specs[currentSpec]
      if (key.trim() === 'repo') s.repo = val
      if (key.trim() === 'asset') s.asset = val
    }
  }

  return { specs }
}

// ── GitHub fetching ─────────────────────────────────────────────

function hasGhCli(): boolean {
  try {
    execSync('gh --version', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

/** Get the latest release tag for a repo */
function getLatestTag(repo: string): string {
  if (hasGhCli()) {
    return execSync(
      `gh release view --repo ${repo} --json tagName --jq '.tagName'`,
      { encoding: 'utf-8' }
    ).trim()
  }

  const token = process.env.GITHUB_TOKEN
  if (!token) throw new Error('No GITHUB_TOKEN and gh CLI not available')
  const result = execSync(
    `curl -sf -H "Authorization: token ${token}" "https://api.github.com/repos/${repo}/releases/latest"`,
    { encoding: 'utf-8' }
  )
  return JSON.parse(result).tag_name
}

/** Download a release asset */
function fetchAsset(repo: string, tag: string, asset: string): string {
  if (hasGhCli()) {
    const tmpDir = execSync('mktemp -d', { encoding: 'utf-8' }).trim()
    try {
      execSync(
        `gh release download "${tag}" --repo ${repo} --pattern "${asset}" --dir "${tmpDir}"`,
        { stdio: 'pipe' }
      )
      const content = readFileSync(join(tmpDir, asset), 'utf-8')
      execSync(`rm -rf "${tmpDir}"`)
      return content
    } catch {
      execSync(`rm -rf "${tmpDir}"`)
      // Fallback: fetch from repo contents at the tag
      console.log(`    (release asset not found, trying repo contents at ${tag})`)
      const encoded = execSync(
        `gh api "repos/${repo}/contents/${asset}?ref=${tag}" --jq '.content'`,
        { encoding: 'utf-8' }
      ).trim()
      return Buffer.from(encoded, 'base64').toString('utf-8')
    }
  }

  const token = process.env.GITHUB_TOKEN
  if (!token) throw new Error('No GITHUB_TOKEN and gh CLI not available')

  // Get release assets list
  const releaseJson = execSync(
    `curl -sf -H "Authorization: token ${token}" "https://api.github.com/repos/${repo}/releases/tags/${tag}"`,
    { encoding: 'utf-8' }
  )
  const release = JSON.parse(releaseJson)
  const assetObj = (release.assets || []).find((a: any) => a.name === asset)

  if (assetObj) {
    // Download release asset via its API URL
    return execSync(
      `curl -sfL -H "Authorization: token ${token}" -H "Accept: application/octet-stream" "${assetObj.url}"`,
      { encoding: 'utf-8' }
    )
  }

  // Fallback: fetch from repo contents (for small files < 1MB)
  console.log(`    (release asset not found, trying repo contents at ${tag})`)
  const result = execSync(
    `curl -sf -H "Authorization: token ${token}" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/${repo}/contents/${asset}?ref=${tag}"`,
    { encoding: 'utf-8' }
  )
  return Buffer.from(JSON.parse(result).content, 'base64').toString('utf-8')
}

// ── OpenAPI per-tag splitting ───────────────────────────────────

interface OpenAPISpec {
  info?: { title?: string; version?: string }
  paths: Record<string, Record<string, any>>
  components?: { schemas?: Record<string, any>; securitySchemes?: Record<string, any> }
  [key: string]: any
}

const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']

function collectRefs(schema: any, refs: Set<string>, visited: Set<string>): void {
  if (!schema) return
  if (schema.$ref) {
    const name = schema.$ref.split('/').pop()!
    if (!visited.has(name)) { visited.add(name); refs.add(name) }
    return
  }
  if (schema.allOf) for (const s of schema.allOf) collectRefs(s, refs, visited)
  if (schema.anyOf) for (const s of schema.anyOf) collectRefs(s, refs, visited)
  if (schema.oneOf) for (const s of schema.oneOf) collectRefs(s, refs, visited)
  if (schema.items) collectRefs(schema.items, refs, visited)
  if (schema.properties) {
    for (const prop of Object.values(schema.properties)) collectRefs(prop as any, refs, visited)
  }
}

function collectDeepRefs(spec: OpenAPISpec, names: Set<string>): Set<string> {
  const all = new Set<string>()
  const visited = new Set<string>()
  const queue = [...names]
  while (queue.length > 0) {
    const name = queue.pop()!
    if (all.has(name)) continue
    all.add(name)
    const schema = spec.components?.schemas?.[name]
    if (!schema) continue
    const refs = new Set<string>()
    collectRefs(schema, refs, visited)
    for (const ref of refs) if (!all.has(ref)) queue.push(ref)
  }
  return all
}

function splitByTag(spec: OpenAPISpec, outDir: string): string[] {
  const tagPaths = new Map<string, Record<string, Record<string, any>>>()

  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const method of HTTP_METHODS) {
      const op = methods[method]
      if (!op) continue
      const tag = (op.tags || []).at(-1) || 'other'
      if (!tagPaths.has(tag)) tagPaths.set(tag, {})
      const group = tagPaths.get(tag)!
      if (!group[path]) group[path] = {}
      group[path][method] = op
    }
  }

  mkdirSync(outDir, { recursive: true })
  const tags: string[] = []

  for (const [tag, paths] of [...tagPaths].sort((a, b) => a[0].localeCompare(b[0]))) {
    const directRefs = new Set<string>()
    const visited = new Set<string>()

    for (const methods of Object.values(paths)) {
      for (const op of Object.values(methods) as any[]) {
        const reqContent = op.requestBody?.content
        if (reqContent) for (const ct of Object.values(reqContent) as any[]) {
          if (ct?.schema) collectRefs(ct.schema, directRefs, visited)
        }
        for (const resp of Object.values(op.responses || {}) as any[]) {
          if (resp?.content) for (const ct of Object.values(resp.content) as any[]) {
            if (ct?.schema) collectRefs(ct.schema, directRefs, visited)
          }
        }
        for (const param of op.parameters || []) {
          if (param.schema) collectRefs(param.schema, directRefs, visited)
        }
      }
    }

    const allRefs = collectDeepRefs(spec, directRefs)
    const schemas: Record<string, any> = {}
    for (const name of allRefs) {
      if (spec.components?.schemas?.[name]) schemas[name] = spec.components.schemas[name]
    }

    const chunk: OpenAPISpec = {
      info: spec.info,
      paths,
      components: {
        schemas,
        ...(spec.components?.securitySchemes ? { securitySchemes: spec.components.securitySchemes } : {}),
      },
    }

    writeFileSync(join(outDir, `${tag}.json`), JSON.stringify(chunk))
    tags.push(tag)
  }

  writeFileSync(join(outDir, '_tags.json'), JSON.stringify(tags))
  return tags
}

// ── Main ────────────────────────────────────────────────────────

function main() {
  const compat = parseCompat(join(ROOT, 'compat.yml'))

  mkdirSync(OUT, { recursive: true })

  const versionsManifest: Record<string, { tag: string; version: string }> = {}

  console.log('Fetching specs from GitHub releases...')
  console.log('')

  for (const [name, config] of Object.entries(compat.specs)) {
    console.log(`  ${name}: ${config.repo}`)

    try {
      // Get latest release tag
      const tag = getLatestTag(config.repo)
      console.log(`    release: ${tag}`)

      // Download the asset
      const content = fetchAsset(config.repo, tag, config.asset)
      const outFile = join(OUT, `${name}.json`)
      writeFileSync(outFile, content)

      // Extract version from spec if available
      let version = tag
      try {
        const parsed = JSON.parse(content)
        if (parsed.info?.version) version = parsed.info.version
      } catch {}

      versionsManifest[name] = { tag, version }

      // Split OpenAPI specs by tag
      try {
        const spec = JSON.parse(content) as OpenAPISpec
        if (spec.paths && Object.keys(spec.paths).length > 0) {
          const chunkDir = join(OUT, name)
          const tags = splitByTag(spec, chunkDir)
          const sizeKB = (content.length / 1024).toFixed(0)
          console.log(`    → ${sizeKB}KB, split into ${tags.length} tag chunks`)
        } else {
          console.log(`    → ${(content.length / 1024).toFixed(0)}KB`)
        }
      } catch {
        console.log(`    → ${(content.length / 1024).toFixed(0)}KB`)
      }
    } catch (e: any) {
      console.log(`    ✗ failed: ${e.message}`)
    }
  }

  // Write versions manifest
  writeFileSync(join(OUT, 'versions.json'), JSON.stringify(versionsManifest, null, 2))
  console.log('')
  console.log('Done. Specs written to public/specs/')
}

main()
