# `POST` `/tools/get`

Get Tool

Get tool information using the canonical shared tool operation.

## Request Body (`GetToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `tool_id` | `string` | No | Tool unique identifier |
| `draft_id` | `string` | No | Draft unique identifier |

## Response (`GetToolApiResponse-Output`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `tool_exists` | `boolean` | No | Whether the tool exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Group identifier for the tool |
| `basic_show_ai_generate` | `boolean` | No | Show AI generate for basic step |
| `args_show_ai_generate` | `boolean` | No | Show AI generate for args step |
| `arg_positions_show_ai_generate` | `boolean` | No | Show AI generate for arg positions step |
| `args_outputs_show_ai_generate` | `boolean` | No | Show AI generate for args outputs step |
| `names` | [`ToolNameSection`](/api-reference/tools/types#toolnamesection) | No | Name section with resources |
| `descriptions` | [`ToolDescriptionSection`](/api-reference/tools/types#tooldescriptionsection) | No | Description section with resources |
| `flags` | [`ToolFlagSection`](/api-reference/tools/types#toolflagsection) | No | Flag section with configs |
| `args` | [`ToolArgSection`](/api-reference/tools/types#toolargsection) | No | Argument section with resources |
| `arg_positions` | [`ToolArgPositionSection`](/api-reference/tools/types#toolargpositionsection) | No | Argument position section |
| `args_outputs` | [`ToolArgOutputSection`](/api-reference/tools/types#toolargoutputsection) | No | Argument output section |
| `artifacts` | [`ToolArtifactSection`](/api-reference/tools/types#toolartifactsection) | No | Artifact section with resources |
| `operations` | [`ToolOperationSection`](/api-reference/tools/types#tooloperationsection) | No | Operation section with resources |