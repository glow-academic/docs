# `POST` `/provider/export`

Export Providers

Export all providers as a clean, denormalized CSV.

## Request Body (`ExportProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | No | Provider identifier to export |

## Response (`ExportProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |