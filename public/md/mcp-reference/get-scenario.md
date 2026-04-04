# `get_scenario`

Get scenario information using the canonical shared scenario operation.

## Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | No | UUID of the scenario to retrieve |
| `document_ids` | `string` | No | Filter by document UUIDs |
| `problem_statement_ids` | `string` | No | Filter by problem statement UUIDs |
| `filter_department_ids` | `string` | No | Filter by department UUIDs |
| `filter_persona_ids` | `string` | No | Filter by persona UUIDs |
| `filter_document_ids` | `string` | No | Filter by document UUIDs |
| `filter_parameter_ids` | `string` | No | Filter by parameter UUIDs |
| `filter_field_ids` | `string` | No | Filter by field UUIDs |
| `persona_search` | `string` | No | Search text to filter personas |
| `document_search` | `string` | No | Search text to filter documents |
| `parameter_search` | `string` | No | Search text to filter parameters |
| `description_search` | `string` | No | Search text to filter descriptions |
| `problem_statement_search` | `string` | No | Search text to filter problem statements |
| `image_search` | `string` | No | Search text to filter images |
| `video_search` | `string` | No | Search text to filter videos |
| `question_search` | `string` | No | Search text to filter questions |
| `option_search` | `string` | No | Search text to filter options |
| `persona_show_selected` | `string` | No | Show only selected personas |
| `document_show_selected` | `string` | No | Show only selected documents |
| `parameter_show_selected` | `string` | No | Show only selected parameters |
| `field_show_selected_by_param` | `string` | No | Field-level show_selected filters by parameter |
| `draft_id` | `string` | No | UUID of the draft to retrieve |
| `parameter_ids` | `string` | No | Filter by parameter UUIDs |

## Example

```json
{
  "name": "get_scenario",
  "arguments": {}
}
```

## Related

- [Scenario Guide](/scenario)
- [API Endpoint](/api-reference/scenarios/post-scenarios-get)