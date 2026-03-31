# `POST` `/stream/CreateSimulationApiRequest`

Schema: CreateSimulationApiRequest

## Request Body (`CreateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulations` | [`CreateSimulationItem`](/api-reference/stream/types#createsimulationitem)[] | Yes | List of simulations to create |

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