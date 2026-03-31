# `POST` `/attempt/end`

End Attempt

End a single chat within an attempt.

Browser client: sends grade=True, internal AI generates full grade.
Agent: can optionally provide score, feedbacks, strengths, etc. to skip AI.

## Request Body (`EndAttemptApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `attempt_id` | `string` | Yes | UUID of the attempt to end |
| `chat_id` | `string` | Yes | UUID of the chat to end |
| `grade` | `boolean` | No | Whether to trigger grading after ending |
| `score` | `integer` | No | Pre-computed score from the agent |
| `passed` | `boolean` | No | Pre-computed pass/fail from the agent |
| `time_taken` | `integer` | No | Time taken in seconds |
| `feedbacks` | [`AttemptGradeFeedbackEntry`](/api-reference/attempt/types#attemptgradefeedbackentry)[] | No | Pre-computed feedback entries |
| `strengths` | [`AttemptGradeStrengthEntry`](/api-reference/attempt/types#attemptgradestrengthentry)[] | No | Pre-computed strength entries |
| `improvements` | [`AttemptGradeImprovementEntry`](/api-reference/attempt/types#attemptgradeimprovemententry)[] | No | Pre-computed improvement entries |
| `analyses` | [`AttemptGradeAnalysisEntry`](/api-reference/attempt/types#attemptgradeanalysisentry)[] | No | Pre-computed analysis entries |
| `highlights` | [`AttemptGradeHighlightEntry`](/api-reference/attempt/types#attemptgradehighlightentry)[] | No | Pre-computed highlight entries |
| `replacements` | [`AttemptGradeReplacementEntry`](/api-reference/attempt/types#attemptgradereplacemententry)[] | No | Pre-computed replacement entries |

## Response (`EndAttemptApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `chat_id` | `string` | Yes | ID of the ended chat |
| `is_attempt_finished` | `boolean` | No | Whether the entire attempt is finished |
| `grade_id` | `string` | No | ID of the generated grade |
| `score` | `integer` | No | Overall score |
| `passed` | `boolean` | No | Whether the attempt passed |