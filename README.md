# ArixPro — Software House

Full-cycle software solutions company website engineering custom web applications, high-throughput backends, native/cross-platform mobile apps, complete digital ecosystems, and workflow automation.

React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide

## Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React + Custom SVG Vector Branding
- **Design System**: Royal Purple, Midnight Indigo/Dark Blue, and Stark White
- **Prerendering**: Vite Prerender Plugin (Static HTML generated per route for instant loading and SEO)

## Commands

```bash
npm install
npm run dev       # Start local development server
npm run build     # Type-check + compile + static HTML prerender to dist/
npm run preview   # Preview the production build locally
npm run lint      # Run oxlint for fast code verification
```

## Page Structure

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | `HomePage` | Hero with 3D Connected Ecosystem, Bento Grid Services, Process, Case Studies, Stats, Testimonials |
| `/services` | `ServicesPage` | Full breakdown of Web, Backend, Mobile, Ecosystems, Automation & DevOps |
| `/solutions` | `SolutionsPage` | Architectural solutions for SaaS, multi-platform ecosystems, automation & scaling |
| `/work` | `WorkPage` | Verified real-world production case studies with quantifiable impact metrics |
| `/about` | `AboutPage` | Engineering culture, craftsmanship standards, and client commitments |
| `/faq` | `FaqPage` | Transparent answers regarding IP ownership, sprint cadence, and SLAs |
| `/contact` | `ContactPage` | High-intent project intake form for timeline, budget, and scope alignment |
| `/links` | `LinksPage` | Clean social bio links page |
| `/404` | `NotFoundPage` | Custom 404 page |

## Content & Configuration

- **Company Metadata & Channels**: `src/lib/site.ts`
- **Services & Offerings**: `src/data/services.ts`
- **Solutions**: `src/data/solutions.ts`
- **Case Studies**: `src/data/caseStudies.ts`
- **FAQs**: `src/data/faq.ts`
- **Navigation & Links**: `src/data/navigation.ts`
