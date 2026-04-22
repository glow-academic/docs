# `POST` `/stream/DuplicatePersonaApiRequest`

Schema: DuplicatePersonaApiRequest

## Request Body (`DuplicatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the persona to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatepersonaapirequest Schema Stream Duplicatepersonaapirequest Post"
}
```