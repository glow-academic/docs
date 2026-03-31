# `POST` `/stream/PatchFieldDraftApiResponse`

Schema: PatchFieldDraftApiResponse

## Request Body (`PatchFieldDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`FieldDraftFormState`](/api-reference/stream/types#fielddraftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchfielddraftapiresponse Schema Stream Patchfielddraftapiresponse Post"
}
```