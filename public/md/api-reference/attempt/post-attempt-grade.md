# `POST` `/attempt/grade`

Attempt Grade

Trigger grading for an attempt chat.

Browser client: sends chat_id only, internal AI generates full grade.
Agent: can optionally provide score, feedbacks, strengths, etc. to skip AI.

## Request Body (`GradeAttemptRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt to grade |
| `chat_id` | `string` | No | UUID of the chat to grade |
| `resource_types` | `string`[] | No | Resource types to include in grading |
| `user_instructions` | `string`[] | No | Custom grading instructions |
| `score` | `integer` | No | Overall score for the attempt |
| `passed` | `boolean` | No | Whether the attempt passed |
| `time_taken` | `integer` | No | Time taken in seconds |
| `feedbacks` | [`AttemptGradeFeedbackEntry`](/api-reference/attempt/types#attemptgradefeedbackentry)[] | No | Feedback entries from the grader |
| `strengths` | [`AttemptGradeStrengthEntry`](/api-reference/attempt/types#attemptgradestrengthentry)[] | No | Strength entries from the grader |
| `improvements` | [`AttemptGradeImprovementEntry`](/api-reference/attempt/types#attemptgradeimprovemententry)[] | No | Improvement entries from the grader |
| `analyses` | [`AttemptGradeAnalysisEntry`](/api-reference/attempt/types#attemptgradeanalysisentry)[] | No | Analysis entries from the grader |
| `highlights` | [`AttemptGradeHighlightEntry`](/api-reference/attempt/types#attemptgradehighlightentry)[] | No | Highlight entries for strengths |
| `replacements` | [`AttemptGradeReplacementEntry`](/api-reference/attempt/types#attemptgradereplacemententry)[] | No | Replacement entries for improvements |

## Response (`GradeAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | — |
| `grade_id` | `string` | No | — |
| `score` | `integer` | No | — |
| `passed` | `boolean` | No | — |