# `POST` `/stream/CreateDocumentApiRequest`

Schema: CreateDocumentApiRequest

## Request Body (`CreateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`CreateDocumentItem`](/api-reference/stream/types#createdocumentitem)[] | Yes | List of documents to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createdocumentapirequest Schema Stream Createdocumentapirequest Post"
}
```