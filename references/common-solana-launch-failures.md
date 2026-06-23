# Common Solana Launch Failures

Use this reference when explaining why a readiness review matters.

## Technical Failures

- Treating a returned wallet signature as final success.
- Missing blockhash expiry recovery.
- Hardcoding devnet program IDs or token mints in mainnet builds.
- Depending on public RPC endpoints during public launches.
- No priority fee or compute budget strategy during congestion.
- No fallback provider or provider status runbook.
- No simulation or poor simulation error handling.

## Security And Authority Failures

- Committed private keys, keypair JSON files, `.env` files, or RPC keys.
- Retained mint, freeze, metadata, upgrade, or admin authority without disclosure.
- Single hot wallet controls launch-critical assets.
- Missing signer checks or weak account validation.
- Claim flows allow duplicates or replay-like behavior.
- Dependencies introduce wallet-draining frontend risk.

## User Experience Failures

- Blind signing prompts with unclear intent.
- No distinction between rejected, submitted, confirming, finalized, expired, and failed.
- Mobile wallet return flow breaks.
- Errors expose raw logs without actionable recovery.
- Users cannot find transaction signatures for support.

## Operational Failures

- No dashboard for transaction failures, RPC errors, or wallet connection failures.
- No alert thresholds.
- No incident owner.
- No public communication template.
- No support FAQ for launch-day issues.

## Founder And GTM Failures

- Launch claims overstate readiness, traction, partnerships, TVL, or returns.
- Token authority and supply details are not disclosed.
- Official links and anti-phishing guidance are unclear.
- Demo video exposes admin tools or secrets.

