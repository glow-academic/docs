# Session

## Endpoints

### `POST` `/session/get`

Get Session

Get session detail with groups and timeline.

**Request body** (`GetSessionDetailRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `session_id` | `string` | Yes | UUID of the session to fetch |

**Response** (`GetSessionDetailResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `session_exists` | `boolean` | No | Whether the session exists |
| `session_id` | `string` | No | UUID of the session |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `session_created_at` | `string` | No | Timestamp when session was created |
| `active` | `boolean` | No | Whether the session is active |
| `groups` | [`ArtifactSessionGroup-Output`](#artifactsessiongroup-output)[] | No | Groups in the session |
| `timeline` | [`SessionTimelineItem`](#sessiontimelineitem)[] | No | Timeline events for the session |

---

### `POST` `/session/refresh`

Session Refresh

Refresh session materialized views and invalidate caches.

**Response** (`RefreshResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | — |
| `refreshed_views` | `string`[] | Yes | — |
| `invalidated_tags` | `string`[] | Yes | — |

---

### `POST` `/session/docs`

Get Session Docs Endpoint

Get composed documentation for the session analytics.

**Request body** (`DocsApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `entity_id` | `string` | No | — |

**Response** (`ComposedDocsResponse-Output`):

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Artifact name |
| `type` | `string` | Yes | Artifact type identifier |
| `description` | `string` | Yes | Human-readable description |
| `artifact` | [`DocsResponse-Output`](#docsresponse-output) | No | Artifact tool documentation |
| `entries` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Entry documentation list |
| `resources` | [`DocsResponse-Output`](#docsresponse-output)[] | Yes | Resource documentation list |
| `permissions` | [`OperationInfo`](#operationinfo)[] | Yes | Permission function documentation |
| `api_operations` | [`OperationInfo`](#operationinfo)[] | Yes | API operation documentation |
| `page_metadata` | [`DocsApiResponse`](#docsapiresponse) | No | Page-level metadata from docs API |

---

### `POST` `/session/export`

Export Session

Export session data as a clean, denormalized ZIP.

**Request body** (`ExportSessionApiRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `target_session_id` | `string` | Yes | — |

**Response** (`ExportSessionApiResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `content` | `string` | Yes | Exported file content |
| `file_name` | `string` | Yes | Name of the exported file |
| `mime_type` | `string` | Yes | MIME type of the exported file |
| `row_count` | `integer` | Yes | Number of rows in the export |

---

### `POST` `/stream/ConnectionConfirmedPayload`

Schema: ConnectionConfirmedPayload

**Request body** (`ConnectionConfirmedPayload`):

| Field | Type | Required | Description |
|---|---|---|---|
| `sid` | `string` | Yes | Socket session identifier |
| `profile_id` | `string` | Yes | UUID of the user profile |
| `guest_id` | `string` | Yes | UUID of the guest user |
| `server_time` | `number` | Yes | Server timestamp in epoch seconds |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetSessionDetailRequest`

Schema: GetSessionDetailRequest

**Request body** (`GetSessionDetailRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `session_id` | `string` | Yes | UUID of the session to fetch |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetSessionDetailResponse`

Schema: GetSessionDetailResponse

**Request body** (`GetSessionDetailResponse-Input`):

| Field | Type | Required | Description |
|---|---|---|---|
| `actor_name` | `string` | No | Display name of the current actor |
| `session_exists` | `boolean` | No | Whether the session exists |
| `session_id` | `string` | No | UUID of the session |
| `profile_id` | `string` | No | UUID of the user profile |
| `profile_name` | `string` | No | Display name of the user profile |
| `session_created_at` | `string` | No | Timestamp when session was created |
| `active` | `boolean` | No | Whether the session is active |
| `groups` | [`ArtifactSessionGroup-Input`](#artifactsessiongroup-input)[] | No | Groups in the session |
| `timeline` | [`SessionTimelineItem`](#sessiontimelineitem)[] | No | Timeline events for the session |

**Response:**

```
`object`
```

---

## Types

### `ArtifactSessionGroup-Input`

Single group entry for a session.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group |
| `group_name` | `string` | No | Name of the group |
| `first_run_at` | `string` | No | Timestamp of the first run |
| `last_run_at` | `string` | No | Timestamp of the last run |
| `run_count` | `integer` | No | Number of runs in the group |
| `total_tokens` | `integer` | No | Total tokens used in the group |
| `total_cost` | `number` \| `string` | No | Total cost of the group |

---

### `ArtifactSessionGroup-Output`

Single group entry for a session.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the group |
| `group_name` | `string` | No | Name of the group |
| `first_run_at` | `string` | No | Timestamp of the first run |
| `last_run_at` | `string` | No | Timestamp of the last run |
| `run_count` | `integer` | No | Number of runs in the group |
| `total_tokens` | `integer` | No | Total tokens used in the group |
| `total_cost` | `string` | No | Total cost of the group |

---

### `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

### `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

### `DocsResponse-Output`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

### `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

### `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

### `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

### `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

### `SessionTimelineItem`

Single event in the unified session timeline.

| Field | Type | Required | Description |
|---|---|---|---|
| `event_type` | `string` | No | Type of the timeline event |
| `entity_id` | `string` | No | UUID of the related entity |
| `entity_name` | `string` | No | Name of the related entity |
| `created_at` | `string` | No | Timestamp when the event occurred |
| `extra_1` | `string` | No | Additional context field 1 |
| `extra_2` | `string` | No | Additional context field 2 |

---

### `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---