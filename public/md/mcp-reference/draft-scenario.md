# `draft_scenario`

Patch scenario draft — composable infra architecture.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `input_draft_id` | `string` | No | UUID of the input draft |
| `expected_version` | `integer` | No | Expected draft version for optimistic lock (default: `0`) |
| `name` | `string` | No | Display name value |
| `name_id` | `string` | No | UUID of the name resource |
| `description` | `string` | No | Description text value |
| `description_id` | `string` | No | UUID of the description resource |
| `problem_statement` | `string` | No | Problem statement text value |
| `problem_statement_id` | `string` | No | UUID of the problem statement resource |
| `objectives` | `string` | No | Objective texts to create |
| `objective_ids` | `string` | No | Existing objective UUIDs |
| `images` | `string` | No | Image values to create |
| `image_ids` | `string` | No | Existing image UUIDs |
| `videos` | `string` | No | Video values to create |
| `video_ids` | `string` | No | Existing video UUIDs |
| `questions` | `string` | No | Question values to create |
| `question_ids` | `string` | No | Existing question UUIDs |
| `options` | `string` | No | Option values to create |
| `option_ids` | `string` | No | Existing option UUIDs |
| `flag_ids` | `string` | No | Associated flag UUIDs |
| `department_ids` | `string` | No | Associated department UUIDs |
| `persona_ids` | `string` | No | Associated persona UUIDs |
| `document_ids` | `string` | No | Associated document UUIDs |
| `parameter_field_ids` | `string` | No | Associated parameter field UUIDs |

## Example

```json
{
  "name": "draft_scenario",
  "arguments": {}
}
```

## Related

- [Scenario Guide](/scenario)
- [API Endpoint](/api-reference/scenario/patch-scenario-draft)