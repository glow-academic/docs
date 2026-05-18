# `POST` `/stream/UpdateParameterApiResponse`

# `POST` `/stream/UpdateParameterApiResponse`

Schema: UpdateParameterApiResponse

## Request Body (`UpdateParameterApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](/api-reference/stream/types#parameterresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateparameterapiresponse Schema Stream Updateparameterapiresponse Post"
}
```
