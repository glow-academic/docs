# `POST` `/documents/update`

Update Document

Update documents using composable infra architecture.

## Request Body (`UpdateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`UpdateDocumentItem`](/api-reference/documents/types#updatedocumentitem)[] | Yes | List of documents to update |

## Response (`UpdateDocumentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](/api-reference/documents/types#documentresultitem)[] | Yes | List of operation results |