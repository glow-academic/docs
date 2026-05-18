# `POST` `/cohort/duplicate`

# `POST` `/cohort/duplicate`

Duplicate Cohort

Duplicate a cohort — composable infra architecture.

## Request Body (`DuplicateCohortApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateCohortApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Newly created cohort UUID |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
