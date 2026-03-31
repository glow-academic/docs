# `POST` `/stream/UpdateDocumentApiRequest`

Schema: UpdateDocumentApiRequest

## Request Body (`UpdateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`UpdateDocumentItem`](/api-reference/stream/types#updatedocumentitem)[] | Yes | List of documents to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatedocumentapirequest Schema Stream Updatedocumentapirequest Post"
}
```