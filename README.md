# T-Groups
# T-Groups

## SEO environment variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Optional: enables the GA4 script in app/layout.tsx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

In Vercel, add `NEXT_PUBLIC_SITE_URL` with the production site URL under
**Settings > Environment Variables** for Production, Preview, and Development
as needed. Add `NEXT_PUBLIC_GA_ID` there as well if Google Analytics is enabled.

The App Router automatically serves `/sitemap.xml` and `/robots.txt` from
`app/sitemap.ts` and `app/robots.ts`.
