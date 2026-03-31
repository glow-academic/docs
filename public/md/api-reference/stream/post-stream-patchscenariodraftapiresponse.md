# `POST` `/stream/PatchScenarioDraftApiResponse`

Schema: PatchScenarioDraftApiResponse

## Request Body (`PatchScenarioDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version number |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`ScenarioDraftFormState`](/api-reference/stream/types#scenariodraftformstate) | Yes | Server-authoritative form state |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Patchscenariodraftapiresponse Schema Stream Patchscenariodraftapiresponse Post"
}
```