# `POST` `/stream/UpdateScenarioApiResponse`

# `POST` `/stream/UpdateScenarioApiResponse`

Schema: UpdateScenarioApiResponse

## Request Body (`UpdateScenarioApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](/api-reference/stream/types#scenarioresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatescenarioapiresponse Schema Stream Updatescenarioapiresponse Post"
}
```
