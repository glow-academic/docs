# `POST` `/agents/duplicate`

Duplicate Agent

Duplicate an agent — composable infra architecture.

## Request Body (`DuplicateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | Yes | UUID of the agent to duplicate |

## Response (`DuplicateAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `agent_id` | `string` | Yes | UUID of the duplicated agent |
| `message` | `string` | Yes | Human-readable result message |