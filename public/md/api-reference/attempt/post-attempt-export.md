# `POST` `/attempt/export`

# `POST` `/attempt/export`

Export Attempt

Artifact-level attempt export.

Dispatches on ``body.view`` to per-view exports and returns
``\{file_id, file_name, row_count\}``. Client downloads via
``/api/attempt/download/\{file_id\}`` (BFF) → ``/attempt/file/download``.

## Request Body (`ExportAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `view` | `string` | No | View discriminator: 'single' | 'dashboard' | 'reports' | 'leaderboard' | 'home' | 'practice' | 'record' | 'report' |
| `attempt_id` | `string` | No | UUID of a single attempt (required for view='single') |
| `record_id` | `string` | No | UUID of the target profile (required for view='record') |
| `date_from` | `string` | No | Optional date window start |
| `date_to` | `string` | No | Optional date window end |
| `department_ids` | `string`[] | No | Optional department filter |
| `simulation_ids` | `string`[] | No | Optional simulation filter |
| `mode` | `string` | No | Optional sub-mode within a view. Currently recognized: view=reports → mode='brightspace' (gradebook CSV only); view=home → mode='certificate' (PDF cert only) or 'attempts' (CSV only). Default (None) returns the full per-view bundle. |

## Response (`ExportAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export bytes |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |
