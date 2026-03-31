# `POST` `/stream/ExportSimulationApiRequest`

Schema: ExportSimulationApiRequest

## Request Body (`ExportSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | UUID of the simulation to export |
| `search` | `string` | No | Search query text |
| `filter_scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `filter_cohort_ids` | `string`[] | No | Filter by cohort UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Exportsimulationapirequest Schema Stream Exportsimulationapirequest Post"
}
```