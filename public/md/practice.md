# Practice

{/* DEMO_VIDEO: practice-overview */}

# Practice

<DemoVideo
  topic="practice-overview"
  caption="The practice landing — self-directed simulation cards with persona colors, best score, and a Start button that never counts against assigned-training metrics."
/>

Practice provides open-ended training sessions where TAs can practice with student personas outside of graded assignments. Unlike Home (which shows assigned simulations), Practice surfaces all available practice simulations for self-directed skill development.

![Practice page showing available simulations with retry counts and best scores](/screenshots/practice/list.png)

## What is Practice?

Practice lets TAs engage with Confused, Aggressive, Passive, and Happy student personas on their own schedule. Practice simulations are separate from assigned training -- they provide a low-stakes environment for TAs to rehearse office-hours scenarios like explaining difficult concepts, handling grade disputes, or de-escalating frustrated students.

Practice offers two views:

1. **Simulation cards** (`POST /attempt/practice`) -- Available practice simulations with progress indicators, persona details, and rubric/standard mappings.
2. **Attempt history** (`POST /attempt/search`) -- Paginated history of the TA's practice attempts with scores, scenarios, and completion data.

## Quick Start

### CLI

```bash
# Get available practice simulations
glow attempts practice

# Search practice attempt history
glow attempts search --body '{"page": 1, "page_size": 20, "sort_order": "desc"}'

# Export practice data
glow attempts export
```

### API

```bash
# Get practice simulation cards
curl -X POST https://<your-instance>/attempt/practice \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{}'

# Search practice history
curl -X POST https://<your-instance>/attempt/search \
  -H "X-Api-Key: <api-key>" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "page_size": 10,
    "sort_by": "date",
    "sort_order": "desc"
  }'
```

## Understanding the Simulation Cards

The `POST /attempt/practice` response mirrors the Home response structure:

- **`actor_name`** -- Display name of the current TA.
- **`items`** -- Array of `ChatSimulationOperational` objects for practice simulations:
  - `simulation_id`, `simulation_name`, `simulation_description` -- Simulation identity
  - `practice_id` -- UUID of the practice entry (used to start a session)
  - `practice_simulation` -- Always `true` for practice simulations
  - `color`, `icon` -- Persona display properties
  - `status` -- `"passed"`, `"in-progress"`, or `"not-started"`
  - `highest_score`, `pass_pct`, `has_passed` -- Performance data
  - `num_sessions` -- Number of practice sessions
  - `time_limit` -- Time limit in seconds
  - `scenario_ids` -- Ordered scenario list
  - `view_mode` -- Typically `"practice"`
- **`rubrics`** -- Rubric metadata with `rubric_id`, `name`, `standard_group_ids`.
- **`standard_groups`** -- Groups like "Communication Skills", "Policy Knowledge", "De-escalation" with `points` and `pass_points`.
- **`standards`** -- Individual assessment standards within each group.

{/* DEMO_VIDEO: practice-retry */}

## Retrying a practice session

<DemoVideo
  topic="practice-retry"
  caption="Re-running a finished practice attempt — same persona + scenario, fresh chat thread, num_sessions ticks up but the highest_score badge stays."
/>

![Active practice session showing the chat interface with hint button and backtrack option](/screenshots/practice/active-session.png)

## Searching Practice History

{/* DEMO_VIDEO: practice-scores */}

<DemoVideo
  topic="practice-scores"
  caption="A practice attempt result page — rubric standard breakdown, per-criterion feedback and the suggested-improvement panel side by side."
/>

![Practice results showing rubric scores, per-criterion feedback, and improvement suggestions](/screenshots/practice/results.png)

The `POST /attempt/search` endpoint returns paginated `HistoryItem` rows.

### Filters

| Filter | Field | Description |
|---|---|---|
| Simulation search | `simulation_search` | Text search by simulation name |
| Scenario search | `scenario_search` | Text search by scenario title |
| Scenario filter | `scenario_ids` | Filter by specific scenarios |
| Infinite mode | `infinite_mode` | Filter by infinite mode status |
| Archived | `show_archived` | Include archived practice attempts |
| Sorting | `sort_by`, `sort_order` | Sort by any column |
| Pagination | `page`, `page_size` | Control page size |

Each `HistoryItem` includes `attempt_id`, `simulation_name`, `score`, `score_status`, `persona_names_junction`, `scenario_titles`, `num_scenarios_completed`, and action flags (`show_view`, `show_continue`). Practice attempts are identified by `practice_simulation: true` and may include a `practice_scenario_id`.

## Practice vs. Home

| Aspect | Home | Practice |
|---|---|---|
| Purpose | Assigned training | Self-directed practice |
| Simulations | Assigned by admin/instructor | All practice-enabled simulations |
| Grading | Counts toward reports/leaderboard | May be excluded from official metrics |
| Certificate | Export includes certificate | Standard export |
| `view_mode` | `"member"` or `"instructional"` | `"practice"` |

{/* DEMO_VIDEO: practice-export */}

## Exporting practice data

<DemoVideo
  topic="practice-export"
  caption="glow attempts export from a practice context — same denormalized ZIP shape as Home, minus the official-training certificate gating."
/>

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| Get practice simulations | `glow attempts practice` | `POST /attempt/practice` |
| Search practice history | `glow attempts search` | `POST /attempt/search` |
| Export data | `glow attempts export` | `POST /attempt/export` |
| Refresh caches | -- | `POST /attempt/refresh` |

## Related

- [Practice API Reference](/api-reference/attempt)
- [Practice CLI Reference](/cli-reference/attempts)
- [Home Guide](/home) -- assigned TA training
- [Session Guide](/session) -- session detail view
