# `POST` `/stream/CreateModelApiRequest`

# `POST` `/stream/CreateModelApiRequest`

Schema: CreateModelApiRequest

## Request Body (`CreateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`CreateModelItem`](/api-reference/stream/types#createmodelitem)[] | Yes | List of models to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createmodelapirequest Schema Stream Createmodelapirequest Post"
}
```
