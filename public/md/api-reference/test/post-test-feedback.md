# `POST` `/test/feedback`

Create Feedback

Create test feedback for a specific tool call.

## Request Body (`CreateFeedbackApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `grade_id` | `string` | Yes | Grade entry to attach feedback to |
| `tool_call_id` | `string` | Yes | Tool call being graded |
| `standard_group_id` | `string` | Yes | Rubric standard group being scored |
| `score` | `integer` | No | Score for this criterion (1-5) |
| `feedback` | `string` | No | Feedback text |
| `run_id` | `string` | No | Run ID for audit linkage |

## Response

```
{
  "additionalProperties": true,
  "type": "object",
  "title": "Response Create Feedback Test Feedback Post"
}
```