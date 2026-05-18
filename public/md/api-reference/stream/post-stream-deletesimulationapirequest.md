# `POST` `/stream/DeleteSimulationApiRequest`

# `POST` `/stream/DeleteSimulationApiRequest`

Schema: DeleteSimulationApiRequest

## Request Body (`DeleteSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_ids` | `string`[] | Yes | UUIDs of simulations to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

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
