# `POST` `/stream/CreateAuthApiRequest`

# `POST` `/stream/CreateAuthApiRequest`

Schema: CreateAuthApiRequest

## Request Body (`CreateAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auths` | [`CreateAuthItem`](/api-reference/stream/types#createauthitem)[] | Yes | List of auth providers to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createauthapirequest Schema Stream Createauthapirequest Post"
}
```
