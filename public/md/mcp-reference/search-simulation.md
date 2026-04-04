# `search_simulation`

Search simulations — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_scenario_ids` | `string` | No | — |
| `filter_cohort_ids` | `string` | No | — |
| `filter_department_ids` | `string` | No | — |
| `scenario_search` | `string` | No | — |
| `cohort_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `flag_search` | `string` | No | — |
| `page_size` | `string` | No | — (default: `10`) |
| `page_offset` | `string` | No | — (default: `0`) |

## Example

```json
{
  "name": "search_simulation",
  "arguments": {}
}
```

## Related

- [Simulation Guide](/simulation)
- [API Endpoint](/api-reference/simulations/post-simulations-search)