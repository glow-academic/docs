# `POST` `/stream/PatchProviderDraftApiResponse`

Schema: PatchProviderDraftApiResponse

## Request Body (`PatchProviderDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ProviderDraftFormState`](/api-reference/stream/types#providerdraftformstate) | No | Server-authoritative form state |

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