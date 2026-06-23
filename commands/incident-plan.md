# Command: Incident Plan

Generate a Solana launch incident response plan.

## Input

- Project type.
- Launch surface.
- Known programs, mints, RPC providers, and support channels.
- Owners and escalation contacts if available.

## Workflow

1. Load `skill/SKILL.md`.
2. Load `skill/incident-response.md`.
3. Load `skill/rpc-production.md`, `skill/wallet-ux.md`, or `skill/token-launch.md` if relevant.
4. Produce plan with manual placeholders where owners or contacts are unknown.

## Output

- Severity matrix.
- Owner checklist.
- First 15 minutes checklist.
- RPC, wallet, failed transaction, and token issue playbooks as relevant.
- Communication templates.
- Postmortem template.

