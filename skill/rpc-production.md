# RPC And Production Infra

Use this file for RPC provider readiness, transaction landing, confirmation, priority fees, compute budget, rate limits, indexers, and network configuration.

## RPC Provider Selection

- Identify production RPC provider and plan tier.
- Confirm rate limits for HTTP, websocket, and enhanced APIs.
- Confirm support process and status page.
- Separate read-heavy, write-heavy, backend, and user-facing traffic where needed.
- Avoid relying on public endpoints for production launches.

## Rate Limits And Backoff

- Use exponential backoff with jitter.
- Detect provider-specific rate limit responses.
- Cap retries and surface actionable errors.
- Avoid thundering herd retries during launch.
- Cache safe reads where appropriate.

## Blockhash Expiry

- Fetch fresh blockhash near signing time.
- Track `lastValidBlockHeight` when available.
- Rebuild and re-sign expired transactions.
- Never ask users to retry by resubmitting stale signed payloads.

## Transaction Confirmation

- Confirm with signature status and blockhash validity.
- Distinguish processed, confirmed, finalized, expired, dropped, and failed states.
- Persist signatures for support and reconciliation.
- Use commitment levels intentionally and document tradeoffs.

## Priority Fees And Compute Budget

- Add compute budget instructions for launch-critical transactions when needed.
- Estimate priority fees from provider APIs, recent fees, or conservative defaults.
- Avoid hardcoded fees that become stale under congestion.
- Communicate fee spikes to users without panic language.

## Simulation Before Send

- Simulate high-risk or complex transactions before requesting signature when possible.
- Run simulation with realistic accounts, signers, and compute budget.
- Log simulation failures for support.
- Do not treat simulation success as a guarantee of final execution.

## Websocket Vs Polling

| Approach | Use When | Risks |
| --- | --- | --- |
| Websocket | realtime updates, account subscriptions, confirmations | disconnects, provider limits, missed events |
| Polling | simpler status checks, fallback confirmation | latency, request volume |

Use reconnect logic and polling fallback for critical flows.

## Fallback RPC Strategy

- Define primary and secondary providers.
- Use fallback for reads and status checks.
- Be careful sending the same transaction through multiple providers; dedupe and track signatures.
- Monitor provider health and failover events.
- Keep API keys out of client bundles when they grant privileged access.

## Indexing Strategy

- Identify whether the app needs direct RPC reads, custom indexer, hosted indexer, or event pipeline.
- Backfill missed events after outages.
- Reconcile indexed state with on-chain truth for critical balances and ownership.
- Document data freshness and known lag.

## Mainnet/Devnet Separation

- Separate env vars, RPC URLs, program IDs, mint addresses, metadata, and explorer links.
- Use visible network labels in non-mainnet environments.
- Prevent accidental mainnet writes from test scripts.
- Keep deploy scripts explicit about cluster and confirmation level.

## Common Production Mistakes

- Hardcoded devnet program ID used in mainnet build.
- No handling for expired blockhash.
- Treating wallet signature as successful finalization.
- Public RPC endpoint used during a public launch.
- No retry jitter or fallback.
- No visibility into failed transaction reasons.
- API keys committed or exposed in frontend when they should be server-side.

