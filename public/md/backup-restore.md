# Backup & restore

{/* DEMO_VIDEO: backup-overview | manual */}

# Backup & restore

Glow's local backup story is deliberately small: every instance keeps
a directory of gzipped `pg_dump` snapshots on disk, and the canonical
restore path piggybacks on the blue/green redeploy flow so a recovery
swap looks exactly like a normal rollout.

<DemoVideo
  topic="backup-overview"
  kind="manual"
  caption="Listing the snapshots under ~/.glow/instances/<name>/backups/, then walking through a redeploy --from-backup to roll back."
/>

## What's backed up

A backup is a `pg_dump` of the postgres container's primary database,
piped through `gzip`, with the `keycloak` schema excluded:

```
pg_dump --exclude-schema=keycloak -U $POSTGRES_USER $POSTGRES_DB | gzip
```

That covers the application data — personas, scenarios, simulations,
attempts, drafts, audit rows, etc. It does **not** cover:

- The Keycloak schema (intentionally excluded; treat identity as
  provisioned, not data).
- Uploaded media that lives on disk outside Postgres.
- `.env`, `glow-deploy.yaml`, or any other config under
  `~/.glow/instances/<name>/` — those are operator-managed source.
- Remote storage. Backups are local files; nothing is pushed offsite
  by default.

If you need an off-box copy, rsync the `backups/` directory yourself.

---

{/* DEMO_VIDEO: backup-storage | manual */}

## Where backups live

<DemoVideo
  topic="backup-storage"
  kind="manual"
  caption="ls -lh ~/.glow/instances/default/backups/ — manual snapshots next to the auto pre-deploy snapshots."
/>

Every instance has its own `backups/` directory:

```
~/.glow/instances/<name>/
  glow-deploy.yaml
  .env
  docker-compose.yml
  .deploy-state.json
  backups/
    manual-<label>-<timestamp>.sql.gz       # from `glow backup create`
    backup-deploy-<timestamp>.sql.gz        # auto pre-deploy snapshots
```

File naming follows two conventions:

| Source | Filename pattern |
|--------|------------------|
| `glow backup create --label foo` | `manual-foo-<unix-seconds>.sql.gz` |
| Auto pre-deploy snapshot | `backup-deploy-<YYYYMMDDTHHMMSSZ>.sql.gz` |

The directory is preserved across `glow destroy` — only containers and
volumes are wiped. Your snapshots stay put.

---

{/* DEMO_VIDEO: backup-create | vhs */}

## Creating a backup

<DemoVideo
  topic="backup-create"
  kind="vhs"
  caption="glow backup create --label pre-migration — the dump runs inside the database container, lands on the host."
/>

```bash
glow backup create [--name <instance>] [--label <label>]
```

What it does:

1. Asserts Docker is reachable.
2. Execs `pg_dump | gzip` inside the running `database` container.
3. Writes the gzipped stream to
   `~/.glow/instances/<name>/backups/manual-<label>-<ts>.sql.gz`.

The instance must be running (the database container has to be up to
serve `pg_dump`). `--label` defaults to `manual`; slashes, spaces, and
colons in the label are normalised to `-`.

---

## Listing backups

```bash
glow backup list [--name <instance>]
# alias: glow backup ls
```

Output is sorted newest-first and prints filename, size, and full
path. Only files ending in `.sql.gz` are returned — anything else in
the directory is ignored.

---

{/* DEMO_VIDEO: backup-restore | vhs */}

## Restoring

<DemoVideo
  topic="backup-restore"
  kind="vhs"
  caption="glow redeploy --from-backup <name> — pre-deploy snapshot fires first, then the restore runs as part of the blue/green swap."
/>

The **canonical** restore path is to roll the restore in through a
redeploy:

```bash
glow redeploy --name <instance> --from-backup <filename>
```

This routes through the normal deploy pipeline, which means you still
get:

- A fresh pre-deploy snapshot of the current DB *before* the restore
  touches anything (see [Auto pre-backup](#auto-pre-backup-on-redeploy)).
- Blue/green orchestration — the new color comes up against the
  restored DB.
- Healthcheck monitoring during the grace window, with auto-rollback
  if the new color flaps.

There's also a standalone restore command for emergencies where you
just want to drop the DB and stream a dump back in without rolling a
new image:

```bash
glow backup restore --name <instance> <filename>
```

This is **destructive** — it drops + recreates `$POSTGRES_DB`,
streams the gzipped dump in via `psql`, then restarts both
`server-blue` and `server-green` so the asyncpg pools are fresh. The
CLI requires you to type `restore` to confirm (unless `--yes`).

Prefer `glow redeploy --from-backup` for anything resembling a planned
rollback. Reserve `glow backup restore` for "the DB is gone, get it
back" moments.

---

## Auto pre-backup on redeploy

Every `glow redeploy` (as opposed to a first `glow deploy`) takes a
snapshot **before** doing anything destructive. From the deploy
pipeline:

```
1. Resolve config + versions
2. Compatibility checks
3. Ensure shared docker network
4. → Pre-deploy backup (best-effort)
5. Plan blue/green swap
6. Render .env, pull images, bring up next color
…
12. Monitor grace period — rollback if it flaps.
```

The pre-deploy snapshot lands in the same `backups/` dir with the
`backup-deploy-` prefix. If `pg_dump` fails (e.g. the DB is wedged),
the deploy still continues — the failure is logged but non-fatal, on
the principle that a missing snapshot shouldn't block you from
deploying a fix.

The blue/green monitor watches the new color's healthchecks during
the configured grace window (`--grace-minutes`, default 2). If the
new color flaps, the orchestrator rolls traffic back to the previous
color automatically — at which point the pre-deploy snapshot is your
safety net for any DB changes the new color might have made on the
way down.

---

## Retention

There are two retention regimes, and both are intentionally light:

- **Manual backups (`manual-*.sql.gz`):** operator-managed. Nothing
  prunes them; delete with `glow backup delete` when you're done.
- **Auto pre-deploy snapshots (`backup-deploy-*.sql.gz`):** rolling
  window of the **7 most recent** per instance. Older ones are
  removed best-effort after each successful snapshot.

```bash
glow backup delete --name <instance> <filename>
```

No encryption, no offsite upload, no scheduling — the v1.0.0 model is
that you own the files on disk and can rsync, encrypt, or rotate them
to suit your environment.

---

## Disaster recovery flow

A pragmatic checklist when something goes sideways:

1. **Stop accepting new writes.** Take the client offline or
   firewall the API so the blast radius stops growing.
2. **Snapshot the current state**, even if it's broken — it's the
   only evidence you have of *what* went wrong:

   ```bash
   glow backup create --name <instance> --label disaster-snapshot
   ```

3. **Investigate.** Pull logs (`glow logs`), inspect the DB, decide
   whether the corruption is recoverable in place or needs a rollback.
4. **Roll back to a known-good snapshot** via redeploy so you still
   get blue/green safety:

   ```bash
   glow backup list --name <instance>
   glow redeploy --name <instance> --from-backup <known-good-filename>
   ```

5. **Verify** with `glow status` and a smoke test, then re-enable
   traffic.

---

## Related

- [`glow backup create`](/cli-reference/backup-create) — manual snapshot command
- [`glow backup list`](/cli-reference/backup-list) — list snapshots for an instance
- [`glow backup restore`](/cli-reference/backup-restore) — standalone destructive restore
- [`glow backup delete`](/cli-reference/backup-delete) — remove a snapshot file
- [`glow redeploy`](/cli-reference/redeploy) — canonical restore path via `--from-backup`
- [`glow deploy`](/cli-reference/deploy) — initial deployment (no pre-backup since the DB is fresh)
