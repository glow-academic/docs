# `POST` `/stream/CreateToolApiResponse`

# `POST` `/stream/CreateToolApiResponse`

Schema: CreateToolApiResponse

## Request Body (`CreateToolApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](/api-reference/stream/types#toolresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

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
