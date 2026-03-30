# Agents

## Endpoints

### `POST` `/agents/get`

Get Agent

Get agent information using the canonical shared agent operation.

**Request body** (`GetAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent to retrieve |
| `draft_id` | `string` | No | UUID of the draft to retrieve |

**Response** (`GetAgentApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `agent_exists` | `boolean` | No | Whether the agent exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the agent is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | UUID of the owning group |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `general_show_ai_generate` | `boolean` | No | Show AI generate for general step |
| `names` | [`AgentNameSection`](#agentnamesection) | No | Name section data |
| `descriptions` | [`AgentDescriptionSection`](#agentdescriptionsection) | No | Description section data |
| `models` | [`AgentModelSection`](#agentmodelsection) | No | Model section data |
| `prompts` | [`AgentPromptSection`](#agentpromptsection) | No | Prompt section data |
| `instructions` | [`AgentInstructionSection`](#agentinstructionsection) | No | Instruction section data |
| `flags` | [`AgentFlagSection`](#agentflagsection) | No | Flag section data |
| `departments` | [`AgentDepartmentSection`](#agentdepartmentsection) | No | Department section data |
| `tools` | [`AgentToolSection`](#agenttoolsection) | No | Tool section data |
| `temperature_levels` | [`AgentTemperatureLevelSection`](#agenttemperaturelevelsection) | No | Temperature level section data |
| `reasoning_levels` | [`AgentReasoningLevelSection`](#agentreasoninglevelsection) | No | Reasoning level section data |
| `voices` | [`AgentVoiceSection`](#agentvoicesection) | No | Voice section data |
| `qualities` | [`AgentQualitySection`](#agentqualitysection) | No | Quality section data |
| `rubrics` | [`AgentRubricSection`](#agentrubricsection) | No | Rubric section data |

---

### `POST` `/agents/search`

Search Agent

Search agents — composable infra architecture.

**Request body** (`SearchAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `filter_department_ids` | `string`[] | No | — |
| `filter_model_ids` | `string`[] | No | — |
| `filter_tool_ids` | `string`[] | No | — |
| `department_search` | `string` | No | — |
| `model_search` | `string` | No | — |
| `tool_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`ListAgentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `agents` | [`ListAgentApiAgent`](#listagentapiagent)[] | No | List of agent items |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for departments |
| `model_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for models |
| `tool_filter` | [`ListFilterSection`](#listfiltersection) | No | Filter options for tools |
| `total_count` | `integer` | No | Total number of matching records |

---

### `POST` `/agents/create`

Create Agent

Create agents using composable infra architecture.

**Request body** (`CreateAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`CreateAgentItem`](#createagentitem)[] | Yes | List of agents to create |

**Response** (`CreateAgentApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](#agentresultitem)[] | Yes | List of operation results |

---

### `POST` `/agents/update`

Update Agent

Update agents using composable infra architecture.

**Request body** (`UpdateAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`UpdateAgentItem`](#updateagentitem)[] | Yes | List of agents to update |

**Response** (`UpdateAgentApiResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](#agentresultitem)[] | Yes | List of operation results |

---

### `POST` `/agents/duplicate`

Duplicate Agent

Duplicate an agent — composable infra architecture.

**Request body** (`DuplicateAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to duplicate |

**Response** (`DuplicateAgentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the duplicated agent |
| `message` | `string` | Yes | Human-readable result message |

---

### `POST` `/agents/delete`

Delete Agent

Bulk delete agents — composable infra architecture.

**Request body** (`DeleteAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_ids` | `string`[] | Yes | UUIDs of agents to delete |

**Response** (`DeleteAgentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAgentResult`](#deleteagentresult)[] | Yes | List of operation results |

---

### `PATCH` `/agents/draft`

Patch Agent Draft

Patch agent draft — composable infra architecture.

**Request body** (`PatchAgentDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | No | UUID of the owning group |
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |

**Response** (`PatchAgentDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version number |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`AgentDraftFormState`](#agentdraftformstate) | No | Server-authoritative form state |

---

### `POST` `/agents/drafts`

Get Agent Drafts

List agent drafts owned by the current profile.

**Response** (`GetAgentDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetAgentDraftResponse`](#getagentdraftresponse)[] | No | List of agent draft entries |

---

### `POST` `/agents/docs`

Get Agent Docs Endpoint

Get composed documentation for the agent artifact.

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

### `POST` `/agents/export`

Export Agents

Export all agents as a clean, denormalized CSV.

**Request body** (`ExportAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent to export |

**Response** (`ExportAgentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Suggested file name for download |
| `mime_type` | `string` | Yes | MIME type of the exported content |
| `row_count` | `integer` | Yes | Total number of exported rows |

---

### `POST` `/agents/csv`

Parse Agent Csv

Parse a CSV file and return mapped items for preview.

**Request body:**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

**Response** (`ParseAgentCsvApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `upload_id` | `string` | Yes | — |
| `items` | [`CreateAgentItem`](#createagentitem)[] | Yes | — |
| `mapped_fields` | `string`[] | Yes | — |
| `row_count` | `integer` | Yes | — |

---

### `POST` `/agents/refresh`

Agent Refresh

Refresh agent materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/stream/ComposedDocsResponse`

Schema: ComposedDocsResponse

**Request body** (`ComposedDocsResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse-Input`](#docsresponse-input) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Input`](#docsresponse-input)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Input`](#docsresponse-input)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](#docsapiresponse) | No | Page-level metadata from docs API |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateAgentApiRequest`

Schema: CreateAgentApiRequest

**Request body** (`CreateAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`CreateAgentItem`](#createagentitem)[] | Yes | List of agents to create |

**Response:**

```
`object`
```

---

### `POST` `/stream/CreateAgentApiResponse`

Schema: CreateAgentApiResponse

**Request body** (`CreateAgentApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](#agentresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteAgentApiRequest`

Schema: DeleteAgentApiRequest

**Request body** (`DeleteAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_ids` | `string`[] | Yes | UUIDs of agents to delete |

**Response:**

```
`object`
```

---

### `POST` `/stream/DeleteAgentApiResponse`

Schema: DeleteAgentApiResponse

**Request body** (`DeleteAgentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAgentResult`](#deleteagentresult)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateAgentApiRequest`

Schema: DuplicateAgentApiRequest

**Request body** (`DuplicateAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to duplicate |

**Response:**

```
`object`
```

---

### `POST` `/stream/DuplicateAgentApiResponse`

Schema: DuplicateAgentApiResponse

**Request body** (`DuplicateAgentApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the duplicated agent |
| `message` | `string` | Yes | Human-readable result message |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportAgentApiRequest`

Schema: ExportAgentApiRequest

**Request body** (`ExportAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent to export |

**Response:**

```
`object`
```

---

### `POST` `/stream/ExportAgentApiResponse`

Schema: ExportAgentApiResponse

**Request body** (`ExportAgentApiResponse`):

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

### `POST` `/stream/GetAgentApiRequest`

Schema: GetAgentApiRequest

**Request body** (`GetAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent to retrieve |
| `draft_id` | `string` | No | UUID of the draft to retrieve |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetAgentApiResponse`

Schema: GetAgentApiResponse

**Request body** (`GetAgentApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `agent_exists` | `boolean` | No | Whether the agent exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the agent is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | UUID of the owning group |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `general_show_ai_generate` | `boolean` | No | Show AI generate for general step |
| `names` | [`AgentNameSection`](#agentnamesection) | No | Name section data |
| `descriptions` | [`AgentDescriptionSection`](#agentdescriptionsection) | No | Description section data |
| `models` | [`AgentModelSection`](#agentmodelsection) | No | Model section data |
| `prompts` | [`AgentPromptSection`](#agentpromptsection) | No | Prompt section data |
| `instructions` | [`AgentInstructionSection`](#agentinstructionsection) | No | Instruction section data |
| `flags` | [`AgentFlagSection`](#agentflagsection) | No | Flag section data |
| `departments` | [`AgentDepartmentSection`](#agentdepartmentsection) | No | Department section data |
| `tools` | [`AgentToolSection`](#agenttoolsection) | No | Tool section data |
| `temperature_levels` | [`AgentTemperatureLevelSection`](#agenttemperaturelevelsection) | No | Temperature level section data |
| `reasoning_levels` | [`AgentReasoningLevelSection`](#agentreasoninglevelsection) | No | Reasoning level section data |
| `voices` | [`AgentVoiceSection`](#agentvoicesection) | No | Voice section data |
| `qualities` | [`AgentQualitySection`](#agentqualitysection) | No | Quality section data |
| `rubrics` | [`AgentRubricSection`](#agentrubricsection) | No | Rubric section data |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetAgentDraftsApiResponse`

Schema: GetAgentDraftsApiResponse

**Request body** (`GetAgentDraftsApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetAgentDraftResponse`](#getagentdraftresponse)[] | No | List of agent draft entries |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchAgentDraftApiRequest`

Schema: PatchAgentDraftApiRequest

**Request body** (`PatchAgentDraftApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | No | UUID of the owning group |
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/PatchAgentDraftApiResponse`

Schema: PatchAgentDraftApiResponse

**Request body** (`PatchAgentDraftApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version number |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`AgentDraftFormState`](#agentdraftformstate) | No | Server-authoritative form state |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateAgentApiRequest`

Schema: UpdateAgentApiRequest

**Request body** (`UpdateAgentApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`UpdateAgentItem`](#updateagentitem)[] | Yes | List of agents to update |

**Response:**

```
`object`
```

---

### `POST` `/stream/UpdateAgentApiResponse`

Schema: UpdateAgentApiResponse

**Request body** (`UpdateAgentApiResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](#agentresultitem)[] | Yes | List of operation results |

**Response:**

```
`object`
```

---

## Types

### `AgentDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available department resources |

---

### `AgentDescriptionSection`

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

### `AgentDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | UUID of the selected name resource |
| `description_id` | `string` | No | UUID of the selected description resource |
| `flag_ids` | `string`[] | Yes | Selected flag UUIDs |
| `department_ids` | `string`[] | Yes | Selected department UUIDs |
| `model_ids` | `string`[] | Yes | Selected model UUIDs |
| `tool_ids` | `string`[] | Yes | Selected tool UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Selected reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Selected temperature level UUIDs |
| `voice_ids` | `string`[] | Yes | Selected voice UUIDs |
| `rubric_ids` | `string`[] | Yes | Selected rubric UUIDs |

---

### `AgentFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field with the error |
| `message` | `string` | Yes | Human-readable error message |

---

### `AgentFlagConfig`

Enriched flag config for direct client consumption.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | Flag config key identifier |
| `label` | `string` | Yes | Display label for the flag |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | UUID of the selected icon resource |
| `flag_option_id` | `string` | No | UUID of the flag option |
| `show` | `boolean` | No | Whether to show this flag in the UI |
| `required` | `boolean` | No | Whether this flag is required |
| `generated` | `boolean` | No | Whether this was AI-generated |

---

### `AgentFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | [`AgentFlagConfig`](#agentflagconfig)[] | No | Currently selected flags |
| `resources` | [`AgentFlagConfig`](#agentflagconfig)[] | No | Available flag configs |

---

### `AgentInstructionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected instruction resource |
| `resources` | `any`[] | No | Available instruction resources |

---

### `AgentModelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected model resource |
| `resources` | `any`[] | No | Available model resources |

---

### `AgentNameSection`

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

### `AgentPromptSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected prompt resource |
| `resources` | `any`[] | No | Available prompt resources |

---

### `AgentQualitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected qualities |
| `resources` | `any`[] | No | Available quality resources |

---

### `AgentReasoningLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected reasoning level |
| `resources` | `any`[] | No | Available reasoning levels |

---

### `AgentResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | No | UUID of the affected agent |
| `message` | `string` | Yes | Human-readable result message |
| `errors` | [`AgentFieldError`](#agentfielderror)[] | No | List of per-field errors |

---

### `AgentRubricSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected rubrics |
| `resources` | `any`[] | No | Available rubric resources |

---

### `AgentTemperatureLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `resource` | `any` | No | Currently selected temperature level |
| `resources` | `any`[] | No | Available temperature levels |

---

### `AgentToolSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected tools |
| `resources` | `any`[] | No | Available tool resources |

---

### `AgentVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether this section is visible in the UI |
| `required` | `boolean` | No | Whether this section requires a selection |
| `suggestions` | `string`[] | No | Suggested resource UUIDs for this section |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available for this section |
| `tool_id` | `string` | No | UUID of the create tool for this resource |
| `link_tool_id` | `string` | No | UUID of the link tool for this resource |
| `current` | `any`[] | No | Currently selected voices |
| `resources` | `any`[] | No | Available voice resources |

---

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

### `CreateAgentItem`

Single agent item for create — no agent_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Client-provided UUID for the agent |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `departments` | `string`[] | No | Department names for matching |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `agent_ids` | `string`[] | No | Associated agent resource UUIDs |

---

### `DeleteAgentResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the deleted agent |
| `message` | `string` | Yes | Human-readable result message |

---

### `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

### `DocsResponse-Input`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

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

### `GetAgentDraftResponse`

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
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `model_ids` | `string`[] | Yes | Associated model UUIDs |
| `tool_ids` | `string`[] | Yes | Associated tool UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `reasoning_level_ids` | `string`[] | Yes | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | Yes | Associated temperature level UUIDs |
| `voice_ids` | `string`[] | Yes | Associated voice UUIDs |
| `quality_ids` | `string`[] | Yes | Associated quality UUIDs |
| `rubric_ids` | `string`[] | No | Associated rubric UUIDs |

---

### `ListAgentApiAgent`

Agent type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | UUID of the agent |
| `name` | `string` | No | Display name |
| `description` | `string` | No | Agent description text |
| `reasoning` | `string` | No | Reasoning level label |
| `temperature` | `number` | No | Temperature setting value |
| `model_id` | `string` | No | UUID of the selected model |
| `model_name` | `string` | No | Display name of the model |
| `model_description` | `string` | No | Description of the model |
| `role` | `string` | No | Agent role identifier |
| `updated_at` | `string` | No | Last updated timestamp |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `can_duplicate` | `boolean` | No | Whether the current user can duplicate |
| `can_delete` | `boolean` | No | Whether the current user can delete |

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

### `UpdateAgentItem`

Single agent item for update — agent_id required, all fields optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Display name value |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description text value |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `departments` | `string`[] | No | Department names for matching |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `model_ids` | `string`[] | No | Associated model UUIDs |
| `reasoning_level_ids` | `string`[] | No | Associated reasoning level UUIDs |
| `temperature_level_ids` | `string`[] | No | Associated temperature level UUIDs |
| `tool_ids` | `string`[] | No | Associated tool UUIDs |
| `voice_ids` | `string`[] | No | Associated voice UUIDs |
| `agent_ids` | `string`[] | No | Associated agent resource UUIDs |

---