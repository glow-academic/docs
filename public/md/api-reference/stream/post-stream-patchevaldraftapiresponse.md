# `POST` `/stream/PatchEvalDraftApiResponse`

# `POST` `/stream/PatchEvalDraftApiResponse`

Schema: PatchEvalDraftApiResponse

## Request Body (`PatchEvalDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `idempotency_key` | `string` | No | Operation key echoed back for client correlation |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__eval__types__DraftFormState`](/api-reference/stream/types#app-infra-eval-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchevaldraftapiresponse Schema Stream Patchevaldraftapiresponse Post"
}
```
