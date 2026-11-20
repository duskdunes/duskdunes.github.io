# Dusk Dunes sync server (optional)

GitHub Pages can only serve files, so accounts that follow you between devices need a tiny server. This is one: a Cloudflare Worker with a free KV store. It never sees your password or readable settings.

## How it protects you

- Your browser turns the password into two secrets with PBKDF2-SHA-256 (600,000 rounds, a different salt per username). One is a login value, the other is an encryption key. **The password never leaves your device.**
- The server stores only a salted SHA-256 of the login value, plus your settings encrypted in the browser with AES-GCM. It cannot read them.
- 8 wrong guesses lock an account for 15 minutes.
- There is no password recovery, because nobody else holds the key. Use **Change password** while signed in.

## Deploy (about 5 minutes, free tier)

1. Install Wrangler and sign in: `npm i -g wrangler` then `wrangler login`.
2. Create the store: `wrangler kv namespace create DD` and paste the `id` it prints into `wrangler.toml`.
3. Deploy: `wrangler deploy`. It prints a URL like `https://dusk-dunes-sync.YOUR-NAME.workers.dev`.
4. In the game open **Account > Sync across devices**, paste that URL and press **Test connection**. (Or set `DD_SYNC_URL` near the top of the account code in `index.html` so every visitor uses it.)

Then sign up on one device and log in on any other.
