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
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |