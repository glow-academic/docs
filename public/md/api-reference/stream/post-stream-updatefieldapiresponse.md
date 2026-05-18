# `POST` `/stream/UpdateFieldApiResponse`

# `POST` `/stream/UpdateFieldApiResponse`

Schema: UpdateFieldApiResponse

## Request Body (`UpdateFieldApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/stream/types#fieldresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatefieldapiresponse Schema Stream Updatefieldapiresponse Post"
}
```
