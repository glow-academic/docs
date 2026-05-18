# `POST` `/document/update`

# `POST` `/document/update`

Update Document

Update documents using composable infra architecture.

## Request Body (`UpdateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`UpdateDocumentItem`](/api-reference/document/types#updatedocumentitem)[] | Yes | List of documents to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateDocumentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](/api-reference/document/types#documentresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
