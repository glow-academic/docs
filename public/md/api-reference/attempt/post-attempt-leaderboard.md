# `POST` `/attempt/leaderboard`

# `POST` `/attempt/leaderboard`

Get Leaderboard

## Request Body (`LeaderboardRequest`)

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
| `search` | `string` | No | Profile name search (ILIKE) for filter dropdowns |
| `sort_by` | `string` | No | Sort field name |
| `sort_order` | `string` | No | Sort direction (asc or desc) |

## Response (`LeaderboardResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sections` | [`LeaderboardSections`](/api-reference/attempt/types#leaderboardsections) | No | Computed leaderboard sections |
| `resources` | [`LeaderboardResources`](/api-reference/attempt/types#leaderboardresources) | No | Resource metadata for hydration |
| `analytics` | [`AnalyticsFacets`](/api-reference/attempt/types#analyticsfacets) | No | Inline analytics facets for SSR |
| `data` | [`LeaderboardDataRow`](/api-reference/attempt/types#leaderboarddatarow)[] | No | Top-25% leaderboard rows |
| `total_count` | `integer` | No | Total number of profiles matching filters (top 25% slice) |
| `simulation_options` | [`FilterOption`](/api-reference/attempt/types#filteroption)[] | No | Simulation filter options |
| `profile_options` | [`FilterOption`](/api-reference/attempt/types#filteroption)[] | No | Profile filter options |
