# `POST` `/stream/PatchDocumentDraftApiRequest`

Schema: PatchDocumentDraftApiRequest

## Request Body (`PatchDocumentDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `files` | [`DraftFileValue`](/api-reference/stream/types#draftfilevalue)[] | No | File values to create resources |
| `file_ids` | `string`[] | No | Existing file resource UUIDs |
| `texts` | [`DraftTextValue`](/api-reference/stream/types#drafttextvalue)[] | No | Text values to create resources |
| `text_ids` | `string`[] | No | Existing text resource UUIDs |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `department_ids` | `string`[] | No | Department UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `parameter_ids` | `string`[] | No | Parameter UUIDs |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchdocumentdraftapirequest Schema Stream Patchdocumentdraftapirequest Post"
}
```