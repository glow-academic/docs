# `POST` `/stream/UpdatePersonaApiResponse`

Schema: UpdatePersonaApiResponse

## Request Body (`UpdatePersonaApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](/api-reference/stream/types#personaresultitem)[] | Yes | Per-persona update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatepersonaapiresponse Schema Stream Updatepersonaapiresponse Post"
}
```