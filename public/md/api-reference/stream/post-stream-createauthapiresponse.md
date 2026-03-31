# `POST` `/stream/CreateAuthApiResponse`

Schema: CreateAuthApiResponse

## Request Body (`CreateAuthApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AuthResultItem`](/api-reference/stream/types#authresultitem)[] | Yes | Per-item creation results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createauthapiresponse Schema Stream Createauthapiresponse Post"
}
```