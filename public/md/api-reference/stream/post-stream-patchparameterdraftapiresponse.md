# `POST` `/stream/PatchParameterDraftApiResponse`

Schema: PatchParameterDraftApiResponse

## Request Body (`PatchParameterDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ParameterDraftFormState`](/api-reference/stream/types#parameterdraftformstate) | No | Server-authoritative form state |

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