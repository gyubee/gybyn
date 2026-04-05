# gybyn.com (main hub)

Lightweight **brand landing and navigation hub** for [www.gybyn.com](https://www.gybyn.com). The portfolio app lives in a separate Next.js project (with `basePath: "/portfolio"`) and is stitched to this site in production via Vercel rewrites.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should see the centered **gybyn** wordmark and a **Portfolio** link pointing to `/portfolio`.

## Project layout

| Path | Role |
|------|------|
| `lib/nav.ts` | Primary nav links (add Blog, About, etc. here) |
| `components/SiteHeader.tsx` | Fixed header, desktop nav + mobile menu |
| `components/HeroLogo.tsx` | Centered brand wordmark |
| `app/page.tsx` | Home (`/`) only |
