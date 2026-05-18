# `POST` `/stream/DuplicateDocumentApiRequest`

# `POST` `/stream/DuplicateDocumentApiRequest`

Schema: DuplicateDocumentApiRequest

## Request Body (`DuplicateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatedocumentapirequest Schema Stream Duplicatedocumentapirequest Post"
}
```
