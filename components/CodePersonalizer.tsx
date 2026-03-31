'use client'

import { useEffect, useState } from 'react'

/**
 * CodePersonalizer -- replaces placeholder values in code blocks
 * with the user's actual department ID, token, etc.
 *
 * Mounted once in the layout. Listens for department changes.
 * Runs after page render and re-runs on navigation.
 */

interface Replacements {
  [placeholder: string]: string
}

export function CodePersonalizer() {
  const [replacements, setReplacements] = useState<Replacements>({})

  const fetchContext = () => {
    const deptId = localStorage.getItem('glow-docs-department') || ''
    fetch(`/api/context?dept=${deptId}`)
      .then(r => r.json())
      .then(data => {
        if (data.authenticated && data.replacements) {
          setReplacements(data.replacements)
        }
      })
      .catch(() => {})
  }

  useEffect(() => {
    fetchContext()

    // Re-fetch when department changes
    const handler = () => fetchContext()
    window.addEventListener('department-changed', handler)
    return () => window.removeEventListener('department-changed', handler)
  }, [])

  useEffect(() => {
    if (Object.keys(replacements).length === 0) return

    const applyReplacements = () => {
      // Only target fenced code blocks (pre > code), not inline code
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

    // Re-apply on SPA navigation (new code blocks appear in DOM)
    const observer = new MutationObserver(() => applyReplacements())
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [replacements])

  return null
}
