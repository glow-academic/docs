# `POST` `/parameters/create`

Create Parameter

Create parameters using composable infra architecture.

## Request Body (`CreateParameterApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `parameters` | [`CreateParameterItem`](/api-reference/parameters/types#createparameteritem)[] | Yes | List of parameters to create |

## Response (`CreateParameterApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ParameterResultItem`](/api-reference/parameters/types#parameterresultitem)[] | Yes | List of operation results |