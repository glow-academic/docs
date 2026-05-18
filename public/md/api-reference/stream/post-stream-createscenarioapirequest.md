# `POST` `/stream/CreateScenarioApiRequest`

# `POST` `/stream/CreateScenarioApiRequest`

Schema: CreateScenarioApiRequest

## Request Body (`CreateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`CreateScenarioItem`](/api-reference/stream/types#createscenarioitem)[] | Yes | List of scenarios to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

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
