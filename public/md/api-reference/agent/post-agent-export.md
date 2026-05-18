# `POST` `/agent/export`

# `POST` `/agent/export`

Export Agents

Export all agents as a clean, denormalized CSV.

## Request Body (`ExportAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent to export |

## Response (`ExportAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Total number of exported rows |
