# `POST` `/field/problem`

# `POST` `/field/problem`

Problem Field

Report a field problem — composable infra architecture.

## Request Body (`ProblemFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes | Problem type: feature, bug, question, other |
| `message` | `string` | Yes | Problem description (max 1000 chars) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant problem |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`ProblemFieldApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | UUID of the created problem |
| `success` | `boolean` | No | Whether the problem was created |
| `message` | `string` | No | Status message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
