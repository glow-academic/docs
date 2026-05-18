# `POST` `/stream/UpdateScenarioApiRequest`

# `POST` `/stream/UpdateScenarioApiRequest`

Schema: UpdateScenarioApiRequest

## Request Body (`UpdateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`UpdateScenarioItem`](/api-reference/stream/types#updatescenarioitem)[] | Yes | List of scenarios to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

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
