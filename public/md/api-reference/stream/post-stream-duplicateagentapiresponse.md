# `POST` `/stream/DuplicateAgentApiResponse`

# `POST` `/stream/DuplicateAgentApiResponse`

Schema: DuplicateAgentApiResponse

## Request Body (`DuplicateAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the duplicated agent |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

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
