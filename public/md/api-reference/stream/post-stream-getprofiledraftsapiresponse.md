# `POST` `/stream/GetProfileDraftsApiResponse`

Schema: GetProfileDraftsApiResponse

## Request Body (`GetProfileDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetProfileDraftResponse`](/api-reference/stream/types#getprofiledraftresponse)[] | No | List of profile draft entries |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getprofiledraftsapiresponse Schema Stream Getprofiledraftsapiresponse Post"
}
```