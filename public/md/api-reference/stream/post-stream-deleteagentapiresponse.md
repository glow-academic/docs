# `POST` `/stream/DeleteAgentApiResponse`

Schema: DeleteAgentApiResponse

## Request Body (`DeleteAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAgentResult`](/api-reference/stream/types#deleteagentresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteagentapiresponse Schema Stream Deleteagentapiresponse Post"
}
```