# `POST` `/stream/GetEvalApiResponse`

# `POST` `/stream/GetEvalApiResponse`

Schema: GetEvalApiResponse

## Request Body (`GetEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `eval_exists` | `boolean` | No | Whether the eval exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for the basic step |
| `model_show_ai_generate` | `boolean` | No | Whether to show AI generate for the model step |
| `show_ai_generate` | `boolean` | No | Whether any AI generate action should be shown |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`EvalNameResource`](/api-reference/stream/types#evalnameresource)[] | No | Name resources |
| `descriptions` | [`EvalDescriptionResource`](/api-reference/stream/types#evaldescriptionresource)[] | No | Description resources |
| `flags` | [`EvalFlagConfig`](/api-reference/stream/types#evalflagconfig)[] | No | Flag configs |
| `departments` | [`EvalDepartmentResource`](/api-reference/stream/types#evaldepartmentresource)[] | No | Department resources |
| `models` | [`EvalModelResource`](/api-reference/stream/types#evalmodelresource)[] | No | Model resources |
| `model_flags` | [`EvalModelFlagResource`](/api-reference/stream/types#evalmodelflagresource)[] | No | Model flag resources |
| `model_rubrics` | [`EvalModelRubricResource`](/api-reference/stream/types#evalmodelrubricresource)[] | No | Model rubric resources |
| `model_positions` | [`EvalModelPositionResource`](/api-reference/stream/types#evalmodelpositionresource)[] | No | Model position resources |

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
