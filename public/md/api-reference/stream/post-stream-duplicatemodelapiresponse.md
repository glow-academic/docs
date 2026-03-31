# `POST` `/stream/DuplicateModelApiResponse`

Schema: DuplicateModelApiResponse

## Request Body (`DuplicateModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `model_id` | `string` | Yes | New duplicated model identifier |
| `message` | `string` | Yes | Result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatemodelapiresponse Schema Stream Duplicatemodelapiresponse Post"
}
```