# `POST` `/stream/CreateSimulationApiRequest`

# `POST` `/stream/CreateSimulationApiRequest`

Schema: CreateSimulationApiRequest

## Request Body (`CreateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulations` | [`CreateSimulationItem`](/api-reference/stream/types#createsimulationitem)[] | Yes | List of simulations to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createsimulationapirequest Schema Stream Createsimulationapirequest Post"
}
```
