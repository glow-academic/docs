# `POST` `/system/pricing/export`

Export Pricing

Export all pricing data as a clean, denormalized ZIP.

## Response (`ExportPricingApiResponse`)

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Base64-encoded file content |
| `file_name` | `string` | Yes | Suggested download file name |
| `mime_type` | `string` | Yes | MIME type of the export file |
| `row_count` | `integer` | Yes | Number of rows in the export |