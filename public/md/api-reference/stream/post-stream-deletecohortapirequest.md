# `POST` `/stream/DeleteCohortApiRequest`

Schema: DeleteCohortApiRequest

## Request Body (`DeleteCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_ids` | `string`[] | Yes | Cohort UUIDs to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletecohortapirequest Schema Stream Deletecohortapirequest Post"
}
```