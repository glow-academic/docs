# `POST` `/stream/PatchDepartmentDraftApiRequest`

Schema: PatchDepartmentDraftApiRequest

## Request Body (`PatchDepartmentDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to update |
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `active_flag` | `boolean` | No | Whether the department is active |
| `active_flag_id` | `string` | No | UUID of the active flag resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `settings` | `string`[] | No | Setting names to resolve |
| `setting_ids` | `string`[] | No | Setting UUIDs to assign |
| `pending_ids` | `string`[] | No | Resource IDs to keep pending where supported |
| `idempotency_key` | `string` | No | Operation key for ack or retry |
| `accept` | `boolean` | No | Accept or reject dormant state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchdepartmentdraftapirequest Schema Stream Patchdepartmentdraftapirequest Post"
}
```