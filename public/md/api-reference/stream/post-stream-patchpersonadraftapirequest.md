# `POST` `/stream/PatchPersonaDraftApiRequest`

Schema: PatchPersonaDraftApiRequest

## Request Body (`PatchPersonaDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft UUID to patch (omit to create a new draft) |
| `name` | `string` | No | Display name text (creates new name resource) |
| `name_id` | `string` | No | UUID of an existing name resource to select |
| `description` | `string` | No | Description text (creates new description resource) |
| `description_id` | `string` | No | UUID of an existing description resource to select |
| `color` | `string` | No | Hex color code (creates new resource if color_id not provided) |
| `color_id` | `string` | No | UUID of a color resource to select |
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `icon_id` | `string` | No | UUID of an icon resource to select |
| `instructions` | `string` | No | Instruction template text (creates new instruction resource) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource to select |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the persona is active (resolved to flag_id) |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `example_ids` | `string`[] | No | Existing example resource UUIDs to select |
| `department_ids` | `string`[] | No | Department UUIDs to associate |
| `departments` | `string`[] | No | Department names (resolved to UUIDs server-side) |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate |
| `parameter_fields` | `string`[] | No | Parameter field names (resolved to UUIDs server-side) |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate |
| `voices` | `string`[] | No | Voice values (resolved to UUIDs server-side) |
| `pending_ids` | `string`[] | No | Resource IDs to keep as pending (active=false on connection) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant draft |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchpersonadraftapirequest Schema Stream Patchpersonadraftapirequest Post"
}
```