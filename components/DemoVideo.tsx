'use client'

import { DEMO_TOPICS } from './demo-manifest'

/**
 * DemoVideo — embeds a short demo video for a per-topic doc page.
 *
 * Convention:
 *   * Each hand-written page that benefits from a video clip drops in
 *     a ``<DemoVideo topic="personas" />`` near the top.
 *   * The component consults the build-time manifest (see
 *     ``scripts/gen-demo-manifest.mjs``) to decide which file to load:
 *       - If ``public/demos/<topic>.webm`` (or ``.mp4``) exists, use it.
 *       - Otherwise use ``public/demos/_placeholder.mp4``.
 *     No 404 round-trip; the right URL is picked up front.
 *
 * Greppability:
 *   * To find every video slot across the docs, run:
 *       grep -rn 'DEMO_VIDEO' app/ public/md/
 *     Pages always pair the component with a DEMO_VIDEO comment
 *     marker inside an MDX brace-comment, so the grep finds both the
 *     MDX page and the .md copy.
 *
 * To insert a real video for topic ``foo``:
 *   1. Drop the file at ``public/demos/foo.webm`` (Playwright output) or
 *      ``public/demos/foo.mp4`` (VHS / manual capture).
 *   2. Run ``node scripts/gen-demo-manifest.mjs`` (or ``make sync-types``).
 *   3. The next build picks it up automatically.
 */
/**
 * How the clip is produced. Drives the small badge under the caption
 * and lets a future regenerator script enumerate work by tool:
 *   - 'playwright' — client web-UI flow recorded by Playwright
 *   - 'vhs'        — terminal demo recorded by Charm's VHS
 *   - 'manual'     — hand-recorded screen capture (no automation today)
 *
 * Mirrored in the marker comment so it's greppable:
 *   {/* DEMO_VIDEO: <slug> | playwright *‍/}
 */
export type DemoVideoKind = 'playwright' | 'vhs' | 'manual'

interface DemoVideoProps {
  topic: string
  /**
   * Short description of the clip. Used as the video's accessible label
   * (its `aria-label` + hover `title`) — the "alt text" for the video —
   * rather than a visible caption, to keep the page clean.
   */
  caption?: string
  /** Optional poster image (defaults to first frame of the video). */
  poster?: string
  /**
   * How this clip is produced ('playwright' | 'vhs'). Recorded in the
   * `data-demo-kind` attribute for tooling/enumeration only — it is NOT
   * shown to readers (an internal detail; users don't need it).
   */
  kind?: DemoVideoKind
}

// Mirrors next.config.mjs ``basePath`` — must be inlined client-side
// since Next only auto-prefixes raw asset URLs for next/image / next/link.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function DemoVideo({ topic, caption, poster, kind }: DemoVideoProps) {
  // Manifest maps topic → extension ('webm' | 'mp4'). Missing topic =>
  // no real clip yet — fall back to the placeholder so the page renders.
  const ext = DEMO_TOPICS.get(topic)
  const hasPerTopic = ext !== undefined
  const path = hasPerTopic ? `/demos/${topic}.${ext}` : '/demos/_placeholder.mp4'
  const src = `${BASE_PATH}${path}`
  // The caption is the accessible description (the "alt" for a video, i.e.
  // its aria-label) rather than a visible figcaption — keeps the page clean.
  const label = caption ?? `Demo video for ${topic}`

  return (
    <figure
      className="my-6"
      data-demo-video={topic}
      data-demo-fallback={hasPerTopic ? undefined : 'placeholder'}
      data-demo-kind={kind}
    >
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        title={label}
        className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-black"
      >
        Your browser does not support the video tag.
      </video>
    </figure>
  )
}
