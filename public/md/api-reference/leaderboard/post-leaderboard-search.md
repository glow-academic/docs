# `POST` `/leaderboard/search`

Search Leaderboard

Get leaderboard profile rows (bottom table, paginated).

## Request Body (`ListLeaderboardRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string`[] | No | Cohort IDs to filter by |
| `simulation_ids` | `string`[] | No | Simulation IDs to filter by |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `simulation_filters` | `string`[] | No | Simulation filter strings |
| `target_profile_id` | `string` | No | Target profile ID to scope data |
| `cohort_id` | `string` | No | Single cohort ID (deprecated) |
| `simulation_id` | `string` | No | Single simulation ID (deprecated) |
| `scenario_ids` | `string`[] | No | Scenario IDs to filter by |
| `search` | `string` | No | Search string for profiles |
| `sort_by` | `string` | No | Sort field name |
| `sort_order` | `string` | No | Sort direction (asc or desc) |
| `page_limit` | `integer` | No | Max items per page |
| `page_offset` | `integer` | No | Pagination offset |

## Response (`ListLeaderboardResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`LeaderboardDataRow`](/api-reference/leaderboard/types#leaderboarddatarow)[] | No | Leaderboard profile rows |
| `resources` | [`LeaderboardResources`](/api-reference/leaderboard/types#leaderboardresources) | No | Resource metadata for hydration |
| `total_count` | `integer` | No | Total number of matching records |
| `simulation_options` | [`FilterOption`](/api-reference/leaderboard/types#filteroption)[] | No | Simulation filter options |
| `profile_options` | [`FilterOption`](/api-reference/leaderboard/types#filteroption)[] | No | Profile filter options |