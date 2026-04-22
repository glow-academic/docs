# `POST` `/simulation/duplicate`

Duplicate Simulation

Duplicate a simulation — composable infra architecture.

## Request Body (`DuplicateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation to duplicate |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant duplicate |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`DuplicateSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `simulation_id` | `string` | Yes | UUID of the duplicated simulation |
| `message` | `string` | Yes | Human-readable result message |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |