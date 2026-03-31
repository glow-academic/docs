# `POST` `/fields/create`

Create Field

Create fields using composable infra architecture.

## Request Body (`CreateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`CreateFieldItem`](/api-reference/fields/types#createfielditem)[] | Yes | List of fields to create |

## Response (`CreateFieldApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/fields/types#fieldresultitem)[] | Yes | Per-item creation results |