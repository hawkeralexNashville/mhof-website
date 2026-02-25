# Musicians Hall of Fame & Museum — Website

A modern, SEO-optimized website for the Musicians Hall of Fame and Museum in Nashville, TN. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (React, App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings) + DM Sans (body) via Google Fonts
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone git@github.com:hawkeralexNashville/mhof-website.git
cd mhof-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Images

Before the site will display properly, you need to add images. See **[IMAGE_MANIFEST.md](./IMAGE_MANIFEST.md)** for:
- Exact filenames and folder locations
- Which WordPress export files map to which slots
- Recommended image dimensions
- A checklist of all 22 images needed

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended — Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

Vercel auto-detects Next.js and configures everything. Your site will be live at `your-project.vercel.app`. You can then add your custom domain (`musicianshalloffame.com`).

## Project Structure

```
mhof-website/
├── app/
│   ├── globals.css        # Global styles, Tailwind, animations
│   ├── layout.tsx         # Root layout with SEO metadata + structured data
│   └── page.tsx           # Homepage
├── components/
│   ├── Header.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Full-screen hero with Ken Burns effect
│   ├── InfoBar.tsx        # Hours, address, phone, tickets bar
│   ├── AnnouncementBanner.tsx  # Promotional banners
│   ├── Exhibits.tsx       # "What You'll Discover" exhibit grid
│   ├── Highlights.tsx     # Instruments & Memorabilia showcase
│   ├── VideoSection.tsx   # Backstage interview videos
│   ├── PrivateEvents.tsx  # Private events CTA section
│   ├── GrammyGallery.tsx  # GRAMMY Gallery feature section
│   ├── Inductees.tsx      # Inductee timeline
│   ├── Merchandise.tsx    # Merch grid linking to Shopify store
│   └── Footer.tsx         # Footer with nav, socials, Google Map
├── hooks/
│   └── useReveal.ts       # Scroll-triggered animation hook
├── public/
│   └── images/            # All site images (see IMAGE_MANIFEST.md)
├── IMAGE_MANIFEST.md      # Image mapping guide
└── README.md
```

## SEO Features

- Server-side rendered pages (instant Google indexing)
- JSON-LD structured data (Museum, WebSite schemas)
- Open Graph + Twitter Card meta tags
- Semantic HTML with proper heading hierarchy
- Alt text on all images
- Automatic sitemap generation (add `next-sitemap` for production)
- Fast Core Web Vitals via Next.js Image optimization

## Future Pages

The header navigation is pre-wired for all pages. Pages to build next:
- `/plan-your-visit` — Hours, pricing, parking, directions
- `/museum` — Full exhibit gallery
- `/inductees` — Filterable inductee directory
- `/private-events` — Event inquiry form
- `/contact` — Contact form
- `/backstage` — Full video catalog
- `/grammy-museum-gallery` — Gallery detail page
- `/news` — Blog/news feed

## License

Private — Musicians Hall of Fame and Museum.
