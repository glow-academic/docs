# `POST` `/stream/AttemptLeavePayload`

Schema: AttemptLeavePayload

## Request Body (`AttemptLeavePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat to leave |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptleavepayload Schema Stream Attemptleavepayload Post"
}
```