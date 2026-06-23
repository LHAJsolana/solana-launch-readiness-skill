# Output Templates

Use these templates for reusable launch deliverables.

## Launch Readiness Report

```markdown
# Solana Launch Readiness Report

## Summary
- Project:
- Project type:
- Target network:
- Target launch date:
- Reviewed commit:
- Overall score:
- Go/no-go:

## Score Breakdown
| Category | Max | Score | Evidence | Gaps |
| --- | ---: | ---: | --- | --- |
| Security | 25 |  |  |  |
| Transaction reliability | 20 |  |  |  |
| Infra/RPC | 15 |  |  |  |
| Wallet UX | 10 |  |  |  |
| Testing | 10 |  |  |  |
| Monitoring/analytics | 10 |  |  |  |
| Docs/support/GTM | 10 |  |  |  |

## Blockers
| Finding | Evidence | Impact | Fix |

## High Priority
| Finding | Evidence | Impact | Fix |

## Manual Verification
| Item | Why | Owner |

## Next 7 Days
| Day | Action | Owner | Done when |
```

## Pre-Mainnet Checklist

```markdown
# Pre-Mainnet Checklist

## Go/No-Go
- Recommendation:
- Blockers:

## Required Checks
- [ ] Secrets scanned and no committed production secrets.
- [ ] Mainnet program IDs, mints, RPC URLs, and explorer links verified.
- [ ] Transaction confirmation and retry handling tested.
- [ ] Priority fee and compute budget strategy reviewed.
- [ ] Wallet UX tested on desktop and mobile.
- [ ] Monitoring dashboard and alerts live.
- [ ] Incident owner and communication channel assigned.
```

## Token Launch Checklist

```markdown
# Token Launch Checklist

## Token Details
- Mint:
- Standard:
- Decimals:
- Supply:
- Metadata URI:

## Authorities
| Authority | Status | Owner | Disclosure |

## Launch Mechanics
- [ ] Mint/freeze/metadata authority plan verified.
- [ ] Supply and decimals tested.
- [ ] Liquidity plan verified.
- [ ] Claim/airdrop tested for duplicates and failures.
- [ ] Holder risk disclosure prepared.
```

## Incident Response Plan

```markdown
# Incident Response Plan

## Owners
| Role | Name | Contact |

## Severity Matrix
| Severity | Trigger | Owner | Response time |

## First 15 Minutes
- [ ] Assign incident commander.
- [ ] Preserve logs and signatures.
- [ ] Decide whether to pause affected actions.
- [ ] Prepare first user update.

## Public Update Template

## Postmortem Template
```

## Founder Launch Pack

```markdown
# Founder Launch Pack

## One-Liner

## Launch Checklist

## X Thread

## README Improvements

## Grant Submission Answers

## User Onboarding Checklist

## Support FAQ
```

## Risk Register

```markdown
# Risk Register

| Risk | Severity | Likelihood | Evidence | Mitigation | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
```

## Post-Launch Review

```markdown
# Post-Launch Review

## Metrics
- Wallet connections:
- Transaction attempts:
- Success rate:
- RPC incidents:
- Support tickets:

## Lessons
- What worked:
- What failed:
- What confused users:

## Follow-Up Actions
| Action | Owner | Due | Status |
```

