# `POST` `/stream/UpdatePersonaApiRequest`

# `POST` `/stream/UpdatePersonaApiRequest`

Schema: UpdatePersonaApiRequest

## Request Body (`UpdatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`UpdatePersonaItem`](/api-reference/stream/types#updatepersonaitem)[] | Yes | List of persona items to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatepersonaapirequest Schema Stream Updatepersonaapirequest Post"
}
```
