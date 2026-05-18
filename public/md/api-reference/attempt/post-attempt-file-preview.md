# `POST` `/attempt/file_preview`

Preview File

Return a PNG preview of the first page of a PDF upload.

## Request Body (`FilePreviewAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `file_id` | `string` | Yes | UUID of the files_entry to preview |

## Response

```
{}
```