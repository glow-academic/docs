# `POST` `/persona/export`

Export Personas

Export all personas as a clean, denormalized CSV.

## Request Body (`ExportPersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of a specific persona to export (omit for bulk export) |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `search` | `string` | No | Filter personas by search text |
| `scenario_ids` | `string`[] | No | Filter to personas used in these scenarios |
| `field_ids` | `string`[] | No | Filter to personas with these fields |
| `filter_department_ids` | `string`[] | No | Filter to personas in these departments |

## Response (`ExportPersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export CSV |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |