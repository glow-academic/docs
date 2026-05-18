# `POST` `/eval/update`

# `POST` `/eval/update`

Update Eval

Update evals using composable infra architecture.

## Request Body (`UpdateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`UpdateEvalItem`](/api-reference/eval/types#updateevalitem)[] | Yes | List of evals to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateEvalApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`EvalResultItem`](/api-reference/eval/types#evalresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
