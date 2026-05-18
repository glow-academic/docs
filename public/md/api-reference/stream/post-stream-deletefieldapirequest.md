# `POST` `/stream/DeleteFieldApiRequest`

# `POST` `/stream/DeleteFieldApiRequest`

Schema: DeleteFieldApiRequest

## Request Body (`DeleteFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `field_ids` | `string`[] | Yes | UUIDs of fields to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletefieldapirequest Schema Stream Deletefieldapirequest Post"
}
```
