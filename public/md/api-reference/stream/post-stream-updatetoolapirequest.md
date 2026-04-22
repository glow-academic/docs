# `POST` `/stream/UpdateToolApiRequest`

Schema: UpdateToolApiRequest

## Request Body (`UpdateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`UpdateToolItem`](/api-reference/stream/types#updatetoolitem)[] | Yes | List of tools to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatetoolapirequest Schema Stream Updatetoolapirequest Post"
}
```