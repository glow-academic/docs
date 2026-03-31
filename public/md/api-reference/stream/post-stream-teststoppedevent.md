# `POST` `/stream/TestStoppedEvent`

Schema: TestStoppedEvent

## Request Body (`TestStoppedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `success` | `boolean` | No | Whether the stop succeeded |
| `message` | `string` | No | Event message content |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Teststoppedevent Schema Stream Teststoppedevent Post"
}
```