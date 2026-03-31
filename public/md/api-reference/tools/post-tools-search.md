# `POST` `/tools/search`

Search Tool

Search tools — composable infra architecture.

## Request Body (`SearchToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `filter_agent_ids` | `string`[] | No | — |
| `filter_creatable` | `string`[] | No | — |
| `department_search` | `string` | No | — |
| `agent_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tools` | [`ListToolApiTool`](/api-reference/tools/types#listtoolapitool)[] | No | List of tool entries |
| `department_filter` | [`ListFilterSection`](/api-reference/tools/types#listfiltersection) | No | Department filter options |
| `agent_filter` | [`ListFilterSection`](/api-reference/tools/types#listfiltersection) | No | Agent filter options |
| `creatable_filter` | [`ListFilterSection`](/api-reference/tools/types#listfiltersection) | No | Creatable filter options |
| `total_count` | `integer` | No | Total number of tools |