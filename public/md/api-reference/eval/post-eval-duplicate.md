# `POST` `/eval/duplicate`

Duplicate Eval

Duplicate an eval — composable infra architecture.

## Request Body (`DuplicateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | Eval UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `eval_id` | `string` | Yes | Newly created eval UUID |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `evals` | [`ListEvalApiEval`](/api-reference/eval/types#listevalapieval)[] | No | Hydrated list rows for the duplicated eval — single-element list, kept as a list for shape consistency with create/update. ``None`` for soft-pending duplicates. |