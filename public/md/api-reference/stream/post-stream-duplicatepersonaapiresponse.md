# `POST` `/stream/DuplicatePersonaApiResponse`

Schema: DuplicatePersonaApiResponse

## Request Body (`DuplicatePersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `persona_id` | `string` | Yes | UUID of the newly created duplicate persona |
| `message` | `string` | Yes | Human-readable result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatepersonaapiresponse Schema Stream Duplicatepersonaapiresponse Post"
}
```