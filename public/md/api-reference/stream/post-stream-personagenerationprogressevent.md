# `POST` `/stream/PersonaGenerationProgressEvent`

Schema: PersonaGenerationProgressEvent

## Request Body (`PersonaGenerationProgressEvent`)

| Field | Type | Required | Description |
|---|---|---|---|
| `artifact_type` | `string` | No | — |
| `resource_type` | `string` | No | — |
| `group_id` | `string` | No | — |
| `artifact_id` | `string` | No | — |
| `run_id` | `string` | No | — |
| `success` | `boolean` | No | — |
| `message` | `string` | No | — |
| `error_stage` | `string` | No | — |
| `tool_call_id` | `string` | No | — |
| `tool_name` | `string` | No | — |
| `arguments_delta` | `string` | No | — |
| `id` | `string` | No | — |
| `generated` | `boolean` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `example` | `string` | No | — |
| `template` | `string` | No | — |
| `hex_code` | `string` | No | — |
| `value` | `string` | No | — |
| `icon` | `string` | No | — |
| `type` | `string` | No | — |
| `department_ids` | `any`[] | No | — |
| `setting_ids` | `any`[] | No | — |
| `field_id` | `string` | No | — |
| `updated_at` | `string` | No | — |
| `parameter_id` | `string` | No | — |
| `conditional_parameter_id` | `string` | No | — |
| `conditional_parameter_ids` | `any`[] | No | — |
| `voice` | `string` | No | — |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Personagenerationprogressevent Schema Stream Personagenerationprogressevent Post"
}
```