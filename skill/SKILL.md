---
name: solana-launch-readiness
description: Use this skill when preparing a Solana project for mainnet launch, reviewing production readiness, auditing launch risks, creating pre-mainnet checklists, preparing token launches, improving wallet UX, designing RPC/infra resilience, setting up monitoring, planning incident response, or preparing founder/GTM launch materials.
---

# Solana Launch Readiness

Use this skill to help a coding agent review a Solana project for practical mainnet launch readiness. Keep this entry point compact: load only the focused markdown files needed for the user's task.

## When To Use

- A Solana repo needs a mainnet launch review.
- A founder wants a go/no-go checklist before launch.
- A team needs security triage, RPC resilience, wallet UX, monitoring, incident response, token launch, or GTM help.
- A project needs a structured readiness report with a score and prioritized fixes.

## When Not To Use

- The request is unrelated to Solana or launch readiness.
- The user asks for legal, financial, tax, investment, or formal audit certification.
- The task requires private keys, seed phrases, or signing authority access.
- The user asks for deceptive token tactics, fake hype, wash trading, or market manipulation.

## Progressive Routing Map

- General launch review -> `launch-audit.md`
- SPL token, memecoin, community token, or Token-2022 launch -> `token-launch.md`
- Wallet connection, signing, onboarding, and confirmation UX -> `wallet-ux.md`
- RPC, transaction landing, blockhash expiry, priority fees, and infra -> `rpc-production.md`
- Security triage and authority risk review -> `security-checklist.md`
- Monitoring, analytics, logs, alerts, and post-launch review -> `analytics-monitoring.md`
- Incident response planning or launch war room -> `incident-response.md`
- Grant, launch content, founder docs, and GTM -> `grant-and-gtm.md`
- Report formats and reusable deliverables -> `output-templates.md`

## Default Workflow

1. Clarify launch type, target network, target date, and repo path if missing.
2. Classify the project: dApp, token, NFT, DeFi, game, payment app, AI agent, infra tool, or unknown.
3. Load `launch-audit.md` for a full review, plus only the focused files matching the launch surface.
4. Inspect code, docs, config, tests, scripts, examples, and deployment assumptions.
5. Mark unverifiable items as `needs manual verification`.
6. Produce score, blockers, prioritized fixes, manual checks, and next actions.

## Safety Rules

- Never request, print, store, or commit private keys or seed phrases.
- Never ask the user to paste secrets. Use placeholders only.
- Treat leaked keys, seed phrases, or committed `.env` files as compromised and recommend rotation.
- Default examples to devnet/localnet unless the user explicitly asks about mainnet behavior.
- Warn before mainnet actions and require human confirmation for irreversible operations.
- Do not claim legal, financial, or formal security-audit certainty.
- Do not suggest deceptive launches, fake partnerships, fake TVL, guaranteed returns, wash trading, or market manipulation.

## Output Standards

- Be specific to Solana.
- Separate verified findings from assumptions.
- Use severity labels: blocker, high, medium, low, informational.
- Include exact file references when reviewing a repo.
- Provide practical fixes and owner-friendly next steps.
- Include manual verification items when the repo cannot prove readiness.
- Prefer checklists, tables, and templates over broad narrative.

