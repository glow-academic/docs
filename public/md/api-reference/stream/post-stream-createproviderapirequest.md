# `POST` `/stream/CreateProviderApiRequest`

Schema: CreateProviderApiRequest

## Request Body (`CreateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `providers` | [`CreateProviderItem`](/api-reference/stream/types#createprovideritem)[] | Yes | List of providers to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createproviderapirequest Schema Stream Createproviderapirequest Post"
}
```