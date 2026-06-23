# Security Triage Checklist

This is triage, not a formal security audit. Never claim the project is audited because this checklist was run. Escalate launch-critical programs, custody, token mechanics, and DeFi logic to qualified Solana auditors.

## Secret Scanning

- Search for private keys, seed phrases, keypair JSON arrays, mnemonic words, RPC keys, API keys, webhook secrets, and `.env` files.
- Check examples, tests, docs, CI configs, deployment scripts, and screenshots.
- Treat leaked secrets as compromised and recommend rotation.
- Never print the secret value in the report; redact and reference the file location.

## Seed And Private Key Safety

- No committed keypairs.
- No docs asking users to paste seed phrases.
- No backend logs printing wallets, private keys, or signed payload secrets.
- Admin operations should use hardware wallet, multisig, or controlled deployment process where appropriate.

## Env Var Safety

- `.env.example` must use placeholders only.
- Production env values must not be committed.
- Mainnet and devnet env vars should be clearly separated.
- CI secrets should be referenced through the CI secret store, not inline.

## Program Authority Checks

- Verify expected signers are enforced.
- Validate account ownership, seeds, bumps, token mints, token accounts, and program IDs.
- Avoid trusting client-provided accounts without constraints.
- Confirm admin-only instructions check admin authority.
- Confirm initialization cannot be repeated to seize authority.

## Upgrade And Admin Risk

- Identify upgrade authority and governance/multisig status.
- Document emergency powers, pause/freeze rights, and operational controls.
- Confirm retained powers are disclosed to users when relevant.
- Avoid single hot wallet control for launch-critical authority.

## CPI And Account Validation

- Validate CPI target programs.
- Check token program choice: SPL Token vs Token-2022.
- Validate remaining accounts and arbitrary account lists.
- Consider signer privilege propagation and writable account risks.
- Ensure price/oracle inputs are fresh and authenticated when used.

## Solana-Specific Reentrancy-Style Concerns

Solana does not mirror EVM reentrancy, but similar risk can appear through CPI, stale state assumptions, duplicate instructions, replay-like flows, and missing account locks. Review:

- State updates before/after CPI.
- Duplicate claims or redemptions.
- Multiple instructions in one transaction.
- Race conditions around counters, supply caps, and allowlists.
- Idempotency for retryable user flows.

## Token Authority Risks

- Mint authority retained without disclosure.
- Freeze authority retained without disclosure.
- Metadata authority can change token identity after launch.
- Treasury wallet is a single signer hot wallet.
- Claim/airdrop allowlist can be replaced without transparency.

## Dependency Risks

- Check lockfile presence and dependency age.
- Review install scripts and postinstall hooks.
- Avoid unnecessary dependencies in launch-critical scripts.
- Watch for wallet-draining frontend dependencies or typosquatting.

## Frontend Phishing Risks

- Show canonical domain and official links.
- Avoid hidden recipient addresses for transfers.
- Display token mint addresses where relevant.
- Warn against impostor links in launch communications.
- Do not request seed phrases under any circumstance.

## Escalation Path

Recommend a formal audit or specialist review when:

- User funds, token minting, swaps, staking, lending, custody, or treasury controls are involved.
- The program is upgradeable and will hold value.
- Admins can pause, freeze, mint, drain, or redirect funds.
- The launch has large public distribution or liquidity.

