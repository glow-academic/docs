# `POST` `/stream/AttemptMessagePayload`

Schema: AttemptMessagePayload

## Request Body (`AttemptMessagePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the chat |
| `message` | `string` | Yes | Text message content |
| `parent_message_id` | `string` | No | UUID of the parent message for threading |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptmessagepayload Schema Stream Attemptmessagepayload Post"
}
```