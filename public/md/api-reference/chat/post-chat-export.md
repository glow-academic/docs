# `POST` `/chat/export`

Export Chat

Export a single chat as a clean, denormalized CSV.

## Request Body (`ExportChatApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_entry_id` | `string` | Yes | — |
| `attempt_id` | `string` | No | — |
| `draft_id` | `string` | No | — |

## Response (`ExportChatApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |