# `POST` `/field/export`

Export Fields

Export all fields as a clean, denormalized CSV.

## Request Body (`ExportFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field to export |

## Response (`ExportFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |