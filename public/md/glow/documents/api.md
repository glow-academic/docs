# Documents

## Endpoints

### `POST` `/documents/search`

Search Document

Search documents — composable infra architecture.

**Request body** (`SearchDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `scenario_ids` | `string`[] | No | — |
| `field_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `scenario_search` | `string` | No | — |
| `field_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `documents` | [`ListDocumentApiDocument`](#listdocumentapidocument)[] | No | List of documents |
| `scenario_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for scenarios in list UI |
| `field_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for fields in list UI |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for departments in list UI |
| `total_count` | `integer` | No | Total number of matching records |

---

### `POST` `/documents/get`

Get Document

Get document information using the canonical shared document operation.

**Request body** (`GetDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | Document UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |

**Response** (`GetDocumentApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `document_exists` | `boolean` | No | Whether the document exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `names` | [`DocumentNameSection`](#documentnamesection) | No | Name section with resource and options |
| `descriptions` | [`DocumentDescriptionSection`](#documentdescriptionsection) | No | Description section with resource and options |
| `flags` | [`DocumentFlagSection`](#documentflagsection) | No | Flag section with selections and options |
| `departments` | [`DocumentDepartmentSection`](#documentdepartmentsection) | No | Department section with selections and options |
| `fields` | [`DocumentFieldSection`](#documentfieldsection) | No | Parameter field section |
| `parameters` | [`DocumentParameterSection`](#documentparametersection) | No | Parameter section with selections and options |
| `uploads` | [`DocumentUploadSection`](#documentuploadsection) | No | Upload section with selections and options |
| `images` | [`DocumentImageSection`](#documentimagesection) | No | Image section with selections and options |
| `texts` | [`DocumentTextSection`](#documenttextsection) | No | Text section with selections and options |

---

### `POST` `/documents/create`

Create Document

Create documents using composable infra architecture.

**Request body** (`CreateDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`CreateDocumentItem`](#createdocumentitem)[] | Yes | List of documents to create |

**Response** (`CreateDocumentApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](#documentresultitem)[] | Yes | List of operation results |

---

### `POST` `/documents/update`

Update Document

Update documents using composable infra architecture.

**Request body** (`UpdateDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`UpdateDocumentItem`](#updatedocumentitem)[] | Yes | List of documents to update |

**Response** (`UpdateDocumentApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](#documentresultitem)[] | Yes | List of operation results |

---

### `POST` `/documents/duplicate`

Duplicate Document

Duplicate a document — composable infra architecture.

**Request body** (`DuplicateDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to duplicate |

**Response** (`DuplicateDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Newly created document UUID |
| `message` | `string` | Yes | Human-readable result message |

---

### `POST` `/documents/delete`

Delete Document

Bulk delete documents — composable infra architecture.

**Request body** (`DeleteDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_ids` | `string`[] | Yes | Document UUIDs to delete |

**Response** (`DeleteDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteDocumentResult`](#deletedocumentresult)[] | Yes | List of operation results |

---

### `PATCH` `/documents/draft`

Patch Document Draft

Patch document draft — composable infra architecture.

**Request body** (`PatchDocumentDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `files` | [`DraftFileValue`](#draftfilevalue)[] | No | File values to create resources |
| `file_ids` | `string`[] | No | Existing file resource UUIDs |
| `texts` | [`DraftTextValue`](#drafttextvalue)[] | No | Text values to create resources |
| `text_ids` | `string`[] | No | Existing text resource UUIDs |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `department_ids` | `string`[] | No | Department UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `parameter_ids` | `string`[] | No | Parameter UUIDs |

**Response** (`PatchDocumentDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`DocumentDraftFormState`](#documentdraftformstate) | No | Server-authoritative form state |

---

### `POST` `/documents/drafts`

Get Document Drafts

List document drafts owned by the current profile.

**Response** (`GetDocumentDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetDocumentDraftResponse`](#getdocumentdraftresponse)[] | No | List of document draft entries |

---

### `POST` `/documents/docs`

Get Document Docs Endpoint

Get composed documentation for the document artifact.

**Request body** (`DocsApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entity_id` | `string` | No | — |

**Response** (`ComposedDocsResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse-Output`](#docsresponse-output) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](#docsapiresponse) | No | Page-level metadata from docs API |

---

### `POST` `/documents/refresh`

Document Refresh

Refresh document materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/documents/export`

Export Documents

Export all documents as a clean, denormalized CSV.

**Request body** (`ExportDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | Document UUID to export |

**Response** (`ExportDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/documents/csv`

Parse Document Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseDocumentCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateDocumentItem`](#createdocumentitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/documents/upload`

Upload

Stream-upload any file.

Headers:
  Content-Type: the file's actual MIME type
  X-Filename: original filename (for extension + display)
  Content-Length: file size in bytes (optional but recommended)
Body: raw file bytes (streamed, not multipart).

**Response** (`UploadResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |

---

### `GET` `/documents/download/\{upload_id\}`

Download

Download any file by upload ID with range support.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `upload_id` | path | Yes | — |

**Response:**

```
`any`
```

---

### `GET` `/documents/preview/\{upload_id\}`

Preview

Return a PNG preview of the first page of a PDF upload.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `upload_id` | path | Yes | — |

**Response:**

```
`any`
```

---

### `POST` `/stream/CreateDocumentApiRequest`

Schema: CreateDocumentApiRequest

**Request body** (`CreateDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`CreateDocumentItem`](#createdocumentitem)[] | Yes | List of documents to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateDocumentApiResponse`

Schema: CreateDocumentApiResponse

**Request body** (`CreateDocumentApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](#documentresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteDocumentApiRequest`

Schema: DeleteDocumentApiRequest

**Request body** (`DeleteDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_ids` | `string`[] | Yes | Document UUIDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteDocumentApiResponse`

Schema: DeleteDocumentApiResponse

**Request body** (`DeleteDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteDocumentResult`](#deletedocumentresult)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateDocumentApiRequest`

Schema: DuplicateDocumentApiRequest

**Request body** (`DuplicateDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateDocumentApiResponse`

Schema: DuplicateDocumentApiResponse

**Request body** (`DuplicateDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Newly created document UUID |
| `message` | `string` | Yes | Human-readable result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportDocumentApiRequest`

Schema: ExportDocumentApiRequest

**Request body** (`ExportDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | Document UUID to export |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportDocumentApiResponse`

Schema: ExportDocumentApiResponse

**Request body** (`ExportDocumentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetDocumentApiRequest`

Schema: GetDocumentApiRequest

**Request body** (`GetDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | Document UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetDocumentApiResponse`

Schema: GetDocumentApiResponse

**Request body** (`GetDocumentApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `document_exists` | `boolean` | No | Whether the document exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `names` | [`DocumentNameSection`](#documentnamesection) | No | Name section with resource and options |
| `descriptions` | [`DocumentDescriptionSection`](#documentdescriptionsection) | No | Description section with resource and options |
| `flags` | [`DocumentFlagSection`](#documentflagsection) | No | Flag section with selections and options |
| `departments` | [`DocumentDepartmentSection`](#documentdepartmentsection) | No | Department section with selections and options |
| `fields` | [`DocumentFieldSection`](#documentfieldsection) | No | Parameter field section |
| `parameters` | [`DocumentParameterSection`](#documentparametersection) | No | Parameter section with selections and options |
| `uploads` | [`DocumentUploadSection`](#documentuploadsection) | No | Upload section with selections and options |
| `images` | [`DocumentImageSection`](#documentimagesection) | No | Image section with selections and options |
| `texts` | [`DocumentTextSection`](#documenttextsection) | No | Text section with selections and options |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetDocumentDraftsApiResponse`

Schema: GetDocumentDraftsApiResponse

**Request body** (`GetDocumentDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetDocumentDraftResponse`](#getdocumentdraftresponse)[] | No | List of document draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchDocumentDraftApiRequest`

Schema: PatchDocumentDraftApiRequest

**Request body** (`PatchDocumentDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `files` | [`DraftFileValue`](#draftfilevalue)[] | No | File values to create resources |
| `file_ids` | `string`[] | No | Existing file resource UUIDs |
| `texts` | [`DraftTextValue`](#drafttextvalue)[] | No | Text values to create resources |
| `text_ids` | `string`[] | No | Existing text resource UUIDs |
| `flag_ids` | `string`[] | No | Flag option UUIDs |
| `department_ids` | `string`[] | No | Department UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs |
| `parameter_ids` | `string`[] | No | Parameter UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchDocumentDraftApiResponse`

Schema: PatchDocumentDraftApiResponse

**Request body** (`PatchDocumentDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`DocumentDraftFormState`](#documentdraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateDocumentApiRequest`

Schema: UpdateDocumentApiRequest

**Request body** (`UpdateDocumentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `documents` | [`UpdateDocumentItem`](#updatedocumentitem)[] | Yes | List of documents to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateDocumentApiResponse`

Schema: UpdateDocumentApiResponse

**Request body** (`UpdateDocumentApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DocumentResultItem`](#documentresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

## Types

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

### `CreateDocumentItem`

Single document item for create — no document_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `is_inactive` | `boolean` | No | Whether the document is inactive |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |

---

### `DeleteDocumentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | Yes | Document UUID |
| `message` | `string` | Yes | Human-readable result message |

---

### `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

### `DocsResponse-Output`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

### `DocumentDepartmentResource`

Department resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentDepartmentResource`](#documentdepartmentresource)[] | No | Currently selected departments |
| `resources` | [`DocumentDepartmentResource`](#documentdepartmentresource)[] | No | Available departments |

---

### `DocumentDescriptionResource`

Description resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`DocumentDescriptionResource`](#documentdescriptionresource) | No | Currently selected description resource |
| `resources` | [`DocumentDescriptionResource`](#documentdescriptionresource)[] | No | Available description resources |

---

### `DocumentDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_ids` | `string`[] | Yes | Selected flag option UUIDs |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `file_ids` | `string`[] | Yes | Selected file resource UUIDs |
| `image_ids` | `string`[] | Yes | Selected image UUIDs |
| `text_ids` | `string`[] | Yes | Selected text resource UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Selected parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Selected parameter UUIDs |

---

### `DocumentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

### `DocumentFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentParameterFieldResource`](#documentparameterfieldresource)[] | No | Currently selected parameter fields |
| `resources` | [`DocumentParameterFieldResource`](#documentparameterfieldresource)[] | No | Available parameter fields |

---

### `DocumentFileResource`

File (upload) resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Display label |
| `description` | `string` | No | Flag description |
| `flag_option_id` | `string` | No | Flag option UUID to use when enabling |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentFlagConfig`](#documentflagconfig)[] | No | Currently selected flag configs |
| `resources` | [`DocumentFlagConfig`](#documentflagconfig)[] | No | Available flag configs |

---

### `DocumentImageResource`

Image resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentImageSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentImageResource`](#documentimageresource)[] | No | Currently selected images |
| `resources` | [`DocumentImageResource`](#documentimageresource)[] | No | Available images |

---

### `DocumentNameResource`

Name resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`DocumentNameResource`](#documentnameresource) | No | Currently selected name resource |
| `resources` | [`DocumentNameResource`](#documentnameresource)[] | No | Available name resources |

---

### `DocumentParameterFieldResource`

Parameter field resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `field_id` | `string` | No | Associated field UUID |
| `parameter_id` | `string` | No | Associated parameter UUID |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`GetParameterResponse`](#getparameterresponse)[] | No | Currently selected parameters |
| `resources` | [`GetParameterResponse`](#getparameterresponse)[] | No | Available parameters |

---

### `DocumentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `document_id` | `string` | No | Document UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`DocumentFieldError`](#documentfielderror)[] | No | List of per-field errors |

---

### `DocumentTextResource`

Text resource for document.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `DocumentTextSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentTextResource`](#documenttextresource)[] | No | Currently selected text resources |
| `resources` | [`DocumentTextResource`](#documenttextresource)[] | No | Available text resources |

---

### `DocumentUploadSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`DocumentFileResource`](#documentfileresource)[] | No | Currently selected file uploads |
| `resources` | [`DocumentFileResource`](#documentfileresource)[] | No | Available file uploads |

---

### `DraftFileValue`

Value for creating a file via the draft endpoint.

Client provides the upload_id from a finalized TUS upload.
Server creates the full chain: files_resource → files_entry → file_uploads_entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | Upload UUID from a finalized TUS upload |

---

### `DraftTextValue`

Value for creating a text via the draft endpoint.

Client provides text content.
Server creates the full chain: uploads_entry → texts_resource → texts_entry → text_uploads_entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Text content to create |

---

### `GetDocumentDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `file_ids` | `string`[] | Yes | Associated file UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Associated parameter UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `text_ids` | `string`[] | Yes | Associated text UUIDs |

---

### `GetParameterResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the parameter |
| `name` | `string` | Yes | Parameter name |
| `description` | `string` | Yes | Parameter description |
| `value` | `string` | Yes | Parameter value |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `persona_parameter` | `boolean` | Yes | Whether this is a persona parameter |
| `document_parameter` | `boolean` | Yes | Whether this is a document parameter |
| `scenario_parameter` | `boolean` | Yes | Whether this is a scenario parameter |
| `video_parameter` | `boolean` | Yes | Whether this is a video parameter |
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `created_at` | `string` | Yes | Creation timestamp |
| `active` | `boolean` | Yes | Whether the parameter is active |
| `generated` | `boolean` | Yes | Whether the parameter was AI-generated |
| `mcp` | `boolean` | Yes | Whether the parameter is from MCP |

---

### `ListDocumentApiDocument`

Document type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | Document UUID |
| `name` | `string` | No | Document name |
| `description` | `string` | No | Document description |
| `department_ids` | `string`[] | No | Associated department IDs |
| `scenario_ids` | `string`[] | No | Associated scenario UUIDs |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `is_inactive` | `boolean` | No | Whether the document is inactive |
| `num_scenarios` | `integer` | No | Total number of scenarios |
| `active_scenario_count` | `integer` | No | Number of active scenarios |
| `upload_id` | `string` | No | Associated upload UUID |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `updated_at` | `string` | No | Last updated timestamp |

---

### `ListFilterOption`

Standardized option for list endpoint filter sections.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier for this filter option |
| `name` | `string` | No | Display name |
| `count` | `integer` | No | Number of matching records |
| `hex_code` | `string` | No | Hex color code for display |
| `value` | `string` | No | Internal value |
| `type` | `string` | No | Option type discriminator |

---

### `ListFilterSection`

Filter section with options and echoed request state.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ListFilterOption`](#listfilteroption)[] | No | Available filter options |
| `selected_ids` | `string`[] | No | Currently selected filter option IDs |
| `search` | `string` | No | Active search text for filtering |

---

### `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

### `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

### `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

### `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `UpdateDocumentItem`

Single document item for update — document_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | Yes | Document UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `is_inactive` | `boolean` | No | Whether the document is inactive |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `field_ids` | `string`[] | No | Parameter field UUIDs |
| `upload_ids` | `string`[] | No | File upload UUIDs |
| `image_ids` | `string`[] | No | Image UUIDs |
| `text_ids` | `string`[] | No | Text resource UUIDs |

---