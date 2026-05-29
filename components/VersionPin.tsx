import versions from '@/api-versions.json'

/**
 * VersionPin — renders the pinned Glow API + CLI versions, read from the
 * single source of truth at the repo root (`api-versions.json`, refreshed
 * by `make sync-types` against the live servers). Resolved at build time,
 * so the displayed pin tracks that file automatically — never hardcode the
 * numbers in prose.
 *
 * Server component (pure render, no client JS). The `.md` / `llms-full.txt`
 * generators resolve `<VersionPin />` to the same string — keep the format
 * in sync with `versionPinText()` in scripts/lib/version-pin.mjs.
 */
export function VersionPin() {
  return (
    <>
      <strong>Glow API v{versions.api.version}</strong> ·{' '}
      <strong>CLI v{versions.cli.version}</strong>
    </>
  )
}
