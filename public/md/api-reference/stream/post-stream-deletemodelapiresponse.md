# `POST` `/stream/DeleteModelApiResponse`

Schema: DeleteModelApiResponse

## Request Body (`DeleteModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteModelResult`](/api-reference/stream/types#deletemodelresult)[] | Yes | List of deletion results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletemodelapiresponse Schema Stream Deletemodelapiresponse Post"
}
```