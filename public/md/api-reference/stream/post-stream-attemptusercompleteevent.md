# `POST` `/stream/AttemptUserCompleteEvent`

# `POST` `/stream/AttemptUserCompleteEvent`

Schema: AttemptUserCompleteEvent

## Request Body (`AttemptUserCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `message_id` | `string` | Yes | UUID of the message |
| `content` | `string` | Yes | Final message content |
| `created_at` | `string` | Yes | ISO 8601 timestamp of message creation |
| `item_id` | `string` | No | Audio VAD item identifier |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptusercompleteevent Schema Stream Attemptusercompleteevent Post"
}
```
