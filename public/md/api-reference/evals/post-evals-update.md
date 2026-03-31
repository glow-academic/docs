# `POST` `/evals/update`

Update Eval

Update evals using composable infra architecture.

## Request Body (`UpdateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`UpdateEvalItem`](/api-reference/evals/types#updateevalitem)[] | Yes | List of evals to update |

## Response (`UpdateEvalApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`EvalResultItem`](/api-reference/evals/types#evalresultitem)[] | Yes | List of operation results |