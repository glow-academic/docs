# `POST` `/stream/CreateAgentApiResponse`

Schema: CreateAgentApiResponse

## Request Body (`CreateAgentApiResponse-Input`)

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
  "title": "Response Createagentapiresponse Schema Stream Createagentapiresponse Post"
}
```