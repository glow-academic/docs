# `POST` `/stream/CreateScenarioApiRequest`

Schema: CreateScenarioApiRequest

## Request Body (`CreateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`CreateScenarioItem`](/api-reference/stream/types#createscenarioitem)[] | Yes | List of scenarios to create |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createscenarioapirequest Schema Stream Createscenarioapirequest Post"
}
```