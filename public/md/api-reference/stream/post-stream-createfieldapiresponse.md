# `POST` `/stream/CreateFieldApiResponse`

Schema: CreateFieldApiResponse

## Request Body (`CreateFieldApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/stream/types#fieldresultitem)[] | Yes | Per-item creation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createfieldapiresponse Schema Stream Createfieldapiresponse Post"
}
```