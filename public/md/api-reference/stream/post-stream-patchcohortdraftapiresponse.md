# `POST` `/stream/PatchCohortDraftApiResponse`

Schema: PatchCohortDraftApiResponse

## Request Body (`PatchCohortDraftApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `idempotency_key` | `string` | Yes | Idempotency key for this draft operation |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__cohort__types__DraftFormState`](/api-reference/stream/types#app-infra-cohort-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchcohortdraftapiresponse Schema Stream Patchcohortdraftapiresponse Post"
}
```