# `POST` `/stream/GetRubricApiResponse`

Schema: GetRubricApiResponse

## Request Body (`GetRubricApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `rubric_exists` | `boolean` | No | Whether the rubric exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `show_ai_generate` | `boolean` | No | Whether any section supports AI generation |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for the basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for the content step |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`RubricNameResource`](/api-reference/stream/types#rubricnameresource)[] | No | Name resources |
| `descriptions` | [`RubricDescriptionResource`](/api-reference/stream/types#rubricdescriptionresource)[] | No | Description resources |
| `flags` | [`RubricFlagConfig`](/api-reference/stream/types#rubricflagconfig)[] | No | Flag configs |
| `departments` | [`RubricDepartmentResource`](/api-reference/stream/types#rubricdepartmentresource)[] | No | Department resources |
| `points` | [`RubricPointResource`](/api-reference/stream/types#rubricpointresource)[] | No | Point resources |
| `standard_groups` | [`RubricStandardGroupResource`](/api-reference/stream/types#rubricstandardgroupresource)[] | No | Standard group resources |
| `standards` | [`RubricStandardResource`](/api-reference/stream/types#rubricstandardresource)[] | No | Standard resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getrubricapiresponse Schema Stream Getrubricapiresponse Post"
}
```