# `POST` `/scenario/video_upload`

Upload Video

Upload a video for later use in scenarios.

## Parameters

| Name | In | Required | Description |
|---|---|---|---|
| `name` | query | No | — |
| `description` | query | No | — |

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`VideoUploadScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `video_id` | `string` | Yes | UUID of the created videos_resource |
| `upload_id` | `string` | Yes | UUID of the uploads_entry (file on disk) |