# `glow logout`

Sign out: fire ``GET /logout`` server-side (writes a ``logouts_entry`` row so the next request mints a fresh session) and then clear the local stored token. The server-side call is best-effort — local clear always runs

## Usage

```bash
glow logout
```