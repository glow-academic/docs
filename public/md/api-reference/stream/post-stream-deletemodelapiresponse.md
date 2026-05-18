# `POST` `/stream/DeleteModelApiResponse`

# `POST` `/stream/DeleteModelApiResponse`

Schema: DeleteModelApiResponse

## Request Body (`DeleteModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteModelResult`](/api-reference/stream/types#deletemodelresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletemodelapiresponse Schema Stream Deletemodelapiresponse Post"
}
```
