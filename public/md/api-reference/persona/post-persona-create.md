# `POST` `/persona/create`

# `POST` `/persona/create`

Create Persona

Create personas using composable infra architecture.

## Request Body (`CreatePersonaApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `personas` | [`CreatePersonaItem`](/api-reference/persona/types#createpersonaitem)[] | Yes | List of persona items to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreatePersonaApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`PersonaResultItem`](/api-reference/persona/types#personaresultitem)[] | Yes | Per-persona creation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
