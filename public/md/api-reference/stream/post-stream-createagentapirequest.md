# `POST` `/stream/CreateAgentApiRequest`

Schema: CreateAgentApiRequest

## Request Body (`CreateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`CreateAgentItem`](/api-reference/stream/types#createagentitem)[] | Yes | List of agents to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createagentapirequest Schema Stream Createagentapirequest Post"
}
```