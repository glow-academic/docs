# `POST` `/documents/create`

Create Document

Create documents using composable infra architecture.

## Request Body (`CreateDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`CreateDocumentItem`](/api-reference/documents/types#createdocumentitem)[] | Yes | List of documents to create |

## Response (`CreateDocumentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](/api-reference/documents/types#documentresultitem)[] | Yes | List of operation results |