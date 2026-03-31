# `POST` `/rubrics/create`

Create Rubric

Create rubrics using composable infra architecture.

## Request Body (`CreateRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubrics` | [`CreateRubricItem`](/api-reference/rubrics/types#createrubricitem)[] | Yes | List of rubrics to create |

## Response (`CreateRubricApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`RubricResultItem`](/api-reference/rubrics/types#rubricresultitem)[] | Yes | List of operation results |