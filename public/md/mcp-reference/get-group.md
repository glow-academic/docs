# `get_group`

Get detailed group information with all runs and messages.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group to fetch |
| `message_limit` | `string` | No | Maximum number of messages to return |
| `message_offset` | `string` | No | Offset for message pagination |

## Example

```json
{
  "name": "get_group",
  "arguments": {
    "group_id": "<group_id>"
  }
}
```

## Related

- [Group Guide](/group)