# Cohorts

## Endpoints

### `POST` `/cohorts/search`

Search Cohort

Search cohorts — composable infra architecture.

**Request body** (`SearchCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_profile_ids` | `string`[] | No | — |
| `filter_simulation_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `profile_search` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `flag_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListCohortApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `user_role` | `string` | No | Role of the current user |
| `cohorts` | [`ListCohortApiCohort`](#listcohortapicohort)[] | No | List of cohorts |
| `profiles` | [`ListCohortApiProfile`](#listcohortapiprofile)[] | No | List of profiles for filtering |
| `simulations` | [`ListCohortApiSimulation`](#listcohortapisimulation)[] | No | List of simulations for filtering |
| `departments` | [`ListCohortApiDepartment`](#listcohortapidepartment)[] | No | List of departments for filtering |
| `simulation_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for simulations in list UI |
| `profile_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for profiles in list UI |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for departments in list UI |
| `flag_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for flags in list UI |
| `total_count` | `integer` | No | Total number of matching records |

---

### `POST` `/cohorts/get`

Get Cohort

Get cohort information using the canonical shared cohort operation.

**Request body** (`GetCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Cohort UUID to retrieve |
| `descriptions_search` | `string` | No | Search query for descriptions |
| `simulation_search` | `string` | No | Search query for simulations |
| `simulation_show_selected` | `boolean` | No | Whether to show only selected simulations |
| `profile_search` | `string` | No | Search query for profiles |
| `profile_show_selected` | `boolean` | No | Whether to show only selected profiles |
| `draft_id` | `string` | No | Draft UUID to load from |

**Response** (`GetCohortApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `cohort_exists` | `boolean` | No | Whether the cohort exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `simulations_step_show_ai_generate` | `boolean` | No | Whether to show AI generate for simulations step |
| `profiles_step_show_ai_generate` | `boolean` | No | Whether to show AI generate for profiles step |
| `names` | [`CohortNameSection`](#cohortnamesection) | No | Name section with resource and options |
| `descriptions` | [`CohortDescriptionSection`](#cohortdescriptionsection) | No | Description section with resource and options |
| `flags` | [`CohortFlagSection`](#cohortflagsection) | No | Flag section with resource and options |
| `departments` | [`CohortDepartmentSection`](#cohortdepartmentsection) | No | Department section with selections and options |
| `simulations` | [`CohortSimulationSection`](#cohortsimulationsection) | No | Simulation section with selections and options |
| `simulation_positions` | [`CohortSimulationPositionSection`](#cohortsimulationpositionsection) | No | Simulation position section |
| `simulation_availability` | [`CohortSimulationAvailabilitySection`](#cohortsimulationavailabilitysection) | No | Simulation availability section |
| `profiles` | [`CohortProfileSection`](#cohortprofilesection) | No | Profile section with selections and options |
| `profile_personas` | [`CohortProfilePersonaSection`](#cohortprofilepersonasection) | No | Profile persona section |
| `personas` | [`GetPersonaResponse`](#getpersonaresponse)[] | No | List of available personas |

---

### `POST` `/cohorts/create`

Create Cohort

Create cohorts using composable infra architecture.

**Request body** (`CreateCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`CreateCohortItem`](#createcohortitem)[] | Yes | List of cohorts to create |

**Response** (`CreateCohortApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](#cohortresultitem)[] | Yes | List of operation results |

---

### `POST` `/cohorts/update`

Update Cohort

Update cohorts using composable infra architecture.

**Request body** (`UpdateCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`UpdateCohortItem`](#updatecohortitem)[] | Yes | List of cohorts to update |

**Response** (`UpdateCohortApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](#cohortresultitem)[] | Yes | List of operation results |

---

### `POST` `/cohorts/duplicate`

Duplicate Cohort

Duplicate a cohort — composable infra architecture.

**Request body** (`DuplicateCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to duplicate |

**Response** (`DuplicateCohortApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Newly created cohort UUID |
| `message` | `string` | Yes | Human-readable result message |

---

### `POST` `/cohorts/delete`

Delete Cohort

Bulk delete cohorts — composable infra architecture.

**Request body** (`DeleteCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_ids` | `string`[] | Yes | Cohort UUIDs to delete |

**Response** (`DeleteCohortApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteCohortResult`](#deletecohortresult)[] | Yes | List of operation results |

---

### `PATCH` `/cohorts/draft`

Patch Cohort Draft

Patch cohort draft — composable infra architecture.

**Request body** (`PatchCohortDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `simulation_position_ids` | `string`[] | No | Existing simulation position UUIDs |
| `simulation_positions` | [`DraftSimulationPositionValue`](#draftsimulationpositionvalue)[] | No | Simulation position values to create |
| `simulation_availability_ids` | `string`[] | No | Existing simulation availability UUIDs |
| `simulation_availability` | [`DraftSimulationAvailabilityValue`](#draftsimulationavailabilityvalue)[] | No | Simulation availability values to create |
| `profile_persona_ids` | `string`[] | No | Existing profile persona UUIDs |
| `profile_personas` | [`DraftProfilePersonaValue`](#draftprofilepersonavalue)[] | No | Profile persona values to create |

**Response** (`PatchCohortDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`CohortDraftFormState`](#cohortdraftformstate) | No | Server-authoritative form state |

---

### `POST` `/cohorts/drafts`

Get Cohort Drafts

List cohort drafts owned by the current profile.

**Response** (`GetCohortDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetCohortDraftResponse`](#getcohortdraftresponse)[] | No | List of cohort draft entries |

---

### `POST` `/cohorts/export`

Export Cohorts

Export all cohorts as a clean, denormalized CSV.

**Request body** (`app__routes__cohort__export__ExportCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | — |

**Response** (`ExportCohortApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/cohorts/csv`

Parse Cohort Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseCohortCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateCohortItem`](#createcohortitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/cohorts/docs`

Get Cohort Docs Endpoint

Get composed documentation for the cohort artifact.

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

### `POST` `/cohorts/refresh`

Cohort Refresh

Refresh cohort materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreateCohortApiRequest`

Schema: CreateCohortApiRequest

**Request body** (`CreateCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`CreateCohortItem`](#createcohortitem)[] | Yes | List of cohorts to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateCohortApiResponse`

Schema: CreateCohortApiResponse

**Request body** (`CreateCohortApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](#cohortresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteCohortApiRequest`

Schema: DeleteCohortApiRequest

**Request body** (`DeleteCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_ids` | `string`[] | Yes | Cohort UUIDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteCohortApiResponse`

Schema: DeleteCohortApiResponse

**Request body** (`DeleteCohortApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteCohortResult`](#deletecohortresult)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateCohortApiRequest`

Schema: DuplicateCohortApiRequest

**Request body** (`DuplicateCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateCohortApiResponse`

Schema: DuplicateCohortApiResponse

**Request body** (`DuplicateCohortApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Newly created cohort UUID |
| `message` | `string` | Yes | Human-readable result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportCohortApiRequest`

Schema: ExportCohortApiRequest

**Request body** (`app__infra__cohort__types__ExportCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Search query text |
| `filter_simulation_ids` | `string`[] | No | Simulation IDs to filter by |
| `filter_profile_ids` | `string`[] | No | Profile IDs to filter by |
| `filter_department_ids` | `string`[] | No | Department IDs to filter by |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportCohortApiResponse`

Schema: ExportCohortApiResponse

**Request body** (`ExportCohortApiResponse`):

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

### `POST` `/stream/GetCohortApiRequest`

Schema: GetCohortApiRequest

**Request body** (`GetCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Cohort UUID to retrieve |
| `descriptions_search` | `string` | No | Search query for descriptions |
| `simulation_search` | `string` | No | Search query for simulations |
| `simulation_show_selected` | `boolean` | No | Whether to show only selected simulations |
| `profile_search` | `string` | No | Search query for profiles |
| `profile_show_selected` | `boolean` | No | Whether to show only selected profiles |
| `draft_id` | `string` | No | Draft UUID to load from |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetCohortApiResponse`

Schema: GetCohortApiResponse

**Request body** (`GetCohortApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `cohort_exists` | `boolean` | No | Whether the cohort exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `simulations_step_show_ai_generate` | `boolean` | No | Whether to show AI generate for simulations step |
| `profiles_step_show_ai_generate` | `boolean` | No | Whether to show AI generate for profiles step |
| `names` | [`CohortNameSection`](#cohortnamesection) | No | Name section with resource and options |
| `descriptions` | [`CohortDescriptionSection`](#cohortdescriptionsection) | No | Description section with resource and options |
| `flags` | [`CohortFlagSection`](#cohortflagsection) | No | Flag section with resource and options |
| `departments` | [`CohortDepartmentSection`](#cohortdepartmentsection) | No | Department section with selections and options |
| `simulations` | [`CohortSimulationSection`](#cohortsimulationsection) | No | Simulation section with selections and options |
| `simulation_positions` | [`CohortSimulationPositionSection`](#cohortsimulationpositionsection) | No | Simulation position section |
| `simulation_availability` | [`CohortSimulationAvailabilitySection`](#cohortsimulationavailabilitysection) | No | Simulation availability section |
| `profiles` | [`CohortProfileSection`](#cohortprofilesection) | No | Profile section with selections and options |
| `profile_personas` | [`CohortProfilePersonaSection`](#cohortprofilepersonasection) | No | Profile persona section |
| `personas` | [`GetPersonaResponse`](#getpersonaresponse)[] | No | List of available personas |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetCohortDraftsApiResponse`

Schema: GetCohortDraftsApiResponse

**Request body** (`GetCohortDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetCohortDraftResponse`](#getcohortdraftresponse)[] | No | List of cohort draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchCohortDraftApiRequest`

Schema: PatchCohortDraftApiRequest

**Request body** (`PatchCohortDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | Existing draft UUID to patch |
| `expected_version` | `integer` | No | Expected draft version for concurrency control |
| `name` | `string` | No | Name value to create a resource |
| `name_id` | `string` | No | Existing name resource UUID |
| `description` | `string` | No | Description value to create a resource |
| `description_id` | `string` | No | Existing description resource UUID |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `simulation_position_ids` | `string`[] | No | Existing simulation position UUIDs |
| `simulation_positions` | [`DraftSimulationPositionValue`](#draftsimulationpositionvalue)[] | No | Simulation position values to create |
| `simulation_availability_ids` | `string`[] | No | Existing simulation availability UUIDs |
| `simulation_availability` | [`DraftSimulationAvailabilityValue`](#draftsimulationavailabilityvalue)[] | No | Simulation availability values to create |
| `profile_persona_ids` | `string`[] | No | Existing profile persona UUIDs |
| `profile_personas` | [`DraftProfilePersonaValue`](#draftprofilepersonavalue)[] | No | Profile persona values to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchCohortDraftApiResponse`

Schema: PatchCohortDraftApiResponse

**Request body** (`PatchCohortDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`CohortDraftFormState`](#cohortdraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateCohortApiRequest`

Schema: UpdateCohortApiRequest

**Request body** (`UpdateCohortApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `cohorts` | [`UpdateCohortItem`](#updatecohortitem)[] | Yes | List of cohorts to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateCohortApiResponse`

Schema: UpdateCohortApiResponse

**Request body** (`UpdateCohortApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`CohortResultItem`](#cohortresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

## Types

### `CohortDepartment`

Department for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department UUID |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `CohortDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortDepartment`](#cohortdepartment)[] | No | Currently selected departments |
| `resources` | [`CohortDepartment`](#cohortdepartment)[] | No | Available departments |

---

### `CohortDescriptionResource`

Description resource for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `description` | `string` | No | Description text |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `CohortDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`CohortDescriptionResource`](#cohortdescriptionresource) | No | Currently selected description resource |
| `resources` | [`CohortDescriptionResource`](#cohortdescriptionresource)[] | No | Available description resources |

---

### `CohortDraftFormState`

Full form state after draft patch — server is source of truth.

Client replaces its local form state with this after every successful patch.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_id` | `string` | No | Selected flag option UUID |
| `department_ids` | `string`[] | No | Selected department UUIDs |
| `simulation_ids` | `string`[] | No | Selected simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Selected simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Selected simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Selected profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Selected profile persona UUIDs |

---

### `CohortFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

### `CohortFlagConfig`

Flag config for cohort — matches client FlagConfig interface.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | No | Flag key identifier |
| `label` | `string` | No | Display label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Selected flag option UUID |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `CohortFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`CohortFlagConfig`](#cohortflagconfig) | No | Currently selected flag config |
| `resources` | [`CohortFlagConfig`](#cohortflagconfig)[] | No | Available flag configs |

---

### `CohortNameResource`

Name resource for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `name` | `string` | No | Display name |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `CohortNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | [`CohortNameResource`](#cohortnameresource) | No | Currently selected name resource |
| `resources` | [`CohortNameResource`](#cohortnameresource)[] | No | Available name resources |

---

### `CohortProfile`

Profile for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile UUID |
| `name` | `string` | No | Profile name |
| `description` | `string` | No | Profile description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

### `CohortProfilePersona`

Profile persona for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `profile_id` | `string` | No | Associated profile UUID |
| `persona_id` | `string` | No | Associated persona UUID |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

### `CohortProfilePersonaSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortProfilePersona`](#cohortprofilepersona)[] | No | Currently selected profile personas |
| `resources` | [`CohortProfilePersona`](#cohortprofilepersona)[] | No | Available profile personas |

---

### `CohortProfileSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortProfile`](#cohortprofile)[] | No | Currently selected profiles |
| `resources` | [`CohortProfile`](#cohortprofile)[] | No | Available profiles |

---

### `CohortResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | No | Cohort UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`CohortFieldError`](#cohortfielderror)[] | No | List of per-field errors |

---

### `CohortSimulation`

Simulation for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Simulation UUID |
| `name` | `string` | No | Simulation name |
| `description` | `string` | No | Simulation description |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `CohortSimulationAvailability`

Simulation availability for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier |
| `simulation_id` | `string` | No | Associated simulation UUID |
| `time` | `string` | No | Availability time slot |
| `type` | `string` | No | Availability type |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

### `CohortSimulationAvailabilitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortSimulationAvailability`](#cohortsimulationavailability)[] | No | Currently selected availability slots |
| `resources` | [`CohortSimulationAvailability`](#cohortsimulationavailability)[] | No | Available availability slots |

---

### `CohortSimulationPosition`

Simulation position for cohort.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Associated simulation UUID |
| `value` | `integer` | No | Position value |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |

---

### `CohortSimulationPositionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortSimulationPosition`](#cohortsimulationposition)[] | No | Currently selected simulation positions |
| `resources` | [`CohortSimulationPosition`](#cohortsimulationposition)[] | No | Available simulation positions |

---

### `CohortSimulationSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`CohortSimulation`](#cohortsimulation)[] | No | Currently selected simulations |
| `resources` | [`CohortSimulation`](#cohortsimulation)[] | No | Available simulations |

---

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

### `CreateCohortItem`

Single cohort item for create — no cohort_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Profile persona UUIDs |
| `is_inactive` | `boolean` | No | Whether the cohort is inactive |
| `departments` | `string`[] | No | Department names for resolution |
| `simulations` | `string`[] | No | Simulation names for resolution |
| `profiles` | `string`[] | No | Profile names for resolution |

---

### `DeleteCohortResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `cohort_id` | `string` | Yes | Cohort UUID |
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

### `DraftProfilePersonaValue`

Value for creating a profile_persona resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | Yes | Associated profile UUID |
| `persona_id` | `string` | Yes | Associated persona UUID |

---

### `DraftSimulationAvailabilityValue`

Value for creating a simulation_availability resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | Associated simulation UUID |
| `time` | `string` | Yes | Availability time slot |
| `type` | `string` | Yes | Availability type |

---

### `DraftSimulationPositionValue`

Value for creating a simulation_position resource via draft.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | Associated simulation UUID |
| `value` | `integer` | Yes | Position value |

---

### `GetCohortDraftResponse`

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
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `profile_persona_ids` | `string`[] | Yes | Associated profile persona UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `simulation_availability_ids` | `string`[] | Yes | Associated simulation availability UUIDs |
| `simulation_position_ids` | `string`[] | Yes | Associated simulation position UUIDs |
| `simulation_ids` | `string`[] | Yes | Associated simulation UUIDs |

---

### `GetPersonaResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `icon` | `string` | Yes | — |
| `color` | `string` | Yes | — |
| `department_ids` | `string`[] | Yes | — |
| `instructions` | `string` | Yes | — |
| `examples` | `string`[] | Yes | — |
| `parameter_field_ids` | `string`[] | Yes | — |
| `created_at` | `string` | Yes | — |
| `active` | `boolean` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |

---

### `ListCohortApiCohort`

Cohort item in list response with Python-computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | No | Cohort UUID |
| `name` | `string` | No | Cohort name |
| `description` | `string` | No | Cohort description |
| `is_inactive` | `boolean` | No | Whether the cohort is inactive |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `mcp` | `boolean` | No | Whether created via MCP |
| `department_ids` | `string`[] | No | Associated department IDs |
| `profile_ids` | `string`[] | No | Associated profile IDs |
| `simulation_ids` | `string`[] | No | Associated simulation IDs |
| `usage_count` | `integer` | No | Number of times this cohort is used |
| `num_members` | `integer` | No | Number of members in the cohort |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_leave` | `boolean` | No | Whether the current user can leave |
| `updated_at` | `string` | No | Last updated timestamp |

---

### `ListCohortApiDepartment`

Department in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department UUID |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |

---

### `ListCohortApiProfile`

Profile in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile UUID |
| `name` | `string` | No | Profile name |
| `description` | `string` | No | Profile description |

---

### `ListCohortApiSimulation`

Simulation in list response.

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | No | Simulation UUID |
| `name` | `string` | No | Simulation name |
| `description` | `string` | No | Simulation description |
| `department_ids` | `string`[] | No | Associated department IDs |

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

### `UpdateCohortItem`

Single cohort item for update — cohort_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `cohort_id` | `string` | Yes | Cohort UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `flag_id` | `string` | No | Flag option UUID |
| `department_ids` | `string`[] | No | Department UUIDs |
| `simulation_ids` | `string`[] | No | Simulation UUIDs |
| `simulation_position_ids` | `string`[] | No | Simulation position UUIDs |
| `simulation_availability_ids` | `string`[] | No | Simulation availability UUIDs |
| `profile_ids` | `string`[] | No | Profile UUIDs |
| `profile_persona_ids` | `string`[] | No | Profile persona UUIDs |
| `is_inactive` | `boolean` | No | Whether the cohort is inactive |
| `departments` | `string`[] | No | Department names for resolution |
| `simulations` | `string`[] | No | Simulation names for resolution |
| `profiles` | `string`[] | No | Profile names for resolution |

---