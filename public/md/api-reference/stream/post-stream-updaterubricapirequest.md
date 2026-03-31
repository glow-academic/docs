# `POST` `/stream/UpdateRubricApiRequest`

Schema: UpdateRubricApiRequest

## Request Body (`UpdateRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`UpdateRubricItem`](/api-reference/stream/types#updaterubricitem)[] | Yes | List of rubrics to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updaterubricapirequest Schema Stream Updaterubricapirequest Post"
}
```