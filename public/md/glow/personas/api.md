# Personas

## Endpoints

### `POST` `/personas/get`

Get Persona

Get persona information using the canonical shared persona operation.

**Request body** (`GetPersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load instead of published state |
| `color_search` | `string` | No | Filter color options by search text |
| `icon_search` | `string` | No | Filter icon options by search text |
| `descriptions_search` | `string` | No | Filter description options by search text |
| `instructions_search` | `string` | No | Filter instruction options by search text |
| `parameter_field_search` | `string` | No | Filter parameter field options by search text |
| `parameter_ids` | `string`[] | No | Parameter group IDs to expand in the response |
| `color_show_selected` | `boolean` | No | When true, only return currently selected colors |
| `icon_show_selected` | `boolean` | No | When true, only return currently selected icons |
| `parameter_field_show_selected` | `boolean` | No | When true, only return currently selected parameter fields |

**Response** (`GetPersonaApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the authenticated user |
| `persona_exists` | `boolean` | No | Whether the requested persona exists |
| `can_edit` | `boolean` | No | Whether the current user has edit permission |
| `disabled_reason` | `string` | No | Human-readable reason if editing is disabled |
| `draft_version` | `integer` | No | Current draft version number for optimistic concurrency |
| `group_id` | `string` | No | Generation group UUID for AI operations |
| `basic_show_ai_generate` | `boolean` | No | Whether AI generation is available for basic fields (name, color, icon) |
| `content_show_ai_generate` | `boolean` | No | Whether AI generation is available for content fields (description, instructions, examples) |
| `parameters_step_show_ai_generate` | `boolean` | No | Whether AI generation is available for parameter fields |
| `names` | [`PersonaNameSection`](#personanamesection) | No | Name resource section with current selection and options |
| `descriptions` | [`PersonaDescriptionSection`](#personadescriptionsection) | No | Description resource section with current selection and options |
| `colors` | [`PersonaColorSection`](#personacolorsection) | No | Color resource section with current selection and options |
| `icons` | [`PersonaIconSection`](#personaiconsection) | No | Icon resource section with current selection and options |
| `instructions` | [`PersonaInstructionSection`](#personainstructionsection) | No | Instruction resource section with current selection and options |
| `flags` | [`PersonaFlagSection`](#personaflagsection) | No | Boolean flag configuration section (e.g. active status) |
| `departments` | [`PersonaDepartmentSection`](#personadepartmentsection) | No | Department association section with current selections and options |
| `parameter_fields` | [`PersonaParameterFieldSection`](#personaparameterfieldsection) | No | Parameter field section with current selections and options |
| `examples` | [`PersonaExampleSection`](#personaexamplesection) | No | Example resource section with current selections and options |
| `parameters` | [`PersonaParameterSection`](#personaparametersection) | No | Parameter section with current selections and options |
| `voices` | [`PersonaVoiceSection`](#personavoicesection) | No | Voice resource section with current selections and options |
| `fields` | [`GetFieldResponse`](#getfieldresponse)[] | No | All available field definitions (computed, never saved) |
| `resolved_parameter_ids` | `string`[] | No | Parameter IDs derived from saved parameter_fields |

---

### `POST` `/personas/search`

Search Persona

Search personas — composable infra architecture.

**Request body** (`SearchPersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Full-text search query for personas |
| `scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `field_ids` | `string`[] | No | Filter by field UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `scenario_search` | `string` | No | Search text for scenario facet |
| `field_search` | `string` | No | Search text for field facet |
| `department_search` | `string` | No | Search text for department facet |
| `color_search` | `string` | No | Search text for color facet |
| `icon_search` | `string` | No | Search text for icon facet |
| `voice_search` | `string` | No | Search text for voice facet |
| `instruction_search` | `string` | No | Search text for instruction facet |
| `page_size` | `integer` | No | Number of results per page |
| `page_offset` | `integer` | No | Pagination offset |

**Response** (`ListPersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the authenticated user |
| `personas` | [`ListPersonaApiPersona`](#listpersonaapipersona)[] | No | List of personas with computed permissions |
| `scenario_filter` | [`ListFilterSection`](#listfiltersection) | No | Scenario filter options for the list UI |
| `field_filter` | [`ListFilterSection`](#listfiltersection) | No | Field filter options for the list UI |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Department filter options for the list UI |
| `color_filter` | [`ListFilterSection`](#listfiltersection) | No | Color filter options for bulk edit |
| `icon_filter` | [`ListFilterSection`](#listfiltersection) | No | Icon filter options for bulk edit |
| `voice_filter` | [`ListFilterSection`](#listfiltersection) | No | Voice filter options for bulk edit |
| `instruction_filter` | [`ListFilterSection`](#listfiltersection) | No | Instruction filter options for bulk edit |
| `total_count` | `integer` | No | Total number of personas matching filters |

---

### `POST` `/personas/create`

Create Persona

Create personas using composable infra architecture.

**Request body** (`CreatePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`CreatePersonaItem`](#createpersonaitem)[] | Yes | List of persona items to create |

**Response** (`CreatePersonaApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](#personaresultitem)[] | Yes | Per-persona creation results |

---

### `POST` `/personas/csv`

Parse Persona Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParsePersonaCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreatePersonaItem`](#createpersonaitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/personas/update`

Update Persona

Update personas using composable infra architecture.

**Request body** (`UpdatePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`UpdatePersonaItem`](#updatepersonaitem)[] | Yes | List of persona items to update |

**Response** (`UpdatePersonaApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](#personaresultitem)[] | Yes | Per-persona update results |

---

### `POST` `/personas/duplicate`

Duplicate Persona

Duplicate a persona — composable infra architecture.

**Request body** (`DuplicatePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | Yes | UUID of the persona to duplicate |

**Response** (`DuplicatePersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `persona_id` | `string` | Yes | UUID of the newly created duplicate persona |
| `message` | `string` | Yes | Human-readable result message |

---

### `POST` `/personas/delete`

Delete Persona

Bulk delete personas — composable infra architecture.

**Request body** (`DeletePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_ids` | `string`[] | Yes | List of persona UUIDs to delete |

**Response** (`DeletePersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeletePersonaResult`](#deletepersonaresult)[] | Yes | Per-persona deletion results |

---

### `PATCH` `/personas/draft`

Patch Persona Draft

Patch persona draft — composable infra architecture.

**Request body** (`PatchPersonaDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch (omit to create a new draft) |
| `expected_version` | `integer` | No | Expected draft version for optimistic concurrency control |
| `name` | `string` | No | Display name text (creates new name resource) |
| `name_id` | `string` | No | UUID of an existing name resource to select |
| `description` | `string` | No | Description text (creates new description resource) |
| `description_id` | `string` | No | UUID of an existing description resource to select |
| `instructions` | `string` | No | Instruction template text (creates new instruction resource) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource to select |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `example_ids` | `string`[] | No | Existing example resource UUIDs to select |
| `color_id` | `string` | No | UUID of a color resource to select |
| `icon_id` | `string` | No | UUID of an icon resource to select |
| `flag_id` | `string` | No | UUID of a flag option to set |
| `department_ids` | `string`[] | No | Department UUIDs to associate |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate |

**Response** (`PatchPersonaDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft operation succeeded |
| `draft_id` | `string` | Yes | UUID of the created or updated draft |
| `new_version` | `integer` | Yes | New draft version number after this patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`DraftFormState`](#draftformstate) | Yes | Complete form state after patch — client should replace local state |

---

### `POST` `/personas/drafts`

Get Persona Drafts

List persona drafts owned by the current profile.

**Response** (`GetPersonaDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetPersonaDraftResponse`](#getpersonadraftresponse)[] | No | List of persona drafts |

---

### `POST` `/personas/docs`

Get Persona Docs Endpoint

Get composed documentation for the persona artifact.

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

### `POST` `/personas/export`

Export Personas

Export all personas as a clean, denormalized CSV.

**Request body** (`ExportPersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of a specific persona to export (omit for bulk export) |
| `search` | `string` | No | Filter personas by search text |
| `scenario_ids` | `string`[] | No | Filter to personas used in these scenarios |
| `field_ids` | `string`[] | No | Filter to personas with these fields |
| `filter_department_ids` | `string`[] | No | Filter to personas in these departments |

**Response** (`ExportPersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | CSV content as a string |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export (text/csv) |
| `row_count` | `integer` | Yes | Number of data rows in the export |

---

### `POST` `/personas/refresh`

Persona Refresh

Refresh persona materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreatePersonaApiRequest`

Schema: CreatePersonaApiRequest

**Request body** (`CreatePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`CreatePersonaItem`](#createpersonaitem)[] | Yes | List of persona items to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreatePersonaApiResponse`

Schema: CreatePersonaApiResponse

**Request body** (`CreatePersonaApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](#personaresultitem)[] | Yes | Per-persona creation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeletePersonaApiRequest`

Schema: DeletePersonaApiRequest

**Request body** (`DeletePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_ids` | `string`[] | Yes | List of persona UUIDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeletePersonaApiResponse`

Schema: DeletePersonaApiResponse

**Request body** (`DeletePersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeletePersonaResult`](#deletepersonaresult)[] | Yes | Per-persona deletion results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicatePersonaApiRequest`

Schema: DuplicatePersonaApiRequest

**Request body** (`DuplicatePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | Yes | UUID of the persona to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicatePersonaApiResponse`

Schema: DuplicatePersonaApiResponse

**Request body** (`DuplicatePersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `persona_id` | `string` | Yes | UUID of the newly created duplicate persona |
| `message` | `string` | Yes | Human-readable result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportPersonaApiRequest`

Schema: ExportPersonaApiRequest

**Request body** (`ExportPersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of a specific persona to export (omit for bulk export) |
| `search` | `string` | No | Filter personas by search text |
| `scenario_ids` | `string`[] | No | Filter to personas used in these scenarios |
| `field_ids` | `string`[] | No | Filter to personas with these fields |
| `filter_department_ids` | `string`[] | No | Filter to personas in these departments |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportPersonaApiResponse`

Schema: ExportPersonaApiResponse

**Request body** (`ExportPersonaApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | CSV content as a string |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export (text/csv) |
| `row_count` | `integer` | Yes | Number of data rows in the export |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetPersonaApiRequest`

Schema: GetPersonaApiRequest

**Request body** (`GetPersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load instead of published state |
| `color_search` | `string` | No | Filter color options by search text |
| `icon_search` | `string` | No | Filter icon options by search text |
| `descriptions_search` | `string` | No | Filter description options by search text |
| `instructions_search` | `string` | No | Filter instruction options by search text |
| `parameter_field_search` | `string` | No | Filter parameter field options by search text |
| `parameter_ids` | `string`[] | No | Parameter group IDs to expand in the response |
| `color_show_selected` | `boolean` | No | When true, only return currently selected colors |
| `icon_show_selected` | `boolean` | No | When true, only return currently selected icons |
| `parameter_field_show_selected` | `boolean` | No | When true, only return currently selected parameter fields |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetPersonaApiResponse`

Schema: GetPersonaApiResponse

**Request body** (`GetPersonaApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the authenticated user |
| `persona_exists` | `boolean` | No | Whether the requested persona exists |
| `can_edit` | `boolean` | No | Whether the current user has edit permission |
| `disabled_reason` | `string` | No | Human-readable reason if editing is disabled |
| `draft_version` | `integer` | No | Current draft version number for optimistic concurrency |
| `group_id` | `string` | No | Generation group UUID for AI operations |
| `basic_show_ai_generate` | `boolean` | No | Whether AI generation is available for basic fields (name, color, icon) |
| `content_show_ai_generate` | `boolean` | No | Whether AI generation is available for content fields (description, instructions, examples) |
| `parameters_step_show_ai_generate` | `boolean` | No | Whether AI generation is available for parameter fields |
| `names` | [`PersonaNameSection`](#personanamesection) | No | Name resource section with current selection and options |
| `descriptions` | [`PersonaDescriptionSection`](#personadescriptionsection) | No | Description resource section with current selection and options |
| `colors` | [`PersonaColorSection`](#personacolorsection) | No | Color resource section with current selection and options |
| `icons` | [`PersonaIconSection`](#personaiconsection) | No | Icon resource section with current selection and options |
| `instructions` | [`PersonaInstructionSection`](#personainstructionsection) | No | Instruction resource section with current selection and options |
| `flags` | [`PersonaFlagSection`](#personaflagsection) | No | Boolean flag configuration section (e.g. active status) |
| `departments` | [`PersonaDepartmentSection`](#personadepartmentsection) | No | Department association section with current selections and options |
| `parameter_fields` | [`PersonaParameterFieldSection`](#personaparameterfieldsection) | No | Parameter field section with current selections and options |
| `examples` | [`PersonaExampleSection`](#personaexamplesection) | No | Example resource section with current selections and options |
| `parameters` | [`PersonaParameterSection`](#personaparametersection) | No | Parameter section with current selections and options |
| `voices` | [`PersonaVoiceSection`](#personavoicesection) | No | Voice resource section with current selections and options |
| `fields` | [`GetFieldResponse`](#getfieldresponse)[] | No | All available field definitions (computed, never saved) |
| `resolved_parameter_ids` | `string`[] | No | Parameter IDs derived from saved parameter_fields |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetPersonaDraftsApiResponse`

Schema: GetPersonaDraftsApiResponse

**Request body** (`GetPersonaDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetPersonaDraftResponse`](#getpersonadraftresponse)[] | No | List of persona drafts |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchPersonaDraftApiRequest`

Schema: PatchPersonaDraftApiRequest

**Request body** (`PatchPersonaDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch (omit to create a new draft) |
| `expected_version` | `integer` | No | Expected draft version for optimistic concurrency control |
| `name` | `string` | No | Display name text (creates new name resource) |
| `name_id` | `string` | No | UUID of an existing name resource to select |
| `description` | `string` | No | Description text (creates new description resource) |
| `description_id` | `string` | No | UUID of an existing description resource to select |
| `instructions` | `string` | No | Instruction template text (creates new instruction resource) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource to select |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `example_ids` | `string`[] | No | Existing example resource UUIDs to select |
| `color_id` | `string` | No | UUID of a color resource to select |
| `icon_id` | `string` | No | UUID of an icon resource to select |
| `flag_id` | `string` | No | UUID of a flag option to set |
| `department_ids` | `string`[] | No | Department UUIDs to associate |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchPersonaDraftApiResponse`

Schema: PatchPersonaDraftApiResponse

**Request body** (`PatchPersonaDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft operation succeeded |
| `draft_id` | `string` | Yes | UUID of the created or updated draft |
| `new_version` | `integer` | Yes | New draft version number after this patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`DraftFormState`](#draftformstate) | Yes | Complete form state after patch — client should replace local state |

**Response:**

```
`object`
```

---

### `POST` `/stream/PersonaGenerationProgressEvent`

Schema: PersonaGenerationProgressEvent

**Request body** (`PersonaGenerationProgressEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | No | — |
| `resource_type` | `string` | No | — |
| `group_id` | `string` | No | — |
| `artifact_id` | `string` | No | — |
| `run_id` | `string` | No | — |
| `success` | `boolean` | No | — |
| `message` | `string` | No | — |
| `error_stage` | `string` | No | — |
| `tool_call_id` | `string` | No | — |
| `tool_name` | `string` | No | — |
| `arguments_delta` | `string` | No | — |
| `id` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `example` | `string` | No | — |
| `template` | `string` | No | — |
| `hex_code` | `string` | No | — |
| `value` | `string` | No | — |
| `icon` | `string` | No | — |
| `type` | `string` | No | — |
| `department_ids` | `any`[] | No | — |
| `setting_ids` | `any`[] | No | — |
| `field_id` | `string` | No | — |
| `updated_at` | `string` | No | — |
| `parameter_id` | `string` | No | — |
| `conditional_parameter_id` | `string` | No | — |
| `conditional_parameter_ids` | `any`[] | No | — |
| `voice` | `string` | No | — |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdatePersonaApiRequest`

Schema: UpdatePersonaApiRequest

**Request body** (`UpdatePersonaApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`UpdatePersonaItem`](#updatepersonaitem)[] | Yes | List of persona items to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdatePersonaApiResponse`

Schema: UpdatePersonaApiResponse

**Request body** (`UpdatePersonaApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](#personaresultitem)[] | Yes | Per-persona update results |

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

### `CreatePersonaItem`

Single persona item for create — no persona_id.

Required fields (name, color, icon, instructions): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the new persona |
| `name_id` | `string` | No | UUID of an existing name resource |
| `name` | `string` | No | Display name text (creates new resource if name_id not provided) |
| `color_id` | `string` | No | UUID of an existing color resource |
| `color` | `string` | No | Hex color code, e.g. '#FF5733' (creates new resource if color_id not provided) |
| `icon_id` | `string` | No | UUID of an existing icon resource |
| `icon` | `string` | No | Icon identifier value (creates new resource if icon_id not provided) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource |
| `instructions` | `string` | No | System instruction template (creates new resource if instructions_id not provided) |
| `description_id` | `string` | No | UUID of an existing description resource |
| `description` | `string` | No | Persona description text (creates new resource if description_id not provided) |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the persona is active (resolved to flag_id) |
| `department_ids` | `string`[] | No | Department UUIDs to associate with this persona |
| `departments` | `string`[] | No | Department names (resolved to UUIDs server-side) |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate |
| `parameter_fields` | `string`[] | No | Parameter field names (resolved to UUIDs server-side) |
| `example_ids` | `string`[] | No | Existing example resource UUIDs to associate |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate |
| `voices` | `string`[] | No | Voice values (resolved to UUIDs server-side) |

---

### `DeletePersonaResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `persona_id` | `string` | Yes | UUID of the deleted persona |
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

### `DraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Currently selected name resource UUID |
| `description_id` | `string` | No | Currently selected description resource UUID |
| `instructions_id` | `string` | No | Currently selected instruction resource UUID |
| `color_id` | `string` | No | Currently selected color resource UUID |
| `icon_id` | `string` | No | Currently selected icon resource UUID |
| `active_flag_id` | `string` | No | Currently selected flag option UUID |
| `department_ids` | `string`[] | No | Currently associated department UUIDs |
| `example_ids` | `string`[] | No | Currently associated example resource UUIDs |
| `parameter_field_ids` | `string`[] | No | Currently associated parameter field UUIDs |
| `voice_ids` | `string`[] | No | Currently associated voice resource UUIDs |

---

### `GetFieldResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the field |
| `name` | `string` | Yes | Field name |
| `description` | `string` | Yes | Field description |
| `value` | `string` | Yes | Field value |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `conditional_parameter_ids` | `string`[] | Yes | Associated conditional parameter UUIDs |
| `created_at` | `string` | Yes | Creation timestamp |
| `active` | `boolean` | Yes | Whether the field is active |
| `generated` | `boolean` | Yes | Whether the field was AI-generated |
| `mcp` | `boolean` | Yes | Whether the field is from MCP |

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

### `GetPersonaDraftResponse`

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
| `color_ids` | `string`[] | Yes | Associated color UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `example_ids` | `string`[] | Yes | Associated example UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `icon_ids` | `string`[] | Yes | Associated icon UUIDs |
| `instruction_ids` | `string`[] | Yes | Associated instruction UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `voice_ids` | `string`[] | Yes | Associated voice UUIDs |

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

### `ListPersonaApiPersona`

Persona type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `name` | `string` | No | Display name |
| `description` | `string` | No | Persona description text |
| `color` | `string` | No | Hex color code |
| `icon` | `string` | No | Icon identifier |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `scenario_ids` | `string`[] | No | Scenarios using this persona |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `is_inactive` | `boolean` | No | Whether the persona is marked inactive |
| `generated` | `boolean` | No | Whether the persona was AI-generated |
| `mcp` | `boolean` | No | Whether this persona uses MCP tooling |
| `num_scenarios` | `integer` | No | Count of scenarios using this persona |
| `num_profiles` | `integer` | No | Count of profiles who have interacted with this persona |
| `can_edit` | `boolean` | No | Whether the current user can edit this persona |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate this persona |
| `can_delete` | `boolean` | No | Whether the current user can delete this persona |
| `updated_at` | `string` | No | Last modification timestamp |

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

### `PersonaColorResource`

Color resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `hex_code` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaColorSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaColorResource`](#personacolorresource) | No | — |
| `resources` | [`PersonaColorResource`](#personacolorresource)[] | No | — |

---

### `PersonaDepartmentResource`

Department resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaDepartmentResource`](#personadepartmentresource)[] | No | — |
| `resources` | [`PersonaDepartmentResource`](#personadepartmentresource)[] | No | — |

---

### `PersonaDescriptionResource`

Description resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaDescriptionResource`](#personadescriptionresource) | No | — |
| `resources` | [`PersonaDescriptionResource`](#personadescriptionresource)[] | No | — |

---

### `PersonaExampleResource`

Example resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `example` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaExampleSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaExampleResource`](#personaexampleresource)[] | No | — |
| `resources` | [`PersonaExampleResource`](#personaexampleresource)[] | No | — |

---

### `PersonaFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Human-readable validation error message |

---

### `PersonaFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | — |
| `label` | `string` | Yes | — |
| `description` | `string` | No | — |
| `icon_id` | `string` | No | — |
| `flag_option_id` | `string` | No | — |
| `show` | `boolean` | No | — |
| `required` | `boolean` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaFlagConfig`](#personaflagconfig) | No | — |
| `resources` | [`PersonaFlagConfig`](#personaflagconfig)[] | No | — |

---

### `PersonaIconResource`

Icon resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `value` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaIconSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaIconResource`](#personaiconresource) | No | — |
| `resources` | [`PersonaIconResource`](#personaiconresource)[] | No | — |

---

### `PersonaInstructionResource`

Instruction resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `template` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaInstructionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaInstructionResource`](#personainstructionresource) | No | — |
| `resources` | [`PersonaInstructionResource`](#personainstructionresource)[] | No | — |

---

### `PersonaNameResource`

Name resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`PersonaNameResource`](#personanameresource) | No | — |
| `resources` | [`PersonaNameResource`](#personanameresource)[] | No | — |

---

### `PersonaParameterFieldResource`

Parameter field resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `field_id` | `string` | No | — |
| `parameter_id` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaParameterFieldResource`](#personaparameterfieldresource)[] | No | — |
| `resources` | [`PersonaParameterFieldResource`](#personaparameterfieldresource)[] | No | — |

---

### `PersonaParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`GetParameterResponse`](#getparameterresponse)[] | No | — |
| `resources` | [`GetParameterResponse`](#getparameterresponse)[] | No | — |

---

### `PersonaResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded for this item |
| `persona_id` | `string` | No | UUID of the affected persona |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`PersonaFieldError`](#personafielderror)[] | No | Per-field validation errors, if any |

---

### `PersonaVoiceResource`

Voice resource for persona.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | — |
| `voice` | `string` | No | — |
| `generated` | `boolean` | No | — |

---

### `PersonaVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`PersonaVoiceResource`](#personavoiceresource)[] | No | — |
| `resources` | [`PersonaVoiceResource`](#personavoiceresource)[] | No | — |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `UpdatePersonaItem`

Single persona item for update — persona_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | Yes | UUID of the persona to update (required) |
| `name_id` | `string` | No | UUID of an existing name resource to select |
| `name` | `string` | No | Display name text (creates new resource if name_id not provided) |
| `color_id` | `string` | No | UUID of an existing color resource to select |
| `color` | `string` | No | Hex color code (creates new resource if color_id not provided) |
| `icon_id` | `string` | No | UUID of an existing icon resource to select |
| `icon` | `string` | No | Icon identifier value (creates new resource if icon_id not provided) |
| `instructions_id` | `string` | No | UUID of an existing instruction resource to select |
| `instructions` | `string` | No | System instruction template (creates new resource if instructions_id not provided) |
| `description_id` | `string` | No | UUID of an existing description resource to select |
| `description` | `string` | No | Persona description text (creates new resource if description_id not provided) |
| `active_flag_id` | `string` | No | UUID of the flag option to set active status |
| `active_flag` | `boolean` | No | Whether the persona is active (resolved to flag_id) |
| `department_ids` | `string`[] | No | Department UUIDs to associate (replaces existing) |
| `departments` | `string`[] | No | Department names (resolved to UUIDs server-side) |
| `parameter_field_ids` | `string`[] | No | Parameter field UUIDs to associate (replaces existing) |
| `parameter_fields` | `string`[] | No | Parameter field names (resolved to UUIDs server-side) |
| `example_ids` | `string`[] | No | Example resource UUIDs to associate (replaces existing) |
| `examples` | `string`[] | No | Example texts (creates new example resources) |
| `voice_ids` | `string`[] | No | Voice resource UUIDs to associate (replaces existing) |
| `voices` | `string`[] | No | Voice values (resolved to UUIDs server-side) |

---