# `POST` `/scenario/delete`

# `POST` `/scenario/delete`

Delete Scenario

Bulk delete scenarios — composable infra architecture.

## Request Body (`DeleteScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `string`[] | Yes | UUIDs of scenarios to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response (`DeleteScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteScenarioResult`](/api-reference/scenario/types#deletescenarioresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
