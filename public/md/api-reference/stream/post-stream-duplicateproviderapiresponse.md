# `POST` `/stream/DuplicateProviderApiResponse`

Schema: DuplicateProviderApiResponse

## Request Body (`DuplicateProviderApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `provider_id` | `string` | Yes | New duplicated provider identifier |
| `message` | `string` | Yes | Result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateproviderapiresponse Schema Stream Duplicateproviderapiresponse Post"
}
```