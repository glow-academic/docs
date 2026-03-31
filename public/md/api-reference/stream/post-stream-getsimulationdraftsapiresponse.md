# `POST` `/stream/GetSimulationDraftsApiResponse`

Schema: GetSimulationDraftsApiResponse

## Request Body (`GetSimulationDraftsApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `entries` | [`GetSimulationDraftResponse`](/api-reference/stream/types#getsimulationdraftresponse)[] | No | List of simulation draft entries |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Getsimulationdraftsapiresponse Schema Stream Getsimulationdraftsapiresponse Post"
}
```