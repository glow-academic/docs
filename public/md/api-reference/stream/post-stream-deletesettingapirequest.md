# `POST` `/stream/DeleteSettingApiRequest`

# `POST` `/stream/DeleteSettingApiRequest`

Schema: DeleteSettingApiRequest

## Request Body (`DeleteSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_ids` | `string`[] | Yes | UUIDs of settings to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletesettingapirequest Schema Stream Deletesettingapirequest Post"
}
```
