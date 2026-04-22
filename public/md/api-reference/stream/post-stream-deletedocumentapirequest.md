# `POST` `/stream/DeleteDocumentApiRequest`

Schema: DeleteDocumentApiRequest

## Request Body (`DeleteDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `document_ids` | `string`[] | Yes | Document UUIDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletedocumentapirequest Schema Stream Deletedocumentapirequest Post"
}
```