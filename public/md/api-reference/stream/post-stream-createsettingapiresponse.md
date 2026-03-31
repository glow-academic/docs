# `POST` `/stream/CreateSettingApiResponse`

Schema: CreateSettingApiResponse

## Request Body (`CreateSettingApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SettingResultItem`](/api-reference/stream/types#settingresultitem)[] | Yes | Per-item creation results |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Createsettingapiresponse Schema Stream Createsettingapiresponse Post"
}
```