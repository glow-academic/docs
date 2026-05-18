# `POST` `/stream/GetFieldApiResponse`

# `POST` `/stream/GetFieldApiResponse`

Schema: GetFieldApiResponse

## Request Body (`GetFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `field_exists` | `boolean` | No | Whether the field exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this field |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button anywhere |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`FieldNameResource`](/api-reference/stream/types#fieldnameresource)[] | No | Name resources |
| `descriptions` | [`FieldDescriptionResource`](/api-reference/stream/types#fielddescriptionresource)[] | No | Description resources |
| `flags` | [`FieldFlagConfig`](/api-reference/stream/types#fieldflagconfig)[] | No | Flag configs |
| `departments` | [`FieldDepartmentResource`](/api-reference/stream/types#fielddepartmentresource)[] | No | Department resources |
| `conditional_parameters` | [`FieldConditionalParameterResource`](/api-reference/stream/types#fieldconditionalparameterresource)[] | No | Conditional parameter resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getfieldapiresponse Schema Stream Getfieldapiresponse Post"
}
```
