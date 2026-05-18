# `glow mcp call`

Call an MCP tool by name with a JSON arguments object. → POST /mcp/ with JSON-RPC ``tools/call``

## Usage

```bash
glow mcp call tool_name <tool_name> [--args]
```

## Options

| Flag | Required | Description |
|---|---|---|
| `tool_name` | Yes | Tool name (as it appears in ``list-tools`` output) |
| `--args` | No | JSON arguments object (defaults to ``\{\}``) |