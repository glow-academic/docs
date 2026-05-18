# `POST` `/stream/PatchSimulationDraftApiResponse`

# `POST` `/stream/PatchSimulationDraftApiResponse`

Schema: PatchSimulationDraftApiResponse

## Request Body (`PatchSimulationDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `idempotency_key` | `string` | Yes | Idempotency key for this draft operation |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`app__infra__simulation__types__DraftFormState`](/api-reference/stream/types#app-infra-simulation-types-draftformstate) | Yes | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchsimulationdraftapiresponse Schema Stream Patchsimulationdraftapiresponse Post"
}
```
