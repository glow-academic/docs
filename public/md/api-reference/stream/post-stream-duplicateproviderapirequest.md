# `POST` `/stream/DuplicateProviderApiRequest`

Schema: DuplicateProviderApiRequest

## Request Body (`DuplicateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | Yes | Provider identifier to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateproviderapirequest Schema Stream Duplicateproviderapirequest Post"
}
```