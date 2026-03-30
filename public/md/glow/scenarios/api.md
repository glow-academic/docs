# Scenarios

## Endpoints

### `POST` `/scenarios/get`

Get Scenario

Get scenario information using the canonical shared scenario operation.

**Request body** (`GetScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario to retrieve |
| `document_ids` | `string`[] | No | Filter by document UUIDs |
| `problem_statement_ids` | `string`[] | No | Filter by problem statement UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `filter_persona_ids` | `string`[] | No | Filter by persona UUIDs |
| `filter_document_ids` | `string`[] | No | Filter by document UUIDs |
| `filter_parameter_ids` | `string`[] | No | Filter by parameter UUIDs |
| `filter_field_ids` | `string`[] | No | Filter by field UUIDs |
| `persona_search` | `string` | No | Search text to filter personas |
| `document_search` | `string` | No | Search text to filter documents |
| `parameter_search` | `string` | No | Search text to filter parameters |
| `description_search` | `string` | No | Search text to filter descriptions |
| `problem_statement_search` | `string` | No | Search text to filter problem statements |
| `image_search` | `string` | No | Search text to filter images |
| `video_search` | `string` | No | Search text to filter videos |
| `question_search` | `string` | No | Search text to filter questions |
| `option_search` | `string` | No | Search text to filter options |
| `persona_show_selected` | `boolean` | No | Show only selected personas |
| `document_show_selected` | `boolean` | No | Show only selected documents |
| `parameter_show_selected` | `boolean` | No | Show only selected parameters |
| `field_show_selected_by_param` | [`ScenarioFieldParamFilter`](#scenariofieldparamfilter)[] | No | Field-level show_selected filters by parameter |
| `draft_id` | `string` | No | UUID of the draft to retrieve |
| `mcp` | `boolean` | No | Whether this is an MCP request |
| `parameter_ids` | `string`[] | No | Filter by parameter UUIDs |

**Response** (`GetScenarioApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `scenario_exists` | `boolean` | No | Whether the scenario exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the scenario is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | UUID of the owning group |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Show AI generate for content step |
| `resolved_parameter_ids` | `string`[] | No | Resolved parameter IDs from saved fields |
| `names` | [`ScenarioNameSection`](#scenarionamesection) | No | Name section data |
| `descriptions` | [`ScenarioDescriptionSection`](#scenariodescriptionsection) | No | Description section data |
| `problem_statements` | [`ScenarioProblemStatementSection`](#scenarioproblemstatementsection) | No | Problem statement section data |
| `flags` | [`ScenarioFlagSection`](#scenarioflagsection) | No | Flag section data |
| `departments` | [`ScenarioDepartmentSection`](#scenariodepartmentsection) | No | Department section data |
| `personas` | [`ScenarioPersonaSection`](#scenariopersonasection) | No | Persona section data |
| `documents` | [`ScenarioDocumentSection`](#scenariodocumentsection) | No | Document section data |
| `parameters` | [`ScenarioParameterSection`](#scenarioparametersection) | No | Parameter section data |
| `parameter_fields` | [`ScenarioParameterFieldSection`](#scenarioparameterfieldsection) | No | Parameter field section data |
| `objectives` | [`ScenarioObjectiveSection`](#scenarioobjectivesection) | No | Objective section data |
| `images` | [`ScenarioImageSection`](#scenarioimagesection) | No | Image section data |
| `videos` | [`ScenarioVideoSection`](#scenariovideosection) | No | Video section data |
| `questions` | [`ScenarioQuestionSection`](#scenarioquestionsection) | No | Question section data |
| `options` | [`ScenarioOptionSection`](#scenariooptionsection) | No | Option section data |

---

### `POST` `/scenarios/search`

Search Scenario

Search scenarios — composable infra architecture.

**Request body** (`SearchScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `persona_ids` | `string`[] | No | — |
| `simulation_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `persona_search` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `flag_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `scenarios` | [`ListScenarioApiScenario`](#listscenarioapiscenario)[] | No | List of scenario items |
| `objectives` | [`ListScenarioApiObjective`](#listscenarioapiobjective)[] | No | List of objective items |
| `fields` | [`ListScenarioApiField`](#listscenarioapifield)[] | No | List of field items |
| `cohorts` | [`ListScenarioApiCohort`](#listscenarioapicohort)[] | No | List of cohort items |
| `personas` | [`ListScenarioApiPersona`](#listscenarioapipersona)[] | No | List of persona items |
| `simulations` | [`ListScenarioApiSimulation`](#listscenarioapisimulation)[] | No | List of simulation items |
| `departments` | [`ListScenarioApiDepartment`](#listscenarioapidepartment)[] | No | List of department items |
| `persona_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for personas |
| `simulation_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for simulations |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for departments |
| `flag_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for flags |
| `total_count` | `integer` | No | Total number of matching records |

---

### `POST` `/scenarios/create`

Create Scenario

Create scenarios using composable infra architecture.

**Request body** (`CreateScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`CreateScenarioItem`](#createscenarioitem)[] | Yes | List of scenarios to create |

**Response** (`CreateScenarioApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](#scenarioresultitem)[] | Yes | List of operation results |

---

### `POST` `/scenarios/csv`

Parse Scenario Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseScenarioCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateScenarioItem`](#createscenarioitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/scenarios/update`

Update Scenario

Update scenarios using composable infra architecture.

**Request body** (`UpdateScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`UpdateScenarioItem`](#updatescenarioitem)[] | Yes | List of scenarios to update |

**Response** (`UpdateScenarioApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](#scenarioresultitem)[] | Yes | List of operation results |

---

### `POST` `/scenarios/duplicate`

Duplicate Scenario

Duplicate a scenario — composable infra architecture.

**Request body** (`DuplicateScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the scenario to duplicate |

**Response** (`DuplicateScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `scenario_id` | `string` | Yes | UUID of the duplicated scenario |
| `message` | `string` | Yes | Human-readable result message |

---

### `POST` `/scenarios/delete`

Delete Scenario

Bulk delete scenarios — composable infra architecture.

**Request body** (`DeleteScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `string`[] | Yes | UUIDs of scenarios to delete |

**Response** (`DeleteScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteScenarioResult`](#deletescenarioresult)[] | Yes | List of operation results |

---

### `PATCH` `/scenarios/draft`

Patch Scenario Draft

Patch scenario draft — composable infra architecture.

**Request body** (`PatchScenarioDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `objectives` | `string`[] | No | Objective texts to create |
| `objective_ids` | `string`[] | No | Existing objective UUIDs |
| `images` | [`app__infra__scenario__types__DraftImageValue`](#app-infra-scenario-types-draftimagevalue)[] | No | Image values to create |
| `image_ids` | `string`[] | No | Existing image UUIDs |
| `videos` | [`app__infra__scenario__types__DraftVideoValue`](#app-infra-scenario-types-draftvideovalue)[] | No | Video values to create |
| `video_ids` | `string`[] | No | Existing video UUIDs |
| `questions` | [`app__infra__scenario__types__DraftQuestionValue`](#app-infra-scenario-types-draftquestionvalue)[] | No | Question values to create |
| `question_ids` | `string`[] | No | Existing question UUIDs |
| `options` | [`app__infra__scenario__types__DraftOptionValue`](#app-infra-scenario-types-draftoptionvalue)[] | No | Option values to create |
| `option_ids` | `string`[] | No | Existing option UUIDs |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |

**Response** (`PatchScenarioDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version number |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`ScenarioDraftFormState`](#scenariodraftformstate) | Yes | Server-authoritative form state |

---

### `POST` `/scenarios/drafts`

Get Scenario Drafts

List scenario drafts owned by the current profile.

**Response** (`GetScenarioDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetScenarioDraftResponse`](#getscenariodraftresponse)[] | No | List of scenario draft entries |

---

### `POST` `/scenarios/export`

Export Scenarios

Export all scenarios as a clean, denormalized CSV.

**Request body** (`ExportScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario to export |
| `search` | `string` | No | Search query text |
| `persona_ids` | `string`[] | No | Filter by persona UUIDs |
| `simulation_ids` | `string`[] | No | Filter by simulation UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |

**Response** (`ExportScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Total number of exported rows |

---

### `POST` `/scenarios/docs`

Get Scenario Docs Endpoint

Get composed documentation for the scenario artifact.

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

### `POST` `/scenarios/refresh`

Scenario Refresh

Refresh scenario materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/scenarios/upload`

Upload

Stream-upload any file.

Headers:
  Content-Type: the file's actual MIME type
  X-Filename: original filename (for extension + display)
Body: raw file bytes (streamed).

**Response** (`UploadResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |

---

### `GET` `/scenarios/download/\{upload_id\}`

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

### `GET` `/scenarios/preview/\{upload_id\}`

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

### `POST` `/stream/CreateScenarioApiRequest`

Schema: CreateScenarioApiRequest

**Request body** (`CreateScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`CreateScenarioItem`](#createscenarioitem)[] | Yes | List of scenarios to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateScenarioApiResponse`

Schema: CreateScenarioApiResponse

**Request body** (`CreateScenarioApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](#scenarioresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteScenarioApiRequest`

Schema: DeleteScenarioApiRequest

**Request body** (`DeleteScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `string`[] | Yes | UUIDs of scenarios to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteScenarioApiResponse`

Schema: DeleteScenarioApiResponse

**Request body** (`DeleteScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteScenarioResult`](#deletescenarioresult)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateScenarioApiRequest`

Schema: DuplicateScenarioApiRequest

**Request body** (`DuplicateScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the scenario to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateScenarioApiResponse`

Schema: DuplicateScenarioApiResponse

**Request body** (`DuplicateScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `scenario_id` | `string` | Yes | UUID of the duplicated scenario |
| `message` | `string` | Yes | Human-readable result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportScenarioApiRequest`

Schema: ExportScenarioApiRequest

**Request body** (`ExportScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario to export |
| `search` | `string` | No | Search query text |
| `persona_ids` | `string`[] | No | Filter by persona UUIDs |
| `simulation_ids` | `string`[] | No | Filter by simulation UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportScenarioApiResponse`

Schema: ExportScenarioApiResponse

**Request body** (`ExportScenarioApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Total number of exported rows |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetScenarioApiRequest`

Schema: GetScenarioApiRequest

**Request body** (`GetScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario to retrieve |
| `document_ids` | `string`[] | No | Filter by document UUIDs |
| `problem_statement_ids` | `string`[] | No | Filter by problem statement UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `filter_persona_ids` | `string`[] | No | Filter by persona UUIDs |
| `filter_document_ids` | `string`[] | No | Filter by document UUIDs |
| `filter_parameter_ids` | `string`[] | No | Filter by parameter UUIDs |
| `filter_field_ids` | `string`[] | No | Filter by field UUIDs |
| `persona_search` | `string` | No | Search text to filter personas |
| `document_search` | `string` | No | Search text to filter documents |
| `parameter_search` | `string` | No | Search text to filter parameters |
| `description_search` | `string` | No | Search text to filter descriptions |
| `problem_statement_search` | `string` | No | Search text to filter problem statements |
| `image_search` | `string` | No | Search text to filter images |
| `video_search` | `string` | No | Search text to filter videos |
| `question_search` | `string` | No | Search text to filter questions |
| `option_search` | `string` | No | Search text to filter options |
| `persona_show_selected` | `boolean` | No | Show only selected personas |
| `document_show_selected` | `boolean` | No | Show only selected documents |
| `parameter_show_selected` | `boolean` | No | Show only selected parameters |
| `field_show_selected_by_param` | [`ScenarioFieldParamFilter`](#scenariofieldparamfilter)[] | No | Field-level show_selected filters by parameter |
| `draft_id` | `string` | No | UUID of the draft to retrieve |
| `mcp` | `boolean` | No | Whether this is an MCP request |
| `parameter_ids` | `string`[] | No | Filter by parameter UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetScenarioApiResponse`

Schema: GetScenarioApiResponse

**Request body** (`GetScenarioApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `scenario_exists` | `boolean` | No | Whether the scenario exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the scenario is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | UUID of the owning group |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Show AI generate for content step |
| `resolved_parameter_ids` | `string`[] | No | Resolved parameter IDs from saved fields |
| `names` | [`ScenarioNameSection`](#scenarionamesection) | No | Name section data |
| `descriptions` | [`ScenarioDescriptionSection`](#scenariodescriptionsection) | No | Description section data |
| `problem_statements` | [`ScenarioProblemStatementSection`](#scenarioproblemstatementsection) | No | Problem statement section data |
| `flags` | [`ScenarioFlagSection`](#scenarioflagsection) | No | Flag section data |
| `departments` | [`ScenarioDepartmentSection`](#scenariodepartmentsection) | No | Department section data |
| `personas` | [`ScenarioPersonaSection`](#scenariopersonasection) | No | Persona section data |
| `documents` | [`ScenarioDocumentSection`](#scenariodocumentsection) | No | Document section data |
| `parameters` | [`ScenarioParameterSection`](#scenarioparametersection) | No | Parameter section data |
| `parameter_fields` | [`ScenarioParameterFieldSection`](#scenarioparameterfieldsection) | No | Parameter field section data |
| `objectives` | [`ScenarioObjectiveSection`](#scenarioobjectivesection) | No | Objective section data |
| `images` | [`ScenarioImageSection`](#scenarioimagesection) | No | Image section data |
| `videos` | [`ScenarioVideoSection`](#scenariovideosection) | No | Video section data |
| `questions` | [`ScenarioQuestionSection`](#scenarioquestionsection) | No | Question section data |
| `options` | [`ScenarioOptionSection`](#scenariooptionsection) | No | Option section data |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetScenarioDraftsApiResponse`

Schema: GetScenarioDraftsApiResponse

**Request body** (`GetScenarioDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetScenarioDraftResponse`](#getscenariodraftresponse)[] | No | List of scenario draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchScenarioDraftApiRequest`

Schema: PatchScenarioDraftApiRequest

**Request body** (`PatchScenarioDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `objectives` | `string`[] | No | Objective texts to create |
| `objective_ids` | `string`[] | No | Existing objective UUIDs |
| `images` | [`app__infra__scenario__types__DraftImageValue`](#app-infra-scenario-types-draftimagevalue)[] | No | Image values to create |
| `image_ids` | `string`[] | No | Existing image UUIDs |
| `videos` | [`app__infra__scenario__types__DraftVideoValue`](#app-infra-scenario-types-draftvideovalue)[] | No | Video values to create |
| `video_ids` | `string`[] | No | Existing video UUIDs |
| `questions` | [`app__infra__scenario__types__DraftQuestionValue`](#app-infra-scenario-types-draftquestionvalue)[] | No | Question values to create |
| `question_ids` | `string`[] | No | Existing question UUIDs |
| `options` | [`app__infra__scenario__types__DraftOptionValue`](#app-infra-scenario-types-draftoptionvalue)[] | No | Option values to create |
| `option_ids` | `string`[] | No | Existing option UUIDs |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchScenarioDraftApiResponse`

Schema: PatchScenarioDraftApiResponse

**Request body** (`PatchScenarioDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version number |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`ScenarioDraftFormState`](#scenariodraftformstate) | Yes | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateScenarioApiRequest`

Schema: UpdateScenarioApiRequest

**Request body** (`UpdateScenarioApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`UpdateScenarioItem`](#updatescenarioitem)[] | Yes | List of scenarios to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateScenarioApiResponse`

Schema: UpdateScenarioApiResponse

**Request body** (`UpdateScenarioApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](#scenarioresultitem)[] | Yes | List of operation results |

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

### `CreateScenarioItem`

Single scenario item for create — no scenario_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the scenario |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `objectives_enabled_flag_id` | `string` | No | UUID of the objectives enabled flag option |
| `images_enabled_flag_id` | `string` | No | UUID of the images enabled flag option |
| `video_enabled_flag_id` | `string` | No | UUID of the video enabled flag option |
| `questions_enabled_flag_id` | `string` | No | UUID of the questions enabled flag option |
| `problem_statement_enabled_flag_id` | `string` | No | UUID of the problem statement enabled flag option |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_ids` | `string`[] | No | Associated parameter UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |
| `image_ids` | `string`[] | No | Associated image UUIDs |
| `objective_ids` | `string`[] | No | Associated objective UUIDs |
| `video_ids` | `string`[] | No | Associated video UUIDs |
| `question_ids` | `string`[] | No | Associated question UUIDs |
| `option_ids` | `string`[] | No | Associated option UUIDs |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `departments` | `string`[] | No | Department names for matching |
| `personas` | `string`[] | No | Persona names for matching |
| `documents` | `string`[] | No | Document names for matching |
| `parameter_fields` | `string`[] | No | Parameter field names for matching |
| `objectives` | `string`[] | No | Objective texts for matching |
| `images` | `string`[] | No | Image names for matching |
| `videos` | `string`[] | No | Video names for matching |
| `questions` | `string`[] | No | Question texts for matching |
| `options` | `string`[] | No | Option texts for matching |

---

### `DeleteScenarioResult`

Per-item result from bulk delete.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | No | Whether the operation succeeded |
| `scenario_id` | `string` | No | UUID of the deleted scenario |
| `message` | `string` | No | Human-readable result message |

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

### `GetScenarioDraftResponse`

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
| `document_ids` | `string`[] | Yes | Associated document UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `objective_ids` | `string`[] | Yes | Associated objective UUIDs |
| `option_ids` | `string`[] | Yes | Associated option UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `persona_ids` | `string`[] | Yes | Associated persona UUIDs |
| `problem_statement_ids` | `string`[] | Yes | Associated problem statement UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `question_ids` | `string`[] | Yes | Associated question UUIDs |
| `video_ids` | `string`[] | Yes | Associated video UUIDs |

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

### `ListScenarioApiCohort`

Cohort in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | UUID of the cohort |
| `name` | `string` | No | Cohort name |
| `description` | `string` | No | Cohort description text |

---

### `ListScenarioApiDepartment`

Department in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |

---

### `ListScenarioApiField`

Field in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description text |

---

### `ListScenarioApiObjective`

Objective in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `objective_id` | `string` | No | UUID of the objective |
| `name` | `string` | No | Objective name |
| `description` | `string` | No | Objective description text |

---

### `ListScenarioApiPersona`

Persona in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `name` | `string` | No | Persona name |
| `description` | `string` | No | Persona description text |
| `color` | `string` | No | Display color for the persona |
| `icon` | `string` | No | Icon identifier for the persona |

---

### `ListScenarioApiScenario`

Scenario item in list response with Python-computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario |
| `name` | `string` | No | Display name |
| `problem_statement` | `string` | No | Problem statement text |
| `is_inactive` | `boolean` | No | Whether the scenario is inactive |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether this is an MCP scenario |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `objective_ids` | `string`[] | No | Associated objective UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `field_ids` | `string`[] | No | Associated field UUIDs |
| `simulation_ids` | `string`[] | No | Associated simulation UUIDs |
| `num_simulations` | `integer` | No | Total number of simulations |
| `active_simulation_count` | `integer` | No | Number of active simulations |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `cohort_ids` | `string`[] | No | Associated cohort UUIDs |
| `updated_at` | `string` | No | Last updated timestamp |

---

### `ListScenarioApiSimulation`

Simulation in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | UUID of the simulation |
| `name` | `string` | No | Simulation name |
| `description` | `string` | No | Simulation description text |
| `department_ids` | `string`[] | No | Associated department UUIDs |

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

### `ScenarioDepartment`

Department for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | UUID of the department |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioDepartment`](#scenariodepartment)[] | No | Currently selected departments |
| `resources` | [`ScenarioDepartment`](#scenariodepartment)[] | No | Available departments |

---

### `ScenarioDescriptionResource`

Description resource for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ScenarioDescriptionResource`](#scenariodescriptionresource) | No | Currently selected description resource |
| `resources` | [`ScenarioDescriptionResource`](#scenariodescriptionresource)[] | No | Available description resources |

---

### `ScenarioDocument`

Document for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `document_id` | `string` | No | UUID of the document |
| `name` | `string` | No | Document name |
| `description` | `string` | No | Document description text |
| `file_path` | `string` | No | Storage path of the file |
| `mime_type` | `string` | No | MIME type of the document |
| `upload_id` | `string` | No | UUID of the associated upload |
| `html` | `boolean` | No | Whether the document is HTML content |
| `parameter_ids` | `string`[] | No | Linked parameter UUIDs |
| `field_ids` | `string`[] | No | Linked field UUIDs |
| `parent_document_id` | `string` | No | UUID of the parent document |
| `video_document` | `boolean` | No | Has linked parameter with video enabled |
| `non_video_document` | `boolean` | No | Has linked parameter with video disabled |

---

### `ScenarioDocumentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioDocument`](#scenariodocument)[] | No | Currently selected documents |
| `resources` | [`ScenarioDocument`](#scenariodocument)[] | No | Available documents |

---

### `ScenarioDraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `description_id` | `string` | No | UUID of the selected description resource |
| `problem_statement_id` | `string` | No | UUID of the selected problem statement resource |
| `flag_ids` | `string`[] | No | Selected flag UUIDs |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `persona_ids` | `string`[] | No | Selected persona UUIDs |
| `document_ids` | `string`[] | No | Selected document UUIDs |
| `parameter_field_ids` | `string`[] | No | Selected parameter field UUIDs |
| `objective_ids` | `string`[] | No | Selected objective UUIDs |
| `image_ids` | `string`[] | No | Selected image UUIDs |
| `video_ids` | `string`[] | No | Selected video UUIDs |
| `question_ids` | `string`[] | No | Selected question UUIDs |
| `option_ids` | `string`[] | No | Selected option UUIDs |

---

### `ScenarioField`

Field for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `field_id` | `string` | No | UUID of the field |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Field description text |
| `parameter_id` | `string` | No | UUID of the linked parameter |
| `parameter_name` | `string` | No | Name of the linked parameter |
| `conditional_parameter_ids` | `string`[] | No | Conditional parameter UUIDs |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

### `ScenarioFieldParamFilter`

Field parameter filter for show_selected filtering.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | UUID of the parameter to filter by |
| `show_selected` | `boolean` | No | Whether to show only selected items |

---

### `ScenarioFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag config key identifier |
| `label` | `string` | Yes | Display label for the flag |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | UUID of the selected icon resource |
| `flag_option_id` | `string` | No | UUID of the flag option to use when enabling |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `video_flag` | `boolean` | No | Whether this flag only shows when video is enabled |

---

### `ScenarioFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioFlagConfig`](#scenarioflagconfig)[] | No | Currently selected flags |
| `resources` | [`ScenarioFlagConfig`](#scenarioflagconfig)[] | No | Available flag configs |

---

### `ScenarioImage`

Image for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `image_id` | `string` | No | UUID of the image |
| `name` | `string` | No | Image name |
| `file_path` | `string` | No | Storage path of the image file |
| `mime_type` | `string` | No | MIME type of the image |
| `upload_id` | `string` | No | UUID of the associated upload |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioImageSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioImage`](#scenarioimage)[] | No | Currently selected images |
| `resources` | [`ScenarioImage`](#scenarioimage)[] | No | Available images |

---

### `ScenarioNameResource`

Name resource for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ScenarioNameResource`](#scenarionameresource) | No | Currently selected name resource |
| `resources` | [`ScenarioNameResource`](#scenarionameresource)[] | No | Available name resources |

---

### `ScenarioObjective`

Objective for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the objective |
| `objective` | `string` | No | Objective text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioObjectiveSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioObjective`](#scenarioobjective)[] | No | Currently selected objectives |
| `resources` | [`ScenarioObjective`](#scenarioobjective)[] | No | Available objectives |

---

### `ScenarioOption`

Option for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_id` | `string` | No | UUID of the option |
| `option_text` | `string` | No | Option text content |
| `is_correct` | `boolean` | No | Whether this is the correct option |
| `question_id` | `string` | No | UUID of the parent question |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioOptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioOption`](#scenariooption)[] | No | Currently selected options |
| `resources` | [`ScenarioOption`](#scenariooption)[] | No | Available options |

---

### `ScenarioParameter`

Parameter for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `parameter_id` | `string` | No | UUID of the parameter |
| `name` | `string` | No | Parameter name |
| `description` | `string` | No | Parameter description text |
| `document_parameter` | `boolean` | No | Whether this is a document parameter |
| `persona_parameter` | `boolean` | No | Whether this is a persona parameter |
| `scenario_parameter` | `boolean` | No | Whether this is a scenario parameter |
| `video_parameter` | `boolean` | No | Whether this is a video parameter |
| `non_video_parameter` | `boolean` | No | Inverse of video_parameter for frontend filtering |
| `conditional` | `boolean` | No | Whether this parameter is conditional |

---

### `ScenarioParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioField`](#scenariofield)[] | No | Currently selected parameter fields |
| `resources` | [`ScenarioField`](#scenariofield)[] | No | Available parameter fields |

---

### `ScenarioParameterSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioParameter`](#scenarioparameter)[] | No | Currently selected parameters |
| `resources` | [`ScenarioParameter`](#scenarioparameter)[] | No | Available parameters |

---

### `ScenarioPersona`

Persona for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `persona_id` | `string` | No | UUID of the persona |
| `name` | `string` | No | Persona name |
| `description` | `string` | No | Persona description text |
| `color` | `string` | No | Display color for the persona |
| `icon` | `string` | No | Icon identifier for the persona |
| `image_model` | `boolean` | No | Whether this persona uses an image model |
| `parameter_ids` | `string`[] | No | Linked parameter UUIDs |
| `field_ids` | `string`[] | No | Linked field UUIDs |
| `example` | `string` | No | Example text for the persona |
| `video_persona` | `boolean` | No | Has linked parameter with video enabled |
| `non_video_persona` | `boolean` | No | Has linked parameter with video disabled |

---

### `ScenarioPersonaSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioPersona`](#scenariopersona)[] | No | Currently selected personas |
| `resources` | [`ScenarioPersona`](#scenariopersona)[] | No | Available personas |

---

### `ScenarioProblemStatement`

Problem statement for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_statement_id` | `string` | No | UUID of the problem statement |
| `name` | `string` | No | Problem statement name |
| `problem_statement` | `string` | No | Problem statement text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioProblemStatementSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`ScenarioProblemStatement`](#scenarioproblemstatement) | No | Currently selected problem statement |
| `resources` | [`ScenarioProblemStatement`](#scenarioproblemstatement)[] | No | Available problem statements |

---

### `ScenarioQuestion`

Question for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_id` | `string` | No | UUID of the question |
| `question_text` | `string` | No | Question text content |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioQuestionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioQuestion`](#scenarioquestion)[] | No | Currently selected questions |
| `resources` | [`ScenarioQuestion`](#scenarioquestion)[] | No | Available questions |

---

### `ScenarioResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `scenario_id` | `string` | No | UUID of the affected scenario |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`ScenarioFieldError`](#scenariofielderror)[] | No | List of per-field errors |

---

### `ScenarioVideo`

Video for scenario.

| Field | Type | Required | Description |
|---|---|---|---|
| `video_id` | `string` | No | UUID of the video |
| `name` | `string` | No | Video name |
| `file_path` | `string` | No | Storage path of the video file |
| `mime_type` | `string` | No | MIME type of the video |
| `upload_id` | `string` | No | UUID of the associated upload |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `ScenarioVideoSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ScenarioVideo`](#scenariovideo)[] | No | Currently selected videos |
| `resources` | [`ScenarioVideo`](#scenariovideo)[] | No | Available videos |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `UpdateScenarioItem`

Single scenario item for update — scenario_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the scenario to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `active_flag_id` | `string` | No | UUID of the active flag option |
| `objectives_enabled_flag_id` | `string` | No | UUID of the objectives enabled flag option |
| `images_enabled_flag_id` | `string` | No | UUID of the images enabled flag option |
| `video_enabled_flag_id` | `string` | No | UUID of the video enabled flag option |
| `questions_enabled_flag_id` | `string` | No | UUID of the questions enabled flag option |
| `problem_statement_enabled_flag_id` | `string` | No | UUID of the problem statement enabled flag option |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_ids` | `string`[] | No | Associated parameter UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |
| `image_ids` | `string`[] | No | Associated image UUIDs |
| `objective_ids` | `string`[] | No | Associated objective UUIDs |
| `video_ids` | `string`[] | No | Associated video UUIDs |
| `question_ids` | `string`[] | No | Associated question UUIDs |
| `option_ids` | `string`[] | No | Associated option UUIDs |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `departments` | `string`[] | No | Department names for matching |
| `personas` | `string`[] | No | Persona names for matching |
| `documents` | `string`[] | No | Document names for matching |
| `parameter_fields` | `string`[] | No | Parameter field names for matching |
| `objectives` | `string`[] | No | Objective texts for matching |
| `images` | `string`[] | No | Image names for matching |
| `videos` | `string`[] | No | Video names for matching |
| `questions` | `string`[] | No | Question texts for matching |
| `options` | `string`[] | No | Option texts for matching |

---

### `app__infra__scenario__types__DraftImageValue`

Value for creating an image via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Image name |
| `description` | `string` | Yes | Image description text |
| `upload_id` | `string` | No | UUID of the associated upload |

---

### `app__infra__scenario__types__DraftOptionValue`

Value for creating an option via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_text` | `string` | Yes | Option text content |
| `question_id` | `string` | No | UUID of the parent question |

---

### `app__infra__scenario__types__DraftQuestionValue`

Value for creating a question via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_text` | `string` | Yes | Question text content |
| `time` | `integer` | No | Time limit in seconds |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |

---

### `app__infra__scenario__types__DraftVideoValue`

Value for creating a video via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Video name |
| `description` | `string` | Yes | Video description text |
| `upload_id` | `string` | No | UUID of the associated upload |
| `length_seconds` | `integer` | No | Video length in seconds |

---