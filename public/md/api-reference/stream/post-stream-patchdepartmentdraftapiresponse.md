# `POST` `/stream/PatchDepartmentDraftApiResponse`

Schema: PatchDepartmentDraftApiResponse

## Request Body (`PatchDepartmentDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Idempotency key for this draft operation |
| `message` | `string` | Yes | Result message |
| `form_state` | [`app__infra__department__types__DraftFormState`](/api-reference/stream/types#app-infra-department-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchdepartmentdraftapiresponse Schema Stream Patchdepartmentdraftapiresponse Post"
}
```