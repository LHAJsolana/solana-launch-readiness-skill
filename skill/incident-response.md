# Incident Response

Use this file to create launch war rooms, incident plans, playbooks, communication templates, and postmortems.

## Severity Levels

| Severity | Definition | Example |
| --- | --- | --- |
| SEV0 | Funds at immediate risk or active exploit | unauthorized mint, drain, critical program bug |
| SEV1 | Launch-critical outage or widespread failed transactions | most users cannot complete core action |
| SEV2 | Degraded reliability or incorrect UX with workaround | one wallet type failing |
| SEV3 | Minor issue, limited impact | docs typo, delayed analytics |

## First 15 Minutes

- Assign incident commander.
- Freeze nonessential deploys.
- Identify affected product area, cluster, program, token, wallet, provider, and time window.
- Preserve logs, signatures, dashboards, and deploy SHAs.
- Decide whether to pause/freeze/disable UI actions where applicable.
- Draft initial internal summary.
- Prepare public update if users are affected.

## Communication Template

```markdown
We are investigating an issue affecting [feature/action].

Current impact: [plain-language impact].
User action needed: [none / avoid retrying / contact support / check status].
Funds risk: [unknown / no evidence / under investigation].
Next update: [time].
Official links: [status/support].
```

Avoid speculation. Do not claim funds are safe unless evidence supports it.

## Freeze, Pause, Or Admin Action Checklist

- Confirm the exact authority and signer set required.
- Confirm action on devnet/localnet first when possible.
- Confirm affected mint/program/pool/account addresses.
- Get human approval from accountable owner.
- Record transaction signatures and reason.
- Communicate user impact and reversal plan if any.

## RPC Outage Playbook

- Check provider status and internal error metrics.
- Switch reads to fallback provider if configured.
- Avoid duplicate sends without signature tracking.
- Reduce polling pressure.
- Communicate retry guidance to users.
- Open provider support ticket with timestamps and methods affected.

## Wallet Signing Issue Playbook

- Identify wallet types, browsers, devices, and versions affected.
- Check recent UI and dependency changes.
- Confirm if issue is connection, simulation, signature, send, or confirmation.
- Provide workaround if safe.
- Avoid asking users for seed phrases or private keys.

## Failed Transaction Spike Playbook

- Segment failures by instruction, wallet, provider, error code, and time.
- Check blockhash expiry and priority fee levels.
- Check program logs and recent deploys.
- Consider temporarily disabling affected action.
- Publish clear user guidance on retries.

## Token Metadata Or Liquidity Issue Playbook

- Verify mint address and metadata authority.
- Confirm metadata URI availability and cache behavior.
- Confirm pool address, liquidity, and token ordering.
- Warn users about fake pools or impostor tokens.
- Coordinate updates with official channels only.

## Postmortem Template

```markdown
# Incident Postmortem

## Summary

## Timeline
| Time | Event |

## Impact
- Users affected:
- Funds affected:
- Features affected:

## Root Cause

## Detection

## Response

## What Went Well

## What Went Poorly

## Corrective Actions
| Action | Owner | Due | Status |
```

