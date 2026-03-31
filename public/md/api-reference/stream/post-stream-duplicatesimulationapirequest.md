# `POST` `/stream/DuplicateSimulationApiRequest`

Schema: DuplicateSimulationApiRequest

## Request Body (`DuplicateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation to duplicate |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatesimulationapirequest Schema Stream Duplicatesimulationapirequest Post"
}
```