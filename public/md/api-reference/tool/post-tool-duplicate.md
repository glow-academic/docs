# `POST` `/tool/duplicate`

Duplicate Tool

Duplicate a tool — composable infra architecture.

## Request Body (`DuplicateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Tool identifier to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `tool_id` | `string` | Yes | New duplicated tool identifier |
| `message` | `string` | Yes | Result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |