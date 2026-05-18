# `POST` `/stream/DeleteAgentApiRequest`

# `POST` `/stream/DeleteAgentApiRequest`

Schema: DeleteAgentApiRequest

## Request Body (`DeleteAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_ids` | `string`[] | Yes | UUIDs of agents to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteagentapirequest Schema Stream Deleteagentapirequest Post"
}
```
