# `POST` `/stream/GetAuthApiResponse`

# `POST` `/stream/GetAuthApiResponse`

Schema: GetAuthApiResponse

## Request Body (`GetAuthApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `auth_exists` | `boolean` | No | Whether the auth provider exists |
| `can_edit` | `boolean` | No | Whether the actor can edit this auth |
| `disabled_reason` | `string` | No | Reason editing is disabled, if any |
| `group_id` | `string` | No | Group UUID for draft collaboration |
| `show_ai_generate` | `boolean` | No | Whether any auth resource supports AI generate |
| `basic_show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `pending_ids` | `string`[] | No | Pending resource identifiers when available |
| `names` | [`AuthNameResource`](/api-reference/stream/types#authnameresource)[] | No | Name resources |
| `descriptions` | [`AuthDescriptionResource`](/api-reference/stream/types#authdescriptionresource)[] | No | Description resources |
| `flags` | [`AuthFlagConfig`](/api-reference/stream/types#authflagconfig)[] | No | Flag configs |
| `departments` | [`AuthDepartmentResource`](/api-reference/stream/types#authdepartmentresource)[] | No | Department resources |
| `protocols` | [`AuthProtocolResource`](/api-reference/stream/types#authprotocolresource)[] | No | Protocol resources |
| `slugs` | [`AuthSlugResource`](/api-reference/stream/types#authslugresource)[] | No | Slug resources |
| `items` | [`AuthItemResource`](/api-reference/stream/types#authitemresource)[] | No | Auth item resources |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getauthapiresponse Schema Stream Getauthapiresponse Post"
}
```
