# `POST` `/stream/AttemptEndPayload`

Schema: AttemptEndPayload

## Request Body (`AttemptEndPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the chat to end |
| `grade` | `boolean` | No | Whether to grade this chat |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptendpayload Schema Stream Attemptendpayload Post"
}
```