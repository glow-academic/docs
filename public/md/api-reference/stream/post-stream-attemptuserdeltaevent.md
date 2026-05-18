# `POST` `/stream/AttemptUserDeltaEvent`

# `POST` `/stream/AttemptUserDeltaEvent`

Schema: AttemptUserDeltaEvent

## Request Body (`AttemptUserDeltaEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `item_id` | `string` | Yes | Audio VAD item identifier |
| `transcript` | `string` | Yes | Incremental transcription delta |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptuserdeltaevent Schema Stream Attemptuserdeltaevent Post"
}
```
