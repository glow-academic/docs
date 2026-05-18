# `POST` `/stream/DuplicateModelApiRequest`

# `POST` `/stream/DuplicateModelApiRequest`

Schema: DuplicateModelApiRequest

## Request Body (`DuplicateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | Yes | Model identifier to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatemodelapirequest Schema Stream Duplicatemodelapirequest Post"
}
```
