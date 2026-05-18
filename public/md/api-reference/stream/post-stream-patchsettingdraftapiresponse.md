# `POST` `/stream/PatchSettingDraftApiResponse`

# `POST` `/stream/PatchSettingDraftApiResponse`

Schema: PatchSettingDraftApiResponse

## Request Body (`PatchSettingDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__setting__types__DraftFormState`](/api-reference/stream/types#app-infra-setting-types-draftformstate) | No | Server-authoritative form state |

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
