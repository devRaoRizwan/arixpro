# ArixPro

Backend-first software studio in Lahore, Pakistan, working worldwide. Builds Python backends, APIs and SaaS platforms for startups and growing businesses.

## Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: react-router-dom
- **Styling**: Single hand-written CSS file (`src/index.css`) with design system tokens (Space Grotesk, Inter, JetBrains Mono)
- **Icons**: lucide-react
- **Prerendering**: vite-prerender-plugin (static HTML prerendered for all public routes)
- **Analytics**: @vercel/analytics

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start local development server
npm run build     # Typecheck (tsc -b) and prerender to dist/
npm run preview   # Preview production build locally
```

## Content Rule

ALL site content lives in `src/data/` as typed TypeScript files:
- `src/data/site.ts`: Company info, navigation links, and social URLs.
- `src/data/services.ts`: The 3 service offerings with outcomes, deliverables, timelines, and pricing.
- `src/data/projects.ts`: The 4 studio products with architecture specs, problem statements, and stack tags.
- `src/data/faq.ts`: Transparent questions and answers on pricing, ownership, timezones, and support.

Pages import content from `src/data/` — no copy is hard-coded inside components.

## Routes

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Hero with live JobHarvester API code panel, proof strip, services summary, selected work, 4-step process, founder section, FAQ, and project CTA. |
| `/services` | Services | 3 core service offerings with deliverables, pricing, timelines, and Rescue & Scale audit band. |
| `/work` | Work | The studio's 4 public products: JobHarvester, BOMWatcher, SiteScopia, and Jobbr. |
| `/work/:slug` | Project Detail | Detailed breakdown of each product: problem, what we built, architecture flow, stack, and demo links. |
| `/process` | Process | 4-phase delivery model from scope to launch, deliverables checklist, and complete studio FAQ. |
| `/about` | About | Independent studio manifesto, engineering standards, and operational principles. |
| `/contact` | Contact | Real project enquiry form with Formspree integration and prefill support (`?service=<slug>`). |
| `*` | 404 | Helpful not-found page with links back to Home and Work. |

## Before Deploying

1. Create a form at [formspree.io](https://formspree.io) set to send email notifications to `contact@arixpro.com`.
2. Set `VITE_FORMSPREE_ID` in your Vercel project environment variables.
3. Submit a real test enquiry through `/contact` and confirm that the notification email arrives.
4. Re-count the live JobHarvester listing figure and update `src/data/projects.ts` and `src/pages/Home.tsx` together before launch.
