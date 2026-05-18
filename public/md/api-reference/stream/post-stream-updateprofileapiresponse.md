# `POST` `/stream/UpdateProfileApiResponse`

# `POST` `/stream/UpdateProfileApiResponse`

Schema: UpdateProfileApiResponse

## Request Body (`UpdateProfileApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ProfileResultItem`](/api-reference/stream/types#profileresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateprofileapiresponse Schema Stream Updateprofileapiresponse Post"
}
```
