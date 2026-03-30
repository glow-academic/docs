# Providers

## Commands

### `glow providers`

```bash
glow providers <action> [--body JSON]
```

### `glow providers search`

```bash
glow providers search
```

### `glow providers get`

```bash
glow providers get --body '\{"provider_id": "..."}'
```

### `glow providers create`

```bash
glow providers create --body '\{...}'
```

### `glow providers update`

```bash
glow providers update --body '\{"provider_id": "...", ...}'
```

### `glow providers delete`

```bash
glow providers delete --body '\{"provider_id": "..."}'
```

### `glow providers list`

```bash
glow providers list
```

### `glow providers export`

```bash
glow providers export
```

### `glow providers draft`

```bash
glow providers draft --body '\{...}'
```

### `glow providers media`

```bash
glow providers <file|image|text|audio|video> <upload|download|create|chunk|status|finalize|discover|preview> [flags]
```