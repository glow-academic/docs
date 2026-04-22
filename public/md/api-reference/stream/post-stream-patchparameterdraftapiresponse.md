# `POST` `/stream/PatchParameterDraftApiResponse`

Schema: PatchParameterDraftApiResponse

## Request Body (`PatchParameterDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `idempotency_key` | `string` | Yes | Idempotency key for this draft operation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__parameter__types__DraftFormState`](/api-reference/stream/types#app-infra-parameter-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchparameterdraftapiresponse Schema Stream Patchparameterdraftapiresponse Post"
}
```