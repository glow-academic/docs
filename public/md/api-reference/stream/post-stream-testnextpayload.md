# `POST` `/stream/TestNextPayload`

Schema: TestNextPayload

## Request Body (`TestNextPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testnextpayload Schema Stream Testnextpayload Post"
}
```