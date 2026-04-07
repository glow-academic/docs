/**
 * MCP tool implementations for Glow documentation.
 *
 * Shared between the MCP Streamable HTTP server (/mcp) and the
 * legacy REST endpoint (/api/mcp). Each tool reads from the
 * pre-generated markdown files in public/md/.
 */

import { readFileSync, existsSync, readdirSync } from "fs"
import { join } from "path"
import type { UserContext } from "@/lib/authorization"
import { canReadDoc, getVisibleSlugs } from "@/lib/authorization"

const MD_DIR = join(process.cwd(), "public/md")

// ── Helpers ─────────────────────────────────────────────────────

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function titleCase(text: string): string {
  return text.replace(/(^|[-_\s])(\w)/g, (_, sep, c) =>
    (sep === '-' || sep === '_' ? ' ' : sep) + c.toUpperCase()
  )
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function extractTitle(content: string): string {
  const m = content.match(/^#\s+`?([^`\n]+)`?/m)
  return m ? m[1].trim() : ''
}

function extractDescription(content: string): string {
  for (const line of content.split('\n')) {
    const t = line.trim()
    if (t && !t.startsWith('#') && !t.startsWith('*No') && !t.startsWith('---')) return t
  }
  return ''
}

function splitByHeadings(content: string): { heading: string; content: string }[] {
  const sections: { heading: string; content: string }[] = []
  const lines = content.split('\n')
  let heading = ''
  let buf: string[] = []
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (heading || buf.length) sections.push({ heading, content: buf.join('\n').trim() })
      heading = line.slice(3).trim()
      buf = []
    } else {
      buf.push(line)
    }
  }
  if (heading || buf.length) sections.push({ heading, content: buf.join('\n').trim() })
  return sections
}

function walkDir(dir: string, prefix = ''): string[] {
  const files: string[] = []
  if (!existsSync(dir)) return files
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) files.push(...walkDir(join(dir, entry.name), `${prefix}${entry.name}/`))
    else if (entry.name.endsWith('.md')) files.push(`${prefix}${entry.name}`)
  }
  return files
}

function visibleFiles(user: UserContext): string[] {
  const slugs = getVisibleSlugs(user)
  return walkDir(MD_DIR).filter(path => {
    const slug = path.split('/')[0].replace('.md', '')
    return slugs.includes(slug) || slugs.includes('*')
  })
}

// ── Tool implementations ────────────────────────────────────────

export async function searchDocs(user: UserContext, query: string, limit = 5): Promise<string> {
  limit = Math.min(limit, 20)
  const q = query.toLowerCase()
  const files = visibleFiles(user)
  const all: { type: string; path: string; title: string; snippet: string }[] = []

  for (const file of files) {
    const content = readFileSync(join(MD_DIR, file), 'utf-8')
    if (!content.toLowerCase().includes(q)) continue

    let type = 'guide'
    if (file.startsWith('api-reference/')) type = 'api'
    else if (file.startsWith('cli-reference/')) type = 'cli'
    else if (file.startsWith('mcp-reference/')) type = 'mcp'

    const title = extractTitle(content) || file
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(q)) {
        all.push({ type, path: file, title, snippet: lines.slice(Math.max(0, i - 1), i + 2).join('\n').trim() })
        break
      }
    }
  }

  return JSON.stringify({ results: all.slice(0, limit), total: all.length, has_more: all.length > limit })
}

export async function listGuides(user: UserContext): Promise<string> {
  const files = visibleFiles(user)
  const guides = files
    .filter(f => !f.includes('/'))
    .map(f => {
      const slug = f.replace('.md', '')
      const content = readFileSync(join(MD_DIR, f), 'utf-8')
      return { slug, title: extractTitle(content) || titleCase(slug) }
    })
  return JSON.stringify(guides)
}

export async function fetchGuide(user: UserContext, slug: string, section?: string): Promise<string> {
  if (!canReadDoc(user, slug)) return 'Access denied. Sign in for access.'
  const filePath = join(MD_DIR, `${slug}.md`)
  if (!existsSync(filePath)) return `Guide not found: "${slug}"`

  const content = readFileSync(filePath, 'utf-8')
  if (content.length < 3000) return content

  const sections = splitByHeadings(content)
  if (section) {
    const match = sections.find(s =>
      s.heading.toLowerCase() === section.toLowerCase() || slugify(s.heading) === slugify(section)
    )
    if (match) return `## ${match.heading}\n\n${match.content}`
    return `Section "${section}" not found. Available: ${sections.filter(s => s.heading).map(s => s.heading).join(', ')}`
  }

  const headings = sections.filter(s => s.heading).map(s => s.heading)
  let result = sections[0]?.content || ''
  if (headings.length > 0) result = `**Sections:** ${headings.join(' | ')}\n\n${result}`
  if (sections.length > 1) result += `\n\n---\n*${sections.length - 1} more section(s). Use fetch_guide("${slug}", section="...") to read a specific section.*`
  return result
}

export async function listApiResources(user: UserContext): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  const dir = join(MD_DIR, 'api-reference')
  if (!existsSync(dir)) return JSON.stringify([])

  const resources = readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => {
      const files = readdirSync(join(dir, d.name)).filter(f => f.endsWith('.md'))
      return {
        resource: d.name,
        title: titleCase(d.name),
        endpoint_count: files.filter(f => f !== 'types.md').length,
        has_types: files.includes('types.md'),
      }
    })
    .sort((a, b) => a.resource.localeCompare(b.resource))

  return JSON.stringify(resources)
}

export async function fetchApiEndpoint(user: UserContext, resource: string, slug: string): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  const filePath = join(MD_DIR, 'api-reference', resource, `${slug}.md`)
  if (!existsSync(filePath)) {
    const resDir = join(MD_DIR, 'api-reference', resource)
    if (existsSync(resDir)) {
      const available = readdirSync(resDir).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
      return `Endpoint "${slug}" not found in ${resource}. Available: ${available.join(', ')}`
    }
    return `Resource "${resource}" not found.`
  }
  return readFileSync(filePath, 'utf-8')
}

export async function listCliCommands(user: UserContext): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  const dir = join(MD_DIR, 'cli-reference')
  if (!existsSync(dir)) return JSON.stringify([])

  const commands: { command: string; description: string }[] = []
  const walk = (d: string, prefix: string) => {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(join(d, entry.name), `${prefix}${entry.name}/`)
      else if (entry.name.endsWith('.md')) {
        const cmd = `${prefix}${entry.name.replace('.md', '')}`
        const content = readFileSync(join(d, entry.name), 'utf-8')
        commands.push({ command: cmd, description: extractTitle(content) || cmd })
      }
    }
  }
  walk(dir, '')
  return JSON.stringify(commands)
}

export async function fetchCliCommand(user: UserContext, command: string): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  let filePath = join(MD_DIR, 'cli-reference', command)
  if (!filePath.endsWith('.md')) filePath += '.md'
  if (!existsSync(filePath)) return `CLI command "${command}" not found.`
  return readFileSync(filePath, 'utf-8')
}

export async function listMcpTools(user: UserContext): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  const dir = join(MD_DIR, 'mcp-reference')
  if (!existsSync(dir)) return JSON.stringify([])

  const result: { name: string; description: string }[] = []
  for (const file of readdirSync(dir).filter(f => f.endsWith('.md')).sort()) {
    const content = readFileSync(join(dir, file), 'utf-8')
    result.push({ name: extractTitle(content) || file.replace('.md', ''), description: extractDescription(content) })
  }
  return JSON.stringify(result)
}

export async function fetchMcpTool(user: UserContext, name: string): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  const slug = slugify(name)
  const filePath = join(MD_DIR, 'mcp-reference', `${slug}.md`)
  if (!existsSync(filePath)) return `MCP tool "${name}" not found.`
  return readFileSync(filePath, 'utf-8')
}

export async function getReference(user: UserContext, section?: string): Promise<string> {
  if (!user.isAuthenticated) return 'Sign in required.'
  const llmsPath = join(process.cwd(), 'public/llms-full.txt')
  if (!existsSync(llmsPath)) return 'Full reference not available.'
  const content = readFileSync(llmsPath, 'utf-8')

  if (!section) {
    const headings = (content.match(/^## .+$/gm) || []).map(h => h.slice(3))
    return JSON.stringify({ sections: headings, hint: 'Use get_reference(section="...") for a specific section.' })
  }

  const regex = new RegExp(`^## ${escapeRegex(section)}\\s*$`, 'mi')
  const match = regex.exec(content)
  if (!match || match.index === undefined) return `Section "${section}" not found.`

  const rest = content.slice(match.index + match[0].length)
  const next = /^## /m.exec(rest)
  const end = next?.index !== undefined ? match.index + match[0].length + next.index : content.length

  return content.slice(match.index, end).trim()
}
