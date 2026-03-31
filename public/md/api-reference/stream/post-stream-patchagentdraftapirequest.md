# `POST` `/stream/PatchAgentDraftApiRequest`

Schema: PatchAgentDraftApiRequest

## Request Body (`PatchAgentDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | No | UUID of the owning group |
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchagentdraftapirequest Schema Stream Patchagentdraftapirequest Post"
}
```