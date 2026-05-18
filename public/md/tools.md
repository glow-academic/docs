# Tools

{/* DEMO_VIDEO: tools-overview | playwright */}

# Tools

Tools give agents the ability to take actions and look up information during office hour simulations. A tool might check a student's enrollment status, look up assignment deadlines, or retrieve course policies -- enabling the AI agent to respond with accurate, real-time data rather than relying solely on its training.

<DemoVideo
  topic="tools-overview"
  kind="playwright"
  caption="The tools list -- rows by name with arg count and agent usage, plus a filter to find every tool wired into a specific agent."
/>

---

## What is a Tool?

A tool in Glow is a callable function that an agent can invoke during a conversation. Each tool has:

- **A name and description** -- tells the LLM when and how to use the tool
- **Arguments** (`args`) -- the input parameters the tool accepts
- **Argument positions** (`arg_positions`) -- ordering of those parameters
- **Argument outputs** (`args_outputs`) -- the shape of data the tool returns
- **Operations** -- the underlying actions the tool performs
- **Artifacts** -- related resources the tool works with

Tools are attached to agents through the `agent_tools_junction`. When a student asks "When is the midterm?", the agent can invoke a `check_deadline` tool rather than guessing.

---

## How it Connects

```
Tool  -->  Agent (via agent_tools_junction)
 |
 +-- args, arg_positions, args_outputs
 +-- operations, artifacts
```

- **Agents** use tools through the `agent_tools_junction`. An agent can have multiple tools, and a tool can be shared across agents.
- Tools are independent of models, providers, rubrics, and evals. They connect only to agents.
- The search endpoint supports filtering by `filter_agent_ids` to find tools used by a specific agent.

---

{/* DEMO_VIDEO: tools-create | playwright */}

## Create a tool

<DemoVideo
  topic="tools-create"
  kind="playwright"
  caption="Defining a check_enrollment tool: name, description, and the initial arg shape -- the new tool_id is immediately available to wire into agents."
/>

### Via the CLI

> Calls below assume you've authenticated — see [Authentication](/authentication) for the bearer + license-key headers.

```bash
glow tools create --body '{
  "tools": [{
    "name": "check_enrollment",
    "description": "Verify whether a student is enrolled in a given course section"
  }]
}'
```

### Via the API

```bash
curl -X POST https://<your-instance>/tool/create \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "tools": [{
      "name": "lookup_course_policy",
      "description": "Look up course-specific policies such as late submission rules, attendance requirements, and grading criteria"
    }]
  }'
```

Each entry returns the new `tool_id`, a generated `draft_id`, and the initial `version`.

---

{/* DEMO_VIDEO: tools-args | playwright */}

## Defining arguments and outputs

<DemoVideo
  topic="tools-args"
  kind="playwright"
  caption="Adding two arguments to lookup_course_policy with arg_positions to lock ordering, then defining the args_outputs shape the LLM will receive."
/>

Tool arguments specify what data the tool needs to operate. For example, a `check_deadline` tool might accept a `course_id` and an `assignment_type` argument. Arguments are managed through `arg_ids` on the tool's configuration.

When you retrieve a tool with `GET`, the response includes:

- `args` -- the argument section with current and available argument resources
- `arg_positions` -- defines the ordering of arguments
- `args_outputs` -- defines the structure of data the tool returns

### Example: University Course Policy Lookup

A `lookup_course_policy` tool might be configured with:

| Argument | Type | Description |
|---|---|---|
| `course_id` | string | The course identifier (e.g., "CS101") |
| `policy_type` | string | Category of policy: "late_work", "attendance", "grading", "academic_integrity" |

The tool would return the matching policy text, which the agent uses to answer the student's question accurately.

---

{/* DEMO_VIDEO: tools-invocation | vhs */}

## Invocation surface

The tool's `operations` and `artifacts` describe what actually runs when an agent calls it. Operations bind the tool to a callable in the platform; flags control whether the tool is currently usable.

<DemoVideo
  topic="tools-invocation"
  kind="vhs"
  caption="Watching the tool fire during a live attempt -- the agent picks check_deadline, args render in the trace, and the structured response feeds back into the next turn."
/>

Tools support feature flags through `flag_ids` that control behavior such as:

- Whether the tool is active and available for agent use
- Whether the tool is creatable by certain user roles
- AI generation settings for arguments and outputs

The search endpoint includes a `creatable_filter` section for filtering tools by creatability status. Use `filter_creatable` in search requests to narrow results.

---

{/* DEMO_VIDEO: tools-draft | playwright */}

## The draft cycle

Tools support a draft workflow for staging changes before they affect running simulations. This is useful when adding new arguments to a tool or modifying its operation logic.

<DemoVideo
  topic="tools-draft"
  kind="playwright"
  caption="Editing a tool in two tabs: the second save sees the expected_version mismatch and surfaces the conflict instead of clobbering."
/>

```bash
# Create or update a tool draft
glow tools draft --body '{
  "name": "check_enrollment_v2",
  "description": "Enhanced enrollment check with section-level detail",
  "arg_ids": ["COURSE_ID_ARG_UUID", "SECTION_ARG_UUID"],
  "operation_ids": ["ENROLLMENT_LOOKUP_OP_UUID"]
}'

# List your drafts
glow tools list
```

The draft endpoint uses `PATCH` semantics with optimistic concurrency via `expected_version`. The response returns `draft_id`, `new_version`, and a `form_state` reflecting all resolved field values.

---

{/* DEMO_VIDEO: tools-search | playwright */}

## Search & filter

<DemoVideo
  topic="tools-search"
  kind="playwright"
  caption="Filtering tools by agent (which tools does this agent see?) and creatability flag, then drilling in."
/>

```bash
glow tools search --body '{"search": "policy"}'

glow tools search --body '{
  "filter_agent_ids": ["agent-uuid"],
  "filter_creatable": true,
  "page_size": 25
}'
```

---

{/* DEMO_VIDEO: tools-bulk | playwright */}

## Bulk operations

Bulk delete and update follow the canonical *all-matching* shape -- explicit IDs, or `all: true` with flat filter fields plus optional `excluded_ids` and a `patch` body. The persona surface is the prove-out; tools follow the same shape.

<DemoVideo
  topic="tools-bulk"
  kind="playwright"
  caption="Bulk-disabling every legacy lookup tool in one round-trip; excluded_ids keeps a tool that an active agent still depends on."
/>

**Delete by explicit IDs:**

```bash
glow tools delete --body '{
  "tool_ids": ["tool-1", "tool-2"]
}'
```

**Delete all matching a filter (with exclusions):**

```bash
glow tools delete --body '{
  "all": true,
  "filter_agent_ids": ["agent-deprecated-uuid"],
  "excluded_ids": ["tool-still-needed"]
}'
```

**Bulk update via `patch`:**

```bash
glow tools update --body '{
  "all": true,
  "filter_creatable": false,
  "patch": { "archived": true }
}'
```

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all tools | `glow tools search` | `POST /tool/search` |
| Get tool details | `glow tools get --body '{"tool_id": "..."}'` | `POST /tool/get` |
| Create tool | `glow tools create --body '{...}'` | `POST /tool/create` |
| Update tool | `glow tools update --body '{"tool_id": "...", ...}'` | `POST /tool/update` |
| Duplicate tool | -- | `POST /tool/duplicate` |
| Delete tool(s) | `glow tools delete --body '{"tool_id": "..."}'` | `POST /tool/delete` |
| Bulk delete (filter) | `glow tools delete --body '{"all": true, "filter_…": "…"}'` | `POST /tool/delete` |
| Export to CSV | `glow tools export` | `POST /tool/export` |
| Stage a draft | `glow tools draft --body '{...}'` | `PATCH /tool/draft` |
| List drafts | `glow tools list` | `POST /tool/drafts` |

---

## Related

- [Tools API Reference](/api-reference/tool) -- full endpoint and type documentation
- [Tools CLI Reference](/cli-reference/tool) -- all CLI commands
- [Models Guide](/model) -- models that power the agents using these tools
- [Rubrics Guide](/rubric) -- rubrics that score agent behavior alongside tool usage
