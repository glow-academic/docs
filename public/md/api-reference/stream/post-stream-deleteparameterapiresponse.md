# `POST` `/stream/DeleteParameterApiResponse`

# `POST` `/stream/DeleteParameterApiResponse`

Schema: DeleteParameterApiResponse

## Request Body (`DeleteParameterApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteParameterResult`](/api-reference/stream/types#deleteparameterresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteparameterapiresponse Schema Stream Deleteparameterapiresponse Post"
}
```
