# `POST` `/stream/GetDocumentApiResponse`

Schema: GetDocumentApiResponse

## Request Body (`GetDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `document_exists` | `boolean` | No | Whether the document exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `pending_ids` | `string`[] | No | Pending resource IDs from the draft, when available |
| `names` | [`DocumentNameResource`](/api-reference/stream/types#documentnameresource)[] | No | Name resources |
| `descriptions` | [`DocumentDescriptionResource`](/api-reference/stream/types#documentdescriptionresource)[] | No | Description resources |
| `flags` | [`DocumentFlagConfig`](/api-reference/stream/types#documentflagconfig)[] | No | Flag configs |
| `departments` | [`DocumentDepartmentResource`](/api-reference/stream/types#documentdepartmentresource)[] | No | Department resources |
| `parameter_fields` | [`DocumentParameterFieldResource`](/api-reference/stream/types#documentparameterfieldresource)[] | No | Parameter field resources |
| `parameters` | [`DocumentParameterResource`](/api-reference/stream/types#documentparameterresource)[] | No | Parameter catalog resources |
| `files` | [`DocumentFileResource`](/api-reference/stream/types#documentfileresource)[] | No | File resources |
| `images` | [`DocumentImageResource`](/api-reference/stream/types#documentimageresource)[] | No | Image resources |
| `texts` | [`DocumentTextResource`](/api-reference/stream/types#documenttextresource)[] | No | Text resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getdocumentapiresponse Schema Stream Getdocumentapiresponse Post"
}
```