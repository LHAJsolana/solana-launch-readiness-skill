# solana-launch-readiness-skill

Production-ready Solana AI Kit skill that turns coding agents into launch readiness reviewers for Solana founders.

## Problem

Solana launches often fail for avoidable reasons: brittle transaction confirmation, RPC rate limits, missing priority fee strategy, leaked secrets, weak wallet UX, no monitoring, no incident plan, incomplete documentation, and unclear founder launch communication.

This skill gives an AI coding agent a structured, practical workflow for reviewing a Solana project before mainnet launch.

## Who It Is For

- Solana founders preparing a dApp, token, game, payment app, AI agent, NFT project, DeFi product, or infra tool for launch.
- Engineers who want a pre-mainnet checklist grounded in production Solana risks.
- Reviewers helping teams find blockers before users arrive.
- Hackathon, grant, and accelerator teams preparing demos and submissions.

## What The Skill Does

- Classifies the project and launch surface area.
- Produces a 0-100 launch readiness score.
- Finds blocker, high, medium, and low severity risks.
- Reviews security triage, transaction reliability, RPC readiness, wallet UX, testing, monitoring, incident response, docs, support, and GTM materials.
- Generates reusable outputs: readiness report, technical checklist, security checklist, RPC checklist, wallet UX checklist, monitoring plan, incident response plan, founder launch pack, risk register, and post-launch review.

This is not a formal security audit, legal review, or financial recommendation.

## Folder Structure

```text
solana-launch-readiness-skill/
  README.md
  LICENSE
  install.sh
  package.json
  skill/
  agents/
  commands/
  rules/
  examples/
  tests/
```

## Installation

Clone or copy this repository, then install into a local skills directory:

```sh
./install.sh ~/.codex/skills
```

The installer does not download dependencies, require sudo, or run opaque binaries. It checks that `skill/SKILL.md` exists before copying.

## Usage Examples

Ask your coding agent:

```text
Use the solana-launch-readiness skill to audit this repo before mainnet. Launch type: consumer dApp. Target launch date: next Friday.
```

```text
Run a pre-mainnet check for this Solana token launch. Focus on mint/freeze authority, metadata, liquidity launch readiness, wallet UX, and incident response.
```

```text
Create an incident response plan for a Solana app where transactions are failing after launch.
```

```text
Prepare a founder launch pack for a Solana grant submission and public launch thread.
```

## Design Principles

- Progressive loading: `skill/SKILL.md` is compact and routes to focused files only when relevant.
- Practical outputs over vague advice.
- Solana-specific production concerns: blockhash expiry, confirmation, priority fees, compute budget, RPC resilience, wallet signing UX, program authorities, token authorities, and mainnet config separation.
- Honest confidence: anything the agent cannot verify is marked `needs manual verification`.
- Safe defaults: devnet/localnet examples, no private keys, no deceptive launch tactics, no claims of audit certification.

## How It Fits Solana AI Kit

The repository follows the Solana AI Kit skill pattern:

- `skill/SKILL.md` is the progressive entry point.
- Focused files under `skill/` handle specialized workflows.
- Optional markdown agents provide role-specific review instructions.
- Command files define repeatable workflows.
- Rules files define safety boundaries that can be imported by coding agents.
- Tests validate structure and routing.

## Use As A Submodule

You can include this repository in a larger agent or skills collection:

```sh
git submodule add https://github.com/YOUR_ORG/solana-launch-readiness-skill skills/solana-launch-readiness
```

Then point your agent runtime at `skills/solana-launch-readiness/skill/SKILL.md`.

## Safety Boundaries

- Never request, print, store, or commit private keys or seed phrases.
- Treat leaked secrets as compromised and recommend rotation.
- Default examples to devnet or localnet.
- Require human confirmation before irreversible mainnet operations.
- Avoid market manipulation, fake hype, wash trading, fake partnerships, guaranteed returns, or misleading performance claims.
- Do not claim legal, financial, or formal security-audit certainty.

## Development

Run tests:

```sh
npm test
```

Run structure lint:

```sh
npm run lint:structure
```

## License

MIT

