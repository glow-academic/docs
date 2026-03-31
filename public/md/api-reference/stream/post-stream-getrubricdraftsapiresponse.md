# `POST` `/stream/GetRubricDraftsApiResponse`

Schema: GetRubricDraftsApiResponse

## Request Body (`GetRubricDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetRubricDraftResponse`](/api-reference/stream/types#getrubricdraftresponse)[] | No | List of rubric draft entries |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getrubricdraftsapiresponse Schema Stream Getrubricdraftsapiresponse Post"
}
```