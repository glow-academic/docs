# `POST` `/stream/AttemptUserProgressEvent`

# `POST` `/stream/AttemptUserProgressEvent`

Schema: AttemptUserProgressEvent

## Request Body (`AttemptUserProgressEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `item_id` | `string` | No | Audio VAD item identifier |
| `transcript` | `string` | Yes | Current transcription text |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptuserprogressevent Schema Stream Attemptuserprogressevent Post"
}
```
