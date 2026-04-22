# `POST` `/stream/DuplicateCohortApiRequest`

Schema: DuplicateCohortApiRequest

## Request Body (`DuplicateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatecohortapirequest Schema Stream Duplicatecohortapirequest Post"
}
```