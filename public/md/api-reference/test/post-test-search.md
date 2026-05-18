# `POST` `/test/search`

# `POST` `/test/search`

Search Test

Search tests — composable infra architecture.

## Request Body (`SearchTestApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `is_archived` | `boolean` | No | — |
| `start_date` | `string` | No | — |
| `end_date` | `string` | No | — |
| `eval_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`SearchTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tests` | [`SearchTestItem`](/api-reference/test/types#searchtestitem)[] | No | Search result test items |
| `eval_filter` | [`ListFilterSection`](/api-reference/test/types#listfiltersection) | No | Eval filter section |
| `department_filter` | [`ListFilterSection`](/api-reference/test/types#listfiltersection) | No | Department filter section |
| `total_count` | `integer` | No | Total number of matching results |
