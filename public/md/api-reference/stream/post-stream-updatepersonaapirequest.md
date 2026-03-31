# `POST` `/stream/UpdatePersonaApiRequest`

Schema: UpdatePersonaApiRequest

## Request Body (`UpdatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`UpdatePersonaItem`](/api-reference/stream/types#updatepersonaitem)[] | Yes | List of persona items to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatepersonaapirequest Schema Stream Updatepersonaapirequest Post"
}
```