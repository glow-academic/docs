# `POST` `/simulation/create`

# `POST` `/simulation/create`

Create Simulation

Create simulations using composable infra architecture.

## Request Body (`CreateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulations` | [`CreateSimulationItem`](/api-reference/simulation/types#createsimulationitem)[] | Yes | List of simulations to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateSimulationApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SimulationResultItem`](/api-reference/simulation/types#simulationresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
