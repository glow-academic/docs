# `POST` `/stream/AttemptGradeProgressEvent`

# `POST` `/stream/AttemptGradeProgressEvent`

Schema: AttemptGradeProgressEvent

## Request Body (`AttemptGradeProgressEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat being graded |
| `grade_id` | `string` | No | UUID of the grade record |
| `resource_type` | `string` | No | Type of resource being graded |
| `entry` | `object` | No | Grade criterion entry data |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptgradeprogressevent Schema Stream Attemptgradeprogressevent Post"
}
```
