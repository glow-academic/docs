/**
 * gen-api-docs.ts — Generate MDX reference pages from Glow OpenAPI + CLI specs
 *
 * Structure:
 *   - Guide pages live at glow/{feature}/page.mdx (hand-written, never overwritten)
 *   - API Reference: api-reference/{tag}/{method}-{path}/page.mdx (per-endpoint)
 *   - CLI Reference: cli-reference/{group}/{command}/page.mdx (per-command)
 *   - Handwritten: glow/start, how-it-works, tutorial, patterns (preserved)
 *
 * Usage: bun run scripts/gen-api-docs.ts
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

// ── Helpers ─────────────────────────────────────────────────────

function escapeMdx(text: string): string {
  return text.replace(/\{/g, '\\{').replace(/\}/g, '\\}')
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function titleCase(text: string): string {
  return text.replace(/(^|[-_\s])(\w)/g, (_, sep, c) => (sep === '-' || sep === '_' ? ' ' : sep) + c.toUpperCase())
}

function endpointSlug(method: string, path: string): string {
  return slugify(`${method}-${path}`)
}

function endpointLabel(method: string, path: string, resourcePrefix: string): string {
  const shortPath = path.startsWith(resourcePrefix) ? path.slice(resourcePrefix.length) || '/' : path
  return `${method.toUpperCase()} ${shortPath}`
}

// No-op: per-page Markdown is now emitted at build time for EVERY page by
// scripts/emit-page-md.mjs (writes out/<route>.md beside each page). This
// generator no longer maintains the public/md mirror — kept as a stub so the
// call sites below don't need touching. See scripts/emit-page-md.mjs.
function writeMdCopy(_route: string, _title: string, _content: string): void {}

// ── OpenAPI types ───────────────────────────────────────────────

interface Parameter {
  name: string; in: string; required?: boolean; description?: string; schema?: any
}
interface Operation {
  summary?: string; description?: string; operationId?: string
  tags?: string[]; parameters?: Parameter[]; requestBody?: any; responses?: Record<string, any>
}
interface OpenAPISpec {
  info: { title: string; version: string; description?: string }
  paths: Record<string, Record<string, Operation>>
  components?: { schemas?: Record<string, any>; securitySchemes?: Record<string, any> }
}
interface CliArg { name: string; long?: string; short?: string; env?: string; help?: string; required: boolean; global?: boolean }
interface CliCommand { name: string; about?: string; aliases?: string[]; args?: CliArg[]; subcommands?: CliCommand[] }
interface CliSpec extends CliCommand {
  version?: string
  resources?: { slug: string; about: string }[]
  media_types?: string[]
  media_actions?: CliCommand[]
  namespaces?: CliNamespace[]
}

/** Nested CLI parents (attempts/tests/system) with view artifacts.
 *  Source: glow-academic-cli/src/resource.rs NAMESPACES table.
 *  See the CLI module's docstring for the wire-path convention. */
interface CliNamespace {
  name: string                  // "attempts", "tests", "system"
  own_actions: string[]         // actions on the parent itself
  views: string[]               // nested view artifacts
}

// MCP tool spec types (from export-mcp-tools.py)
interface McpToolParam { name: string; type: string; required: boolean; description?: string; default?: any }
interface McpTool { name: string; description: string; parameters: McpToolParam[]; artifact?: string; operation?: string }
interface McpSpec { name: string; tool_count: number; tools: McpTool[] }

const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']

// ── OpenAPI resolution ──────────────────────────────────────────

function resolveRef(spec: OpenAPISpec, ref: string): any {
  const parts = ref.replace('#/', '').split('/')
  let current: any = spec
  for (const part of parts) current = current?.[part]
  return current
}

function getRequestBodySchema(spec: OpenAPISpec, op: Operation): any {
  const body = op.requestBody
  if (!body) return null
  const content = body.content || {}
  const json = content['application/json'] || content['multipart/form-data'] || Object.values(content)[0]
  if (!json?.schema) return null
  return json.schema.$ref ? resolveRef(spec, json.schema.$ref) : json.schema
}

function getResponseSchema(spec: OpenAPISpec, op: Operation): any {
  const responses = op.responses || {}
  const success = responses['200'] || responses['201'] || responses['204'] || Object.values(responses)[0]
  if (!success?.content) return null
  const json = success.content['application/json'] || Object.values(success.content)[0]
  if (!json?.schema) return null
  return json.schema.$ref ? resolveRef(spec, json.schema.$ref) : json.schema
}

function fieldType(spec: OpenAPISpec, schema: any, typesPath: string): string {
  if (!schema) return '`any`'
  if (schema.$ref) {
    const name = schema.$ref.split('/').pop()!
    return `[\`${name}\`](${typesPath}#${slugify(name)})`
  }
  if (schema.allOf) return schema.allOf.map((s: any) => fieldType(spec, s, typesPath)).join(' & ')
  if (schema.anyOf || schema.oneOf) {
    const items = (schema.anyOf || schema.oneOf) as any[]
    const nonNull = items.filter((s: any) => s.type !== 'null')
    if (nonNull.length === 0) return '`null`'
    if (nonNull.length === 1) return fieldType(spec, nonNull[0], typesPath)
    return nonNull.map((s: any) => fieldType(spec, s, typesPath)).join(' \\| ')
  }
  if (schema.type === 'array') return `${fieldType(spec, schema.items, typesPath)}[]`
  if (schema.enum) return schema.enum.map((e: any) => `\`"${e}"\``).join(' \\| ')
  return `\`${schema.type || 'any'}\``
}

function fieldTypeLocal(spec: OpenAPISpec, schema: any): string {
  if (!schema) return '`any`'
  if (schema.$ref) { const name = schema.$ref.split('/').pop()!; return `[\`${name}\`](#${slugify(name)})` }
  if (schema.allOf) return schema.allOf.map((s: any) => fieldTypeLocal(spec, s)).join(' & ')
  if (schema.anyOf || schema.oneOf) {
    const items = (schema.anyOf || schema.oneOf) as any[]
    const nonNull = items.filter((s: any) => s.type !== 'null')
    if (nonNull.length === 0) return '`null`'
    if (nonNull.length === 1) return fieldTypeLocal(spec, nonNull[0])
    return nonNull.map((s: any) => fieldTypeLocal(spec, s)).join(' \\| ')
  }
  if (schema.type === 'array') return `${fieldTypeLocal(spec, schema.items)}[]`
  if (schema.enum) return schema.enum.map((e: any) => `\`"${e}"\``).join(' \\| ')
  return `\`${schema.type || 'any'}\``
}

// ── Rendering ───────────────────────────────────────────────────

function renderSchemaTable(spec: OpenAPISpec, schema: any, typesPath: string): string[] {
  const lines: string[] = []
  const resolved = schema.$ref ? resolveRef(spec, schema.$ref) : schema
  const merged = resolved?.allOf
    ? resolved.allOf.reduce((acc: any, s: any) => {
        const r = s.$ref ? resolveRef(spec, s.$ref) : s
        return { ...acc, properties: { ...acc.properties, ...r?.properties }, required: [...(acc.required || []), ...(r?.required || [])] }
      }, { properties: {}, required: [] })
    : resolved

  if (!merged?.properties || Object.keys(merged.properties).length === 0) {
    return ['```', JSON.stringify(schema, null, 2), '```']
  }

  const required = new Set(merged.required || [])
  lines.push('| Field | Type | Required | Description |')
  lines.push('|---|---|---|---|')
  for (const [name, prop] of Object.entries(merged.properties) as [string, any][]) {
    lines.push(`| \`${escapeMdx(name)}\` | ${fieldType(spec, prop, typesPath)} | ${required.has(name) ? 'Yes' : 'No'} | ${escapeMdx((prop as any).description || '—')} |`)
  }
  return lines
}

function renderSchemaTableLocal(spec: OpenAPISpec, schema: any): string[] {
  const lines: string[] = []
  const resolved = schema.$ref ? resolveRef(spec, schema.$ref) : schema
  const merged = resolved?.allOf
    ? resolved.allOf.reduce((acc: any, s: any) => {
        const r = s.$ref ? resolveRef(spec, s.$ref) : s
        return { ...acc, properties: { ...acc.properties, ...r?.properties }, required: [...(acc.required || []), ...(r?.required || [])] }
      }, { properties: {}, required: [] })
    : resolved

  if (!merged?.properties || Object.keys(merged.properties).length === 0) {
    return ['```', JSON.stringify(schema, null, 2), '```']
  }

  const required = new Set(merged.required || [])
  lines.push('| Field | Type | Required | Description |')
  lines.push('|---|---|---|---|')
  for (const [name, prop] of Object.entries(merged.properties) as [string, any][]) {
    lines.push(`| \`${escapeMdx(name)}\` | ${fieldTypeLocal(spec, prop)} | ${required.has(name) ? 'Yes' : 'No'} | ${escapeMdx((prop as any).description || '—')} |`)
  }
  return lines
}

function renderEndpointPage(spec: OpenAPISpec, path: string, method: string, op: Operation, typesPath: string): string[] {
  const lines: string[] = []
  const methodUpper = method.toUpperCase()
  const summary = op.summary || op.operationId || ''

  lines.push(`# \`${methodUpper}\` \`${escapeMdx(path)}\``)
  lines.push('')
  if (summary) { lines.push(escapeMdx(summary)); lines.push('') }
  if (op.description && op.description !== summary) { lines.push(escapeMdx(op.description)); lines.push('') }

  const params = (op.parameters || []).filter(p => p.in !== 'header')
  if (params.length > 0) {
    lines.push('## Parameters'); lines.push('')
    lines.push('| Name | In | Required | Description |'); lines.push('|---|---|---|---|')
    for (const p of params) lines.push(`| \`${escapeMdx(p.name)}\` | ${p.in} | ${p.required ? 'Yes' : 'No'} | ${escapeMdx(p.description || '—')} |`)
    lines.push('')
  }

  const reqSchema = getRequestBodySchema(spec, op)
  if (reqSchema) {
    const refName = op.requestBody?.content?.['application/json']?.schema?.$ref?.split('/').pop()
    lines.push(refName ? `## Request Body (\`${refName}\`)` : '## Request Body')
    lines.push(''); lines.push(...renderSchemaTable(spec, reqSchema, typesPath)); lines.push('')
  }

  const respSchema = getResponseSchema(spec, op)
  if (respSchema) {
    const successResp = op.responses?.['200'] || op.responses?.['201'] || op.responses?.['204'] || Object.values(op.responses || {})[0]
    const refName = (successResp as any)?.content?.['application/json']?.schema?.$ref?.split('/').pop()
    lines.push(refName ? `## Response (\`${refName}\`)` : '## Response')
    lines.push(''); lines.push(...renderSchemaTable(spec, respSchema, typesPath)); lines.push('')
  }

  return lines
}

function renderReferencedTypes(spec: OpenAPISpec, refs: Set<string>): string[] {
  if (refs.size === 0) return []
  const lines: string[] = []
  for (const name of [...refs].sort()) {
    const schema = spec.components?.schemas?.[name]
    if (!schema) continue
    lines.push(`## \`${escapeMdx(name)}\``); lines.push('')
    if (schema.description) { lines.push(escapeMdx(schema.description)); lines.push('') }
    lines.push(...renderSchemaTableLocal(spec, schema)); lines.push(''); lines.push('---'); lines.push('')
  }
  return lines
}

function collectRefs(spec: OpenAPISpec, schema: any, refs: Set<string>, visited: Set<string>): void {
  if (!schema) return
  if (schema.$ref) {
    const name = schema.$ref.split('/').pop()!
    if (!visited.has(name)) { visited.add(name); refs.add(name); const r = resolveRef(spec, schema.$ref); if (r) collectSchemaRefs(spec, r, refs, visited) }
    return
  }
  if (schema.allOf) for (const s of schema.allOf) collectRefs(spec, s, refs, visited)
  if (schema.anyOf) for (const s of schema.anyOf) collectRefs(spec, s, refs, visited)
  if (schema.oneOf) for (const s of schema.oneOf) collectRefs(spec, s, refs, visited)
  if (schema.type === 'array' && schema.items) collectRefs(spec, schema.items, refs, visited)
}

function collectSchemaRefs(spec: OpenAPISpec, schema: any, refs: Set<string>, visited: Set<string>): void {
  const merged = schema?.allOf ? schema.allOf.reduce((acc: any, s: any) => {
    const r = s.$ref ? resolveRef(spec, s.$ref) : s; return { properties: { ...acc.properties, ...r?.properties } }
  }, { properties: {} }) : schema
  if (!merged?.properties) return
  for (const prop of Object.values(merged.properties) as any[]) collectRefs(spec, prop, refs, visited)
}

function renderCliCommandPage(rootName: string, cmd: CliCommand, prefix: string): string[] {
  const lines: string[] = []
  const fullName = prefix ? `${prefix} ${cmd.name}` : cmd.name

  lines.push(`# \`${rootName} ${fullName}\``)
  lines.push('')
  if (cmd.about) { lines.push(escapeMdx(cmd.about)); lines.push('') }

  lines.push('## Usage')
  lines.push('')
  lines.push('```bash')
  const args = (cmd.args || []).filter(a => !a.global)
  const argStr = args.map(a => a.required ? ` ${a.long || a.name} <${a.name}>` : ` [${a.long || a.name}]`).join('')
  lines.push(`${rootName} ${fullName}${argStr}`)
  lines.push('```')
  lines.push('')

  if (args.length > 0) {
    lines.push('## Options')
    lines.push('')
    lines.push('| Flag | Required | Description |')
    lines.push('|---|---|---|')
    for (const a of args) {
      const flag = [a.long, a.short].filter(Boolean).join(', ')
      const env = a.env ? ` (env: \`${a.env}\`)` : ''
      lines.push(`| \`${flag || a.name}\` | ${a.required ? 'Yes' : 'No'} | ${escapeMdx(a.help || '—')}${env} |`)
    }
    lines.push('')
  }

  return lines
}

/** Render a single MCP tool reference page */
function renderMcpToolPage(tool: McpTool, guideSlug?: string, apiEndpointPath?: string): string[] {
  const lines: string[] = []

  lines.push(`# \`${tool.name}\``)
  lines.push('')
  if (tool.description) { lines.push(escapeMdx(tool.description)); lines.push('') }

  if (tool.parameters.length > 0) {
    lines.push('## Parameters')
    lines.push('')
    lines.push('| Name | Type | Required | Description |')
    lines.push('|---|---|---|---|')
    for (const p of tool.parameters) {
      const def = p.default !== undefined && p.default !== null ? ` (default: \`${p.default}\`)` : ''
      lines.push(`| \`${p.name}\` | \`${p.type}\` | ${p.required ? 'Yes' : 'No'} | ${escapeMdx(p.description || '—')}${def} |`)
    }
    lines.push('')
  } else {
    lines.push('*No parameters.*')
    lines.push('')
  }

  lines.push('## Example')
  lines.push('')
  lines.push('```json')
  const exArgs: Record<string, any> = {}
  for (const p of tool.parameters.filter(p => p.required)) {
    exArgs[p.name] = p.type === 'integer' ? 0 : p.type === 'array' ? [] : `<${p.name}>`
  }
  lines.push(JSON.stringify({ name: tool.name, arguments: exArgs }, null, 2))
  lines.push('```')
  lines.push('')

  const related: string[] = []
  if (guideSlug) related.push(`- [${titleCase(guideSlug)} Guide](/${guideSlug})`)
  if (apiEndpointPath) related.push(`- [API Endpoint](${apiEndpointPath})`)
  if (related.length > 0) {
    lines.push('## Related')
    lines.push('')
    lines.push(...related)
    lines.push('')
  }

  return lines
}

// ── Display names ───────────────────────────────────────────────

const DISPLAY_NAMES: Record<string, string> = {
  attempt: 'Attempt', chat: 'Chat', home: 'Home', practice: 'Practice',
  benchmark: 'Benchmark', test: 'Test', invocation: 'Invocation',
  cohorts: 'Cohorts', simulations: 'Simulations', scenarios: 'Scenarios', personas: 'Personas',
  dashboard: 'Dashboard', reports: 'Reports', activity: 'Activity', pricing: 'Pricing', leaderboard: 'Leaderboard',
  agents: 'Agents', models: 'Models', providers: 'Providers', tools: 'Tools',
  profiles: 'Profiles', documents: 'Documents', parameters: 'Parameters', fields: 'Fields',
  departments: 'Departments', rubrics: 'Rubrics', auths: 'Auths', evals: 'Evals',
  health: 'Health', settings: 'Settings', record: 'Record', group: 'Group', session: 'Session',
  authentication: 'Authentication', connect: 'Connect', context: 'Context',
  emulation: 'Emulation', generate: 'Generate', info: 'Info', other: 'Other',
  problem: 'Problem', stream: 'Stream', audio: 'Audio',
}

const SKIP_TAGS = new Set(['webhooks'])
const CLI_SKIP = new Set(['serve', 'help', 'completions'])

// ── Sidebar grouping (glow features) ────────────────────────────

const GLOW_GROUPS: { separator: string; title: string; slugs: string[] }[] = [
  { separator: '---general', title: 'General', slugs: ['authentication', 'connect', 'context', 'emulation', 'generate', 'info', 'other', 'problem', 'stream'] },
  { separator: '---experience', title: 'Experience', slugs: ['attempt', 'chat', 'home', 'practice'] },
  { separator: '---testing', title: 'Testing', slugs: ['benchmark', 'test', 'invocation'] },
  { separator: '---training', title: 'Training', slugs: ['cohorts', 'simulations', 'scenarios', 'personas'] },
  { separator: '---analytics', title: 'Analytics', slugs: ['dashboard', 'reports', 'activity', 'pricing', 'leaderboard'] },
  { separator: '---intelligence', title: 'Intelligence', slugs: ['agents', 'models', 'providers', 'tools'] },
  { separator: '---management', title: 'Management', slugs: ['profiles', 'documents', 'parameters', 'fields'] },
  { separator: '---system', title: 'System', slugs: ['departments', 'rubrics', 'auths', 'evals'] },
  { separator: '---other', title: 'Other', slugs: ['health', 'settings', 'record', 'group', 'session'] },
]

// ── Main ────────────────────────────────────────────────────────

function main() {
  const appDir = join(ROOT, 'app')
  const apiRefDir = join(appDir, 'api-reference')
  const cliRefDir = join(appDir, 'cli-reference')

  // Clean generated dirs
  rmSync(apiRefDir, { recursive: true, force: true })
  mkdirSync(apiRefDir, { recursive: true })
  rmSync(cliRefDir, { recursive: true, force: true })

  // Load specs
  const specsDir = existsSync(join(ROOT, 'public/specs/glow-api.json'))
    ? join(ROOT, 'public/specs')
    : join(ROOT, 'specs')

  let apiSpec: OpenAPISpec | null = null
  let cliSpec: CliSpec | null = null
  let mcpSpec: McpSpec | null = null
  try { apiSpec = JSON.parse(readFileSync(join(specsDir, 'glow-api.json'), 'utf-8')) } catch (e: any) { console.log(`  skip: glow-api.json (${e.message})`) }
  try { cliSpec = JSON.parse(readFileSync(join(specsDir, 'cli.json'), 'utf-8')) } catch (e: any) { console.log(`  skip: cli.json (${e.message})`) }
  try { mcpSpec = JSON.parse(readFileSync(join(specsDir, 'glow-mcp.json'), 'utf-8')) } catch (e: any) { console.log(`  skip: glow-mcp.json (${e.message})`) }

  if (!apiSpec) { console.log('No Glow API spec found'); return }

  const rootName = cliSpec?.name || 'glow'

  // ── API Reference ─────────────────────────────────────────────
  // Group endpoints by tag → per-endpoint pages

  const tagged = new Map<string, [string, string, Operation][]>()
  const topLevel: [string, string, Operation][] = []   // untagged routes → own top-level page
  for (const [path, methods] of Object.entries(apiSpec.paths)) {
    for (const method of HTTP_METHODS) {
      const op = methods[method] as Operation | undefined
      if (!op) continue
      const tag = op.tags?.[0]
      if (tag && SKIP_TAGS.has(tag)) continue
      if (!tag) { topLevel.push([path, method, op]); continue }   // no tag → top-level route
      if (!tagged.has(tag)) tagged.set(tag, [])
      tagged.get(tag)!.push([path, method, op])
    }
  }

  const apiRefMeta: Record<string, string> = {}
  let totalEndpoints = 0

  for (const [tag, endpoints] of [...tagged].sort((a, b) => a[0].localeCompare(b[0]))) {
    const slug = slugify(tag)
    const display = DISPLAY_NAMES[slug] || titleCase(tag)
    const resourceDir = join(apiRefDir, slug)
    mkdirSync(resourceDir, { recursive: true })

    const pathPrefixes = endpoints.map(([p]) => '/' + p.split('/').filter(Boolean)[0])
    const resourcePrefix = pathPrefixes.every(p => p === pathPrefixes[0]) ? pathPrefixes[0] : ''

    // Collect refs for types page
    const allRefs = new Set<string>()
    const allVisited = new Set<string>()
    for (const [, , op] of endpoints) {
      const req = getRequestBodySchema(apiSpec, op)
      if (req) collectSchemaRefs(apiSpec, req, allRefs, allVisited)
      const resp = getResponseSchema(apiSpec, op)
      if (resp) collectSchemaRefs(apiSpec, resp, allRefs, allVisited)
    }

    const typesPath = `/api-reference/${slug}/types`
    const endpointMeta: Record<string, string> = {}

    for (const [path, method, op] of endpoints) {
      const epSlug = endpointSlug(method, path)
      const epLabel = endpointLabel(method, path, resourcePrefix)
      const epDir = join(resourceDir, epSlug)
      mkdirSync(epDir, { recursive: true })

      const lines = renderEndpointPage(apiSpec, path, method, op, typesPath)
      writeFileSync(join(epDir, 'page.mdx'), lines.join('\n'))
      writeMdCopy(`/api-reference/${slug}/${epSlug}`, epLabel, lines.join('\n'))

      endpointMeta[epSlug] = epLabel
      totalEndpoints++
    }

    if (allRefs.size > 0) {
      const typesDir = join(resourceDir, 'types')
      mkdirSync(typesDir, { recursive: true })
      const typesLines = [`# ${escapeMdx(display)} Types`, '']
      typesLines.push(...renderReferencedTypes(apiSpec, allRefs))
      writeFileSync(join(typesDir, 'page.mdx'), typesLines.join('\n'))
      writeMdCopy(`/api-reference/${slug}/types`, `${display} Types`, typesLines.join('\n'))
      endpointMeta['types'] = 'Types'
    }

    const metaLines = ['export default {']
    for (const [key, label] of Object.entries(endpointMeta)) {
      metaLines.push(`  '${key}': '${label}',`)
    }
    metaLines.push('}', '')
    writeFileSync(join(resourceDir, '_meta.ts'), metaLines.join('\n'))

    apiRefMeta[slug] = display
    console.log(`  api: ${slug} (${endpoints.length} endpoints${allRefs.size > 0 ? `, ${allRefs.size} types` : ''})`)
  }

  // Top-level routes (no OpenAPI tag) — the OIDC / identity / discovery
  // surface: /login, /token, /jwks, /.well-known/*, /authorize, /userinfo, …
  // Emitted as single pages directly under api-reference/<route> and listed
  // first, mirroring how CLI root commands (glow login, glow deploy) sit at
  // the top. Each page inlines its referenced types (same-page anchors) so it
  // stands alone without a per-route types page.
  const topLevelMeta: Record<string, string> = {}
  for (const [path, method, op] of [...topLevel].sort((a, b) => a[0].localeCompare(b[0]))) {
    const slug = slugify(path.replace(/^\//, '')) || 'root'
    const dir = join(apiRefDir, slug)
    mkdirSync(dir, { recursive: true })

    const refs = new Set<string>()
    const visited = new Set<string>()
    const req = getRequestBodySchema(apiSpec, op)
    if (req) collectSchemaRefs(apiSpec, req, refs, visited)
    const resp = getResponseSchema(apiSpec, op)
    if (resp) collectSchemaRefs(apiSpec, resp, refs, visited)

    const lines = renderEndpointPage(apiSpec, path, method, op, '')   // '' → $refs become same-page anchors
    if (refs.size > 0) {
      lines.push('## Types', '')
      lines.push(...renderReferencedTypes(apiSpec, refs))
    }
    writeFileSync(join(dir, 'page.mdx'), lines.join('\n'))
    topLevelMeta[slug] = `${method.toUpperCase()} ${path}`
    totalEndpoints++
  }
  if (topLevel.length) console.log(`  api: ${topLevel.length} top-level routes`)

  // Write api-reference/_meta.ts — top-level routes first, then resources.
  const apiMetaLines = ['export default {']
  for (const [key, label] of Object.entries(topLevelMeta)) apiMetaLines.push(`  '${key}': '${label}',`)
  for (const [key, label] of Object.entries(apiRefMeta)) apiMetaLines.push(`  '${key}': '${label}',`)
  apiMetaLines.push('}', '')
  writeFileSync(join(apiRefDir, '_meta.ts'), apiMetaLines.join('\n'))

  // Section landing page so /api-reference resolves (not a 404) and the
  // sidebar "API Reference" entry is clickable. Static intro — the
  // sidebar + search cover navigation, so there's nothing per-spec to
  // template here.
  const apiIndex = [
    '# API Reference',
    '',
    "Every Glow HTTP endpoint, auto-generated from the platform's OpenAPI",
    'spec — so these pages track the deployed API version (see',
    '[`api-versions.json`](https://github.com/glow-academic/docs/blob/main/api-versions.json)).',
    '',
    'Each resource (Agent, Attempt, Persona, Scenario, and the rest) has its',
    'own section in the sidebar on the left; expand one to see its endpoints,',
    'request and response shapes, and types. Or press <kbd>⌘ K</kbd> to',
    'search straight to an endpoint.',
    '',
    'Every endpoint authenticates with a bearer token — see',
    '[Authentication](/authentication).',
    '',
  ].join('\n')
  writeFileSync(join(apiRefDir, 'page.mdx'), apiIndex)
  writeMdCopy('/api-reference', 'API Reference', apiIndex)

  // ── CLI Reference ─────────────────────────────────────────────

  // Parent commands whose subcommands should render FLAT in the sidebar
  // (as siblings of glow login / glow deploy / etc.) instead of inside
  // a collapsible group. Use this for small infra-level groups (~2-5
  // subs) where a parent dir adds noise. CRUD groups like personas,
  // scenarios, etc. (10+ subs each) stay grouped.
  const FLATTEN_CLI_PARENTS = new Set(['mcp', 'backup'])

  let totalCliCommands = 0

  if (cliSpec) {
    mkdirSync(cliRefDir, { recursive: true })
    const cliRefMeta: Record<string, string> = {}

    // Top-level commands
    for (const cmd of (cliSpec.subcommands || []).filter(c => !CLI_SKIP.has(c.name))) {
      const subs = (cmd.subcommands || []).filter(s => !CLI_SKIP.has(s.name))

      // Flatten path: emit each sub as a top-level entry named
      // `{parent}-{sub}` so the sidebar lists them inline.
      if (subs.length > 0 && FLATTEN_CLI_PARENTS.has(cmd.name)) {
        for (const sub of subs) {
          const slug = `${cmd.name}-${sub.name}`
          const subDir = join(cliRefDir, slug)
          mkdirSync(subDir, { recursive: true })
          const lines = renderCliCommandPage(rootName, sub, cmd.name)
          writeFileSync(join(subDir, 'page.mdx'), lines.join('\n'))
          writeMdCopy(`/cli-reference/${slug}`, `${rootName} ${cmd.name} ${sub.name}`, lines.join('\n'))
          cliRefMeta[slug] = `${rootName} ${cmd.name} ${sub.name}`
          totalCliCommands++
        }
        continue
      }

      if (subs.length === 0) {
        const cmdDir = join(cliRefDir, cmd.name)
        mkdirSync(cmdDir, { recursive: true })
        const lines = renderCliCommandPage(rootName, cmd, '')
        writeFileSync(join(cmdDir, 'page.mdx'), lines.join('\n'))
        writeMdCopy(`/cli-reference/${cmd.name}`, `${rootName} ${cmd.name}`, lines.join('\n'))
        cliRefMeta[cmd.name] = `${rootName} ${cmd.name}`
        totalCliCommands++
      } else {
        const groupDir = join(cliRefDir, cmd.name)
        mkdirSync(groupDir, { recursive: true })
        const groupMeta: Record<string, string> = {}

        for (const sub of subs) {
          const subSubs = (sub.subcommands || []).filter(s => !CLI_SKIP.has(s.name))

          if (subSubs.length === 0) {
            const subDir = join(groupDir, sub.name)
            mkdirSync(subDir, { recursive: true })
            const lines = renderCliCommandPage(rootName, sub, cmd.name)
            writeFileSync(join(subDir, 'page.mdx'), lines.join('\n'))
            writeMdCopy(`/cli-reference/${cmd.name}/${sub.name}`, `${rootName} ${cmd.name} ${sub.name}`, lines.join('\n'))
            groupMeta[sub.name] = `${rootName} ${cmd.name} ${sub.name}`
            totalCliCommands++
          } else {
            // Nested group (e.g. glow admin billing plans)
            const nestedDir = join(groupDir, sub.name)
            mkdirSync(nestedDir, { recursive: true })
            const nestedMeta: Record<string, string> = {}

            for (const nested of subSubs) {
              const nDir = join(nestedDir, nested.name)
              mkdirSync(nDir, { recursive: true })
              const lines = renderCliCommandPage(rootName, nested, `${cmd.name} ${sub.name}`)
              writeFileSync(join(nDir, 'page.mdx'), lines.join('\n'))
              writeMdCopy(`/cli-reference/${cmd.name}/${sub.name}/${nested.name}`, `${rootName} ${cmd.name} ${sub.name} ${nested.name}`, lines.join('\n'))
              nestedMeta[nested.name] = `${rootName} ${cmd.name} ${sub.name} ${nested.name}`
              totalCliCommands++
            }

            const nestedMetaLines = ['export default {']
            for (const [key, label] of Object.entries(nestedMeta)) {
              nestedMetaLines.push(`  '${key}': '${label}',`)
            }
            nestedMetaLines.push('}', '')
            writeFileSync(join(nestedDir, '_meta.ts'), nestedMetaLines.join('\n'))

            groupMeta[sub.name] = titleCase(sub.name)
          }
        }

        const groupMetaLines = ['export default {']
        for (const [key, label] of Object.entries(groupMeta)) {
          groupMetaLines.push(`  '${key}': '${label}',`)
        }
        groupMetaLines.push('}', '')
        writeFileSync(join(groupDir, '_meta.ts'), groupMetaLines.join('\n'))

        cliRefMeta[cmd.name] = titleCase(cmd.name)
      }
    }

    // Dynamic resources from CLI spec (glow personas list, glow agents get, etc.)
    // The CLI itself is generic (forwards any `glow <res> <action>` to
    // POST /<res>/<action>) so the docs need to enumerate the actual
    // action set from the API. We derive it from apiSpec.paths grouped
    // by tag instead of hardcoding — that way artifacts with extras like
    // `generate`, `group`, `audio-upload` get their full action list.
    if (cliSpec.resources) {
      // Build singular→action-set map from the api spec.
      // e.g. paths like /persona/save, /persona/list, /persona/generate
      // → {persona: ['save', 'list', 'generate', ...]}
      const actionsByArtifact = new Map<string, string[]>()
      if (apiSpec?.paths) {
        for (const path of Object.keys(apiSpec.paths)) {
          // Path shape: /artifact/action  or  /artifact/action/subaction
          const parts = path.split('/').filter(Boolean)
          if (parts.length < 2) continue
          const artifact = parts[0]
          const action = parts.slice(1).join('-')   // collapse multi-segment to a single CLI action token
          if (!actionsByArtifact.has(artifact)) actionsByArtifact.set(artifact, [])
          if (!actionsByArtifact.get(artifact)!.includes(action)) {
            actionsByArtifact.get(artifact)!.push(action)
          }
        }
      }

      // Skip namespace parents (attempts/tests/system) from the generic
      // CRUD loop — they get nested treatment in the namespaces block
      // below instead of flat actions.
      const namespaceSlugs = new Set((cliSpec.namespaces || []).map(n => n.name))

      // Bucket actions by a recognized prefix (media type or view name).
      // For each action `prefix_suffix` where prefix ∈ prefixes,
      // collect `suffix` under prefix. Returns { flat, byPrefix }.
      function bucketByPrefix(actions: string[], prefixes: string[]) {
        const flat: string[] = []
        const byPrefix = new Map<string, string[]>()
        for (const a of actions) {
          const m = prefixes.find(p => a.startsWith(`${p}_`))
          if (m) {
            const sub = a.slice(m.length + 1)
            if (!byPrefix.has(m)) byPrefix.set(m, [])
            byPrefix.get(m)!.push(sub)
          } else {
            flat.push(a)
          }
        }
        return { flat, byPrefix }
      }

      const mediaTypes = cliSpec.media_types || []

      // Render a single CLI action page. Used by all the writer paths
      // below — keeps the page shape consistent across CRUD, namespace
      // own_actions, view-nested, and media-nested entries.
      function writeCliPage(
        dir: string,
        invocationParts: string[],   // e.g. ['personas', 'file', 'download']
        wirePath: string,            // e.g. '/persona/file_download'
        about: string,
      ) {
        const aDir = join(dir, invocationParts[invocationParts.length - 1])
        mkdirSync(aDir, { recursive: true })
        const fullInvocation = `${rootName} ${invocationParts.join(' ')}`
        const action = invocationParts[invocationParts.length - 1]
        const usageHint =
          action === 'list' || action === 'search'
            ? fullInvocation
            : action === 'save' || action === 'create' || action === 'generate' || action === 'upload'
              ? `${fullInvocation} --body '\\{...\\}'`
              : `${fullInvocation} --id <id>`
        const lines = [
          `# \`${fullInvocation}\``,
          '', about, '',
          '## Usage', '', '```bash', usageHint, '```', '',
          `> Wire call: \`POST ${wirePath}\`. ` +
          `Run \`${fullInvocation} --help\` for the full flag list.`,
          '',
        ]
        writeFileSync(join(aDir, 'page.mdx'), lines.join('\n'))
        totalCliCommands++
      }

      function writeMetaTs(dir: string, meta: Record<string, string>) {
        const lines = ['export default {']
        for (const [k, v] of Object.entries(meta)) {
          lines.push(`  '${k}': '${v}',`)
        }
        lines.push('}', '')
        writeFileSync(join(dir, '_meta.ts'), lines.join('\n'))
      }

      for (const res of cliSpec.resources) {
        if (namespaceSlugs.has(res.slug)) continue

        const artifact = (res as any).api_path || res.slug.replace(/s$/, '')
        const allActions = (actionsByArtifact.get(artifact) || ['get', 'list', 'save', 'delete'])

        // Bucket by media-type prefix. flat actions stay top-level
        // under the resource; media actions nest at <res>/<media>/<op>/.
        const { flat, byPrefix: byMedia } = bucketByPrefix(allActions, mediaTypes)

        const resDir = join(cliRefDir, res.slug)
        mkdirSync(resDir, { recursive: true })
        const resMeta: Record<string, string> = {}

        for (const action of flat.sort()) {
          writeCliPage(resDir, [res.slug, action],
            `/${artifact}/${action}`,
            `${titleCase(action)} ${res.about || res.slug}.`)
          resMeta[action] = `${rootName} ${res.slug} ${action}`
        }

        for (const media of [...byMedia.keys()].sort()) {
          const ops = byMedia.get(media)!.sort()
          const mediaDir = join(resDir, media)
          mkdirSync(mediaDir, { recursive: true })
          const mediaMeta: Record<string, string> = {}
          for (const op of ops) {
            writeCliPage(mediaDir, [res.slug, media, op],
              `/${artifact}/${media}_${op}`,
              `${titleCase(op)} ${media} on ${res.about || res.slug}.`)
            mediaMeta[op] = `${rootName} ${res.slug} ${media} ${op}`
          }
          writeMetaTs(mediaDir, mediaMeta)
          resMeta[media] = titleCase(media)
        }

        writeMetaTs(resDir, resMeta)
        cliRefMeta[res.slug] = titleCase(res.slug)
      }

      // ── Nested namespaces (attempts / tests / system) ─────────
      // The CLI declares these in NAMESPACES; each gets a parent dir
      // with own_actions at the top level + nested view-artifact dirs
      // for the views that share the parent's URL space.
      //
      // Wire path convention:
      //   own action: POST /<parent_singular>/<action>
      //   view action: POST /<parent_singular>/<view>_<action>
      // CLI invocation:
      //   `glow <parent> <action>` (own)
      //   `glow <parent> <view> <action>` (nested)
      for (const ns of (cliSpec.namespaces || [])) {
        const parentSingular = ns.name.replace(/s$/, '')
        const parentApiActions = actionsByArtifact.get(parentSingular) || []

        const parentDir = join(cliRefDir, ns.name)
        mkdirSync(parentDir, { recursive: true })
        const parentMeta: Record<string, string> = {}

        // Own actions = declared verbs in NAMESPACES (intersect with what
        // the api actually exposes) + ALL media-prefixed actions the api
        // exposes. Media ops are implicit — they don't need to be in the
        // hardcoded own_actions list since `<media>_<op>` is a uniform
        // convention across artifacts.
        const declared = ns.own_actions.filter(a => parentApiActions.includes(a))
        const mediaApi = parentApiActions.filter(a =>
          mediaTypes.some(m => a.startsWith(`${m}_`))
        )
        const ownActions = [...new Set([...declared, ...mediaApi])]

        // Bucket by media prefix so file_download, audio_upload etc.
        // nest at <parent>/<media>/<op>/ rather than flat.
        const { flat: ownFlat, byPrefix: ownByMedia } = bucketByPrefix(ownActions, mediaTypes)

        for (const action of [...ownFlat].sort()) {
          writeCliPage(parentDir, [ns.name, action],
            `/${parentSingular}/${action}`,
            `${titleCase(action)} on ${ns.name}.`)
          parentMeta[action] = `${rootName} ${ns.name} ${action}`
        }

        for (const media of [...ownByMedia.keys()].sort()) {
          const ops = ownByMedia.get(media)!.sort()
          const mediaDir = join(parentDir, media)
          mkdirSync(mediaDir, { recursive: true })
          const mediaMeta: Record<string, string> = {}
          for (const op of ops) {
            writeCliPage(mediaDir, [ns.name, media, op],
              `/${parentSingular}/${media}_${op}`,
              `${titleCase(op)} ${media} on ${ns.name}.`)
            mediaMeta[op] = `${rootName} ${ns.name} ${media} ${op}`
          }
          writeMetaTs(mediaDir, mediaMeta)
          parentMeta[media] = titleCase(media)
        }

        // Nested view artifacts. Strip the <view>_ prefix from
        // parent's api actions to get each view's action set, then
        // media-bucket those too so /<parent>/<view>_audio_download
        // → <parent>/<view>/audio/download.
        for (const view of [...ns.views].sort()) {
          const viewActions = parentApiActions
            .filter(a => a.startsWith(`${view}_`))
            .map(a => a.slice(view.length + 1))
            .sort()
          if (parentApiActions.includes(view)) viewActions.unshift('get')
          if (viewActions.length === 0) continue

          const viewDir = join(parentDir, view)
          mkdirSync(viewDir, { recursive: true })
          const viewMeta: Record<string, string> = {}

          const { flat: viewFlat, byPrefix: viewByMedia } = bucketByPrefix(viewActions, mediaTypes)

          for (const action of [...viewFlat].sort()) {
            const wirePath = action === 'get' && !parentApiActions.includes(`${view}_get`)
              ? `/${parentSingular}/${view}`
              : `/${parentSingular}/${view}_${action}`
            writeCliPage(viewDir, [ns.name, view, action], wirePath,
              `${titleCase(action)} on ${view} (under ${ns.name}).`)
            viewMeta[action] = `${rootName} ${ns.name} ${view} ${action}`
          }

          for (const media of [...viewByMedia.keys()].sort()) {
            const ops = viewByMedia.get(media)!.sort()
            const mediaDir = join(viewDir, media)
            mkdirSync(mediaDir, { recursive: true })
            const mediaMeta: Record<string, string> = {}
            for (const op of ops) {
              writeCliPage(mediaDir, [ns.name, view, media, op],
                `/${parentSingular}/${view}_${media}_${op}`,
                `${titleCase(op)} ${media} on ${view} (under ${ns.name}).`)
              mediaMeta[op] = `${rootName} ${ns.name} ${view} ${media} ${op}`
            }
            writeMetaTs(mediaDir, mediaMeta)
            viewMeta[media] = titleCase(media)
          }

          writeMetaTs(viewDir, viewMeta)
          parentMeta[view] = titleCase(view)
        }

        writeMetaTs(parentDir, parentMeta)
        cliRefMeta[ns.name] = titleCase(ns.name)
      }
    }

    // Write cli-reference/_meta.ts
    const cliMetaLines = ['export default {']
    for (const [key, label] of Object.entries(cliRefMeta)) {
      cliMetaLines.push(`  '${key}': '${label}',`)
    }
    cliMetaLines.push('}', '')
    writeFileSync(join(cliRefDir, '_meta.ts'), cliMetaLines.join('\n'))

    // Section landing page so /cli-reference resolves (not a 404) and the
    // sidebar "CLI Reference" entry is clickable.
    const cliIndex = [
      '# CLI Reference',
      '',
      'Every `glow` command, auto-generated from the CLI spec — so these pages',
      'track the released CLI version (see',
      '[`api-versions.json`](https://github.com/glow-academic/docs/blob/main/api-versions.json)).',
      '',
      'Commands are grouped in the sidebar on the left: lifecycle commands like',
      '`glow login`, `glow deploy`, and `glow status`, alongside per-resource',
      'groups (`glow personas …`, `glow scenarios …`, and so on). Press',
      '<kbd>⌘ K</kbd> to jump straight to a command.',
      '',
      'See [Start](/start) for install and first-boot, and',
      '[Authentication](/authentication) for how `glow login` stores its token.',
      '',
    ].join('\n')
    writeFileSync(join(cliRefDir, 'page.mdx'), cliIndex)
    writeMdCopy('/cli-reference', 'CLI Reference', cliIndex)

    console.log(`  cli: ${totalCliCommands} command pages`)
  }

  // ── MCP Reference ────────────────────────────────────────────
  // Generate mcp-reference/ with per-tool pages from MCP tool spec

  const mcpRefDir = join(appDir, 'mcp-reference')
  rmSync(mcpRefDir, { recursive: true, force: true })
  let totalMcpTools = 0

  if (mcpSpec && mcpSpec.tools.length > 0) {
    mkdirSync(mcpRefDir, { recursive: true })
    const mcpRefMeta: Record<string, string> = {}

    for (const tool of mcpSpec.tools) {
      const toolSlug = slugify(tool.name)
      const toolDir = join(mcpRefDir, toolSlug)
      mkdirSync(toolDir, { recursive: true })

      // Map artifact → guide page and API endpoint
      let guideSlug: string | undefined
      let apiEndpointPath: string | undefined

      if (tool.artifact) {
        guideSlug = tool.artifact

        // Find matching API tag (try artifact name, then plural form)
        const candidates = [tool.artifact, tool.artifact + 's']
        for (const candidate of candidates) {
          if (tagged.has(candidate)) {
            const tagSlug = slugify(candidate)
            const endpoints = tagged.get(candidate)!
            for (const [path, method] of endpoints) {
              if (path.endsWith(`/${tool.operation}`)) {
                apiEndpointPath = `/api-reference/${tagSlug}/${endpointSlug(method, path)}`
                break
              }
            }
            if (!apiEndpointPath) apiEndpointPath = `/api-reference/${tagSlug}`
            break
          }
        }
      }

      const lines = renderMcpToolPage(tool, guideSlug, apiEndpointPath)
      writeFileSync(join(toolDir, 'page.mdx'), lines.join('\n'))
      writeMdCopy(`/mcp-reference/${toolSlug}`, tool.name, lines.join('\n'))

      mcpRefMeta[toolSlug] = tool.name
      totalMcpTools++
    }

    const mcpMetaLines = ['export default {']
    for (const [key, label] of Object.entries(mcpRefMeta)) {
      mcpMetaLines.push(`  '${key}': '${label}',`)
    }
    mcpMetaLines.push('}', '')
    writeFileSync(join(mcpRefDir, '_meta.ts'), mcpMetaLines.join('\n'))

    console.log(`  mcp: ${totalMcpTools} tool pages`)
  }

  // ── Mirror existing hand-written artifact guides to public/md/ ──
  // We do NOT auto-create stub pages for missing guides — singular
  // artifact slugs at app root would conflict with the plural-named
  // hand-written guides (e.g., agents/, cohorts/). Only mirror what
  // already exists at the singular slug for back-compat.

  for (const [tag] of tagged) {
    const slug = slugify(tag)
    const display = DISPLAY_NAMES[slug] || titleCase(tag)
    const guidePath = join(appDir, slug, 'page.mdx')
    if (existsSync(guidePath)) {
      writeMdCopy(`/${slug}`, display, readFileSync(guidePath, 'utf-8'))
    }
  }

  // Copy handwritten pages to .md
  for (const hw of ['start', 'how-it-works', 'tutorial', 'patterns']) {
    const fp = join(appDir, hw, 'page.mdx')
    if (existsSync(fp)) {
      writeMdCopy(`/${hw}`, titleCase(hw), readFileSync(fp, 'utf-8'))
    }
  }

  // llms.txt (curated index) and the per-page .md mirror are both produced
  // at build time by scripts/emit-page-md.mjs, which walks the real page tree
  // (so coverage stays complete and links resolve under the basePath). This
  // generator only emits the reference page.mdx + _meta files.

  console.log(`  total: ${totalEndpoints} API endpoints, ${totalCliCommands} CLI commands`)
}

console.log('Generating Glow docs from specs...')
main()
console.log('Done.')
