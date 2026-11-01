# WS Smart Solution (`wsss.pages.dev`)

Official static e-commerce store, computer OS & battery service center, and full-stack software & IoT portfolio for **WS Smart Solution**.

## Architecture & Lifetime Hosting (`$0/month`)
- **Framework:** Next.js 15 (`output: 'export'` Static Site Generation)
- **Styling:** Tailwind CSS v4 + Lucide Icons
- **Hosting:** Cloudflare Pages (`https://wsss.pages.dev`)
- **SEO:** Pre-rendered HTML, JSON-LD Rich Snippets (`LocalBusiness`, `ComputerStore`, `ComputerRepair`, `OfferCatalog`), automated `sitemap.xml` and `robots.txt`.

## How to Customize Contact Info, Products, Services, or Portfolio
- **Phone / WhatsApp / Address:** Edit [`src/data/siteConfig.ts`](./src/data/siteConfig.ts)
- **Shop Products:** Edit [`src/data/products.ts`](./src/data/products.ts)
- **OS & Battery Services:** Edit [`src/data/services.ts`](./src/data/services.ts)
- **Portfolio Projects:** Edit [`src/data/portfolio.ts`](./src/data/portfolio.ts)

## Commands
```bash
# Run local development server
npm run dev

# Build static production files into ./out
npm run build

# Deploy directly to Cloudflare Pages (wsss.pages.dev)
npm run deploy
```

