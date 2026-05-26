# BeingBasic

Ultra-modern luxury minimalist ecommerce frontend — black & white aesthetic, React + Vite + Tailwind CSS + Framer Motion + React Three Fiber.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub (or GitLab/Bitbucket).
2. Sign in at [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your repository. Vercel auto-detects Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy. The included `vercel.json` enables SPA routing for client-side navigation.

**CLI alternative:**

```bash
npm i -g vercel
vercel
```

Follow prompts; defaults work for Vite.

## Folder structure

```
BeingBasic_Website/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── auth/           # Login / register modal
│   │   ├── cart/           # Shopping cart sidebar
│   │   ├── chat/           # AI support chatbot
│   │   ├── dashboard/      # User dashboard modal
│   │   ├── hero/           # Hero + Three.js scene
│   │   ├── layout/         # Navbar, footer, loading, transitions
│   │   ├── products/       # Grid, cards, product modal
│   │   ├── search/         # Search bar + results
│   │   ├── sections/       # Philosophy, journal, newsletter
│   │   └── ui/             # Button, glass panel, scroll reveal
│   ├── context/            # Cart & UI global state
│   ├── data/               # Product catalog
│   ├── hooks/              # Mouse parallax, scroll progress
│   ├── pages/              # Home page composition
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx             # Root app + providers
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind + global styles
├── index.html              # SEO meta tags
├── vite.config.ts
├── vercel.json
└── package.json
```

## Features

- Sticky glassmorphism navbar with scroll progress
- Hero with animated typography, parallax, and 3D floating objects
- Product grid, detail modal, wishlist, cart with quantities & checkout UI
- Auth modal and user dashboard
- AI chatbot with simulated responses
- Product search
- Loading screen and page transitions
- Fully responsive mobile navigation

## Tech stack

- React 19 + TypeScript + Vite 6
- Tailwind CSS 4
- Framer Motion
- React Three Fiber + Drei
- react-helmet-async (SEO)
