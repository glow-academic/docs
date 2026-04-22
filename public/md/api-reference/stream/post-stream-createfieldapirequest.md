# `POST` `/stream/CreateFieldApiRequest`

Schema: CreateFieldApiRequest

## Request Body (`CreateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`CreateFieldItem`](/api-reference/stream/types#createfielditem)[] | Yes | List of fields to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createfieldapirequest Schema Stream Createfieldapirequest Post"
}
```