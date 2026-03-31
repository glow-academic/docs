# `POST` `/models/duplicate`

Duplicate Model

Duplicate a model — composable infra architecture.

## Request Body (`DuplicateModelApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | `string` | Yes | Model identifier to duplicate |

## Response (`DuplicateModelApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `model_id` | `string` | Yes | New duplicated model identifier |
| `message` | `string` | Yes | Result message |