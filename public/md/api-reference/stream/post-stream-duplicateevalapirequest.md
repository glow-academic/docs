# `POST` `/stream/DuplicateEvalApiRequest`

# `POST` `/stream/DuplicateEvalApiRequest`

Schema: DuplicateEvalApiRequest

## Request Body (`DuplicateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | Eval UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateevalapirequest Schema Stream Duplicateevalapirequest Post"
}
```
