# `POST` `/fields/update`

Update Field

Update fields using composable infra architecture.

## Request Body (`UpdateFieldApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `fields` | [`UpdateFieldItem`](/api-reference/fields/types#updatefielditem)[] | Yes | List of fields to update |

## Response (`UpdateFieldApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`FieldResultItem`](/api-reference/fields/types#fieldresultitem)[] | Yes | Per-item update results |