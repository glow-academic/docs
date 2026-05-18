# `POST` `/stream/GetGroupDetailResponse`

# `POST` `/stream/GetGroupDetailResponse`

Schema: GetGroupDetailResponse

## Request Body (`GetGroupDetailResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_exists` | `boolean` | No | Whether the group exists |
| `actor_name` | `string` | No | Display name of the current actor |
| `group_name` | `string` | No | Name of the group |
| `total_message_count` | `integer` | No | Total number of messages in the group |
| `runs` | [`GroupDetailRunWithMessages-Input`](/api-reference/stream/types#groupdetailrunwithmessages-input)[] | No | Runs with their messages |
| `models` | [`GroupDetailResourceItem`](/api-reference/stream/types#groupdetailresourceitem)[] | No | Models used in the group |
| `agents` | [`GroupDetailResourceItem`](/api-reference/stream/types#groupdetailresourceitem)[] | No | Agents used in the group |
| `profiles` | [`GroupDetailResourceItem`](/api-reference/stream/types#groupdetailresourceitem)[] | No | Profiles in the group |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getgroupdetailresponse Schema Stream Getgroupdetailresponse Post"
}
```
