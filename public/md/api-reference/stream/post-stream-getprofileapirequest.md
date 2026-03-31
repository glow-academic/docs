# `POST` `/stream/GetProfileApiRequest`

Schema: GetProfileApiRequest

## Request Body (`GetProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `target_profile_id` | `string` | No | UUID of the profile to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getprofileapirequest Schema Stream Getprofileapirequest Post"
}
```