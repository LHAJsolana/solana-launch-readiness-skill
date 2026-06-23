# Analytics And Monitoring

Use this file for launch dashboards, metrics, alerts, logs, and post-launch review.

## Launch Dashboard

Track:

- Wallet connections by wallet type and device.
- Transaction attempts, signatures returned, confirmed, finalized, failed, expired, and rejected.
- RPC errors by provider, method, and status code.
- Program errors by instruction and error code.
- Claim/mint/swap/payment funnel conversion.
- Support tickets and user-reported blockers.

## Transaction Metrics

- Success rate by action.
- Failure reason distribution.
- Time from signature to confirmation/finalization.
- Blockhash expiry count.
- Priority fee and compute unit trends.
- Duplicate submissions and retry outcomes.

## RPC Error Metrics

- Rate limit responses.
- Timeout rate.
- Websocket disconnects.
- Latency percentiles.
- Failover count.
- Provider status incidents.

## Program Logs

- Capture program error codes and human-readable mappings.
- Preserve transaction signatures for investigation.
- Avoid logging secrets, private user data, or raw sensitive payloads.
- Keep log retention long enough for post-launch review.

## Indexer Options

- Direct RPC polling for small projects.
- Hosted indexer for token/NFT/activity views.
- Custom indexer for product-specific state.
- Event pipeline for analytics and alerting.

Document freshness expectations and recovery from missed events.

## Alerting Thresholds

Define thresholds before launch:

- Transaction success rate below target for 5-10 minutes.
- RPC error rate above baseline.
- Confirmation latency spike.
- Failed claim/mint/swap spike.
- Backend queue lag.
- Indexer lag.
- Wallet connection failure spike.
- Support ticket spike.

Each alert should have owner, severity, runbook, and communication path.

## Uptime Checks

- Homepage and app shell.
- API health.
- RPC health from backend.
- Indexer freshness.
- Critical transaction simulation.
- Status page or public incident channel if available.

## Post-Launch Review Template

```markdown
# Post-Launch Review

## Launch Window
- Date/time:
- Owners:
- Launch type:

## Metrics
- Wallet connections:
- Transaction attempts:
- Success rate:
- Top failure reasons:
- RPC incidents:
- Support tickets:

## What Worked

## What Failed

## User Confusion

## Follow-Up Actions
| Action | Owner | Priority | Due |
```

## Support Feedback Loop

- Tag tickets by wallet, device, transaction type, and failure reason.
- Feed common issues back into UI copy and FAQ.
- Publish known issues when they affect many users.
- Close the loop with users after fixes.

