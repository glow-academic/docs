# `POST` `/system/health/export`

# `POST` `/system/health/export`

Export Health

Export all health data as a clean, denormalized ZIP.

## Response (`ExportHealthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |
