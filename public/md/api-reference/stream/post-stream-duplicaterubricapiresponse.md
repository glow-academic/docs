# `POST` `/stream/DuplicateRubricApiResponse`

Schema: DuplicateRubricApiResponse

## Request Body (`DuplicateRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Newly created rubric UUID |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

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