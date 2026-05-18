# `POST` `/stream/TestGroupPayload`

# `POST` `/stream/TestGroupPayload`

Schema: TestGroupPayload

## Request Body (`TestGroupPayload`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `prev_run_id` | `string` | No | Previous run ID; None starts from first run |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Testgrouppayload Schema Stream Testgrouppayload Post"
}
```
