# `POST` `/stream/TestRunCompleteEvent`

Schema: TestRunCompleteEvent

## Request Body (`TestRunCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the test run |
| `original_run_resource_id` | `string` | No | Resource ID of the original run |
| `tool_calls` | `object`[] | No | Tool calls made during the run |
| `current_run` | `integer` | Yes | Current run index (1-based) |
| `total_runs` | `integer` | Yes | Total number of runs in this invocation |
| `remaining_runs` | `integer` | Yes | Number of runs still pending |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testruncompleteevent Schema Stream Testruncompleteevent Post"
}
```