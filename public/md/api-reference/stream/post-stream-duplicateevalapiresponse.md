# `POST` `/stream/DuplicateEvalApiResponse`

Schema: DuplicateEvalApiResponse

## Request Body (`DuplicateEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `eval_id` | `string` | Yes | Newly created eval UUID |
| `message` | `string` | Yes | Human-readable result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateevalapiresponse Schema Stream Duplicateevalapiresponse Post"
}
```