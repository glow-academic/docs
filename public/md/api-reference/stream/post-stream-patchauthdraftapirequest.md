# `POST` `/stream/PatchAuthDraftApiRequest`

Schema: PatchAuthDraftApiRequest

## Request Body (`PatchAuthDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to update |
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `idempotency_key` | `string` | No | Stable idempotency key for ack/promote flows |
| `accept` | `boolean` | No | Whether to accept a pending draft when acknowledging |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `active_flag` | `boolean` | No | Whether the auth provider is active |
| `flag_id` | `string` | No | UUID of the flag option |
| `departments` | `string`[] | No | Department names to resolve |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `protocols` | `string`[] | No | Protocol values to resolve |
| `protocol_ids` | `string`[] | No | Protocol resource UUIDs |
| `slugs` | `string`[] | No | Slug values to resolve |
| `slug_ids` | `string`[] | No | Slug resource UUIDs |
| `item_ids` | `string`[] | No | Auth item UUIDs |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending where supported |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchauthdraftapirequest Schema Stream Patchauthdraftapirequest Post"
}
```