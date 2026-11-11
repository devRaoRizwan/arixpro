# Message to send to your coding LLM - copy and paste this whole message, attach the zip

Build me the ArixPro website in React + Vite, multi-page, NOT a one-pager. Use the attached UI kit, tokens.css, components, pages, and images. Do not invent a new design.

DESIGN SOURCE
I redesigned it from VoltAgent awesome-design-md, mainly Airbnb DESIGN.md, plus Linear and Stripe. Airbnb is the main model: white canvas, single accent carrying every CTA, modest type, soft rounded shapes, pill bar, photo-first cards, one shadow tier only. Linear: product UI screenshots are the protagonist. Stripe: thin display, tabular numbers, pill CTA, NO gradient mesh.

TOKENS - use exactly, do not change them
- Canvas #FFFFFF, surface #F7F6FC, surface soft #F7F7F7, ink #241044, body #4A4458, muted #6B6578, hairline #E4DEF2
- Primary purple #6336C5, active #4F2AA0, disabled #D9CFF5, blue #315BDA for links only
- Fonts: Outfit for headings and body, IBM Plex Mono for code and labels. No Inter, no Roboto, no system sans stack.
- Type: display 28px 600, section 22px 500, title 16px 600, body 16px 400 line-height 1.5, body small 14px 400, caption 14px 500, button 16px 500, nav 16px 600
- Rounded: buttons 8px, cards 14px, pill 9999px, category strip 32px
- Spacing: 8px base, section 64px, max width 1280px, nav height 80px, card gutters 16px
- Elevation: flat on 95% of surfaces, one shadow only: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px, rgba(0,0,0,0.1) 0 4px 8px, on hover and dropdowns only
- No gradients, no neon glows, no blobs, no wavy dividers, no mesh gradients, no glass

LOGO - ONLY THIS
Use the pomegranate logo in images/arixpro-pomegranate.png and images/arixpro-logo-horizontal.svg, transparent, everywhere. Do not use any other logo, no paint splash, no eagle, no plain A.

MULTI-PAGE ROUTES - build all of these, with react-router-dom, each page separate, not sections on Home
- / Home: editorial hero, headline "We Build Web Apps, APIs and SaaS That Scale", 28px, pill "Start a project" bar with What do you need / Stack / Timeline and a purple orb button, 3 product tabs Web Apps / APIs / SaaS, work preview, toolkit strip, contact teaser
- /services: Web Applications, Backend Engineering, APIs, SaaS Products, each with stack, deliverable, and a real example
- /work: full project list, filter by stack, photo-first cards, Live badge top-left, project UI screenshot first
- /work/sitescopia: SiteScopia, website analyzer, 38 checks per scan, FastAPI + React, dashboard mock image, scan table 34/38 passed, live + GitHub links
- /work/jobharvester: JobHarvester, job board, Django + PostgreSQL + Celery, board mock image, note in code: live site currently shows No jobs yet, do not claim 1,400+ live listings as live
- /work/bomwatcher: BOMWatcher, AI supply-chain scanner, FastAPI + LLM + RAG, scanner mock image, BOM table, AI summary
- /process: Discover, Build, Ship, Support, numbered list, each with a deliverable
- /about: Rao Rizwan, backend engineer, 2 years Python backend in production, Django REST APIs at 100,000+ requests a day, links devraorizwan.online, GitHub, LinkedIn, no stock photo
- /contact: form Name, Email, Project type, Message, WhatsApp +92 312 0418701, arixpro.com, no email address

TOOLKIT - show as a table, not cards
Backend: Python 3.12, Django 5, Django REST Framework, FastAPI, Celery, RabbitMQ, PostgreSQL, Redis, SQLAlchemy
Frontend: React 18 + Vite, Next.js only where SSR/SEO needed, TypeScript
Data: PostgreSQL, Redis, SQLAlchemy
DevOps: Docker, GitHub Actions CI/CD, AWS, tests + security scan must pass before deploy

COMPONENTS - build all of these, with all states
Navbar 80px white with hairline, Footer 3-column + legal band, PillBar, ProductTabs, ProjectCard, ToolkitTable, CodeWindow (real FastAPI code, dark #241044), DashboardMock, ProcessList, ContactForm, Buttons (primary, secondary, tertiary, disabled, loading), Forms (with errors), Alerts, Badges, Tables, Tabs, Pagination, Modal, Toast, Empty, Loading, Error

ANTI-AI RULES - follow every one
No Tailwind indigo #6366f1 / #4f46e5, no purple-to-blue gradients, no blobs, no generic illustrations, no spheres, no emojis as UI, no cards inside cards, no thick coloured left border. No banned words: delve, unlock, elevate, seamless, harness, realm, supercharge, landscape, tapestry, game-changer. No "It's not just X, it's Y". Real data only, no fake testimonials, no fake metrics like 10x faster or 99.9% satisfaction, no fake names like Sarah Jenkins or Acme Corp, no fake projects.

GOAL - usability, not a design award
The site must be easy to use: a visitor understands in 5 seconds what ArixPro builds, sees real stack and real work, and can contact on WhatsApp in 30 seconds. Mobile first, 320px to 1440px, nav collapses below 744px, sticky bottom CTA on mobile, buttons minimum 48x48px.

START NOW
1. Set up the React + Vite project with react-router-dom, copy tokens.css to src/index.css, copy components and pages from the kit.
2. Build Home first, then Work and the 3 project detail pages, then Services, Process, About, Contact.
3. Run npm run dev, check every route works, no broken links, no missing images.
4. Tell me the routes you built and any real screenshot or detail you still need from me, do not invent it.
