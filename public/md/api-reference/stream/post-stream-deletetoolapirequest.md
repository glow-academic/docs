# `POST` `/stream/DeleteToolApiRequest`

Schema: DeleteToolApiRequest

## Request Body (`DeleteToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_ids` | `string`[] | Yes | List of tool IDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletetoolapirequest Schema Stream Deletetoolapirequest Post"
}
```