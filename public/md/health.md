# Health

{/* DEMO_VIDEO: health-overview — replace public/demos/health-overview.mp4 */}

# Health

<DemoVideo
  topic="health-overview"
  caption="Opening the Health page — service tiles glowing green/red across the last 24 hours, with hourly buckets for uptime and latency."
/>

The Health resource provides service health monitoring and system metrics for your Glow instance. Use it to track uptime, latency, CPU, memory, and error rates over time. Health is an API-only resource with no CLI commands.

![Health page showing system status indicators for database, AI providers, and services](/screenshots/health/status.png)

## What is Health?

Health aggregates hourly service check results and system metrics into time-series views. It answers questions like: Is the instance healthy? What was the uptime last week? Are latency or error rates trending up? Administrators use health data to monitor their university's Glow deployment and diagnose performance issues before they affect users.

The health response includes two materialized views:

- **`service_hourly`** -- per-hour uptime, check counts, latency, and error status for each monitored service.
- **`metrics_hourly`** -- per-hour CPU, memory, request counts, and error totals.

## Quick Start

### API

**Fetch health data** for the last 7 days:

```bash
curl -X POST https://<your-instance>/system/health \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "date_from": "2026-03-21",
    "date_to": "2026-03-28",
    "page_limit": 100,
    "page_offset": 0
  }'
```

**Filter by service:**

```bash
curl -X POST https://<your-instance>/system/health \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "service": "glow-api",
    "date_from": "2026-03-21",
    "date_to": "2026-03-28"
  }'
```

{/* DEMO_VIDEO: health-status-indicators — replace public/demos/health-status-indicators.mp4 */}

## Understanding the Response

<DemoVideo
  topic="health-status-indicators"
  caption="Hovering an hourly cell to surface check_count / ok_count / fail_count, uptime_percent, and the latest_error string for a degraded service."
/>


### Service Hourly View

Each `service_hourly` entry contains:

| Field | Description |
|---|---|
| `date_hour` | Hour bucket (e.g., `"2026-03-28T14:00:00Z"`) |
| `service` | Service name (e.g., `"glow-api"`) |
| `check_count` | Total health checks in this hour |
| `ok_count` | Successful checks |
| `fail_count` | Failed checks |
| `uptime_percent` | Uptime as a percentage (0--100) |
| `avg_latency_ms` | Average response latency in milliseconds |
| `min_latency_ms` | Minimum latency observed |
| `max_latency_ms` | Maximum latency observed |
| `latest_ok` | Whether the most recent check passed |
| `latest_error` | Error message from the most recent failure (empty if healthy) |

### Metrics Hourly View

Each `metrics_hourly` entry contains:

| Field | Description |
|---|---|
| `date_hour` | Hour bucket |
| `sample_count` | Number of metric samples collected |
| `avg_cpu_percent` / `min` / `max` | CPU utilization |
| `avg_latency_ms` / `min` / `max` | Request latency |
| `avg_memory_bytes` / `min` / `max` | Memory usage |
| `max_requests_total` | Peak total request count |
| `max_errors_total` | Peak total error count |

{/* DEMO_VIDEO: health-refresh — replace public/demos/health-refresh.mp4 */}

## Refreshing and Exporting

<DemoVideo
  topic="health-refresh"
  caption="Hitting `POST /system/refresh` to rebuild the hourly materialized views, then re-fetching health to see the freshest buckets land."
/>


**Refresh materialized views** to ensure health data is current:

```bash
curl -X POST https://<your-instance>/system/refresh \
  -H "Authorization: Bearer <token>"
```

Returns `success`, `refreshed_views`, and `invalidated_tags`.

**Export health data** as a denormalized ZIP for offline analysis:

```bash
curl -X POST https://<your-instance>/system/export \
  -H "Authorization: Bearer <token>"
```

Returns `content` (base64-encoded), `file_name`, `mime_type`, and `row_count`.

## Common Operations

| Operation | Method | Endpoint |
|---|---|---|
| Get health data | `POST` | `POST /system/health` |
| Refresh views | `POST` | `POST /system/refresh` |
| Export data (ZIP) | `POST` | `POST /system/export` |
| Get documentation | `POST` | `/health/docs` |

## Related

- [Health API](/api-reference/system)
- [Info Guide](/info) -- quick server status check
