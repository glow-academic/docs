# `POST` `/agents/update`

Update Agent

Update agents using composable infra architecture.

## Request Body (`UpdateAgentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `agents` | [`UpdateAgentItem`](/api-reference/agents/types#updateagentitem)[] | Yes | List of agents to update |

## Response (`UpdateAgentApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`AgentResultItem`](/api-reference/agents/types#agentresultitem)[] | Yes | List of operation results |