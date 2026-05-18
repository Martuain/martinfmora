# Deployment Guide

## Vercel

1. Push project to GitHub
2. Create Vercel account
3. Import repository
4. Deploy automatically

## Local Development

```bash

npm install
npm run dev

Production Build

npm run build
npm start
```


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
