# `POST` `/auth/duplicate`

# `POST` `/auth/duplicate`

Duplicate Auth

Duplicate an auth — composable infra architecture.

## Request Body (`DuplicateAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | Yes | UUID of the auth provider to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `auth_id` | `string` | Yes | UUID of the newly created auth provider |
| `message` | `string` | Yes | Result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
