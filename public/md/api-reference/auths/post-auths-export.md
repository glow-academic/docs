# `POST` `/auths/export`

Export Auths

Export all auths as a clean, denormalized CSV.

## Request Body (`ExportAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | No | UUID of the auth provider to export |

## Response (`ExportAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |