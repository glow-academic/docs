# `POST` `/simulation/update`

Update Simulation

Update simulations using composable infra architecture.

## Request Body (`UpdateSimulationApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `simulations` | [`UpdateSimulationItem`](/api-reference/simulation/types#updatesimulationitem)[] | No | List of simulations to update (required on first call when ``all`` is false) |
| `all` | `boolean` | No | When true, apply ``patch`` to every simulation matching the filter fields below (minus ``excluded_ids``) |
| `excluded_ids` | `string`[] | No | UUIDs to skip even when matched by ``all``-mode filters |
| `patch` | [`UpdateSimulationPatch`](/api-reference/simulation/types#updatesimulationpatch) | No | Shared change set applied to every matched row when ``all=true`` (sparse — only set fields are updated; ``patch.id`` ignored) |
| `search` | `string` | No | Full-text search query |
| `filter_scenario_ids` | `string`[] | No | Filter by scenario UUIDs |
| `filter_cohort_ids` | `string`[] | No | Filter by cohort UUIDs |
| `filter_department_ids` | `string`[] | No | Filter by department UUIDs |
| `scenario_search` | `string` | No | Search text for scenario facet (no-op for row filtering) |
| `cohort_search` | `string` | No | Search text for cohort facet (no-op for row filtering) |
| `department_search` | `string` | No | Search text for department facet (no-op for row filtering) |
| `flag_search` | `string` | No | Search text for flag facet (no-op for row filtering) |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdateSimulationApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SimulationResultItem`](/api-reference/simulation/types#simulationresultitem)[] | Yes | List of operation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |