# Activity

## Commands

### `glow activity`

```bash
glow activity <action> [--body JSON]
```

### `glow activity search`

```bash
glow activity search
```

### `glow activity get`

```bash
glow activity get --body '\{"activity_id": "..."}'
```

### `glow activity create`

```bash
glow activity create --body '\{...}'
```

### `glow activity update`

```bash
glow activity update --body '\{"activity_id": "...", ...}'
```

### `glow activity delete`

```bash
glow activity delete --body '\{"activity_id": "..."}'
```

### `glow activity list`

```bash
glow activity list
```

### `glow activity export`

```bash
glow activity export
```

### `glow activity draft`

```bash
glow activity draft --body '\{...}'
```

### `glow activity media`

```bash
glow activity <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```