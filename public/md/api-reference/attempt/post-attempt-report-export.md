# `POST` `/attempt/report/export`

# `POST` `/attempt/report/export`

Export Reports

Export all reports data as a clean, denormalized ZIP.

## Response (`ExportReportsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Base64-encoded file content |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export file |
| `row_count` | `integer` | Yes | Number of rows in the export |
