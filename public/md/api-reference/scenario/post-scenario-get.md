# `POST` `/scenario/get`

Get Scenario

Get scenario information using the canonical shared scenario operation.

## Request Body (`GetScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the scenario to retrieve |
| `draft_id` | `string` | No | UUID of the draft |
| `names` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `descriptions` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `problem_statements` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `flags` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `departments` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `personas` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `documents` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `parameters` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `parameter_fields` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `objectives` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `images` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `videos` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `questions` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |
| `options` | [`app__infra__persona__types__SectionFilter`](/api-reference/scenario/types#app-infra-persona-types-sectionfilter) | No | — |

## Response (`GetScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `scenario_exists` | `boolean` | No | Whether the scenario exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason the scenario is disabled |
| `group_id` | `string` | No | UUID of the owning group |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `resolved_parameter_ids` | `string`[] | No | Resolved parameter IDs from saved fields |
| `names` | [`ScenarioNameResource`](/api-reference/scenario/types#scenarionameresource)[] | No | Name resources |
| `descriptions` | [`ScenarioDescriptionResource`](/api-reference/scenario/types#scenariodescriptionresource)[] | No | Description resources |
| `problem_statements` | [`ScenarioProblemStatement`](/api-reference/scenario/types#scenarioproblemstatement)[] | No | Problem statement resources |
| `flags` | [`ScenarioFlagConfig`](/api-reference/scenario/types#scenarioflagconfig)[] | No | Flag configs |
| `departments` | [`ScenarioDepartment`](/api-reference/scenario/types#scenariodepartment)[] | No | Department resources |
| `personas` | [`ScenarioPersona`](/api-reference/scenario/types#scenariopersona)[] | No | Persona resources |
| `documents` | [`ScenarioDocument`](/api-reference/scenario/types#scenariodocument)[] | No | Document resources |
| `parameters` | `any`[] | No | Parameter resources |
| `parameter_fields` | [`ScenarioField`](/api-reference/scenario/types#scenariofield)[] | No | Parameter field resources |
| `objectives` | [`ScenarioObjective`](/api-reference/scenario/types#scenarioobjective)[] | No | Objective resources |
| `images` | [`ScenarioImage`](/api-reference/scenario/types#scenarioimage)[] | No | Image resources |
| `videos` | [`ScenarioVideo`](/api-reference/scenario/types#scenariovideo)[] | No | Video resources |
| `questions` | [`ScenarioQuestion`](/api-reference/scenario/types#scenarioquestion)[] | No | Question resources |
| `options` | [`ScenarioOption`](/api-reference/scenario/types#scenariooption)[] | No | Option resources |