# `POST` `/stream/DeleteScenarioApiRequest`

# `POST` `/stream/DeleteScenarioApiRequest`

Schema: DeleteScenarioApiRequest

## Request Body (`DeleteScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `string`[] | Yes | UUIDs of scenarios to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

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
