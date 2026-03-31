# `POST` `/stream/UpdateToolApiRequest`

Schema: UpdateToolApiRequest

## Request Body (`UpdateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`UpdateToolItem`](/api-reference/stream/types#updatetoolitem)[] | Yes | List of tools to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatetoolapirequest Schema Stream Updatetoolapirequest Post"
}
```