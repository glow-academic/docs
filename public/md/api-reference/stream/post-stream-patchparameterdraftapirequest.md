# `POST` `/stream/PatchParameterDraftApiRequest`

Schema: PatchParameterDraftApiRequest

## Request Body (`PatchParameterDraftApiRequest`)

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
| `field_ids` | `string`[] | No | Field identifiers |

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