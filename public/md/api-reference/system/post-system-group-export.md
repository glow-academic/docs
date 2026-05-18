# `POST` `/system/group/export`

# `POST` `/system/group/export`

Export Group

Export group data as a clean, denormalized ZIP.

## Request Body (`ExportGroupApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | — |

## Response (`ExportGroupApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |
