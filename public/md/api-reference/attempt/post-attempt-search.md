# `POST` `/attempt/search`

# `POST` `/attempt/search`

Search Attempt

Search attempts — composable infra architecture.

## Request Body (`SearchAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `simulation_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `practice` | `boolean` | No | — |
| `is_archived` | `boolean` | No | — |
| `infinite_mode` | `boolean` | No | — |
| `start_date` | `string` | No | — |
| `end_date` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`SearchAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `attempts` | [`SearchAttemptItem`](/api-reference/attempt/types#searchattemptitem)[] | No | Search result attempt items |
| `simulation_filter` | [`ListFilterSection`](/api-reference/attempt/types#listfiltersection) | No | Simulation filter section |
| `department_filter` | [`ListFilterSection`](/api-reference/attempt/types#listfiltersection) | No | Department filter section |
| `total_count` | `integer` | No | Total number of matching results |
