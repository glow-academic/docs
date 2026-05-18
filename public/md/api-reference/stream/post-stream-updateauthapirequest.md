# `POST` `/stream/UpdateAuthApiRequest`

# `POST` `/stream/UpdateAuthApiRequest`

Schema: UpdateAuthApiRequest

## Request Body (`UpdateAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auths` | [`UpdateAuthItem`](/api-reference/stream/types#updateauthitem)[] | Yes | List of auth providers to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateauthapirequest Schema Stream Updateauthapirequest Post"
}
```
