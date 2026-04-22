# `POST` `/stream/PatchParameterDraftApiRequest`

Schema: PatchParameterDraftApiRequest

## Request Body (`PatchParameterDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft ID to update |
| `input_draft_id` | `string` | No | Legacy alias for existing draft ID to update |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `department_ids` | `string`[] | No | Department identifiers |
| `field_ids` | `string`[] | No | Field identifiers |
| `departments` | `string`[] | No | Department names to resolve |
| `parameter_fields` | `string`[] | No | Parameter field names to resolve |
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
  "title": "Response Patchparameterdraftapirequest Schema Stream Patchparameterdraftapirequest Post"
}
```