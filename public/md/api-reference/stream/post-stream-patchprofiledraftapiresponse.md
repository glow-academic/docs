# `POST` `/stream/PatchProfileDraftApiResponse`

# `POST` `/stream/PatchProfileDraftApiResponse`

Schema: PatchProfileDraftApiResponse

## Request Body (`PatchProfileDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Idempotency key for draft writes |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__profile__types__DraftFormState`](/api-reference/stream/types#app-infra-profile-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchprofiledraftapiresponse Schema Stream Patchprofiledraftapiresponse Post"
}
```
