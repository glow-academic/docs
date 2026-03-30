# Tools

## Endpoints

### `POST` `/tools/search`

Search Tool

Search tools — composable infra architecture.

**Request body** (`SearchToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `filter_agent_ids` | `string`[] | No | — |
| `filter_creatable` | `string`[] | No | — |
| `department_search` | `string` | No | — |
| `agent_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListToolApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tools` | [`ListToolApiTool`](#listtoolapitool)[] | No | List of tool entries |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Department filter options |
| `agent_filter` | [`ListFilterSection`](#listfiltersection) | No | Agent filter options |
| `creatable_filter` | [`ListFilterSection`](#listfiltersection) | No | Creatable filter options |
| `total_count` | `integer` | No | Total number of tools |

---

### `POST` `/tools/get`

Get Tool

Get tool information using the canonical shared tool operation.

**Request body** (`GetToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

**Response** (`GetToolApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tool_exists` | `boolean` | No | Whether the tool exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the tool |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `args_show_ai_generate` | `boolean` | No | Show AI generate for args step |
| `arg_positions_show_ai_generate` | `boolean` | No | Show AI generate for arg positions step |
| `args_outputs_show_ai_generate` | `boolean` | No | Show AI generate for args outputs step |
| `names` | [`ToolNameSection`](#toolnamesection) | No | Name section with resources |
| `descriptions` | [`ToolDescriptionSection`](#tooldescriptionsection) | No | Description section with resources |
| `flags` | [`ToolFlagSection`](#toolflagsection) | No | Flag section with configs |
| `args` | [`ToolArgSection`](#toolargsection) | No | Argument section with resources |
| `arg_positions` | [`ToolArgPositionSection`](#toolargpositionsection) | No | Argument position section |
| `args_outputs` | [`ToolArgOutputSection`](#toolargoutputsection) | No | Argument output section |
| `artifacts` | [`ToolArtifactSection`](#toolartifactsection) | No | Artifact section with resources |
| `operations` | [`ToolOperationSection`](#tooloperationsection) | No | Operation section with resources |

---

### `POST` `/tools/create`

Create Tool

Create tools using composable infra architecture.

**Request body** (`CreateToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`CreateToolItem`](#createtoolitem)[] | Yes | List of tools to create |

**Response** (`CreateToolApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](#toolresultitem)[] | Yes | List of operation results |

---

### `POST` `/tools/update`

Update Tool

Update tools using composable infra architecture.

**Request body** (`UpdateToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`UpdateToolItem`](#updatetoolitem)[] | Yes | List of tools to update |

**Response** (`UpdateToolApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](#toolresultitem)[] | Yes | List of operation results |

---

### `POST` `/tools/duplicate`

Duplicate Tool

Duplicate a tool — composable infra architecture.

**Request body** (`DuplicateToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Tool identifier to duplicate |

**Response** (`DuplicateToolApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `tool_id` | `string` | Yes | New duplicated tool identifier |
| `message` | `string` | Yes | Result message |

---

### `POST` `/tools/delete`

Delete Tool

Bulk delete tools — composable infra architecture.

**Request body** (`DeleteToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_ids` | `string`[] | Yes | List of tool IDs to delete |

**Response** (`DeleteToolApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteToolResult`](#deletetoolresult)[] | Yes | List of deletion results |

---

### `PATCH` `/tools/draft`

Patch Tool Draft

Patch tool draft — composable infra architecture.

**Request body** (`PatchToolDraftApiRequest`):

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
| `arg_ids` | `string`[] | No | Argument identifiers |
| `arg_position_ids` | `string`[] | No | Argument position identifiers |
| `args_output_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |

**Response** (`PatchToolDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ToolDraftFormState`](#tooldraftformstate) | No | Server-authoritative form state |

---

### `POST` `/tools/drafts`

Get Tool Drafts

List tool drafts owned by the current profile.

**Response** (`GetToolDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetToolDraftResponse`](#gettooldraftresponse)[] | No | List of tool draft entries |

---

### `POST` `/tools/export`

Export Tools

Export all tools as a clean, denormalized CSV.

**Request body** (`ExportToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool identifier to export |

**Response** (`ExportToolApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/tools/csv`

Parse Tool Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseToolCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateToolItem`](#createtoolitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/tools/docs`

Get Tool Docs Endpoint

Get composed documentation for the tool artifact.

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

### `POST` `/tools/refresh`

Tool Refresh

Refresh tool materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreateToolApiRequest`

Schema: CreateToolApiRequest

**Request body** (`CreateToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`CreateToolItem`](#createtoolitem)[] | Yes | List of tools to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateToolApiResponse`

Schema: CreateToolApiResponse

**Request body** (`CreateToolApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](#toolresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteToolApiRequest`

Schema: DeleteToolApiRequest

**Request body** (`DeleteToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_ids` | `string`[] | Yes | List of tool IDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteToolApiResponse`

Schema: DeleteToolApiResponse

**Request body** (`DeleteToolApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteToolResult`](#deletetoolresult)[] | Yes | List of deletion results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateToolApiRequest`

Schema: DuplicateToolApiRequest

**Request body** (`DuplicateToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Tool identifier to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateToolApiResponse`

Schema: DuplicateToolApiResponse

**Request body** (`DuplicateToolApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `tool_id` | `string` | Yes | New duplicated tool identifier |
| `message` | `string` | Yes | Result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportToolApiRequest`

Schema: ExportToolApiRequest

**Request body** (`ExportToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool identifier to export |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportToolApiResponse`

Schema: ExportToolApiResponse

**Request body** (`ExportToolApiResponse`):

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

### `POST` `/stream/GetToolApiRequest`

Schema: GetToolApiRequest

**Request body** (`GetToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetToolApiResponse`

Schema: GetToolApiResponse

**Request body** (`GetToolApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tool_exists` | `boolean` | No | Whether the tool exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the tool |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `args_show_ai_generate` | `boolean` | No | Show AI generate for args step |
| `arg_positions_show_ai_generate` | `boolean` | No | Show AI generate for arg positions step |
| `args_outputs_show_ai_generate` | `boolean` | No | Show AI generate for args outputs step |
| `names` | [`ToolNameSection`](#toolnamesection) | No | Name section with resources |
| `descriptions` | [`ToolDescriptionSection`](#tooldescriptionsection) | No | Description section with resources |
| `flags` | [`ToolFlagSection`](#toolflagsection) | No | Flag section with configs |
| `args` | [`ToolArgSection`](#toolargsection) | No | Argument section with resources |
| `arg_positions` | [`ToolArgPositionSection`](#toolargpositionsection) | No | Argument position section |
| `args_outputs` | [`ToolArgOutputSection`](#toolargoutputsection) | No | Argument output section |
| `artifacts` | [`ToolArtifactSection`](#toolartifactsection) | No | Artifact section with resources |
| `operations` | [`ToolOperationSection`](#tooloperationsection) | No | Operation section with resources |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetToolDraftsApiResponse`

Schema: GetToolDraftsApiResponse

**Request body** (`GetToolDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetToolDraftResponse`](#gettooldraftresponse)[] | No | List of tool draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchToolDraftApiRequest`

Schema: PatchToolDraftApiRequest

**Request body** (`PatchToolDraftApiRequest`):

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
| `arg_ids` | `string`[] | No | Argument identifiers |
| `arg_position_ids` | `string`[] | No | Argument position identifiers |
| `args_output_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchToolDraftApiResponse`

Schema: PatchToolDraftApiResponse

**Request body** (`PatchToolDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ToolDraftFormState`](#tooldraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateToolApiRequest`

Schema: UpdateToolApiRequest

**Request body** (`UpdateToolApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`UpdateToolItem`](#updatetoolitem)[] | Yes | List of tools to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateToolApiResponse`

Schema: UpdateToolApiResponse

**Request body** (`UpdateToolApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](#toolresultitem)[] | Yes | List of operation results |

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

### `CreateToolItem`

Single tool item for create — no tool_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned identifier |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `arg_positions_ids` | `string`[] | No | Argument position identifiers |
| `args_ids` | `string`[] | No | Argument identifiers |
| `args_outputs_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |
| `tool_ids` | `string`[] | No | Related tool identifiers |

---

### `DeleteToolResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `tool_id` | `string` | Yes | Deleted tool identifier |
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

### `GetToolDraftResponse`

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
| `arg_position_ids` | `string`[] | Yes | Associated arg position UUIDs |
| `arg_ids` | `string`[] | Yes | Associated arg UUIDs |
| `args_output_ids` | `string`[] | Yes | Associated args output UUIDs |
| `artifact_ids` | `string`[] | Yes | Associated artifact UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `operation_ids` | `string`[] | Yes | Associated operation UUIDs |
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

### `ListToolApiTool`

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool unique identifier |
| `name` | `string` | No | Display name of the tool |
| `description` | `string` | No | Tool description text |
| `active` | `boolean` | No | Whether this tool is currently active |
| `updated_at` | `string` | No | Timestamp of last update |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |

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

### `ToolArgOutputSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned argument outputs |
| `resources` | `any`[] | No | Available argument outputs |

---

### `ToolArgPositionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned argument positions |
| `resources` | `any`[] | No | Available argument positions |

---

### `ToolArgSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned arguments |
| `resources` | `any`[] | No | Available arguments |

---

### `ToolArtifactSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned artifacts |
| `resources` | `any`[] | No | Available artifacts |

---

### `ToolDescriptionSection`

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

### `ToolDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `arg_ids` | `string`[] | Yes | Argument identifiers |
| `arg_position_ids` | `string`[] | Yes | Argument position identifiers |
| `args_output_ids` | `string`[] | Yes | Argument output identifiers |
| `artifact_ids` | `string`[] | Yes | Artifact identifiers |
| `operation_ids` | `string`[] | Yes | Operation identifiers |

---

### `ToolFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

### `ToolFlagConfig`

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

### `ToolFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ToolFlagConfig`](#toolflagconfig) | No | Currently active flag config |
| `resources` | [`ToolFlagConfig`](#toolflagconfig)[] | No | Available flag configs |

---

### `ToolNameSection`

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

### `ToolOperationSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned operations |
| `resources` | `any`[] | No | Available operations |

---

### `ToolResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `tool_id` | `string` | No | Tool unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ToolFieldError`](#toolfielderror)[] | No | List of field-level errors |

---

### `UpdateToolItem`

Single tool item for update — tool_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Target tool identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `arg_positions_ids` | `string`[] | No | Argument position identifiers |
| `args_ids` | `string`[] | No | Argument identifiers |
| `args_outputs_ids` | `string`[] | No | Argument output identifiers |
| `artifact_ids` | `string`[] | No | Artifact identifiers |
| `operation_ids` | `string`[] | No | Operation identifiers |
| `tool_ids` | `string`[] | No | Related tool identifiers |

---