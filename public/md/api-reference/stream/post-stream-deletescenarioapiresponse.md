# `POST` `/stream/DeleteScenarioApiResponse`

Schema: DeleteScenarioApiResponse

## Request Body (`DeleteScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteScenarioResult`](/api-reference/stream/types#deletescenarioresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletescenarioapiresponse Schema Stream Deletescenarioapiresponse Post"
}
```