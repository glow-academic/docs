# `POST` `/stream/CreateSettingApiRequest`

Schema: CreateSettingApiRequest

## Request Body (`CreateSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `settings` | [`CreateSettingItem`](/api-reference/stream/types#createsettingitem)[] | Yes | List of settings to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createsettingapirequest Schema Stream Createsettingapirequest Post"
}
```