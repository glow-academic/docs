# `POST` `/simulations/delete`

Delete Simulation

Bulk delete simulations — composable infra architecture.

## Request Body (`DeleteSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_ids` | `string`[] | Yes | UUIDs of simulations to delete |

## Response (`DeleteSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteSimulationResult`](/api-reference/simulations/types#deletesimulationresult)[] | Yes | List of operation results |