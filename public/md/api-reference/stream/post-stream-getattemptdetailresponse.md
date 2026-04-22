# `POST` `/stream/GetAttemptDetailResponse`

Schema: GetAttemptDetailResponse

## Request Body (`GetAttemptDetailResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `attempt_exists` | `boolean` | No | Whether the attempt exists |
| `access_denied` | `boolean` | No | Whether access was denied |
| `attempt` | [`AttemptData`](/api-reference/stream/types#attemptdata) | No | Attempt-level data |
| `simulation` | [`SimulationData`](/api-reference/stream/types#simulationdata) | No | Simulation metadata |
| `timer` | [`TimerData`](/api-reference/stream/types#timerdata) | No | Timer information |
| `aggregated_results` | [`AggregatedResults`](/api-reference/stream/types#aggregatedresults) | No | Aggregated results across chats |
| `current_chat_index` | `integer` | No | Index of the current chat |
| `expected_chat_count` | `integer` | No | Expected total number of chats |
| `is_active` | `boolean` | No | Whether the attempt is currently active |
| `is_lobby` | `boolean` | No | Whether the attempt is in lobby state |
| `show_results` | `boolean` | No | Whether to show results view |
| `should_show_controls` | `boolean` | No | Whether to show UI controls |
| `is_own_attempt` | `boolean` | No | Whether this is the actor's own attempt |
| `current_chat_id` | `string` | No | ID of the current chat |
| `has_messages` | `boolean` | No | Whether the current chat has gradeable content (messages or quiz responses) |
| `available_continuation_options` | [`AvailableContinuationOptions-Input`](/api-reference/stream/types#availablecontinuationoptions-input) | No | Continuation options for infinite mode |
| `rubric_structure` | [`RubricStructureData`](/api-reference/stream/types#rubricstructuredata) | No | Rubric structure data |
| `training_id` | `string` | No | UUID of the training |
| `chat_entry_id` | `string` | No | UUID of the chat entry |
| `next_chat_entry_id` | `string` | No | UUID of the next chat entry to set up, None when all chats are complete |
| `resources` | [`AttemptResources-Input`](/api-reference/stream/types#attemptresources-input) | No | Resource maps keyed by ID |
| `entries` | [`AttemptEntries-Input`](/api-reference/stream/types#attemptentries-input) | No | Entry payloads by type |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getattemptdetailresponse Schema Stream Getattemptdetailresponse Post"
}
```