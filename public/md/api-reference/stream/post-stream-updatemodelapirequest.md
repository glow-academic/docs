# `POST` `/stream/UpdateModelApiRequest`

# `POST` `/stream/UpdateModelApiRequest`

Schema: UpdateModelApiRequest

## Request Body (`UpdateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`UpdateModelItem`](/api-reference/stream/types#updatemodelitem)[] | Yes | List of models to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

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
