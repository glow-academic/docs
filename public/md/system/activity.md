# Activity

# Activity

Activity tracks TA engagement across your Glow instance -- sessions, logins, emulations, and per-profile usage summaries. It gives program coordinators visibility into who is actively training and who may need follow-up.

![Activity feed showing recent practice sessions with timestamps, durations, and completion status](/screenshots/activity/feed.png)

## What is Activity?

Activity provides two views of TA engagement:

1. **Summary view** (`/activity/get`) -- Aggregate counts (sessions, active profiles, logins, emulations) plus a per-profile breakdown showing each TA's session count, login count, grants, problems, and total activity.
2. **Session history** (`/activity/search`) -- Paginated table of individual sessions with details like token usage, run counts, chat counts, attempt counts, and cost.

This is the go-to resource when you need to answer questions like:
- Which TAs have logged in this week?
- How many training sessions have been completed this semester?
- Are there any sessions with problems that need to be resolved?

## Quick Start

### CLI

```bash
# Get activity summary with engagement counts
glow activity get

# Get activity for a specific date range
glow activity get --body '{"date_from": "2025-01-01", "date_to": "2025-06-30"}'

# Search session history (paginated)
glow activity search --body '{"page": 1, "page_size": 25, "sort_order": "desc"}'

# Export all activity data as a ZIP
glow activity export
```

### API

```bash
# Get activity summary
curl -X POST https://<your-instance>/v5/activity/get \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "date_from": "2025-01-01",
    "date_to": "2025-06-30",
    "department_ids": ["dept-cs"]
  }'

# Search session history
curl -X POST https://<your-instance>/v5/activity/search \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "page_size": 20,
    "sort_order": "desc",
    "active": true
  }'
```

## Filtering

| Filter | Field | Description |
|---|---|---|
| Date range | `date_from`, `date_to` | Scope activity to a time window |
| Departments | `department_ids` | Filter by academic department |
| Roles | `roles` | Filter by TA role type |
| Active sessions | `active` (search only) | Show only active or inactive sessions |
| Pagination | `page`, `page_size` (search only) | Control page size and offset |

## Understanding the Summary Response

The `ActivityResponse` from `/activity/get` includes:

- **`sessions_count`** -- Total number of training sessions in the filtered window.
- **`active_profiles_count`** -- Number of TAs who have been active.
- **`logins_count`** -- Total login events.
- **`emulations_count`** -- Total emulation events (admin viewing as a TA).
- **`profile_summary`** -- Array of `ProfileSummaryItem` with per-TA breakdowns:
  - `profile_id`, `profile_name`
  - `sessions_count`, `logins_count`, `grants_count`, `problems_count`, `activity_count`
- **`resources`** -- Profile metadata keyed by ID for hydration.
- **`analytics`** -- Filter facets for rendering dropdowns (departments, roles, date range boundaries).

## Understanding the Session History Response

The `ListActivityResponse` from `/activity/search` returns paginated session rows:

Each `SessionListItem` includes:
- `session_id`, `profile_id`, `profile_name`
- `session_created_at`, `session_updated_at`
- `active` -- whether the session is currently active
- `group_count`, `run_count` -- AI generation activity
- `chat_count`, `attempt_count`, `message_count` -- training activity
- `total_tokens`, `total_cost` -- resource consumption
- `problem_count` -- issues flagged during the session

## Resolving Problems

If a session surfaces a problem (e.g., a FERPA concern or inappropriate AI response), you can resolve it:

```bash
curl -X POST https://<your-instance>/v5/activity/resolve \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "problem_id": "problem-uuid",
    "resolved": true
  }'
```

The response confirms `problem_id`, `resolved` status, and `updated_at` timestamp.

## Refreshing and Exporting

```bash
# Refresh activity materialized views
glow activity refresh

# Export all activity data as a denormalized ZIP
glow activity export
```

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Activity summary | `glow activity get` | `POST /activity/get` |
| Session history | `glow activity search` | `POST /activity/search` |
| Resolve a problem | -- | `POST /activity/resolve` |
| Export data | `glow activity export` | `POST /activity/export` |
| Refresh caches | -- | `POST /activity/refresh` |

## Related

- [Activity API Reference](/glow/activity/api)
- [Activity CLI Reference](/glow/activity/cli)
- [Session Guide](/glow/session/guide) -- detailed view of a single session
- [Dashboard Guide](/glow/dashboard/guide) -- admin analytics hub
