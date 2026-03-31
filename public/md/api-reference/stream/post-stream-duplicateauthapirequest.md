# `POST` `/stream/DuplicateAuthApiRequest`

Schema: DuplicateAuthApiRequest

## Request Body (`DuplicateAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | Yes | UUID of the auth provider to duplicate |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateauthapirequest Schema Stream Duplicateauthapirequest Post"
}
```