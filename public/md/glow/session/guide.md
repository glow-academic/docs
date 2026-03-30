# Session Guide

Session provides a detailed view of an individual TA training session, including the AI generation groups created during the session and a unified timeline of events. This is the drill-down view when you want to understand exactly what happened during a specific training session.

## What is Session?

A session represents a single visit by a TA to the Glow platform. During a session, the TA may interact with multiple student persona simulations, generating AI groups (collections of model calls) and producing a chronological timeline of events.

Session is useful when you need to:
- Investigate what happened during a specific TA's training session
- Review the groups and runs generated during a session
- Track token usage and cost at the session level
- Export a session's data for auditing or FERPA compliance

## Quick Start

### CLI

```bash
# Get session detail with groups and timeline
glow session get --body '{"session_id": "session-uuid"}'

# Export session data as a ZIP
glow session export --body '{"target_session_id": "session-uuid"}'
```

### API

```bash
# Get session detail
curl -X POST https://<your-instance>/v5/session/get \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "session-uuid"
  }'

# Export session data
curl -X POST https://<your-instance>/v5/session/export \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "target_session_id": "session-uuid"
  }'
```

## Understanding the Session Detail Response

The `/session/get` response includes:

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

### Timeline

The **`timeline`** array contains `SessionTimelineItem` objects -- a chronological log of events:

- `event_type` -- Type of event (e.g., group creation, run start, run end)
- `entity_id` -- UUID of the related entity
- `entity_name` -- Display name of the related entity
- `created_at` -- Timestamp of the event
- `extra_1`, `extra_2` -- Additional context fields

## Navigating from Activity to Session

A common workflow is to start from the Activity page, identify a session of interest, then drill down:

```bash
# Step 1: Search activity for sessions by a specific TA
glow activity search --body '{"page": 1, "page_size": 10}'

# Step 2: Pick a session_id from the results and get its detail
glow session get --body '{"session_id": "abc-123"}'

# Step 3: Drill into a specific group
glow group get --body '{"group_id": "group-uuid"}'
```

## Exporting

The export endpoint requires a `target_session_id` and returns a denormalized ZIP:

```bash
curl -X POST https://<your-instance>/v5/session/export \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"target_session_id": "session-uuid"}'
```

The response includes `content` (base64-encoded), `file_name`, `mime_type`, and `row_count`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Get session detail | `glow session get` | `POST /session/get` |
| Export session data | `glow session export` | `POST /session/export` |
| Refresh caches | -- | `POST /session/refresh` |

## Related

- [Session API Reference](/glow/session/api)
- [Session CLI Reference](/glow/session/cli)
- [Activity Guide](/glow/activity/guide) -- find sessions via activity search
- [Group Guide](/glow/group/guide) -- drill into a specific generation group