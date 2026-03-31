# `POST` `/stream/UpdateModelApiResponse`

Schema: UpdateModelApiResponse

## Request Body (`UpdateModelApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ModelResultItem`](/api-reference/stream/types#modelresultitem)[] | Yes | List of operation results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatemodelapiresponse Schema Stream Updatemodelapiresponse Post"
}
```