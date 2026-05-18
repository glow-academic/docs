# `POST` `/system/session`

# `POST` `/system/session`

Get Session

Get session detail with groups and timeline.

## Request Body (`GetSessionDetailRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `session_id` | `string` | Yes | UUID of the session to fetch |

## Response (`GetSessionDetailResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `session_exists` | `boolean` | No | Whether the session exists |
| `session_id` | `string` | No | UUID of the session |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `session_created_at` | `string` | No | Timestamp when session was created |
| `active` | `boolean` | No | Whether the session is active |
| `groups` | [`ArtifactSessionGroup`](/api-reference/system/types#artifactsessiongroup)[] | No | Groups in the session |
| `timeline` | [`SessionTimelineItem`](/api-reference/system/types#sessiontimelineitem)[] | No | Timeline events for the session |
