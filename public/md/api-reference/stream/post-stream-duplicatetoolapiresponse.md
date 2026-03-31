# `POST` `/stream/DuplicateToolApiResponse`

Schema: DuplicateToolApiResponse

## Request Body (`DuplicateToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `tool_id` | `string` | Yes | New duplicated tool identifier |
| `message` | `string` | Yes | Result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatetoolapiresponse Schema Stream Duplicatetoolapiresponse Post"
}
```