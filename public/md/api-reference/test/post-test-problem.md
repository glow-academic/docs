# `POST` `/test/problem`

# `POST` `/test/problem`

Problem Test

Report a test problem — composable infra architecture.

## Request Body (`ProblemTestApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes | Problem type: feature, bug, question, other |
| `message` | `string` | Yes | Problem description (max 1000 chars) |

## Response (`ProblemTestApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | UUID of the created problem |
| `success` | `boolean` | No | Whether the problem was created |
| `message` | `string` | No | Status message |
