# Group

{/* DEMO_VIDEO: group-overview — replace public/demos/group-overview.mp4 */}

# Group

<DemoVideo
  topic="group-overview"
  caption="Opening a Group: header with group_name + actor_name, runs list expanding to show messages, media thumbnails inline with their upload_ids."
/>

Group provides detailed information about an AI generation group —
the collection of model calls (runs) and messages produced during a
training interaction. This is the deepest level of inspection for
understanding exactly what the AI generated and how it was used.

Group is a **view on the system artifact**, exposed via two endpoints:

* `POST /system/group` — single group detail (lean resolve or full
  detail tree depending on `include_detail` in the body).
* `POST /system/groups` — paginated list of all groups (also surfaces
  cost / pricing data; this is what powers the [Pricing](/pricing)
  page's group-history table).

The CLI surfaces these as `glow system group` and `glow system groups`.

## What is Group?

When a TA interacts with a student persona simulation, Glow creates a **group** that tracks all AI model runs and messages in that interaction. A group contains:

- Multiple **runs**, each representing a single AI model invocation with input/output token counts and cost
- **Messages** within each run, organized by role (system, user, assistant) with support for text, audio, image, video, and file uploads
- **Tool calls** made during the interaction
- Metadata about which **models**, **agents**, and **profiles** participated

Groups are essential for debugging AI behavior, auditing training interactions for academic integrity, reviewing FERPA-sensitive conversations, and understanding token consumption patterns.

## Quick Start

### CLI

> Calls below assume you've authenticated — see [Authentication](/authentication) for the bearer + license-key headers.

```bash
# Lean resolve — group identity only (cheap path used by audit linking)
glow system group --body '{"group_id": "group-uuid"}'

# Full detail tree with all runs + messages
glow system group --body '{"group_id": "group-uuid", "include_detail": true, "message_limit": 50}'

# Paginate all groups (used by Pricing's group-history table)
glow system groups --body '{"page_size": 25}'

# Export group data as a ZIP
glow system export --body '{"target_group_id": "group-uuid"}'
```

### API

```bash
# Get one group (set include_detail for the full tree)
curl -X POST https://<your-instance>/system/group \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "group_id": "group-uuid",
    "include_detail": true,
    "message_limit": 100,
    "message_offset": 0
  }'

# List groups (pricing / cost view)
curl -X POST https://<your-instance>/system/groups \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"page_size": 20}'
```

{/* DEMO_VIDEO: group-lean-vs-detail — replace public/demos/group-lean-vs-detail.mp4 */}

## Lean vs. detail

<DemoVideo
  topic="group-lean-vs-detail"
  caption="Side-by-side: lean resolve returns just identity (cheap path for audit linking), then flipping `include_detail: true` to pull the full runs + messages tree."
/>

## Request fields

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group to fetch |
| `include_detail` | `boolean` | No | `true` returns the full detail tree (runs + messages). Default `false` returns lean identity for audit linking. |
| `message_limit` | `integer` | No | Maximum number of messages to return (when `include_detail=true`) |
| `message_offset` | `integer` | No | Offset for message pagination |

## Understanding the detail response

The full-detail response (`include_detail=true`) includes:

- **`group_exists`** -- Whether the group was found.
- **`actor_name`** -- Display name of the current user.
- **`group_name`** -- Display name of the group.
- **`total_message_count`** -- Total messages in the group (for pagination).

{/* DEMO_VIDEO: group-runs-and-messages — replace public/demos/group-runs-and-messages.mp4 */}

### Runs

<DemoVideo
  topic="group-runs-and-messages"
  caption="Expanding a single run: token counts and cost per call, then messages stepping through system → user → assistant with tool-call rows interleaved."
/>


The **`runs`** array contains `GroupDetailRunWithMessages` objects:

Each run has:
- **`run`** -- Run metadata:
  - `id` -- UUID of the run
  - `created_at` -- Timestamp
  - `input_tokens`, `output_tokens`, `cached_input_tokens` -- Token counts
  - `cost` -- Dollar cost of this run
  - `model_id` -- Which AI model was used
  - `agent_id` -- Which agent processed the run
  - `profile_id` -- Which user triggered the run
- **`messages`** -- Array of `GroupDetailMessageItem` objects:
  - `id` -- UUID
  - `role` -- Message role (system, user, assistant)
  - `text_upload_ids` -- UUIDs for text content
  - `audio_upload_ids`, `image_upload_ids`, `video_upload_ids`, `file_upload_ids` -- Media upload UUIDs
  - `calls` -- Tool/function calls made, each with `id`, `template_name`, `file_path`, `created_at`
- **`previous_context_start_index`** -- Where previous context starts in the message array (for understanding context windows)

### Resources

- **`models`** -- Models used, each with `model_id` and `name`.
- **`agents`** -- Agents used, each with `agent_id` and `name`.
- **`profiles`** -- Profiles involved, each with `profile_id` and `name`.

{/* DEMO_VIDEO: group-media-downloads — replace public/demos/group-media-downloads.mp4 */}

## Downloading media

<DemoVideo
  topic="group-media-downloads"
  caption="Pulling an audio_upload_id through `POST /system/audio_download` with a range request, then opening the resulting clip in the inline media viewer."
/>


Messages reference uploaded media via their `*_upload_ids` fields. The
canonical download path is the system artifact's media endpoints:

| Media kind | Endpoint |
|---|---|
| audio | `POST /system/audio_download` |
| image | `POST /system/image_download` |
| video | `POST /system/video_download` |
| file | `POST /system/file_download` |
| text | `POST /system/text_download` |

Each takes the relevant `<kind>_upload_id` in the body and supports
range requests for large files.

{/* DEMO_VIDEO: group-listing — replace public/demos/group-listing.mp4 */}

## Listing groups

<DemoVideo
  topic="group-listing"
  caption="Paginating `POST /system/groups` — the same row collection that powers the Pricing group-history table, sortable by cost or recency."
/>

## AI generation flow

Groups are created as part of the AI generation flow, which produces
stream events (delivered over SSE via `POST /<artifact>/watch`):

1. **`GenerationProgressEvent`** -- Reports `completed_resources` / `total_resources` and `percentage`.
2. **`GenerationCompleteEvent`** -- Indicates success or failure for an `artifact_type`.
3. **`GenerationSavedEvent`** -- Confirms the artifact was saved.
4. **`GenerationErrorEvent`** -- Reports errors with `message` details.
5. **`GenerationMediaProgressEvent`** / **`GenerationMediaCompleteEvent`** -- Track image/video generation.

Each event references the `group_id` and `run_id`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Get one group (lean) | `glow system group` | `POST /system/group` |
| Get one group (full detail) | `glow system group --body '{"include_detail":true}'` | `POST /system/group` |
| List groups (pricing) | `glow system groups` | `POST /system/groups` |
| Export group data | `glow system export` | `POST /system/export` |
| Refresh caches | `glow system refresh` | `POST /system/refresh` |

## Related

- [System API Reference](/api-reference/system) — every system/* endpoint
- [System CLI Reference](/cli-reference/system) — every `glow system ...` command
- [Session](/session) — session-level view that lists groups
- [Pricing](/pricing) — aggregated cost view across all groups
- [Invocation](/invocation) — AI model call tracking inside tests
