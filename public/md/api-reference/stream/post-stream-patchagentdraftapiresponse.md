# `POST` `/stream/PatchAgentDraftApiResponse`

Schema: PatchAgentDraftApiResponse

## Request Body (`PatchAgentDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | No | Idempotency key for accept/reject acknowledgement |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__agent__types__DraftFormState`](/api-reference/stream/types#app-infra-agent-types-draftformstate) | No | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchagentdraftapiresponse Schema Stream Patchagentdraftapiresponse Post"
}
```