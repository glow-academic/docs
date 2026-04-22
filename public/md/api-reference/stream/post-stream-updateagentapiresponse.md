# `POST` `/stream/UpdateAgentApiResponse`

Schema: UpdateAgentApiResponse

## Request Body (`UpdateAgentApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](/api-reference/stream/types#agentresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateagentapiresponse Schema Stream Updateagentapiresponse Post"
}
```