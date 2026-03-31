# `POST` `/simulations/create`

Create Simulation

Create simulations using composable infra architecture.

## Request Body (`CreateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulations` | [`CreateSimulationItem`](/api-reference/simulations/types#createsimulationitem)[] | Yes | List of simulations to create |

## Response (`CreateSimulationApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SimulationResultItem`](/api-reference/simulations/types#simulationresultitem)[] | Yes | List of operation results |