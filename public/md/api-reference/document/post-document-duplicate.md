# `POST` `/document/duplicate`

# `POST` `/document/duplicate`

Duplicate Document

Duplicate a document — composable infra architecture.

## Request Body (`DuplicateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Newly created document UUID |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
