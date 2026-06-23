# Command: Launch Readiness

Run this workflow for a full Solana mainnet readiness review.

## Input

- Repo path.
- Launch type.
- Target launch date.
- Mainnet/devnet status.
- Known program IDs, token mints, RPC providers, and deployment notes if available.

## Workflow

1. Load `skill/SKILL.md`.
2. Load `skill/launch-audit.md`.
3. Load focused files based on launch surface.
4. Inspect repo code, docs, tests, scripts, env examples, CI, and deployment notes.
5. Score the project using the 100-point formula.
6. Mark unverifiable external setup as `needs manual verification`.

## Output

- Full readiness report.
- Score breakdown.
- Blockers and high-priority findings.
- Manual verification list.
- Technical, security, RPC, wallet UX, monitoring, and GTM checklists.
- Next 7-day action plan.

