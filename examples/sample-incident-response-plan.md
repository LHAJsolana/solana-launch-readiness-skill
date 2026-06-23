# Sample Incident Response Plan

## Owners

| Role | Owner | Contact |
| --- | --- | --- |
| Incident commander | `<NAME>` | `<CONTACT>` |
| Engineering lead | `<NAME>` | `<CONTACT>` |
| Communications | `<NAME>` | `<CONTACT>` |

## Severity Matrix

| Severity | Trigger | Response |
| --- | --- | --- |
| SEV0 | Funds at risk | Disable affected UI, preserve evidence, notify users |
| SEV1 | Core transaction flow down | War room, provider/support escalation, public update |
| SEV2 | Degraded wallet or RPC behavior | Workaround and monitoring |
| SEV3 | Minor support issue | Track and fix |

## First 15 Minutes

- [ ] Assign incident commander.
- [ ] Preserve logs and signatures.
- [ ] Identify affected feature and time window.
- [ ] Decide whether to pause affected actions.
- [ ] Draft user update.

## Public Update

```text
We are investigating an issue affecting transaction confirmation for [feature].
Current impact: some users may see delayed or failed confirmations.
User action needed: avoid repeated retries until the next update.
Next update: [time].
```

