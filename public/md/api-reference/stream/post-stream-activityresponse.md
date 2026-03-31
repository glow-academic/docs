# `POST` `/stream/ActivityResponse`

Schema: ActivityResponse

## Request Body (`ActivityResponse-Input`)

| Field | Type | Required | Description |
|---|---|---|---|
| `sessions_count` | `integer` | No | Total number of sessions |
| `active_profiles_count` | `integer` | No | Number of active profiles |
| `logins_count` | `integer` | No | Total number of logins |
| `emulations_count` | `integer` | No | Total number of emulations |
| `profile_summary` | [`ProfileSummaryItem`](/api-reference/stream/types#profilesummaryitem)[] | No | Per-profile activity summaries |
| `resources` | [`ActivityResources`](/api-reference/stream/types#activityresources) | No | Activity resource metadata |
| `analytics` | [`AnalyticsFacets-Input`](/api-reference/stream/types#analyticsfacets-input) | No | Inline analytics facets for SSR |

## Response

```
{
  "additionalProperties": {
    "type": "boolean"
  },
  "type": "object",
  "title": "Response Activityresponse Schema Stream Activityresponse Post"
}
```