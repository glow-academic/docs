# `POST` `/document/get`

# `POST` `/document/get`

Get Document

Get document information using the canonical shared document operation.

## Request Body (`GetDocumentApiRequest`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Document UUID to retrieve |
| `document_id` | `string` | No | Legacy alias for the document UUID |
| `draft_id` | `string` | No | Draft UUID to load from |
| `snapshot_key` | `string` | No | Cache snapshot key for consistent reads across related requests |
| `names` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for names section |
| `descriptions` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for descriptions section |
| `flags` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for flags section |
| `departments` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for departments section |
| `parameter_fields` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for parameter fields section |
| `parameters` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for parameters section |
| `files` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for files section |
| `images` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for images section |
| `texts` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Filter options for texts section |
| `fields` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Legacy alias for parameter_fields |
| `uploads` | [`app__infra__document__types__SectionFilter`](/api-reference/document/types#app-infra-document-types-sectionfilter) | No | Legacy alias for files |

## Response (`GetDocumentApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current user |
| `document_exists` | `boolean` | No | Whether the document exists |
| `can_edit` | `boolean` | No | Whether the current user can edit |
| `disabled_reason` | `string` | No | Reason editing is disabled |
| `group_id` | `string` | No | Associated group UUID |
| `draft_name` | `string` | No | Immutable draft label from the active draft entry, when a ``draft_id`` was supplied. ``None`` for non-draft fetches. |
| `show_ai_generate` | `boolean` | No | Whether AI generation is available |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate for basic step |
| `content_show_ai_generate` | `boolean` | No | Whether to show AI generate for content step |
| `pending_ids` | `string`[] | No | Pending resource IDs from the draft, when available |
| `names` | [`DocumentNameResource`](/api-reference/document/types#documentnameresource)[] | No | Name resources |
| `descriptions` | [`DocumentDescriptionResource`](/api-reference/document/types#documentdescriptionresource)[] | No | Description resources |
| `flags` | [`DocumentFlagResource`](/api-reference/document/types#documentflagresource)[] | No | Flag resources (one per flags_resource row, value=true/false) |
| `departments` | [`DocumentDepartmentResource`](/api-reference/document/types#documentdepartmentresource)[] | No | Department resources |
| `parameter_fields` | [`DocumentParameterFieldResource`](/api-reference/document/types#documentparameterfieldresource)[] | No | Parameter field resources |
| `parameters` | [`DocumentParameterResource`](/api-reference/document/types#documentparameterresource)[] | No | Parameter catalog resources |
| `files` | [`DocumentFileResource`](/api-reference/document/types#documentfileresource)[] | No | File resources |
| `images` | [`DocumentImageResource`](/api-reference/document/types#documentimageresource)[] | No | Image resources |
| `texts` | [`DocumentTextResource`](/api-reference/document/types#documenttextresource)[] | No | Text resources |
