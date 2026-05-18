# `POST` `/agent/duplicate`

Duplicate Agent

Duplicate an agent — composable infra architecture.

## Request Body (`DuplicateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the duplicated agent |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |