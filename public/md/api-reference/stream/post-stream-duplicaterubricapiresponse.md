# `POST` `/stream/DuplicateRubricApiResponse`

Schema: DuplicateRubricApiResponse

## Request Body (`DuplicateRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Newly created rubric UUID |
| `message` | `string` | Yes | Human-readable result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicaterubricapiresponse Schema Stream Duplicaterubricapiresponse Post"
}
```