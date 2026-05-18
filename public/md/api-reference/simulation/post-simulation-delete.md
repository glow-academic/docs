# `POST` `/simulation/delete`

# `POST` `/simulation/delete`

Delete Simulation

Bulk delete simulations — composable infra architecture.

## Request Body (`DeleteSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_ids` | `string`[] | Yes | UUIDs of simulations to delete |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response (`DeleteSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteSimulationResult`](/api-reference/simulation/types#deletesimulationresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
