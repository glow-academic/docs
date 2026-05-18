# Session

{/* DEMO_VIDEO: session-overview | playwright */}

# Session

<DemoVideo
  topic="session-overview"
  kind="playwright"
  caption="Opening a session detail page — TA identity at the top, groups grid in the middle, full event timeline pinned to the right rail."
/>

Session provides a detailed view of an individual TA training
session, including the AI generation groups created during the
session and a unified timeline of events. This is the drill-down view
when you want to understand exactly what happened during a specific
training session.

Session is a **view on the system artifact**, exposed via two
endpoints:

* `POST /system/session` — single session detail (one row + timeline + groups).
* `POST /system/sessions` — paginated list of all sessions.

The CLI surfaces these as `glow system session` and
`glow system sessions`.

## What is a Session?

A session represents a single visit by a TA to the Glow platform. During a session, the TA may interact with multiple student persona simulations, generating AI groups (collections of model calls) and producing a chronological timeline of events.

Session is useful when you need to:
- Investigate what happened during a specific TA's training session
- Review the groups and runs generated during a session
- Track token usage and cost at the session level
- Export a session's data for auditing or FERPA compliance

## Quick Start

### CLI

> Calls below assume you've authenticated — see [Authentication](/authentication) for the bearer + license-key headers.

```bash
# Get session detail with groups and timeline
glow system session --body '{"session_id": "session-uuid"}'

# Paginate the full session list
glow system sessions --body '{"page_size": 25, "sort_order": "desc"}'

# Export attempts associated with this session
glow system export --body '{"target_session_id": "session-uuid"}'
```

### API

```bash
# Get one session detail
curl -X POST https://<your-instance>/system/session \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"session_id": "session-uuid"}'

# List sessions
curl -X POST https://<your-instance>/system/sessions \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"page_size": 20}'

# Export
curl -X POST https://<your-instance>/system/export \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"target_session_id": "session-uuid"}'
```

{/* DEMO_VIDEO: session-detail-view | playwright */}

## Understanding the session detail response

<DemoVideo
  topic="session-detail-view"
  kind="playwright"
  caption="Walking through `GetSessionDetailResponse` field-by-field: profile_name, session_created_at, active, and the groups array hydrated inline."
/>


`POST /system/session` returns `GetSessionDetailResponse`:

- **`session_exists`** -- Whether the requested session was found.
- **`actor_name`** -- Display name of the current user viewing the session.
- **`session_id`** -- UUID of the session.
- **`profile_id`**, **`profile_name`** -- The TA who owns this session.
- **`session_created_at`** -- When the session started.
- **`active`** -- Whether the session is currently active.

### Groups

The **`groups`** array contains `ArtifactSessionGroup` objects, each representing an AI generation group within the session:

- `group_id` -- UUID of the group
- `group_name` -- Display name
- `first_run_at`, `last_run_at` -- Time span of the group's runs
- `run_count` -- Number of AI model runs
- `total_tokens` -- Total tokens consumed
- `total_cost` -- Dollar cost as a string

{/* DEMO_VIDEO: session-timeline | playwright */}

### Timeline

<DemoVideo
  topic="session-timeline"
  kind="playwright"
  caption="Scrolling the chronological event log — group_created, run_started, run_ended events stitched together with entity_name links back into the data."
/>


The **`timeline`** array contains `SessionTimelineItem` objects -- a chronological log of events:

- `event_type` -- Type of event (e.g., group creation, run start, run end)
- `entity_id` -- UUID of the related entity
- `entity_name` -- Display name of the related entity
- `created_at` -- Timestamp of the event
- `extra_1`, `extra_2` -- Additional context fields

{/* DEMO_VIDEO: session-navigate-to-group | playwright */}

## Navigating from Activity to Session

<DemoVideo
  topic="session-navigate-to-group"
  kind="playwright"
  caption="The full drill path: Activity → pick a session_id → Session detail → click a group row → land on the Group detail page with runs + messages."
/>


A common workflow is to start from the Activity page, paginate
sessions, then drill into one:

```bash
# Step 1: Paginate sessions (or use the Activity summary at /system/activity)
glow system sessions --body '{"page_size": 10}'

# Step 2: Pick a session_id from the results and get its detail
glow system session --body '{"session_id": "abc-123"}'

# Step 3: Drill into a specific group
glow system group --body '{"group_id": "group-uuid"}'
```

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Get one session detail | `glow system session` | `POST /system/session` |
| List sessions (paginated) | `glow system sessions` | `POST /system/sessions` |
| Export session data | `glow system export` | `POST /system/export` |
| Refresh caches | `glow system refresh` | `POST /system/refresh` |

## Related

- [System API Reference](/api-reference/system) — every system/* endpoint
- [System CLI Reference](/cli-reference/system) — every `glow system ...` command
- [Activity](/activity) — aggregate counts + per-profile breakdown
- [Group](/group) — drill into a specific generation group within a session
