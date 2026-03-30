# Rubrics

## Endpoints

### `POST` `/rubrics/get`

Get Rubric

Get rubric information using the canonical shared rubric operation.

**Request body** (`GetRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |

**Response** (`GetRubricApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `rubric_exists` | `boolean` | No | Whether the rubric exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `names` | [`RubricNameSection`](#rubricnamesection) | No | Name section with resource and options |
| `descriptions` | [`RubricDescriptionSection`](#rubricdescriptionsection) | No | Description section with resource and options |
| `flags` | [`RubricFlagSection`](#rubricflagsection) | No | Flag section with selections and options |
| `departments` | [`RubricDepartmentSection`](#rubricdepartmentsection) | No | Department section with selections and options |
| `points` | [`RubricPointsSection`](#rubricpointssection) | No | Points section with resource and options |
| `standard_groups` | [`RubricStandardGroupsSection`](#rubricstandardgroupssection) | No | Standard groups section |
| `standards` | [`RubricStandardsSection`](#rubricstandardssection) | No | Standards section |

---

### `POST` `/rubrics/search`

Search Rubric

Search rubrics — composable infra architecture.

**Request body** (`SearchRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `filter_simulation_ids` | `string`[] | No | — |
| `department_search` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListRubricApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `rubrics` | [`ListRubricApiRubric`](#listrubricapirubric)[] | No | List of rubrics |
| `standard_groups` | [`ListRubricApiStandardGroup`](#listrubricapistandardgroup)[] | No | List of standard groups |
| `standards` | [`ListRubricApiStandard`](#listrubricapistandard)[] | No | List of standards |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for departments in list UI |
| `simulation_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for simulations in list UI |
| `total_count` | `integer` | No | Total number of matching records |

---

### `POST` `/rubrics/create`

Create Rubric

Create rubrics using composable infra architecture.

**Request body** (`CreateRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`CreateRubricItem`](#createrubricitem)[] | Yes | List of rubrics to create |

**Response** (`CreateRubricApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](#rubricresultitem)[] | Yes | List of operation results |

---

### `POST` `/rubrics/update`

Update Rubric

Update rubrics using composable infra architecture.

**Request body** (`UpdateRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`UpdateRubricItem`](#updaterubricitem)[] | Yes | List of rubrics to update |

**Response** (`UpdateRubricApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](#rubricresultitem)[] | Yes | List of operation results |

---

### `POST` `/rubrics/duplicate`

Duplicate Rubric

Duplicate a rubric — composable infra architecture.

**Request body** (`DuplicateRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to duplicate |

**Response** (`DuplicateRubricApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Newly created rubric UUID |
| `message` | `string` | Yes | Human-readable result message |

---

### `POST` `/rubrics/delete`

Delete Rubric

Bulk delete rubrics — composable infra architecture.

**Request body** (`DeleteRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_ids` | `string`[] | Yes | Rubric UUIDs to delete |

**Response** (`DeleteRubricApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteRubricResult`](#deleterubricresult)[] | Yes | List of operation results |

---

### `PATCH` `/rubrics/draft`

Patch Rubric Draft

Patch rubric draft — composable infra architecture.

**Request body** (`PatchRubricDraftApiRequest`):

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
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |

**Response** (`PatchRubricDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`RubricDraftFormState`](#rubricdraftformstate) | No | Server-authoritative form state |

---

### `POST` `/rubrics/drafts`

Get Rubric Drafts

List rubric drafts owned by the current profile.

**Response** (`GetRubricDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetRubricDraftResponse`](#getrubricdraftresponse)[] | No | List of rubric draft entries |

---

### `POST` `/rubrics/docs`

Get Rubric Docs Endpoint

Get composed documentation for the rubric artifact.

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

### `POST` `/rubrics/export`

Export Rubrics

Export all rubrics as a clean, denormalized CSV.

**Request body** (`ExportRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | — |

**Response** (`ExportRubricApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/rubrics/csv`

Parse Rubric Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseRubricCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateRubricItem`](#createrubricitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/rubrics/refresh`

Rubric Refresh

Refresh rubric materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/CreateRubricApiRequest`

Schema: CreateRubricApiRequest

**Request body** (`CreateRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`CreateRubricItem`](#createrubricitem)[] | Yes | List of rubrics to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateRubricApiResponse`

Schema: CreateRubricApiResponse

**Request body** (`CreateRubricApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](#rubricresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteRubricApiRequest`

Schema: DeleteRubricApiRequest

**Request body** (`DeleteRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_ids` | `string`[] | Yes | Rubric UUIDs to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteRubricApiResponse`

Schema: DeleteRubricApiResponse

**Request body** (`DeleteRubricApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteRubricResult`](#deleterubricresult)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateRubricApiRequest`

Schema: DuplicateRubricApiRequest

**Request body** (`DuplicateRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateRubricApiResponse`

Schema: DuplicateRubricApiResponse

**Request body** (`DuplicateRubricApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Newly created rubric UUID |
| `message` | `string` | Yes | Human-readable result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportRubricApiResponse`

Schema: ExportRubricApiResponse

**Request body** (`ExportRubricApiResponse`):

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

### `POST` `/stream/GetRubricApiRequest`

Schema: GetRubricApiRequest

**Request body** (`GetRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric UUID to retrieve |
| `draft_id` | `string` | No | Draft UUID to load from |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetRubricApiResponse`

Schema: GetRubricApiResponse

**Request body** (`GetRubricApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `rubric_exists` | `boolean` | No | Whether the rubric exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `names` | [`RubricNameSection`](#rubricnamesection) | No | Name section with resource and options |
| `descriptions` | [`RubricDescriptionSection`](#rubricdescriptionsection) | No | Description section with resource and options |
| `flags` | [`RubricFlagSection`](#rubricflagsection) | No | Flag section with selections and options |
| `departments` | [`RubricDepartmentSection`](#rubricdepartmentsection) | No | Department section with selections and options |
| `points` | [`RubricPointsSection`](#rubricpointssection) | No | Points section with resource and options |
| `standard_groups` | [`RubricStandardGroupsSection`](#rubricstandardgroupssection) | No | Standard groups section |
| `standards` | [`RubricStandardsSection`](#rubricstandardssection) | No | Standards section |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetRubricDraftsApiResponse`

Schema: GetRubricDraftsApiResponse

**Request body** (`GetRubricDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetRubricDraftResponse`](#getrubricdraftresponse)[] | No | List of rubric draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchRubricDraftApiRequest`

Schema: PatchRubricDraftApiRequest

**Request body** (`PatchRubricDraftApiRequest`):

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
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchRubricDraftApiResponse`

Schema: PatchRubricDraftApiResponse

**Request body** (`PatchRubricDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | Draft UUID |
| `new_version` | `integer` | Yes | New draft version number after patch |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`RubricDraftFormState`](#rubricdraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateRubricApiRequest`

Schema: UpdateRubricApiRequest

**Request body** (`UpdateRubricApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`UpdateRubricItem`](#updaterubricitem)[] | Yes | List of rubrics to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateRubricApiResponse`

Schema: UpdateRubricApiResponse

**Request body** (`UpdateRubricApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](#rubricresultitem)[] | Yes | List of operation results |

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

### `CreateRubricItem`

Single rubric item for create — no rubric_id.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional pre-assigned UUID |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `active_flag_id` | `string` | No | Active flag option UUID |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |

---

### `DeleteRubricResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | Yes | Rubric UUID |
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

### `GetRubricDraftResponse`

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
| `point_ids` | `string`[] | Yes | Associated point UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `standard_group_ids` | `string`[] | Yes | Associated standard group UUIDs |
| `standard_ids` | `string`[] | Yes | Associated standard UUIDs |

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

### `ListRubricApiRubric`

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | No | Rubric UUID |
| `name` | `string` | No | Rubric name |
| `description` | `string` | No | Rubric description |
| `points` | `integer` | No | Total points |
| `pass_points` | `integer` | No | Points required to pass |
| `pass_percentage` | `integer` | No | Percentage required to pass |
| `department_ids` | `string`[] | No | Associated department IDs |
| `simulation_ids` | `string`[] | No | Associated simulation IDs |
| `active_simulation_count` | `integer` | No | Number of active simulations using this rubric |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_delete` | `boolean` | No | Whether the current user can delete |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `standard_group_ids` | `string`[] | No | Associated standard group UUIDs |

---

### `ListRubricApiStandard`

| Field | Type | Required | Description |
|---|---|---|---|
| `standard_id` | `string` | No | Standard UUID |
| `standard_group_id` | `string` | No | Parent standard group UUID |
| `name` | `string` | No | Standard name |
| `description` | `string` | No | Standard description |
| `points` | `integer` | No | Points for this standard |

---

### `ListRubricApiStandardGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| `standard_group_id` | `string` | No | Standard group UUID |
| `rubric_id` | `string` | No | Parent rubric UUID |
| `name` | `string` | No | Standard group name |
| `description` | `string` | No | Standard group description |
| `points` | `integer` | No | Total points for this group |
| `pass_points` | `integer` | No | Points required to pass this group |

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

### `RubricDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available departments |

---

### `RubricDescriptionSection`

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

### `RubricDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Selected name resource UUID |
| `description_id` | `string` | No | Selected description resource UUID |
| `flag_id` | `string` | No | Selected flag option UUID |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `point_ids` | `string`[] | Yes | Selected point UUIDs |
| `standard_group_ids` | `string`[] | Yes | Selected standard group UUIDs |
| `standard_ids` | `string`[] | Yes | Selected standard UUIDs |

---

### `RubricFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Field name that has the error |
| `message` | `string` | Yes | Human-readable error message |

---

### `RubricFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag key identifier |
| `label` | `string` | Yes | Display label |
| `description` | `string` | No | Flag description |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `flag_option_id` | `string` | No | Selected flag option UUID |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `RubricFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`RubricFlagConfig`](#rubricflagconfig)[] | No | Currently selected flag configs |
| `resources` | [`RubricFlagConfig`](#rubricflagconfig)[] | No | Available flag configs |

---

### `RubricNameSection`

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

### `RubricPointsSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected points resource |
| `resources` | `any`[] | No | Available points resources |

---

### `RubricResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `rubric_id` | `string` | No | Rubric UUID |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`RubricFieldError`](#rubricfielderror)[] | No | List of per-field errors |

---

### `RubricStandardGroupsSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected standard groups |
| `resources` | `any`[] | No | Available standard groups |

---

### `RubricStandardsSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected standards |
| `resources` | `any`[] | No | Available standards |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `UpdateRubricItem`

Single rubric item for update — rubric_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to update |
| `name_id` | `string` | No | Name resource UUID |
| `name` | `string` | No | Name value for resolution |
| `description_id` | `string` | No | Description resource UUID |
| `description` | `string` | No | Description value for resolution |
| `active_flag_id` | `string` | No | Active flag option UUID |
| `active_flag` | `boolean` | No | Active flag boolean value |
| `department_ids` | `string`[] | No | Department UUIDs |
| `departments` | `string`[] | No | Department names for resolution |
| `point_ids` | `string`[] | No | Point UUIDs |
| `standard_group_ids` | `string`[] | No | Standard group UUIDs |
| `standard_ids` | `string`[] | No | Standard UUIDs |

---