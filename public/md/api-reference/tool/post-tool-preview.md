# `POST` `/tool/preview`

# `POST` `/tool/preview`

Preview Tool

Render output templates against mock arg values.

## Request Body (`PreviewToolApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `args` | [`ToolPreviewArg`](/api-reference/tool/types#toolpreviewarg)[] | No | Args available as Jinja variables |
| `outputs` | [`ToolPreviewOutput`](/api-reference/tool/types#toolpreviewoutput)[] | No | Output templates to render |
| `mock` | `object` | No | Mock values keyed by arg name |

## Response (`PreviewToolApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `outputs` | [`ToolPreviewOutputResult`](/api-reference/tool/types#toolpreviewoutputresult)[] | No | Rendered output blocks |
| `type_hints` | [`ToolPreviewArgHint`](/api-reference/tool/types#toolpreviewarghint)[] | No | Per-arg usage/filter hints |
| `undeclared` | `string`[] | No | Variable names referenced by templates but not declared in args |
