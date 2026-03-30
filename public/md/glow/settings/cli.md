# Settings

## Commands

### `glow settings`

```bash
glow settings <action> [--body JSON]
```

### `glow settings search`

```bash
glow settings search
```

### `glow settings get`

```bash
glow settings get --body '\{"setting_id": "..."}'
```

### `glow settings create`

```bash
glow settings create --body '\{...}'
```

### `glow settings update`

```bash
glow settings update --body '\{"setting_id": "...", ...}'
```

### `glow settings delete`

```bash
glow settings delete --body '\{"setting_id": "..."}'
```

### `glow settings list`

```bash
glow settings list
```

### `glow settings export`

```bash
glow settings export
```

### `glow settings draft`

```bash
glow settings draft --body '\{...}'
```

### `glow settings media`

```bash
glow settings <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```