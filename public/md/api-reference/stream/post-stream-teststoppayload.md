# `POST` `/stream/TestStopPayload`

Schema: TestStopPayload

## Request Body (`TestStopPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to stop |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Teststoppayload Schema Stream Teststoppayload Post"
}
```