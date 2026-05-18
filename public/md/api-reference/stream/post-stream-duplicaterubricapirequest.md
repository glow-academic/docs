# `POST` `/stream/DuplicateRubricApiRequest`

# `POST` `/stream/DuplicateRubricApiRequest`

Schema: DuplicateRubricApiRequest

## Request Body (`DuplicateRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicaterubricapirequest Schema Stream Duplicaterubricapirequest Post"
}
```
