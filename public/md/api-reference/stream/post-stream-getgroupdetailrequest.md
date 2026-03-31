# `POST` `/stream/GetGroupDetailRequest`

Schema: GetGroupDetailRequest

## Request Body (`GetGroupDetailRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group to fetch |
| `message_limit` | `integer` | No | Maximum number of messages to return |
| `message_offset` | `integer` | No | Offset for message pagination |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getgroupdetailrequest Schema Stream Getgroupdetailrequest Post"
}
```