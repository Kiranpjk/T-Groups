# T Group Imports & Exports

Company website for T Group Imports & Exports, an India-based exporter of agricultural and food products. Buyers can browse the product catalog, see export markets and certificates, and send a request for quotation.

**Live site:** https://t-groups.vercel.app

## What it does

- **Product catalog** with filters, grid and table views, and a page per product
- **Request for quotation** form that emails the inquiry to the sales inbox, with a container load calculator and an Incoterm helper
- **Export markets** page with an interactive world map
- **Quality and compliance** page with a viewer for the company's certificates
- **Insights** articles, plus pages for the export process and packaging and logistics
- **SEO:** per-page metadata, canonical URLs, `/sitemap.xml` and `/robots.txt`

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Nodemailer. Deployed on Vercel.

## Run it locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000.

## Environment variables

| Variable | Needed | What it does |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Public address of the site, used for canonical URLs, the sitemap and robots.txt |
| `NEXT_PUBLIC_GA_ID` | No | Turns on Google Analytics 4 |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | No | Mail server for quote emails. If left empty, inquiries are logged to the console |
| `SMTP_FROM` | No | Sender shown on quote emails |
| `NOTIFICATION_EMAIL` | No | Inbox that receives quote requests |

In Vercel, add them under **Settings > Environment Variables**.

## Checks

```bash
npm run lint
npm test
npm run build
```

`npm test` covers the quote form validation in `lib/quote.ts`.

## Project layout

- `app/` pages and the `api/send-quote` route
- `components/` UI, grouped by page
- `data/` products, markets, certificates, FAQs and company details
- `lib/` quote validation, email and SEO helpers
