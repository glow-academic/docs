# `POST` `/stream/UpdatePersonaApiResponse`

Schema: UpdatePersonaApiResponse

## Request Body (`UpdatePersonaApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](/api-reference/stream/types#personaresultitem)[] | Yes | Per-persona update results |

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