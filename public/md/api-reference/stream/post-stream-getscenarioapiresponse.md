# `POST` `/stream/GetScenarioApiResponse`

Schema: GetScenarioApiResponse

## Request Body (`GetScenarioApiResponse-Input`)

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
| `names` | [`ScenarioNameSection`](/api-reference/stream/types#scenarionamesection) | No | Name section data |
| `descriptions` | [`ScenarioDescriptionSection`](/api-reference/stream/types#scenariodescriptionsection) | No | Description section data |
| `problem_statements` | [`ScenarioProblemStatementSection`](/api-reference/stream/types#scenarioproblemstatementsection) | No | Problem statement section data |
| `flags` | [`ScenarioFlagSection`](/api-reference/stream/types#scenarioflagsection) | No | Flag section data |
| `departments` | [`ScenarioDepartmentSection`](/api-reference/stream/types#scenariodepartmentsection) | No | Department section data |
| `personas` | [`ScenarioPersonaSection`](/api-reference/stream/types#scenariopersonasection) | No | Persona section data |
| `documents` | [`ScenarioDocumentSection`](/api-reference/stream/types#scenariodocumentsection) | No | Document section data |
| `parameters` | [`ScenarioParameterSection`](/api-reference/stream/types#scenarioparametersection) | No | Parameter section data |
| `parameter_fields` | [`ScenarioParameterFieldSection`](/api-reference/stream/types#scenarioparameterfieldsection) | No | Parameter field section data |
| `objectives` | [`ScenarioObjectiveSection`](/api-reference/stream/types#scenarioobjectivesection) | No | Objective section data |
| `images` | [`ScenarioImageSection`](/api-reference/stream/types#scenarioimagesection) | No | Image section data |
| `videos` | [`ScenarioVideoSection`](/api-reference/stream/types#scenariovideosection) | No | Video section data |
| `questions` | [`ScenarioQuestionSection`](/api-reference/stream/types#scenarioquestionsection) | No | Question section data |
| `options` | [`ScenarioOptionSection`](/api-reference/stream/types#scenariooptionsection) | No | Option section data |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getscenarioapiresponse Schema Stream Getscenarioapiresponse Post"
}
```