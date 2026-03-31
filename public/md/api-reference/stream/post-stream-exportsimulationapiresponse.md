# `POST` `/stream/ExportSimulationApiResponse`

Schema: ExportSimulationApiResponse

## Request Body (`ExportSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Total number of exported rows |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Exportsimulationapiresponse Schema Stream Exportsimulationapiresponse Post"
}
```