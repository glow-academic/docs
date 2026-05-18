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
const MD_DIR = join(ROOT, 'public/md')

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

function writeMdCopy(route: string, title: string, content: string): void {
  const mdContent = content
    .replace(/^import .*$/gm, '')
    .replace(/<Tabs[^>]*>/g, '')
    .replace(/<\/Tabs>/g, '')
    .replace(/<Tabs\.Tab>/g, '')
    .replace(/<\/Tabs\.Tab>/g, '')
    .trim()

  const parentDir = join(MD_DIR, dirname(route))
  const fileName = route.split('/').pop() || 'index'
  mkdirSync(parentDir, { recursive: true })
  writeFileSync(join(parentDir, `${fileName}.md`), mdContent)
}

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
  rmSync(MD_DIR, { recursive: true, force: true })
  mkdirSync(MD_DIR, { recursive: true })
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
  for (const [path, methods] of Object.entries(apiSpec.paths)) {
    for (const method of HTTP_METHODS) {
      const op = methods[method] as Operation | undefined
      if (!op) continue
      const tag = op.tags?.[0]
      if (!tag || SKIP_TAGS.has(tag)) continue
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

  // Write api-reference/_meta.ts
  const apiMetaLines = ['export default {']
  for (const [key, label] of Object.entries(apiRefMeta)) {
    apiMetaLines.push(`  '${key}': '${label}',`)
  }
  apiMetaLines.push('}', '')
  writeFileSync(join(apiRefDir, '_meta.ts'), apiMetaLines.join('\n'))

  // ── CLI Reference ─────────────────────────────────────────────

  let totalCliCommands = 0

  if (cliSpec) {
    mkdirSync(cliRefDir, { recursive: true })
    const cliRefMeta: Record<string, string> = {}

    // Top-level commands
    for (const cmd of (cliSpec.subcommands || []).filter(c => !CLI_SKIP.has(c.name))) {
      const subs = (cmd.subcommands || []).filter(s => !CLI_SKIP.has(s.name))

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
    if (cliSpec.resources) {
      for (const res of cliSpec.resources) {
        const resDir = join(cliRefDir, res.slug)
        mkdirSync(resDir, { recursive: true })

        // Generate standard CRUD actions
        const actions = ['search', 'get', 'create', 'update', 'delete']
        const resMeta: Record<string, string> = {}

        for (const action of actions) {
          const aDir = join(resDir, action)
          mkdirSync(aDir, { recursive: true })
          const lines = [
            `# \`${rootName} ${res.slug} ${action}\``,
            '', `${titleCase(action)} ${res.about || res.slug}.`, '',
            '## Usage', '', '```bash',
            action === 'search' ? `${rootName} ${res.slug} ${action}` :
            action === 'create' ? `${rootName} ${res.slug} ${action} --body '\\{...\\}'` :
            `${rootName} ${res.slug} ${action} --id <id>`,
            '```', '',
          ]
          writeFileSync(join(aDir, 'page.mdx'), lines.join('\n'))
          resMeta[action] = `${rootName} ${res.slug} ${action}`
          totalCliCommands++
        }

        const resMetaLines = ['export default {']
        for (const [key, label] of Object.entries(resMeta)) {
          resMetaLines.push(`  '${key}': '${label}',`)
        }
        resMetaLines.push('}', '')
        writeFileSync(join(resDir, '_meta.ts'), resMetaLines.join('\n'))

        cliRefMeta[res.slug] = titleCase(res.slug)
      }
    }

    // Write cli-reference/_meta.ts
    const cliMetaLines = ['export default {']
    for (const [key, label] of Object.entries(cliRefMeta)) {
      cliMetaLines.push(`  '${key}': '${label}',`)
    }
    cliMetaLines.push('}', '')
    writeFileSync(join(cliRefDir, '_meta.ts'), cliMetaLines.join('\n'))

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

  // ── llms-full.txt + llms.txt ──────────────────────────────────

  const llmsLines = ['# Glow Documentation', '', 'Complete API and CLI reference for the Glow platform.', '']
  for (const [tag, endpoints] of [...tagged].sort((a, b) => a[0].localeCompare(b[0]))) {
    const slug = slugify(tag)
    const display = DISPLAY_NAMES[slug] || titleCase(tag)
    llmsLines.push(`## ${display}`, '')
    for (const [path, method, op] of endpoints) {
      const methodUpper = method.toUpperCase()
      const summary = op.summary || ''
      llmsLines.push(`### \`${methodUpper}\` \`${escapeMdx(path)}\``)
      llmsLines.push('')
      if (summary) { llmsLines.push(escapeMdx(summary)); llmsLines.push('') }
    }
  }
  if (mcpSpec && mcpSpec.tools.length > 0) {
    llmsLines.push('## MCP Tools', '')
    for (const tool of mcpSpec.tools) {
      llmsLines.push(`### \`${tool.name}\``, '')
      if (tool.description) llmsLines.push(escapeMdx(tool.description), '')
      if (tool.parameters.length > 0) {
        llmsLines.push('| Name | Type | Required | Description |', '|---|---|---|---|')
        for (const p of tool.parameters) {
          llmsLines.push(`| \`${p.name}\` | \`${p.type}\` | ${p.required ? 'Yes' : 'No'} | ${escapeMdx(p.description || '—')} |`)
        }
        llmsLines.push('')
      }
      llmsLines.push('---', '')
    }
  }
  mkdirSync(join(ROOT, 'public'), { recursive: true })
  writeFileSync(join(ROOT, 'public/llms-full.txt'), llmsLines.join('\n'))

  const summary = [
    '# Glow Documentation', '',
    '> Glow is a conversational AI training platform.', '',
    '- [Full Reference](llms-full.txt)', '',
    '## Guides', '',
    '- [Start](/start.md)',
    '- [How It Works](/how-it-works.md)',
    '- [Tutorial](/tutorial.md)',
    '- [Patterns](/patterns.md)', '',
    '## API Reference', '',
  ]
  for (const slug of [...tagged.keys()].map(slugify).sort()) {
    const display = DISPLAY_NAMES[slug] || titleCase(slug)
    summary.push(`- [${display} API](/api-reference/${slug}.md)`)
  }
  if (cliSpec) {
    summary.push('', '## CLI Reference', '')
    for (const cmd of (cliSpec.subcommands || []).filter(c => !CLI_SKIP.has(c.name))) {
      summary.push(`- [${rootName} ${cmd.name}](/cli-reference/${cmd.name}.md)`)
    }
  }
  if (mcpSpec && mcpSpec.tools.length > 0) {
    summary.push('', '## MCP Reference', '')
    for (const tool of mcpSpec.tools) {
      summary.push(`- [${tool.name}](/mcp-reference/${slugify(tool.name)}.md)`)
    }
  }
  summary.push('')
  writeFileSync(join(ROOT, 'public/llms.txt'), summary.join('\n'))

  console.log(`  total: ${totalEndpoints} API endpoints, ${totalCliCommands} CLI commands`)
  console.log(`  llms-full.txt: ${(llmsLines.join('\n').length / 1024).toFixed(0)}KB`)
}

console.log('Generating Glow docs from specs...')
main()
console.log('Done.')
