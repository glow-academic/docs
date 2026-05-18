#!/usr/bin/env bash
# gen-ts-types.sh — Generate TypeScript types from OpenAPI specs
#
# Uses openapi-typescript to convert each API spec into typed TS interfaces.
# Same tool/approach as glow's gen-client-types.
#
# Usage: ./scripts/gen-ts-types.sh
# Requires: bun (or npx openapi-typescript)

set -euo pipefail
cd "$(dirname "$0")/.."

echo "Generating TypeScript types from OpenAPI specs..."

for spec in public/specs/glow-api.json; do
    name=$(basename "$spec" .json)
    output="generated/ts/${name}.ts"

    if [ ! -f "$spec" ]; then
        echo "  skip: $spec (not found — run 'make sync-types' first)"
        continue
    fi

    mkdir -p "$(dirname "$output")"
    echo "  ${spec} → ${output}"
    bun run openapi-typescript "$spec" -o "$output"
done

echo ""
echo "Done. Types generated in generated/ts/"
ls -lh generated/ts/*.ts 2>/dev/null
