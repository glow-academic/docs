# `POST` `/stream/ProfileContextApiResponse`

# `POST` `/stream/ProfileContextApiResponse`

Schema: ProfileContextApiResponse

## Request Body (`ProfileContextApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Profile UUID |
| `name` | `string` | No | Profile display name |
| `role` | `string` | No | User role (e.g. admin, user, viewer) |
| `active` | `boolean` | No | Whether the profile is active |
| `role_artifacts` | `string`[] | No | Artifact types accessible by role |
| `scoped_roles` | `string`[] | No | Roles scoped to the user |
| `department_ids` | `string`[] | No | Associated department IDs |
| `primary_department_id` | `string` | No | Primary department ID |
| `settings_id` | `string` | No | Active settings UUID |
| `theme` | [`ThemePrimitives`](/api-reference/stream/types#themeprimitives) | No | Theme color primitives from settings |
| `session_id` | `string` | No | Current session UUID |
| `is_emulation` | `boolean` | No | Whether user is in emulation mode |
| `emulation_depth` | `integer` | No | Number of emulation layers deep |
| `role_resources` | [`QGetProfileContextV4RoleResource`](/api-reference/stream/types#qgetprofilecontextv4roleresource)[] | No | All role resources for display |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Profilecontextapiresponse Schema Stream Profilecontextapiresponse Post"
}
```
