# `POST` `/providers/create`

Create Provider

Create providers using composable infra architecture.

## Request Body (`CreateProviderApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `providers` | [`CreateProviderItem`](/api-reference/providers/types#createprovideritem)[] | Yes | List of providers to create |

## Response (`CreateProviderApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ProviderResultItem`](/api-reference/providers/types#providerresultitem)[] | Yes | List of operation results |