# `POST` `/stream/DeleteAuthApiRequest`

# `POST` `/stream/DeleteAuthApiRequest`

Schema: DeleteAuthApiRequest

## Request Body (`DeleteAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_ids` | `string`[] | Yes | UUIDs of auth providers to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteauthapirequest Schema Stream Deleteauthapirequest Post"
}
```
