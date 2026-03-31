# `POST` `/stream/UpdateParameterApiRequest`

Schema: UpdateParameterApiRequest

## Request Body (`UpdateParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`UpdateParameterItem`](/api-reference/stream/types#updateparameteritem)[] | Yes | List of parameters to update |

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