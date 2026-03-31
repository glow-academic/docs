# `POST` `/stream/DuplicateProfileApiResponse`

Schema: DuplicateProfileApiResponse

## Request Body (`DuplicateProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `profile_id` | `string` | Yes | UUID of the newly created profile |
| `message` | `string` | Yes | Result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateprofileapiresponse Schema Stream Duplicateprofileapiresponse Post"
}
```