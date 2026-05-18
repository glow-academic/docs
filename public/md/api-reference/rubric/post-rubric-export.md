# `POST` `/rubric/export`

Export Rubrics

Render a rubric PDF and register it as a downloadable file.

## Request Body (`ExportRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to export |
| `chat_id` | `string` | No | Optional attempt chat UUID. When provided, the PDF highlights achieved/passed standards and renders per-standard feedback resolved from the chat's latest grade. Without it, an empty rubric template is returned. |

## Response (`ExportRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_resource holding the export |
| `file_name` | `string` | Yes | Suggested download file name |
| `row_count` | `integer` | Yes | Number of rows in the export (rubric standards) |