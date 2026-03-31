# `POST` `/stream/PatchPersonaDraftApiResponse`

Schema: PatchPersonaDraftApiResponse

## Request Body (`PatchPersonaDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft operation succeeded |
| `draft_id` | `string` | Yes | UUID of the created or updated draft |
| `new_version` | `integer` | Yes | New draft version number after this patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`DraftFormState`](/api-reference/stream/types#draftformstate) | Yes | Complete form state after patch — client should replace local state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchpersonadraftapiresponse Schema Stream Patchpersonadraftapiresponse Post"
}
```