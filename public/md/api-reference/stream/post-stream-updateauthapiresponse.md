# `POST` `/stream/UpdateAuthApiResponse`

Schema: UpdateAuthApiResponse

## Request Body (`UpdateAuthApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AuthResultItem`](/api-reference/stream/types#authresultitem)[] | Yes | Per-item update results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateauthapiresponse Schema Stream Updateauthapiresponse Post"
}
```