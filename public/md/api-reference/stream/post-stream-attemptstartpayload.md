# `POST` `/stream/AttemptStartPayload`

Schema: AttemptStartPayload

## Request Body (`AttemptStartPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `home_id` | `string` | No | UUID of the home resource |
| `practice_id` | `string` | No | UUID of the practice resource |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptstartpayload Schema Stream Attemptstartpayload Post"
}
```