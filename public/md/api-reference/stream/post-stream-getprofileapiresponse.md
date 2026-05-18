# `POST` `/stream/GetProfileApiResponse`

# `POST` `/stream/GetProfileApiResponse`

Schema: GetProfileApiResponse

## Request Body (`GetProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `profile_exists` | `boolean` | No | Whether the profile exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this profile |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `profile_id` | `string` | No | UUID of the profile |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate anywhere |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate on the basic step |
| `contact_show_ai_generate` | `boolean` | No | Whether to show AI generate on the contact step |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`ProfileNameResource`](/api-reference/stream/types#profilenameresource)[] | No | Name resources |
| `emails` | [`ProfileEmailResource`](/api-reference/stream/types#profileemailresource)[] | No | Email resources |
| `flags` | [`ProfileFlagConfig`](/api-reference/stream/types#profileflagconfig)[] | No | Flag configs |
| `departments` | [`ProfileDepartmentResource`](/api-reference/stream/types#profiledepartmentresource)[] | No | Department resources |
| `roles` | [`ProfileRoleResource`](/api-reference/stream/types#profileroleresource)[] | No | Role resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getprofileapiresponse Schema Stream Getprofileapiresponse Post"
}
```
