# `POST` `/stream/PatchRubricDraftApiResponse`

# `POST` `/stream/PatchRubricDraftApiResponse`

Schema: PatchRubricDraftApiResponse

## Request Body (`PatchRubricDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `idempotency_key` | `string` | No | Idempotency key for this draft operation |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__rubric__types__DraftFormState`](/api-reference/stream/types#app-infra-rubric-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchrubricdraftapiresponse Schema Stream Patchrubricdraftapiresponse Post"
}
```
