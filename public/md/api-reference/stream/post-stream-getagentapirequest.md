# `POST` `/stream/GetAgentApiRequest`

Schema: GetAgentApiRequest

## Request Body (`GetAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent to retrieve |
| `draft_id` | `string` | No | UUID of the draft to retrieve |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getagentapirequest Schema Stream Getagentapirequest Post"
}
```