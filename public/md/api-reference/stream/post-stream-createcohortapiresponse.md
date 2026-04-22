# `POST` `/stream/CreateCohortApiResponse`

Schema: CreateCohortApiResponse

## Request Body (`CreateCohortApiResponse-Input`)

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
  "title": "Response Createcohortapiresponse Schema Stream Createcohortapiresponse Post"
}
```