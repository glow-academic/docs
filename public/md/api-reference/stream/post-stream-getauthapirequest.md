# `POST` `/stream/GetAuthApiRequest`

Schema: GetAuthApiRequest

## Request Body (`GetAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | No | UUID of the auth provider to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getauthapirequest Schema Stream Getauthapirequest Post"
}
```