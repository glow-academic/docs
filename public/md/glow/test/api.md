# Test

## Endpoints

### `POST` `/test/get`

Get Test Artifact

Get benchmark test artifact details with tests/invocations in parallel.

**Request body** (`GetTestArtifactRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test to fetch |

**Response** (`GetTestArtifactResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test` | [`GetTestResponse`](#gettestresponse) | No | Test entry data |
| `invocations` | [`GetTestInvocationResponse`](#gettestinvocationresponse)[] | No | Test invocations |
| `status` | `string` | No | Overall test status |
| `eval_name` | `string` | No | Name of the eval |
| `eval_description` | `string` | No | Description of the eval |
| `rubric_name` | `string` | No | Name of the rubric |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `runs` | [`TestRunItem`](#testrunitem)[] | No | Run items derived from invocations |
| `status_summary` | [`TestStatusSummary`](#teststatussummary) | No | Summary of invocation statuses |
| `show_controls` | `boolean` | No | Whether to show UI controls |
| `current_invocation_id` | `string` | No | ID of the current invocation |
| `has_runs_or_groups` | `boolean` | No | Whether the test has runs or groups |
| `entries` | [`TestEntries`](#testentries) | No | Entry payloads by type |
| `resources` | [`TestResources`](#testresources) | No | Resource maps keyed by ID |

---

### `POST` `/test/join`

Test Join

Join a test invocation room for real-time updates.

**Request body** (`TestJoinRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |

**Response** (`TestJoinResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |

---

### `POST` `/test/leave`

Test Leave

Leave a test invocation room, stopping real-time updates.

**Request body** (`TestLeaveRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |

**Response** (`TestLeaveResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |

---

### `POST` `/test/archive`

Archive Test Artifacts

Archive or unarchive benchmark tests by IDs.

**Request body** (`ArchiveTestsRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_ids` | `string`[] | Yes | UUIDs of tests to archive/unarchive |
| `archived` | `boolean` | No | Whether to archive or unarchive |

**Response** (`ArchiveTestsResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `updated_count` | `integer` | No | Number of tests updated |

---

### `POST` `/test/refresh`

Test Refresh

Refresh test materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/test/export`

Export Test

Export test data as a clean, denormalized ZIP.

**Request body** (`ExportTestApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |

**Response** (`ExportTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/test/docs`

Get Test Docs Endpoint

Get composed documentation for the test analytics.

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

### `POST` `/test/start`

Start Test

Create a new test.

**Request body** (`TestStartPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `benchmark_id` | `string` | Yes | UUID of the benchmark to test against |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

**Response** (`StartTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |

---

### `POST` `/test/next`

Next Test

Find next pending run in an existing test.

**Request body** (`TestNextPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |

**Response** (`NextTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `current_run` | `integer` | Yes | — |
| `total_runs` | `integer` | Yes | — |

---

### `POST` `/test/run`

Run Test

Run one auto-regressive replay. Returns immediately; progress via socket.

**Request body** (`TestRunPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | Original run to replay |

**Response** (`RunTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |

---

### `POST` `/test/end`

End Test

End a single invocation within a test.

Browser client: sends grade=True, internal AI generates grade + feedback.
Agent: can optionally provide score, passed, feedback to skip AI.

**Request body** (`EndTestApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `test_invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `grade` | `boolean` | No | — |
| `score` | `number` | No | — |
| `passed` | `boolean` | No | — |
| `feedback` | `string` | No | — |

**Response** (`EndTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `grade_id` | `string` | No | — |
| `score` | `number` | No | — |
| `passed` | `boolean` | No | — |
| `feedback` | `string` | No | — |

---

### `POST` `/test/stop`

Stop Test

Stop current test execution.

**Request body** (`TestStopPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to stop |

**Response** (`StopTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `success` | `boolean` | Yes | — |
| `message` | `string` | No | — |

---

### `POST` `/test/search`

Search Test

Search tests — composable infra architecture.

**Request body** (`SearchTestApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `eval_ids` | `string`[] | No | — |
| `department_ids` | `string`[] | No | — |
| `is_archived` | `boolean` | No | — |
| `start_date` | `string` | No | — |
| `end_date` | `string` | No | — |
| `eval_search` | `string` | No | — |
| `department_search` | `string` | No | — |
| `page_size` | `integer` | No | — |
| `page_offset` | `integer` | No | — |

**Response** (`SearchTestApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tests` | [`SearchTestItem`](#searchtestitem)[] | No | Search result test items |
| `eval_filter` | [`ListFilterSection`](#listfiltersection) | No | Eval filter section |
| `department_filter` | [`ListFilterSection`](#listfiltersection) | No | Department filter section |
| `total_count` | `integer` | No | Total number of matching results |

---

### `POST` `/stream/GetTestArtifactRequest`

Schema: GetTestArtifactRequest

**Request body** (`GetTestArtifactRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test to fetch |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetTestArtifactResponse`

Schema: GetTestArtifactResponse

**Request body** (`GetTestArtifactResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test` | [`GetTestResponse`](#gettestresponse) | No | Test entry data |
| `invocations` | [`GetTestInvocationResponse`](#gettestinvocationresponse)[] | No | Test invocations |
| `status` | `string` | No | Overall test status |
| `eval_name` | `string` | No | Name of the eval |
| `eval_description` | `string` | No | Description of the eval |
| `rubric_name` | `string` | No | Name of the rubric |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `runs` | [`TestRunItem`](#testrunitem)[] | No | Run items derived from invocations |
| `status_summary` | [`TestStatusSummary`](#teststatussummary) | No | Summary of invocation statuses |
| `show_controls` | `boolean` | No | Whether to show UI controls |
| `current_invocation_id` | `string` | No | ID of the current invocation |
| `has_runs_or_groups` | `boolean` | No | Whether the test has runs or groups |
| `entries` | [`TestEntries`](#testentries) | No | Entry payloads by type |
| `resources` | [`TestResources`](#testresources) | No | Resource maps keyed by ID |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestAllCompleteEvent`

Schema: TestAllCompleteEvent

**Request body** (`TestAllCompleteEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `total_runs` | `integer` | Yes | Total number of completed runs |
| `success` | `boolean` | No | Whether all runs succeeded |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestEndAllPayload`

Schema: TestEndAllPayload

**Request body** (`TestEndAllPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestEndPayload`

Schema: TestEndPayload

**Request body** (`TestEndPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the completed run for grading |
| `grade` | `boolean` | No | Whether to grade this run |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestGroupPayload`

Schema: TestGroupPayload

**Request body** (`TestGroupPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `prev_run_id` | `string` | No | Previous run ID; None starts from first run |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestJoinPayload`

Schema: TestJoinPayload

**Request body** (`TestJoinPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to join |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestJoinedEvent`

Schema: TestJoinedEvent

**Request body** (`TestJoinedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `success` | `boolean` | No | Whether the join succeeded |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestLeavePayload`

Schema: TestLeavePayload

**Request body** (`TestLeavePayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to leave |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestNextPayload`

Schema: TestNextPayload

**Request body** (`TestNextPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestProgressEvent`

Schema: TestProgressEvent

**Request body** (`TestProgressEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `type` | `string` | Yes | Progress event type |
| `run_id` | `string` | No | UUID of the test run |
| `current_run` | `integer` | No | Current run index (1-based) |
| `total_runs` | `integer` | No | Total number of runs |
| `message` | `string` | No | Event message content |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestRunCompleteEvent`

Schema: TestRunCompleteEvent

**Request body** (`TestRunCompleteEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the test run |
| `original_run_resource_id` | `string` | No | Resource ID of the original run |
| `tool_calls` | `object`[] | No | Tool calls made during the run |
| `current_run` | `integer` | Yes | Current run index (1-based) |
| `total_runs` | `integer` | Yes | Total number of runs in this invocation |
| `remaining_runs` | `integer` | Yes | Number of runs still pending |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestRunDeltaEvent`

Schema: TestRunDeltaEvent

**Request body** (`TestRunDeltaEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the test run |
| `content` | `string` | Yes | Incremental text update |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestRunPayload`

Schema: TestRunPayload

**Request body** (`TestRunPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `test_invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | Original run to replay |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestRunStartEvent`

Schema: TestRunStartEvent

**Request body** (`TestRunStartEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `run_id` | `string` | Yes | UUID of the test run |
| `original_run_resource_id` | `string` | No | Resource ID of the original run |
| `current_run` | `integer` | Yes | Current run index (1-based) |
| `total_runs` | `integer` | Yes | Total number of runs in this invocation |
| `created_at` | `string` | Yes | ISO 8601 timestamp of run creation |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestStartPayload`

Schema: TestStartPayload

**Request body** (`TestStartPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `benchmark_id` | `string` | Yes | UUID of the benchmark to test against |
| `infinite_mode` | `boolean` | No | Whether to run in infinite mode |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestStartedEvent`

Schema: TestStartedEvent

**Request body** (`TestStartedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the created test |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestStopPayload`

Schema: TestStopPayload

**Request body** (`TestStopPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation to stop |

**Response:**

```
`object`
```

---

### `POST` `/stream/TestStoppedEvent`

Schema: TestStoppedEvent

**Request body** (`TestStoppedEvent`):

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | UUID of the test invocation |
| `success` | `boolean` | No | Whether the stop succeeded |
| `message` | `string` | No | Event message content |

**Response:**

```
`object`
```

---

## Types

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

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

### `GetTestFeedbackResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `feedback_id` | `string` | Yes | — |
| `grade_id` | `string` | Yes | — |
| `total` | `integer` | Yes | — |
| `feedback` | `string` | Yes | — |
| `total_points` | `integer` | Yes | — |
| `pass_points` | `integer` | Yes | — |
| `created_at` | `string` | Yes | — |

---

### `GetTestGradeResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `invocation_id` | `string` | Yes | — |
| `run_id` | `string` | Yes | — |
| `created_at` | `string` | Yes | — |
| `updated_at` | `string` | Yes | — |
| `passed` | `boolean` | Yes | — |
| `score` | `integer` | Yes | — |
| `time_taken` | `integer` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |
| `active` | `boolean` | Yes | — |
| `call_id` | `string` | Yes | — |

---

### `GetTestInvocationGroupsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `test_invocation_id` | `string` | Yes | — |
| `created_at` | `string` | Yes | — |
| `updated_at` | `string` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |
| `active` | `boolean` | Yes | — |
| `agent_ids` | `string`[] | No | — |
| `reasoning_level_ids` | `string`[] | No | — |
| `temperature_level_ids` | `string`[] | No | — |
| `voice_ids` | `string`[] | No | — |
| `prompt_ids` | `string`[] | No | — |
| `instruction_ids` | `string`[] | No | — |
| `tool_ids` | `string`[] | No | — |
| `quality_ids` | `string`[] | No | — |
| `modality_ids` | `string`[] | No | — |

---

### `GetTestInvocationResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `test_id` | `string` | Yes | — |
| `group_id` | `string` | Yes | — |
| `invocation_created_at` | `string` | Yes | — |
| `invocation_title` | `string` | Yes | — |
| `use_custom` | `boolean` | Yes | — |
| `position` | `integer` | Yes | — |
| `invocation_completed` | `boolean` | Yes | — |
| `grade_id` | `string` | Yes | — |
| `grade_score` | `number` | Yes | — |
| `grade_passed` | `boolean` | Yes | — |
| `grade_time_taken` | `number` | Yes | — |
| `rubric_id` | `string` | Yes | — |
| `agent_ids` | `string`[] | No | — |
| `quality_id` | `string` | No | — |
| `department_ids` | `string`[] | No | — |
| `run_agent_ids` | `string`[] | No | — |
| `group_agent_ids` | `string`[] | No | — |
| `voice_id` | `string` | No | — |
| `temperature_level_id` | `string` | No | — |
| `reasoning_level_id` | `string` | No | — |
| `modality_ids` | `string`[] | No | — |

---

### `GetTestInvocationRunsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `test_invocation_id` | `string` | Yes | — |
| `created_at` | `string` | Yes | — |
| `updated_at` | `string` | Yes | — |
| `generated` | `boolean` | Yes | — |
| `mcp` | `boolean` | Yes | — |
| `active` | `boolean` | Yes | — |
| `agent_ids` | `string`[] | No | — |
| `reasoning_level_ids` | `string`[] | No | — |
| `temperature_level_ids` | `string`[] | No | — |
| `voice_ids` | `string`[] | No | — |
| `prompt_ids` | `string`[] | No | — |
| `instruction_ids` | `string`[] | No | — |
| `tool_ids` | `string`[] | No | — |
| `quality_ids` | `string`[] | No | — |
| `modality_ids` | `string`[] | No | — |

---

### `GetTestResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `eval_id` | `string` | Yes | — |
| `profile_id` | `string` | Yes | — |
| `department_ids` | `string`[] | Yes | — |
| `test_name` | `string` | Yes | — |
| `test_description` | `string` | Yes | — |
| `num_invocations` | `integer` | Yes | — |
| `infinite_mode` | `boolean` | Yes | — |
| `is_dynamic` | `boolean` | Yes | — |
| `archived` | `boolean` | Yes | — |
| `test_created_at` | `string` | Yes | — |

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

### `SearchMessageResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `message_id` | `string` | Yes | UUID of the message |
| `run_id` | `string` | Yes | UUID of the parent run |
| `role` | `string` | Yes | Message role (e.g. user, assistant) |
| `message_created_at` | `string` | Yes | Message creation timestamp |
| `text_upload_ids` | `string`[] | Yes | UUIDs of text uploads |
| `audio_upload_ids` | `string`[] | Yes | UUIDs of audio uploads |
| `image_upload_ids` | `string`[] | Yes | UUIDs of image uploads |
| `video_upload_ids` | `string`[] | Yes | UUIDs of video uploads |
| `file_upload_ids` | `string`[] | Yes | UUIDs of file uploads |
| `call_upload_ids` | `string`[] | Yes | UUIDs of call uploads |

---

### `SearchTestItem`

Single test row in search results.

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test |
| `eval_id` | `string` | No | UUID of the eval |
| `eval_name` | `string` | No | Name of the eval |
| `eval_description` | `string` | No | Description of the eval |
| `department_ids` | `string`[] | No | UUIDs of associated departments |
| `test_name` | `string` | No | Name of the test |
| `test_description` | `string` | No | Description of the test |
| `num_invocations` | `integer` | No | Number of invocations |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `is_dynamic` | `boolean` | No | Whether the test is dynamic |
| `archived` | `boolean` | No | Whether the test is archived |
| `created_at` | `string` | No | ISO timestamp when test was created |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

### `TestEntries`

Entry payloads grouped by type.

| Field | Type | Required | Description |
|---|---|---|---|
| `tests` | [`GetTestResponse`](#gettestresponse)[] | No | Test entry payloads |
| `invocations` | [`GetTestInvocationResponse`](#gettestinvocationresponse)[] | No | Invocation entry payloads |
| `runs` | [`GetTestInvocationRunsResponse`](#gettestinvocationrunsresponse)[] | No | Run entry payloads |
| `groups` | [`GetTestInvocationGroupsResponse`](#gettestinvocationgroupsresponse)[] | No | Group entry payloads |
| `grades` | [`GetTestGradeResponse`](#gettestgraderesponse)[] | No | Grade entry payloads |
| `feedback` | [`GetTestFeedbackResponse`](#gettestfeedbackresponse)[] | No | Feedback entry payloads |
| `messages` | [`SearchMessageResponse`](#searchmessageresponse)[] | No | Message entry payloads |

---

### `TestResources`

Resource maps keyed by ID string.

| Field | Type | Required | Description |
|---|---|---|---|
| `evals` | `object` | No | Eval resources keyed by ID |
| `rubrics` | `object` | No | Rubric resources keyed by ID |
| `agents` | `object` | No | Agent resources keyed by ID |
| `models` | `object` | No | Model resources keyed by ID |
| `voices` | `object` | No | Voice resources keyed by ID |
| `temperature_levels` | `object` | No | Temperature level resources keyed by ID |
| `reasoning_levels` | `object` | No | Reasoning level resources keyed by ID |
| `modalities` | `object` | No | Modality resources keyed by ID |
| `prompts` | `object` | No | Prompt resources keyed by ID |
| `instructions` | `object` | No | Instruction resources keyed by ID |
| `tools` | `object` | No | Tool resources keyed by ID |
| `qualities` | `object` | No | Quality resources keyed by ID |

---

### `TestRunItem`

A single run row for the UI table, derived from a benchmark invocation.

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | ID of the chat |
| `invocation_id` | `string` | Yes | ID of the invocation |
| `run_id` | `string` | No | ID of the run |
| `group_id` | `string` | No | ID of the group |
| `suite_entry_id` | `string` | No | ID of the suite entry |
| `model_name` | `string` | No | Name of the model used |
| `agent_name` | `string` | No | Name of the agent used |
| `status` | `string` | No | Run status |
| `grade_score` | `number` | No | Grade score for the run |
| `grade_passed` | `boolean` | No | Whether the run passed grading |

---

### `TestStatusSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| `total` | `integer` | No | Total number of invocations |
| `completed` | `integer` | No | Number of completed invocations |
| `in_progress` | `integer` | No | Number of in-progress invocations |
| `not_started` | `integer` | No | Number of not-started invocations |

---