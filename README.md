# ArixPro

Marketing and enrollment site for ArixPro, a coding and technology institute for
students in Pakistan.

React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
npm run lint      # oxlint
```

## What to change before launch

Contact details are live. What remains is listed below.

**Still placeholders**

- **Social profile links** in `src/lib/site.ts` point at bare `instagram.com`,
  `linkedin.com`, `youtube.com` and `github.com`. Swap in the real handles or
  drop the entries you do not use.
- **Student testimonials** in `src/data/testimonials.ts`.

The canonical domain is `https://arixpro.com`, set consistently across
`src/lib/site.ts`, `index.html` (canonical, Open Graph, JSON-LD),
`public/robots.txt` and `public/sitemap.xml`. No `www`, always `https`. If that
ever changes, those are the five places to update together.

**Where the editable content lives**

| What | Where |
| --- | --- |
| WhatsApp number, email, socials, location, site URL | `src/lib/site.ts` |
| Courses, curriculum, projects, outcomes, durations | `src/data/courses.ts` |
| Student testimonials | `src/data/testimonials.ts` |
| FAQ questions and answers | `src/data/faq.ts` |
| Roadmap stages | `src/data/roadmap.ts` |
| Navigation and footer links | `src/data/navigation.ts` |
| Page titles, meta descriptions, Open Graph, JSON-LD | `index.html` |

Testimonials ship as clearly-labelled placeholders. Replace the `quote`, `name`
and `context` fields with real, permitted student feedback and set
`isPlaceholder: false` — the "placeholder" badge disappears on its own.

The social preview image lives at `public/og-image.png` (1200×630). Replace it
whenever the headline or branding changes.


## Enrollment form

The form posts to [Web3Forms](https://web3forms.com), which emails each
submission to `support.arixpro@gmail.com`. There is no server to run and no
spreadsheet to check.

`submitEnrollment` in `src/lib/enrollment.ts` is the only integration point. It
converts the form's internal slugs into readable labels first, so the email
reads `Course: Python Programming`, not `course: python`, and sets `replyto` to
the student's address so replying in your inbox answers them directly.

### The access key

`WEB3FORMS_ACCESS_KEY` in `src/lib/enrollment.ts` identifies the destination
inbox. It is **public by design** and ships in the client bundle, which is how
Web3Forms is meant to be used.

Because it is public, anyone who reads the bundle could post to it. Once the
site is on its real domain, open the Web3Forms dashboard and **restrict the key
to that domain** so submissions from anywhere else are rejected.

To send enquiries somewhere else, generate a new key for that address and
replace this one. Nothing else changes.

### Testing it

Web3Forms rejects non-browser user agents, so `curl` and most headless tools get
a `403` even with a valid key. Test from a real browser.

### Spam

Spam filtering is left to Web3Forms' server side, deliberately.

An earlier version carried a client-side honeypot: a hidden `company` input that
bots fill and people cannot see. Chrome's autofill matched the name
semantically, filled it from the saved address profile, and the form classified
a real person as a bot and dropped their submission without a trace.
`autocomplete="off"` does not reliably prevent this.

The trade is asymmetric. A false positive costs a paying student; a false
negative costs one junk email. If spam ever becomes a real problem, add a proper
CAPTCHA with a verified token rather than a silent client-side heuristic, and
enable the matching setting in the Web3Forms dashboard at the same time.

### Switching backends

Only `submitEnrollment` changes. The UI, validation, honeypot, error state and
the `EnrollmentPayload` shape are all independent of the destination, so moving
to Formspree, an Apps Script or your own API is a single-function edit.

## Theming

Light and dark themes share one set of utilities. Colours are declared as plain
custom properties in `src/index.css`, then mapped into Tailwind by reference so
opacity modifiers compile to `color-mix()` and follow the active theme.

The numeric steps encode role, not lightness: `surface-950` is always the page
background and `content-50` is always the strongest text, in both themes.

Depth is theme-specific. Dark leans on glow and translucency; light leans on a
tinted page background with white cards, two-part shadows (`--sh-raise`,
`--sh-card`, `--sh-float`) and a specular `gloss` utility. Both are declared per
theme, so a card written as `bg-surface-900 shadow-raise gloss` reads correctly
in either.

- Change the palette or the depth model: the `:root` and
  `:root[data-theme='light']` blocks in `src/index.css`.
- Change which theme new visitors get: `DEFAULT_THEME` in `src/lib/theme.ts`,
  and the matching fallback in the inline script in `index.html` (that script
  applies the saved theme before first paint, so the page never flashes).

The user's choice persists in `localStorage` under `arixpro-theme`.

## Deploying

This is a client-routed single page app, so the host must serve `index.html` for
every path. Without that rule, a direct hit on `/courses/python` returns a 404.

- Netlify / Cloudflare Pages: `public/_redirects` is already in place.
- Vercel: `vercel.json` is already in place.
- Nginx: `try_files $uri $uri/ /index.html;`
- Apache: a `mod_rewrite` fallback to `/index.html`.

Build command `npm run build`, publish directory `dist`.

### Attaching arixpro.com on Vercel

The `vercel.json` rewrite is already in place, so deep links work as soon as the
project is imported. After that:

1. Add `arixpro.com` under the project's **Domains** tab and point the
   registrar's nameservers or A/CNAME records at Vercel.
2. Vercel serves both the apex and `www`. Keep the apex as primary and let `www`
   redirect to it, because every canonical, Open Graph and sitemap URL in this
   project is the apex without `www`. Serving both without a redirect splits
   search ranking across two addresses.
3. Vercel issues the TLS certificate automatically; nothing in the code needs to
   change for HTTPS.
4. Restrict the Web3Forms access key to `arixpro.com` in the Web3Forms
   dashboard once the domain resolves.

Until the domain is attached the site runs on a `*.vercel.app` address while the
meta tags still point at `arixpro.com`. That is harmless and self-corrects the
moment the domain goes live, but avoid submitting the sitemap to Google Search
Console before then.

## Structure

```
src/
  components/       reusable UI, layout chrome, and composed cards
    ui/             Button, Container, Section, SectionHeading, Logo, ThemeToggle …
    layout/         Navbar, Footer, WhatsAppButton, Layout
  sections/         homepage sections, each self-contained
  pages/            one file per route
  data/             all editable content
  lib/              site config, theme, SEO, enrollment, motion tokens
```

## Notes

- Routes are imported eagerly on purpose. Behind `React.lazy`, the scroll-reveal
  animations never receive their first IntersectionObserver callback and content
  below a page hero stays invisible; splitting also saved under 5 kB gzipped
  here, since every route shares the same component and motion code.
- All motion respects `prefers-reduced-motion`.
