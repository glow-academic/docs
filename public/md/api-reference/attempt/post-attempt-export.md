# `POST` `/attempt/export`

# `POST` `/attempt/export`

Export Attempt

Export attempt data as a clean, denormalized ZIP.

## Request Body (`ExportAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |

## Response (`ExportAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |
