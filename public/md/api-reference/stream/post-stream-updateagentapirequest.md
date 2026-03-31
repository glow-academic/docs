# `POST` `/stream/UpdateAgentApiRequest`

Schema: UpdateAgentApiRequest

## Request Body (`UpdateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`UpdateAgentItem`](/api-reference/stream/types#updateagentitem)[] | Yes | List of agents to update |

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