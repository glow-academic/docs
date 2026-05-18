# `POST` `/stream/DuplicateSettingApiRequest`

# `POST` `/stream/DuplicateSettingApiRequest`

Schema: DuplicateSettingApiRequest

## Request Body (`DuplicateSettingApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `setting_id` | `string` | Yes | UUID of the setting to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatesettingapirequest Schema Stream Duplicatesettingapirequest Post"
}
```
