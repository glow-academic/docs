# `POST` `/model/problem`

Problem Model

Report a model problem — composable infra architecture.

## Request Body (`ProblemModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes | Problem type: feature, bug, question, other |
| `message` | `string` | Yes | Problem description (max 1000 chars) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant problem |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`ProblemModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | UUID of the created problem |
| `success` | `boolean` | No | Whether the problem was created |
| `message` | `string` | No | Status message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |