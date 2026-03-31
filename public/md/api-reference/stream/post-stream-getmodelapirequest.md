# `POST` `/stream/GetModelApiRequest`

Schema: GetModelApiRequest

## Request Body (`GetModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getmodelapirequest Schema Stream Getmodelapirequest Post"
}
```