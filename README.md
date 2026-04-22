# Kiki Makeup Studio — Tier A Landing Site

Static Next.js 14 landing site for `makeup.ninedsales.com`.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm test         # vitest
pnpm build        # outputs static site to ./out
```

## Deployment

1. `pnpm build` — generates `out/`
2. SFTP the entire contents of `out/` to the site root on the VPS:
   `/home/<user>/htdocs/makeup.ninedsales.com/`
3. Confirm `https://makeup.ninedsales.com` loads.

### Example with lftp

```bash
lftp -u <sftp-user>,<sftp-password> sftp://<vps-host> -e "mirror -R out/ /home/<user>/htdocs/makeup.ninedsales.com/; quit"
```

## Content updates

All bilingual strings live in `lib/content.ts`. Edit, rebuild, redeploy.

## Tech stack

Next.js 14 · TypeScript · Tailwind CSS 3 · pnpm · Vitest · next/font (Cormorant Garamond + Inter)
