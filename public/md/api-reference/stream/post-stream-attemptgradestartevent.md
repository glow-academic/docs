# `POST` `/stream/AttemptGradeStartEvent`

# `POST` `/stream/AttemptGradeStartEvent`

Schema: AttemptGradeStartEvent

## Request Body (`AttemptGradeStartEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat being graded |
| `grade_id` | `string` | No | UUID of the grade record |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptgradestartevent Schema Stream Attemptgradestartevent Post"
}
```
