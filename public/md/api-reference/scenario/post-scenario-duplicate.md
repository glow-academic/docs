# `POST` `/scenario/duplicate`

Duplicate Scenario

Duplicate a scenario — composable infra architecture.

## Request Body (`DuplicateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_id` | `string` | Yes | UUID of the scenario to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `scenario_id` | `string` | Yes | UUID of the duplicated scenario |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |