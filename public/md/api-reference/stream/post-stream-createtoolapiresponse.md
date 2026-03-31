# `POST` `/stream/CreateToolApiResponse`

Schema: CreateToolApiResponse

## Request Body (`CreateToolApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](/api-reference/stream/types#toolresultitem)[] | Yes | List of operation results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createtoolapiresponse Schema Stream Createtoolapiresponse Post"
}
```