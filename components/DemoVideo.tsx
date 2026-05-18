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
 *       - If ``public/demos/<topic>.mp4`` exists, use it.
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
 *   1. Drop the file at ``public/demos/foo.mp4``.
 *   2. Run ``node scripts/gen-demo-manifest.mjs`` (or ``make sync-types``).
 *   3. The next build picks it up automatically.
 */
interface DemoVideoProps {
  topic: string
  /** Optional caption rendered under the video. */
  caption?: string
  /** Optional poster image (defaults to first frame of the video). */
  poster?: string
}

export default function DemoVideo({ topic, caption, poster }: DemoVideoProps) {
  const hasPerTopic = DEMO_TOPICS.has(topic)
  const src = hasPerTopic ? `/demos/${topic}.mp4` : '/demos/_placeholder.mp4'

  return (
    <figure
      className="my-6"
      data-demo-video={topic}
      data-demo-fallback={hasPerTopic ? undefined : 'placeholder'}
      aria-label={`Demo video for ${topic}`}
    >
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-black"
      >
        Your browser does not support the video tag.
      </video>
      {(caption || !hasPerTopic) && (
        <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {caption ?? `Placeholder — drop a real clip at public/demos/${topic}.mp4 to replace.`}
        </figcaption>
      )}
    </figure>
  )
}
