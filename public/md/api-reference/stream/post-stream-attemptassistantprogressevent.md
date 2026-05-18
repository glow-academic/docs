# `POST` `/stream/AttemptAssistantProgressEvent`

# `POST` `/stream/AttemptAssistantProgressEvent`

Schema: AttemptAssistantProgressEvent

## Request Body (`AttemptAssistantProgressEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `content_type` | `string` | Yes | Content type: 'delta' or 'audio' |
| `content` | `string` | No | Text content delta |
| `audio` | `any` | No | Audio content payload |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptassistantprogressevent Schema Stream Attemptassistantprogressevent Post"
}
```
