# `POST` `/attempt/leaderboard/export`

Export Leaderboard

Export all leaderboard data as a clean, denormalized ZIP.

## Response (`ExportLeaderboardApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Base64-encoded file content |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export file |
| `row_count` | `integer` | Yes | Number of rows in the export |