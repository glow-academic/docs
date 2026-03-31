# `POST` `/stream/GetPersonaApiResponse`

Schema: GetPersonaApiResponse

## Request Body (`GetPersonaApiResponse-Input`)

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
| `names` | [`PersonaNameSection`](/api-reference/stream/types#personanamesection) | No | Name resource section with current selection and options |
| `descriptions` | [`PersonaDescriptionSection`](/api-reference/stream/types#personadescriptionsection) | No | Description resource section with current selection and options |
| `colors` | [`PersonaColorSection`](/api-reference/stream/types#personacolorsection) | No | Color resource section with current selection and options |
| `icons` | [`PersonaIconSection`](/api-reference/stream/types#personaiconsection) | No | Icon resource section with current selection and options |
| `instructions` | [`PersonaInstructionSection`](/api-reference/stream/types#personainstructionsection) | No | Instruction resource section with current selection and options |
| `flags` | [`PersonaFlagSection`](/api-reference/stream/types#personaflagsection) | No | Boolean flag configuration section (e.g. active status) |
| `departments` | [`PersonaDepartmentSection`](/api-reference/stream/types#personadepartmentsection) | No | Department association section with current selections and options |
| `parameter_fields` | [`PersonaParameterFieldSection`](/api-reference/stream/types#personaparameterfieldsection) | No | Parameter field section with current selections and options |
| `examples` | [`PersonaExampleSection`](/api-reference/stream/types#personaexamplesection) | No | Example resource section with current selections and options |
| `parameters` | [`PersonaParameterSection`](/api-reference/stream/types#personaparametersection) | No | Parameter section with current selections and options |
| `voices` | [`PersonaVoiceSection`](/api-reference/stream/types#personavoicesection) | No | Voice resource section with current selections and options |
| `fields` | [`GetFieldResponse`](/api-reference/stream/types#getfieldresponse)[] | No | All available field definitions (computed, never saved) |
| `resolved_parameter_ids` | `string`[] | No | Parameter IDs derived from saved parameter_fields |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getpersonaapiresponse Schema Stream Getpersonaapiresponse Post"
}
```