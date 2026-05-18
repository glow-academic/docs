# `POST` `/profile/create`

# `POST` `/profile/create`

Create Profile

Create profiles using composable infra architecture.

## Request Body (`CreateProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `profiles` | [`CreateProfileItem`](/api-reference/profile/types#createprofileitem)[] | Yes | List of profiles to create |
| `idempotency_key` | `string` | No | Operation key for ack — promotes or rejects a dormant create |
| `accept` | `boolean` | No | Accept (promote) or reject dormant state. Only meaningful with idempotency_key |

## Response (`CreateProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ProfileResultItem`](/api-reference/profile/types#profileresultitem)[] | Yes | Per-item creation results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |
| `profiles` | [`ListProfilesApiProfile`](/api-reference/profile/types#listprofilesapiprofile)[] | No | Hydrated rows for the successfully-created profiles (mirrors /profile/search shape) |
