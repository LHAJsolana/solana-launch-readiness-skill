# Token Launch Checklist

Use this file for SPL Token, Token-2022, memecoin, community token, rewards token, governance token, or claim/airdrop launches.

This guidance is operational and safety-focused. Do not help with market manipulation, fake hype, wash trading, undisclosed paid promotion, fake partnerships, fake TVL, guaranteed returns, or deceptive launch tactics.

## Token Basics

- Confirm token standard: SPL Token or Token-2022.
- Verify mint address, decimals, total supply, and intended supply mechanics.
- Confirm metadata URI, symbol, name, image, website, and social links.
- Confirm metadata cannot be replaced unexpectedly, or document who controls it.
- Check explorer visibility and wallet display behavior.
- Verify devnet/localnet examples cannot be mistaken for mainnet addresses.

## Authority Checklist

| Authority | Questions |
| --- | --- |
| Mint authority | Is it revoked, multisig-controlled, timelocked, or intentionally retained? |
| Freeze authority | Is it revoked or clearly justified? Who can freeze accounts? |
| Metadata authority | Who can change token name/image/URI? Is that disclosed? |
| Upgrade authority | If programs are involved, who controls upgrades? |
| Treasury wallet | Is it multisig, documented, and separated from deployer hot wallets? |

Any retained authority should have a written rationale, owner, emergency process, and user-facing disclosure.

## Supply And Decimals Sanity Checks

- Confirm UI amount formatting matches token decimals.
- Test transfers, claims, and swaps with smallest unit and large amount edge cases.
- Confirm no accidental extra zeros in mint scripts.
- Confirm token supply shown in docs, UI, and launch materials matches on-chain state.
- Verify mint scripts are idempotent or clearly one-time.

## Liquidity Launch Checklist

- Document target pool venue and initial liquidity plan.
- Confirm pool creation addresses and token ordering before launch.
- Confirm treasury and LP custody plan.
- Confirm slippage warnings and expected volatility disclosures.
- Prepare rollback/communication plan for wrong metadata, wrong pool, or liquidity delay.
- Use current ecosystem documentation for venue-specific details; do not assume interfaces remain unchanged.

General ecosystem readiness areas:

- Jupiter: token discoverability, route availability, price impact communication.
- Raydium, Meteora, Orca: pool setup, LP custody, fee tier, liquidity range or bin strategy where applicable.
- Explorers and token lists: metadata consistency and verification requirements.

## Vesting And Treasury

- Confirm investor/team/community allocations and unlock schedule.
- Prefer transparent vesting contracts or multisig-controlled release process.
- Document treasury wallet controls and signer policy.
- Verify no launch-critical wallet depends on one person's hot wallet.
- Prepare public explanation for retained treasury, grants, incentives, and liquidity.

## Airdrop And Claim Risks

- Test duplicate claim protection.
- Test claim windows, allowlists, proof verification, and expiry behavior.
- Rate-limit backend claim APIs.
- Plan for bot pressure and failed transaction support.
- Avoid collecting unnecessary personal data.
- Provide clear instructions for failed claims and support escalation.

## Sybil Considerations

- Define what Sybil resistance means for this launch.
- Document eligibility criteria.
- Avoid pretending Sybil filtering is perfect.
- Use transparent appeal/support paths when feasible.
- Keep private allowlist data secure and avoid committing snapshots with sensitive user data.

## Holder Communication

- Explain utility, limitations, authorities, supply, vesting, and risks plainly.
- Avoid guaranteed returns or price targets.
- Disclose retained authorities and upgrade paths.
- Provide official links and anti-phishing guidance.
- Prepare support FAQ for wrong network, missing token display, failed swaps, failed claims, and impersonators.

