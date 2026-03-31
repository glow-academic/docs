# Reports

Reports provides structured training analytics on TA performance across your institution. It computes overview tables, leaderboard rankings, trend charts, and detailed attempt history -- all filterable by date range, cohort, department, simulation, and scenario.

![Reports list showing learner profiles with aggregate scores and attempt counts](/screenshots/reports/list.png)

## What is Reports?

Reports is the analytics engine that aggregates TA training data into five computed sections:

- **Header Metrics** -- Total attempts, average score, completion percentage, first-attempt pass rate (each with trend data and hover tooltips).
- **Overview** -- Per-simulation breakdown showing attempts, completed attempts, passed attempts, average score, completion percentage, and pass rate.
- **Leaderboard** -- Ranked TA profiles with metrics like average score, highest score, total attempts, and first-attempt pass rate.
- **Trends** -- Time-series chart data with daily aggregations of attempts, scores, and pass rates.
- **History** -- Paginated attempt rows with scores, chat counts, and completion details.

![Individual report showing per-attempt scores, rubric standard breakdowns, and improvement trends](/screenshots/reports/profile-detail.png)

Reports is designed for program coordinators who need to evaluate how a cohort of TAs is performing across Confused, Aggressive, Passive, and Happy student persona simulations.

## Quick Start

### CLI

```bash
# Fetch the full reports bundle
glow reports search

# Fetch reports filtered by cohort and date range
glow reports search --body '{"cohort_ids": ["fall-2025-cs101"], "start_date": "2025-01-01", "end_date": "2025-06-30"}'

# Export all reports data as a ZIP
glow reports export
```

### API

```bash
# Get reports with filters
curl -X POST https://<your-instance>/v5/reports/search \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "department_ids": ["dept-cs"],
    "simulation_ids": ["sim-confused-student"],
    "start_date": "2025-01-01",
    "end_date": "2025-06-30",
    "sort_by": "average_score",
    "sort_order": "desc",
    "page_limit": 50
  }'
```

## Filtering

| Filter | Field | Description |
|---|---|---|
| Date range | `start_date`, `end_date` | Scope to a semester or custom window |
| Cohorts | `cohort_ids` | Filter by training cohort |
| Simulations | `simulation_ids` | Filter by specific persona simulations |
| Departments | `department_ids` | Filter by academic department |
| Roles | `roles` | Filter by TA role type |
| Scenarios | `scenario_ids` | Filter by individual scenarios |
| Profiles | `profile_ids` | Scope to specific TA profiles |
| Single TA | `target_profile_id` | View data for one TA |
| Search | `search` | Text search across profiles |
| Pagination | `page_limit`, `page_offset` | Control result page size |

## Understanding the Response

The `ReportsResponse` contains:

### `sections`

The computed report sections:

- **`header_metrics`** -- `total_attempts`, `average_score`, `completion_percentage`, `first_attempt_pass_rate`. Each metric includes `current_value`, `has_data`, `data_points`, and `hover` details (mean, median, mode, count, percent).
- **`overview`** -- Array of `ReportsOverviewRow` grouped by simulation: `simulation_id`, `attempts`, `completed_attempts`, `passed_attempts`, `average_score`, `pass_rate`.
- **`leaderboard`** -- Array of `ReportsLeaderboardRow` with `rank`, `profile_id`, `total_attempts`, `average_score`, `highest_score`, plus detailed `profile_metrics` (messages per session, session efficiency, stagnation rate, time spent).
- **`trends`** -- Array of `ReportsTrendPoint` with `date`, `attempts`, `average_score`, `pass_rate` for charting.
- **`history`** -- Array of `ReportsHistoryRow` with `attempt_id`, `score_percent`, `has_passed`, `num_chats`, `total_time_seconds`.

### `resources`

Resource metadata keyed by ID for hydrating IDs into display names:

- `simulations`, `profiles`, `scenarios`, `cohorts`, `personas`, `rubrics`

### Filter options

- `simulation_options`, `profile_options`, `scenario_options` -- dropdown options with `value`, `label`, and `count`.

## Refreshing and Exporting

```bash
# Refresh materialized views and caches
curl -X POST https://<your-instance>/v5/reports/refresh \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>"

# Export all reports data as a denormalized ZIP
curl -X POST https://<your-instance>/v5/reports/export \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>"
```

The export returns `content` (base64-encoded), `file_name`, `mime_type`, and `row_count`.

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Get reports data | `glow reports search` | `POST /reports/search` |
| Export data | `glow reports export` | `POST /reports/export` |
| Refresh caches | -- | `POST /reports/refresh` |
| View API docs | -- | `POST /reports/docs` |

## Related

- [Reports API Reference](/glow/reports/api)
- [Reports CLI Reference](/glow/reports/cli)
- [Dashboard Guide](/glow/dashboard/guide) -- admin analytics hub
- [Leaderboard Guide](/glow/leaderboard/guide) -- TA performance rankings