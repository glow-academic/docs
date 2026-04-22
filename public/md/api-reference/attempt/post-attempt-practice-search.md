# `POST` `/attempt/practice/search`

Search Practice

Get paginated attempt history for practice.

## Request Body (`ListPracticeRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sort_by` | `string` | No | Sort field name |
| `sort_order` | `string` | No | Sort direction (asc or desc) |
| `page` | `integer` | No | Pagination page number |
| `page_size` | `integer` | No | Items per page |
| `simulation_search` | `string` | No | Search string for simulations |
| `scenario_search` | `string` | No | Search string for scenarios |
| `show_archived` | `boolean` | No | Include archived attempts |
| `scenario_ids` | `string`[] | No | Scenario IDs to filter by |
| `infinite_mode` | `boolean` | No | Filter by infinite mode status |

## Response (`ListPracticeResponse`)

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