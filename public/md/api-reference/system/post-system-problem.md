# `POST` `/system/problem`

# `POST` `/system/problem`

Problem System

Report a system problem — composable infra architecture.

## Request Body (`ProblemSystemApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes | Problem type: feature, bug, question, other |
| `message` | `string` | Yes | Problem description (max 1000 chars) |

## Response (`ProblemSystemApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `problem_id` | `string` | Yes | UUID of the created problem |
| `success` | `boolean` | No | Whether the problem was created |
| `message` | `string` | No | Status message |
