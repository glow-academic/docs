# Chat Types

## `ChatDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected departments |
| `resources` | `any`[] | No | Available department resources |

---

## `ChatDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected descriptions |
| `resources` | `any`[] | No | Available description resources |

---

## `ChatDocumentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected documents |
| `resources` | `any`[] | No | Available document resources |

---

## `ChatDraftFormState`

Server-authoritative form state returned after draft save.

| Field | Type | Required | Description |
|---|---|---|---|
| `name_ids` | `string`[] | No | Selected name resource IDs |
| `description_ids` | `string`[] | No | Selected description resource IDs |
| `flag_ids` | `string`[] | No | Selected flag resource IDs |
| `department_ids` | `string`[] | No | Selected department resource IDs |
| `persona_ids` | `string`[] | No | Selected persona resource IDs |
| `document_ids` | `string`[] | No | Selected document resource IDs |
| `parameter_field_ids` | `string`[] | No | Selected parameter field resource IDs |
| `parameter_ids` | `string`[] | No | Selected parameter resource IDs |
| `scenario_ids` | `string`[] | No | Selected scenario resource IDs |
| `field_ids` | `string`[] | No | Selected field resource IDs |
| `question_ids` | `string`[] | No | Selected question resource IDs |
| `option_ids` | `string`[] | No | Selected option resource IDs |
| `video_ids` | `string`[] | No | Selected video resource IDs |
| `image_ids` | `string`[] | No | Selected image resource IDs |
| `problem_statement_ids` | `string`[] | No | Selected problem statement resource IDs |
| `objective_ids` | `string`[] | No | Selected objective resource IDs |

---

## `ChatFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected fields |
| `resources` | `any`[] | No | Available field resources |

---

## `ChatFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected flags |
| `resources` | `any`[] | No | Available flag resources |

---

## `ChatImageSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected images |
| `resources` | `any`[] | No | Available image resources |

---

## `ChatNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected names |
| `resources` | `any`[] | No | Available name resources |

---

## `ChatObjectiveSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected objectives |
| `resources` | `any`[] | No | Available objective resources |

---

## `ChatOptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected options |
| `resources` | `any`[] | No | Available option resources |

---

## `ChatParameterFieldSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected parameter fields |
| `resources` | `any`[] | No | Available parameter field resources |

---

## `ChatPersonaSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected personas |
| `resources` | `any`[] | No | Available persona resources |

---

## `ChatProblemStatementSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected problem statements |
| `resources` | `any`[] | No | Available problem statement resources |

---

## `ChatQuestionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected questions |
| `resources` | `any`[] | No | Available question resources |

---

## `ChatScenarioSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected scenarios |
| `resources` | `any`[] | No | Available scenario resources |

---

## `ChatVideoSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether to show this section |
| `required` | `boolean` | No | Whether this section is required |
| `suggestions` | `string`[] | No | Suggested resource IDs |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate option |
| `current` | `any`[] | No | Currently selected videos |
| `resources` | `any`[] | No | Available video resources |

---

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

## `DocsResponse-Output`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

## `GetChatDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `version` | `integer` | Yes | Draft version number |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `group_id` | `string` | Yes | Generation group UUID |
| `session_id` | `string` | Yes | Associated session UUID |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `document_ids` | `string`[] | Yes | Associated document UUIDs |
| `field_ids` | `string`[] | Yes | Associated field UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `image_ids` | `string`[] | Yes | Associated image UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `objective_ids` | `string`[] | Yes | Associated objective UUIDs |
| `option_ids` | `string`[] | Yes | Associated option UUIDs |
| `parameter_field_ids` | `string`[] | Yes | Associated parameter field UUIDs |
| `parameter_ids` | `string`[] | Yes | Associated parameter UUIDs |
| `persona_ids` | `string`[] | Yes | Associated persona UUIDs |
| `problem_statement_ids` | `string`[] | Yes | Associated problem statement UUIDs |
| `profile_ids` | `string`[] | Yes | Associated profile UUIDs |
| `question_ids` | `string`[] | Yes | Associated question UUIDs |
| `scenario_ids` | `string`[] | Yes | Associated scenario UUIDs |
| `video_ids` | `string`[] | Yes | Associated video UUIDs |

---

## `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

## `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

## `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

## `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

## `app__infra__chat__types__DraftImageValue`

Value for creating an image via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the image |
| `description` | `string` | Yes | Description of the image |
| `upload_id` | `string` | No | UUID of the uploaded file |

---

## `app__infra__chat__types__DraftOptionValue`

Value for creating an option via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `option_text` | `string` | Yes | Display text for the option |
| `question_id` | `string` | No | UUID of the parent question |

---

## `app__infra__chat__types__DraftQuestionValue`

Value for creating a question via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `question_text` | `string` | Yes | Text of the question |
| `time` | `integer` | No | Video timestamp in seconds |
| `allow_multiple` | `boolean` | No | Whether multiple answers are allowed |

---

## `app__infra__chat__types__DraftVideoValue`

Value for creating a video via the draft endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the video |
| `description` | `string` | Yes | Description of the video |
| `upload_id` | `string` | No | UUID of the uploaded file |

---