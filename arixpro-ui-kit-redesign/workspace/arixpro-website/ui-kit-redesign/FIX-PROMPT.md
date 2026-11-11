# FIX EVERYTHING - Prompt to send to your coding LLM - arixpro.com - copy and paste this whole message, attach the UI kit zip

Fix arixpro.com, the live site, homepage first, then all pages. Do not redesign it from scratch, fix the exact defects below, in order, and check each one visually at 1919px desktop and at 390px mobile before you say it is done.

SITE: https://arixpro.com/
STACK: React + Vite, multi-page, NOT a one-pager. Routes: / Home, /services, /work, /work/sitescopia, /work/jobharvester, /work/bomwatcher, /process, /about, /contact
LOGO: pomegranate only, images/arixpro-pomegranate.png, horizontal SVG in images/
TOKENS: White #FFFFFF, surface #F7F6FC, ink #241044, body #4A4458, muted #6B6578, hairline #E4DEF2, purple #6336C5 single accent, blue #315BDA links only. Fonts Outfit + IBM Plex Mono only, no Inter, no Roboto. Display 28px 600, section 22px 500, body 16px 400. Rounded buttons 8px, cards 14px, pill 9999px. Max width 1280px, section 64px, nav 80px. One shadow tier only, on hover.

## 1. CODE SAMPLE IS INVISIBLE - FIX FIRST, worst defect
Section: "Clean Code Architecture. Zero Fragile Hacks.", right-hand panel.
Problem: dark header with traffic-light dots, FastAPI / Django 5 REST / React tabs, views.py, Copy, then a large empty white box. Code renders near-white / pale lavender on white, ghost outlines only at 2x zoom. Switching tabs does not fix it.
Fix: code window background must be dark #241044, code text must be light, at least #FFFFFF for plain text, #C9B8F5 for keywords, #8CEA9A for strings, #7FB3FF for functions, with a minimum contrast ratio 4.5:1. Check the CSS: no white text on white background, no light lavender text on white, no transparent background on the code element. Make all three tabs work: FastAPI (Python), Django 5 REST, React 18 (TypeScript), each with real code, each readable. Test at 2x zoom. If a tab has no code, remove the tab, do not leave a blank panel.

## 2. CASE STUDY SCREENSHOTS CROPPED, LIVE BADGE COVERS THE HEADER - FIX SECOND
Section: "Shipped Systems & Live Implementations", 3 cards: SiteScopia, JobHarvester, BOMWatcher.
Problem: screenshots are zoomed/cropped inside a fake browser frame, green Live pill sits on top of the product's own header text. SiteScopia pill covers part of "SiteScopia", JobHarvester "J" is cut off at the left edge, BOMWatcher only "Watcher" is readable, "BO" is cut off. JobHarvester also has a stray black pill floating mid-image: "Live board in active maintenance (honest status)".
Fix: use the full mock images at their real aspect ratio, object-fit: contain, not cover, no cropping, no zoom. Put the Live badge BELOW the image, in the meta area, not overlaid on the image. Remove the fake browser frame, or make the frame padding 16px so the image never touches the edge. Remove the stray black pill, put the honest status as plain text under the description: "Live board in active maintenance". All 3 card images must show the full product header.

## 3. HERO TOO TALL, DASHBOARD CLIPPED, STATS COLOURS RANDOM - FIX THIRD
Section: Hero, "We Build Web Apps, APIs and SaaS That Scale."
Problem: hero is about 2 screens tall, dominated by a huge SiteScopia dashboard in a browser-inside-a-browser frame, cropped mid-table, "Canonical Link" and the row below are cut off. Stats below use inconsistent accent colours: one value in orange, "38 Checks" in purple, others in black. Large dead white gap between stats and next grey section.
Fix: hero height maximum 100vh on desktop, headline + subhead + 2 buttons on the left, dashboard on the right at 60% width, maximum height 520px, object-fit: contain, full table visible, no cropping at the viewport edge. Remove the browser-inside-a-browser frame. Stats: all 4 values in the same style, ink #241044, 28px 600, labels muted 14px, no orange, no random purple, only the number in ink. Remove the dead white gap: section padding 64px top and bottom, no more than that. Stats are: 100k+ Daily API Requests Handled, 38 Checks Automated Audit per Scan, Python 3.12 Strictly Typed Backends, 100% Codebase & IP Ownership.

## 4. CARDS DO NOT LINE UP - FIX FOURTH
Section: "Full-Cycle Software Capabilities", 4 cards, and case study cards.
Problem: titles wrap differently, "Backend Engineering & APIs" and "Mobile Ecosystem & Automation" wrap to 2 lines while others do not, body copy and tag pills sit at different heights, icons small and lost at the top. SiteScopia tags wrap to 2 rows, others fit 1, JobHarvester has a large empty gap between description and tags.
Fix: all cards in a row must have equal height, display: flex, flex-direction: column. Title area fixed height 56px, 2 lines maximum, same font size. Body copy flex: 1, so tags always sit at the bottom of the card. Tag area fixed height, 1 row, wrap only if needed, same height on all cards. Icons 32px, top left, with 16px padding below, not lost in white space. No empty gaps inside a card.

## 5. TOOLKIT TABLE, CTA, FOOTER - FIX FIFTH
Section: "Verified Engineering Toolkit", CTA "Have a project? Let's build it right.", footer.
Problem: dense 5-column table reads like pasted documentation, text wraps mid-phrase, "Core language for low-latency backend services and async / jobs", "High-throughput APIs (SiteScopia, / BOMWatcher)", Standard column mixes real versions with slogans "Multi-stage lean images", "Automated CI/CD", "Infrastructure as Code". CTA box mostly empty underneath, both buttons wrap to 2 lines "WhatsApp: +92 312 / 0418701" and "Submit Project / Brief" at different heights. Footer leaves right third blank, 3 sparse link columns, tiny GitHub link, "©2026 ArixPro (arixpro.com)", no logo, description, socials, or contact block.
Fix: toolkit table: reduce to 4 columns, Technology / Domain / Capability / Production Application, remove the Standard column, or make Standard only real versions: Python 3.12, FastAPI, Django 5.x / DRF 3.15, Celery 5.4, React 18, TypeScript 5.x, PostgreSQL 16, Redis 7.2, SQLAlchemy 2.0, Docker, GitHub Actions, AWS. No slogans in that column. Cell text must not wrap mid-phrase, use white-space normal with a minimum column width 140px, and horizontal scroll on mobile, not a squeezed 5-column table.
CTA: buttons must not wrap, white-space: nowrap, minimum width, same height 48px, same baseline. WhatsApp button text: "WhatsApp +92 312 0418701" on one line. Remove the empty space under the CTA text, padding 48px, not 100px+.
Footer: add pomegranate logo left, a 2-line description "ArixPro builds web apps, APIs and SaaS. Python, Django, FastAPI.", contact block WhatsApp +92 312 0418701, arixpro.com, GitHub github.com/devRaoRizwan, LinkedIn linkedin.com/in/raorixwan, and 3 link columns, no blank right third. Copyright "©2026 ArixPro".

## 6. OTHER CHEAP TELLS - FIX ALL OF THESE TOO
- Typography: headings are too heavy and condensed, body too small and grey. Use display 28px 600, body 16px 400, line-height 1.5, no tiny purple monospace eyebrow labels as the only hierarchy trick. Remove "SOFTWARE DEVELOPMENT COMPANY · FULL ECOSYSTEM" and "PRODUCTION STACK" eyebrow labels, or make them 12px 600, muted, not purple.
- Colour: use only white, #F7F6FC, #241044, #4A4458, #6336C5 sparingly. Remove random orange stats, green check/shield icons where they are not needed, blue WhatsApp link, red/yellow/green window dots. Use monochrome Lucide icons, ink colour only.
- Spacing: section padding 64px, no 100px+ empty white bands. Remove the dead gaps after services, after case studies, under the CTA. Cramped areas: table rows padding 12px, button padding 14px 24px, minimum height 48px.
- Imagery: no real photography, people, clients, or logos anywhere. Do not add stock photos or fake faces. Use only the 3 product UI mock images, the pomegranate logo, and monochrome icons.
- Copy: remove generic lines "don't wake you up at 3 AM" and repeated "production / verified / strict". Write direct, concrete copy. No banned words: delve, unlock, elevate, seamless, harness, realm, supercharge, landscape, tapestry, game-changer. No "It's not just X, it's Y". Real data only: SiteScopia 38 checks per scan, JobHarvester Django + PostgreSQL + Celery, BOMWatcher FastAPI + LLM + RAG, Django REST APIs at 100,000+ requests a day. No fake stats, testimonials, or names.

## 7. MOBILE - CHECK THIS TOO
- 390px viewport: toolkit table must scroll horizontally, not squeeze to 5 columns.
- Hero dashboard must scale down, not crop.
- CTA buttons must stack full-width, not wrap to 2 lines.
- Nav collapses below 744px to logo + hamburger, sticky bottom CTA appears only after scrolling.

## DONE WHEN
1. Code sample is readable in all 3 tabs, at 2x zoom, contrast 4.5:1 or better.
2. All 3 case study headers are fully readable, Live badge is below the image, no stray pill.
3. Hero fits in 100vh, dashboard is fully visible, stats are all the same style.
4. All cards in a row line up, tags at the bottom, no empty gaps.
5. Toolkit table is 4 columns, Standard is versions only, CTA buttons are one line each, footer is full, with logo, description, and contact.
6. No 100px+ dead white bands, no random accent colours.
7. npm run dev works, every route works, no console errors, no broken images, mobile 390px has no horizontal overflow.

Tell me what you fixed, in order, and what you still need from me, do not invent real screenshots, testimonials, or client logos.
