# `POST` `/stream/DeleteAuthApiResponse`

Schema: DeleteAuthApiResponse

## Request Body (`DeleteAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAuthResult`](/api-reference/stream/types#deleteauthresult)[] | Yes | Per-item deletion results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteauthapiresponse Schema Stream Deleteauthapiresponse Post"
}
```