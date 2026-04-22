# `POST` `/stream/GetDepartmentApiResponse`

Schema: GetDepartmentApiResponse

## Request Body (`GetDepartmentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `department_exists` | `boolean` | No | Whether the department exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this department |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate anywhere |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic sections |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`DepartmentNameResource`](/api-reference/stream/types#departmentnameresource)[] | No | Name resources |
| `descriptions` | [`DepartmentDescriptionResource`](/api-reference/stream/types#departmentdescriptionresource)[] | No | Description resources |
| `flags` | [`DepartmentFlagConfig`](/api-reference/stream/types#departmentflagconfig)[] | No | Flag configs |
| `settings` | [`DepartmentSettingResource`](/api-reference/stream/types#departmentsettingresource)[] | No | Setting resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getdepartmentapiresponse Schema Stream Getdepartmentapiresponse Post"
}
```