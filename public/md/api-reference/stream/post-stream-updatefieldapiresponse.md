# `POST` `/stream/UpdateFieldApiResponse`

Schema: UpdateFieldApiResponse

## Request Body (`UpdateFieldApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/stream/types#fieldresultitem)[] | Yes | Per-item update results |

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