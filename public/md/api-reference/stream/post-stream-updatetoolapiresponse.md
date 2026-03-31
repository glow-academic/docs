# `POST` `/stream/UpdateToolApiResponse`

Schema: UpdateToolApiResponse

## Request Body (`UpdateToolApiResponse-Input`)

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
  "title": "Response Updatetoolapiresponse Schema Stream Updatetoolapiresponse Post"
}
```