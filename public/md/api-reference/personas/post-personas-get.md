# `POST` `/personas/get`

Get Persona

Get persona information using the canonical shared persona operation.

## Request Body (`GetPersonaApiRequest`)

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

## Response (`GetPersonaApiResponse-Output`)

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
| `names` | [`PersonaNameSection`](/api-reference/personas/types#personanamesection) | No | Name resource section with current selection and options |
| `descriptions` | [`PersonaDescriptionSection`](/api-reference/personas/types#personadescriptionsection) | No | Description resource section with current selection and options |
| `colors` | [`PersonaColorSection`](/api-reference/personas/types#personacolorsection) | No | Color resource section with current selection and options |
| `icons` | [`PersonaIconSection`](/api-reference/personas/types#personaiconsection) | No | Icon resource section with current selection and options |
| `instructions` | [`PersonaInstructionSection`](/api-reference/personas/types#personainstructionsection) | No | Instruction resource section with current selection and options |
| `flags` | [`PersonaFlagSection`](/api-reference/personas/types#personaflagsection) | No | Boolean flag configuration section (e.g. active status) |
| `departments` | [`PersonaDepartmentSection`](/api-reference/personas/types#personadepartmentsection) | No | Department association section with current selections and options |
| `parameter_fields` | [`PersonaParameterFieldSection`](/api-reference/personas/types#personaparameterfieldsection) | No | Parameter field section with current selections and options |
| `examples` | [`PersonaExampleSection`](/api-reference/personas/types#personaexamplesection) | No | Example resource section with current selections and options |
| `parameters` | [`PersonaParameterSection`](/api-reference/personas/types#personaparametersection) | No | Parameter section with current selections and options |
| `voices` | [`PersonaVoiceSection`](/api-reference/personas/types#personavoicesection) | No | Voice resource section with current selections and options |
| `fields` | [`GetFieldResponse`](/api-reference/personas/types#getfieldresponse)[] | No | All available field definitions (computed, never saved) |
| `resolved_parameter_ids` | `string`[] | No | Parameter IDs derived from saved parameter_fields |