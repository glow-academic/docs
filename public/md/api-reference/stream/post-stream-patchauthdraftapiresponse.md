# `POST` `/stream/PatchAuthDraftApiResponse`

Schema: PatchAuthDraftApiResponse

## Request Body (`PatchAuthDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Stable idempotency key for ack/promote flows |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__auth__types__DraftFormState`](/api-reference/stream/types#app-infra-auth-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchauthdraftapiresponse Schema Stream Patchauthdraftapiresponse Post"
}
```