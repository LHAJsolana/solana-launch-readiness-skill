# Command: Pre-Mainnet Check

Run this workflow shortly before mainnet launch.

## Input

- Repo path.
- Launch type.
- Mainnet status.
- Launch window.

## Workflow

1. Load `skill/SKILL.md`.
2. Load `skill/launch-audit.md`.
3. Load only the focused files that match the launch surface.
4. Check blockers first.
5. Confirm manual checks that cannot be proven from the repo.

## Output

- Blocker list.
- Required manual checks.
- Go/no-go recommendation.
- Final owner checklist.

