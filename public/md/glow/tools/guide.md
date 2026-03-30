# Tools Guide

Tools give agents the ability to take actions and look up information during office hour simulations. A tool might check a student's enrollment status, look up assignment deadlines, or retrieve course policies -- enabling the AI agent to respond with accurate, real-time data rather than relying solely on its training.

![Tools list showing available tools with name, description, and assigned agent count](/screenshots/tools/list.png)

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

## Quick Start

### CLI

List all available tools:

```bash
glow tools search
```

Get details for a specific tool:

```bash
glow tools get --body '{"tool_id": "TOOL_UUID"}'
```

Create a new tool:

```bash
glow tools create --body '{
  "tools": [{
    "name": "check_enrollment",
    "description": "Verify whether a student is enrolled in a given course section"
  }]
}'
```

### API

All endpoints use `POST` and require `X-Api-Key` and `Authorization: Bearer` headers.

**Search tools:**

```bash
curl -X POST https://<your-instance>/v5/tools/search \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Create a tool:**

```bash
curl -X POST https://<your-instance>/v5/tools/create \
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

![Tool detail showing function signature, parameters, and linked agents](/screenshots/tools/detail.png)

## Tool Arguments and Outputs

### Defining Arguments

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

## Feature Flags

Tools support feature flags through `flag_ids` that control behavior such as:

- Whether the tool is active and available for agent use
- Whether the tool is creatable by certain user roles
- AI generation settings for arguments and outputs

The search endpoint includes a `creatable_filter` section for filtering tools by creatability status. Use `filter_creatable` in search requests to narrow results.

---

## Drafts

Tools support a draft workflow for staging changes before they affect running simulations. This is useful when adding new arguments to a tool or modifying its operation logic.

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

## Common Operations

| Task | CLI | API Endpoint |
|---|---|---|
| List all tools | `glow tools search` | `POST /tools/search` |
| Get tool details | `glow tools get --body '{"tool_id": "..."}'` | `POST /tools/get` |
| Create tool | `glow tools create --body '{...}'` | `POST /tools/create` |
| Update tool | `glow tools update --body '{"tool_id": "...", ...}'` | `POST /tools/update` |
| Duplicate tool | -- | `POST /tools/duplicate` |
| Delete tool(s) | `glow tools delete --body '{"tool_id": "..."}'` | `POST /tools/delete` |
| Export to CSV | `glow tools export` | `POST /tools/export` |
| Stage a draft | `glow tools draft --body '{...}'` | `PATCH /tools/draft` |
| List drafts | `glow tools list` | `POST /tools/drafts` |

---

## Related

- [Tools API Reference](/glow/tools/api) -- full endpoint and type documentation
- [Tools CLI Reference](/glow/tools/cli) -- all CLI commands
- [Models Guide](/glow/models/guide) -- models that power the agents using these tools
- [Rubrics Guide](/glow/rubrics/guide) -- rubrics that score agent behavior alongside tool usage