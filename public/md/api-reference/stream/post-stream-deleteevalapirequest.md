# `POST` `/stream/DeleteEvalApiRequest`

Schema: DeleteEvalApiRequest

## Request Body (`DeleteEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_ids` | `string`[] | Yes | Eval UUIDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteevalapirequest Schema Stream Deleteevalapirequest Post"
}
```