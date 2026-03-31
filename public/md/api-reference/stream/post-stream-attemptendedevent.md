# `POST` `/stream/AttemptEndedEvent`

Schema: AttemptEndedEvent

## Request Body (`AttemptEndedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `success` | `boolean` | Yes | Whether the attempt ended successfully |
| `all_scenarios_complete` | `boolean` | No | Whether all scenarios are complete |
| `message` | `string` | No | Event message content |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Attemptendedevent Schema Stream Attemptendedevent Post"
}
```