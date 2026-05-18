# `POST` `/stream/DeleteToolApiResponse`

# `POST` `/stream/DeleteToolApiResponse`

Schema: DeleteToolApiResponse

## Request Body (`DeleteToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteToolResult`](/api-reference/stream/types#deletetoolresult)[] | Yes | List of deletion results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletetoolapiresponse Schema Stream Deletetoolapiresponse Post"
}
```
