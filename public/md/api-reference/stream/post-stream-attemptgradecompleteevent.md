# `POST` `/stream/AttemptGradeCompleteEvent`

Schema: AttemptGradeCompleteEvent

## Request Body (`AttemptGradeCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the graded chat |
| `grade_id` | `string` | No | UUID of the grade record |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptgradecompleteevent Schema Stream Attemptgradecompleteevent Post"
}
```