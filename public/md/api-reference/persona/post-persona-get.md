# `POST` `/persona/get`

Get Persona

Get persona information using the canonical shared persona operation.

## Request Body (`GetPersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the persona to retrieve |
| `draft_id` | `string` | No | UUID of the draft to load instead of published state |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for descriptions section |
| `colors` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for colors section |
| `icons` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for icons section |
| `instructions` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for instructions section |
| `departments` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for departments section |
| `examples` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for examples section |
| `parameter_fields` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for parameter fields section |
| `voices` | [`app__infra__persona__types__SectionFilter`](/api-reference/persona/types#app-infra-persona-types-sectionfilter) | No | Filter options for voices section |

## Response (`GetPersonaApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the authenticated user |
| `persona_exists` | `boolean` | No | Whether the requested persona exists |
| `can_edit` | `boolean` | No | Whether the current user has edit permission |
| `disabled_reason` | `string` | No | Human-readable reason if editing is disabled |
| `group_id` | `string` | No | Generation group UUID for AI operations |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `names` | [`PersonaNameResource`](/api-reference/persona/types#personanameresource)[] | No | Name resources with selected/suggested flags |
| `descriptions` | [`PersonaDescriptionResource`](/api-reference/persona/types#personadescriptionresource)[] | No | Description resources with selected/suggested flags |
| `colors` | [`PersonaColorResource`](/api-reference/persona/types#personacolorresource)[] | No | Color resources with selected/suggested flags |
| `icons` | [`PersonaIconResource`](/api-reference/persona/types#personaiconresource)[] | No | Icon resources with selected/suggested flags |
| `instructions` | [`PersonaInstructionResource`](/api-reference/persona/types#personainstructionresource)[] | No | Instruction resources with selected/suggested flags |
| `flags` | [`PersonaFlagConfig`](/api-reference/persona/types#personaflagconfig)[] | No | Boolean flag configs with selected flag (e.g. active status) |
| `departments` | [`PersonaDepartmentResource`](/api-reference/persona/types#personadepartmentresource)[] | No | Department resources with selected/suggested flags |
| `parameter_fields` | [`PersonaParameterFieldResource`](/api-reference/persona/types#personaparameterfieldresource)[] | No | Parameter field resources with selected/suggested flags |
| `examples` | [`PersonaExampleResource`](/api-reference/persona/types#personaexampleresource)[] | No | Example resources with selected/suggested flags |
| `parameters` | `any`[] | No | Parameter resources |
| `voices` | [`PersonaVoiceResource`](/api-reference/persona/types#personavoiceresource)[] | No | Voice resources with selected/suggested flags |
| `fields` | [`GetFieldResponse`](/api-reference/persona/types#getfieldresponse)[] | No | All available field definitions (computed, never saved) |
| `resolved_parameter_ids` | `string`[] | No | Parameter IDs derived from saved parameter_fields |