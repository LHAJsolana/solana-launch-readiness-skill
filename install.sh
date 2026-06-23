#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
SKILL_ENTRY="$ROOT_DIR/skill/SKILL.md"

if [ ! -f "$SKILL_ENTRY" ]; then
  echo "Error: skill/SKILL.md was not found. Run this installer from the repository root." >&2
  exit 1
fi

if [ "${1:-}" = "" ]; then
  echo "Usage: ./install.sh <destination-skills-directory>" >&2
  echo "Example: ./install.sh \$HOME/.codex/skills" >&2
  exit 1
fi

DEST_ROOT=$1
DEST_DIR="$DEST_ROOT/solana-launch-readiness-skill"

mkdir -p "$DEST_ROOT"

if [ -e "$DEST_DIR" ]; then
  echo "Error: destination already exists: $DEST_DIR" >&2
  echo "Move it aside or choose a different destination." >&2
  exit 1
fi

mkdir -p "$DEST_DIR"

for path in README.md LICENSE package.json skill agents commands rules examples tests; do
  if [ -e "$ROOT_DIR/$path" ]; then
    cp -R "$ROOT_DIR/$path" "$DEST_DIR/"
  fi
done

echo "Installed solana-launch-readiness-skill to: $DEST_DIR"
echo "Entry point: $DEST_DIR/skill/SKILL.md"

