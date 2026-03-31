# `POST` `/personas/update`

Update Persona

Update personas using composable infra architecture.

## Request Body (`UpdatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`UpdatePersonaItem`](/api-reference/personas/types#updatepersonaitem)[] | Yes | List of persona items to update |

## Response (`UpdatePersonaApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](/api-reference/personas/types#personaresultitem)[] | Yes | Per-persona update results |