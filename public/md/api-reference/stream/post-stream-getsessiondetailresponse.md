# `POST` `/stream/GetSessionDetailResponse`

Schema: GetSessionDetailResponse

## Request Body (`GetSessionDetailResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `session_exists` | `boolean` | No | Whether the session exists |
| `session_id` | `string` | No | UUID of the session |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `session_created_at` | `string` | No | Timestamp when session was created |
| `active` | `boolean` | No | Whether the session is active |
| `groups` | [`ArtifactSessionGroup-Input`](/api-reference/stream/types#artifactsessiongroup-input)[] | No | Groups in the session |
| `timeline` | [`SessionTimelineItem`](/api-reference/stream/types#sessiontimelineitem)[] | No | Timeline events for the session |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getsessiondetailresponse Schema Stream Getsessiondetailresponse Post"
}
```