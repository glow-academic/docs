# `POST` `/stream/DeleteRubricApiRequest`

Schema: DeleteRubricApiRequest

## Request Body (`DeleteRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_ids` | `string`[] | Yes | Rubric UUIDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleterubricapirequest Schema Stream Deleterubricapirequest Post"
}
```