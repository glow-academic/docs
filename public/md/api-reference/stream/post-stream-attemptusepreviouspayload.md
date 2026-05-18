# `POST` `/stream/AttemptUsePreviousPayload`

# `POST` `/stream/AttemptUsePreviousPayload`

Schema: AttemptUsePreviousPayload

## Request Body (`AttemptUsePreviousPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `previous_chat_map` | `object` | Yes | Map of chat_entry_id to attempt_chat_id |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptusepreviouspayload Schema Stream Attemptusepreviouspayload Post"
}
```
