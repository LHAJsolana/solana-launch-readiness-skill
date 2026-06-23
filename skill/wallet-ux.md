# Wallet UX Readiness

Use this file when reviewing wallet connection, signing, transaction status, onboarding, mobile UX, and user recovery.

## Wallet Adapter UX

- Show supported wallets and network clearly.
- Handle no wallet installed, unsupported wallet, locked wallet, rejected connection, and disconnected session.
- Avoid auto-connecting without clear user intent.
- Persist only safe session state.
- Provide network mismatch messaging without exposing confusing internals.

## Signing Intent

- Explain what the transaction does before the wallet prompt.
- Show estimated fees when available.
- Identify the asset, amount, recipient, program, or action in human language.
- Never encourage blind signing.
- Avoid vague buttons like "Approve" for high-risk actions; use action-specific labels.

## Transaction Simulation Messaging

- Simulate before send for launch-critical actions when practical.
- Convert simulation failures into user-friendly messages.
- Keep raw logs available for support without dumping them into the main UI.
- Warn when simulation cannot guarantee final landing.

## Confirmation States

Use explicit states:

- `preparing`: building instructions and fetching blockhash.
- `awaiting_signature`: wallet prompt is open.
- `submitted`: signature returned and transaction sent.
- `confirming`: waiting for desired commitment.
- `finalized`: completed and visible.
- `failed`: failed, expired, rejected, or unknown with recovery steps.

## Retry And Recovery UX

- Refresh blockhash before retrying expired transactions.
- Do not blindly resubmit stale transactions.
- Preserve user context after a failed signature or failed send.
- Provide support-ready transaction signature links when available.
- Separate user rejection from network failure.

## Mobile Considerations

- Test mobile wallet deep links and return-to-app behavior.
- Keep signing flows short and interruption-tolerant.
- Avoid tiny tap targets and modals that trap mobile users.
- Provide copyable addresses and explorer links.
- Test slow networks and backgrounding.

## User-Friendly Errors

Map common Solana failure classes:

| Error Type | User Message Direction |
| --- | --- |
| User rejected | "You rejected the request. No transaction was sent." |
| Blockhash expired | "This transaction expired. Try again to create a fresh request." |
| Insufficient SOL | "You need SOL for network fees." |
| Simulation failed | "This action is not currently valid. Review the details or contact support." |
| RPC rate limited | "Network provider is busy. We are retrying or switching providers." |

## Sign-In And Sessions

- Use message signing for authentication; do not ask users to sign transactions for login.
- Include domain, nonce, issued-at time, and expiration in signed messages.
- Rotate session tokens and support logout.
- Avoid long-lived privileged sessions for admin tools.

## Accessibility And Onboarding

- Keyboard-accessible wallet and transaction controls.
- Visible focus states and readable contrast.
- Plain-language onboarding for SOL fees, network, and wallet safety.
- Avoid relying on color alone for transaction status.

