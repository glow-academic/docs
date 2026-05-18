# `POST` `/auth/group`

# `POST` `/auth/group`

Group Auth

Resolve or create an auth group with optional naming.

## Request Body (`GroupAuthApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | No | Existing group UUID (omit to create or reuse via time window) |
| `snapshot_key` | `string` | No | Snapshot key for SETNX-race convergence on a single group across concurrent reads (e.g. parallel /context + /group + /search fan-out on page load). Echoed back in the response. |

## Response (`GroupAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | Resolved or newly created group UUID |
| `name` | `string` | No | The group's current title (latest active group_names_entry, or 'New Chat' fallback for freshly minted groups) |
| `snapshot_key` | `string` | No | Snapshot key echoed back — the UUID concurrent fan-out reads converged on via SETNX. Mirrors the resolved group_id. |
| `runs` | [`GroupRun`](/api-reference/auth/types#grouprun)[] | No | Conversation history — populated when resolving an existing group for fetch |
| `group_exists` | `boolean` | No | (detail) Whether the group exists in storage — populated when ``include_resources=True`` |
| `actor_name` | `string` | No | (detail) Display name of the current actor (caller profile) |
| `total_message_count` | `integer` | No | (detail) Total number of messages in the group |
| `models` | [`GroupResource`](/api-reference/auth/types#groupresource)[] | No | (detail) Models used in the group |
| `agents` | [`GroupResource`](/api-reference/auth/types#groupresource)[] | No | (detail) Agents used in the group |
| `profiles` | [`GroupResource`](/api-reference/auth/types#groupresource)[] | No | (detail) Profiles that authored runs in this group |
