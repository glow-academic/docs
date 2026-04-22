# `POST` `/stream/DuplicateFieldApiRequest`

Schema: DuplicateFieldApiRequest

## Request Body (`DuplicateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | Yes | UUID of the field to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatefieldapirequest Schema Stream Duplicatefieldapirequest Post"
}
```