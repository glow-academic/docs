# `POST` `/model/export`

Export Models

Export all models as a clean, denormalized CSV.

## Request Body (`ExportModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model identifier to export |

## Response (`ExportModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |