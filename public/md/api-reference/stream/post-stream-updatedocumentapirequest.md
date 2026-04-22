# `POST` `/stream/UpdateDocumentApiRequest`

Schema: UpdateDocumentApiRequest

## Request Body (`UpdateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`UpdateDocumentItem`](/api-reference/stream/types#updatedocumentitem)[] | Yes | List of documents to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

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