/**
 * gen-api-docs.ts — Generate MDX reference pages from OpenAPI + CLI specs
 *
 * Structure:
 *   - Glow: merged API + CLI + WebSocket per resource/feature (with Tabs)
 *       - Authentication, Context, Emulation, Generate
 *       - Personas, Scenarios, Agents, ... (all artifacts)
 *       - Instances, Ledger, Admin (CLI-only)
 *   - Platform (separator):
 *       - Auth, Billing, Deploy, etc. — one top-level page per Admin API tag
 *
 * Usage: bun run scripts/gen-api-docs.ts
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const MD_DIR = join(ROOT, 'public/md')

// Track all generated pages for llms.txt index
const mdPages: { route: string; title: string }[] = []

/** Write a .md copy of a page to public/md/ for LLM consumption */
function writeMdCopy(route: string, title: string, content: string): void {
  // Strip MDX-specific syntax (import statements, JSX components)
  const mdContent = content
    .replace(/^import .*$/gm, '')
    .replace(/<Tabs[^>]*>/g, '')
    .replace(/<\/Tabs>/g, '')
    .replace(/<Tabs\.Tab>/g, '')
    .replace(/<\/Tabs\.Tab>/g, '')
    .trim()

  // Write as flat .md file: /glow/agents/api → public/md/glow/agents/api.md
  const parentDir = join(MD_DIR, dirname(route))
  const fileName = route.split('/').pop() || 'index'
  mkdirSync(parentDir, { recursive: true })
  writeFileSync(join(parentDir, `${fileName}.md`), mdContent)
  mdPages.push({ route, title })
}

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

// ── OpenAPI types ───────────────────────────────────────────────

interface Parameter {
  name: string
  in: string
  required?: boolean
  description?: string
  schema?: any
}

interface Operation {
  summary?: string
  description?: string
  operationId?: string
  tags?: string[]
  parameters?: Parameter[]
  requestBody?: any
  responses?: Record<string, any>
}

interface PathItem {
  [method: string]: Operation | any
}

interface OpenAPISpec {
  info: { title: string; version: string; description?: string }
  paths: Record<string, PathItem>
  components?: { schemas?: Record<string, any>; securitySchemes?: Record<string, any> }
}

const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']

function resolveRef(spec: OpenAPISpec, ref: string): any {
  const parts = ref.replace('#/', '').split('/')
  let current: any = spec
  for (const part of parts) {
    current = current?.[part]
  }
  return current
}

function schemaToType(spec: OpenAPISpec, schema: any, depth = 0): string {
  if (!schema) return 'any'
  if (schema.$ref) return `\`${schema.$ref.split('/').pop()}\``
  if (schema.allOf) return schema.allOf.map((s: any) => schemaToType(spec, s, depth)).join(' & ')
  if (schema.anyOf || schema.oneOf) return (schema.anyOf || schema.oneOf).map((s: any) => schemaToType(spec, s, depth)).join(' | ')
  if (schema.type === 'array') return `${schemaToType(spec, schema.items, depth)}[]`
  if (schema.type === 'object' || schema.properties) {
    if (depth > 1) return '`object`'
    const props = schema.properties || {}
    const required = new Set(schema.required || [])
    const entries = Object.entries(props).slice(0, 20)
    if (entries.length === 0) return '`object`'
    const lines = entries.map(([key, val]: [string, any]) => `  ${key}${required.has(key) ? '' : '?'}: ${schemaToType(spec, val, depth + 1)}`)
    if (Object.keys(props).length > 20) lines.push('  ...')
    return `{\n${lines.join('\n')}\n}`
  }
  if (schema.enum) return schema.enum.map((e: any) => `\`"${e}"\``).join(' | ')
  return `\`${schema.type || 'any'}\``
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

// ── Schema table renderer ───────────────────────────────────────

function renderSchemaTable(spec: OpenAPISpec, schema: any): string[] {
  const lines: string[] = []
  const resolved = schema.$ref ? resolveRef(spec, schema.$ref) : schema

  const merged = resolved?.allOf
    ? resolved.allOf.reduce((acc: any, s: any) => {
        const r = s.$ref ? resolveRef(spec, s.$ref) : s
        return {
          ...acc,
          properties: { ...acc.properties, ...r?.properties },
          required: [...(acc.required || []), ...(r?.required || [])],
        }
      }, { properties: {}, required: [] })
    : resolved

  if (!merged?.properties || Object.keys(merged.properties).length === 0) {
    lines.push('```')
    lines.push(schemaToType(spec, schema))
    lines.push('```')
    return lines
  }

  const required = new Set(merged.required || [])
  lines.push('| Field | Type | Required | Description |')
  lines.push('|---|---|---|---|')

  for (const [name, prop] of Object.entries(merged.properties) as [string, any][]) {
    const type = fieldType(spec, prop)
    const req = required.has(name) ? 'Yes' : 'No'
    const desc = escapeMdx((prop as any).description || '—')
    lines.push(`| \`${escapeMdx(name)}\` | ${type} | ${req} | ${desc} |`)
  }

  return lines
}

function fieldType(spec: OpenAPISpec, schema: any): string {
  if (!schema) return '`any`'
  if (schema.$ref) {
    const name = schema.$ref.split('/').pop()!
    return `[\`${name}\`](#${slugify(name)})`
  }
  if (schema.allOf) return schema.allOf.map((s: any) => fieldType(spec, s)).join(' & ')
  if (schema.anyOf || schema.oneOf) {
    const items = (schema.anyOf || schema.oneOf) as any[]
    const nonNull = items.filter((s: any) => s.type !== 'null')
    if (nonNull.length === 0) return '`null`'
    if (nonNull.length === 1) return fieldType(spec, nonNull[0])
    return nonNull.map((s: any) => fieldType(spec, s)).join(' \\| ')
  }
  if (schema.type === 'array') return `${fieldType(spec, schema.items)}[]`
  if (schema.enum) return schema.enum.map((e: any) => `\`"${e}"\``).join(' \\| ')
  return `\`${schema.type || 'any'}\``
}

// ── Referenced type collector ────────────────────────────────────

function collectPropertyRefs(spec: OpenAPISpec, schema: any, refs: Set<string>, visited: Set<string>): void {
  if (!schema) return
  if (schema.$ref) {
    const name = schema.$ref.split('/').pop()!
    if (!visited.has(name)) {
      visited.add(name)
      refs.add(name)
      const resolved = resolveRef(spec, schema.$ref)
      if (resolved) collectSchemaPropertyRefs(spec, resolved, refs, visited)
    }
    return
  }
  if (schema.allOf) for (const s of schema.allOf) collectPropertyRefs(spec, s, refs, visited)
  if (schema.anyOf) for (const s of schema.anyOf) collectPropertyRefs(spec, s, refs, visited)
  if (schema.oneOf) for (const s of schema.oneOf) collectPropertyRefs(spec, s, refs, visited)
  if (schema.type === 'array' && schema.items) collectPropertyRefs(spec, schema.items, refs, visited)
}

function collectSchemaPropertyRefs(spec: OpenAPISpec, schema: any, refs: Set<string>, visited: Set<string>): void {
  const merged = schema?.allOf
    ? schema.allOf.reduce((acc: any, s: any) => {
        const r = s.$ref ? resolveRef(spec, s.$ref) : s
        return { properties: { ...acc.properties, ...r?.properties } }
      }, { properties: {} })
    : schema
  if (!merged?.properties) return
  for (const prop of Object.values(merged.properties) as any[]) {
    collectPropertyRefs(spec, prop, refs, visited)
  }
}

type Endpoint = [string, string, Operation]

interface PageEntry { slug: string; display: string }

function collectPageRefs(spec: OpenAPISpec, endpoints: Endpoint[]): Set<string> {
  const refs = new Set<string>()
  const visited = new Set<string>()
  for (const [, , op] of endpoints) {
    const reqSchema = getRequestBodySchema(spec, op)
    if (reqSchema) collectSchemaPropertyRefs(spec, reqSchema, refs, visited)
    const respSchema = getResponseSchema(spec, op)
    if (respSchema) collectSchemaPropertyRefs(spec, respSchema, refs, visited)
  }
  return refs
}

function renderReferencedTypes(spec: OpenAPISpec, refs: Set<string>): string[] {
  if (refs.size === 0) return []
  const lines: string[] = []
  lines.push('## Types')
  lines.push('')
  for (const name of [...refs].sort()) {
    const schema = spec.components?.schemas?.[name]
    if (!schema) continue
    lines.push(`### \`${escapeMdx(name)}\``)
    lines.push('')
    if (schema.description) { lines.push(escapeMdx(schema.description)); lines.push('') }
    lines.push(...renderSchemaTable(spec, schema))
    lines.push('')
    lines.push('---')
    lines.push('')
  }
  return lines
}

// ── Endpoint renderer ───────────────────────────────────────────

function renderEndpoint(spec: OpenAPISpec, path: string, method: string, op: Operation): string[] {
  const lines: string[] = []
  const methodUpper = method.toUpperCase()
  const summary = op.summary || op.operationId || ''

  lines.push(`### \`${methodUpper}\` \`${escapeMdx(path)}\``)
  lines.push('')
  if (summary) { lines.push(escapeMdx(summary)); lines.push('') }
  if (op.description && op.description !== summary) { lines.push(escapeMdx(op.description)); lines.push('') }

  const params = op.parameters || []
  if (params.length > 0) {
    lines.push('**Parameters:**')
    lines.push('')
    lines.push('| Name | In | Required | Description |')
    lines.push('|---|---|---|---|')
    for (const p of params) {
      lines.push(`| \`${escapeMdx(p.name)}\` | ${p.in} | ${p.required ? 'Yes' : 'No'} | ${escapeMdx(p.description || '—')} |`)
    }
    lines.push('')
  }

  const reqSchema = getRequestBodySchema(spec, op)
  if (reqSchema) {
    const refName = op.requestBody?.content?.['application/json']?.schema?.$ref?.split('/').pop()
    lines.push(refName ? `**Request body** (\`${refName}\`):` : '**Request body:**')
    lines.push('')
    lines.push(...renderSchemaTable(spec, reqSchema))
    lines.push('')
  }

  const respSchema = getResponseSchema(spec, op)
  if (respSchema) {
    const successResp = op.responses?.['200'] || op.responses?.['201'] || op.responses?.['204'] || Object.values(op.responses || {})[0]
    const refName = successResp?.content?.['application/json']?.schema?.$ref?.split('/').pop()
    lines.push(refName ? `**Response** (\`${refName}\`):` : '**Response:**')
    lines.push('')
    lines.push(...renderSchemaTable(spec, respSchema))
    lines.push('')
  }

  lines.push('---')
  lines.push('')
  return lines
}

// ── Stream event renderer ───────────────────────────────────────

function renderStreamEvent(spec: OpenAPISpec, path: string, op: Operation): string[] {
  const lines: string[] = []
  const modelName = path.split('/').pop() || ''
  const summary = op.summary || ''

  lines.push(`### \`${escapeMdx(modelName)}\``)
  lines.push('')
  if (summary && summary !== `Schema: ${modelName}`) { lines.push(escapeMdx(summary)); lines.push('') }

  const reqSchema = getRequestBodySchema(spec, op)
  if (reqSchema) { lines.push(...renderSchemaTable(spec, reqSchema)); lines.push('') }

  lines.push('---')
  lines.push('')
  return lines
}

// ── Security schemes renderer ───────────────────────────────────

function renderSecuritySchemes(spec: OpenAPISpec): string[] {
  const secSchemes = spec.components?.securitySchemes as Record<string, any> | undefined
  if (!secSchemes || Object.keys(secSchemes).length === 0) return []
  const lines: string[] = []
  lines.push('## Authentication')
  lines.push('')
  lines.push('All requests require authentication via one or both of:')
  lines.push('')
  lines.push('| Scheme | Type | Header | Description |')
  lines.push('|---|---|---|---|')
  for (const [name, scheme] of Object.entries(secSchemes)) {
    const type = scheme.type === 'apiKey' ? 'API Key' : scheme.type === 'http' ? `HTTP ${scheme.scheme}` : scheme.type
    const header = scheme.name || (scheme.scheme === 'bearer' ? 'Authorization' : '—')
    const desc = escapeMdx(scheme.description || '—')
    lines.push(`| **${escapeMdx(name)}** | ${type} | \`${header}\` | ${desc} |`)
  }
  lines.push('')
  return lines
}

// ── CLI types ───────────────────────────────────────────────────

interface CliArg { name: string; long?: string; short?: string; env?: string; help?: string; required: boolean; global?: boolean }
interface CliCommand { name: string; about?: string; aliases?: string[]; args?: CliArg[]; subcommands?: CliCommand[] }
interface CliResource { slug: string; about: string }
interface CliMediaAction { name: string; about: string; args?: CliArg[] }
interface CliSpec extends CliCommand {
  resources?: CliResource[]
  media_types?: string[]
  media_actions?: CliMediaAction[]
}

// ── CLI content renderers (no heading — used inside tabs or standalone) ──

function renderCliCommand(rootName: string, cmd: CliCommand, depth: number, prefix: string): string[] {
  const lines: string[] = []
  const heading = '#'.repeat(Math.min(depth + 3, 5))
  const fullName = prefix ? `${prefix} ${cmd.name}` : cmd.name
  const aliases = cmd.aliases?.length ? ` *(${cmd.aliases.map(a => `\`${a}\``).join(', ')})*` : ''

  lines.push(`${heading} ${fullName}${aliases}`)
  lines.push('')
  if (cmd.about) { lines.push(escapeMdx(cmd.about)); lines.push('') }
  lines.push('```bash')
  lines.push(`${rootName} ${fullName}`)
  lines.push('```')
  lines.push('')

  const args = cmd.args || []
  if (args.length > 0) {
    lines.push('| Flag | Env | Required | Description |')
    lines.push('|---|---|---|---|')
    for (const a of args) {
      lines.push(`| \`${a.long || a.name}\` | ${a.env ? `\`${a.env}\`` : '—'} | ${a.required ? 'Yes' : 'No'} | ${escapeMdx(a.help || '—')} |`)
    }
    lines.push('')
  }

  for (const sub of cmd.subcommands || []) {
    lines.push(...renderCliCommand(rootName, sub, depth + 1, fullName))
  }

  return lines
}

/** Render CLI commands content (no section heading) */
function renderCliCommandsContent(rootName: string, commands: CliCommand[]): string[] {
  const lines: string[] = []
  for (const cmd of commands) {
    const aliases = cmd.aliases?.length ? ` *(${cmd.aliases.map(a => `\`${a}\``).join(', ')})*` : ''
    lines.push(`### \`${rootName} ${cmd.name}\`${aliases}`)
    lines.push('')
    if (cmd.about) { lines.push(escapeMdx(cmd.about)); lines.push('') }

    lines.push('```bash')
    lines.push(`${rootName} ${cmd.name}`)
    lines.push('```')
    lines.push('')

    const args = (cmd.args || []).filter(a => !a.global)
    if (args.length > 0) {
      lines.push('| Flag | Required | Description |')
      lines.push('|---|---|---|')
      for (const a of args) {
        lines.push(`| \`${a.long || a.name}\` | ${a.required ? 'Yes' : 'No'} | ${escapeMdx(a.help || '—')} |`)
      }
      lines.push('')
    }
  }
  return lines
}

/** Render CLI resource content with headings for TOC */
function renderCliResourceContent(resourceSlug: string, mediaTypes: string[]): string[] {
  const lines: string[] = []
  const singularId = `${resourceSlug.replace(/s$/, '')}_id`

  lines.push(`### \`glow ${resourceSlug}\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} <action> [--body JSON]`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} search\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} search`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} get\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} get --body '\\{"${singularId}": "..."}'`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} create\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} create --body '\\{...}'`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} update\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} update --body '\\{"${singularId}": "...", ...}'`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} delete\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} delete --body '\\{"${singularId}": "..."}'`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} list\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} list`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} export\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} export`)
  lines.push('```')
  lines.push('')

  lines.push(`### \`glow ${resourceSlug} draft\``)
  lines.push('')
  lines.push('```bash')
  lines.push(`glow ${resourceSlug} draft --body '\\{...}'`)
  lines.push('```')
  lines.push('')

  if (mediaTypes.length > 0) {
    lines.push(`### \`glow ${resourceSlug} media\``)
    lines.push('')
    lines.push('```bash')
    lines.push(`glow ${resourceSlug} <${mediaTypes.join('|')}> <upload|download|create|chunk|status|finalize|discover|preview> [flags]`)
    lines.push('```')
    lines.push('')
  }

  return lines
}

/** Render stream events content (no section heading) */
function renderStreamContent(spec: OpenAPISpec, endpoints: Endpoint[]): string[] {
  const lines: string[] = []
  lines.push(`> ${endpoints.length} event type${endpoints.length !== 1 ? 's' : ''}`)
  lines.push('')
  for (const [path, , op] of endpoints) {
    lines.push(...renderStreamEvent(spec, path, op))
  }
  return lines
}

// ── Merged page writer (with Tabs) ──────────────────────────────

interface MergedPageOpts {
  title: string
  description?: string
  apiEndpoints?: Endpoint[]
  apiSpec?: OpenAPISpec
  cliCommands?: CliCommand[]
  cliRootName?: string
  cliTabLabel?: string
  cliResourceSlug?: string
  cliMediaTypes?: string[]
  streamEndpoints?: Endpoint[]
}

// Tab navigation removed — sidebar handles API/CLI/Guides navigation natively

function writeMergedPage(dir: string, opts: MergedPageOpts, logPrefix: string): void {
  const hasApi = !!(opts.apiEndpoints && opts.apiEndpoints.length > 0 && opts.apiSpec)
  const hasCli = !!(opts.cliCommands?.length || opts.cliResourceSlug)
  const hasWs = !!(opts.streamEndpoints && opts.streamEndpoints.length > 0 && opts.apiSpec)

  const routeBase = dir.replace(join(ROOT, 'app'), '').replace(/\\/g, '/')
  const isGlow = routeBase.startsWith('/glow/')
  const isPlatform = !isGlow

  // Collect referenced types
  const apiTypeLines: string[] = []
  if (hasApi && opts.apiSpec) {
    const allRefs = new Set<string>()
    const visited = new Set<string>()
    for (const [, , op] of opts.apiEndpoints!) {
      const reqSchema = getRequestBodySchema(opts.apiSpec, op)
      if (reqSchema) collectSchemaPropertyRefs(opts.apiSpec, reqSchema, allRefs, visited)
      const respSchema = getResponseSchema(opts.apiSpec, op)
      if (respSchema) collectSchemaPropertyRefs(opts.apiSpec, respSchema, allRefs, visited)
    }
    if (opts.streamEndpoints?.length) {
      for (const [, , op] of opts.streamEndpoints) {
        const reqSchema = getRequestBodySchema(opts.apiSpec, op)
        if (reqSchema) collectSchemaPropertyRefs(opts.apiSpec, reqSchema, allRefs, visited)
        const respSchema = getResponseSchema(opts.apiSpec, op)
        if (respSchema) collectSchemaPropertyRefs(opts.apiSpec, respSchema, allRefs, visited)
      }
    }
    if (allRefs.size > 0) {
      apiTypeLines.push(...renderReferencedTypes(opts.apiSpec, allRefs))
    }
  }

  // Always split into subdirectories: api/, cli/, guide/
  mkdirSync(dir, { recursive: true })

  // ── Write _meta.ts ──
  if (hasCli) {
    const metaEntries = ["  guide: 'Guide',", "  api: 'API',", "  cli: 'CLI',"]
    writeFileSync(join(dir, '_meta.ts'), `export default {\n${metaEntries.join('\n')}\n}\n`)
  } else {
    // API-only pages (no CLI) — just guide + api
    const metaEntries = ["  guide: 'Guide',", "  api: 'API',"]
    writeFileSync(join(dir, '_meta.ts'), `export default {\n${metaEntries.join('\n')}\n}\n`)
  }

  // ── Write API page ──
  if (hasApi) {
    const apiDir = join(dir, 'api')
    mkdirSync(apiDir, { recursive: true })

    const apiLines: string[] = []
    apiLines.push(`# ${escapeMdx(opts.title)}`)
    apiLines.push('')

    if (opts.description) {
      apiLines.push(escapeMdx(opts.description))
      apiLines.push('')
    }

    apiLines.push('## Endpoints')
    apiLines.push('')
    for (const [path, method, op] of opts.apiEndpoints!) {
      apiLines.push(...renderEndpoint(opts.apiSpec!, path, method, op))
    }

    if (hasWs) {
      apiLines.push('## Stream Events')
      apiLines.push('')
      apiLines.push(...renderStreamContent(opts.apiSpec!, opts.streamEndpoints!))
    }

    apiLines.push(...apiTypeLines)

    writeFileSync(join(apiDir, 'page.mdx'), apiLines.join('\n'))
    const apiRoute = apiDir.replace(join(ROOT, 'app'), '').replace(/\\/g, '/') || '/'
    writeMdCopy(apiRoute, `${opts.title} API`, apiLines.join('\n'))
  }

  // ── Write CLI page ──
  if (hasCli) {
    const cliDir = join(dir, 'cli')
    mkdirSync(cliDir, { recursive: true })

    const cliLines: string[] = []
    cliLines.push(`# ${escapeMdx(opts.title)}`)
    cliLines.push('')

    if (isPlatform) {
      // Platform CLI pages have product tabs (only Glow for now)
      cliLines.push("import { Tabs } from 'nextra/components'")
      cliLines.push('')
      cliLines.push("<Tabs items={['Glow']}>")
      cliLines.push('<Tabs.Tab>')
      cliLines.push('')
      cliLines.push('## Commands')
      cliLines.push('')
      if (opts.cliCommands?.length && opts.cliRootName) {
        cliLines.push(...renderCliCommandsContent(opts.cliRootName, opts.cliCommands))
      }
      cliLines.push('</Tabs.Tab>')
      cliLines.push('</Tabs>')
    } else {
      // Glow CLI pages — direct content, no product tabs
      cliLines.push('## Commands')
      cliLines.push('')
      if (opts.cliCommands?.length && opts.cliRootName) {
        cliLines.push(...renderCliCommandsContent(opts.cliRootName, opts.cliCommands))
      } else if (opts.cliResourceSlug) {
        cliLines.push(...renderCliResourceContent(opts.cliResourceSlug, opts.cliMediaTypes || []))
      }
    }

    writeFileSync(join(cliDir, 'page.mdx'), cliLines.join('\n'))
    const cliRoute = cliDir.replace(join(ROOT, 'app'), '').replace(/\\/g, '/') || '/'
    writeMdCopy(cliRoute, `${opts.title} CLI`, cliLines.join('\n'))
  }

  // ── Write guide placeholder (if doesn't exist) ──
  const guideDir = join(dir, 'guide')
  const guidePath = join(guideDir, 'page.mdx')
  if (!existsSync(guidePath)) {
    mkdirSync(guideDir, { recursive: true })
    const guideRoute = routeBase.replace(/^\//, '')
    writeFileSync(guidePath, [
      `# ${opts.title} Guide`,
      '',
      `> This guide is a work in progress.`,
      '',
      `## Overview`,
      '',
      `Learn how to work with ${opts.title.toLowerCase()} in the LearnLoop platform.`,
      '',
      `## Related`,
      '',
      `- [${opts.title} API](/${guideRoute}/api)`,
      hasCli ? `- [${opts.title} CLI](/${guideRoute}/cli)` : '',
      '',
    ].filter(Boolean).join('\n'))
  }

  // Log
  const parts = []
  if (opts.apiEndpoints?.length) parts.push(`${opts.apiEndpoints.length} endpoints`)
  if (opts.cliCommands?.length) parts.push(`${opts.cliCommands.length} commands`)
  else if (opts.cliResourceSlug) parts.push('resource')
  if (opts.streamEndpoints?.length) parts.push(`${opts.streamEndpoints.length} events`)
  console.log(`  ${logPrefix}: ${parts.join(', ')}`)
}

// ── CLI-only page writer ────────────────────────────────────────

function writeCliOnlyPage(dir: string, rootName: string, commands: CliCommand[], logPrefix: string): void {
  mkdirSync(dir, { recursive: true })

  const title = commands.length === 1 ? commands[0].name : commands.map(c => c.name).join(' / ')
  const lines: string[] = [
    `# ${title}`,
    '',
  ]

  for (const cmd of commands) {
    const aliases = cmd.aliases?.length ? ` *(${cmd.aliases.map(a => `\`${a}\``).join(', ')})*` : ''
    if (commands.length > 1) {
      lines.push(`## \`${rootName} ${cmd.name}\`${aliases}`)
      lines.push('')
    }

    if (cmd.about) { lines.push(escapeMdx(cmd.about)); lines.push('') }

    lines.push('```bash')
    lines.push(`${rootName} ${cmd.name}`)
    lines.push('```')
    lines.push('')

    const args = (cmd.args || []).filter(a => !a.global)
    if (args.length > 0) {
      lines.push('| Flag | Env | Required | Description |')
      lines.push('|---|---|---|---|')
      for (const a of args) {
        lines.push(`| \`${a.long || a.name}\` | ${a.env ? `\`${a.env}\`` : '—'} | ${a.required ? 'Yes' : 'No'} | ${escapeMdx(a.help || '—')} |`)
      }
      lines.push('')
    }

    for (const sub of cmd.subcommands || []) {
      lines.push(...renderCliCommand(rootName, sub, 0, cmd.name))
    }
  }

  writeFileSync(join(dir, 'page.mdx'), lines.join('\n'))

  const cliTitle = commands.length === 1 ? commands[0].name : commands.map(c => c.name).join(' / ')
  const route = dir.replace(join(ROOT, 'app'), '').replace(/\\/g, '/') || '/'
  writeMdCopy(route, cliTitle, lines.join('\n'))

  const subCount = commands.reduce((s, c) => s + (c.subcommands?.length || 0), 0)
  console.log(`  ${logPrefix}: ${subCount > 0 ? subCount + ' subcommands' : 'CLI only'}`)
}

// ── Admin API: each tag → top-level page ─────────────────────────

const ADMIN_SKIP_TAGS = new Set(['webhooks', 'other'])
const ADMIN_DISPLAY: Record<string, string> = {
  oidc: 'OIDC', auth: 'Auth', billing: 'Billing',
  deploy: 'Deploy', licenses: 'Licenses',
  organizations: 'Organizations', usage: 'Usage',
}

/** Map API tag slugs to admin CLI subcommand names */
const ADMIN_CLI_MAP: Record<string, string> = {
  licenses: 'licenses',
  organizations: 'orgs',
  usage: 'usage',
  deploy: 'deploy',
  billing: 'billing',
  auth: 'login',
}

function writeAdminPages(spec: OpenAPISpec, cliSpec: CliSpec | null): string[] {
  const tagged = new Map<string, Endpoint[]>()

  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const method of HTTP_METHODS) {
      const op = methods[method] as Operation | undefined
      if (!op) continue
      const tag = op.tags?.[0]
      if (!tag || ADMIN_SKIP_TAGS.has(tag)) continue
      if (!tagged.has(tag)) tagged.set(tag, [])
      tagged.get(tag)!.push([path, method, op])
    }
  }

  // Build admin CLI subcommand lookup
  const adminCmd = (cliSpec?.subcommands || []).find(c => c.name === 'admin')
  const adminSubMap = new Map<string, CliCommand>()
  for (const sub of adminCmd?.subcommands || []) {
    adminSubMap.set(sub.name, sub)
  }
  // Also include top-level login/logout for auth mapping
  const cliCommandMap = new Map<string, CliCommand>()
  for (const cmd of cliSpec?.subcommands || []) {
    cliCommandMap.set(cmd.name, cmd)
  }
  const rootName = cliSpec?.name || 'glow'

  const slugs: string[] = []

  for (const [tag, endpoints] of [...tagged].sort((a, b) => a[0].localeCompare(b[0]))) {
    const slug = slugify(tag)
    const display = ADMIN_DISPLAY[slug] || titleCase(tag)

    // Find matching CLI commands
    const cliName = ADMIN_CLI_MAP[slug]
    let cliCmds: CliCommand[] = []
    let cliPrefix = `${rootName} admin`
    if (cliName) {
      // Check admin subcommands first, then top-level commands
      const adminSub = adminSubMap.get(cliName)
      if (adminSub) {
        cliCmds = [adminSub]
      } else {
        const topCmd = cliCommandMap.get(cliName)
        if (topCmd) {
          cliCmds = [topCmd]
          cliPrefix = rootName
        }
      }
    }

    writeMergedPage(join(ROOT, 'app', slug), {
      title: display,
      apiEndpoints: endpoints,
      apiSpec: spec,
      cliCommands: cliCmds.length > 0 ? cliCmds : undefined,
      cliRootName: cliCmds.length > 0 ? cliPrefix : undefined,
      cliTabLabel: cliCmds.length > 0 ? titleCase(rootName) : undefined,
    }, slug)
    slugs.push(slug)
  }

  console.log(`  platform: ${slugs.length} top-level pages`)
  return slugs
}

// ── Artifact sidebar groups (mirrors glow-client sidebar) ────────

interface ArtifactGroup {
  separator: string
  display: string
  slugs: string[]
}

const ARTIFACT_GROUPS: ArtifactGroup[] = [
  { separator: '---experience', display: 'Experience', slugs: ['attempt', 'chat', 'home', 'practice'] },
  { separator: '---testing', display: 'Testing', slugs: ['benchmark', 'test', 'invocation'] },
  { separator: '---training', display: 'Training', slugs: ['cohorts', 'simulations', 'scenarios', 'personas'] },
  { separator: '---analytics', display: 'Analytics', slugs: ['dashboard', 'reports', 'activity', 'pricing', 'leaderboard'] },
  { separator: '---intelligence', display: 'Intelligence', slugs: ['agents', 'models', 'providers', 'tools'] },
  { separator: '---management', display: 'Management', slugs: ['profiles', 'documents', 'parameters', 'fields'] },
  { separator: '---system', display: 'System', slugs: ['departments', 'rubrics', 'auths', 'evals'] },
  { separator: '---other', display: 'Other', slugs: ['health', 'settings', 'record', 'group', 'session'] },
]

/** Look up which group a slug belongs to (returns null for ungrouped) */
function findArtifactGroup(slug: string): ArtifactGroup | null {
  return ARTIFACT_GROUPS.find(g => g.slugs.includes(slug)) || null
}

// ── Glow: merged API + CLI + WebSocket pages ─────────────────────

const AUTH_PATHS = new Set([
  '/token', '/authorize', '/jwks', '/userinfo',
  '/.well-known/oauth-authorization-server',
  '/.well-known/openid-configuration',
  '/login', '/logout', '/callback', '/me',
  '/auth/client-config',
])

const STANDALONE_PATHS: Record<string, { slug: string; display: string }> = {
  '/context': { slug: 'context', display: 'Context' },
  '/v5/context': { slug: 'context', display: 'Context' },
  '/emulate': { slug: 'emulation', display: 'Emulation' },
  '/v5/emulate': { slug: 'emulation', display: 'Emulation' },
  '/unemulate': { slug: 'emulation', display: 'Emulation' },
  '/v5/unemulate': { slug: 'emulation', display: 'Emulation' },
  '/generate': { slug: 'generate', display: 'Generate' },
  '/v5/generate': { slug: 'generate', display: 'Generate' },
  '/problem': { slug: 'problem', display: 'Problem' },
  '/v5/problem': { slug: 'problem', display: 'Problem' },
  '/docs': { slug: 'docs', display: 'Docs' },
  '/v5/docs': { slug: 'docs', display: 'Docs' },
  '/connect': { slug: 'connect', display: 'Connect' },
  '/disconnect': { slug: 'connect', display: 'Connect' },
  '/': { slug: 'info', display: 'Info' },
}

/** Merge API tags into another tag's page (e.g. audio → attempt) */
const TAG_MERGE: Record<string, string> = {
  audio: 'attempt',
}

/** Map CLI top-level commands to Glow page slugs */
const CLI_TO_PAGE: Record<string, string> = {
  login: 'authentication',
  logout: 'authentication',
  health: 'info',
  context: 'context',
  emulate: 'emulation',
  unemulate: 'emulation',
  generate: 'generate',
}

/** CLI-only commands (grouped for sidebar) */
const CLI_ONLY_GROUPS: { slug: string; display: string; commands: string[] }[] = []

/** CLI commands rendered on the Glow Start/landing page */
const LANDING_CLI_COMMANDS = ['instances', 'use']

function writeGlowPages(apiSpec: OpenAPISpec, cliSpec: CliSpec | null, baseDir: string): PageEntry[] {
  // ── Categorize API endpoints ──────────────────────────────
  const authEndpoints: Endpoint[] = []
  const standaloneGroups = new Map<string, { display: string; endpoints: Endpoint[] }>()
  const streamSSE: Endpoint[] = []
  const streamSchemas = new Map<string, Endpoint[]>()
  const artifactREST = new Map<string, Endpoint[]>()

  for (const [path, methods] of Object.entries(apiSpec.paths)) {
    for (const method of HTTP_METHODS) {
      const op = methods[method] as Operation | undefined
      if (!op) continue
      const ep: Endpoint = [path, method, op]

      if (AUTH_PATHS.has(path) || path === '/health') {
        authEndpoints.push(ep)
      } else if (path === '/v5/stream' || path === '/v5/stream/') {
        streamSSE.push(ep)
      } else if (path.startsWith('/v5/stream/')) {
        const tag = (op.tags || []).at(-1) || 'other'
        if (!streamSchemas.has(tag)) streamSchemas.set(tag, [])
        streamSchemas.get(tag)!.push(ep)
      } else if (STANDALONE_PATHS[path]) {
        const { slug, display } = STANDALONE_PATHS[path]
        if (!standaloneGroups.has(slug)) standaloneGroups.set(slug, { display, endpoints: [] })
        standaloneGroups.get(slug)!.endpoints.push(ep)
      } else {
        const tag = (op.tags || []).at(-1) || 'other'
        if (tag === 'v5') {
          const seg = path.split('/')[2] || 'other'
          if (!standaloneGroups.has(seg)) standaloneGroups.set(seg, { display: titleCase(seg), endpoints: [] })
          standaloneGroups.get(seg)!.endpoints.push(ep)
        } else if (tag === 'other' || tag === 'stream') {
          // 'other' and 'stream' endpoints go to standalone (top-level)
          if (!standaloneGroups.has(tag)) standaloneGroups.set(tag, { display: titleCase(tag), endpoints: [] })
          standaloneGroups.get(tag)!.endpoints.push(ep)
        } else {
          const mergedTag = TAG_MERGE[tag] || tag
          if (!artifactREST.has(mergedTag)) artifactREST.set(mergedTag, [])
          artifactREST.get(mergedTag)!.push(ep)
        }
      }
    }
  }

  // ── Build CLI lookup maps ─────────────────────────────────
  const cliCommandMap = new Map<string, CliCommand>()
  for (const cmd of cliSpec?.subcommands || []) {
    cliCommandMap.set(cmd.name, cmd)
  }
  const cliResourceSet = new Set((cliSpec?.resources || []).map(r => r.slug))
  const rootName = cliSpec?.name || 'glow'
  const mediaTypes = cliSpec?.media_types || []

  // ── Page tracking ─────────────────────────────────────────
  const topLevel: PageEntry[] = []
  const artifactPages: PageEntry[] = []
  const configPages: PageEntry[] = []

  // ── Authentication page (API auth + CLI login/logout/health) ──
  if (authEndpoints.length > 0) {
    const cliCmds = ['login', 'logout', 'health'].map(n => cliCommandMap.get(n)).filter(Boolean) as CliCommand[]
    writeMergedPage(join(baseDir, 'authentication'), {
      title: 'Authentication',
      apiEndpoints: authEndpoints,
      apiSpec,
      cliCommands: cliCmds.length > 0 ? cliCmds : undefined,
      cliRootName: rootName,
    }, 'glow/authentication')
    topLevel.push({ slug: 'authentication', display: 'Authentication' })
  }

  // ── Standalone pages (context, emulation, generate, etc.) ──
  for (const [slug, { display, endpoints }] of [...standaloneGroups].sort((a, b) => a[0].localeCompare(b[0]))) {
    const matchingCmdNames = Object.entries(CLI_TO_PAGE).filter(([, page]) => page === slug).map(([cmd]) => cmd)
    const cliCmds = matchingCmdNames.map(n => cliCommandMap.get(n)).filter(Boolean) as CliCommand[]

    writeMergedPage(join(baseDir, slug), {
      title: display,
      apiEndpoints: endpoints,
      apiSpec,
      cliCommands: cliCmds.length > 0 ? cliCmds : undefined,
      cliRootName: rootName,
    }, `glow/${slug}`)
    topLevel.push({ slug, display })
  }

  // ── Artifact pages (merged API + CLI resource + WebSocket stream) ──
  for (const [tag, endpoints] of [...artifactREST].sort((a, b) => a[0].localeCompare(b[0]))) {
    const slug = slugify(tag)
    const display = titleCase(tag)
    const hasCliResource = cliResourceSet.has(slug)

    // Match stream events for this artifact by tag
    const streamEps = streamSchemas.get(tag) || []

    writeMergedPage(join(baseDir, slug), {
      title: display,
      apiEndpoints: endpoints,
      apiSpec,
      cliRootName: hasCliResource ? rootName : undefined,
      cliResourceSlug: hasCliResource ? slug : undefined,
      cliMediaTypes: hasCliResource ? mediaTypes : undefined,
      streamEndpoints: streamEps.length > 0 ? streamEps : undefined,
    }, `glow/${slug}`)
    artifactPages.push({ slug, display })
  }

  // ── Stream events without a matching artifact page ──────
  // Orphan stream pages go to top-level (like authentication, stream)
  const artifactTags = new Set(artifactREST.keys())
  for (const [tag, endpoints] of [...streamSchemas].sort((a, b) => a[0].localeCompare(b[0]))) {
    if (artifactTags.has(tag)) continue  // already merged
    const slug = slugify(tag)
    const display = titleCase(tag)

    // Check if it matches a standalone page slug
    const matchedStandalone = [...standaloneGroups.keys()].includes(slug)
    if (matchedStandalone) continue

    writeMergedPage(join(baseDir, slug), {
      title: display,
      apiSpec,
      streamEndpoints: endpoints,
    }, `glow/${slug} (stream-only)`)
    topLevel.push({ slug, display })
  }

  // ── CLI-only pages (written to top-level Platform section) ──
  for (const group of CLI_ONLY_GROUPS) {
    const cmds = group.commands.map(n => cliCommandMap.get(n)).filter(Boolean) as CliCommand[]
    if (cmds.length > 0) {
      writeCliOnlyPage(join(ROOT, 'app', group.slug), rootName, cmds, `platform/${group.slug}`)
      configPages.push({ slug: group.slug, display: group.display })
    }
  }

  // ── Glow _meta.ts (grouped by artifact sections) ────────
  const metaLines = [
    'export default {',
    "  start: 'Start',",
    "  'how-it-works': 'How It Works',",
    "  tutorial: 'Design Your First Simulation',",
    "  patterns: 'Patterns & Best Practices',",
  ]
  if (topLevel.length > 0) {
    metaLines.push("  '---general': { type: 'separator', title: 'General' },")
    for (const p of topLevel) metaLines.push(`  '${p.slug}': '${p.display.replace(/'/g, "\\'")}',`)
  }

  // Build a set of all artifact slugs that were actually generated
  const allArtifactSlugs = new Set(artifactPages.map(p => p.slug))
  const artifactLookup = new Map(artifactPages.map(p => [p.slug, p] as const))

  // Emit grouped sections
  const emitted = new Set<string>()
  for (const group of ARTIFACT_GROUPS) {
    const groupSlugs = group.slugs.filter(s => allArtifactSlugs.has(s))
    if (groupSlugs.length === 0) continue
    metaLines.push(`  '${group.separator}': { type: 'separator', title: '${group.display}' },`)
    for (const slug of groupSlugs) {
      const p = artifactLookup.get(slug)!
      metaLines.push(`  '${p.slug}': '${p.display.replace(/'/g, "\\'")}',`)
      emitted.add(slug)
    }
  }

  // Any artifacts not in a group go under an "Other" separator
  const ungrouped = [...allArtifactSlugs].filter(s => !emitted.has(s)).sort()
  if (ungrouped.length > 0) {
    metaLines.push("  '---other': { type: 'separator', title: 'Other' },")
    for (const slug of ungrouped) {
      const p = artifactLookup.get(slug)!
      metaLines.push(`  '${p.slug}': '${p.display.replace(/'/g, "\\'")}',`)
    }
  }

  metaLines.push('}', '')
  writeFileSync(join(baseDir, '_meta.ts'), metaLines.join('\n'))

  // ── Glow landing page ────────────────────────────────────
  const glowVersion = apiSpec.info.version
  const landing = [
    '# Glow',
    '',
    `> **Glow API v${glowVersion}** — Generated from OpenAPI specification`,
    '',
    'Glow runs on each customer instance. It powers the web client and CLI for managing personas, agents, sessions, and other artifacts.',
    '',
    ...renderSecuritySchemes(apiSpec),
    '## Base URL',
    '',
    'Each Glow instance has its own URL:',
    '',
    '```',
    'https://<your-instance>/v5',
    '```',
    '',
  ]

  // SSE stream connection info on landing page
  if (streamSSE.length > 0) {
    landing.push('## Real-Time Streaming')
    landing.push('')
    landing.push('Connect to the SSE endpoint for real-time event delivery. Each artifact page documents its WebSocket events under the **WebSocket** tab.')
    landing.push('')
    for (const [path, method, op] of streamSSE) {
      landing.push(...renderEndpoint(apiSpec, path, method, op))
    }
  }

  // Stream CLI command on landing page
  const streamCmd = cliCommandMap.get('stream')
  if (streamCmd) {
    landing.push('## Stream CLI')
    landing.push('')
    landing.push(...renderCliCommandsContent(rootName, [streamCmd]))
  }

  // Instance management CLI commands on landing page
  const instanceCmds = LANDING_CLI_COMMANDS.map(n => cliCommandMap.get(n)).filter(Boolean) as CliCommand[]
  if (instanceCmds.length > 0) {
    landing.push('## Instance Management')
    landing.push('')
    landing.push(...renderCliCommandsContent(rootName, instanceCmds))
  }

  // Global CLI flags
  const globalArgs = (cliSpec?.args || []).filter(a => a.global || a.env)
  if (globalArgs.length > 0) {
    landing.push('## CLI Global Flags')
    landing.push('')
    landing.push('| Flag | Short | Env | Description |')
    landing.push('|---|---|---|---|')
    for (const a of globalArgs) {
      landing.push(`| \`${a.long || a.name}\` | ${a.short ? `\`${a.short}\`` : '—'} | ${a.env ? `\`${a.env}\`` : '—'} | ${escapeMdx(a.help || '—')} |`)
    }
    landing.push('')
  }

  mkdirSync(join(baseDir, 'start'), { recursive: true })
  writeFileSync(join(baseDir, 'start', 'page.mdx'), landing.join('\n'))
  writeMdCopy('/glow/start', 'Glow', landing.join('\n'))

  const restCount = topLevel.length + artifactPages.length
  console.log(`  glow: ${restCount} merged pages + ${configPages.length} platform CLI pages`)
  return configPages
}

// ── Main ────────────────────────────────────────────────────────

function main() {
  // Clean old output
  rmSync(MD_DIR, { recursive: true, force: true })
  mkdirSync(MD_DIR, { recursive: true })
  rmSync(join(ROOT, 'app/api'), { recursive: true, force: true })
  rmSync(join(ROOT, 'app/cli'), { recursive: true, force: true })
  rmSync(join(ROOT, 'app/glow/api'), { recursive: true, force: true })
  rmSync(join(ROOT, 'app/glow/cli'), { recursive: true, force: true })
  rmSync(join(ROOT, 'app/glow/reference'), { recursive: true, force: true })
  rmSync(join(ROOT, 'app/glow/stream'), { recursive: true, force: true })
  // Clean generated pages under glow (but keep glow/ dir itself)
  for (const slug of ['authentication', 'context', 'emulation', 'generate', 'connect', 'disconnect', 'docs', 'problem', 'instances', 'ledger', 'admin', 'other']) {
    rmSync(join(ROOT, 'app/glow', slug), { recursive: true, force: true })
  }
  // Clean only auto-generated subdirs (api/, cli/) — NEVER delete guide/ or hand-written pages
  const HAND_WRITTEN_PAGES = new Set(['start', 'how-it-works', 'tutorial', 'patterns'])
  try {
    const existingMeta = readFileSync(join(ROOT, 'app/glow/_meta.ts'), 'utf-8')
    const slugMatches = existingMeta.matchAll(/'([a-z-]+)'/g)
    for (const m of slugMatches) {
      if (m[1] !== 'index' && !HAND_WRITTEN_PAGES.has(m[1])) {
        // Only delete api/ and cli/ subdirs, preserve guide/ and _meta.ts
        rmSync(join(ROOT, 'app/glow', m[1], 'api'), { recursive: true, force: true })
        rmSync(join(ROOT, 'app/glow', m[1], 'cli'), { recursive: true, force: true })
      }
    }
  } catch {}
  for (const slug of ['auth', 'billing', 'deploy', 'licenses', 'oidc', 'organizations', 'usage', 'webhooks', 'instances', 'ledger', 'admin']) {
    // Only delete api/ and cli/ subdirs for platform pages too
    rmSync(join(ROOT, 'app', slug, 'api'), { recursive: true, force: true })
    rmSync(join(ROOT, 'app', slug, 'cli'), { recursive: true, force: true })
  }

  // Load specs from public/specs/ (fetched by fetch-specs.ts) or specs/ (legacy)
  const specsDir = existsSync(join(ROOT, 'public/specs/platform-api.json'))
    ? join(ROOT, 'public/specs')
    : join(ROOT, 'specs')
  let adminSpec: OpenAPISpec | null = null
  let glowSpec: OpenAPISpec | null = null
  let cliSpec: CliSpec | null = null
  try { adminSpec = JSON.parse(readFileSync(join(specsDir, specsDir.includes('public') ? 'platform-api.json' : 'learnloop-api.json'), 'utf-8')) } catch (e: any) { console.log(`  skip: platform-api/learnloop-api.json (${e.message})`) }
  try { glowSpec = JSON.parse(readFileSync(join(specsDir, 'glow-api.json'), 'utf-8')) } catch (e: any) { console.log(`  skip: glow-api.json (${e.message})`) }
  try { cliSpec = JSON.parse(readFileSync(join(specsDir, 'cli.json'), 'utf-8')) } catch (e: any) { console.log(`  skip: cli.json (${e.message})`) }

  // Admin API → top-level pages (with CLI tabs where available)
  let adminSlugs: string[] = []
  if (adminSpec) {
    adminSlugs = writeAdminPages(adminSpec, cliSpec)
  }

  // Glow: merged API + CLI + WebSocket
  let platformCliPages: PageEntry[] = []
  if (glowSpec) {
    platformCliPages = writeGlowPages(glowSpec, cliSpec, join(ROOT, 'app/glow'))
  }

  // app/_meta.ts
  const metaLines = [
    'export default {',
    "  index: 'Introduction',",
    "  glow: 'Glow',",
    "  '---platform': {",
    "    type: 'separator',",
    "    title: 'Platform',",
    '  },',
  ]
  for (const slug of adminSlugs) {
    const display = ADMIN_DISPLAY[slug] || titleCase(slug)
    metaLines.push(`  '${slug}': '${display}',`)
  }
  for (const p of platformCliPages) {
    metaLines.push(`  '${p.slug}': '${p.display.replace(/'/g, "\\'")}',`)
  }
  metaLines.push('}', '')
  writeFileSync(join(ROOT, 'app/_meta.ts'), metaLines.join('\n'))

  // app/page.mdx
  const platformVersion = adminSpec?.info.version
  const glowVersion = glowSpec?.info.version
  const versionLine = [
    platformVersion ? `Platform API v${platformVersion}` : null,
    glowVersion ? `Glow API v${glowVersion}` : null,
  ].filter(Boolean).join(' | ')
  writeFileSync(join(ROOT, 'app/page.mdx'), [
    '# LearnLoop',
    '',
    ...(versionLine ? [`> **API Reference** — ${versionLine}`, ''] : []),
    'Welcome to the LearnLoop platform documentation.',
    '',
    '## Overview',
    '',
    '- **[Glow](/glow)** — API, CLI, and streaming for Glow instances',
    '- **[Platform](/auth)** — Authentication, billing, licensing, and deployment',
    '',
  ].join('\n'))

  // ── Generate llms-full.txt ──────────────────────────────────
  generateLlmsTxt(glowSpec, adminSpec, cliSpec)
}

// ── LLM-friendly text generation ────────────────────────────────

function generateLlmsTxt(glowSpec: OpenAPISpec | null, adminSpec: OpenAPISpec | null, cliSpec: CliSpec | null): void {
  const lines: string[] = []
  const rootName = cliSpec?.name || 'glow'

  lines.push('# LearnLoop Documentation')
  lines.push('')
  lines.push('Complete API and CLI reference for the LearnLoop platform.')
  lines.push('This file is designed for LLM consumption.')
  lines.push('')
  lines.push('## Overview')
  lines.push('')
  lines.push('LearnLoop is a conversational AI training platform. **Glow** is the product that runs on each customer instance.')
  lines.push('')
  lines.push('Glow has **two interfaces**:')
  lines.push(`- **CLI** (\`${rootName}\` command) — install, authenticate, manage resources, run simulations from the terminal`)
  lines.push('- **REST API** — full programmatic access to all Glow features')
  lines.push('')
  lines.push('Both interfaces manage the same resources: agents, personas, scenarios, simulations, cohorts, and more.')
  lines.push('')

  // ── Getting Started ──
  if (cliSpec) {
    lines.push('# Getting Started')
    lines.push('')
    lines.push(`The Glow CLI binary is \`${rootName}\`. Install it, then authenticate:`)
    lines.push('')
    lines.push('```bash')
    lines.push(`${rootName} login`)
    lines.push(`${rootName} instances add --name prod --url https://<your-instance>`)
    lines.push(`${rootName} use prod`)
    lines.push('```')
    lines.push('')

    // Global flags
    const globalArgs = (cliSpec.args || []).filter(a => a.global || a.env)
    if (globalArgs.length > 0) {
      lines.push('## CLI Global Flags')
      lines.push('')
      lines.push('| Flag | Short | Env | Description |')
      lines.push('|---|---|---|---|')
      for (const a of globalArgs) {
        lines.push(`| \`${a.long || a.name}\` | ${a.short ? `\`${a.short}\`` : '—'} | ${a.env ? `\`${a.env}\`` : '—'} | ${escapeMdx(a.help || '—')} |`)
      }
      lines.push('')
    }

    // Standalone CLI commands (login, logout, health, etc.)
    const standaloneCommands = (cliSpec.subcommands || []).filter(c =>
      !cliSpec.resources?.some(r => r.slug === c.name) && c.name !== 'admin'
    )
    if (standaloneCommands.length > 0) {
      lines.push('## CLI Commands')
      lines.push('')
      for (const cmd of standaloneCommands) {
        lines.push(...renderCliCommand(rootName, cmd, 0, ''))
      }
    }
  }

  // ── Glow API + CLI (grouped per resource) ──
  if (glowSpec) {
    lines.push('# Glow Reference')
    lines.push('')
    lines.push('Each resource below shows both the CLI usage and the REST API endpoints.')
    lines.push('')

    // Security schemes
    lines.push(...renderSecuritySchemes(glowSpec))

    lines.push('## Base URL')
    lines.push('')
    lines.push('```')
    lines.push('https://<your-instance>/v5')
    lines.push('```')
    lines.push('')

    // All endpoints grouped by tag
    const taggedEndpoints = new Map<string, Endpoint[]>()
    for (const [path, methods] of Object.entries(glowSpec.paths)) {
      for (const method of HTTP_METHODS) {
        const op = methods[method] as Operation | undefined
        if (!op) continue
        const tag = (op.tags || []).at(-1) || 'other'
        const mergedTag = TAG_MERGE[tag] || tag
        if (!taggedEndpoints.has(mergedTag)) taggedEndpoints.set(mergedTag, [])
        taggedEndpoints.get(mergedTag)!.push([path, method, op])
      }
    }

    const cliResourceSet = new Set((cliSpec?.resources || []).map(r => r.slug))
    const mediaTypes = cliSpec?.media_types || []

    for (const [tag, endpoints] of [...taggedEndpoints].sort((a, b) => a[0].localeCompare(b[0]))) {
      lines.push(`## ${titleCase(tag)}`)
      lines.push('')

      // CLI for this resource (if it has one)
      if (cliResourceSet.has(tag)) {
        lines.push('### CLI')
        lines.push('')
        lines.push(...renderCliResourceContent(tag, mediaTypes))
      }

      // API endpoints
      lines.push('### API')
      lines.push('')
      for (const [path, method, op] of endpoints) {
        lines.push(...renderEndpoint(glowSpec, path, method, op))
      }

      // Referenced types for this tag
      const refs = collectPageRefs(glowSpec, endpoints)
      if (refs.size > 0) {
        lines.push(...renderReferencedTypes(glowSpec, refs))
      }
    }
  }

  // ── Platform API + CLI ──
  if (adminSpec) {
    lines.push('# Platform Reference')
    lines.push('')
    lines.push('Platform API manages authentication, billing, deployments, and organizations.')
    lines.push('')

    const adminCmd = (cliSpec?.subcommands || []).find(c => c.name === 'admin')
    const adminSubMap = new Map((adminCmd?.subcommands || []).map(c => [c.name, c]))
    const cliCommandMap = new Map((cliSpec?.subcommands || []).map(c => [c.name, c]))

    const tagged = new Map<string, Endpoint[]>()
    for (const [path, methods] of Object.entries(adminSpec.paths)) {
      for (const method of HTTP_METHODS) {
        const op = methods[method] as Operation | undefined
        if (!op) continue
        const tag = op.tags?.[0]
        if (!tag || ADMIN_SKIP_TAGS.has(tag)) continue
        if (!tagged.has(tag)) tagged.set(tag, [])
        tagged.get(tag)!.push([path, method, op])
      }
    }

    for (const [tag, endpoints] of [...tagged].sort((a, b) => a[0].localeCompare(b[0]))) {
      const slug = slugify(tag)
      const display = ADMIN_DISPLAY[slug] || titleCase(tag)
      lines.push(`## ${display}`)
      lines.push('')

      // CLI for this platform resource
      const cliName = ADMIN_CLI_MAP[slug]
      if (cliName) {
        const cmd = adminSubMap.get(cliName) || cliCommandMap.get(cliName)
        if (cmd) {
          const cliPrefix = adminSubMap.has(cliName) ? `${rootName} admin` : rootName
          lines.push('### CLI')
          lines.push('')
          lines.push(...renderCliCommandsContent(cliPrefix, [cmd]))
        }
      }

      lines.push('### API')
      lines.push('')
      for (const [path, method, op] of endpoints) {
        lines.push(...renderEndpoint(adminSpec, path, method, op))
      }

      const refs = collectPageRefs(adminSpec, endpoints)
      if (refs.size > 0) {
        lines.push(...renderReferencedTypes(adminSpec, refs))
      }
    }
  }

  // Write to public/
  mkdirSync(join(ROOT, 'public'), { recursive: true })
  writeFileSync(join(ROOT, 'public/llms-full.txt'), lines.join('\n'))
  console.log(`  llms-full.txt: ${(lines.join('\n').length / 1024).toFixed(0)}KB`)

  // Copy hand-written pages to public/md/ for LLM consumption
  const handWrittenPages = [
    { file: 'app/glow/start/page.mdx', route: '/glow/start', title: 'Getting Started' },
    { file: 'app/glow/how-it-works/page.mdx', route: '/glow/how-it-works', title: 'How AI Simulation Training Works' },
    { file: 'app/glow/tutorial/page.mdx', route: '/glow/tutorial', title: 'Design Your First Simulation' },
    { file: 'app/glow/patterns/page.mdx', route: '/glow/patterns', title: 'Patterns & Best Practices' },
  ]
  for (const { file, route, title } of handWrittenPages) {
    const filePath = join(ROOT, file)
    if (existsSync(filePath)) {
      writeMdCopy(route, title, readFileSync(filePath, 'utf-8'))
    }
  }

  // Also copy guide pages to public/md/
  const glowDirs = readdirSync(join(ROOT, 'app/glow')).filter(d =>
    existsSync(join(ROOT, 'app/glow', d, 'guide', 'page.mdx'))
  )
  // Include platform guides too
  const platformDirs = readdirSync(join(ROOT, 'app')).filter(d =>
    d !== 'glow' && existsSync(join(ROOT, 'app', d, 'guide', 'page.mdx'))
  )
  const guideDirs = [
    ...glowDirs.map(d => ({ dir: `app/glow/${d}/guide`, route: `/glow/${d}/guide`, name: d })),
    ...platformDirs.map(d => ({ dir: `app/${d}/guide`, route: `/${d}/guide`, name: d })),
  ]
  for (const { dir, route, name } of guideDirs) {
    const filePath = join(ROOT, dir, 'page.mdx')
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, 'utf-8')
      writeMdCopy(route, `${titleCase(name)} Guide`, content)
    }
  }

  // Write llms.txt index (Stripe-style: list of .md URLs)
  const summary = [
    '# LearnLoop Documentation',
    '',
    '> LearnLoop is a conversational AI training platform. Glow is the product that runs on each customer instance.',
    '> Glow has two interfaces: a **CLI** (`glow` command) and a **REST API**.',
    '',
    '- [Full API + CLI Reference](llms-full.txt): Complete reference in a single text file',
    '',
    '## Guides',
    '',
    '- [Getting Started](/glow/start.md)',
    '- [How AI Simulation Training Works](/glow/how-it-works.md)',
    '- [Design Your First Simulation](/glow/tutorial.md)',
    '- [Patterns & Best Practices](/glow/patterns.md)',
    '',
    '## API & CLI Reference',
    '',
  ]

  for (const { route, title } of mdPages) {
    summary.push(`- [${title}](${route}.md)`)
  }
  summary.push('')

  writeFileSync(join(ROOT, 'public/llms.txt'), summary.join('\n'))
  console.log(`  llms.txt: ${(summary.join('\n').length / 1024).toFixed(1)}KB, ${mdPages.length} pages`)
}

console.log('Generating docs from specs...')
main()
console.log('Done.')
