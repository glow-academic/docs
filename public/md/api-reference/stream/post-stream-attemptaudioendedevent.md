# `POST` `/stream/AttemptAudioEndedEvent`

# `POST` `/stream/AttemptAudioEndedEvent`

Schema: AttemptAudioEndedEvent

## Request Body (`AttemptAudioEndedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `success` | `boolean` | Yes | Whether the voice session ended cleanly |
| `message` | `string` | No | Event message content |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptaudioendedevent Schema Stream Attemptaudioendedevent Post"
}
```
