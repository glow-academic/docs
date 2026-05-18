# `POST` `/tool/export`

Export Tools

Export all tools as a clean, denormalized CSV.

## Request Body (`ExportToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool identifier to export |

## Response (`ExportToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |