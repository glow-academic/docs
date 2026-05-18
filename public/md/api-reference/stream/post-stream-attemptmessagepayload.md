# `POST` `/stream/AttemptMessagePayload`

# `POST` `/stream/AttemptMessagePayload`

Schema: AttemptMessagePayload

## Request Body (`AttemptMessagePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | No | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the chat |
| `message` | `string` | No | Text message content |
| `text` | `string` | No | Text message content (alias for message) |
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
