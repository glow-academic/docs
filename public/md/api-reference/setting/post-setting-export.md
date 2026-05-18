# `POST` `/setting/export`

Export Settings

Export all settings as a clean, denormalized CSV.

## Request Body (`ExportSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_id` | `string` | No | UUID of the setting to export |

## Response (`ExportSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |