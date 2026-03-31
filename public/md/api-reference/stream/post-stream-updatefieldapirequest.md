# `POST` `/stream/UpdateFieldApiRequest`

Schema: UpdateFieldApiRequest

## Request Body (`UpdateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`UpdateFieldItem`](/api-reference/stream/types#updatefielditem)[] | Yes | List of fields to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatefieldapirequest Schema Stream Updatefieldapirequest Post"
}
```