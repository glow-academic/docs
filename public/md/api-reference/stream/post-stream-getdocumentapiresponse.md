# `POST` `/stream/GetDocumentApiResponse`

Schema: GetDocumentApiResponse

## Request Body (`GetDocumentApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `document_exists` | `boolean` | No | Whether the document exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group UUID |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `names` | [`DocumentNameSection`](/api-reference/stream/types#documentnamesection) | No | Name section with resource and options |
| `descriptions` | [`DocumentDescriptionSection`](/api-reference/stream/types#documentdescriptionsection) | No | Description section with resource and options |
| `flags` | [`DocumentFlagSection`](/api-reference/stream/types#documentflagsection) | No | Flag section with selections and options |
| `departments` | [`DocumentDepartmentSection`](/api-reference/stream/types#documentdepartmentsection) | No | Department section with selections and options |
| `fields` | [`DocumentFieldSection`](/api-reference/stream/types#documentfieldsection) | No | Parameter field section |
| `parameters` | [`DocumentParameterSection`](/api-reference/stream/types#documentparametersection) | No | Parameter section with selections and options |
| `uploads` | [`DocumentUploadSection`](/api-reference/stream/types#documentuploadsection) | No | Upload section with selections and options |
| `images` | [`DocumentImageSection`](/api-reference/stream/types#documentimagesection) | No | Image section with selections and options |
| `texts` | [`DocumentTextSection`](/api-reference/stream/types#documenttextsection) | No | Text section with selections and options |

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