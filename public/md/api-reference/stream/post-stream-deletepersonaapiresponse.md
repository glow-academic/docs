# `POST` `/stream/DeletePersonaApiResponse`

Schema: DeletePersonaApiResponse

## Request Body (`DeletePersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeletePersonaResult`](/api-reference/stream/types#deletepersonaresult)[] | Yes | Per-persona deletion results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletepersonaapiresponse Schema Stream Deletepersonaapiresponse Post"
}
```