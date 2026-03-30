# Attempt

## Endpoints

### `POST` `/attempt/get`

Attempt Get

Get attempt detail with the canonical shared attempt bundle.

**Request body** (`GetAttemptDetailRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt to fetch |

**Response** (`GetAttemptDetailResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `attempt_exists` | `boolean` | No | Whether the attempt exists |
| `access_denied` | `boolean` | No | Whether access was denied |
| `attempt` | [`AttemptData`](#attemptdata) | No | Attempt-level data |
| `simulation` | [`SimulationData`](#simulationdata) | No | Simulation metadata |
| `timer` | [`TimerData`](#timerdata) | No | Timer information |
| `aggregated_results` | [`AggregatedResults`](#aggregatedresults) | No | Aggregated results across chats |
| `current_chat_index` | `integer` | No | Index of the current chat |
| `expected_chat_count` | `integer` | No | Expected total number of chats |
| `is_active` | `boolean` | No | Whether the attempt is currently active |
| `is_lobby` | `boolean` | No | Whether the attempt is in lobby state |
| `show_results` | `boolean` | No | Whether to show results view |
| `should_show_controls` | `boolean` | No | Whether to show UI controls |
| `is_own_attempt` | `boolean` | No | Whether this is the actor's own attempt |
| `current_chat_id` | `string` | No | ID of the current chat |
| `has_messages` | `boolean` | No | Whether the chat has messages |
| `available_continuation_options` | [`AvailableContinuationOptions-Output`](#availablecontinuationoptions-output) | No | Continuation options for infinite mode |
| `rubric_structure` | [`RubricStructureData`](#rubricstructuredata) | No | Rubric structure data |
| `training_id` | `string` | No | UUID of the training |
| `chat_entry_id` | `string` | No | UUID of the chat entry |
| `resources` | [`AttemptResources-Output`](#attemptresources-output) | No | Resource maps keyed by ID |
| `entries` | [`AttemptEntries-Output`](#attemptentries-output) | No | Entry payloads by type |

---

### `POST` `/attempt/join`

Attempt Join

Join a chat room for real-time attempt updates.

**Request body** (`AttemptJoinRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |

**Response** (`AttemptJoinResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |

---

### `POST` `/attempt/leave`

Attempt Leave

Leave a chat room, stopping real-time attempt updates.

**Request body** (`AttemptLeaveRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |

**Response** (`AttemptLeaveResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |

---

### `POST` `/attempt/archive`

Archive Attempts

Bulk archive or unarchive attempts (simulation or benchmark).

**Request body** (`ArchiveAttemptsRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `archived` | `boolean` | Yes | Whether to archive (true) or unarchive (false) |
| `attempt_ids` | `string`[] | No | Specific attempt UUIDs to archive |
| `start_date` | `string` | No | Start date for filter-based archive |
| `end_date` | `string` | No | End date for filter-based archive |
| `cohort_ids` | `string`[] | No | Cohort UUIDs to filter by |
| `department_ids` | `string`[] | No | Department UUIDs to filter by |
| `simulation_ids` | `string`[] | No | Simulation UUIDs to filter by |
| `scenario_ids` | `string`[] | No | Scenario UUIDs to filter by |
| `profile_ids_filter` | `string`[] | No | Profile UUIDs to filter by |
| `infinite_mode` | `boolean` | No | Filter by infinite mode status |

**Response** (`ArchiveAttemptsResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `updated_count` | `integer` | No | Number of attempts updated |
| `profile_ids_to_invalidate` | `string`[] | No | Profile IDs whose caches need invalidation |

---

### `POST` `/attempt/refresh`

Attempt Refresh

Refresh attempt materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/attempt/docs`

Get Attempt Docs Endpoint

Get composed documentation for the attempt analytics.

**Request body** (`DocsApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entity_id` | `string` | No | — |

**Response** (`ComposedDocsResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse-Output`](#docsresponse-output) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](#docsapiresponse) | No | Page-level metadata from docs API |

---

### `POST` `/attempt/export`

Export Attempt

Export attempt data as a clean, denormalized ZIP.

**Request body** (`ExportAttemptApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |

**Response** (`ExportAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/attempt/start`

Start Attempt

Create a new attempt using the canonical internal attempt orchestration.

**Request body** (`AttemptStartPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `home_id` | `string` | No | UUID of the home resource |
| `practice_id` | `string` | No | UUID of the practice resource |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

**Response** (`StartAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `chat_entry_id` | `string` | No | — |
| `attempt_chat_id` | `string` | No | — |

---

### `POST` `/attempt/next`

Next Attempt

Proceed to the next scenario in an existing attempt.

**Request body** (`AttemptNextPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `draft_id` | `string` | No | UUID of the draft to use |

**Response** (`NextAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |

---

### `POST` `/attempt/end`

End Attempt

End a single chat within an attempt.

Browser client: sends grade=True, internal AI generates full grade.
Agent: can optionally provide score, feedbacks, strengths, etc. to skip AI.

**Request body** (`EndAttemptApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt to end |
| `chat_id` | `string` | Yes | UUID of the chat to end |
| `grade` | `boolean` | No | Whether to trigger grading after ending |
| `score` | `integer` | No | Pre-computed score from the agent |
| `passed` | `boolean` | No | Pre-computed pass/fail from the agent |
| `time_taken` | `integer` | No | Time taken in seconds |
| `feedbacks` | [`AttemptGradeFeedbackEntry`](#attemptgradefeedbackentry)[] | No | Pre-computed feedback entries |
| `strengths` | [`AttemptGradeStrengthEntry`](#attemptgradestrengthentry)[] | No | Pre-computed strength entries |
| `improvements` | [`AttemptGradeImprovementEntry`](#attemptgradeimprovemententry)[] | No | Pre-computed improvement entries |
| `analyses` | [`AttemptGradeAnalysisEntry`](#attemptgradeanalysisentry)[] | No | Pre-computed analysis entries |
| `highlights` | [`AttemptGradeHighlightEntry`](#attemptgradehighlightentry)[] | No | Pre-computed highlight entries |
| `replacements` | [`AttemptGradeReplacementEntry`](#attemptgradereplacemententry)[] | No | Pre-computed replacement entries |

**Response** (`EndAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | ID of the ended chat |
| `is_attempt_finished` | `boolean` | No | Whether the entire attempt is finished |
| `grade_id` | `string` | No | ID of the generated grade |
| `score` | `integer` | No | Overall score |
| `passed` | `boolean` | No | Whether the attempt passed |

---

### `POST` `/attempt/end-all`

End All Attempt

End all remaining chats in an attempt.

**Request body** (`AttemptEndAllPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |

**Response** (`EndAllAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `success` | `boolean` | Yes | — |
| `all_scenarios_complete` | `boolean` | No | — |
| `message` | `string` | No | — |

---

### `POST` `/attempt/message`

Attempt Message

Send a message in an attempt chat.

Browser client: sends message only, internal AI generates response + hints.
Agent: can optionally provide assistant_content, hints, contents to skip AI.

**Request body** (`MessageAttemptApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `chat_id` | `string` | Yes | — |
| `message` | `string` | Yes | — |
| `parent_message_id` | `string` | No | — |
| `assistant_content` | `string` | No | — |
| `hints` | [`app__routes__attempt__message__HintEntry`](#app-routes-attempt-message-hintentry)[] | No | — |
| `contents` | [`app__routes__attempt__message__ContentEntry`](#app-routes-attempt-message-contententry)[] | No | — |

**Response** (`MessageAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `user_message_id` | `string` | No | — |
| `assistant_message_id` | `string` | No | — |
| `assistant_content` | `string` | No | — |
| `hints` | `object`[] | No | — |

---

### `POST` `/attempt/grade`

Attempt Grade

Trigger grading for an attempt chat.

Browser client: sends chat_id only, internal AI generates full grade.
Agent: can optionally provide score, feedbacks, strengths, etc. to skip AI.

**Request body** (`GradeAttemptRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt to grade |
| `chat_id` | `string` | No | UUID of the chat to grade |
| `resource_types` | `string`[] | No | Resource types to include in grading |
| `user_instructions` | `string`[] | No | Custom grading instructions |
| `score` | `integer` | No | Overall score for the attempt |
| `passed` | `boolean` | No | Whether the attempt passed |
| `time_taken` | `integer` | No | Time taken in seconds |
| `feedbacks` | [`AttemptGradeFeedbackEntry`](#attemptgradefeedbackentry)[] | No | Feedback entries from the grader |
| `strengths` | [`AttemptGradeStrengthEntry`](#attemptgradestrengthentry)[] | No | Strength entries from the grader |
| `improvements` | [`AttemptGradeImprovementEntry`](#attemptgradeimprovemententry)[] | No | Improvement entries from the grader |
| `analyses` | [`AttemptGradeAnalysisEntry`](#attemptgradeanalysisentry)[] | No | Analysis entries from the grader |
| `highlights` | [`AttemptGradeHighlightEntry`](#attemptgradehighlightentry)[] | No | Highlight entries for strengths |
| `replacements` | [`AttemptGradeReplacementEntry`](#attemptgradereplacemententry)[] | No | Replacement entries for improvements |

**Response** (`GradeAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `grade_id` | `string` | No | — |
| `score` | `integer` | No | — |
| `passed` | `boolean` | No | — |

---

### `POST` `/attempt/stop`

Attempt Stop

Stop message generation for an attempt chat.

**Request body** (`AttemptStopPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat to stop generating |

**Response** (`StopAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |

---

### `POST` `/attempt/response`

Attempt Response

Submit a video question response.

**Request body** (`AttemptResponsePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `question_id` | `string` | Yes | UUID of the question being answered |
| `option_ids` | `string`[] | Yes | List of selected option UUIDs |

**Response** (`ResponseAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |
| `is_correct` | `boolean` | No | — |
| `response_id` | `string` | No | — |

---

### `POST` `/attempt/use-previous`

Attempt Use Previous

Copy grades from a previous attempt's chats.

**Request body** (`AttemptUsePreviousPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `previous_chat_map` | `object` | Yes | Map of chat_entry_id to attempt_chat_id |

**Response** (`UsePreviousAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |

---

### `POST` `/attempt/audio/start`

Audio Start

Start an audio session for an attempt chat.

**Request body** (`AudioStartPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |

**Response** (`AudioStartInternalResult`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `group_id` | `string` | Yes | — |
| `attempt_id` | `string` | Yes | — |

---

### `POST` `/attempt/audio/frame`

Audio Frame

Push audio bytes into the session inbound queue.

**Request body** (`AudioFramePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `upload_id` | `string` | No | — |
| `audio` | `string` | No | — |

**Response** (`AudioFrameResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `accepted` | `boolean` | Yes | — |

---

### `POST` `/attempt/audio/stop`

Audio Stop

Stop an audio session for an attempt chat.

**Request body** (`AudioStopPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |

**Response** (`AudioStopInternalResult`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `stopped` | `boolean` | No | — |

---

### `POST` `/attempt/audio/mute`

Audio Mute

Toggle microphone mute for an audio session.

**Request body** (`AudioMutePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `muted` | `boolean` | No | — |

**Response** (`AudioMuteResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `accepted` | `boolean` | Yes | — |

---

### `POST` `/attempt/search`

Search Attempt

Search attempts — composable infra architecture.

**Request body** (`SearchAttemptApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | — |
| `simulation_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `practice` | `boolean` | No | — |
| `is_archived` | `boolean` | No | — |
| `infinite_mode` | `boolean` | No | — |
| `start_date` | `string` | No | — |
| `end_date` | `string` | No | — |
| `simulation_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`SearchAttemptApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `attempts` | [`SearchAttemptItem`](#searchattemptitem)[] | No | Search result attempt items |
| `simulation_filter` | [`ListFilterSection`](#listfiltersection) | No | Simulation filter section |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Department filter section |
| `total_count` | `integer` | No | Total number of matching results |

---

### `GET` `/attempt/download/\{upload_id\}`

Download

Download any file by upload ID with range support.

**Parameters:**

| Name | In | Required | Description |
|---|---|---|---|
| `upload_id` | path | Yes | — |

**Response:**

```
`any`
```

---

### `POST` `/stream/AttemptAssistantCompleteEvent`

Schema: AttemptAssistantCompleteEvent

**Request body** (`AttemptAssistantCompleteEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `message_id` | `string` | Yes | UUID of the assistant message |
| `content` | `string` | No | Final assistant message content |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAssistantHintsEvent`

Schema: AttemptAssistantHintsEvent

**Request body** (`AttemptAssistantHintsEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `hints` | `object`[] | Yes | List of hint objects |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAssistantProgressEvent`

Schema: AttemptAssistantProgressEvent

**Request body** (`AttemptAssistantProgressEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `content_type` | `string` | Yes | Content type: 'delta' or 'audio' |
| `content` | `string` | No | Text content delta |
| `audio` | `any` | No | Audio content payload |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAssistantStartEvent`

Schema: AttemptAssistantStartEvent

**Request body** (`AttemptAssistantStartEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `message_id` | `string` | Yes | UUID of the assistant message |
| `created_at` | `string` | Yes | ISO 8601 timestamp of generation start |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAudioEndedEvent`

Schema: AttemptAudioEndedEvent

**Request body** (`AttemptAudioEndedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `success` | `boolean` | Yes | Whether the voice session ended cleanly |
| `message` | `string` | No | Event message content |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAudioReadyEvent`

Schema: AttemptAudioReadyEvent

**Request body** (`AttemptAudioReadyEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `success` | `boolean` | Yes | Whether the voice session is ready |
| `message` | `string` | No | Event message content |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAudioStartPayload`

Schema: AttemptAudioStartPayload

**Request body** (`AttemptAudioStartPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat for voice session |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptAudioStopPayload`

Schema: AttemptAudioStopPayload

**Request body** (`AttemptAudioStopPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat for voice session |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptChatEndedEvent`

Schema: AttemptChatEndedEvent

**Request body** (`AttemptChatEndedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the ended chat |
| `is_attempt_finished` | `boolean` | No | Whether the entire attempt is finished |
| `grade_id` | `string` | No | UUID of the grade record |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptChatStartedEvent`

Schema: AttemptChatStartedEvent

**Request body** (`AttemptChatStartedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the new chat |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptEndAllPayload`

Schema: AttemptEndAllPayload

**Request body** (`AttemptEndAllPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptEndPayload`

Schema: AttemptEndPayload

**Request body** (`AttemptEndPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the chat to end |
| `grade` | `boolean` | No | Whether to grade this chat |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptEndedEvent`

Schema: AttemptEndedEvent

**Request body** (`AttemptEndedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `success` | `boolean` | Yes | Whether the attempt ended successfully |
| `all_scenarios_complete` | `boolean` | No | Whether all scenarios are complete |
| `message` | `string` | No | Event message content |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptErrorEvent`

Schema: AttemptErrorEvent

**Request body** (`AttemptErrorEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | No | UUID of the related chat |
| `type` | `string` | No | Classification of the error |
| `message` | `string` | Yes | Error message |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptGradeCompleteEvent`

Schema: AttemptGradeCompleteEvent

**Request body** (`AttemptGradeCompleteEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the graded chat |
| `grade_id` | `string` | No | UUID of the grade record |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptGradePayload`

Schema: AttemptGradePayload

**Request body** (`AttemptGradePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | No | UUID of the chat to grade |
| `resource_types` | `string`[] | No | Resource types to grade |
| `user_instructions` | `string`[] | No | Custom grading instructions |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptGradeProgressEvent`

Schema: AttemptGradeProgressEvent

**Request body** (`AttemptGradeProgressEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat being graded |
| `grade_id` | `string` | No | UUID of the grade record |
| `resource_type` | `string` | No | Type of resource being graded |
| `entry` | `object` | No | Grade criterion entry data |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptGradeStartEvent`

Schema: AttemptGradeStartEvent

**Request body** (`AttemptGradeStartEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat being graded |
| `grade_id` | `string` | No | UUID of the grade record |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptJoinPayload`

Schema: AttemptJoinPayload

**Request body** (`AttemptJoinPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat to join |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptJoinedEvent`

Schema: AttemptJoinedEvent

**Request body** (`AttemptJoinedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat joined |
| `success` | `boolean` | Yes | Whether the join succeeded |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptLeavePayload`

Schema: AttemptLeavePayload

**Request body** (`AttemptLeavePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat to leave |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptMessagePayload`

Schema: AttemptMessagePayload

**Request body** (`AttemptMessagePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_id` | `string` | Yes | UUID of the chat |
| `message` | `string` | Yes | Text message content |
| `parent_message_id` | `string` | No | UUID of the parent message for threading |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptNextPayload`

Schema: AttemptNextPayload

**Request body** (`AttemptNextPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `draft_id` | `string` | No | UUID of the draft to use |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptResponsePayload`

Schema: AttemptResponsePayload

**Request body** (`AttemptResponsePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `question_id` | `string` | Yes | UUID of the question being answered |
| `option_ids` | `string`[] | Yes | List of selected option UUIDs |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptResponseResultEvent`

Schema: AttemptResponseResultEvent

**Request body** (`AttemptResponseResultEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the response was submitted |
| `message` | `string` | No | Event message content |
| `is_correct` | `boolean` | No | Whether the response was correct |
| `response_id` | `string` | No | UUID of the saved response |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptStartPayload`

Schema: AttemptStartPayload

**Request body** (`AttemptStartPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `home_id` | `string` | No | UUID of the home resource |
| `practice_id` | `string` | No | UUID of the practice resource |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptStartedEvent`

Schema: AttemptStartedEvent

**Request body** (`AttemptStartedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `chat_entry_id` | `string` | Yes | UUID of the initial chat entry |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptStopPayload`

Schema: AttemptStopPayload

**Request body** (`AttemptStopPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat to stop generating |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptStoppedEvent`

Schema: AttemptStoppedEvent

**Request body** (`AttemptStoppedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `success` | `boolean` | Yes | Whether the stop succeeded |
| `message` | `string` | No | Event message content |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptUsePreviousPayload`

Schema: AttemptUsePreviousPayload

**Request body** (`AttemptUsePreviousPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `previous_chat_map` | `object` | Yes | Map of chat_entry_id to attempt_chat_id |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptUserCompleteEvent`

Schema: AttemptUserCompleteEvent

**Request body** (`AttemptUserCompleteEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `message_id` | `string` | Yes | UUID of the message |
| `content` | `string` | Yes | Final message content |
| `created_at` | `string` | Yes | ISO 8601 timestamp of message creation |
| `item_id` | `string` | No | Audio VAD item identifier |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptUserDeltaEvent`

Schema: AttemptUserDeltaEvent

**Request body** (`AttemptUserDeltaEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `item_id` | `string` | Yes | Audio VAD item identifier |
| `transcript` | `string` | Yes | Incremental transcription delta |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptUserProgressEvent`

Schema: AttemptUserProgressEvent

**Request body** (`AttemptUserProgressEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `item_id` | `string` | No | Audio VAD item identifier |
| `transcript` | `string` | Yes | Current transcription text |

**Response:**

```
`object`
```

---

### `POST` `/stream/AttemptUserStartEvent`

Schema: AttemptUserStartEvent

**Request body** (`AttemptUserStartEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | UUID of the chat |
| `message_id` | `string` | Yes | UUID of the user message |
| `created_at` | `string` | Yes | ISO 8601 timestamp of message creation |
| `item_id` | `string` | No | Audio VAD item identifier |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetAttemptDetailRequest`

Schema: GetAttemptDetailRequest

**Request body** (`GetAttemptDetailRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt to fetch |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetAttemptDetailResponse`

Schema: GetAttemptDetailResponse

**Request body** (`GetAttemptDetailResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `attempt_exists` | `boolean` | No | Whether the attempt exists |
| `access_denied` | `boolean` | No | Whether access was denied |
| `attempt` | [`AttemptData`](#attemptdata) | No | Attempt-level data |
| `simulation` | [`SimulationData`](#simulationdata) | No | Simulation metadata |
| `timer` | [`TimerData`](#timerdata) | No | Timer information |
| `aggregated_results` | [`AggregatedResults`](#aggregatedresults) | No | Aggregated results across chats |
| `current_chat_index` | `integer` | No | Index of the current chat |
| `expected_chat_count` | `integer` | No | Expected total number of chats |
| `is_active` | `boolean` | No | Whether the attempt is currently active |
| `is_lobby` | `boolean` | No | Whether the attempt is in lobby state |
| `show_results` | `boolean` | No | Whether to show results view |
| `should_show_controls` | `boolean` | No | Whether to show UI controls |
| `is_own_attempt` | `boolean` | No | Whether this is the actor's own attempt |
| `current_chat_id` | `string` | No | ID of the current chat |
| `has_messages` | `boolean` | No | Whether the chat has messages |
| `available_continuation_options` | [`AvailableContinuationOptions-Input`](#availablecontinuationoptions-input) | No | Continuation options for infinite mode |
| `rubric_structure` | [`RubricStructureData`](#rubricstructuredata) | No | Rubric structure data |
| `training_id` | `string` | No | UUID of the training |
| `chat_entry_id` | `string` | No | UUID of the chat entry |
| `resources` | [`AttemptResources-Input`](#attemptresources-input) | No | Resource maps keyed by ID |
| `entries` | [`AttemptEntries-Input`](#attemptentries-input) | No | Entry payloads by type |

**Response:**

```
`object`
```

---

## Types

### `AggregatedResults`

Aggregated results for the attempt.

| Field | Type | Required | Description |
|---|---|---|---|
| `total_score` | `number` | No | Total score across all chats |
| `total_possible_points` | `number` | No | Maximum possible points |
| `percentage` | `number` | No | Score as a percentage |
| `passed` | `boolean` | No | Whether the attempt passed overall |
| `chats_completed` | `integer` | No | Number of chats completed |
| `total_chats` | `integer` | No | Total number of chats |

---

### `AnalysisEntry`

Analysis entry for chat-level analysis content.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | No | Analysis content text |

---

### `AttemptData`

Attempt-level data.

cohort_id is only populated when practice=False.
is_archived is only populated when practice=True.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the attempt |
| `created_at` | `string` | No | ISO timestamp when attempt was created |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `department_id` | `string` | No | UUID of the department |
| `cohort_id` | `string` | No | UUID of the cohort (home mode only) |
| `is_archived` | `boolean` | No | Whether the attempt is archived |

---

### `AttemptEntries-Input`

Entry payloads grouped by entry type.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt` | [`GetAttemptResponse`](#getattemptresponse)[] | No | Attempt entry payloads |
| `attempt_chat` | [`ChatData-Input`](#chatdata-input)[] | No | Chat entry payloads |
| `attempt_message` | [`MessageData-Input`](#messagedata-input)[] | No | Message entry payloads |
| `runs` | [`GetRunListViewResponse-Input`](#getrunlistviewresponse-input) | No | Runs list view response |

---

### `AttemptEntries-Output`

Entry payloads grouped by entry type.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt` | [`GetAttemptResponse`](#getattemptresponse)[] | No | Attempt entry payloads |
| `attempt_chat` | [`ChatData-Output`](#chatdata-output)[] | No | Chat entry payloads |
| `attempt_message` | [`MessageData-Output`](#messagedata-output)[] | No | Message entry payloads |
| `runs` | [`GetRunListViewResponse-Output`](#getrunlistviewresponse-output) | No | Runs list view response |

---

### `AttemptGradeAnalysisEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Analysis text content |

---

### `AttemptGradeFeedbackEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `feedback` | `string` | Yes | Feedback text content |
| `total` | `integer` | No | Total score for this feedback entry |

---

### `AttemptGradeHighlightEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `strength_id` | `string` | No | UUID of the parent strength |
| `section` | `string` | Yes | Text section to highlight |
| `idx` | `integer` | No | Index position of the highlight |

---

### `AttemptGradeImprovementEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the identified improvement area |
| `description` | `string` | Yes | Description of the improvement |
| `message_id` | `string` | No | UUID of the related message |

---

### `AttemptGradeReplacementEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `improvement_id` | `string` | No | UUID of the parent improvement |
| `section` | `string` | Yes | Original text section to replace |
| `replace` | `string` | Yes | Replacement text |
| `idx` | `integer` | No | Index position of the replacement |

---

### `AttemptGradeStrengthEntry`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the identified strength |
| `description` | `string` | Yes | Description of the strength |
| `message_id` | `string` | No | UUID of the related message |

---

### `AttemptResources-Input`

Resource maps keyed by ID string.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | `object` | No | Scenario resources keyed by ID |
| `personas` | `object` | No | Persona resources keyed by ID |
| `documents` | `object` | No | Document resources keyed by ID |
| `images` | `object` | No | Image resources keyed by ID |
| `videos` | `object` | No | Video resources keyed by ID |
| `objectives` | `object` | No | Objective resources keyed by ID |
| `questions` | `object` | No | Question resources keyed by ID |
| `options` | `object` | No | Option resources keyed by ID |
| `problem_statements` | `object` | No | Problem statement resources keyed by ID |
| `rubrics` | `object` | No | Rubric resources keyed by ID |
| `standard_groups` | `object` | No | Standard group resources keyed by ID |
| `standards` | `object` | No | Standard resources keyed by ID |

---

### `AttemptResources-Output`

Resource maps keyed by ID string.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | `object` | No | Scenario resources keyed by ID |
| `personas` | `object` | No | Persona resources keyed by ID |
| `documents` | `object` | No | Document resources keyed by ID |
| `images` | `object` | No | Image resources keyed by ID |
| `videos` | `object` | No | Video resources keyed by ID |
| `objectives` | `object` | No | Objective resources keyed by ID |
| `questions` | `object` | No | Question resources keyed by ID |
| `options` | `object` | No | Option resources keyed by ID |
| `problem_statements` | `object` | No | Problem statement resources keyed by ID |
| `rubrics` | `object` | No | Rubric resources keyed by ID |
| `standard_groups` | `object` | No | Standard group resources keyed by ID |
| `standards` | `object` | No | Standard resources keyed by ID |

---

### `AvailableContinuationOptions-Input`

Available continuation options for an attempt.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ContinuationOption`](#continuationoption)[] | Yes | Available continuation option bundles |

---

### `AvailableContinuationOptions-Output`

Available continuation options for an attempt.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ContinuationOption`](#continuationoption)[] | Yes | Available continuation option bundles |

---

### `ChatData-Input`

Chat view data with IDs for related resources.

Split into view categories:
- Normal/General View: problem_statement, objectives, personas, images
- Video/Quiz View: videos, questions, options, responses
- Both Views: documents

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the chat |
| `created_at` | `string` | No | ISO timestamp when chat was created |
| `completed` | `boolean` | No | Whether the chat is completed |
| `is_current` | `boolean` | No | Whether this is the current chat |
| `position` | `integer` | No | Position index of the chat |
| `grade` | [`GradeData`](#gradedata) | No | Grade data for the chat |
| `feedbacks` | [`FeedbackEntry`](#feedbackentry)[] | No | Standard-level feedback entries |
| `analyses` | [`AnalysisEntry`](#analysisentry)[] | No | Chat-level analysis content |
| `show_problem_statement` | `boolean` | No | Whether to show the problem statement |
| `show_objectives` | `boolean` | No | Whether to show objectives |
| `copy_paste_allowed` | `boolean` | No | Whether copy-paste is allowed |
| `text_enabled` | `boolean` | No | Whether text input is enabled |
| `audio_enabled` | `boolean` | No | Whether audio input is enabled |
| `grading_state` | [`GradingStateData`](#gradingstatedata) | No | Current grading state data |
| `dynamic_rubric` | [`DynamicRubricData`](#dynamicrubricdata) | No | Dynamic rubric data |
| `scenario_id` | `string` | No | UUID of the associated scenario |
| `problem_statement_id` | `string` | No | UUID of the problem statement |
| `objective_ids` | `string`[] | No | UUIDs of associated objectives |
| `persona_ids` | `string`[] | No | UUIDs of associated personas |
| `image_ids` | `string`[] | No | UUIDs of associated images |
| `video_ids` | `string`[] | No | UUIDs of associated videos |
| `question_ids` | `string`[] | No | UUIDs of associated questions |
| `option_ids` | `string`[] | No | UUIDs of associated options |
| `responses` | [`QuizResponse`](#quizresponse)[] | No | Quiz responses for the chat |
| `document_ids` | `string`[] | No | UUIDs of associated documents |
| `rubric_id` | `string` | No | UUID of the rubric |
| `standard_group_ids` | `string`[] | No | UUIDs of standard groups |
| `standard_ids` | `string`[] | No | UUIDs of standards |

---

### `ChatData-Output`

Chat view data with IDs for related resources.

Split into view categories:
- Normal/General View: problem_statement, objectives, personas, images
- Video/Quiz View: videos, questions, options, responses
- Both Views: documents

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the chat |
| `created_at` | `string` | No | ISO timestamp when chat was created |
| `completed` | `boolean` | No | Whether the chat is completed |
| `is_current` | `boolean` | No | Whether this is the current chat |
| `position` | `integer` | No | Position index of the chat |
| `grade` | [`GradeData`](#gradedata) | No | Grade data for the chat |
| `feedbacks` | [`FeedbackEntry`](#feedbackentry)[] | No | Standard-level feedback entries |
| `analyses` | [`AnalysisEntry`](#analysisentry)[] | No | Chat-level analysis content |
| `show_problem_statement` | `boolean` | No | Whether to show the problem statement |
| `show_objectives` | `boolean` | No | Whether to show objectives |
| `copy_paste_allowed` | `boolean` | No | Whether copy-paste is allowed |
| `text_enabled` | `boolean` | No | Whether text input is enabled |
| `audio_enabled` | `boolean` | No | Whether audio input is enabled |
| `grading_state` | [`GradingStateData`](#gradingstatedata) | No | Current grading state data |
| `dynamic_rubric` | [`DynamicRubricData`](#dynamicrubricdata) | No | Dynamic rubric data |
| `scenario_id` | `string` | No | UUID of the associated scenario |
| `problem_statement_id` | `string` | No | UUID of the problem statement |
| `objective_ids` | `string`[] | No | UUIDs of associated objectives |
| `persona_ids` | `string`[] | No | UUIDs of associated personas |
| `image_ids` | `string`[] | No | UUIDs of associated images |
| `video_ids` | `string`[] | No | UUIDs of associated videos |
| `question_ids` | `string`[] | No | UUIDs of associated questions |
| `option_ids` | `string`[] | No | UUIDs of associated options |
| `responses` | [`QuizResponse`](#quizresponse)[] | No | Quiz responses for the chat |
| `document_ids` | `string`[] | No | UUIDs of associated documents |
| `rubric_id` | `string` | No | UUID of the rubric |
| `standard_group_ids` | `string`[] | No | UUIDs of standard groups |
| `standard_ids` | `string`[] | No | UUIDs of standards |

---

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

### `ContentEntry-Output`

Content entry with computed display fields.

Each content has its own display info (name/icon/color) computed from
persona metadata on the server. Client renders each content with its
own persona styling.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | No | Content text of the entry |
| `name` | `string` | No | Display name (user or persona) |
| `color` | `string` | No | Persona color for display |
| `icon` | `string` | No | Icon identifier for display |
| `created_at` | `string` | No | ISO timestamp when content was created |

---

### `ContinuationOption`

A bundle of consecutive scenarios that can be reused from previous attempts.

| Field | Type | Required | Description |
|---|---|---|---|
| `scenarios` | [`PreviousChatOption`](#previouschatoption)[] | Yes | Scenarios in this continuation bundle |
| `total_score` | `number` | Yes | Combined score across scenarios |
| `total_percentage` | `number` | No | Combined score as a percentage |
| `total_time` | `number` | Yes | Combined time across scenarios |

---

### `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

### `DocsResponse-Output`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

### `DynamicRubricData`

Dynamic rubric information for a chat.

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | No | UUID of the chat |
| `score` | `number` | No | Overall rubric score |
| `passed` | `boolean` | No | Whether the rubric was passed |
| `time_taken` | `number` | No | Time taken in seconds |
| `skill_scores` | [`SkillScore`](#skillscore)[] | No | Scores per skill |
| `skill_feedbacks` | [`SkillFeedback`](#skillfeedback)[] | No | Feedback per skill |
| `total_possible_points` | `number` | No | Maximum possible points |

---

### `FeedbackEntry`

Feedback by standard for grading state.

standard_group_id is derived from standards metadata lookup.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the feedback entry |
| `standard_id` | `string` | No | UUID of the associated standard |
| `standard_group_id` | `string` | No | UUID of the standard group |
| `total` | `number` | No | Total score for this standard |
| `feedback` | `string` | No | Feedback text for this standard |

---

### `GetAttemptResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | — |
| `simulation_id` | `string` | Yes | — |
| `profile_id` | `string` | Yes | — |
| `user_persona_id` | `string` | Yes | — |
| `personas_id` | `string` | Yes | — |
| `cohort_id` | `string` | Yes | — |
| `department_id` | `string` | Yes | — |
| `practice` | `boolean` | Yes | — |
| `attempt_created_at` | `string` | Yes | — |
| `infinite_mode` | `boolean` | Yes | — |
| `num_chats` | `integer` | Yes | — |
| `is_archived` | `boolean` | Yes | — |
| `scenario_ids` | `string`[] | Yes | — |
| `chat_entry_id` | `string` | Yes | — |
| `attempt_chat_id` | `string` | Yes | — |

---

### `GetRunListViewResponse-Input`

Response containing run list data.

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | [`RunViewItem`](#runviewitem)[] | No | Run data items |
| `total_count` | `integer` | No | Total count before pagination |

---

### `GetRunListViewResponse-Output`

Response containing run list data.

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | [`RunViewItem`](#runviewitem)[] | No | Run data items |
| `total_count` | `integer` | No | Total count before pagination |

---

### `GradeData`

Grade information for a chat (no id - not a resource).

| Field | Type | Required | Description |
|---|---|---|---|
| `score` | `number` | No | Grade score achieved |
| `passed` | `boolean` | No | Whether the grade is passing |
| `description` | `string` | No | Grade description text |
| `time_taken` | `integer` | No | Time taken in seconds |
| `total_points` | `number` | No | Total available points |
| `pass_points` | `number` | No | Points required to pass |

---

### `GradingStateData`

Grading state for a chat in Record format.

All fields are Records keyed by standard_id strings.
This is the exact format the client needs - no transformation required.

| Field | Type | Required | Description |
|---|---|---|---|
| `achieved_standards` | `object` | No | Map of standard_id to achieved status |
| `passed_standards` | `object` | No | Map of standard_id to passed status |
| `feedback_by_standard_id` | `object` | No | Map of standard_id to feedback text |

---

### `HighlightEntry`

Highlight entry within a strength.

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | No | Highlighted text section |
| `idx` | `integer` | No | Index position of the highlight |

---

### `HintEntry-Output`

Hint entry (practice mode only, message_id implied by parent).

| Field | Type | Required | Description |
|---|---|---|---|
| `hint` | `string` | No | Hint text for practice mode |
| `idx` | `integer` | No | Index position of the hint |

---

### `ListFilterOption`

Standardized option for list endpoint filter sections.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier for this filter option |
| `name` | `string` | No | Display name |
| `count` | `integer` | No | Number of matching records |
| `hex_code` | `string` | No | Hex color code for display |
| `value` | `string` | No | Internal value |
| `type` | `string` | No | Option type discriminator |

---

### `ListFilterSection`

Filter section with options and echoed request state.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ListFilterOption`](#listfilteroption)[] | No | Available filter options |
| `selected_ids` | `string`[] | No | Currently selected filter option IDs |
| `search` | `string` | No | Active search text for filtering |

---

### `MessageData-Input`

Message with contents, feedbacks, and hints.

- contents: Array of content entries with display info (name/icon/color)
- feedbacks: Unified strengths/improvements (only present after grading)
- hints: Practice mode hints (only present in practice mode)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the message |
| `chat_id` | `string` | No | UUID of the parent chat |
| `type` | `string` | No | Message type: 'query' or 'response' |
| `created_at` | `string` | No | ISO timestamp when message was created |
| `completed` | `boolean` | No | Whether the message is complete |
| `contents` | [`app__infra__attempt__types__ContentEntry`](#app-infra-attempt-types-contententry)[] | No | Content entries with display info |
| `feedbacks` | [`MessageFeedbackEntry`](#messagefeedbackentry)[] | No | Unified strength and improvement feedbacks |
| `hints` | [`app__infra__attempt__types__HintEntry`](#app-infra-attempt-types-hintentry)[] | No | Hints for practice mode |
| `parent_message_id` | `string` | No | UUID of the parent message in tree |
| `sibling_index` | `integer` | No | Index among sibling messages |
| `sibling_count` | `integer` | No | Total number of sibling messages |

---

### `MessageData-Output`

Message with contents, feedbacks, and hints.

- contents: Array of content entries with display info (name/icon/color)
- feedbacks: Unified strengths/improvements (only present after grading)
- hints: Practice mode hints (only present in practice mode)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the message |
| `chat_id` | `string` | No | UUID of the parent chat |
| `type` | `string` | No | Message type: 'query' or 'response' |
| `created_at` | `string` | No | ISO timestamp when message was created |
| `completed` | `boolean` | No | Whether the message is complete |
| `contents` | [`ContentEntry-Output`](#contententry-output)[] | No | Content entries with display info |
| `feedbacks` | [`MessageFeedbackEntry`](#messagefeedbackentry)[] | No | Unified strength and improvement feedbacks |
| `hints` | [`HintEntry-Output`](#hintentry-output)[] | No | Hints for practice mode |
| `parent_message_id` | `string` | No | UUID of the parent message in tree |
| `sibling_index` | `integer` | No | Index among sibling messages |
| `sibling_count` | `integer` | No | Total number of sibling messages |

---

### `MessageFeedbackEntry`

Unified feedback entry for messages (strength or improvement).

Combines strengths and improvements into a single type with a `type` field.
- type="strength": has highlights (sections to highlight as good)
- type="improvement": has replaces (sections to replace with suggestions)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | Unique ID: \{message_id\}-\{type\}-\{index\} |
| `name` | `string` | No | Name of the feedback item |
| `description` | `string` | No | Description of the feedback |
| `type` | `string` | No | Feedback type: 'strength' or 'improvement' |
| `highlights` | [`HighlightEntry`](#highlightentry)[] | No | Highlighted sections for strengths |
| `replaces` | [`ReplacementEntry`](#replacemententry)[] | No | Replacement suggestions for improvements |

---

### `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

### `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

### `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

### `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

### `PreviousChatOption`

A single chat_entry's best previous graded attempt_chat.

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_entry_id` | `string` | No | ID of the chat entry |
| `scenario_name` | `string` | No | Name of the scenario |
| `attempt_chat_id` | `string` | No | ID of the attempt chat |
| `score` | `number` | No | Score achieved |
| `percentage` | `number` | No | Score as a percentage |
| `time_taken` | `number` | No | Time taken in seconds |
| `position` | `integer` | No | Position in the sequence |

---

### `QuizResponse`

Quiz response entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_id` | `string` | No | UUID of the answered question |
| `option_id` | `string` | No | UUID of the selected option |
| `completed` | `boolean` | No | Whether the response is complete |
| `created_at` | `string` | No | Timestamp when response was created |

---

### `ReplacementEntry`

Replacement entry within an improvement.

| Field | Type | Required | Description |
|---|---|---|---|
| `section` | `string` | No | Original text section to replace |
| `replace` | `string` | No | Replacement text |
| `idx` | `integer` | No | Index position of the replacement |

---

### `RubricStructureData`

Rubric structure data in Record format.

All fields are Records keyed by standard_group_id or standard_id strings.
This is the exact format the client needs - no transformation required.

| Field | Type | Required | Description |
|---|---|---|---|
| `standard_groups` | `object` | No | Map of group_id to standard_id lists |
| `standard_groups_mapping` | `object` | No | Map of group_id to group metadata |
| `standards_mapping` | `object` | No | Map of standard_id to standard metadata |

---

### `RunPricingItem`

Single pricing entry for a run. Cost computed at runtime.

| Field | Type | Required | Description |
|---|---|---|---|
| `pricing_type` | `string` | No | Type of pricing (e.g. input, output, cached) |
| `count` | `integer` | No | Token count for this pricing type |
| `pricing_id` | `string` | No | UUID of the pricing configuration |

---

### `RunViewItem`

Single run from the run list.

| Field | Type | Required | Description |
|---|---|---|---|
| `run_id` | `string` | Yes | UUID of the run |
| `group_id` | `string` | No | UUID of the owning group |
| `profiles_id` | `string` | No | UUID of the profile that created the run |
| `input_tokens` | `integer` | No | Number of input tokens used |
| `output_tokens` | `integer` | No | Number of output tokens generated |
| `cached_input_tokens` | `integer` | No | Number of cached input tokens |
| `run_created_at` | `string` | No | Run creation timestamp |
| `agent_ids` | `string`[] | No | Agent UUIDs involved in the run |
| `model_ids` | `string`[] | No | Model UUIDs used in the run |
| `provider_ids` | `string`[] | No | Provider UUIDs used in the run |
| `pricing` | [`RunPricingItem`](#runpricingitem)[] | No | Pricing breakdown entries |

---

### `SearchAttemptItem`

Single attempt row in search results.

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt |
| `date` | `string` | No | ISO timestamp of the attempt |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `simulation_id` | `string` | No | UUID of the simulation |
| `simulation_name` | `string` | No | Name of the simulation |
| `department_id` | `string` | No | UUID of the department |
| `cohort_id` | `string` | No | UUID of the cohort |
| `practice` | `boolean` | No | Whether this is a practice attempt |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `num_chats` | `integer` | No | Number of chats in the attempt |
| `is_archived` | `boolean` | No | Whether the attempt is archived |
| `scenario_ids` | `string`[] | No | UUIDs of associated scenarios |

---

### `SimulationData`

Simulation metadata.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | UUID of the simulation |
| `name` | `string` | No | Name of the simulation |
| `description` | `string` | No | Description of the simulation |
| `time_limit` | `integer` | No | Time limit in seconds |
| `hints_enabled` | `boolean` | No | Whether hints are enabled |
| `objectives_enabled` | `boolean` | No | Whether objectives are enabled |
| `image_input_active` | `boolean` | No | Whether image input is active |
| `copy_paste_allowed` | `boolean` | No | Whether copy-paste is allowed |
| `practice_simulation` | `boolean` | No | Whether this is a practice simulation |
| `rubric_id` | `string` | No | UUID of the associated rubric |

---

### `SkillFeedback`

Skill feedback entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `skill_name` | `string` | No | Name of the skill |
| `feedback` | `string` | No | Feedback text for the skill |

---

### `SkillScore`

Skill score entry.

| Field | Type | Required | Description |
|---|---|---|---|
| `skill_name` | `string` | No | Name of the skill |
| `score` | `number` | No | Score for the skill |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `TimerData`

Timer information.

| Field | Type | Required | Description |
|---|---|---|---|
| `elapsed` | `integer` | No | Elapsed time in seconds |
| `limit` | `integer` | No | Time limit in seconds |
| `exceeded` | `boolean` | No | Whether the time limit was exceeded |
| `formatted` | `string` | No | Formatted time string for display |
| `negative` | `boolean` | No | Whether the timer can go negative |

---

### `app__infra__attempt__types__ContentEntry`

Content entry with computed display fields.

Each content has its own display info (name/icon/color) computed from
persona metadata on the server. Client renders each content with its
own persona styling.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | No | Content text of the entry |
| `name` | `string` | No | Display name (user or persona) |
| `color` | `string` | No | Persona color for display |
| `icon` | `string` | No | Icon identifier for display |
| `created_at` | `string` | No | ISO timestamp when content was created |

---

### `app__infra__attempt__types__HintEntry`

Hint entry (practice mode only, message_id implied by parent).

| Field | Type | Required | Description |
|---|---|---|---|
| `hint` | `string` | No | Hint text for practice mode |
| `idx` | `integer` | No | Index position of the hint |

---

### `app__routes__attempt__message__ContentEntry`

Agent-provided content entry for a message.

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | — |
| `persona_id` | `string` | No | — |

---

### `app__routes__attempt__message__HintEntry`

Agent-provided hint for a message.

| Field | Type | Required | Description |
|---|---|---|---|
| `hint` | `string` | Yes | — |
| `message_id` | `string` | No | — |

---