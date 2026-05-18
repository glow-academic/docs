# `POST` `/stream/DuplicateCohortApiResponse`

# `POST` `/stream/DuplicateCohortApiResponse`

Schema: DuplicateCohortApiResponse

## Request Body (`DuplicateCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Newly created cohort UUID |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatecohortapiresponse Schema Stream Duplicatecohortapiresponse Post"
}
```
