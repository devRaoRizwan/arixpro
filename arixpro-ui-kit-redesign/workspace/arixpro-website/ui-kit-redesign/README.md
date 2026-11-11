# ArixPro Redesign - Full UI Kit - Airbnb + Linear + Stripe

Source: VoltAgent awesome-design-md, Airbnb DESIGN.md (432 lines), Linear, Stripe, tree with 85 designs.
Model: Airbnb main, Linear for product proof, Stripe for thin type, no gradient mesh.

## Tokens
See tokens.css. White #FFFFFF, surface #F7F6FC, ink #241044, body #4A4458, muted #6B6578, hairline #E4DEF2, purple #6336C5 single accent, used scarcely, 1-2 per page, blue #315BDA links only.
Type: Outfit, IBM Plex Mono for code. Display 28px 600, section 22px 500, title 16px 600, body 16px 400 1.5, body-sm 14px 400 1.43, caption 14px 500, button 16px 500, nav 16px 600.
Rounded: 4, 8, 14, 20, 32, 9999. Spacing 2,4,8,12,16,24,32,48,64. Max 1280px, section 64px, nav 80px.
Elevation: flat 95%, one shadow tier only, on hover / dropdowns.

## Components - all in components/
Navbar, PillBar, ProductTabs, ProjectCard, ToolkitTable, CodeWindow, DashboardMock, ProcessList, ContactForm, Footer, Buttons, Forms, Alerts, Badges, Tables, Tabs, Pagination, Modal, Toast, EmptyState, LoadingState, ErrorState

## Pages - all in pages/, MULTI-PAGE, NOT one pager
Home.jsx, Services.jsx, Work.jsx, WorkDetail.jsx, Process.jsx, About.jsx, Contact.jsx
Routes in App.jsx, react-router-dom. Each page has its own URL, title, nav, footer.
- / Home
- /services
- /work
- /work/sitescopia, /work/jobharvester, /work/bomwatcher
- /process
- /about
- /contact

## Images - in images/
- arixpro-pomegranate.png, arixpro-logo-horizontal.svg - ONLY logo, pomegranate
- media-generation-sitescopia-dashboard-mock-*.webp - SiteScopia, 38 checks, 34/38
- media-generation-jobharvester-board-mock-*.webp - JobHarvester, mock data, live site shows No jobs yet, fix before linking live
- media-generation-bomwatcher-scanner-mock-*.webp - BOMWatcher, 128 components, 3 high risk

## Anti-AI rules - still apply
No indigo #6366f1/#4f46e5, no gradients, no neon, no blobs, no wavy dividers, no mesh. No Inter, no Roboto. No cards inside cards, no thick left border. No emojis, no generic illustrations, spheres removed. Banned words: delve, unlock, elevate, seamless, harness, realm, supercharge, landscape, tapestry, game-changer. No "not just X, it's Y". Real data only.

## How to use
1. Copy tokens.css to src/index.css
2. Copy components/ and pages/ to src/
3. Copy images/ to src/assets/
4. Install react-router-dom, run npm run dev, check each page at its URL
5. Send LLM-MESSAGE.md to your coding LLM, with this zip attached
