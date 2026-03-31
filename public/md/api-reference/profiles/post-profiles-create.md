# `POST` `/profiles/create`

Create Profile

Create profiles using composable infra architecture.

## Request Body (`CreateProfileApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `profiles` | [`CreateProfileItem`](/api-reference/profiles/types#createprofileitem)[] | Yes | List of profiles to create |

## Response (`CreateProfileApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`ProfileResultItem`](/api-reference/profiles/types#profileresultitem)[] | Yes | Per-item creation results |