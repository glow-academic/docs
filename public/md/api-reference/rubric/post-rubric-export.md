# `POST` `/rubric/export`

# `POST` `/rubric/export`

Export Rubrics

Export a rubric as a PDF (optionally filled with grade data).

## Request Body (`ExportRubricApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `rubric_id` | `string` | Yes | Rubric UUID to export |
| `chat_id` | `string` | No | Optional attempt chat UUID. When provided, the PDF highlights achieved/passed standards and renders per-standard feedback resolved from the chat's latest grade. Without it, an empty rubric template is returned. |
