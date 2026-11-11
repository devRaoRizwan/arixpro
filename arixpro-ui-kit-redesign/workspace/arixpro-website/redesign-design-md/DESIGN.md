# ArixPro Website Redesign - DESIGN.md - from awesome-design-md
Sources fetched 2026-11-11:
- https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/airbnb/DESIGN.md
- https://github.com/VoltAgent/awesome-design-md/tree/main/design-md (85 designs: airbnb, linear.app, stripe, vercel, notion, figma, apple, nike, etc.)
- Linear DESIGN.md, Stripe DESIGN.md, read in full for overview, colours, typography, layout

## Synthesis - what we take, what we leave
### From Airbnb - MAIN MODEL
- White canvas #FFFFFF, ink #222222 -> ArixPro ink #241044, body #4A4458
- Single accent carries every primary CTA: Rausch #ff385c -> ArixPro purple #6336C5, used scarcely, 90% white + ink, 1-2 purple moments per page
- Modest type: display 22-28px, weight 500/600, not heavy 700+. Photography / product UI carries visual weight, not typographic muscle
- Soft shapes: buttons 8px, cards 14px, search / pill 9999px, category strip 32px, no hard corners except body grid
- Pill search bar, divided by hairlines, circular accent orb at end -> ArixPro: pill "Start a project" bar, What do you need / Stack / Timeline, purple orb button
- Photo-first cards, 14px clipping, Guest favorite badge top-left -> ArixPro: Work cards, project UI screenshot first, "Live" badge top-left, stack tags below
- One shadow tier only: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px, rgba(0,0,0,0.1) 0 4px 8px, on hover / dropdowns only. 95% flat.
- Spacing 8px base, section 64px, max width 1280px, card gutters 16px, footer 3-column, legal band
- Top nav 80px, white, 1px hairline bottom, logo left, product tabs centre, utilities right. Mobile <744px collapses to logo + hamburger, sticky bottom CTA.
- Responsive: mobile 1-up, tablet 2-up, desktop 4-up, wide cap 1440px

### From Linear - product proof
- Dense product UI screenshots framed in panels, chrome minimal so screenshots do the work
- Single chromatic accent, hairline borders, negative tracking on display (-1.8px at 56px, -1.0px at 40px)
- Surface ladder, no gradients, no spotlight cards
- Take: product screenshots are the protagonist, not decoration. Use the 3 mock project UIs: SiteScopia, JobHarvester, BOMWatcher
- Leave: dark canvas #010102. ArixPro stays white, per Rao's white bg rule and Anti-AI rules.

### From Stripe - editorial type, NOT gradient
- Thin display, negative tracking, tabular figures for numbers, pill buttons 8px 16px
- Take: thin display, tabular numbers in dashboard tables, pill CTA, cream / soft band as an interlude
- Leave: gradient mesh top third, indigo #533afd, pastel mesh. Anti-AI rules ban purple-to-blue gradients and mesh gradients. Use white + purple accent only.

## ArixPro tokens - adapted
- Canvas #FFFFFF, Surface soft #F7F6FC, Surface card #FFFFFF, Ink #241044, Body #4A4458, Muted #6B6578, Hairline #E4DEF2, Hairline soft #EBEBEB
- Primary #6336C5, Primary active #4F2AA0, Primary disabled #D9CFF5, Blue #315BDA links only, Green #2ECC40 logo seed only
- Typography: Outfit, IBM Plex Mono for code/labels. No Inter, no Roboto. Display 28px 600, Section 22px 500, Title 16px 600, Body 16px 400 1.5, Body small 14px 400 1.43, Caption 14px 500, Button 16px 500, Nav 16px 600
- Rounded: none 0, xs 4, sm 8, md 14, lg 20, xl 32, full 9999
- Spacing: 2,4,8,12,16,24,32,48,64 section
- Elevation: flat 95%, one shadow tier above, on hover only

## MULTI-PAGE, NOT ONE PAGER
Sitemap, 8 pages, each with its own URL, nav, footer, SEO title:
1. / - Home: editorial hero 28px, pill project bar, 3 product tabs (Web Apps, APIs, SaaS), work preview 4-up, toolkit strip, contact teaser
2. /services - Services: Web Applications, Backend Engineering, APIs, SaaS Products, each full page section, stack table, deliverable, example
3. /services/web-applications, /services/backend, /services/apis, /services/saas - or 1 services page with 4 anchored sections? No, separate pages in React Router, see below
4. /work - Work: full-bleed project list, filters by stack, each project card photo-first
5. /work/sitescopia - SiteScopia detail: 38 checks, dashboard mock, stack, live + GitHub, scan table
6. /work/jobharvester - JobHarvester detail: Django, PostgreSQL, Celery, board mock, note live site shows No jobs yet, fix before linking live
7. /work/bomwatcher - BOMWatcher detail: FastAPI, LLM, RAG, scanner mock, BOM table, AI summary
8. /process - Process: Discover, Build, Ship, Support, numbered list, deliverables, timeline
9. /about - About: Rao Rizwan, backend engineer, 2 years Python backend, Django REST APIs at 100,000+ requests a day, links devraorizwan.online, GitHub, LinkedIn, no stock photo
10. /contact - Contact: form Name, Email, Project type, Message, WhatsApp +92 312 0418701, arixpro.com, no email

React+Vite routing: react-router-dom, src/pages/Home.jsx, Services.jsx, Work.jsx, WorkDetail.jsx, Process.jsx, About.jsx, Contact.jsx, src/components/Navbar.jsx, Footer.jsx, ProjectCard.jsx, ToolkitTable.jsx, src/App.jsx with Routes. Each page is a real page, not a section on Home. Home links to the other pages, it does not contain them all.

## Anti-AI rules still apply
No indigo #6366f1/#4f46e5, no gradients, no neon, no blobs, no wavy dividers, Outfit + IBM Plex Mono only, no cards inside cards, no thick left border, no emojis, no generic illustrations, spheres removed, banned words delve, unlock, elevate, seamless, harness, realm, supercharge, landscape, tapestry, game-changer, no "not just X, it's Y", real data only.
