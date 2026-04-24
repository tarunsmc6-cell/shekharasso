# Shekhar & Associates — Website

A boutique legal & financial consulting website. Next.js 15, TypeScript, Tailwind, Framer Motion, Lenis, GSAP.

## Stack

- **Framework** · Next.js 15 (App Router) · React 19 · TypeScript
- **Styling** · TailwindCSS · CSS-var tokens · custom grain layer
- **Motion** · Framer Motion · Lenis (smooth scroll) · GSAP (available)
- **Type** · Instrument Serif (display) · Inter (sans) · JetBrains Mono (mono)

## Local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

## Structure

```
src/
  app/
    layout.tsx            # root shell, fonts, nav, footer, cursor, smooth scroll
    page.tsx              # home
    about/page.tsx
    services/page.tsx
    work/page.tsx         # case studies / matters
    insights/page.tsx     # editorial / field notes
    contact/page.tsx
    globals.css
  components/
    nav.tsx · footer.tsx
    hero.tsx · manifesto.tsx · practice-list.tsx · featured-work.tsx
    process.tsx · stats.tsx · testimonials.tsx · insights-preview.tsx · cta.tsx
    cursor.tsx · smooth-scroll.tsx · magnetic.tsx
    reveal.tsx · marquee.tsx · clock.tsx · section-label.tsx
    ui/button.tsx
  lib/cn.ts
```

## Design system

- Palette: `ink` (near-black base), `bone` (cream inverts), `ember` (signature gold), `signal` (accent lime).
- Type scale: `display-xl`, `display-lg`, `display-md` — clamped fluid across viewports.
- Shared primitives: `<SectionLabel />`, `<SplitReveal />`, `<Reveal />`, `<Marquee />`, `<Magnetic />`, `<ButtonLink />`.
- Custom cursor with hover states + label support via `data-cursor="…"` attribute.

## Deploy to Vercel

1. Push this repo to GitHub:
   ```bash
   git add -A && git commit -m "initial site"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. On Vercel: **Add New → Project → Import** the repo. Framework preset is auto-detected as Next.js. No env vars needed.
3. (Optional) Wire a custom domain under *Project Settings → Domains*.

Or deploy via CLI:

```bash
npx vercel            # preview
npx vercel --prod     # production
```

## Notes

- All copy is placeholder-quality real writing — replace partner names, credentials, case values, and office addresses with verified content before launch.
- Contact form is stub-only (client-side submit). Wire to an email API (Resend, Postmark) or form endpoint before going live.
- Favicon / logo mark / OG image are placeholder — add branded assets to `/public`.
