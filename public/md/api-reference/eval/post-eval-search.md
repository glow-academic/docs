# `POST` `/eval/search`

# `POST` `/eval/search`

Search Eval

Search evals — composable infra architecture.

## Request Body (`SearchEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

## Response (`ListEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `evals` | [`ListEvalApiEval`](/api-reference/eval/types#listevalapieval)[] | No | List of evals |
| `department_filter` | [`ListFilterSection`](/api-reference/eval/types#listfiltersection) | No | Filter options for departments in list UI |
| `flag_filter` | [`ListFilterSection`](/api-reference/eval/types#listfiltersection) | No | Filter options for flags in list UI |
| `model_filter` | [`ListFilterSection`](/api-reference/eval/types#listfiltersection) | No | Filter options for models in list UI |
| `rubric_filter` | [`ListFilterSection`](/api-reference/eval/types#listfiltersection) | No | Filter options for rubrics in list UI |
| `total_count` | `integer` | No | Total number of matching records |
| `user_role` | `string` | No | Role of the current user |
| `import_fields` | [`ImportField`](/api-reference/eval/types#importfield)[] | No | CSV import column schema for the bulk-import dialog |
