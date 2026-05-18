# `POST` `/eval/get`

Get Eval

Get eval information using the canonical shared eval operation.

## Request Body (`GetEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Eval UUID to retrieve |
| `eval_id` | `string` | No | Legacy eval UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for departments section |
| `models` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for models section |
| `model_flags` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for model flags section |
| `model_rubrics` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for model rubrics section |
| `model_positions` | [`app__infra__eval__types__SectionFilter`](/api-reference/eval/types#app-infra-eval-types-sectionfilter) | No | Filter options for model positions section |

## Response (`GetEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `eval_exists` | `boolean` | No | Whether the eval exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `draft_name` | `string` | No | Immutable draft label from the active draft entry, when a ``draft_id`` was supplied. ``None`` for non-draft fetches. |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for the basic step |
| `model_show_ai_generate` | `boolean` | No | Whether to show AI generate for the model step |
| `show_ai_generate` | `boolean` | No | Whether any AI generate action should be shown |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`EvalNameResource`](/api-reference/eval/types#evalnameresource)[] | No | Name resources |
| `descriptions` | [`EvalDescriptionResource`](/api-reference/eval/types#evaldescriptionresource)[] | No | Description resources |
| `flags` | [`EvalFlagResource`](/api-reference/eval/types#evalflagresource)[] | No | Flag resources (one per flags_resource row, value=true/false) |
| `departments` | [`EvalDepartmentResource`](/api-reference/eval/types#evaldepartmentresource)[] | No | Department resources |
| `models` | [`EvalModelResource`](/api-reference/eval/types#evalmodelresource)[] | No | Model resources |
| `model_flags` | [`EvalModelFlagResource`](/api-reference/eval/types#evalmodelflagresource)[] | No | Model flag resources (linked junction rows) |
| `model_flag_options` | [`EvalModelFlagOptionResource`](/api-reference/eval/types#evalmodelflagoptionresource)[] | No | Cross-product (model x flag-type x value) options for the ModelFlags picker. |
| `model_rubrics` | [`EvalModelRubricResource`](/api-reference/eval/types#evalmodelrubricresource)[] | No | Model rubric resources |
| `model_positions` | [`EvalModelPositionResource`](/api-reference/eval/types#evalmodelpositionresource)[] | No | Model position resources |
| `rubrics` | [`EvalRubricResource`](/api-reference/eval/types#evalrubricresource)[] | No | Top-level rubric catalog for the ModelRubrics picker |