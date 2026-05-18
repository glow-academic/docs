# `POST` `/stream/TestJoinedEvent`

# `POST` `/stream/TestJoinedEvent`

Schema: TestJoinedEvent

## Request Body (`TestJoinedEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `success` | `boolean` | No | Whether the join succeeded |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testjoinedevent Schema Stream Testjoinedevent Post"
}
```
