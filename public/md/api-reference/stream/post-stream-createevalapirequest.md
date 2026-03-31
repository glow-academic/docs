# `POST` `/stream/CreateEvalApiRequest`

Schema: CreateEvalApiRequest

## Request Body (`CreateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`CreateEvalItem`](/api-reference/stream/types#createevalitem)[] | Yes | List of evals to create |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createevalapirequest Schema Stream Createevalapirequest Post"
}
```