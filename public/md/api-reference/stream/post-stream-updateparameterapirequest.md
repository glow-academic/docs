# `POST` `/stream/UpdateParameterApiRequest`

# `POST` `/stream/UpdateParameterApiRequest`

Schema: UpdateParameterApiRequest

## Request Body (`UpdateParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`UpdateParameterItem`](/api-reference/stream/types#updateparameteritem)[] | Yes | List of parameters to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateparameterapirequest Schema Stream Updateparameterapirequest Post"
}
```
