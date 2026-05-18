# `POST` `/stream/PatchProviderDraftApiResponse`

# `POST` `/stream/PatchProviderDraftApiResponse`

Schema: PatchProviderDraftApiResponse

## Request Body (`PatchProviderDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `idempotency_key` | `string` | No | Operation key echoed back for client correlation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__provider__types__DraftFormState`](/api-reference/stream/types#app-infra-provider-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchproviderdraftapiresponse Schema Stream Patchproviderdraftapiresponse Post"
}
```
