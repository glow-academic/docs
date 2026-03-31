# `POST` `/agents/delete`

Delete Agent

Bulk delete agents — composable infra architecture.

## Request Body (`DeleteAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_ids` | `string`[] | Yes | UUIDs of agents to delete |

## Response (`DeleteAgentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`DeleteAgentResult`](/api-reference/agents/types#deleteagentresult)[] | Yes | List of operation results |