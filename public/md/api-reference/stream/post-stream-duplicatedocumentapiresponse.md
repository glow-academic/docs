# `POST` `/stream/DuplicateDocumentApiResponse`

Schema: DuplicateDocumentApiResponse

## Request Body (`DuplicateDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Newly created document UUID |
| `message` | `string` | Yes | Human-readable result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatedocumentapiresponse Schema Stream Duplicatedocumentapiresponse Post"
}
```