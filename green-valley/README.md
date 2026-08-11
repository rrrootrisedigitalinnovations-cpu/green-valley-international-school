# Green Valley International School — Website

A premium marketing website for a fictional Cambridge International curriculum
school in Coimbatore, Tamil Nadu. Built with **React 19**, **Vite**, **Tailwind
CSS**, **Framer Motion**, **React Router** and **Lucide Icons**.

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint        # ESLint
```

Requires Node.js 18+.

> **Note on this build:** this project was generated in a sandboxed
> environment with no network access, so it could not be `npm install`-ed or
> run through an actual Vite build here. Every file was written and manually
> cross-checked (imports resolve, JSX parses cleanly, all Tailwind color
> classes match tokens defined in `tailwind.config.js`), but you should still
> treat the very first `npm run build` as a real test — please flag it back
> if anything doesn't compile.

---

## Before you deploy — three things to swap in

This is a complete, production-shaped codebase, but three things are
placeholders that a real launch needs replaced:

1. **Photography.** Every photo (`src/lib/images.js`) is served from
   [Picsum](https://picsum.photos) — a free, royalty-free image CDN backed by
   real Unsplash photographers. It renders real, licensed photography, but
   it's generic (a library photo isn't literally *this* school's library).
   Swap each entry in `src/lib/images.js` for the school's own commissioned
   photography before launch — the seeded-URL pattern there makes it a
   find-and-replace job. `public/` is the right place to drop local image
   files if you'd rather self-host than link out.
2. **Google Maps embed.** `SCHOOL.mapEmbed` in `src/lib/constants.js` is a
   placeholder embed URL. Generate a real one from Google Maps → Share →
   Embed a map, for the school's actual address, and drop the `src` in.
3. **Forms don't submit anywhere yet.** The admissions enquiry form, contact
   form, and newsletter signup are fully interactive on the frontend (state,
   validation, success states) but don't call an API — there's no backend in
   this deliverable. Wire them to whatever you use (Formspree, a serverless
   function, your SIS, etc.) in `src/pages/Admissions.jsx`,
   `src/pages/Contact.jsx`, and `src/components/layout/Footer.jsx`.

---

## Design system

| Token | Value | Use |
|---|---|---|
| Primary | `#1E3A8A` | Deep navy — headers, primary buttons, dark sections |
| Secondary | `#2563EB` | Bright blue — accents, gradients |
| Accent | `#16A34A` | Green — CTAs, highlights, the signature motif |
| Background | `#F8FAFC` | Page background |
| Text | `#111827` | Body copy |

- **Display type:** Manrope (headings)
- **Body type:** Inter
- **Utility/eyebrow type:** IBM Plex Mono — used for small tracked labels
  (`AUG 16`, `01 / 08`, section eyebrows) for an editorial, exam-paper feel
  that nods to the Cambridge curriculum.

**Signature motif — Contour Lines** (`src/components/ui/ContourLines.jsx`):
nested topographic contour lines that dip into a valley at the centre — a
literal, generative reading of "Green *Valley*." The same generator draws the
homepage hero backdrop, section dividers, the footer watermark, and the 404
page background, so it reads as one consistent mark rather than decoration
repeated at random.

All colors, spacing, shadows and type live in `tailwind.config.js` — change
them there, not by hand-editing hex codes in components.

---

## Project structure

```
src/
  components/
    layout/         Navbar, Footer, PageHero, Loader, ScrollProgressBar,
                     FloatingAdmissionButton, PageTransition
    ui/              Button, Container, SectionHeading, Reveal, ContourLines,
                     StatCounter, Accordion — the reusable primitives
    sections/home/   Nine composed sections that make up the homepage
  pages/            One file per route (12 total, see below)
  lib/
    constants.js     All copy/data: nav, stats, programs, facilities, faculty,
                     testimonials, news, admissions steps, fees, FAQs, careers
    images.js        Centralized image bank (see "Photography" above)
  hooks/             useDarkMode, useScrollProgress, useCountUp
```

Pages: Home, About, Admissions, Academics, Faculty, Campus Life, Facilities,
Gallery, News & Events, Careers, Contact, 404 — each with a distinct layout
(split hero vs. full-bleed banner, tabs, timeline, masonry + lightbox, bento
grid, horizontal scroll-snap, etc.) rather than one template reused twelve
times.

---

## Features implemented

- Dark mode (persisted to `localStorage`, respects system preference)
- Scroll progress bar, sticky/glassmorphic navbar, floating admission CTA
- Page transitions and scroll-reveal animations (Framer Motion), with
  `prefers-reduced-motion` respected throughout
- Animated statistic counters
- Faculty search + department filter
- Gallery with category filters and a lightbox (click to open, arrows to
  navigate, click outside or × to close)
- Interactive virtual-tour strip on the Facilities page
- Tabbed subjects-by-stage explorer on the Academics page
- Working client-side forms (enquiry, contact, newsletter) with validation
  and success states — see "before you deploy" above for wiring them up
- SEO: per-page-ready meta tags, Open Graph/Twitter cards, `School` schema.org
  markup, semantic headings, descriptive `alt` text throughout
- Accessible focus states, `aria-label`s on icon-only buttons, reduced-motion
  support

## Performance notes

- Routes are plain imports (not lazy-loaded) for simplicity — if the bundle
  grows, switch `src/App.jsx` to `React.lazy()` + `Suspense` per route.
- `vite.config.js` splits vendor and motion chunks.
- Images use `loading="lazy"` outside the hero/above-the-fold.
- Once real photography replaces the Picsum placeholders, run them through
  an image CDN or `vite-imagetools` for responsive `srcset`s — that's the
  single biggest lever left for a Lighthouse 95+ score.

## Deployment

Static output from `npm run build` (the `dist/` folder) deploys as-is to
Vercel, Netlify, Cloudflare Pages, or any static host. Because routing is
client-side (React Router), configure your host to rewrite all paths to
`index.html` (Vercel/Netlify do this automatically for Vite projects; on
Netlify add a `_redirects` file with `/* /index.html 200` if it doesn't).
