# Transaction Reliability Patterns

Use this reference for Solana transaction reliability reviews.

## Reliable Transaction Flow

1. Build instructions from current state.
2. Simulate when useful and practical.
3. Fetch a fresh blockhash close to signing time.
4. Add compute budget and priority fee instructions when needed.
5. Request wallet signature with clear user intent.
6. Send transaction and persist signature.
7. Confirm against signature status and blockhash validity.
8. Surface finalized, failed, expired, or unknown states clearly.
9. Rebuild and re-sign expired transactions instead of resubmitting stale payloads.

## Confirmation States

- Preparing.
- Awaiting signature.
- Submitted.
- Confirming.
- Finalized.
- Failed.
- Expired.
- Unknown, with support path.

## Retry Rules

- Retry RPC requests with capped exponential backoff and jitter.
- Do not spam retries during provider incidents.
- Do not ask users to sign the same stale transaction after expiry.
- Track signatures to avoid duplicate user confusion.
- Make duplicate sends idempotent where possible.

## Priority Fee And Compute Budget

- Avoid fixed magic numbers as the only strategy.
- Use recent fee data or provider recommendations when available.
- Keep fee estimates visible enough for support.
- Test launch-critical flows under simulated congestion where possible.

## Review Questions

- Where is `lastValidBlockHeight` tracked?
- What happens when a blockhash expires?
- What commitment level is used and why?
- How does the UI distinguish signature rejection from network failure?
- Are transaction signatures saved for support?
- Is there a fallback confirmation path if websocket subscriptions fail?

