'use client'

/**
 * VersionSwitcher — Dropdown in the navbar to switch between doc versions.
 *
 * Fetches /versions.json (served by nginx, shared across all containers)
 * to know what versions are deployed. Switches by rewriting the URL prefix.
 */

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface VersionsData {
  versions: string[]
  latest: string
}

export function VersionSwitcher() {
  const [data, setData] = useState<VersionsData | null>(null)
  const pathname = usePathname()

  // Determine current version from URL
  // pathname is relative to basePath, so it's always /glow/agents etc.
  // But the full URL has /latest/glow/agents or /v2.2.0/glow/agents
  // We read basePath from the window location
  const [currentVersion, setCurrentVersion] = useState<string>('')

  useEffect(() => {
    // Parse version from the full URL path
    const fullPath = window.location.pathname
    const match = fullPath.match(/^\/(latest|v[\d.]+)/)
    if (match) setCurrentVersion(match[1])

    // Fetch shared versions.json from nginx (not from the app's basePath)
    fetch('/versions.json')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setData(d) })
      .catch(() => {})
  }, [])

  if (!data || data.versions.length === 0) {
    // No version data — just show current
    return currentVersion ? (
      <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{currentVersion}</span>
    ) : null
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVersion = e.target.value
    const fullPath = window.location.pathname
    // Replace the current version prefix with the new one
    const newPath = fullPath.replace(/^\/(latest|v[\d.]+)/, `/${newVersion}`)
    window.location.href = newPath
  }

  return (
    <select
      value={currentVersion}
      onChange={handleChange}
      style={{
        fontSize: '0.8rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.375rem',
        border: '1px solid var(--nextra-border-color, #e5e7eb)',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <option value="latest">latest (v{data.latest})</option>
      {[...data.versions].reverse().map(v => (
        <option key={v} value={`v${v}`}>v{v}</option>
      ))}
    </select>
  )
}
