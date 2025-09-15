# AI4Love Website

AI4Love homepage and machine readable content pages. This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Interactive Map Setup

This website uses Mapbox for the interactive map functionality. To set up the map:

1. Create a free account at [Mapbox](https://account.mapbox.com/)
2. Generate an access token in your Mapbox account with these scopes:
   - Required: `STYLES:TILES`, `STYLES:READ`, `VISION:READ`
   - Optional: `MAP:READ`, `DATASETS:READ` (if using geocoding or custom data)
3. Add URL restrictions to your token for security:
   - Production domain: `https://ai4love-website.netlify.app` (or your domain)
   - Development domains: `http://localhost:3000`, `http://localhost:3001`, `http://localhost:3002`
4. Add the token to your environment:

### Local Development

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### Production Deployment

Add the environment variable `NEXT_PUBLIC_MAPBOX_TOKEN` to your hosting platform:

- **Netlify**: Go to Site settings > Build & deploy > Environment > Environment variables
- **Vercel**: Go to Project settings > Environment Variables

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
