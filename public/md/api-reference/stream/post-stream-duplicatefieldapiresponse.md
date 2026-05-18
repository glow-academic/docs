# `POST` `/stream/DuplicateFieldApiResponse`

# `POST` `/stream/DuplicateFieldApiResponse`

Schema: DuplicateFieldApiResponse

## Request Body (`DuplicateFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `field_id` | `string` | Yes | UUID of the newly created field |
| `message` | `string` | Yes | Result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatefieldapiresponse Schema Stream Duplicatefieldapiresponse Post"
}
```
