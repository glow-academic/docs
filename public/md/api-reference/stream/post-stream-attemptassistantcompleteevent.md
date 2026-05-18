# `POST` `/stream/AttemptAssistantCompleteEvent`

# `POST` `/stream/AttemptAssistantCompleteEvent`

Schema: AttemptAssistantCompleteEvent

## Request Body (`AttemptAssistantCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `message_id` | `string` | Yes | UUID of the assistant message |
| `content` | `string` | No | Final assistant message content |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptassistantcompleteevent Schema Stream Attemptassistantcompleteevent Post"
}
```
