# `POST` `/stream/DuplicateAgentApiResponse`

Schema: DuplicateAgentApiResponse

## Request Body (`DuplicateAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the duplicated agent |
| `message` | `string` | Yes | Human-readable result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateagentapiresponse Schema Stream Duplicateagentapiresponse Post"
}
```