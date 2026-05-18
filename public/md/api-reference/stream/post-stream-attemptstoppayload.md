# `POST` `/stream/AttemptStopPayload`

# `POST` `/stream/AttemptStopPayload`

Schema: AttemptStopPayload

## Request Body (`AttemptStopPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat to stop generating |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptstoppayload Schema Stream Attemptstoppayload Post"
}
```
