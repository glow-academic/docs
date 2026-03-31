# `POST` `/stream/TestRunStartEvent`

Schema: TestRunStartEvent

## Request Body (`TestRunStartEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the test run |
| `original_run_resource_id` | `string` | No | Resource ID of the original run |
| `current_run` | `integer` | Yes | Current run index (1-based) |
| `total_runs` | `integer` | Yes | Total number of runs in this invocation |
| `created_at` | `string` | Yes | ISO 8601 timestamp of run creation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testrunstartevent Schema Stream Testrunstartevent Post"
}
```