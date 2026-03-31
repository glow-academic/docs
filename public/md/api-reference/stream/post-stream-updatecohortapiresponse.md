# `POST` `/stream/UpdateCohortApiResponse`

Schema: UpdateCohortApiResponse

## Request Body (`UpdateCohortApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](/api-reference/stream/types#cohortresultitem)[] | Yes | List of operation results |

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