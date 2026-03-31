# `POST` `/scenarios/get`

Get Scenario

Get scenario information using the canonical shared scenario operation.

## Request Body (`GetScenarioApiRequest`)

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
| `field_show_selected_by_param` | [`ScenarioFieldParamFilter`](/api-reference/scenarios/types#scenariofieldparamfilter)[] | No | Field-level show_selected filters by parameter |
| `draft_id` | `string` | No | UUID of the draft to retrieve |
| `mcp` | `boolean` | No | Whether this is an MCP request |
| `parameter_ids` | `string`[] | No | Filter by parameter UUIDs |

## Response (`GetScenarioApiResponse-Output`)

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
| `names` | [`ScenarioNameSection`](/api-reference/scenarios/types#scenarionamesection) | No | Name section data |
| `descriptions` | [`ScenarioDescriptionSection`](/api-reference/scenarios/types#scenariodescriptionsection) | No | Description section data |
| `problem_statements` | [`ScenarioProblemStatementSection`](/api-reference/scenarios/types#scenarioproblemstatementsection) | No | Problem statement section data |
| `flags` | [`ScenarioFlagSection`](/api-reference/scenarios/types#scenarioflagsection) | No | Flag section data |
| `departments` | [`ScenarioDepartmentSection`](/api-reference/scenarios/types#scenariodepartmentsection) | No | Department section data |
| `personas` | [`ScenarioPersonaSection`](/api-reference/scenarios/types#scenariopersonasection) | No | Persona section data |
| `documents` | [`ScenarioDocumentSection`](/api-reference/scenarios/types#scenariodocumentsection) | No | Document section data |
| `parameters` | [`ScenarioParameterSection`](/api-reference/scenarios/types#scenarioparametersection) | No | Parameter section data |
| `parameter_fields` | [`ScenarioParameterFieldSection`](/api-reference/scenarios/types#scenarioparameterfieldsection) | No | Parameter field section data |
| `objectives` | [`ScenarioObjectiveSection`](/api-reference/scenarios/types#scenarioobjectivesection) | No | Objective section data |
| `images` | [`ScenarioImageSection`](/api-reference/scenarios/types#scenarioimagesection) | No | Image section data |
| `videos` | [`ScenarioVideoSection`](/api-reference/scenarios/types#scenariovideosection) | No | Video section data |
| `questions` | [`ScenarioQuestionSection`](/api-reference/scenarios/types#scenarioquestionsection) | No | Question section data |
| `options` | [`ScenarioOptionSection`](/api-reference/scenarios/types#scenariooptionsection) | No | Option section data |