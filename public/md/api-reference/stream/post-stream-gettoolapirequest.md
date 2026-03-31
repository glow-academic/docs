# `POST` `/stream/GetToolApiRequest`

Schema: GetToolApiRequest

## Request Body (`GetToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Gettoolapirequest Schema Stream Gettoolapirequest Post"
}
```