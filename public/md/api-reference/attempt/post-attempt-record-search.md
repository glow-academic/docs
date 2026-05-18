# `POST` `/attempt/record/search`

# `POST` `/attempt/record/search`

Search Record

Get record attempt history for a single profile (paginated).

## Request Body (`ListRecordRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `target_profile_id` | `string` | Yes | Target profile ID to scope data |
| `start_date` | `string` | No | Filter start date |
| `end_date` | `string` | No | Filter end date |
| `cohort_ids` | `string`[] | No | Cohort IDs to filter by |
| `department_ids` | `string`[] | No | Department IDs to filter by |
| `practice` | `boolean` | No | Filter to practice attempts only |
| `scenario_ids` | `string`[] | No | Scenario IDs to filter by |
| `infinite_mode` | `boolean` | No | Filter by infinite mode status |
| `show_archived` | `boolean` | No | Include archived attempts |
| `sort_by` | `string` | No | Sort field name |
| `sort_order` | `string` | No | Sort direction (asc or desc) |
| `page` | `integer` | No | Pagination page number |
| `page_size` | `integer` | No | Items per page |
| `simulation_search` | `string` | No | Search string for simulations |
| `scenario_search` | `string` | No | Search string for scenarios |

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
