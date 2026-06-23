# Launch Audit Framework

Use this file for full Solana launch readiness reviews.

## Repo Classification

Classify the repo before scoring:

| Type | Signals |
| --- | --- |
| dApp | Wallet adapter, frontend transaction flows, program/client calls |
| Token | SPL Token, Token-2022, metadata, mint authority, liquidity, claims |
| NFT | Metaplex metadata, candy machine, collection verification, mint UI |
| DeFi | Swaps, lending, vaults, pricing, pools, oracles, liquidation paths |
| Game | Sessions, assets, inventory, in-game economy, mobile UX |
| Payment app | Transfers, checkout, settlement, receipts, refunds |
| AI agent | Autonomous signing boundaries, tools, wallet permissions, task logs |
| Infra tool | RPC/indexer/service assumptions, API keys, uptime, rate limits |
| Unknown | Insufficient evidence; mark assumptions clearly |

## Launch Surface Area

Record which areas are in scope:

- On-chain programs and upgrade authority.
- Frontend wallet connection and transaction signing.
- Backend services, workers, indexers, webhooks, queues, and APIs.
- RPC providers and fallback behavior.
- Token minting, metadata, liquidity, claims, airdrops, treasury, and vesting.
- Monitoring, logs, analytics, alerts, support, docs, and incident response.

## Mainnet Readiness Checklist

| Area | Checks |
| --- | --- |
| Security | secret scanning, signer checks, authority controls, dependency risk, admin paths |
| Transaction reliability | simulation, blockhash refresh, confirmation, retries, priority fees, compute budget |
| Infra/RPC | provider limits, fallback RPC, websocket/polling plan, indexers, mainnet config separation |
| Wallet UX | clear signing intent, confirmation states, mobile handling, recovery UX, accessible errors |
| Testing | unit, integration, localnet/devnet, negative paths, replay of launch-critical flows |
| Monitoring | transaction success, RPC errors, program logs, alert thresholds, support feedback |
| Docs/support/GTM | README, runbooks, support FAQ, launch claims, risk disclosures, onboarding |

## Readiness Score Formula

Score each category with evidence. Do not give full credit for unverified claims.

| Category | Points |
| --- | ---: |
| Security | 25 |
| Transaction reliability | 20 |
| Infra/RPC | 15 |
| Wallet UX | 10 |
| Testing | 10 |
| Monitoring/analytics | 10 |
| Docs/support/GTM | 10 |
| Total | 100 |

Suggested interpretation:

- 90-100: launch-ready with minor follow-ups.
- 75-89: likely launchable after high-priority fixes.
- 60-74: meaningful risk; delay unless scope is limited and mitigations are accepted.
- Below 60: not ready for mainnet.
- Any blocker: no-go until resolved or explicitly accepted by accountable humans.

## Blocker Criteria

Mark as `blocker` when you find:

- Private keys, seed phrases, or production secrets committed or printed.
- Mainnet code path uses devnet/localnet assumptions without clear separation.
- No credible transaction confirmation or failure handling for user funds.
- Upgrade, mint, freeze, metadata, admin, or treasury authority is unclear or unsafe.
- Token launch has unverifiable supply, authority, metadata, liquidity, or claim mechanics.
- No way to detect or respond to launch-critical failures.
- Docs or UI misrepresent user risk, custody, returns, partnerships, or guarantees.

## Severity Definitions

| Severity | Meaning |
| --- | --- |
| Blocker | Should prevent launch until fixed or formally accepted |
| High | Likely to cause user harm, failed launch, fund risk, or severe confusion |
| Medium | Important reliability, UX, support, or operational gap |
| Low | Improvement that reduces friction or future maintenance burden |
| Informational | Context, assumption, or manual verification item |

## Manual Verification Handling

Use `needs manual verification` when:

- The repo does not include deployment configuration.
- Production RPC provider details are outside the repo.
- Authority ownership, multisig, vesting, liquidity, or treasury setup is off-chain.
- Monitoring dashboards or alerts live in external services.
- A launch claim requires ecosystem, partnership, legal, or financial confirmation.

## Required Outputs

- Project classification and launch surface.
- Readiness score with category breakdown.
- Blockers and high-priority risks first.
- Manual verification list.
- Technical checklist.
- Security checklist.
- RPC/infra checklist.
- Wallet UX checklist.
- Monitoring plan.
- Incident response gaps.
- Founder/GTM recommendations when relevant.
- Next 7-day action plan.

## Example Report Structure

```markdown
# Solana Launch Readiness Report

## Summary
- Project type:
- Target network:
- Target launch date:
- Overall score:
- Go/no-go:

## Score Breakdown
| Category | Score | Evidence | Gaps |

## Blockers
| Finding | Evidence | Impact | Recommended fix |

## High Priority
| Finding | Evidence | Impact | Recommended fix |

## Manual Verification
| Item | Why it matters | Owner |

## Next 7 Days
| Day | Action | Owner | Done when |
```

