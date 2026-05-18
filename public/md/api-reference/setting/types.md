# Setting Types

# Setting Types

## `CallerPermissions`

Evaluated permissions for the current caller on this artifact type.

| Field | Type | Required | Description |
|---|---|---|---|
| `can_create` | `boolean` | Yes | Whether the caller can create new artifacts |
| `can_draft` | `boolean` | Yes | Whether the caller can create/update drafts |
| `can_duplicate` | `boolean` | Yes | Whether the caller can duplicate artifacts |
| `has_access` | `boolean` | No | Whether the caller can view this entity |
| `can_edit` | `boolean` | No | Whether the caller can edit this entity |
| `can_delete` | `boolean` | No | Whether the caller can delete this entity |
| `disabled_reason` | `string` | No | Human-readable reason if editing is disabled |

---

## `ColumnInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Column name |
| `type` | `string` | Yes | Column data type |
| `nullable` | `boolean` | Yes | Whether the column is nullable |

---

## `CreateSettingItem`

Single setting item for create — no setting_id.

Required fields (name): provide ID or value.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Optional preset UUID for the new setting artifact |
| `resource_id` | `string` | No | Optional preset UUID for the settings_resource snapshot |
| `name_id` | `string` | No | REQUIRED FOR CREATE (or pass `name`). UUID of an existing name resource |
| `name` | `string` | No | REQUIRED FOR CREATE (or pass `name_id`). Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active_flag_id` | `string` | No | DEPRECATED — use flag_ids. UUID of the active flag option |
| `active_flag` | `boolean` | No | DEPRECATED — use flag_ids. Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `logins_ids` | `string`[] | No | Logins resource UUIDs to assign |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `mcp_id` | `string` | No | MCP resource UUID to assign (single) |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `auth_ids` | `string`[] | No | Auth resource UUIDs to assign |
| `provider_ids` | `string`[] | No | Provider resource UUIDs to assign |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `DeleteSettingResult`

Per-item result within a bulk delete response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the deletion succeeded |
| `setting_id` | `string` | No | UUID of the deleted setting (None when soft-skipped due to not-found) |
| `message` | `string` | Yes | Result message |

---

## `DocsApiResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `list` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `detail` | [`PageMetaItem`](#pagemetaitem) | Yes | — |
| `new` | [`PageMetaItem`](#pagemetaitem) | Yes | — |

---

## `DocsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Resource or entry name |
| `type` | `string` | Yes | Resource or entry type identifier |
| `description` | `string` | Yes | Human-readable description |
| `materialized_view` | [`MvInfo`](#mvinfo) | No | Materialized view metadata |
| `tables` | [`TableInfo`](#tableinfo)[] | Yes | Related database tables |
| `operations` | [`OperationInfo`](#operationinfo)[] | Yes | Available operations |

---

## `EvalSetup`

Run-level eval scaffold — first-class on the generate response.

Audit's ``**output`` spread carries this onto
``<artifact>.generate.completed``. Null when no rubric-bearing
agent participated.

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | — |
| `invocations` | [`InvocationSlot`](#invocationslot)[] | Yes | — |

---

## `GenerateConfig`

Developer configuration — all optional with sensible defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| `operations` | `string`[] | No | — |
| `dangerous` | `boolean` | No | — |
| `params` | `object` | No | — |
| `group_id` | `string` | No | — |

---

## `GenerationsSettingListItem`

Single generation group in the setting generations response.

| Field | Type | Required | Description |
|---|---|---|---|
| `group_id` | `string` | Yes | UUID of the generation group |
| `session_id` | `string` | No | UUID of the parent session |
| `group_name` | `string` | No | Name of the generation group |
| `created_at` | `string` | No | Timestamp of the generation |

---

## `GetSettingDraftResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the draft |
| `created_at` | `string` | Yes | Creation timestamp |
| `generated` | `boolean` | Yes | Whether this was AI-generated |
| `mcp` | `boolean` | Yes | Whether MCP tooling was used |
| `active` | `boolean` | Yes | Whether this draft is active |
| `session_id` | `string` | Yes | Associated session UUID |
| `name` | `string` | No | Immutable draft label set at create time |
| `agent_ids` | `string`[] | Yes | Associated agent UUIDs |
| `auth_item_key_ids` | `string`[] | Yes | Associated auth item key UUIDs |
| `auth_ids` | `string`[] | Yes | Associated auth UUIDs |
| `color_ids` | `string`[] | Yes | Associated color UUIDs |
| `department_ids` | `string`[] | Yes | Associated department UUIDs |
| `description_ids` | `string`[] | Yes | Associated description UUIDs |
| `flag_ids` | `string`[] | Yes | Associated flag UUIDs |
| `item_ids` | `string`[] | Yes | Associated item UUIDs |
| `name_ids` | `string`[] | Yes | Associated name UUIDs |
| `provider_ids` | `string`[] | Yes | Associated provider UUIDs |
| `provider_key_ids` | `string`[] | Yes | Associated provider key UUIDs |
| `threshold_ids` | `string`[] | Yes | Associated threshold UUIDs |
| `mcp_ids` | `string`[] | No | — |
| `logins_ids` | `string`[] | No | — |
| `pending_agent_ids` | `string`[] | No | Pending agent UUIDs |
| `pending_auth_item_key_ids` | `string`[] | No | Pending auth item key UUIDs |
| `pending_auth_ids` | `string`[] | No | Pending auth UUIDs |
| `pending_color_ids` | `string`[] | No | Pending color UUIDs |
| `pending_department_ids` | `string`[] | No | Pending department UUIDs |
| `pending_description_ids` | `string`[] | No | Pending description UUIDs |
| `pending_flag_ids` | `string`[] | No | Pending flag UUIDs |
| `pending_item_ids` | `string`[] | No | Pending item UUIDs |
| `pending_name_ids` | `string`[] | No | Pending name UUIDs |
| `pending_provider_ids` | `string`[] | No | Pending provider UUIDs |
| `pending_provider_key_ids` | `string`[] | No | Pending provider key UUIDs |
| `pending_threshold_ids` | `string`[] | No | Pending threshold UUIDs |
| `pending_mcp_ids` | `string`[] | No | — |
| `pending_logins_ids` | `string`[] | No | — |

---

## `GroupCall`

Tool call referenced by a message.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `tool_name` | `string` | No | — |
| `template_name` | `string` | No | — |
| `tool` | `object` | No | — |
| `ledger_status` | `string` | No | — |
| `ledger_operation` | `string` | No | — |
| `ledger_artifact` | `string` | No | — |
| `ledger_artifact_id` | `string` | No | — |

---

## `GroupMessage`

Message within a run.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `role` | `string` | Yes | — |
| `created_at` | `string` | No | — |
| `text_ids` | `string`[] | No | — |
| `audio_ids` | `string`[] | No | — |
| `image_ids` | `string`[] | No | — |
| `video_ids` | `string`[] | No | — |
| `file_ids` | `string`[] | No | — |
| `call_ids` | `string`[] | No | — |
| `calls` | [`GroupCall`](#groupcall)[] | No | — |
| `reasoning` | `boolean` | No | True when this row is a chain-of-thought trace persisted alongside the assistant answer (rendered as a collapsed accordion). |
| `in_context` | `boolean` | No | Whether this message is included in the LLM context for the next generation. Mirrors the dedup pass that builds chat history (see in_context_reason). |
| `in_context_reason` | `string` | No | Why this message is in/out of LLM context. 'kept' = included; 'deduped_read' = older read-only call to a tool that has a fresher result later in the group; future values may include 'trimmed_top_n'. |

---

## `GroupResource`

Lightweight `\{id, name\}` for cross-referencing run-level ids
(``model_id`` / ``agent_id`` / ``profile_id``) against human-readable
names on the analytics panel. Names come from the canonical
``get_models`` / ``get_agents`` / ``get_profiles`` black boxes.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `name` | `string` | No | — |

---

## `GroupRun`

Run within a group, with its messages.

Carries token / cost / model / agent / profile attribution so the
analytics view can render per-run cost + actor info without a
parallel detail shape. ``profile_id`` is the authoring profile
(human user), ``agent_id`` is the LLM-side actor, ``model_id`` is
the model used by that agent. All optional — runs predating these
columns or with unresolved attributions surface ``None``.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | — |
| `created_at` | `string` | No | — |
| `input_tokens` | `integer` | No | — |
| `output_tokens` | `integer` | No | — |
| `cached_input_tokens` | `integer` | No | — |
| `cost` | `number` | No | — |
| `model_id` | `string` | No | — |
| `agent_id` | `string` | No | — |
| `profile_id` | `string` | No | — |
| `previous_context_start_index` | `integer` | No | Index in ``messages`` where the current run's own messages begin; earlier rows are previous-context replay. ``None`` when the run has no previous context attached. |
| `messages` | [`GroupMessage`](#groupmessage)[] | No | — |

---

## `ImportField`

Field descriptor for CSV import column mapping.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | — |
| `label` | `string` | Yes | — |
| `required` | `boolean` | No | — |
| `multi` | `boolean` | No | — |
| `type` | `string` | No | — |
| `example` | `string` | No | — |
| `description` | `string` | No | — |

---

## `InvocationSlot`

One agent's slot in a multi-agent generation pool.

Populated by ``setup_generation_test`` when an agent carries a
rubric. The client uses these IDs to drive the eval workflow:
review the candidate's output, optionally fire a grader against
its ``invocation_id``, and promote/reject by call_id via the
existing ``idempotency_key + accept`` pattern.

| Field | Type | Required | Description |
|---|---|---|---|
| `invocation_id` | `string` | Yes | — |
| `agent_id` | `string` | Yes | — |
| `rubric_id` | `string` | No | — |

---

## `ListFilterOption`

Standardized option for list endpoint filter sections.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Unique identifier for this filter option |
| `name` | `string` | No | Display name |
| `count` | `integer` | No | Number of matching records |
| `hex_code` | `string` | No | Hex color code for display |
| `value` | `string` | No | Internal value |
| `type` | `string` | No | Option type discriminator |

---

## `ListFilterSection`

Filter section with options and echoed request state.

| Field | Type | Required | Description |
|---|---|---|---|
| `options` | [`ListFilterOption`](#listfilteroption)[] | No | Available filter options |
| `selected_ids` | `string`[] | No | Currently selected filter option IDs |
| `search` | `string` | No | Active search text for filtering |

---

## `ListSettingApiKey`

Key type for list endpoint.

| Field | Type | Required | Description |
|---|---|---|---|
| `key_id` | `string` | No | Unique key identifier |
| `name` | `string` | No | Key display name |
| `key_masked` | `string` | No | Masked key value for display |
| `description` | `string` | No | Key description text |
| `active` | `boolean` | No | Whether the key is currently active |
| `department_ids` | `string`[] | No | Associated department IDs |

---

## `ListSettingApiSetting`

Setting type for list endpoint with computed permissions.

| Field | Type | Required | Description |
|---|---|---|---|
| `settings_id` | `string` | No | Unique setting identifier |
| `created_at` | `string` | No | Timestamp when setting was created |
| `active` | `boolean` | No | Whether the setting is currently active |
| `is_inactive` | `boolean` | No | Whether the setting is inactive |
| `name` | `string` | No | Setting display name |
| `description` | `string` | No | Setting description text |
| `department_ids` | `string`[] | No | Associated department IDs |
| `provider_ids` | `string`[] | No | Provider resource UUIDs assigned to this setting |
| `auth_ids` | `string`[] | No | Auth resource UUIDs assigned to this setting |
| `system_ids` | `string`[] | No | System resource UUIDs assigned to this setting |
| `can_edit` | `boolean` | No | Whether the actor can edit this setting |
| `can_delete` | `boolean` | No | Whether the actor can delete this setting |
| `can_duplicate` | `boolean` | No | Whether the actor can duplicate this setting |
| `pending_status` | `string` | No | Latest soft_calls_mv status: 'pending' / 'accepted' / 'rejected' |
| `pending_operation` | `string` | No | Operation type ('create'|'update'|'delete'|'duplicate') of the pending op |
| `pending_call_id` | `string` | No | call_id (idempotency key for ack) of the pending op |

---

## `MvInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Materialized view name |
| `definition` | `string` | Yes | SQL definition of the view |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the view |

---

## `OperationInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Operation name |
| `description` | `string` | Yes | Human-readable description of the operation |
| `params` | [`ParamInfo`](#paraminfo)[] | Yes | List of operation parameters |
| `returns` | `object` | No | Return type schema |

---

## `OperationPrompts`

Starter prompts keyed by operation name.

Each key is an operation (e.g. "create", "search", "draft", "export")
and the value is a list of starter prompts for that operation.
The client picks from the operations the caller has permission for
and rotates through them.

| Field | Type | Required | Description |
|---|---|---|---|
| `prompts` | `object` | No | Map of operation name to starter prompts |

---

## `PageMetaItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `description` | `string` | Yes | — |

---

## `ParamInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Parameter name |
| `type` | `string` | Yes | Parameter data type |
| `required` | `boolean` | Yes | Whether the parameter is required |
| `default` | `any` | No | Default value if not required |

---

## `ProducedMedia`

One asset produced by a generation run.

``resource_id`` is the canonical id the per-artifact download tools
accept (e.g. ``Scenario_Image_Download(image_id=resource_id)`` for
``modality="image"``). It maps to ``images_resource.id`` /
``videos_resource.id`` / ``audios_resource.id`` depending on the
modality.

| Field | Type | Required | Description |
|---|---|---|---|
| `modality` | `"image"` \| `"video"` \| `"audio"` | Yes | — |
| `resource_id` | `string` | Yes | — |
| `upload_id` | `string` | Yes | — |
| `mime_type` | `string` | No | — |
| `file_size` | `integer` | No | — |

---

## `ProfileSummary`

Caller identity derived from JWT — who you are on this page.

Superset of the old six-field version: now carries everything the client
needs so that ``/\{artifact\}/context`` fully replaces ``/profiles/context``
and the extra ``getLayoutContextData`` round-trip can be dropped.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Display name of the authenticated user |
| `role` | `string` | Yes | Role name (e.g. 'Super Administrator') |
| `role_level` | `integer` | Yes | Role hierarchy level (0 = highest privilege) |
| `department_ids` | `string`[] | Yes | Departments the user belongs to |
| `artifact_access` | `string`[] | Yes | Artifact types this role can access (sidebar visibility) |
| `role_permissions` | `any`[][] | Yes | Full (artifact, operation) permission tuples for granular page gating |
| `is_active` | `boolean` | Yes | Whether the user's profile is active |
| `id` | `string` | Yes | Profile UUID (SocketProvider, ProfileProvider) |
| `theme` | [`ThemeBundle`](#themebundle) | No | Resolved theme: hex primitives + derived oklch tokens + score thresholds |
| `session_id` | `string` | No | Current session UUID |
| `is_emulation` | `boolean` | No | Whether user is in emulation mode (ProfileProvider) |
| `role_resources` | [`QGetProfileContextV4RoleResource`](#qgetprofilecontextv4roleresource)[] | No | All role resources for emulation display (ProfileProvider) |
| `scoped_roles` | `string`[] | No | Roles the user can emulate (ProfileProvider) |
| `active` | `boolean` | No | Alias for is_active (ProfileProvider uses this name) |

---

## `QGetProfileContextV4RoleResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `role` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `icon_value` | `string` | No | — |
| `color_hex` | `string` | No | — |

---

## `SettingAgentCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | Agent identifier |
| `name` | `string` | No | Agent display name |
| `description` | `string` | No | Agent description |

---

## `SettingAuthCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Auth provider identifier (canonical for picker selection) |
| `auth_id` | `string` | No | Auth provider identifier (alias for id) |
| `name` | `string` | No | Auth display name |
| `description` | `string` | No | Auth description |
| `slug` | `string` | No | Auth slug |
| `protocol` | `string` | No | Auth protocol |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingAuthItemKeyDraftValue`

Draft value object for an inline-creatable (auth × item × key) triple.

Same two flows as SettingProviderKeyDraftValue: server encrypts
`key_value` and creates a fresh `keys_resource` row when supplied.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing auth_item_keys_resource id when known |
| `auth_id` | `string` | Yes | Auth provider identifier |
| `item_id` | `string` | Yes | Claim item identifier |
| `key_id` | `string` | No | Existing keys_resource id (optional when key_value provided) |
| `key_value` | `string` | No | Plaintext key/secret. Server encrypts and creates a keys_resource row. |
| `key_name` | `string` | No | Optional display name for the new keys_resource row |

---

## `SettingAuthItemKeyOption`

Server-curated (auth × item × key) catalog option for the AuthItemKeys picker.

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | No | Auth provider identifier |
| `item_id` | `string` | No | Claim item identifier |
| `key_id` | `string` | No | Key identifier |
| `auth_name` | `string` | No | Auth display name |
| `item_name` | `string` | No | Claim item display name |
| `key_name` | `string` | No | Key display name |
| `masked_key` | `string` | No | Masked key value for display |

---

## `SettingAuthItemKeyResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Auth item key identifier |
| `auth_id` | `string` | No | Auth identifier |
| `item_id` | `string` | No | Item identifier |
| `key_id` | `string` | No | Key identifier |
| `generated` | `boolean` | No | Whether the auth-item-key pair was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingAuthItemValueDraftValue`

Draft value object for an inline-creatable (auth × item × value) triple.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing auth_item_values_resource id when known |
| `auth_id` | `string` | Yes | Auth provider identifier |
| `item_id` | `string` | Yes | Claim item identifier |
| `value` | `string` | Yes | Literal claim value |

---

## `SettingAuthItemValueOption`

Server-curated (auth × item) catalog option for the AuthItemValues picker.

| Field | Type | Required | Description |
|---|---|---|---|
| `auth_id` | `string` | No | Auth provider identifier |
| `item_id` | `string` | No | Claim item identifier |
| `auth_name` | `string` | No | Auth display name |
| `item_name` | `string` | No | Claim item display name |
| `item_description` | `string` | No | Claim item description |
| `encrypted` | `boolean` | No | Whether the value must be stored encrypted |

---

## `SettingAuthItemValueResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Auth item value identifier |
| `auth_id` | `string` | No | Auth provider identifier |
| `item_id` | `string` | No | Claim item identifier |
| `value` | `string` | No | Literal claim value |
| `generated` | `boolean` | No | Whether the value was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingColorResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Color resource identifier |
| `name` | `string` | No | Color display name |
| `description` | `string` | No | Color description |
| `hex_code` | `string` | No | Hex color value |
| `type` | `string` | No | Color role — 'primary', 'secondary', 'accent', etc. |
| `generated` | `boolean` | No | Whether the color was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingDepartmentResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `department_id` | `string` | No | Department identifier |
| `name` | `string` | No | Department name |
| `description` | `string` | No | Department description |
| `generated` | `boolean` | No | Whether the department was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingDescriptionResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Description resource identifier |
| `description` | `string` | No | Setting description |
| `generated` | `boolean` | No | Whether the description was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingFieldError`

Per-field error from value resolution.

| Field | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | Yes | Name of the field that failed validation |
| `message` | `string` | Yes | Validation error message |

---

## `SettingFlagResource`

Flag option row — one per (name, type, value) entry in flags_resource.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Flag resource identifier |
| `name` | `string` | No | Flag display name |
| `type` | `string` | No | Flag type (e.g. 'setting_active', 'mcp') |
| `value` | `boolean` | No | Underlying bool value of this option |
| `description` | `string` | No | Flag description text |
| `icon_id` | `string` | No | Icon identifier for the flag |
| `icon` | `string` | No | Resolved SVG markup (hydrated from icons_resource) |
| `generated` | `boolean` | No | Whether the flag was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingIconCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `icon_id` | `string` | No | Icon identifier |
| `name` | `string` | No | Icon display name |
| `description` | `string` | No | Icon description |
| `value` | `string` | No | Icon value (SVG markup or slug) |

---

## `SettingItemCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `item_id` | `string` | No | Claim item identifier |
| `name` | `string` | No | Claim item display name (e.g. clientId) |
| `description` | `string` | No | Claim item description |
| `encrypted` | `boolean` | No | Whether the item value must be stored encrypted |
| `position` | `integer` | No | Display ordering position |

---

## `SettingKeyCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `key_id` | `string` | No | Key identifier |
| `name` | `string` | No | Key display name |
| `description` | `string` | No | Key description |
| `masked_key` | `string` | No | Masked key value for display |

---

## `SettingLoginDraftValue`

Draft value object for an inline-creatable logins_resource row.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing logins_resource id when known |
| `login_type` | `string` | Yes | 'auth' or 'profile' |
| `auth_id` | `string` | No | Auth id — required when login_type='auth' |
| `profile_id` | `string` | No | Profile id — required when login_type='profile' |
| `display_name` | `string` | No | Override label; falls back to Auth/Profile catalog name |
| `icon_id` | `string` | No | Override icon; falls back to defaults |

---

## `SettingLoginOption`

Server-curated catalog option for the Logins picker.

| Field | Type | Required | Description |
|---|---|---|---|
| `login_type` | `string` | No | 'auth' or 'profile' |
| `auth_id` | `string` | No | Auth identifier for login_type='auth' |
| `profile_id` | `string` | No | Profile identifier for login_type='profile' |
| `display_name` | `string` | No | Default button label |
| `icon_id` | `string` | No | Default icon (when Auth or Profile catalog provides one) |
| `icon` | `string` | No | Resolved SVG markup for the icon (when available) |

---

## `SettingLoginsResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `logins_id` | `string` | No | Logins resource identifier |
| `profile_id` | `string` | No | Profile for test login |
| `auth_id` | `string` | No | Auth provider for OIDC login |
| `icon_id` | `string` | No | Icon for login button |
| `icon` | `string` | No | Resolved SVG markup for the icon (hydrated from icons_resource) |
| `display_name` | `string` | No | Display text for login button |
| `login_type` | `string` | No | Login type: 'auth' or 'profile' |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingMcpDraftValue`

Draft value object for an inline-creatable mcp row.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing mcp_resource id when known |
| `agent_id` | `string` | Yes | Agent identifier |
| `name` | `string` | No | Optional display name — defaults to agent.name |
| `description` | `string` | No | Optional description |

---

## `SettingMcpOption`

Server-curated per-agent catalog option for the MCP picker.

| Field | Type | Required | Description |
|---|---|---|---|
| `agent_id` | `string` | No | Agent identifier |
| `agent_name` | `string` | No | Agent display name |
| `agent_description` | `string` | No | Agent description |

---

## `SettingMcpResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `mcp_id` | `string` | No | MCP resource identifier |
| `agent_id` | `string` | No | Agent providing MCP tools |
| `name` | `string` | No | MCP config display name |
| `description` | `string` | No | MCP config description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingNameResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Name resource identifier |
| `name` | `string` | No | Setting display name |
| `generated` | `boolean` | No | Whether the name was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingProfileCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `profile_id` | `string` | No | Profile identifier |
| `name` | `string` | No | Profile display name |
| `description` | `string` | No | Profile description |

---

## `SettingProviderCatalogResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Provider identifier (canonical for picker selection) |
| `provider_id` | `string` | No | Provider identifier (alias for id) |
| `name` | `string` | No | Provider display name |
| `description` | `string` | No | Provider description |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingProviderKeyDraftValue`

Draft value object for an inline-creatable (provider × key) pair.

Two flows:
- Create-by-value: caller supplies `key_value` (and optional `key_name`).
  Server encrypts it, creates a fresh `keys_resource` row, and links a
  `provider_keys_resource` row for (provider_id, new_key_id).
- Re-link existing: caller supplies `key_id` referencing an existing
  `keys_resource` row. Server upserts the junction.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing provider_keys_resource id when known |
| `provider_id` | `string` | Yes | Provider identifier |
| `key_id` | `string` | No | Existing keys_resource id (optional when key_value provided) |
| `key_value` | `string` | No | Plaintext API key. Server encrypts and creates a keys_resource row. |
| `key_name` | `string` | No | Optional display name for the new keys_resource row |

---

## `SettingProviderKeyOption`

Server-curated (provider × key) catalog option for the ProviderKeys picker.

| Field | Type | Required | Description |
|---|---|---|---|
| `provider_id` | `string` | No | Provider identifier |
| `key_id` | `string` | No | Key identifier |
| `provider_name` | `string` | No | Provider display name |
| `key_name` | `string` | No | Key display name |
| `masked_key` | `string` | No | Masked key value for display |

---

## `SettingProviderKeyResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Provider key identifier |
| `provider_id` | `string` | No | Provider identifier |
| `key_id` | `string` | No | Key identifier |
| `key` | `string` | No | Key value |
| `name` | `string` | No | Key display name |
| `description` | `string` | No | Key description |
| `generated` | `boolean` | No | Whether the provider-key pair was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingResultItem`

Per-item result within a bulk create/update response.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `boolean` | Yes | Whether the operation succeeded |
| `setting_id` | `string` | No | UUID of the created or updated setting |
| `message` | `string` | Yes | Result message |
| `errors` | [`SettingFieldError`](#settingfielderror)[] | No | Per-field validation errors |

---

## `SettingSystemDraftValue`

Draft value object for an inline-creatable systems_resource row.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing systems_resource id when known |
| `name` | `string` | Yes | System display name |
| `description` | `string` | No | Optional description |
| `agent_ids` | `string`[] | No | Agents that this system routes to |

---

## `SettingSystemResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `system_id` | `string` | No | System identifier |
| `name` | `string` | No | System display name |
| `description` | `string` | No | System description |
| `agent_ids` | `string`[] | No | Linked agent identifiers |
| `generated` | `boolean` | No | Whether the system was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `SettingThresholdDraftValue`

Draft value object for a per-type threshold slider.

Server resolver finds an existing thresholds_resource row matching
(type, value) or creates one if none exists, then merges the id
into request.threshold_ids (dropping any prior id of the same type
so each type keeps exactly one assignment).

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Existing thresholds_resource id when known |
| `type` | `string` | Yes | Threshold type — e.g. 'success', 'warning', 'danger' |
| `value` | `integer` | Yes | Integer threshold value (0–100) |

---

## `SettingThresholdResource`

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Threshold resource identifier |
| `type` | `string` | No | Threshold type (e.g. 'success') |
| `value` | `integer` | No | Threshold integer value |
| `generated` | `boolean` | No | Whether this was AI-generated |
| `suggested` | `boolean` | No | Whether this item is suggested |
| `selected` | `boolean` | No | Whether this item is selected |
| `pending` | `boolean` | No | Whether this item is pending acceptance |

---

## `TableInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Table name |
| `columns` | [`ColumnInfo`](#columninfo)[] | Yes | List of columns in the table |

---

## `ThemeBundle`

Full theme payload for a page bootstrap.

Riding along on every ``/\{artifact\}/context`` response via
``ProfileSummary.theme``. Layers:
  - ``primitives`` / ``dark_primitives`` — hex inputs the settings
    editor reads/writes (light + dark palettes).
  - ``tokens`` / ``dark_tokens`` — oklch tokens the client paints with.
    ``ThemeStyle`` emits two ``<style>`` blocks: one scoped to
    ``:root:not(.dark)`` (light) and one to ``:root.dark`` (dark).
  - ``thresholds`` — numeric score thresholds for analytics components.
Empty-in → empty-out per token: missing values fall through to the
matching ``globals.css`` default.

| Field | Type | Required | Description |
|---|---|---|---|
| `primitives` | [`ThemePrimitives`](#themeprimitives) | No | Hex inputs from the setting (light palette, for the theme editor) |
| `tokens` | [`ThemeTokens`](#themetokens) | No | Derived oklch tokens for light mode (SSR CSS-var injection) |
| `dark_primitives` | [`ThemePrimitives`](#themeprimitives) | No | Hex inputs from the setting (dark palette, for the theme editor) |
| `dark_tokens` | [`ThemeTokens`](#themetokens) | No | Derived oklch tokens for dark mode (SSR CSS-var injection) |
| `thresholds` | [`Thresholds`](#thresholds) | No | Score thresholds resolved from the setting |

---

## `ThemePrimitives`

40 optional fields. The 17 essentials drive the rest; the other 23
are overrides for fine-tuning when derivation isn't what you want.

Empty primitive → empty token → client falls back to globals.css.

| Field | Type | Required | Description |
|---|---|---|---|
| `background` | `string` | No | — |
| `primary` | `string` | No | — |
| `accent` | `string` | No | — |
| `card` | `string` | No | — |
| `sidebar` | `string` | No | — |
| `muted_foreground` | `string` | No | — |
| `ring` | `string` | No | — |
| `border` | `string` | No | — |
| `destructive` | `string` | No | — |
| `success` | `string` | No | — |
| `warning` | `string` | No | — |
| `info` | `string` | No | — |
| `chart1` | `string` | No | — |
| `chart2` | `string` | No | — |
| `chart3` | `string` | No | — |
| `chart4` | `string` | No | — |
| `chart5` | `string` | No | — |
| `foreground` | `string` | No | — |
| `card_foreground` | `string` | No | — |
| `popover` | `string` | No | — |
| `popover_foreground` | `string` | No | — |
| `primary_foreground` | `string` | No | — |
| `secondary` | `string` | No | — |
| `secondary_foreground` | `string` | No | — |
| `muted` | `string` | No | — |
| `accent_foreground` | `string` | No | — |
| `destructive_foreground` | `string` | No | — |
| `danger` | `string` | No | — |
| `danger_foreground` | `string` | No | — |
| `input` | `string` | No | — |
| `success_foreground` | `string` | No | — |
| `warning_foreground` | `string` | No | — |
| `info_foreground` | `string` | No | — |
| `sidebar_foreground` | `string` | No | — |
| `sidebar_primary` | `string` | No | — |
| `sidebar_primary_foreground` | `string` | No | — |
| `sidebar_accent` | `string` | No | — |
| `sidebar_accent_foreground` | `string` | No | — |
| `sidebar_border` | `string` | No | — |
| `sidebar_ring` | `string` | No | — |

---

## `ThemeTokens`

40 fully-resolved CSS variable values (snake_case 1:1 with vars).

| Field | Type | Required | Description |
|---|---|---|---|
| `background` | `string` | No | — |
| `foreground` | `string` | No | — |
| `card` | `string` | No | — |
| `card_foreground` | `string` | No | — |
| `popover` | `string` | No | — |
| `popover_foreground` | `string` | No | — |
| `primary` | `string` | No | — |
| `primary_foreground` | `string` | No | — |
| `secondary` | `string` | No | — |
| `secondary_foreground` | `string` | No | — |
| `muted` | `string` | No | — |
| `muted_foreground` | `string` | No | — |
| `accent` | `string` | No | — |
| `accent_foreground` | `string` | No | — |
| `destructive` | `string` | No | — |
| `destructive_foreground` | `string` | No | — |
| `danger` | `string` | No | — |
| `danger_foreground` | `string` | No | — |
| `border` | `string` | No | — |
| `input` | `string` | No | — |
| `ring` | `string` | No | — |
| `success` | `string` | No | — |
| `success_foreground` | `string` | No | — |
| `warning` | `string` | No | — |
| `warning_foreground` | `string` | No | — |
| `info` | `string` | No | — |
| `info_foreground` | `string` | No | — |
| `chart1` | `string` | No | — |
| `chart2` | `string` | No | — |
| `chart3` | `string` | No | — |
| `chart4` | `string` | No | — |
| `chart5` | `string` | No | — |
| `sidebar` | `string` | No | — |
| `sidebar_foreground` | `string` | No | — |
| `sidebar_primary` | `string` | No | — |
| `sidebar_primary_foreground` | `string` | No | — |
| `sidebar_accent` | `string` | No | — |
| `sidebar_accent_foreground` | `string` | No | — |
| `sidebar_border` | `string` | No | — |
| `sidebar_ring` | `string` | No | — |

---

## `Thresholds`

Numeric score thresholds resolved from the active setting.

Server pre-buckets dashboard metrics into ``success | warning | danger |
neutral`` already, so most components don't need these values. Surface
them for chart reference lines, tooltips, and any client-side bucketing.

| Field | Type | Required | Description |
|---|---|---|---|
| `success` | `integer` | Yes | Score >= this counts as success |
| `warning` | `integer` | Yes | Score >= this counts as warning |
| `danger` | `integer` | Yes | Score < success threshold but >= this counts as danger; below is neutral/no-data |

---

## `UpdateSettingItem`

Single setting item for update — setting_id required, all fields optional.

Only provided fields are updated (partial update).

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | UUID of the setting to update |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active_flag_id` | `string` | No | DEPRECATED — use flag_ids. UUID of the active flag option |
| `active_flag` | `boolean` | No | DEPRECATED — use flag_ids. Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `logins_ids` | `string`[] | No | Logins resource UUIDs to assign |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `mcp_id` | `string` | No | MCP resource UUID to assign (single) |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `auth_ids` | `string`[] | No | Auth resource UUIDs to assign |
| `provider_ids` | `string`[] | No | Provider resource UUIDs to assign |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `UpdateSettingPatch`

Shared patch for bulk-update-all-matching mode.

Inherits every field from ``UpdateSettingItem`` and just relaxes
``id`` to optional — the bulk impl stamps the resolved id onto a
clone of the patch per matched row, so any client-supplied id is
ignored. Sparse semantics: only fields the client sets are written.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | No | Ignored — bulk impl stamps the resolved setting id per matched row |
| `name_id` | `string` | No | UUID of the name resource |
| `name` | `string` | No | Name value to resolve or create |
| `description_id` | `string` | No | UUID of the description resource |
| `description` | `string` | No | Description value to resolve or create |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs — canonical; server derives semantics by flag type/value |
| `active_flag_id` | `string` | No | DEPRECATED — use flag_ids. UUID of the active flag option |
| `active_flag` | `boolean` | No | DEPRECATED — use flag_ids. Whether the setting is active |
| `department_ids` | `string`[] | No | Department UUIDs to assign |
| `departments` | `string`[] | No | Department names to resolve |
| `color_ids` | `string`[] | No | Color resource UUIDs |
| `logins_ids` | `string`[] | No | Logins resource UUIDs to assign |
| `system_ids` | `string`[] | No | System UUIDs to assign |
| `mcp_id` | `string` | No | MCP resource UUID to assign (single) |
| `threshold_ids` | `string`[] | No | Threshold UUIDs to assign |
| `provider_key_ids` | `string`[] | No | Provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Auth item value UUIDs |
| `auth_ids` | `string`[] | No | Auth resource UUIDs to assign |
| `provider_ids` | `string`[] | No | Provider resource UUIDs to assign |
| `setting_resource_ids` | `string`[] | No | Setting resource UUIDs |

---

## `app__infra__setting__types__DraftFormState`

| Field | Type | Required | Description |
|---|---|---|---|
| `name_id` | `string` | No | Resolved name resource UUID |
| `name` | `string` | No | Echoed name value when available |
| `description_id` | `string` | No | Resolved description resource UUID |
| `description` | `string` | No | Echoed description value when available |
| `flag_ids` | `string`[] | No | Selected flag option UUIDs |
| `active` | `boolean` | No | Echoed setting_active flag state |
| `mcp` | `boolean` | No | Echoed mcp flag state |
| `department_ids` | `string`[] | No | Assigned department UUIDs |
| `color_ids` | `string`[] | No | Assigned color UUIDs |
| `logins_ids` | `string`[] | No | Assigned logins resource UUIDs |
| `system_ids` | `string`[] | No | Assigned system UUIDs |
| `mcp_id` | `string` | No | Assigned MCP resource UUID |
| `threshold_ids` | `string`[] | No | Assigned threshold UUIDs |
| `provider_key_ids` | `string`[] | No | Assigned provider key UUIDs |
| `auth_item_key_ids` | `string`[] | No | Assigned auth item key UUIDs |
| `auth_item_value_ids` | `string`[] | No | Assigned auth item value UUIDs |
| `auth_ids` | `string`[] | No | Assigned auth resource UUIDs |
| `provider_ids` | `string`[] | No | Assigned provider resource UUIDs |
| `provider_keys` | [`SettingProviderKeyDraftValue`](#settingproviderkeydraftvalue)[] | No | Echoed (provider × key) value entries with resolved ids |
| `auth_item_keys` | [`SettingAuthItemKeyDraftValue`](#settingauthitemkeydraftvalue)[] | No | Echoed (auth × key) value entries with resolved ids |
| `auth_item_values` | [`SettingAuthItemValueDraftValue`](#settingauthitemvaluedraftvalue)[] | No | Echoed (auth × item × value) entries with resolved ids |
| `mcp_values` | [`SettingMcpDraftValue`](#settingmcpdraftvalue)[] | No | Echoed mcp value entries with resolved ids |
| `system_values` | [`SettingSystemDraftValue`](#settingsystemdraftvalue)[] | No | Echoed system value entries with resolved ids |
| `threshold_values` | [`SettingThresholdDraftValue`](#settingthresholddraftvalue)[] | No | Echoed per-type threshold values with resolved ids |
| `logins` | [`SettingLoginDraftValue`](#settinglogindraftvalue)[] | No | Echoed logins value entries with resolved ids |
| `pending_ids` | `string`[] | No | Pending resource identifiers |

---

## `app__infra__setting__types__SectionFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| `search` | `string` | No | Filter options by search text |
| `limit` | `integer` | No | Max options to return |
| `selected` | `boolean` | No | Only return selected items |
| `suggested` | `boolean` | No | Only return suggested items |
| `include` | `boolean` | No | Include this section in response (default true) |
| `parameter_ids` | `string`[] | No | Reserved for compatibility with shared filter parsing |

---
