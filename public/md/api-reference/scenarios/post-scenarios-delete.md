# `POST` `/scenarios/delete`

Delete Scenario

Bulk delete scenarios — composable infra architecture.

## Request Body (`DeleteScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenario_ids` | `string`[] | Yes | UUIDs of scenarios to delete |

## Response (`DeleteScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteScenarioResult`](/api-reference/scenarios/types#deletescenarioresult)[] | Yes | List of operation results |