# `POST` `/stream/ExportProviderApiResponse`

Schema: ExportProviderApiResponse

## Request Body (`ExportProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Exportproviderapiresponse Schema Stream Exportproviderapiresponse Post"
}
```