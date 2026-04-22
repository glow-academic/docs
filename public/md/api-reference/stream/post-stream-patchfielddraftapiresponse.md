# `POST` `/stream/PatchFieldDraftApiResponse`

Schema: PatchFieldDraftApiResponse

## Request Body (`PatchFieldDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | Yes | Idempotency key for this draft operation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__field__types__DraftFormState`](/api-reference/stream/types#app-infra-field-types-draftformstate) | No | Server-authoritative form state |

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