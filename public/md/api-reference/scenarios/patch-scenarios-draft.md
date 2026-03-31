# `PATCH` `/scenarios/draft`

Patch Scenario Draft

Patch scenario draft — composable infra architecture.

## Request Body (`PatchScenarioDraftApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `objectives` | `string`[] | No | Objective texts to create |
| `objective_ids` | `string`[] | No | Existing objective UUIDs |
| `images` | [`app__infra__scenario__types__DraftImageValue`](/api-reference/scenarios/types#app-infra-scenario-types-draftimagevalue)[] | No | Image values to create |
| `image_ids` | `string`[] | No | Existing image UUIDs |
| `videos` | [`app__infra__scenario__types__DraftVideoValue`](/api-reference/scenarios/types#app-infra-scenario-types-draftvideovalue)[] | No | Video values to create |
| `video_ids` | `string`[] | No | Existing video UUIDs |
| `questions` | [`app__infra__scenario__types__DraftQuestionValue`](/api-reference/scenarios/types#app-infra-scenario-types-draftquestionvalue)[] | No | Question values to create |
| `question_ids` | `string`[] | No | Existing question UUIDs |
| `options` | [`app__infra__scenario__types__DraftOptionValue`](/api-reference/scenarios/types#app-infra-scenario-types-draftoptionvalue)[] | No | Option values to create |
| `option_ids` | `string`[] | No | Existing option UUIDs |
| `flag_ids` | `string`[] | No | Associated flag UUIDs |
| `department_ids` | `string`[] | No | Associated department UUIDs |
| `persona_ids` | `string`[] | No | Associated persona UUIDs |
| `document_ids` | `string`[] | No | Associated document UUIDs |
| `parameter_field_ids` | `string`[] | No | Associated parameter field UUIDs |

## Response (`PatchScenarioDraftApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `draft_id` | `string` | Yes | UUID of the saved draft |
| `new_version` | `integer` | Yes | New draft version number |
| `message` | `string` | Yes | Human-readable result message |
| `form_state` | [`ScenarioDraftFormState`](/api-reference/scenarios/types#scenariodraftformstate) | Yes | Server-authoritative form state |