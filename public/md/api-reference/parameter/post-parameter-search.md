# `POST` `/parameter/search`

Search Parameter

Search parameters — composable infra architecture.

## Request Body (`SearchParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `scenario_ids` | `string`[] | No | — |
| `field_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `scenario_search` | `string` | No | — |
| `field_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `parameters` | [`ListParameterApiParameter`](/api-reference/parameter/types#listparameterapiparameter)[] | No | List of parameter entries |
| `scenario_filter` | [`ListFilterSection`](/api-reference/parameter/types#listfiltersection) | No | Scenario filter options |
| `field_filter` | [`ListFilterSection`](/api-reference/parameter/types#listfiltersection) | No | Field filter options |
| `department_filter` | [`ListFilterSection`](/api-reference/parameter/types#listfiltersection) | No | Department filter options |
| `total_count` | `integer` | No | Total number of parameters |