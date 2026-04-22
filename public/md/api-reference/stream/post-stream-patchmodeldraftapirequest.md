# `POST` `/stream/PatchModelDraftApiRequest`

Schema: PatchModelDraftApiRequest

## Request Body (`PatchModelDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `draft_id` | `string` | No | Existing draft ID to update |
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `idempotency_key` | `string` | No | Operation key for accept/reject style ack |
| `accept` | `boolean` | No | Accept or reject when idempotency_key is supplied |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `value` | `string` | No | Direct model value |
| `value_id` | `string` | No | Value resource identifier |
| `provider` | `string` | No | Provider name to match |
| `provider_id` | `string` | No | Provider identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `active_flag` | `boolean` | No | Whether the model is active |
| `active_flag_id` | `string` | No | Active flag resource identifier |
| `modalities_enabled_flag_id` | `string` | No | Modalities enabled flag resource identifier |
| `temperature_enabled_flag_id` | `string` | No | Temperature enabled flag resource identifier |
| `pricing_enabled_flag_id` | `string` | No | Pricing enabled flag resource identifier |
| `voices_enabled_flag_id` | `string` | No | Voices enabled flag resource identifier |
| `reasoning_levels_enabled_flag_id` | `string` | No | Reasoning levels enabled flag resource identifier |
| `qualities_enabled_flag_id` | `string` | No | Qualities enabled flag resource identifier |
| `departments` | `string`[] | No | Department names to match |
| `department_ids` | `string`[] | No | Department identifiers |
| `modalities` | `string`[] | No | Modality labels to match |
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing` | `string`[] | No | Pricing types to match |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `qualities` | `string`[] | No | Quality labels to match |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_levels` | `string`[] | No | Reasoning level labels to match |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_levels` | `string`[] | No | Temperature level labels to match |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `voices` | `string`[] | No | Voice labels to create or match |
| `voice_ids` | `string`[] | No | Voice identifiers |
| `pending_ids` | `string`[] | No | Pending resource identifiers |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchmodeldraftapirequest Schema Stream Patchmodeldraftapirequest Post"
}
```