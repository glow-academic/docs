# `POST` `/stream/DeleteFieldApiResponse`

Schema: DeleteFieldApiResponse

## Request Body (`DeleteFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteFieldResult`](/api-reference/stream/types#deletefieldresult)[] | Yes | Per-item deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletefieldapiresponse Schema Stream Deletefieldapiresponse Post"
}
```