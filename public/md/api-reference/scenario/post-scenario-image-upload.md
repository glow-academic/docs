# `POST` `/scenario/image_upload`

Upload Image

Upload an image for later use in scenarios.

## Parameters

| Name | In | Required | Description |
|---|---|---|---|
| `name` | query | No | — |
| `description` | query | No | — |

## Request Body

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | `string` | Yes | — |

## Response (`ImageUploadScenarioApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `image_id` | `string` | Yes | UUID of the created images_resource |
| `upload_id` | `string` | Yes | UUID of the uploads_entry (file on disk) |