# `POST` `/stream/DeleteSimulationApiRequest`

Schema: DeleteSimulationApiRequest

## Request Body (`DeleteSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_ids` | `string`[] | Yes | UUIDs of simulations to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletesimulationapirequest Schema Stream Deletesimulationapirequest Post"
}
```