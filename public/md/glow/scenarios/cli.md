# Scenarios

## Commands

### `glow scenarios`

```bash
glow scenarios <action> [--body JSON]
```

### `glow scenarios search`

```bash
glow scenarios search
```

### `glow scenarios get`

```bash
glow scenarios get --body '\{"scenario_id": "..."}'
```

### `glow scenarios create`

```bash
glow scenarios create --body '\{...}'
```

### `glow scenarios update`

```bash
glow scenarios update --body '\{"scenario_id": "...", ...}'
```

### `glow scenarios delete`

```bash
glow scenarios delete --body '\{"scenario_id": "..."}'
```

### `glow scenarios list`

```bash
glow scenarios list
```

### `glow scenarios export`

```bash
glow scenarios export
```

### `glow scenarios draft`

```bash
glow scenarios draft --body '\{...}'
```

### `glow scenarios media`

```bash
glow scenarios <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```