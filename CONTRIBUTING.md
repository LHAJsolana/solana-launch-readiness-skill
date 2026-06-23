# Contributing

Thanks for improving `solana-launch-readiness-skill`. Keep contributions practical, Solana-specific, safe, and progressive-loading friendly.

## Principles

- Keep `skill/SKILL.md` compact. It should route to focused files, not contain every detail.
- Put specialized workflows in focused markdown files under `skill/`.
- Prefer checklists, scoring rules, templates, and concrete review steps over generic advice.
- Do not include secrets, binaries, network installers, opaque scripts, or dependency-heavy tooling.
- Do not claim legal, financial, tax, investment, or formal security-audit certainty.
- Default examples to devnet/localnet unless explicitly documenting mainnet readiness.

## Adding Skill Files

Add focused files under `skill/` when a workflow is large enough to deserve progressive loading. A good skill file includes:

- When to use it.
- Solana-specific review criteria.
- Output expectations.
- Manual verification guidance.
- Safety boundaries.

Update `skill/SKILL.md` only with a short routing entry.

## Adding Agents

Add optional role instructions under `agents/`. Agent files should define:

- Role.
- Responsibilities.
- Which focused skill files to load.
- Required output shape.
- Safety constraints.

Agents should never override the private-key and safe-mainnet rules.

## Adding Commands

Add repeatable workflows under `commands/`. Command files should specify:

- Required inputs.
- Focused files to load.
- Step-by-step workflow.
- Expected outputs.

Keep commands deterministic enough for another agent to follow.

## Adding Rules

Add safety policies under `rules/`. Rules should be short, enforceable, and reusable. If a rule affects launch reports, update examples and tests where appropriate.

## Adding Templates

Reusable templates belong in `skill/output-templates.md` unless they are large enough to justify a separate focused file. Templates should include placeholders instead of fake facts.

## Adding References

References under `references/` are supporting material. They should not be required for every run. Keep them current-agnostic unless a source is explicitly cited and expected to change.

## Tests

Use Node.js built-in `node:test` and `assert`. Do not add heavy dependencies without a strong reason.

Run:

```sh
npm test
```

On Windows PowerShell, use:

```powershell
npm.cmd test
```

Update tests when adding required repository files, schemas, demo files, or routing guarantees.

