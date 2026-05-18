# `POST` `/stream/EmulateProfileApiResponse`

# `POST` `/stream/EmulateProfileApiResponse`

Schema: EmulateProfileApiResponse

## Request Body (`EmulateProfileApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `allowed` | `boolean` | Yes | Whether emulation is allowed |
| `reason` | `string` | No | Reason if emulation is denied |
| `grant_id` | `string` | No | UUID of the emulation grant |
| `expires_at` | `string` | No | When the emulation grant expires |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Emulateprofileapiresponse Schema Stream Emulateprofileapiresponse Post"
}
```
