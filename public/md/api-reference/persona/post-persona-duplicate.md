# `POST` `/persona/duplicate`

# `POST` `/persona/duplicate`

Duplicate Persona

Duplicate a persona — composable infra architecture.

## Request Body (`DuplicatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the persona to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicatePersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `id` | `string` | Yes | UUID of the newly created duplicate persona |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
