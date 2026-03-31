# `POST` `/stream/DeleteModelApiRequest`

Schema: DeleteModelApiRequest

## Request Body (`DeleteModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_ids` | `string`[] | Yes | List of model IDs to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletemodelapirequest Schema Stream Deletemodelapirequest Post"
}
```