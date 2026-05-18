# `POST` `/attempt/search`

# `POST` `/attempt/search`

Search Attempt

Search paginated attempt history. Canonical for all view contexts.

## Request Body (`SearchAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `target_profile_id` | `string` | No | Scope to a single profile (record-style) |
| `profile_ids` | `string`[] | No | Filter to specific profiles (intersected with visible set) |
| `cohort_ids` | `string`[] | No | Cohort IDs to filter by |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `role_ids` | `string`[] | No | Role resource IDs to filter profiles by |
| `simulation_ids` | `string`[] | No | Simulation IDs to filter by |
| `scenario_ids` | `string`[] | No | Scenario IDs to filter by |
| `practice` | `boolean` | No | True=practice-only, False=general-only, None=both |
| `infinite_mode` | `boolean` | No | Filter by infinite mode status |
| `show_archived` | `boolean` | No | Include archived attempts |
| `start_date` | `string` | No | Filter start date (ISO) |
| `end_date` | `string` | No | Filter end date (ISO) |
| `simulation_search` | `string` | No | Substring match on simulation_name |
| `scenario_search` | `string` | No | Substring match on scenario titles |
| `profile_search` | `string` | No | Substring match on profile_name |
| `sort_by` | `string` | No | Sort field |
| `sort_order` | `string` | No | Sort direction (asc or desc) |
| `page` | `integer` | No | Page number |
| `page_size` | `integer` | No | Items per page |

## Response (`HistoryResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `data` | [`HistoryItem`](/api-reference/attempt/types#historyitem)[] | No | List of history items |
| `total_count` | `integer` | No | Total number of matching records |
| `page` | `integer` | No | Current page number |
| `page_size` | `integer` | No | Items per page |
| `total_pages` | `integer` | No | Total number of pages |
| `simulation_options` | [`FilterOption`](/api-reference/attempt/types#filteroption)[] | No | Filter options for simulations |
| `scenario_options` | [`FilterOption`](/api-reference/attempt/types#filteroption)[] | No | Filter options for scenarios |
| `profile_options` | [`FilterOption`](/api-reference/attempt/types#filteroption)[] | No | Filter options for profiles |
