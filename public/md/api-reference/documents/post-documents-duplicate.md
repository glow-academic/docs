# `POST` `/documents/duplicate`

Duplicate Document

Duplicate a document — composable infra architecture.

## Request Body (`DuplicateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to duplicate |

## Response (`DuplicateDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Newly created document UUID |
| `message` | `string` | Yes | Human-readable result message |