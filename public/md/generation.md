# Generation

{/* DEMO_VIDEO: generation-overview — replace public/demos/generation-overview.mp4 */}

# Generation

Most artifacts in Glow can be authored two ways: hand-written through
the standard CRUD surface (`create` / `draft` / `update`) or generated
by an LLM. The generated path is uniform across the 20 artifact
families and is the subject of this page.

<DemoVideo
  topic="generation-overview"
  caption="Triggering POST /persona/generate from the personas list, then watching the SSE stream paint progress, save, and complete events into the row before the page refreshes."
/>

## The generate pattern in two beats

Every artifact that supports generation exposes the same two-step
contract:

1. **Trigger.** `POST /<artifact>/generate` accepts an
   `ArtifactGenerateRequest` and returns immediately with
   `{ group_id, run_id, ... }`. The run is fire-and-return: the
   server kicks off the model calls in the background and the HTTP
   call hands you back the handles you need to follow it.
2. **Follow.** `GET /<artifact>/watch?run_id=<run_id>` is a long-lived
   Server-Sent Events stream that emits typed lifecycle events for
   that run until the terminal `*.complete` or `*.error` event lands.

The pair is the canonical fan-out: the trigger response is *the
ticket* you exchange for a stream of progress on
[/streaming](/streaming).

| Handle | Lifetime | What it scopes |
|--------|----------|----------------|
| `group_id` | The conversation / session window | Every run the actor performs in this window — re-used across many triggers, surfaced on the [Group](/group) detail view, and how `glow <art> generations` paginates history |
| `run_id` | One trigger | Exactly one generate call — the filter you pass to `/watch` so the stream is scoped to this run instead of every run in the group |

`group_id` is resolved server-side from the actor's session if you
don't pass one; `run_id` is minted by the trigger (or by the client up
front via `client_run_id` on the request if you want to subscribe
before the run exists).

---

{/* DEMO_VIDEO: generation-trigger — replace public/demos/generation-trigger.mp4 */}

## Triggering generation

<DemoVideo
  topic="generation-trigger"
  caption="POST /persona/generate firing a single-line instructions string; the response panel showing run_id + group_id within ~200ms while the model spins up in the background."
/>

The request body is `ArtifactGenerateRequest` — `instructions` (what
you want), an optional `config` block (operations, params,
`dangerous`), and optional modality / audio handles for media and
voice flows. Artifact type is implicit from the URL path.

**Raw HTTP:**

```bash
curl -X POST https://<your-instance>/persona/generate \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "instructions": ["A passive student who starts every reply with Uh..."],
    "config": { "dangerous": false }
  }'
```

Response:

```json
{
  "group_id": "9c8d…",
  "run_id":   "1f2e…",
  "produced_media": []
}
```

**glow CLI:**

```bash
# Fire-and-return — same as the curl call above
glow personas generate --body '{
  "instructions": ["A passive student who starts every reply with Uh..."]
}'
```

The trigger returns within a few hundred milliseconds regardless of
how long the underlying model work takes. Plug the returned `run_id`
into `/watch` (or use `--wait`, below) to block on completion.

---

{/* DEMO_VIDEO: generation-wait — replace public/demos/generation-wait.mp4 */}

## The `--wait` shortcut

<DemoVideo
  topic="generation-wait"
  caption="Running glow personas generate --wait in a terminal: the trigger response prints first with run_id, then live SSE frames stream in until a green `Run completed.` line."
/>

`glow <artifact> generate --wait` rolls the trigger + watch loop into
one blocking call. The CLI fires the `POST /<artifact>/generate`,
captures the `run_id` and `group_id`, and immediately attaches to
`GET /<artifact>/watch?run_id=<run_id>`, printing each SSE frame and
exiting on the first terminal event (`*.complete` → exit 0,
`*.error`/`*.failed` → exit 1).

```bash
glow personas generate --wait --body '{
  "instructions": ["Aggressive student in CS-180, intensity 7"]
}'
```

Useful in scripts and CI: the `--wait` shortcut means a generate is
just one command and the process exit code tells you whether the
artifact was actually saved. Stream-closed without a terminal event
exits 0 (the API may end the stream when its dedup/age window
expires).

Without `--wait`, `glow <artifact> generate` is fire-and-return — the
same shape the FE uses when it has its own SSE subscription open
already.

---

{/* DEMO_VIDEO: generation-events — replace public/demos/generation-events.mp4 */}

## Event types you'll see

<DemoVideo
  topic="generation-events"
  caption="A single persona generate in the network inspector: Progress frames rising from 20% → 80%, a Saved frame, then a final Complete frame carrying the artifact_id."
/>

Six client-facing event types ride the watch stream. The text
lifecycle and the media lifecycle are independent — a text-only
generate emits only the first four; an image/video generate also
emits the two `Media*` variants in parallel.

| Event | Fires when | Carries |
|-------|-----------|---------|
| **`GenerationProgressEvent`** | Each resource in the run completes | `completed_resources`, `total_resources`, `percentage`, `last_completed_resource` |
| **`GenerationSavedEvent`** | The artifact row is persisted to Postgres | `artifact_id` |
| **`GenerationCompleteEvent`** | All work for the run is done (terminal) | `success`, `message`, `artifact_id` |
| **`GenerationErrorEvent`** | Any resource or the run as a whole fails (terminal) | `resource_type`, `resource_id`, `message` |
| **`GenerationMediaProgressEvent`** | Image/video generation crosses a status boundary | `modality`, `status` (`started` / `in_progress`), `message` |
| **`GenerationMediaCompleteEvent`** | An image/video asset finishes uploading | `modality`, `upload_id`, `file_size`, `mime_type` |

**Ordering you can rely on:**

- `Progress*` frames are monotonic on `completed_resources` and
  arrive before `Complete` / `Saved`.
- `Saved` always arrives before `Complete` for runs that persist an
  artifact (some media-only runs go `MediaComplete` → `Complete`
  with no `Saved`).
- `MediaProgress` with `status: "started"` precedes any
  `MediaComplete` for the same `resource_id`.
- `Error` is terminal but may arrive *with* prior `Progress` frames —
  partial failures still report what made it through.

Every event carries the `group_id` and `run_id` envelope so a single
SSE connection scoped to a `group_id` (omit `run_id` on `/watch`) can
multiplex many concurrent runs. The auto-generated schemas live under
[`/api-reference`](/api-reference) — see
[`/api-reference/persona/get-persona-watch`](/api-reference/persona/get-persona-watch)
for the persona variant, and the equivalent `get-<artifact>-watch`
page under every other artifact.

---

## Artifact-specific signatures

Most artifacts (`persona`, `agent`, `rubric`, `eval`, `tool`,
`field`, `parameter`, `document`, …) take the standard
`ArtifactGenerateRequest` body — pass `instructions` and let the
server pick operations.

A handful have an ergonomic shape on top of that contract. The most
common deviation is **scenarios**, which the CLI exposes positionally:

```bash
# glow scenarios generate <modality> <title> [--instructions <text>]
glow scenarios generate image "University Office" \
  --instructions "Wide-angle shot, late afternoon light, books on the desk"
```

The CLI translates that into the same `POST /scenario/generate` call
with `{ modality, title, instructions }` in the body. For the full
per-artifact request schema, jump to the relevant artifact page:

- [Personas](/personas) — text generation only
- [Scenarios](/scenarios) — image / video / text, `title` is the asset's display name
- [Agents](/agents) — text generation, optional `params` for graph-mode
- [Rubrics](/rubrics), [Evals](/evals), [Tools](/tools), [Fields](/fields), [Parameters](/parameters), [Documents](/documents) — standard text shape

Or read the auto-generated request body on
[`/api-reference/<artifact>/post-<artifact>-generate`](/api-reference).

---

## `glow <art> generations` — listing prior runs

Every artifact that supports generation also exposes a `generations`
endpoint that lists the `group_id`s an actor has produced for that
artifact, paginated and date-windowed.

```bash
# List the 20 most recent persona-generation groups for this actor
glow personas generations --body '{
  "page_limit": 20,
  "page_offset": 0
}'
```

Each row is a `{ group_id, group_name, session_id, created_at }` — use
`group_id` to open the full [Group](/group) detail view (every run +
every message) or to pull the audit trail. The endpoint is scoped to
the calling profile by default; admins see all generations in their
org.

Raw HTTP:

```bash
curl -X POST https://<your-instance>/persona/generations \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -d '{ "search": "confused", "page_limit": 50 }'
```

The response carries an `items` list of
`{ group_id, session_id, group_name, created_at }` rows plus a
`total_count` for the matching window. Combine with `date_from` /
`date_to` to scope a sweep.

---

## Common operations reference

| Task | CLI | API |
|------|-----|-----|
| Trigger a generate (fire-and-return) | `glow <art> generate --body '{...}'` | `POST /<art>/generate` |
| Trigger + block on completion | `glow <art> generate --wait --body '{...}'` | `POST /<art>/generate` then `GET /<art>/watch?run_id=...` |
| Stream events for one run | `glow <art> watch <run_id>` | `GET /<art>/watch?run_id=<run_id>` |
| Stream every event in a group | `glow <art> watch --group <group_id>` | `GET /<art>/watch?group_id=<group_id>` |
| List prior generations | `glow <art> generations --body '{...}'` | `POST /<art>/generations` |
| Inspect one group's full tree | `glow system group --body '{"group_id":"...","include_detail":true}'` | `POST /system/group` |

## Related

- [Streaming](/streaming) — SSE plumbing details, reconnect semantics, and the `/watch` event envelope
- [Media](/media) — image, video, and audio generation modalities and the produced-media handoff
- [Group](/group) — the audit view of every run inside a single `group_id`
- [Personas](/personas), [Scenarios](/scenarios), [Agents](/agents) — per-artifact pages with concrete generate request bodies
- [API Reference](/api-reference) — auto-generated request / response schemas for every `<art>/generate`, `<art>/generations`, and `<art>/watch` endpoint
