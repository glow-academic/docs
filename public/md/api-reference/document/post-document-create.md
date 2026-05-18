# `POST` `/document/create`

# `POST` `/document/create`

Create Document

Create documents using composable infra architecture.

## Request Body (`CreateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`CreateDocumentItem`](/api-reference/document/types#createdocumentitem)[] | Yes | List of documents to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](/api-reference/document/types#documentresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
