# Demo videos

This directory holds the short demo clips embedded by the `<DemoVideo
topic="…" />` MDX component (see `components/DemoVideo.tsx`).

## Convention

* One file per docs topic: `public/demos/<topic>.mp4`. The `<topic>`
  value must match the `topic` prop passed to `<DemoVideo>` and the
  trailing fragment of the page slug (e.g. `personas.mp4` for
  `app/personas/page.mdx`).
* `_placeholder.mp4` is a tiny (1-second, 480x270, black) clip
  generated via `ffmpeg`. The DemoVideo component falls back to it
  whenever the per-topic file is missing, so the embed always renders
  *something* instead of a broken-media icon.

## Adding a real demo

1. Drop the file at `public/demos/<topic>.mp4` (mp4 / h264 / faststart
   recommended for fast first-paint).
2. Rebuild — no code changes needed; the component picks it up.
3. The per-topic comment marker in the MDX page
   (`{/* DEMO_VIDEO: <topic> */}`) plus the data attribute on the
   rendered `<figure>` make every slot greppable.

## Finding every slot

```bash
# Every MDX/markdown page that requests a demo video:
grep -rn DEMO_VIDEO app/ public/md/

# Every page currently rendering the placeholder (no real clip yet):
ls public/demos/
```

## Regenerating the placeholder

```bash
ffmpeg -y -f lavfi -i color=c=black:s=480x270:r=30:d=1 \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart \
  public/demos/_placeholder.mp4
```
