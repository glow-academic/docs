# `POST` `/persona/update`

# `POST` `/persona/update`

Update Persona

Update personas using composable infra architecture.

## Request Body (`UpdatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`UpdatePersonaItem`](/api-reference/persona/types#updatepersonaitem)[] | Yes | List of persona items to update |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant update |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`UpdatePersonaApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](/api-reference/persona/types#personaresultitem)[] | Yes | Per-persona update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
