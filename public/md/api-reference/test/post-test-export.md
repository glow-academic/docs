# `POST` `/test/export`

# `POST` `/test/export`

Export Test

Artifact-level test export.

Dispatches on ``body.view`` to per-view exports and returns
``\{file_id, file_name, row_count\}``. Client downloads via
``/api/test/download/\{file_id\}`` (BFF) → ``/test/file/download``.

## Request Body (`ExportTestApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `view` | `string` | No | View discriminator: 'single' | 'benchmark' | 'invocation' |
| `test_id` | `string` | No | UUID of the target test (required for 'single' and 'invocation') |
| `invocation_id` | `string` | No | UUID of the target invocation entry (optional for 'invocation') |
| `draft_id` | `string` | No | Optional draft id for 'invocation' view |
| `mode` | `string` | No | Optional sub-mode within a view. Currently recognized: view=reports → mode='brightspace' (gradebook CSV only); view=home → mode='certificate' (PDF cert only) or 'attempts' (CSV only). Default (None) returns the full per-view bundle. |

## Response (`ExportTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export bytes |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of data rows in the export |
