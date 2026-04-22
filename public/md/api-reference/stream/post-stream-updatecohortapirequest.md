# `POST` `/stream/UpdateCohortApiRequest`

Schema: UpdateCohortApiRequest

## Request Body (`UpdateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`UpdateCohortItem`](/api-reference/stream/types#updatecohortitem)[] | Yes | List of cohorts to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatecohortapirequest Schema Stream Updatecohortapirequest Post"
}
```