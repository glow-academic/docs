# `POST` `/test/invocation/export`

# `POST` `/test/invocation/export`

Export Invocation

Export a single invocation as a clean, denormalized CSV.

## Request Body (`ExportInvocationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocation_entry_id` | `string` | No | — |
| `draft_id` | `string` | No | — |

## Response (`ExportInvocationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Base64-encoded file content |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export file |
| `row_count` | `integer` | Yes | Number of rows in the export |
