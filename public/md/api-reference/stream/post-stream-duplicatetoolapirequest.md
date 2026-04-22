# `POST` `/stream/DuplicateToolApiRequest`

Schema: DuplicateToolApiRequest

## Request Body (`DuplicateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Tool identifier to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatetoolapirequest Schema Stream Duplicatetoolapirequest Post"
}
```