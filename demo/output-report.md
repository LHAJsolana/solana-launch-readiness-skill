# Demo Output Report

## Summary

- Project: HelioGarden
- Project type: dApp + SPL rewards token
- Target network: mainnet
- Target launch date: 2026-07-15
- Overall score: 71/100
- Verdict: CONDITIONAL GO

The project has enough launch structure for a limited launch if the team fixes transaction retry behavior, confirms token authority controls, and activates monitoring before public promotion. It should not run a broad public token campaign until the manual verification items are complete.

## Score Breakdown

| Category | Max | Score | Evidence | Gaps |
| --- | ---: | ---: | --- | --- |
| Security | 25 | 17 | No committed `.env`; authority docs drafted | Mint and metadata authority ownership needs manual verification |
| Transaction reliability | 20 | 12 | Confirmation helper exists | No explicit blockhash expiry recovery |
| Infra/RPC | 15 | 10 | Paid RPC provider configured | Fallback provider and rate-limit runbook missing |
| Wallet UX | 10 | 8 | Clear signing states | Mobile deep-link return flow untested |
| Testing | 10 | 7 | Devnet claim flow tested | No negative-path tests for duplicate claims |
| Monitoring/analytics | 10 | 5 | Backend logs exist | No alert thresholds or launch dashboard |
| Docs/support/GTM | 10 | 10 | README and draft launch copy exist | Support FAQ still needs launch-day owner |

Final score: 69/100.

## Blockers

No absolute blockers found in the demo input, but authority ownership and monitoring are `needs manual verification`.

## High Priority Risks

| Finding | Evidence | Impact | Recommended fix |
| --- | --- | --- | --- |
| Blockhash expiry recovery is missing | Retry behavior is not documented | Users may see failed transactions during congestion | Rebuild expired transactions and request a fresh signature |
| Token authority setup is not verified | Mint and metadata authority are described outside repo | Users cannot assess token control risk | Verify on-chain authority state and disclose retained powers |
| Monitoring is incomplete | No alert thresholds provided | Team may miss launch failure spikes | Add dashboard and alerts for transaction failures, RPC errors, and claim failures |

## Manual Verification

| Item | Why it matters | Owner |
| --- | --- | --- |
| Mint authority status | Determines whether supply can change | Founder |
| Metadata authority owner | Determines whether token identity can change | Founder |
| RPC rate limits | External provider setting | Infra lead |
| Support owner | Needed during launch window | Operations |

## Next 7 Days

| Day | Action | Owner | Done when |
| --- | --- | --- | --- |
| 1 | Add blockhash expiry test and recovery | Engineering | Expired transaction retry creates a fresh signature request |
| 2 | Verify token authorities on-chain | Founder | Authority status documented with explorer links |
| 3 | Add RPC fallback runbook | Infra | Primary and fallback behavior documented |
| 4 | Create launch dashboard | Infra | Alerts for failure spikes are live |
| 5 | Test mobile wallet flow | Product | iOS and Android notes recorded |
| 6 | Draft public risk disclosure | Founder | Token authority and claim limits disclosed |
| 7 | Run final pre-mainnet check | Launch reviewer | No blockers remain |
