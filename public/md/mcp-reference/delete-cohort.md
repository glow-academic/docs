# `delete_cohort`

Bulk delete cohorts — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `cohort_ids` | `array` | Yes | Cohort UUIDs to delete |

## Example

```json
{
  "name": "delete_cohort",
  "arguments": {
    "cohort_ids": []
  }
}
```

## Related

- [Cohort Guide](/cohort)
- [API Endpoint](/api-reference/cohort/post-cohort-delete)