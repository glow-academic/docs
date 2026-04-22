# `POST` `/stream/UpdateCohortApiResponse`

Schema: UpdateCohortApiResponse

## Request Body (`UpdateCohortApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](/api-reference/stream/types#cohortresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatecohortapiresponse Schema Stream Updatecohortapiresponse Post"
}
```