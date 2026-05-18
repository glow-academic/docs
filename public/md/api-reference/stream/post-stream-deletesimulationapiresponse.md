# `POST` `/stream/DeleteSimulationApiResponse`

# `POST` `/stream/DeleteSimulationApiResponse`

Schema: DeleteSimulationApiResponse

## Request Body (`DeleteSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteSimulationResult`](/api-reference/stream/types#deletesimulationresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletesimulationapiresponse Schema Stream Deletesimulationapiresponse Post"
}
```
