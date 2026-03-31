# `POST` `/stream/TestRunDeltaEvent`

Schema: TestRunDeltaEvent

## Request Body (`TestRunDeltaEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the test run |
| `content` | `string` | Yes | Incremental text update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testrundeltaevent Schema Stream Testrundeltaevent Post"
}
```