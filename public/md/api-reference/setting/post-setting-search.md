# `POST` `/setting/search`

Search Setting

Search settings — composable infra architecture.

## Request Body (`SearchSettingApiRequest`)

```
{
  "properties": {},
  "type": "object",
  "title": "SearchSettingApiRequest",
  "description": "Request model for setting search endpoint."
}
```

## Response (`ListSettingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the acting user |
| `user_role` | `string` | No | Role of the acting user |
| `settings` | [`ListSettingApiSetting`](/api-reference/setting/types#listsettingapisetting)[] | No | List of setting items |
| `keys` | [`ListSettingApiKey`](/api-reference/setting/types#listsettingapikey)[] | No | List of key items |