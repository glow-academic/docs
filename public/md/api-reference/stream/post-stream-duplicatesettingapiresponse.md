# `POST` `/stream/DuplicateSettingApiResponse`

Schema: DuplicateSettingApiResponse

## Request Body (`DuplicateSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `setting_id` | `string` | Yes | UUID of the newly created setting |
| `message` | `string` | Yes | Result message |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicatesettingapiresponse Schema Stream Duplicatesettingapiresponse Post"
}
```