# `POST` `/stream/DeleteFieldApiResponse`

Schema: DeleteFieldApiResponse

## Request Body (`DeleteFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteFieldResult`](/api-reference/stream/types#deletefieldresult)[] | Yes | Per-item deletion results |

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