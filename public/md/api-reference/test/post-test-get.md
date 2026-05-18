# `POST` `/test/get`

# `POST` `/test/get`

Get Test Artifact

Get benchmark test artifact details with tests/invocations in parallel.

## Request Body (`GetTestArtifactRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | UUID of the test to fetch |

## Response (`GetTestArtifactResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `test` | [`GetTestResponse`](/api-reference/test/types#gettestresponse) | No | Test entry data |
| `invocations` | [`GetTestInvocationResponse`](/api-reference/test/types#gettestinvocationresponse)[] | No | Test invocations |
| `status` | `string` | No | Overall test status |
| `eval_name` | `string` | No | Name of the eval |
| `eval_description` | `string` | No | Description of the eval |
| `rubric_name` | `string` | No | Name of the rubric |
| `infinite_mode` | `boolean` | No | Whether infinite mode is enabled |
| `runs` | [`TestRunItem`](/api-reference/test/types#testrunitem)[] | No | Run items derived from invocations |
| `status_summary` | [`TestStatusSummary`](/api-reference/test/types#teststatussummary) | No | Summary of invocation statuses |
| `show_controls` | `boolean` | No | Whether to show UI controls |
| `current_invocation_id` | `string` | No | ID of the current invocation |
| `has_runs_or_groups` | `boolean` | No | Whether the test has runs or groups |
| `entries` | [`TestEntries`](/api-reference/test/types#testentries) | No | Entry payloads by type |
| `resources` | [`TestResources`](/api-reference/test/types#testresources) | No | Resource maps keyed by ID |
