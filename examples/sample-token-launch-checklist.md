# Sample Token Launch Checklist

## Token Details

- Standard: SPL Token
- Mint: `<TOKEN_MINT>`
- Decimals: 6
- Supply: `<TOTAL_SUPPLY>`
- Metadata URI: `<METADATA_URI>`

## Authorities

| Authority | Status | Manual verification |
| --- | --- | --- |
| Mint authority | Planned revoke after mint | Verify on-chain after launch |
| Freeze authority | None | Verify mint account |
| Metadata authority | Multisig retained | Confirm signer set and disclosure |
| Treasury | Multisig | Confirm wallet address and policy |

## Launch Mechanics

- [ ] Supply and decimals checked against UI.
- [ ] Token metadata renders in wallets.
- [ ] Liquidity pool address verified before publishing.
- [ ] Claim duplicate protection tested.
- [ ] Risk disclosure published.
- [ ] Official links and anti-phishing notice ready.

