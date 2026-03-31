# `POST` `/stream/CreateCohortApiRequest`

Schema: CreateCohortApiRequest

## Request Body (`CreateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`CreateCohortItem`](/api-reference/stream/types#createcohortitem)[] | Yes | List of cohorts to create |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createcohortapirequest Schema Stream Createcohortapirequest Post"
}
```