# `POST` `/stream/DeleteScenarioApiRequest`

Schema: DeleteScenarioApiRequest

## Request Body (`DeleteScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `string`[] | Yes | UUIDs of scenarios to delete |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Deletescenarioapirequest Schema Stream Deletescenarioapirequest Post"
}
```