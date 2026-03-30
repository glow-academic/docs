# Invocation

## Endpoints

### `POST` `/stream/GetSuiteRequest`

Schema: GetSuiteRequest

**Request body** (`GetSuiteRequest`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | Test identifier |
| `draft_id` | `string` | No | Optional draft identifier |
| `descriptions_search` | `string` | No | Search string for descriptions |

**Response:**

```
`object`
```

---

### `POST` `/stream/GetSuiteResponse`

Schema: GetSuiteResponse

**Request body** (`GetSuiteResponse`):

| Field | Type | Required | Description |
|---|---|---|---|
| `test_id` | `string` | Yes | Test identifier |
| `profile_has_access` | `boolean` | No | Whether profile has access |
| `draft_version` | `integer` | No | Current draft version number |
| `group_id` | `string` | No | Associated group ID |
| `names` | [`SuiteNameSection`](#suitenamesection) | No | Name section data |
| `descriptions` | [`SuiteDescriptionSection`](#suitedescriptionsection) | No | Description section data |
| `values` | [`SuiteValueSection`](#suitevaluesection) | No | Value section data |
| `flags` | [`SuiteFlagSection`](#suiteflagsection) | No | Flag section data |
| `departments` | [`SuiteDepartmentSection`](#suitedepartmentsection) | No | Department section data |
| `keys` | [`SuiteKeySection`](#suitekeysection) | No | Key section data |
| `endpoints` | [`SuiteEndpointSection`](#suiteendpointsection) | No | Endpoint section data |
| `modalities` | [`SuiteModalitySection`](#suitemodalitysection) | No | Modality section data |
| `temperature_levels` | [`SuiteTemperatureLevelSection`](#suitetemperaturelevelsection) | No | Temperature level section data |
| `pricing` | [`SuitePricingSection`](#suitepricingsection) | No | Pricing section data |
| `reasoning_levels` | [`SuiteReasoningLevelSection`](#suitereasoninglevelsection) | No | Reasoning level section data |
| `qualities` | [`SuiteQualitySection`](#suitequalitysection) | No | Quality section data |
| `voices` | [`SuiteVoiceSection`](#suitevoicesection) | No | Voice section data |

**Response:**

```
`object`
```

---

## Types

### `SuiteDepartmentSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected department items |
| `resources` | `any`[] | No | Available department resources |

---

### `SuiteDescriptionSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected description items |
| `resources` | `any`[] | No | Available description resources |

---

### `SuiteEndpointSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected endpoint items |
| `resources` | `any`[] | No | Available endpoint resources |

---

### `SuiteFlagSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected flag items |
| `resources` | `any`[] | No | Available flag resources |

---

### `SuiteKeySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected key items |
| `resources` | `any`[] | No | Available key resources |

---

### `SuiteModalitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected modality items |
| `resources` | `any`[] | No | Available modality resources |

---

### `SuiteNameSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected name items |
| `resources` | `any`[] | No | Available name resources |

---

### `SuitePricingSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected pricing items |
| `resources` | `any`[] | No | Available pricing resources |

---

### `SuiteQualitySection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected quality items |
| `resources` | `any`[] | No | Available quality resources |

---

### `SuiteReasoningLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected reasoning levels |
| `resources` | `any`[] | No | Available reasoning level resources |

---

### `SuiteTemperatureLevelSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected temperature levels |
| `resources` | `any`[] | No | Available temperature level resources |

---

### `SuiteValueSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected value items |
| `resources` | `any`[] | No | Available value resources |

---

### `SuiteVoiceSection`

| Field | Type | Required | Description |
|---|---|---|---|
| `show` | `boolean` | No | Whether section is visible |
| `required` | `boolean` | No | Whether section is required |
| `show_ai_generate` | `boolean` | No | Whether to show AI generate button |
| `current` | `any`[] | No | Currently selected voice items |
| `resources` | `any`[] | No | Available voice resources |

---