# `POST` `/stream/CreateToolApiRequest`

Schema: CreateToolApiRequest

## Request Body (`CreateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`CreateToolItem`](/api-reference/stream/types#createtoolitem)[] | Yes | List of tools to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createtoolapirequest Schema Stream Createtoolapirequest Post"
}
```