# `POST` `/stream/TestProgressEvent`

Schema: TestProgressEvent

## Request Body (`TestProgressEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `type` | `string` | Yes | Progress event type |
| `run_id` | `string` | No | UUID of the test run |
| `current_run` | `integer` | No | Current run index (1-based) |
| `total_runs` | `integer` | No | Total number of runs |
| `message` | `string` | No | Event message content |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testprogressevent Schema Stream Testprogressevent Post"
}
```