# Parameters

## Endpoints

### `POST` `/parameters/get`

Get Parameter

Get parameter information using the canonical shared parameter operation.

**Request body** (`GetParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

**Response** (`GetParameterApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `parameter_exists` | `boolean` | No | Whether the parameter exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the parameter |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `fields_step_show_ai_generate` | `boolean` | No | Show AI generate for fields step |
| `names` | [`ParameterNameSection`](#parameternamesection) | No | Name section with resources |
| `descriptions` | [`ParameterDescriptionSection`](#parameterdescriptionsection) | No | Description section with resources |
| `flags` | [`ParameterFlagSection`](#parameterflagsection) | No | Flag section with configs |
| `departments` | [`ParameterDepartmentSection`](#parameterdepartmentsection) | No | Department section with resources |
| `fields` | [`ParameterFieldSection`](#parameterfieldsection) | No | Field section with resources |

---

### `POST` `/parameters/search`

Search Parameter

Search parameters — composable infra architecture.

**Request body** (`SearchParameterApiRequest`):

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

**Response** (`ListParameterApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `parameters` | [`ListParameterApiParameter`](#listparameterapiparameter)[] | No | List of parameter entries |
| `scenario_filter` | [`ListFilterSection`](#listfiltersection) | No | Scenario filter options |
| `field_filter` | [`ListFilterSection`](#listfiltersection) | No | Field filter options |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Department filter options |
| `total_count` | `integer` | No | Total number of parameters |

---

### `POST` `/parameters/create`

Create Parameter

Create parameters using composable infra architecture.

**Request body** (`CreateParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`CreateParameterItem`](#createparameteritem)[] | Yes | List of parameters to create |

**Response** (`CreateParameterApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](#parameterresultitem)[] | Yes | List of operation results |

---

### `POST` `/parameters/update`

Update Parameter

Update parameters using composable infra architecture.

**Request body** (`UpdateParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`UpdateParameterItem`](#updateparameteritem)[] | Yes | List of parameters to update |

**Response** (`UpdateParameterApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](#parameterresultitem)[] | Yes | List of operation results |

---

### `POST` `/parameters/duplicate`

Duplicate Parameter

Duplicate a parameter — composable infra architecture.

**Request body** (`DuplicateParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | Yes | Parameter identifier to duplicate |

**Response** (`DuplicateParameterApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `parameter_id` | `string` | Yes | New duplicated parameter identifier |
| `message` | `string` | Yes | Result message |

---

### `POST` `/parameters/delete`

Delete Parameter

Bulk delete parameters — composable infra architecture.

**Request body** (`DeleteParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_ids` | `string`[] | Yes | List of parameter IDs to delete |

**Response** (`DeleteParameterApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteParameterResult`](#deleteparameterresult)[] | Yes | List of deletion results |

---

### `PATCH` `/parameters/draft`

Patch Parameter Draft

Patch parameter draft — composable infra architecture.

**Request body** (`PatchParameterDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `expected_version` | `integer` | No | Expected draft version for concurrency |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `department_ids` | `string`[] | No | Department identifiers |
| `field_ids` | `string`[] | No | Field identifiers |

**Response** (`PatchParameterDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ParameterDraftFormState`](#parameterdraftformstate) | No | Server-authoritative form state |

---

### `POST` `/parameters/drafts`

Get Parameter Drafts

List parameter drafts owned by the current profile.

**Response** (`GetParameterDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetParameterDraftResponse`](#getparameterdraftresponse)[] | No | List of parameter draft entries |

---

### `POST` `/parameters/docs`

Get Parameter Docs Endpoint

Get composed documentation for the parameter artifact.

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

### `POST` `/parameters/export`

Export Parameters

Export all parameters as a clean, denormalized CSV.

**Request body** (`ExportParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier to export |

**Response** (`ExportParameterApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/parameters/csv`

Parse Parameter Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseParameterCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateParameterItem`](#createparameteritem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/parameters/refresh`

Parameter Refresh

Refresh parameter materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreateParameterApiRequest`

Schema: CreateParameterApiRequest

**Request body** (`CreateParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`CreateParameterItem`](#createparameteritem)[] | Yes | List of parameters to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateParameterApiResponse`

Schema: CreateParameterApiResponse

**Request body** (`CreateParameterApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](#parameterresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteParameterApiRequest`

Schema: DeleteParameterApiRequest

**Request body** (`DeleteParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_ids` | `string`[] | Yes | List of parameter IDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteParameterApiResponse`

Schema: DeleteParameterApiResponse

**Request body** (`DeleteParameterApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteParameterResult`](#deleteparameterresult)[] | Yes | List of deletion results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateParameterApiRequest`

Schema: DuplicateParameterApiRequest

**Request body** (`DuplicateParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | Yes | Parameter identifier to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateParameterApiResponse`

Schema: DuplicateParameterApiResponse

**Request body** (`DuplicateParameterApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `parameter_id` | `string` | Yes | New duplicated parameter identifier |
| `message` | `string` | Yes | Result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportParameterApiRequest`

Schema: ExportParameterApiRequest

**Request body** (`ExportParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter identifier to export |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportParameterApiResponse`

Schema: ExportParameterApiResponse

**Request body** (`ExportParameterApiResponse`):

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

### `POST` `/stream/GetParameterApiRequest`

Schema: GetParameterApiRequest

**Request body** (`GetParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetParameterApiResponse`

Schema: GetParameterApiResponse

**Request body** (`GetParameterApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `parameter_exists` | `boolean` | No | Whether the parameter exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the parameter |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `fields_step_show_ai_generate` | `boolean` | No | Show AI generate for fields step |
| `names` | [`ParameterNameSection`](#parameternamesection) | No | Name section with resources |
| `descriptions` | [`ParameterDescriptionSection`](#parameterdescriptionsection) | No | Description section with resources |
| `flags` | [`ParameterFlagSection`](#parameterflagsection) | No | Flag section with configs |
| `departments` | [`ParameterDepartmentSection`](#parameterdepartmentsection) | No | Department section with resources |
| `fields` | [`ParameterFieldSection`](#parameterfieldsection) | No | Field section with resources |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetParameterDraftsApiResponse`

Schema: GetParameterDraftsApiResponse

**Request body** (`GetParameterDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetParameterDraftResponse`](#getparameterdraftresponse)[] | No | List of parameter draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchParameterDraftApiRequest`

Schema: PatchParameterDraftApiRequest

**Request body** (`PatchParameterDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft ID to update |
| `expected_version` | `integer` | No | Expected draft version for concurrency |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | Name resource identifier |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | Description resource identifier |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `department_ids` | `string`[] | No | Department identifiers |
| `field_ids` | `string`[] | No | Field identifiers |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchParameterDraftApiResponse`

Schema: PatchParameterDraftApiResponse

**Request body** (`PatchParameterDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ParameterDraftFormState`](#parameterdraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateParameterApiRequest`

Schema: UpdateParameterApiRequest

**Request body** (`UpdateParameterApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`UpdateParameterItem`](#updateparameteritem)[] | Yes | List of parameters to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateParameterApiResponse`

Schema: UpdateParameterApiResponse

**Request body** (`UpdateParameterApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](#parameterresultitem)[] | Yes | List of operation results |

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

### `CreateParameterItem`

Single parameter item for create — no parameter_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `field_ids` | `string`[] | No | Field identifiers |

---

### `DeleteParameterResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `parameter_id` | `string` | Yes | Deleted parameter identifier |
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

### `GetParameterDraftResponse`

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
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |

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

### `ListParameterApiParameter`

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | Parameter unique identifier |
| `name` | `string` | No | Display name of the parameter |
| `description` | `string` | No | Parameter description text |
| `active` | `boolean` | No | Whether this parameter is currently active |
| `department_ids` | `string`[] | No | Associated department identifiers |
| `scenario_ids` | `string`[] | No | Associated scenario identifiers |
| `document_ids` | `string`[] | No | Associated document identifiers |
| `num_items` | `integer` | No | Number of items in this parameter |
| `sample_items` | `string`[] | No | Sample items for preview |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `updated_at` | `string` | No | Timestamp of last update |

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

### `ParameterDepartmentResource`

Department resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ParameterDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ParameterDepartmentResource`](#parameterdepartmentresource)[] | No | Currently assigned departments |
| `resources` | [`ParameterDepartmentResource`](#parameterdepartmentresource)[] | No | Available departments |

---

### `ParameterDescriptionResource`

Description resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ParameterDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ParameterDescriptionResource`](#parameterdescriptionresource) | No | Currently selected description resource |
| `resources` | [`ParameterDescriptionResource`](#parameterdescriptionresource)[] | No | Available description resources |

---

### `ParameterDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `field_ids` | `string`[] | Yes | Field identifiers |

---

### `ParameterFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

### `ParameterFieldResource`

Parameter field resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `field_id` | `string` | No | Associated field identifier |
| `parameter_id` | `string` | No | Parent parameter identifier |
| `name` | `string` | No | Field display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ParameterFieldResource`](#parameterfieldresource)[] | No | Currently assigned fields |
| `resources` | [`ParameterFieldResource`](#parameterfieldresource)[] | No | Available fields |

---

### `ParameterFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Human-readable flag label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Option ID to use when enabling |
| `show` | `boolean` | No | Whether to display this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this flag was AI-generated |

---

### `ParameterFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ParameterFlagConfig`](#parameterflagconfig)[] | No | Currently active flag configs |
| `resources` | [`ParameterFlagConfig`](#parameterflagconfig)[] | No | Available flag configs |

---

### `ParameterNameResource`

Name resource for parameter.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ParameterNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ParameterNameResource`](#parameternameresource) | No | Currently selected name resource |
| `resources` | [`ParameterNameResource`](#parameternameresource)[] | No | Available name resources |

---

### `ParameterResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `parameter_id` | `string` | No | Parameter unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ParameterFieldError`](#parameterfielderror)[] | No | List of field-level errors |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `UpdateParameterItem`

Single parameter item for update — parameter_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | Yes | Target parameter identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `field_ids` | `string`[] | No | Field identifiers |

---