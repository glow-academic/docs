# `POST` `/stream/TestLeavePayload`

Schema: TestLeavePayload

## Request Body (`TestLeavePayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to leave |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testleavepayload Schema Stream Testleavepayload Post"
}
```