# `POST` `/stream/DeleteEvalApiRequest`

Schema: DeleteEvalApiRequest

## Request Body (`DeleteEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_ids` | `string`[] | Yes | Eval UUIDs to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deleteevalapirequest Schema Stream Deleteevalapirequest Post"
}
```