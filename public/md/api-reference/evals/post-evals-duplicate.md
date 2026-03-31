# `POST` `/evals/duplicate`

Duplicate Eval

Duplicate an eval — composable infra architecture.

## Request Body (`DuplicateEvalApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_id` | `string` | Yes | Eval UUID to duplicate |

## Response (`DuplicateEvalApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `eval_id` | `string` | Yes | Newly created eval UUID |
| `message` | `string` | Yes | Human-readable result message |