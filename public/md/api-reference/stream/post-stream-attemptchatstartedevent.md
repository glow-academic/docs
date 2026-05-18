# `POST` `/stream/AttemptChatStartedEvent`

# `POST` `/stream/AttemptChatStartedEvent`

Schema: AttemptChatStartedEvent

## Request Body (`AttemptChatStartedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the new chat |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptchatstartedevent Schema Stream Attemptchatstartedevent Post"
}
```
