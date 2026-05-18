# Deployment Guide

## Vercel

1. Push the repository to GitHub.
2. Import it from Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Add contact provider variables when you connect email delivery.
5. Deploy.

## Netlify

Use:

```bash
npm run build
```

Set the publish command through the Netlify Next.js runtime.

## VPS

```bash
npm install
npm run build
npm run start
```

Run behind a reverse proxy such as Nginx or Caddy and point the domain to port `3000`.

## Production Checklist

- Replace placeholder social URLs in `lib/site.ts`.
- Add a real contact email provider in `app/api/contact/route.ts`.
- Set `NEXT_PUBLIC_SITE_URL`.
- Add domain DNS and SSL.
- Run `npm run lint`, `npm run typecheck`, and `npm run build`.
