# `POST` `/scenarios/create`

Create Scenario

Create scenarios using composable infra architecture.

## Request Body (`CreateScenarioApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`CreateScenarioItem`](/api-reference/scenarios/types#createscenarioitem)[] | Yes | List of scenarios to create |

## Response (`CreateScenarioApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ScenarioResultItem`](/api-reference/scenarios/types#scenarioresultitem)[] | Yes | List of operation results |