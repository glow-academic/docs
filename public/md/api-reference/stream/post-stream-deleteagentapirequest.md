# `POST` `/stream/DeleteAgentApiRequest`

Schema: DeleteAgentApiRequest

## Request Body (`DeleteAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_ids` | `string`[] | Yes | UUIDs of agents to delete |

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