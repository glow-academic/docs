# `POST` `/profiles/export`

Export Profiles

Export all profiles as a clean, denormalized CSV.

## Request Body (`ExportProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_export_id` | `string` | No | UUID of the profile to export |

## Response (`ExportProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |