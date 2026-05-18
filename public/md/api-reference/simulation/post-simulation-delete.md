# `POST` `/simulation/delete`

Delete Simulation

Bulk delete simulations — composable infra architecture.

## Request Body (`DeleteSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulation_ids` | `string`[] | No | UUIDs of simulations to delete (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, delete every simulation matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `search` | `string` | No | Full-text search query |
| `filter_scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `filter_cohort_ids` | `string`[] | No | Filter by cohort UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `scenario_search` | `string` | No | Search text for scenario facet (no-op for row filtering) |
| `cohort_search` | `string` | No | Search text for cohort facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — confirms or rejects a dormant delete |
| `accept` | `boolean` | No | Accept (confirm deletion) or reject (restore). Only meaningful with idempotency_key |

## Response (`DeleteSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteSimulationResult`](/api-reference/simulation/types#deletesimulationresult)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |