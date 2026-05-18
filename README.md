# Martin Mora Website

Production-ready Next.js website scaffold for Martin Mora.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Vercel is the simplest path:

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

Netlify, AWS, and VPS hosting also work with:

```bash
npm run build
npm run start
```

## Structure

- `app/`: Next.js app router pages, metadata, sitemap, robots, and API routes.
- `components/sections/`: Homepage production sections.
- `components/ui/`: Reusable interactive UI pieces.
- `content/`: CMS-ready insight data.
- `lib/`: Utilities, SEO defaults, and site config.

## Contact Form

The contact endpoint is implemented at `app/api/contact/route.ts`.
It validates the payload and is ready for Resend or another provider. Add your email provider call where marked.
