# `POST` `/stream/UpdateAgentApiRequest`

Schema: UpdateAgentApiRequest

## Request Body (`UpdateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`UpdateAgentItem`](/api-reference/stream/types#updateagentitem)[] | Yes | List of agents to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateagentapirequest Schema Stream Updateagentapirequest Post"
}
```