# `POST` `/stream/AttemptChatEndedEvent`

# `POST` `/stream/AttemptChatEndedEvent`

Schema: AttemptChatEndedEvent

## Request Body (`AttemptChatEndedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the ended chat |
| `is_attempt_finished` | `boolean` | No | Whether the entire attempt is finished |
| `grade_id` | `string` | No | UUID of the grade record |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptchatendedevent Schema Stream Attemptchatendedevent Post"
}
```
