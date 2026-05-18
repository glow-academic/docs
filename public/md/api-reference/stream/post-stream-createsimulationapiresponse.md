# `POST` `/stream/CreateSimulationApiResponse`

# `POST` `/stream/CreateSimulationApiResponse`

Schema: CreateSimulationApiResponse

## Request Body (`CreateSimulationApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SimulationResultItem`](/api-reference/stream/types#simulationresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createsimulationapiresponse Schema Stream Createsimulationapiresponse Post"
}
```
