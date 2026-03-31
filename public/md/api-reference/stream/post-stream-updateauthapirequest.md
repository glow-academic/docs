# `POST` `/stream/UpdateAuthApiRequest`

Schema: UpdateAuthApiRequest

## Request Body (`UpdateAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auths` | [`UpdateAuthItem`](/api-reference/stream/types#updateauthitem)[] | Yes | List of auth providers to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updateauthapirequest Schema Stream Updateauthapirequest Post"
}
```