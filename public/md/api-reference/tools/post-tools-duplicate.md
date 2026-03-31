# `POST` `/tools/duplicate`

Duplicate Tool

Duplicate a tool — composable infra architecture.

## Request Body (`DuplicateToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | Yes | Tool identifier to duplicate |

## Response (`DuplicateToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the duplication succeeded |
| `tool_id` | `string` | Yes | New duplicated tool identifier |
| `message` | `string` | Yes | Result message |