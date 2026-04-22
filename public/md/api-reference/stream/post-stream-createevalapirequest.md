# `POST` `/stream/CreateEvalApiRequest`

Schema: CreateEvalApiRequest

## Request Body (`CreateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`CreateEvalItem`](/api-reference/stream/types#createevalitem)[] | Yes | List of evals to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createevalapirequest Schema Stream Createevalapirequest Post"
}
```