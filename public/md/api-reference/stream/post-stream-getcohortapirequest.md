# `POST` `/stream/GetCohortApiRequest`

Schema: GetCohortApiRequest

## Request Body (`GetCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Cohort UUID to retrieve |
| `descriptions_search` | `string` | No | Search query for descriptions |
| `simulation_search` | `string` | No | Search query for simulations |
| `simulation_show_selected` | `boolean` | No | Whether to show only selected simulations |
| `profile_search` | `string` | No | Search query for profiles |
| `profile_show_selected` | `boolean` | No | Whether to show only selected profiles |
| `draft_id` | `string` | No | Draft UUID to load from |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getcohortapirequest Schema Stream Getcohortapirequest Post"
}
```