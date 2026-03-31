# `POST` `/tools/create`

Create Tool

Create tools using composable infra architecture.

## Request Body (`CreateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`CreateToolItem`](/api-reference/tools/types#createtoolitem)[] | Yes | List of tools to create |

## Response (`CreateToolApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](/api-reference/tools/types#toolresultitem)[] | Yes | List of operation results |