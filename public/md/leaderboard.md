# Leaderboard

{/* DEMO_VIDEO: leaderboard — replace public/demos/leaderboard.mp4 */}

# Leaderboard

<DemoVideo topic="leaderboard" />

The Leaderboard ranks TAs by training performance, highlighting top performers and awarding accolades. It helps program coordinators identify which TAs are excelling and which may need additional support with office-hours simulations.

![Leaderboard showing ranked learners with scores, pass rates, and improvement indicators](/screenshots/leaderboard/rankings.png)

## What is Leaderboard?

Leaderboard computes ranked profiles from training data and organizes them into sections:

- **Header Metrics** -- Total profiles, total attempts, average score, perfect scores.
- **Rankings** -- A sortable table of TAs ranked by composite metrics.
- **Accolades** -- Awards for specific achievements (highest scorer, perfect score, longest conversation, best response times, quickest pass, most persistent, marathon runner, rapid riser).
- **Trends** -- Trend data for tracking improvement over time.

Leaderboard answers questions like:
- Which TAs scored highest on the Aggressive Student simulation this semester?
- Who achieved a perfect score on the De-escalation rubric?
- Which TAs are improving most rapidly?

## Quick Start

### CLI

```bash
# Get the full leaderboard with header metrics and accolades
glow attempts leaderboard

# Get leaderboard filtered by cohort and date range
glow attempts leaderboard --body '{"cohort_ids": ["fall-2025-cs101"], "start_date": "2025-01-01", "end_date": "2025-06-30"}'

# Search leaderboard rankings (paginated, sortable)
glow attempts search --body '{"sort_by": "highest_score_avg", "sort_order": "desc", "page_limit": 25}'

# Export leaderboard data
glow attempts export
```

### API

```bash
# Get leaderboard summary
curl -X POST https://<your-instance>/attempt/leaderboard \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "department_ids": ["dept-cs"],
    "start_date": "2025-01-01",
    "end_date": "2025-06-30"
  }'

# Search ranked profiles
curl -X POST https://<your-instance>/attempt/search \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "simulation_ids": ["sim-confused-student"],
    "sort_by": "highest_score_avg",
    "sort_order": "desc",
    "page_limit": 20,
    "page_offset": 0
  }'
```

## Filtering

| Filter | Field | Description |
|---|---|---|
| Date range | `start_date`, `end_date` | Scope to a semester or custom window |
| Cohorts | `cohort_ids` | Filter by training cohort |
| Departments | `department_ids` | Filter by academic department |
| Simulations | `simulation_ids` (search) | Filter by specific simulations |
| Scenarios | `scenario_ids` (search) | Filter by individual scenarios |
| Profile search | `search` (search) | Text search across TA names |
| Single TA | `target_profile_id` | Highlight a specific TA |
| Sorting | `sort_by`, `sort_order` | Sort by any metric column |
| Pagination | `page_limit`, `page_offset` | Control page size |

## Understanding the Leaderboard Summary

The `POST /attempt/leaderboard` response includes:

### `sections`

- **`header_metrics`** -- `total_profiles`, `total_attempts`, `average_score`, `perfect_scores`. Each metric has `current_value`, `has_data`, and trend data.
- **`rankings`**, **`accolades`**, **`trends`**, **`filters`** -- Section status objects indicating `has_data` and `status`.
- **`accolade_winners`** -- Named accolade winners:
  - `highest_scorer` -- TA with the top average score
  - `perfect_score` -- First TA to achieve 100%
  - `longest_convo` -- Deepest engagement with a student persona
  - `response_times` -- Fastest persona response times
  - `quickest_pass` -- Fastest time to pass a simulation
  - `the_persistent` -- Most total attempts
  - `marathon_runner` -- Most time invested
  - `rapid_riser` -- Steepest improvement curve

Each winner includes `profile_id`, `name`, `value`, and `details`.

### `resources`

Resource metadata keyed by ID: `profiles`, `simulations`, `scenarios`.

## Understanding Search Results

The `POST /attempt/search` response returns `LeaderboardDataRow` items:

- `rank` -- Position on the leaderboard
- `profile_id`, `name` -- TA identity
- `simulation_ids`, `scenario_ids` -- Associated training content
- `metrics_entry` -- Per-row metrics:
  - `total_attempts` -- Total training attempts
  - `highest_score_avg` -- Average of highest scores
  - `messages_per_session` -- Engagement depth
  - `persona_response_seconds` -- Response time to student personas
  - `time_spent_minutes` -- Total training time
  - `improvement_rate_per_day` -- Daily improvement rate
  - `perfect_score_count` -- Number of perfect scores
  - `quickest_pass_minutes` -- Fastest pass time

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Leaderboard summary | `glow attempts leaderboard` | `POST /attempt/leaderboard` |
| Search rankings | `glow attempts search` | `POST /attempt/search` |
| Export data | `glow attempts export` | `POST /attempt/export` |
| Refresh caches | -- | `POST /attempt/refresh` |

## Related

- [Leaderboard API Reference](/api-reference/attempt)
- [Leaderboard CLI Reference](/cli-reference/attempts)
- [Reports Guide](/reports) -- full training reports
- [Record Guide](/record) -- single-TA performance view
