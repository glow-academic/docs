# `POST` `/stream/UpdateScenarioApiRequest`

Schema: UpdateScenarioApiRequest

## Request Body (`UpdateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`UpdateScenarioItem`](/api-reference/stream/types#updatescenarioitem)[] | Yes | List of scenarios to update |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatescenarioapirequest Schema Stream Updatescenarioapirequest Post"
}
```