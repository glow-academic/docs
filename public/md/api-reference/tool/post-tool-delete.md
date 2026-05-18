# `POST` `/tool/delete`

# `POST` `/tool/delete`

Delete Tool

Bulk delete tools — composable infra architecture.

## Request Body (`DeleteToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_ids` | `string`[] | No | List of tool IDs to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every tool matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `filter_creatable` | `string`[] | No | Filter by creatable flag (no-op for row filtering today; accepted for forward compatibility) |
| `filter_agent_ids` | `string`[] | No | Filter by agent UUIDs that reference these tools (no-op for row filtering today; accepted for forward compatibility) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `agent_search` | `string` | No | Search text for agent facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DeleteToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteToolResult`](/api-reference/tool/types#deletetoolresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
