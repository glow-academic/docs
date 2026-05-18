'use client'

import { useRef, useState } from 'react'

/**
 * DemoVideo — embeds a short demo video for a per-topic doc page.
 *
 * Convention:
 *   * Each hand-written page that benefits from a video clip drops in
 *     a ``<DemoVideo topic="personas" />`` near the top.
 *   * The component looks for ``/demos/<topic>.mp4`` first; if that
 *     404s (no video uploaded yet) it transparently swaps to
 *     ``/demos/_placeholder.mp4`` so the embed still renders.
 *
 * Greppability:
 *   * To find every video slot across the docs, run:
 *       grep -rn 'DEMO_VIDEO' app/ public/md/
 *     Pages always pair the component with a ``{/* DEMO_VIDEO: topic */}``
 *     MDX comment marker so the grep finds both MDX and copied markdown.
 *
 * To insert a real video for topic ``foo``: drop the file at
 * ``public/demos/foo.mp4`` and the next build picks it up automatically.
 */
interface DemoVideoProps {
  topic: string
  /** Optional caption rendered under the video. */
  caption?: string
  /** Optional poster image (defaults to first frame of the video). */
  poster?: string
}

export default function DemoVideo({ topic, caption, poster }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [usedFallback, setUsedFallback] = useState(false)

  const primarySrc = `/demos/${topic}.mp4`
  const fallbackSrc = '/demos/_placeholder.mp4'

  return (
    <figure
      className="my-6"
      data-demo-video={topic}
      aria-label={`Demo video for ${topic}`}
    >
      <video
        ref={videoRef}
        src={usedFallback ? fallbackSrc : primarySrc}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-black"
        onError={() => {
          // Primary src 404'd (no per-topic clip uploaded yet) — swap
          // to the placeholder so the embed still renders something
          // visible instead of a broken-media icon.
          if (!usedFallback) setUsedFallback(true)
        }}
      >
        Your browser does not support the video tag.
      </video>
      {(caption || usedFallback) && (
        <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {caption ?? `Placeholder — drop a real clip at public/demos/${topic}.mp4 to replace.`}
        </figcaption>
      )}
    </figure>
  )
}
