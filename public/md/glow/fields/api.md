# Fields

## Endpoints

### `POST` `/fields/get`

Get Field

Get field information using the canonical shared field operation.

**Request body** (`GetFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |
| `descriptions_search` | `string` | No | Search query for description resources |
| `conditional_parameter_search` | `string` | No | Search query for conditional parameters |
| `conditional_parameter_show_selected` | `boolean` | No | Whether to show only selected parameters |

**Response** (`GetFieldApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `field_exists` | `boolean` | No | Whether the field exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this field |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `names` | [`FieldNameSection`](#fieldnamesection) | No | Name section with resources |
| `descriptions` | [`FieldDescriptionSection`](#fielddescriptionsection) | No | Description section with resources |
| `flags` | [`FieldFlagSection`](#fieldflagsection) | No | Flag section with configs |
| `departments` | [`FieldDepartmentSection`](#fielddepartmentsection) | No | Department section with resources |
| `conditional_parameters` | [`FieldConditionalParameterSection`](#fieldconditionalparametersection) | No | Conditional parameter section |

---

### `POST` `/fields/search`

Search Field

Search fields — composable infra architecture.

**Request body** (`SearchFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `parameter_ids` | `string`[] | No | — |
| `persona_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `parameter_search` | `string` | No | — |
| `persona_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListFieldApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `fields` | [`ListFieldApiField`](#listfieldapifield)[] | No | List of field items |
| `parameter_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for parameters |
| `persona_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for personas |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for departments |
| `total_count` | `integer` | No | Total number of fields |

---

### `POST` `/fields/create`

Create Field

Create fields using composable infra architecture.

**Request body** (`CreateFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`CreateFieldItem`](#createfielditem)[] | Yes | List of fields to create |

**Response** (`CreateFieldApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](#fieldresultitem)[] | Yes | Per-item creation results |

---

### `POST` `/fields/update`

Update Field

Update fields using composable infra architecture.

**Request body** (`UpdateFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`UpdateFieldItem`](#updatefielditem)[] | Yes | List of fields to update |

**Response** (`UpdateFieldApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](#fieldresultitem)[] | Yes | Per-item update results |

---

### `POST` `/fields/duplicate`

Duplicate Field

Duplicate a field — composable infra architecture.

**Request body** (`DuplicateFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | Yes | UUID of the field to duplicate |

**Response** (`DuplicateFieldApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `field_id` | `string` | Yes | UUID of the newly created field |
| `message` | `string` | Yes | Result message |

---

### `POST` `/fields/delete`

Delete Field

Bulk delete fields — composable infra architecture.

**Request body** (`DeleteFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_ids` | `string`[] | Yes | UUIDs of fields to delete |

**Response** (`DeleteFieldApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteFieldResult`](#deletefieldresult)[] | Yes | Per-item deletion results |

---

### `PATCH` `/fields/draft`

Patch Field Draft

Patch field draft — composable infra architecture.

**Request body** (`PatchFieldDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `expected_version` | `integer` | No | Expected draft version for optimistic locking |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |

**Response** (`PatchFieldDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`FieldDraftFormState`](#fielddraftformstate) | No | Server-authoritative form state |

---

### `POST` `/fields/drafts`

Get Field Drafts

List field drafts owned by the current profile.

**Response** (`GetFieldDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetFieldDraftResponse`](#getfielddraftresponse)[] | No | List of field draft entries |

---

### `POST` `/fields/docs`

Get Field Docs Endpoint

Get composed documentation for the field artifact.

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

### `POST` `/fields/export`

Export Fields

Export all fields as a clean, denormalized CSV.

**Request body** (`ExportFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field to export |

**Response** (`ExportFieldApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/fields/csv`

Parse Field Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseFieldCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateFieldItem`](#createfielditem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/fields/refresh`

Field Refresh

Refresh field materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreateFieldApiRequest`

Schema: CreateFieldApiRequest

**Request body** (`CreateFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`CreateFieldItem`](#createfielditem)[] | Yes | List of fields to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateFieldApiResponse`

Schema: CreateFieldApiResponse

**Request body** (`CreateFieldApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](#fieldresultitem)[] | Yes | Per-item creation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteFieldApiRequest`

Schema: DeleteFieldApiRequest

**Request body** (`DeleteFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_ids` | `string`[] | Yes | UUIDs of fields to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteFieldApiResponse`

Schema: DeleteFieldApiResponse

**Request body** (`DeleteFieldApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteFieldResult`](#deletefieldresult)[] | Yes | Per-item deletion results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateFieldApiRequest`

Schema: DuplicateFieldApiRequest

**Request body** (`DuplicateFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | Yes | UUID of the field to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateFieldApiResponse`

Schema: DuplicateFieldApiResponse

**Request body** (`DuplicateFieldApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `field_id` | `string` | Yes | UUID of the newly created field |
| `message` | `string` | Yes | Result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportFieldApiRequest`

Schema: ExportFieldApiRequest

**Request body** (`ExportFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field to export |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportFieldApiResponse`

Schema: ExportFieldApiResponse

**Request body** (`ExportFieldApiResponse`):

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

### `POST` `/stream/GetFieldApiRequest`

Schema: GetFieldApiRequest

**Request body** (`GetFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load |
| `descriptions_search` | `string` | No | Search query for description resources |
| `conditional_parameter_search` | `string` | No | Search query for conditional parameters |
| `conditional_parameter_show_selected` | `boolean` | No | Whether to show only selected parameters |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetFieldApiResponse`

Schema: GetFieldApiResponse

**Request body** (`GetFieldApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `field_exists` | `boolean` | No | Whether the field exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this field |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `names` | [`FieldNameSection`](#fieldnamesection) | No | Name section with resources |
| `descriptions` | [`FieldDescriptionSection`](#fielddescriptionsection) | No | Description section with resources |
| `flags` | [`FieldFlagSection`](#fieldflagsection) | No | Flag section with configs |
| `departments` | [`FieldDepartmentSection`](#fielddepartmentsection) | No | Department section with resources |
| `conditional_parameters` | [`FieldConditionalParameterSection`](#fieldconditionalparametersection) | No | Conditional parameter section |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetFieldDraftsApiResponse`

Schema: GetFieldDraftsApiResponse

**Request body** (`GetFieldDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetFieldDraftResponse`](#getfielddraftresponse)[] | No | List of field draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchFieldDraftApiRequest`

Schema: PatchFieldDraftApiRequest

**Request body** (`PatchFieldDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to update |
| `expected_version` | `integer` | No | Expected draft version for optimistic locking |
| `name` | `string` | No | Name value to resolve or create |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchFieldDraftApiResponse`

Schema: PatchFieldDraftApiResponse

**Request body** (`PatchFieldDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`FieldDraftFormState`](#fielddraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateFieldApiRequest`

Schema: UpdateFieldApiRequest

**Request body** (`UpdateFieldApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`UpdateFieldItem`](#updatefielditem)[] | Yes | List of fields to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateFieldApiResponse`

Schema: UpdateFieldApiResponse

**Request body** (`UpdateFieldApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](#fieldresultitem)[] | Yes | Per-item update results |

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

### `CreateFieldItem`

Single field item for create — no field_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new field |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `field_ids` | `string`[] | No | Related field UUIDs |

---

### `DeleteFieldResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `field_id` | `string` | Yes | UUID of the deleted field |
| `message` | `string` | Yes | Result message |

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

### `FieldConditionalParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`GetParameterResponse`](#getparameterresponse)[] | No | Currently assigned conditional parameters |
| `resources` | [`GetParameterResponse`](#getparameterresponse)[] | No | Available conditional parameter resources |

---

### `FieldDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available department resources |

---

### `FieldDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected description resource |
| `resources` | `any`[] | No | Available description resources |

---

### `FieldDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `description_id` | `string` | No | Resolved description resource UUID |
| `flag_id` | `string` | No | Resolved flag option UUID |
| `department_ids` | `string`[] | Yes | Assigned department UUIDs |
| `conditional_parameter_ids` | `string`[] | Yes | Assigned conditional parameter UUIDs |

---

### `FieldFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

### `FieldFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | UUID of the selected flag option |
| `show` | `boolean` | No | Whether the flag is visible to the client |
| `required` | `boolean` | No | Whether the flag is required |
| `generated` | `boolean` | No | Whether the flag was AI-generated |

---

### `FieldFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`FieldFlagConfig`](#fieldflagconfig) | No | Currently selected flag config |
| `resources` | [`FieldFlagConfig`](#fieldflagconfig)[] | No | Available flag configs |

---

### `FieldNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected name resource |
| `resources` | `any`[] | No | Available name resources |

---

### `FieldResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `field_id` | `string` | No | UUID of the created or updated field |
| `message` | `string` | Yes | Result message |
| `errors` | [`FieldFieldError`](#fieldfielderror)[] | No | Per-field validation errors |

---

### `GetFieldDraftResponse`

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
| `conditional_parameter_ids` | `string`[] | Yes | Associated conditional parameter UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |

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

### `ListFieldApiField`

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | Unique field identifier |
| `name` | `string` | No | Field display name |
| `description` | `string` | No | Field description text |
| `department_ids` | `string`[] | No | Associated department IDs |
| `conditional_parameter_ids` | `string`[] | No | Associated conditional parameter UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `is_inactive` | `boolean` | No | Whether the field is inactive |
| `can_edit` | `boolean` | No | Whether the actor can edit this field |
| `can_duplicate` | `boolean` | No | Whether the actor can duplicate this field |
| `can_delete` | `boolean` | No | Whether the actor can delete this field |
| `updated_at` | `string` | No | Timestamp of last update |

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

### `UpdateFieldItem`

Single field item for update — field_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | Yes | UUID of the field to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_id` | `string` | No | UUID of the flag option |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `field_ids` | `string`[] | No | Related field UUIDs |

---