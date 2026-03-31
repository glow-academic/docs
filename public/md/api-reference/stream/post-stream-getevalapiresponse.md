# `POST` `/stream/GetEvalApiResponse`

Schema: GetEvalApiResponse

## Request Body (`GetEvalApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `eval_exists` | `boolean` | No | Whether the eval exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `model_show_ai_generate` | `boolean` | No | Whether to show AI generate for model step |
| `names` | [`EvalNameSection`](/api-reference/stream/types#evalnamesection) | No | Name section with resource and options |
| `descriptions` | [`EvalDescriptionSection`](/api-reference/stream/types#evaldescriptionsection) | No | Description section with resource and options |
| `active_flags` | [`EvalFlagSection`](/api-reference/stream/types#evalflagsection) | No | Active flag section |
| `dynamic_flags` | [`EvalFlagSection`](/api-reference/stream/types#evalflagsection) | No | Dynamic flag section |
| `groups_flags` | [`EvalFlagSection`](/api-reference/stream/types#evalflagsection) | No | Groups flag section |
| `departments` | [`EvalDepartmentSection`](/api-reference/stream/types#evaldepartmentsection) | No | Department section with selections and options |
| `models` | [`EvalModelSection`](/api-reference/stream/types#evalmodelsection) | No | Model section with selections and options |
| `model_flags` | [`EvalModelFlagSection`](/api-reference/stream/types#evalmodelflagsection) | No | Model flag section |
| `model_rubrics` | [`EvalModelRubricSection`](/api-reference/stream/types#evalmodelrubricsection) | No | Model rubric section |
| `model_positions` | [`EvalModelPositionSection`](/api-reference/stream/types#evalmodelpositionsection) | No | Model position section |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getevalapiresponse Schema Stream Getevalapiresponse Post"
}
```