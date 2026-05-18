# `POST` `/eval/create`

Create Eval

Create evals using composable infra architecture.

## Request Body (`CreateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | [`CreateEvalItem`](/api-reference/eval/types#createevalitem)[] | Yes | List of evals to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`EvalResultItem`](/api-reference/eval/types#evalresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `evals` | [`ListEvalApiEval`](/api-reference/eval/types#listevalapieval)[] | No | Hydrated list rows for the newly-created evals — same shape as ``/eval/search`` returns. Used by the client's ghost rail to materialize the new row from the audit ``.completed`` payload without a router refresh. ``None`` for soft-pending creates (dormant artifact, hydration runs on ack-accept). |