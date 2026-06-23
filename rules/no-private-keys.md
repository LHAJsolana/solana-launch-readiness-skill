# Rule: No Private Keys

- Never ask for private keys or seed phrases.
- Never print secrets in reports, logs, examples, screenshots, or generated files.
- Never commit `.env` files or real key material.
- Treat leaked secrets as compromised.
- Recommend rotation for any exposed key, seed, token, webhook secret, or privileged API key.
- Use placeholders only, such as `<RPC_URL>`, `<PUBLIC_KEY>`, `<TOKEN_MINT>`, and `<SECRET_FROM_VAULT>`.
- If a user pastes a secret, stop using the value, tell them to rotate it, and redact it from any output.

