# `POST` `/field/export`

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
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |
