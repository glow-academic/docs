# `POST` `/stream/UpdateModelApiRequest`

Schema: UpdateModelApiRequest

## Request Body (`UpdateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`UpdateModelItem`](/api-reference/stream/types#updatemodelitem)[] | Yes | List of models to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatemodelapirequest Schema Stream Updatemodelapirequest Post"
}
```