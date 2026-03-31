# `POST` `/stream/AttemptNextPayload`

Schema: AttemptNextPayload

## Request Body (`AttemptNextPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `draft_id` | `string` | No | UUID of the draft to use |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptnextpayload Schema Stream Attemptnextpayload Post"
}
```