# `POST` `/group/get`

Get Group

Get detailed group information with all runs and messages.

## Request Body (`GetGroupDetailRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group to fetch |
| `message_limit` | `integer` | No | Maximum number of messages to return |
| `message_offset` | `integer` | No | Offset for message pagination |

## Response (`GetGroupDetailResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_exists` | `boolean` | No | Whether the group exists |
| `actor_name` | `string` | No | Display name of the current actor |
| `group_name` | `string` | No | Name of the group |
| `total_message_count` | `integer` | No | Total number of messages in the group |
| `runs` | [`GroupDetailRunWithMessages-Output`](/api-reference/group/types#groupdetailrunwithmessages-output)[] | No | Runs with their messages |
| `models` | [`GroupDetailResourceItem`](/api-reference/group/types#groupdetailresourceitem)[] | No | Models used in the group |
| `agents` | [`GroupDetailResourceItem`](/api-reference/group/types#groupdetailresourceitem)[] | No | Agents used in the group |
| `profiles` | [`GroupDetailResourceItem`](/api-reference/group/types#groupdetailresourceitem)[] | No | Profiles in the group |