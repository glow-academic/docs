# `POST` `/documents/delete`

Delete Document

Bulk delete documents — composable infra architecture.

## Request Body (`DeleteDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `document_ids` | `string`[] | Yes | Document UUIDs to delete |

## Response (`DeleteDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteDocumentResult`](/api-reference/documents/types#deletedocumentresult)[] | Yes | List of operation results |