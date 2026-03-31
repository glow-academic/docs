# `POST` `/stream/PatchToolDraftApiRequest`

Schema: PatchToolDraftApiRequest

## Request Body (`PatchToolDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `expected_version` | `integer` | No | Expected draft version for concurrency |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `department_ids` | `string`[] | No | Department identifiers |
| `arg_ids` | `string`[] | No | Argument identifiers |
| `arg_position_ids` | `string`[] | No | Argument position identifiers |
| `args_output_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchtooldraftapirequest Schema Stream Patchtooldraftapirequest Post"
}
```