# `POST` `/stream/DuplicateSimulationApiRequest`

# `POST` `/stream/DuplicateSimulationApiRequest`

Schema: DuplicateSimulationApiRequest

## Request Body (`DuplicateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

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
