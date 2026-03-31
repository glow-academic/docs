# `POST` `/stream/AttemptResponseResultEvent`

Schema: AttemptResponseResultEvent

## Request Body (`AttemptResponseResultEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the response was submitted |
| `message` | `string` | No | Event message content |
| `is_correct` | `boolean` | No | Whether the response was correct |
| `response_id` | `string` | No | UUID of the saved response |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptresponseresultevent Schema Stream Attemptresponseresultevent Post"
}
```