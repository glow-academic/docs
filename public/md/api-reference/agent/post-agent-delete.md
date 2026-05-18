# `POST` `/agent/delete`

# `POST` `/agent/delete`

Delete Agent

Bulk delete agents — composable infra architecture.

## Request Body (`DeleteAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_ids` | `string`[] | No | UUIDs of agents to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every agent matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `filter_model_ids` | `string`[] | No | Filter by model UUIDs |
| `filter_tool_ids` | `string`[] | No | Filter by tool UUIDs |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `model_search` | `string` | No | Search text for model facet (no-op for row filtering) |
| `tool_search` | `string` | No | Search text for tool facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAgentResult`](/api-reference/agent/types#deleteagentresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
