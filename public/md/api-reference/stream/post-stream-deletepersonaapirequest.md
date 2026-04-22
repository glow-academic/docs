# `POST` `/stream/DeletePersonaApiRequest`

Schema: DeletePersonaApiRequest

## Request Body (`DeletePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `ids` | `string`[] | Yes | List of persona UUIDs to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletepersonaapirequest Schema Stream Deletepersonaapirequest Post"
}
```