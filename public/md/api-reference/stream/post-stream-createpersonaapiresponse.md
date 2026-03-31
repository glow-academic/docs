# `POST` `/stream/CreatePersonaApiResponse`

Schema: CreatePersonaApiResponse

## Request Body (`CreatePersonaApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](/api-reference/stream/types#personaresultitem)[] | Yes | Per-persona creation results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createpersonaapiresponse Schema Stream Createpersonaapiresponse Post"
}
```