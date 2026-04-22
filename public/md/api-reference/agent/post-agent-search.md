# `POST` `/agent/search`

Search Agent

Search agents — composable infra architecture.

## Request Body (`SearchAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `filter_model_ids` | `string`[] | No | — |
| `filter_tool_ids` | `string`[] | No | — |
| `department_search` | `string` | No | — |
| `model_search` | `string` | No | — |
| `tool_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `agents` | [`ListAgentApiAgent`](/api-reference/agent/types#listagentapiagent)[] | No | List of agent items |
| `department_filter` | [`ListFilterSection`](/api-reference/agent/types#listfiltersection) | No | Filter options for departments |
| `model_filter` | [`ListFilterSection`](/api-reference/agent/types#listfiltersection) | No | Filter options for models |
| `tool_filter` | [`ListFilterSection`](/api-reference/agent/types#listfiltersection) | No | Filter options for tools |
| `total_count` | `integer` | No | Total number of matching records |