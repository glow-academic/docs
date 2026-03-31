# `POST` `/stream/DeleteProfileApiResponse`

Schema: DeleteProfileApiResponse

## Request Body (`DeleteProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteProfileResult`](/api-reference/stream/types#deleteprofileresult)[] | Yes | Per-item deletion results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteprofileapiresponse Schema Stream Deleteprofileapiresponse Post"
}
```