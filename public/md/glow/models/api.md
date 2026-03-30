# Models

## Endpoints

### `POST` `/models/get`

Get Model

Get model information using the canonical shared model operation.

**Request body** (`GetModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

**Response** (`GetModelApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `model_exists` | `boolean` | No | Whether the model exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the model |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `provider_show_ai_generate` | `boolean` | No | Show AI generate for provider step |
| `features_show_ai_generate` | `boolean` | No | Show AI generate for features step |
| `names` | [`ModelNameSection`](#modelnamesection) | No | Name section with resources |
| `descriptions` | [`ModelDescriptionSection`](#modeldescriptionsection) | No | Description section with resources |
| `values` | [`ModelValueSection`](#modelvaluesection) | No | Value section with resources |
| `providers` | [`ModelProviderSection`](#modelprovidersection) | No | Provider section with resources |
| `flags` | [`ModelFlagSection`](#modelflagsection) | No | Flag section with configs |
| `departments` | [`ModelDepartmentSection`](#modeldepartmentsection) | No | Department section with resources |
| `modalities` | [`ModelModalitySection`](#modelmodalitysection) | No | Modality section with resources |
| `temperature_levels` | [`ModelTemperatureLevelSection`](#modeltemperaturelevelsection) | No | Temperature level section |
| `pricing` | [`ModelPricingSection`](#modelpricingsection) | No | Pricing section with resources |
| `reasoning_levels` | [`ModelReasoningLevelSection`](#modelreasoninglevelsection) | No | Reasoning level section |
| `qualities` | [`ModelQualitySection`](#modelqualitysection) | No | Quality section with resources |
| `voices` | [`ModelVoiceSection`](#modelvoicesection) | No | Voice section with resources |

---

### `POST` `/models/search`

Search Model

Search models — composable infra architecture.

**Request body** (`SearchModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_provider_ids` | `string`[] | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `filter_agent_ids` | `string`[] | No | — |
| `provider_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `agent_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListModelApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `models` | [`ListModelApiModel`](#listmodelapimodel)[] | No | List of model entries |
| `provider_filter` | [`ListFilterSection`](#listfiltersection) | No | Provider filter options |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Department filter options |
| `agent_filter` | [`ListFilterSection`](#listfiltersection) | No | Agent filter options |
| `total_count` | `integer` | No | Total number of models |

---

### `POST` `/models/create`

Create Model

Create models using composable infra architecture.

**Request body** (`CreateModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`CreateModelItem`](#createmodelitem)[] | Yes | List of models to create |

**Response** (`CreateModelApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ModelResultItem`](#modelresultitem)[] | Yes | List of operation results |

---

### `POST` `/models/update`

Update Model

Update models using composable infra architecture.

**Request body** (`UpdateModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`UpdateModelItem`](#updatemodelitem)[] | Yes | List of models to update |

**Response** (`UpdateModelApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ModelResultItem`](#modelresultitem)[] | Yes | List of operation results |

---

### `POST` `/models/duplicate`

Duplicate Model

Duplicate a model — composable infra architecture.

**Request body** (`DuplicateModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | Yes | Model identifier to duplicate |

**Response** (`DuplicateModelApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `model_id` | `string` | Yes | New duplicated model identifier |
| `message` | `string` | Yes | Result message |

---

### `POST` `/models/delete`

Delete Model

Bulk delete models — composable infra architecture.

**Request body** (`DeleteModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_ids` | `string`[] | Yes | List of model IDs to delete |

**Response** (`DeleteModelApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteModelResult`](#deletemodelresult)[] | Yes | List of deletion results |

---

### `PATCH` `/models/draft`

Patch Model Draft

Patch model draft — composable infra architecture.

**Request body** (`PatchModelDraftApiRequest`):

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
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |

**Response** (`PatchModelDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ModelDraftFormState`](#modeldraftformstate) | No | Server-authoritative form state |

---

### `POST` `/models/drafts`

Get Model Drafts

List model drafts owned by the current profile.

**Response** (`GetModelDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetModelDraftResponse`](#getmodeldraftresponse)[] | No | List of model draft entries |

---

### `POST` `/models/docs`

Get Model Docs Endpoint

Get composed documentation for the model artifact.

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

### `POST` `/models/export`

Export Models

Export all models as a clean, denormalized CSV.

**Request body** (`ExportModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model identifier to export |

**Response** (`ExportModelApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/models/csv`

Parse Model Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseModelCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateModelItem`](#createmodelitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/models/refresh`

Model Refresh

Refresh model materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreateModelApiRequest`

Schema: CreateModelApiRequest

**Request body** (`CreateModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`CreateModelItem`](#createmodelitem)[] | Yes | List of models to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateModelApiResponse`

Schema: CreateModelApiResponse

**Request body** (`CreateModelApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ModelResultItem`](#modelresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteModelApiRequest`

Schema: DeleteModelApiRequest

**Request body** (`DeleteModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_ids` | `string`[] | Yes | List of model IDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteModelApiResponse`

Schema: DeleteModelApiResponse

**Request body** (`DeleteModelApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteModelResult`](#deletemodelresult)[] | Yes | List of deletion results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateModelApiRequest`

Schema: DuplicateModelApiRequest

**Request body** (`DuplicateModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | Yes | Model identifier to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateModelApiResponse`

Schema: DuplicateModelApiResponse

**Request body** (`DuplicateModelApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `model_id` | `string` | Yes | New duplicated model identifier |
| `message` | `string` | Yes | Result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportModelApiRequest`

Schema: ExportModelApiRequest

**Request body** (`ExportModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model identifier to export |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportModelApiResponse`

Schema: ExportModelApiResponse

**Request body** (`ExportModelApiResponse`):

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

### `POST` `/stream/GetModelApiRequest`

Schema: GetModelApiRequest

**Request body** (`GetModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetModelApiResponse`

Schema: GetModelApiResponse

**Request body** (`GetModelApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `model_exists` | `boolean` | No | Whether the model exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the model |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `provider_show_ai_generate` | `boolean` | No | Show AI generate for provider step |
| `features_show_ai_generate` | `boolean` | No | Show AI generate for features step |
| `names` | [`ModelNameSection`](#modelnamesection) | No | Name section with resources |
| `descriptions` | [`ModelDescriptionSection`](#modeldescriptionsection) | No | Description section with resources |
| `values` | [`ModelValueSection`](#modelvaluesection) | No | Value section with resources |
| `providers` | [`ModelProviderSection`](#modelprovidersection) | No | Provider section with resources |
| `flags` | [`ModelFlagSection`](#modelflagsection) | No | Flag section with configs |
| `departments` | [`ModelDepartmentSection`](#modeldepartmentsection) | No | Department section with resources |
| `modalities` | [`ModelModalitySection`](#modelmodalitysection) | No | Modality section with resources |
| `temperature_levels` | [`ModelTemperatureLevelSection`](#modeltemperaturelevelsection) | No | Temperature level section |
| `pricing` | [`ModelPricingSection`](#modelpricingsection) | No | Pricing section with resources |
| `reasoning_levels` | [`ModelReasoningLevelSection`](#modelreasoninglevelsection) | No | Reasoning level section |
| `qualities` | [`ModelQualitySection`](#modelqualitysection) | No | Quality section with resources |
| `voices` | [`ModelVoiceSection`](#modelvoicesection) | No | Voice section with resources |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetModelDraftsApiResponse`

Schema: GetModelDraftsApiResponse

**Request body** (`GetModelDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetModelDraftResponse`](#getmodeldraftresponse)[] | No | List of model draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchModelDraftApiRequest`

Schema: PatchModelDraftApiRequest

**Request body** (`PatchModelDraftApiRequest`):

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
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchModelDraftApiResponse`

Schema: PatchModelDraftApiResponse

**Request body** (`PatchModelDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the draft save succeeded |
| `draft_id` | `string` | Yes | Draft unique identifier |
| `new_version` | `integer` | Yes | New draft version after save |
| `message` | `string` | Yes | Result message |
| `form_state` | [`ModelDraftFormState`](#modeldraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateModelApiRequest`

Schema: UpdateModelApiRequest

**Request body** (`UpdateModelApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`UpdateModelItem`](#updatemodelitem)[] | Yes | List of models to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateModelApiResponse`

Schema: UpdateModelApiResponse

**Request body** (`UpdateModelApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ModelResultItem`](#modelresultitem)[] | Yes | List of operation results |

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

### `CreateModelItem`

Single model item for create — no model_id.

Required fields (name): provide ID or value.

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
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |
| `model_ids` | `string`[] | No | Related model identifiers |

---

### `DeleteModelResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `model_id` | `string` | Yes | Deleted model identifier |
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

### `GetModelDraftResponse`

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
| `modality_ids` | `string`[] | Yes | Associated modality UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `pricing_ids` | `string`[] | Yes | Associated pricing UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `provider_ids` | `string`[] | Yes | Associated provider UUIDs |
| `quality_ids` | `string`[] | Yes | Associated quality UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Associated temperature level UUIDs |
| `value_ids` | `string`[] | Yes | Associated value UUIDs |
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

### `ListModelApiModel`

Model type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | No | Model unique identifier |
| `name` | `string` | No | Display name of the model |
| `description` | `string` | No | Model description text |
| `provider_id` | `string` | No | Associated provider identifier |
| `provider_name` | `string` | No | Associated provider display name |
| `base_url` | `string` | No | Base URL for the model API |
| `department_ids` | `string`[] | No | Associated department identifiers |
| `is_inactive` | `boolean` | No | Whether the model is inactive |
| `active` | `boolean` | No | Whether the model is currently active |
| `image_model` | `boolean` | No | Whether this is an image model |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `updated_at` | `string` | No | Timestamp of last update |

---

### `ModelDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned departments |
| `resources` | `any`[] | No | Available departments |

---

### `ModelDescriptionSection`

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

### `ModelDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource identifier |
| `description_id` | `string` | No | Resolved description resource identifier |
| `flag_ids` | `string`[] | Yes | Flag option identifiers |
| `department_ids` | `string`[] | Yes | Department identifiers |
| `modality_ids` | `string`[] | Yes | Modality identifiers |
| `pricing_ids` | `string`[] | Yes | Pricing tier identifiers |
| `provider_ids` | `string`[] | Yes | Provider identifiers |
| `quality_ids` | `string`[] | Yes | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | Yes | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | Yes | Temperature level identifiers |
| `value_ids` | `string`[] | Yes | Value resource identifiers |
| `voice_ids` | `string`[] | Yes | Voice identifiers |

---

### `ModelFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that caused the error |
| `message` | `string` | Yes | Error message describing the issue |

---

### `ModelFlagConfig`

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

### `ModelFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`ModelFlagConfig`](#modelflagconfig)[] | No | Currently active flag configs |
| `resources` | [`ModelFlagConfig`](#modelflagconfig)[] | No | Available flag configs |

---

### `ModelModalitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned modalities |
| `resources` | `any`[] | No | Available modalities |

---

### `ModelNameSection`

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

### `ModelPricingSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned pricing tiers |
| `resources` | `any`[] | No | Available pricing tiers |

---

### `ModelProviderSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected provider resource |
| `resources` | `any`[] | No | Available provider resources |

---

### `ModelQualitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned quality levels |
| `resources` | `any`[] | No | Available quality levels |

---

### `ModelReasoningLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned reasoning levels |
| `resources` | `any`[] | No | Available reasoning levels |

---

### `ModelResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `model_id` | `string` | No | Model unique identifier |
| `message` | `string` | Yes | Result message |
| `errors` | [`ModelFieldError`](#modelfielderror)[] | No | List of field-level errors |

---

### `ModelTemperatureLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned temperature levels |
| `resources` | `any`[] | No | Available temperature levels |

---

### `ModelValueSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected value resource |
| `resources` | `any`[] | No | Available value resources |

---

### `ModelVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently assigned voices |
| `resources` | `any`[] | No | Available voices |

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

### `UpdateModelItem`

Single model item for update — model_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | Yes | Target model identifier to update |
| `name_id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Department identifiers |
| `departments` | `string`[] | No | Department names to match |
| `flag_ids` | `string`[] | No | Flag option identifiers |
| `modality_ids` | `string`[] | No | Modality identifiers |
| `pricing_ids` | `string`[] | No | Pricing tier identifiers |
| `provider_ids` | `string`[] | No | Provider identifiers |
| `quality_ids` | `string`[] | No | Quality level identifiers |
| `reasoning_level_ids` | `string`[] | No | Reasoning level identifiers |
| `temperature_level_ids` | `string`[] | No | Temperature level identifiers |
| `value_ids` | `string`[] | No | Value resource identifiers |
| `voice_ids` | `string`[] | No | Voice identifiers |
| `model_ids` | `string`[] | No | Related model identifiers |

---