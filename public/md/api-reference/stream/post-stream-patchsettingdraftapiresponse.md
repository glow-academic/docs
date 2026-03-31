# `POST` `/stream/PatchSettingDraftApiResponse`

Schema: PatchSettingDraftApiResponse

## Request Body (`PatchSettingDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`SettingDraftFormState`](/api-reference/stream/types#settingdraftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchsettingdraftapiresponse Schema Stream Patchsettingdraftapiresponse Post"
}
```