# `POST` `/test/export`

Export Test

Export test data as a clean, denormalized ZIP.

## Request Body (`ExportTestApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |

## Response (`ExportTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |