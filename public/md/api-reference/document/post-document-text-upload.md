# `POST` `/document/text_upload`

# `POST` `/document/text_upload`

Upload Text

Upload a text file for later use in documents.

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`TextUploadDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `text_id` | `string` | Yes | UUID of the created texts_resource |
| `upload_id` | `string` | Yes | UUID of the uploads_entry (file on disk) |
