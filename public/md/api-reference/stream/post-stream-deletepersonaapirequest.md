# `POST` `/stream/DeletePersonaApiRequest`

Schema: DeletePersonaApiRequest

## Request Body (`DeletePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_ids` | `string`[] | Yes | List of persona UUIDs to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletepersonaapirequest Schema Stream Deletepersonaapirequest Post"
}
```