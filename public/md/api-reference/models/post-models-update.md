# `POST` `/models/update`

Update Model

Update models using composable infra architecture.

## Request Body (`UpdateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `models` | [`UpdateModelItem`](/api-reference/models/types#updatemodelitem)[] | Yes | List of models to update |

## Response (`UpdateModelApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ModelResultItem`](/api-reference/models/types#modelresultitem)[] | Yes | List of operation results |