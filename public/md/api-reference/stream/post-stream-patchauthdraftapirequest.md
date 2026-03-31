# `POST` `/stream/PatchAuthDraftApiRequest`

Schema: PatchAuthDraftApiRequest

## Request Body (`PatchAuthDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `expected_version` | `integer` | No | Expected draft version for optimistic locking |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `protocol_ids` | `string`[] | No | Protocol resource UUIDs |
| `slug_ids` | `string`[] | No | Slug resource UUIDs |
| `item_ids` | `string`[] | No | Auth item UUIDs |

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