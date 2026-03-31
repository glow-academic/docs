# `POST` `/stream/GetProviderApiRequest`

Schema: GetProviderApiRequest

## Request Body (`GetProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | No | Provider unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getproviderapirequest Schema Stream Getproviderapirequest Post"
}
```