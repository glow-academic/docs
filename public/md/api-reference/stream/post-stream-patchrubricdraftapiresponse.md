# `POST` `/stream/PatchRubricDraftApiResponse`

Schema: PatchRubricDraftApiResponse

## Request Body (`PatchRubricDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`RubricDraftFormState`](/api-reference/stream/types#rubricdraftformstate) | No | Server-authoritative form state |

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