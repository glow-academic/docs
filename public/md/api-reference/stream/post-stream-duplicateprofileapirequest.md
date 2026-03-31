# `POST` `/stream/DuplicateProfileApiRequest`

Schema: DuplicateProfileApiRequest

## Request Body (`DuplicateProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `target_profile_id` | `string` | Yes | UUID of the profile to duplicate |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Duplicateprofileapirequest Schema Stream Duplicateprofileapirequest Post"
}
```