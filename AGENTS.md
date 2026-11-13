# AGENTS.md — ArixPro Website Improvement Brief

## Mission

Act as a senior product designer, UX researcher, conversion strategist, accessibility specialist, and React frontend engineer. Improve the ArixPro website as a credible **custom software development studio** website.

Work from the existing project architecture and design language. Make focused, production-quality improvements; do not rebuild the site unnecessarily. Prioritize clarity, trust, usability, accessibility, and qualified project enquiries over decorative effects.

## Non-negotiable rules

1. **One business identity:** ArixPro is a custom software development studio building web applications, APIs, SaaS platforms, booking systems, internal tools, and e-commerce systems. Remove education/course/institute messaging from all public pages, metadata, structured data, redirects, and search-facing content.
2. **Never invent proof:** Do not fabricate clients, testimonials, project outcomes, uptime, delivery metrics, certifications, partnerships, team credentials, job openings, or guarantees. Verify every claim against project-owner-approved facts. If proof is unavailable, remove the claim or label the work clearly as an illustrative demo.
3. **Do not fake functionality:** A success state must only appear after a real submission succeeds. Every visible button, filter, tab, link, form, and menu must work and have an understandable state.
4. **Preserve the stack:** React 19, TypeScript, React Router, Tailwind CSS 4, Vite, and existing components. Reuse current patterns where appropriate. Avoid adding dependencies unless essential.
5. **Do not delete working features or rewrite unrelated code.** Inspect before editing; keep changes scoped and maintainable.
6. Do not expose secrets, credentials, private client data, or internal environment values.
7. Keep the existing light visual direction unless a change clearly improves usability. Avoid adding gratuitous animations, gradients, glass effects, or visual clutter.

## Priority 0 — Fix before visual polish

### P0.1 Brand and route consistency
- Audit every route, navigation item, footer link, CTA, page title, description, Open Graph field, JSON-LD block, sitemap entry, and robots directive.
- Ensure the homepage and every internal page describe the same software studio.
- Remove or redirect obsolete education routes/content (e.g. courses, learning paths, coding classes) only after confirming their current production status and choosing appropriate permanent redirects.
- Replace the stale sitemap. Include only canonical, indexable routes that return 200:
  - `/`
  - `/services`
  - `/work`
  - `/work/analytics-dashboard`
  - `/work/ecommerce-admin`
  - `/work/crm-platform`
  - `/process`
  - `/about`
  - `/careers` only while genuinely hiring
  - `/contact`
- Remove invalid sitemap paths such as `/solutions` and `/faq` unless real pages are implemented.
- Ensure `robots.txt` points to the correct sitemap.
- Ensure every route above is prerendered and has unique title, description, canonical URL, Open Graph/Twitter metadata, and a meaningful share image. Audit `vite.config.ts`, `src/prerender.tsx`, `useSeo.ts`, and route links together; do not leave Careers or case-study routes out.
- Use the actual `og-image.png` (or a verified suitable social image) for social previews, not merely the logo.
- Add a genuine 404 page. Do not silently render the homepage for unknown URLs.

### P0.2 Make the project enquiry form real
- `src/pages/Contact.tsx` currently sets `submitted=true` locally; it does not send or persist the enquiry. This must be fixed before claiming that an enquiry was received.
- Connect the form to an approved backend/form provider or a secure server endpoint. Never put private API keys in frontend code.
- Show loading, success, validation, and recoverable error states based on the real request result. Preserve entered values on failure; prevent duplicate submissions.
- Validate name, email, and project description; add appropriate input autocomplete, labels, accessible error associations, and a privacy notice explaining how enquiry data is used.
- Keep budget optional. Explain the next step and realistic response time.
- Test direct visits and service-prefilled URLs (`?service=...`); prefilled text must remain editable and must not overwrite user edits on later renders.
- Add spam protection/rate limiting at the server/provider layer.

## Priority 1 — Trust and conversion

### Homepage (`src/pages/Home.tsx`)
- Make the first screen answer immediately: what ArixPro builds, who it helps, what business outcome it delivers, and what the visitor should do next.
- Keep one primary CTA (Start a Project / Talk to an Engineer) and one secondary CTA (View Work). Avoid competing CTA labels.
- Replace all `TODO:` client placeholders. Do not publish fictional client names or implied client endorsements.
- Distinguish actual client work from internal demos/concept projects. Label demo data and illustrative UI clearly.
- Make the solution finder understandable without technical knowledge; provide useful no-result guidance and a clear contact route.
- Ensure the hero communicates value before technology names. Technology stacks are supporting evidence, not the primary value proposition.
- Review the hero animation/typewriter behaviour for reduced-motion users and ensure it does not delay or obscure the main message.

### Services (`src/pages/Services.tsx`)
- Organize services around customer problems and outcomes, not only technical categories.
- For each service clarify: ideal customer, problem solved, included scope, deliverables, dependencies/integrations, indicative timeline, and what is excluded.
- Explain that fixed pricing follows an agreed scope; avoid implying every project can be priced or delivered in a guaranteed 2–3 weeks.
- Review the comparison matrix. Remove unsupported competitor pricing, speed claims, blanket generalizations, and disparaging statements unless independently substantiated.
- Make service selection/tabs keyboard accessible and usable on touch devices. Link each selection to a correctly prefilled enquiry.

### Work and case studies (`src/pages/Work.tsx`, `src/pages/WorkDetail.tsx`)
- Treat case studies as proof, not marketing fiction. Verify project ownership, client permission, metrics, architecture, and dates with the owner.
- Resolve inconsistent figures between homepage cards, work cards, and detail pages. Define each metric (p95/p99, query/API latency, time period, workload, environment, measurement method).
- Remove all placeholder client names. If anonymized, say so honestly; if illustrative, label it as a concept/demo and do not imply a production client deployment.
- For each case study use a consistent structure: context, problem, constraints, approach, architecture, key decisions, verified outcome, and technologies.
- Add real screenshots or clearly labelled demo visuals where permitted. Avoid presenting static mockups as live products.
- Ensure filters expose selected state accessibly, have useful empty states, and work with keyboard/touch.
- Add contextual next/previous case-study navigation and a clear project enquiry CTA.

### About (`src/pages/About.tsx`)
- Verify every quantitative claim (e.g. projects delivered, uptime, warranty), founding date, experience statement, and operational promise.
- Explain who the team is and why a client should trust its ability to deliver. Use real people/credentials only with approval.
- Resolve inconsistent ownership wording: “ownership from day one” versus repository/cloud transfer at launch.
- State what the warranty actually covers and excludes; do not imply proactive monitoring or unlimited support unless included contractually.

### Process (`src/pages/Process.tsx`)
- Make the timeline internally consistent across phases, delivery dates, weekly demos, staging access, payment milestones, and handover.
- Resolve conflicting statements such as first staging on Day 7 vs weekly/Friday staging, and code/cloud ownership on day one vs launch day.
- Explain client responsibilities, approval gates, scope-change handling, payment schedule, launch dependencies, and post-launch support in plain language.
- Avoid absolute performance or test-pass guarantees unless the measurement and acceptance criteria are defined.
- Make FAQ controls keyboard accessible and announce expanded/collapsed state.

### Careers (`src/pages/Careers.tsx`)
- Show only approved, currently open vacancies. Add last-updated/closing details where useful; remove expired roles promptly.
- Verify work location, hybrid policy, hardware, tooling, interview steps, decision SLA, and role requirements.
- Make the application path practical: clear email action with role prefilled, required application materials, and an accessible fallback.
- Do not publish internal-sounding studio claims or outdated tool/version references as candidate promises unless confirmed.

### Contact and global footer
- Remove the visible `TODO: Studio Phone / WhatsApp` placeholder. Add a phone/WhatsApp channel only when the owner supplies a verified number; otherwise omit it.
- Keep business email, location, social links, and response-time promises consistent across all pages.
- Verify every external link and use safe new-tab attributes where needed.

## Priority 2 — UX, accessibility, responsive design, and quality

### Visual system
- Establish consistent typography, spacing, container widths, heading hierarchy, border radii, card treatments, button heights, and colour tokens.
- Keep paragraphs readable and avoid overly technical copy for non-technical buyers.
- Use a clear visual hierarchy: one H1 per page, descriptive H2s, concise section intros, and consistent CTA placement.
- Avoid excessive card-on-card layouts, tiny mono labels, overuse of uppercase, and unnecessary decorative UI.
- Ensure screenshots and diagrams have consistent aspect ratios, meaningful alt text, and appropriate loading behaviour.

### Accessibility
- Target WCAG 2.2 AA where practical: semantic landmarks, logical heading order, visible focus, sufficient contrast, keyboard operation, labelled controls, descriptive link text, and accessible validation.
- Add `aria-expanded`/`aria-controls` to disclosure controls and appropriate selected-state semantics to filters/tabs.
- Respect `prefers-reduced-motion`; provide pause/stop controls for non-essential auto-moving content.
- Ensure mobile navigation can be opened, closed, dismissed with Escape, and operated by keyboard/screen readers. Keep its state synchronized with route changes.
- Do not use ARIA roles unless the complete keyboard interaction pattern is implemented.

### Responsive behaviour
- Test at 320, 375, 390, 768, 1024, 1280, and 1440px widths.
- Prevent horizontal overflow, clipped text, tiny tap targets, broken grids, and sticky-header overlap.
- Test long titles, long emails, large text, zoom, mobile menus, filters, forms, and case-study layouts.
- Check both portrait and landscape mobile layouts.

### Performance
- Audit the hero video/poster and large images. Use responsive image sizing, modern formats, dimensions to prevent layout shift, and lazy loading below the fold.
- Do not autoplay video with sound. Respect reduced motion and provide a poster/fallback.
- Avoid loading heavy animation code or media before it is needed.
- Measure Core Web Vitals and Lighthouse before/after; target good LCP, INP, and CLS rather than making unsupported speed claims.

## Engineering workflow and acceptance criteria

1. Read the relevant page, shared component, route, and metadata code before editing.
2. Build a route/content inventory and verify each public route locally.
3. Implement P0 issues first, then P1, then P2. Do not mix unrelated refactors into a fix.
4. Keep content and claims in a maintainable single source of truth where practical (e.g. project data and route metadata).
5. Run `npm run build` and `npm run lint`. Fix new errors and warnings introduced by the work.
6. Manually test all routes, direct URL loads, browser back/forward, navigation, filters, query-prefilled contact form, form success/failure, and external links.
7. Test responsive widths and keyboard-only navigation. Check reduced-motion mode.
8. Verify rendered HTML and metadata for every prerendered route, sitemap URLs, canonical URLs, and 404 behaviour.
9. Report completed changes, files touched, tests run, remaining blockers, and any factual claims that still require owner verification.

## Definition of done

- The homepage and all pages consistently represent the software studio.
- No placeholder copy, dead links, fake success states, unsupported proof, or contradictory promises remain.
- Every public route is reachable directly, has correct metadata, and is correctly represented in the sitemap.
- A real enquiry reaches the configured destination and reports success only after confirmation.
- Navigation, filters, tabs, FAQs, forms, and CTAs work on desktop and mobile and are keyboard accessible.
- Build and lint pass; responsive and route checks are documented.
