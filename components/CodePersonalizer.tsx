'use client'

import { useEffect, useState } from 'react'

/**
 * CodePersonalizer — replaces placeholder values in code blocks with the
 * user's own values from localStorage. Pure client-side; no server calls.
 *
 * Users set their values via the in-page Settings widget (or directly in
 * the browser's localStorage); CodePersonalizer reads them and rewrites
 * placeholders in any rendered code block so users can copy-paste with
 * their real api URL, department ID, and token already filled in.
 *
 * Recognized keys (all in localStorage, all optional):
 *   - glow-docs-api-url     → replaces "https://glow.example.com"
 *   - glow-docs-department  → replaces "dept_abc123" / "<your-department-id>"
 *   - glow-docs-token       → replaces "$GLOW_TOKEN"
 */

interface Replacements {
  [placeholder: string]: string
}

function readReplacements(): Replacements {
  if (typeof window === 'undefined') return {}
  const apiUrl = localStorage.getItem('glow-docs-api-url') || ''
  const dept = localStorage.getItem('glow-docs-department') || ''
  const token = localStorage.getItem('glow-docs-token') || ''
  const r: Replacements = {}
  if (apiUrl) r['https://glow.example.com'] = apiUrl
  if (dept) {
    r['dept_abc123'] = dept
    r['&lt;your-department-id&gt;'] = dept
    r['&lt;department-id&gt;'] = dept
  }
  if (token) r['$GLOW_TOKEN'] = token
  return r
}

export function CodePersonalizer() {
  const [replacements, setReplacements] = useState<Replacements>({})

  useEffect(() => {
    setReplacements(readReplacements())

    // Re-read when the user updates settings in another tab, or when a
    // settings widget fires a custom event in this tab.
    const onStorage = (e: StorageEvent) => {
      if (e.key?.startsWith('glow-docs-')) setReplacements(readReplacements())
    }
    const onLocal = () => setReplacements(readReplacements())
    window.addEventListener('storage', onStorage)
    window.addEventListener('glow-docs-settings-changed', onLocal)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('glow-docs-settings-changed', onLocal)
    }
  }, [])

  useEffect(() => {
    if (Object.keys(replacements).length === 0) return

    const applyReplacements = () => {
      document.querySelectorAll('pre code').forEach(block => {
        if (block.getAttribute('data-personalized')) return
        let html = block.innerHTML
        let changed = false

        for (const [placeholder, value] of Object.entries(replacements)) {
          if (value === placeholder) continue
          if (html.includes(placeholder)) {
            html = html.replaceAll(
              placeholder,
              `<span class="personalized" style="color: #3b82f6; font-weight: 600;" title="Your value">${value}</span>`
            )
            changed = true
          }
        }

        if (changed) {
          block.innerHTML = html
          block.setAttribute('data-personalized', '1')
        }
      })
    }

    applyReplacements()

    const observer = new MutationObserver(() => applyReplacements())
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [replacements])

  return null
}
