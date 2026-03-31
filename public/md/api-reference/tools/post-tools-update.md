# `POST` `/tools/update`

Update Tool

Update tools using composable infra architecture.

## Request Body (`UpdateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tools` | [`UpdateToolItem`](/api-reference/tools/types#updatetoolitem)[] | Yes | List of tools to update |

## Response (`UpdateToolApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ToolResultItem`](/api-reference/tools/types#toolresultitem)[] | Yes | List of operation results |