# `POST` `/stream/DuplicateSimulationApiResponse`

Schema: DuplicateSimulationApiResponse

## Request Body (`DuplicateSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `simulation_id` | `string` | Yes | UUID of the duplicated simulation |
| `message` | `string` | Yes | Human-readable result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatesimulationapiresponse Schema Stream Duplicatesimulationapiresponse Post"
}
```