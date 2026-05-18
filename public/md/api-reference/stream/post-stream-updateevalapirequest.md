# `POST` `/stream/UpdateEvalApiRequest`

# `POST` `/stream/UpdateEvalApiRequest`

Schema: UpdateEvalApiRequest

## Request Body (`UpdateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`UpdateEvalItem`](/api-reference/stream/types#updateevalitem)[] | Yes | List of evals to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateevalapirequest Schema Stream Updateevalapirequest Post"
}
```
