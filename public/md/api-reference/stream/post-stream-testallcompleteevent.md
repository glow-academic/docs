# `POST` `/stream/TestAllCompleteEvent`

Schema: TestAllCompleteEvent

## Request Body (`TestAllCompleteEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `total_runs` | `integer` | Yes | Total number of completed runs |
| `success` | `boolean` | No | Whether all runs succeeded |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testallcompleteevent Schema Stream Testallcompleteevent Post"
}
```