# `POST` `/stream/UpdateSettingApiResponse`

# `POST` `/stream/UpdateSettingApiResponse`

Schema: UpdateSettingApiResponse

## Request Body (`UpdateSettingApiResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `results` | [`SettingResultItem`](/api-reference/stream/types#settingresultitem)[] | Yes | Per-item update results |
| `idempotency_key` | `string` | No | Idempotency key echoed back for client correlation |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Updatesettingapiresponse Schema Stream Updatesettingapiresponse Post"
}
```
