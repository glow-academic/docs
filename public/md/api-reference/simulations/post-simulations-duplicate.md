# `POST` `/simulations/duplicate`

Duplicate Simulation

Duplicate a simulation — composable infra architecture.

## Request Body (`DuplicateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_id` | `string` | Yes | UUID of the simulation to duplicate |

## Response (`DuplicateSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `simulation_id` | `string` | Yes | UUID of the duplicated simulation |
| `message` | `string` | Yes | Human-readable result message |