# `POST` `/scenario/create`

Create Scenario

Create scenarios using composable infra architecture.

## Request Body (`CreateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`CreateScenarioItem`](/api-reference/scenario/types#createscenarioitem)[] | Yes | List of scenarios to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateScenarioApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](/api-reference/scenario/types#scenarioresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |