# nail-salon-phoenix-site

A Next.js (App Router, TypeScript) rebuild of [nailsalonphoenix.com](https://nailsalonphoenix.com) — Element Nail Bar, 16th Street, Phoenix.

Styled with Tailwind CSS v4. The original site's own CSS is kept unchanged inside `src/app/globals.css` (in `@layer components`) and its markup is ported to React components, so the pages look and behave like the original. There is no JS animation library; motion is CSS, native `<details>` and one `<video>`.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (about 400 static pages)
npm start            # serve the production build
npm run lint
```

Requires Node 20+.

## What's included

Every URL in the original sitemap (391) is built, plus the paginated blog lists.

| Area | Routes | How it's built |
|---|---|---|
| Home, services, menu, about, contact, FAQs, salon policy, locations | `/`, `/services`, the 12 `/services/<name>` pages, `/menu`, `/about-us`, `/contact`, `/faqs`, `/salon-policy`, `/locations` | React section components in `src/components/sections/<page>/` |
| Area guides | about 68 pages at the root, e.g. `/gilbert`, `/phoenix`, `/biltmore` | data: `src/content/pages/<slug>.json`, route `src/app/[slug]` |
| Blog posts | about 294 pages, e.g. `/best-jelly-nails-in-phoenix`, `/blog/what-is-a-deluxe-pedicure` | data: route `src/app/[slug]` or `src/app/blog/[slug]` |
| Blog lists | `/blog`, `/blog/category/<name>`, each with `?page=N` | data: `blog.json`, `blog__p2.json`, `blog_category_<name>.json`, … (rendered per request) |
| Booking | `/booking/…` | the original booking app, proxied (see [Booking](#booking)) |

URLs use trailing slashes, as on the original (`trailingSlash: true`). Internal links between pages are client-side navigation; links to `/booking/` are plain links (full page load) because booking is a separate application.

## Styling

Tailwind CSS v4 is set up with PostCSS (`postcss.config.mjs`) and configured in `src/app/globals.css`:

1. `@import "tailwindcss"` brings in Tailwind's theme, preflight and utilities.
2. `@theme` holds the brand tokens, so these utilities work: `bg-brass`, `text-forest-900`, `bg-ivory`, `font-cormorant`, `font-manrope`, `shadow-soft`. Colors: forest (50–950), deep, brass, brass-soft, cream, paper, ivory, ivory-deep, ink, muted, line, rose, amber.
3. A `:root` block maps the old variable names (`--brass`, `--forest`, …) to the `@theme` tokens, because the ported CSS still uses them.
4. The original site CSS follows in `@layer components`, so Tailwind utilities override it as usual.

New components should use utilities (see `src/components/reviews/TrustindexWidget.tsx`). Two things to know:

- Tailwind scans **only** the folders listed in `@source` at the top of `globals.css` (currently `src/components/reviews`), because automatic detection is off (`source(none)`). The ported markup uses class names such as `grid` and `outline` that are also Tailwind utility names. If Tailwind scanned a file containing one of those words (even README text), it would generate a utility that overrides the site's rules. When you start using utilities in another folder, add it with `@source "../components/<folder>";` and check the pages for layout shifts.
- Site-wide changes to the ported pages still go in the site CSS section of `globals.css`, not in utilities.

## Project layout

```
src/
  proxy.ts              forwards /api/* to the booking app; trailing-slash redirects for pages
  app/
    layout.tsx          html/body only; each page renders its own <SiteFrame>
    [slug]/page.tsx     area guides and root-level blog posts (data-driven)
    blog/               blog list, blog/[slug] posts, blog/category/[category] lists (data-driven)
    <route>/page.tsx    the hand-ported pages (menu, services, …)
    globals.css         Tailwind + original CSS
    editorial.css       type, header/menu and motion layer on top of it
  components/
    layout/             SiteFrame (the page chrome), Header (hand-maintained), Footer, Announcement, MobileActions
    motion/             MotionProvider (smooth scroll, reveals, parallax), ImageMarquee
    sections/<page>/    one component per section of a hand-ported page
    content/            ContentPage + HtmlContent: render a data page's stored markup as React elements
    reviews/            TrustindexWidget: lazy-loads the live Google-reviews widget (same as the original site)
  content/
    pages/<name>.json   one file per data page: { route, family, className, meta, jsonLd, html }
    index.json          list of data pages (name, route, family)
    routes.json         every route the site serves
    load.ts             server-side loader used by the routes
public/
  media/                images, video and fonts at the original URL paths (the CSS references them)
  assets/wikimedia/     area-guide photos (credits are shown on the pages)
```

`SiteFrame` wraps every page in `<main id="top" class="…">`. The page-specific class (`menu-page`, `services-page`, `blog-article-page`, …) matters: much of the original CSS depends on it, so every page must pass the right one.

### Editing content

- **Area guides, blog posts and blog lists:** edit the `html`, `meta` (title, description, social image) or `jsonLd` fields in `src/content/pages/<name>.json`. `html` is the page's body markup with the original class names; links to pages on this site become client-side navigation automatically.
- **Hand-ported pages (home, services, menu, …):** edit the section components in `src/components/sections/<page>/`.
- A new area guide or post is a new JSON file plus an entry in `src/content/index.json` and `src/content/routes.json`.

## How it differs from the original

- **Same CSS, ported markup:** the site's own CSS is kept as-is and its HTML is converted to React components (hand-ported pages) or stored as data (area guides and posts). Tailwind v4 is installed, but the pages still use the original semantic classes (`hero`, `services-section`, …), not utility classes. See [Styling](#styling).
- **Reviews:** the live Trustindex widget is used, as on the original (`TrustindexWidget`). Its loader script is added when the section is within 500px of the viewport, and the section reserves the widget's height so the page does not jump. Reviews and the rating stay current with no maintenance. The widget is third-party code, so it sends requests to Trustindex and Google (the original does the same, with no consent gate).
- **Booking:** the online booking app is not rebuilt; this site proxies it, so it works on this site's own `/booking/` URL. See [Booking](#booking).
- **Removed:** Google Tag Manager, the Meta pixel, other ad tags, the cookie-consent banner and the `data-analytics-*` / `data-booking-*` attributes. Add tracking back deliberately if needed.
- **Photos:** the area-guide Wikimedia photos are downloaded into `public/assets/wikimedia/` instead of hotlinked. Keep the photo credits shown on the area pages.
- **Images:** plain `<img>` tags are used, as in the original; the `no-img-element` lint rule is off for `src/components`.

## Motion and editorial layer

The site's typography, header and motion are modeled on tengilemalamala.com, with the salon's own colors and logo kept. It is a layer on top of the original CSS, so the pages' markup and content are unchanged:

- `src/app/editorial.css` holds every rule (all prefixed with `#top` to beat the original CSS): large light serif headlines (Cormorant Garamond Light, loaded in `layout.tsx` as `--font-display`, a free stand-in for the reference site's PP Fragment), roomier section spacing, square buttons, the corner header and the full-screen menu, reveal states, the hero entrance and the image marquee.
- `src/components/motion/MotionProvider.tsx` (mounted once in the root layout) starts smooth scrolling (Lenis, with anchor links), then on every page: splits the hero headline into words for a masked entrance, fades and lifts below-the-fold text, cards and images in as they scroll into view (staggered), and adds a light parallax to large cropped images on desktop.
- `src/components/motion/ImageMarquee.tsx` is the looping photo strip on the home page (paused on hover).
- `src/components/layout/Header.tsx` is hand-maintained (not regenerated by the convert script): Reserve link, logo, and a Menu button that opens the full-screen menu. It hides on scroll down and returns on scroll up. The menu locks page scroll, traps focus, closes on Escape and is `inert` while closed.
- **Reduced motion:** an inline script in `layout.tsx` adds `html.motion` only when the visitor has not asked for reduced motion. Every hidden "before" state is scoped to that class, and Lenis is not started, so those visitors see the plain page. Hero text also has a CSS fail-safe that shows it after 3 seconds if the script never runs.
- To turn a piece off, remove it from `MotionProvider.tsx` (the `setup*` functions) or delete `ImageMarquee` from the home page. To adjust type sizes, edit the `clamp()` values in `editorial.css`.

## Booking

The booking flow (name and phone, services, date and time, confirmation, and /booking/manage/) is a separate application with its own backend (`/api/v1/*`, `/api/booking-flow/*`). It is not rebuilt here; this site serves it through its own URLs by proxying to wherever that application runs:

- `next.config.ts` rewrites `/booking/*` (the page, stylesheet, icons), `/api/*` and `/assets/*` (the booking app's script files) to `BOOKING_ORIGIN`. This project's own files win, so `/assets/wikimedia/*` is still served locally.
- `src/proxy.ts` forwards `/api/*` and sets the request's `Origin` and `Referer` to `BOOKING_PUBLIC_ORIGIN`, because the backend rejects state-changing requests that claim another origin (analytics events returned 403 without this). It also does this site's trailing-slash redirects for pages (`/menu` to `/menu/`), because Next's own redirect would also redirect the API calls, which the backend rejects (`skipTrailingSlashRedirect` is on for that reason).
- Configuration is in `.env.example`: `BOOKING_ORIGIN` (default `https://nailsalonphoenix.com`) and `BOOKING_PUBLIC_ORIGIN` (default the same).

**Today** the default works as is, because nailsalonphoenix.com is still the original site.

**When this site takes over nailsalonphoenix.com**, the original app must stay reachable somewhere else, or the proxy would call itself:

1. Keep the original app running and give it a hostname that reaches it (for example a second hostname in the same Cloudflare account).
2. Set `BOOKING_ORIGIN` to that address in the hosting environment variables (and leave `BOOKING_PUBLIC_ORIGIN` as the real domain).
3. Check that the app serves the 16th Street location on that hostname (it picks the location from the host; the page header should read "LOCATION 16" and the catalog should list the 16th Street services).
4. Before switching DNS, test the proxy on a preview deployment with the real `BOOKING_ORIGIN`: the form should load, `/api/v1/booking-catalog` should return 200, and a deliberately invalid request such as `POST /api/booking-flow/lead` with body `{}` should return `400 INVALID_ATTEMPT_ID` (not 403 or 404).

A Cloudflare rule that sends only `/booking*`, `/api/*` and `/assets/*` to the original app and everything else to this site is an alternative that avoids the proxy hop; the proxy here is the version that works from this repo alone.

Tested through this site's proxy against the original: the page renders and is interactive at desktop and mobile widths, the catalog, session and analytics calls match the live site, the "Book now" buttons (header, mobile bar, area pages) reach the form, and the lead and invalid-JSON validation errors come back identical. The final steps (saving contact details, choosing a time, confirming) were deliberately not exercised, because they would create real customers and appointments in the live booking system.

## Verification

The editorial layer (above) was checked on all 415 pages at 1440px (and every fourth page at 390px): no console or page errors, no broken images, no layout shift over 0.1, hero text visible, content revealed after scrolling, and no horizontal overflow except the blog category pages, whose button row overflows by about 36px at 1440px, exactly as on the original. With reduced motion on, nothing is hidden, smooth scrolling is off and the menu still works by keyboard. Very long mobile pages (such as `/locations/`, about 35,000px tall) can leave footer items un-revealed when a script jumps straight to the bottom; scrolling normally reveals them.

Before the editorial layer was added, the clone was captured against a frozen copy of the original HTML, and all 415 pages (the 391 sitemap URLs plus the paginated blog lists) matched at 1440px and 390px wide. That pixel-parity check no longer applies, because the layer deliberately changes headline sizes, spacing and the header: page height, every section height (±2px), the `<main>` class, title, description, structured-data count, no broken images and no horizontal scroll. The reviews section is checked separately against the live site (home 553px and menu 408px at 1440px; home 760px and menu 581px at 390px, with 21 review cards on each).

## Open issues

- **Booking at cutover:** the booking proxy needs `BOOKING_ORIGIN` to point at a hostname that still reaches the original app once nailsalonphoenix.com points at this site (see [Booking](#booking)). Not testable until then.
- **Some pages have two copy versions on the live site.** The live server occasionally (roughly one request in four to six) returns an alternate wording for 12 hand-ported pages: for example "Aprés Gel-X Nails" vs "Aprés Gel-X Full Set", "CBD Rejuvenating Pedicure" vs "CBD Experience Pedicure", or "Book your visit" vs "Reserve Now" on buttons. The clone uses the version captured on 2026-10-04. Area guides and blog posts have only one version.
- **Content is frozen.** Area guides, About, Contact and FAQ come from a CMS on the original; here their content lives in the repo and changes by editing files.
- **Not yet added for a domain cutover:** `sitemap.xml`, `robots.txt`, a custom 404 page and analytics. The pages' canonical URLs currently point at `https://nailsalonphoenix.com/…`.

## Regenerating pages from captured HTML

The capture and conversion scripts live in `.duplicator/tools/` (git-ignored, so they exist only on the machine that ran the capture). They are not needed to run or edit the site.

```bash
# hand-ported pages: .duplicator/orig/*.html -> src/components/sections + src/app/<route>/page.tsx
sh .duplicator/tools/run-convert.sh
# data pages: .duplicator/orig/*.html -> src/content/pages/*.json
cd .duplicator && node tools/build-content.mjs .. orig
```
