/**
 * Renders the Google Business Profile photo set to PNG.
 *
 * ArixPro has no premises to photograph and no faces on camera, so the
 * "business photos" are brand graphics: the mark, a cover, and one card per
 * fact from brand/BRAND.md. Plain HTML rendered through headless Chrome, the
 * same pipeline as the rest of brand/.
 *
 *   node scripts/business-photos.mjs
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'brand', 'business')
const work = mkdtempSync(join(tmpdir(), 'arixpro-photos-'))

const CHROME = process.env.CHROME_BIN ?? 'google-chrome'
const FONTS =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600' +
  '&family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@600;800&display=swap'

/* Palette, straight from brand/BRAND.md. Dark theme only. */
const css = `
@import url('${FONTS}');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --sf-950:#06080a; --sf-900:#0a0d11; --sf-850:#0e1217; --sf-800:#12171d;
  --sf-700:#1e2530; --sf-600:#2a333f;
  --ct-50:#f4f7fa; --ct-100:#e4e9f0; --ct-300:#a3aebe; --ct-400:#7c8798; --ct-500:#5c6676;
  --ac-400:#4bb265; --ac-300:#7fcb92; --ac-500:#2f9449; --ac-600:#1e7738;
  --display:'Plus Jakarta Sans','Inter',ui-sans-serif,system-ui,sans-serif;
  --sans:'Inter',ui-sans-serif,system-ui,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,'Menlo',monospace;
}
html, body { background:#06080a; }
body { font-family: var(--sans); -webkit-font-smoothing: antialiased; }

/* Standard graphic ground: sf-950, 64px grid, one green glow top-left. */
.frame {
  position: relative; overflow: hidden; background: var(--sf-950);
  display: flex; flex-direction: column; justify-content: space-between; gap: 20px;
}
.frame::before {
  content:''; position:absolute; inset:0;
  background-image:
    linear-gradient(to right, rgb(255 255 255 / .035) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(255 255 255 / .035) 1px, transparent 1px);
  background-size: 64px 64px;
}
.frame::after {
  content:''; position:absolute; inset:0;
  background: radial-gradient(58% 46% at 22% 8%, rgba(75,178,101,.26), transparent 70%);
}
.frame > * { position: relative; z-index: 1; }

.lockup { display:flex; align-items:center; gap:14px; }
.lockup svg { display:block; }
.lockup span { font-family: var(--display); font-weight:800; color:var(--ct-50);
  letter-spacing:-.03em; font-size:34px; }

.eyebrow { font-family: var(--mono); font-weight:700; font-size:15px;
  letter-spacing:.26em; text-transform:uppercase; color:var(--ac-400); }
h1 { font-family: var(--display); font-weight:800; color:var(--ct-50);
  letter-spacing:-.035em; line-height:1.03; font-size:66px; }
h1 .dim { color:var(--ct-300); }
h1 .dot { color:var(--ac-400); }
.sub { font-family: var(--sans); font-weight:400; color:var(--ct-300);
  font-size:21px; line-height:1.5; max-width:78%; margin-top:18px; }
.foot { display:flex; align-items:flex-end; justify-content:space-between; }
.foot .site { font-family: var(--mono); font-weight:500; font-size:21px; color:var(--ct-100); }
.foot .meta { font-family: var(--mono); font-weight:500; font-size:16px; color:var(--ct-400);
  text-align:right; letter-spacing:.08em; line-height:1.5; }

/* Card grid for the "what we teach" style photos. */
.cards { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:16px; }
.card { background:var(--sf-900); border:1px solid var(--sf-700); border-radius:14px;
  padding:14px 20px; }
.card .n { font-family:var(--mono); font-weight:700; font-size:14px; letter-spacing:.2em;
  color:var(--ac-400); }
.card .t { font-family:var(--display); font-weight:800; font-size:24px; color:var(--ct-50);
  letter-spacing:-.02em; margin-top:8px; }
.card .d { font-family:var(--sans); font-size:15px; color:var(--ct-400); line-height:1.45;
  margin-top:6px; }

.rows { display:flex; flex-direction:column; gap:14px; margin-top:22px; }
.row { display:flex; gap:16px; align-items:flex-start; }
.row .tick { flex:none; width:26px; height:26px; border-radius:8px; background:rgba(75,178,101,.14);
  border:1px solid rgba(75,178,101,.4); display:flex; align-items:center; justify-content:center; }
.row .tick svg { display:block; }
.row .txt { font-family:var(--sans); font-size:21px; color:var(--ct-100); line-height:1.4; }
.row .txt b { font-weight:600; color:var(--ct-50); }
.row .txt span { color:var(--ct-400); }

/* Editor / terminal mock. */
.term { background:var(--sf-900); border:1px solid var(--sf-700); border-radius:16px;
  overflow:hidden; margin-top:22px; }
.term .bar { display:flex; align-items:center; gap:9px; padding:11px 18px;
  border-bottom:1px solid var(--sf-800); background:var(--sf-850); }
.term .bar i { width:11px; height:11px; border-radius:50%; background:var(--sf-600); display:block; }
.term .bar .name { font-family:var(--mono); font-size:15px; color:var(--ct-400); margin-left:8px; }
.term pre { font-family:var(--mono); font-weight:500; font-size:16px; line-height:1.55;
  padding:16px 20px; color:var(--ct-100); white-space:pre; }
.term .cm { color:var(--ct-500); }
.term .er { color:#e5484d; }
.term .ok { color:var(--ac-300); }
.term .kw { color:var(--ac-400); }
.term .st { color:#a3aebe; }
.term .ac { color:var(--ac-400); }

.chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:26px; }
.chip { font-family:var(--mono); font-weight:500; font-size:17px; color:var(--ct-300);
  background:var(--sf-850); border:1px solid var(--sf-700); border-radius:999px;
  padding:9px 16px; }
.chip.on { color:var(--ac-300); border-color:rgba(75,178,101,.35); background:rgba(75,178,101,.08); }
`

/* The mark, redrawn from brand/logo/mark-1024.png: ground, green rim, chevron
   A over a dim orbit, and the accent arc running down to the satellite dot. */
const mark = (s) => `
<svg width="${s}" height="${s}" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="ag" x1="34" y1="22" x2="70" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7fe39c"/><stop offset="1" stop-color="#12933b"/>
    </linearGradient>
    <radialGradient id="gg" cx="0" cy="0" r="1"
      gradientTransform="translate(38 30) rotate(48) scale(72)">
      <stop stop-color="#101c15"/><stop offset="1" stop-color="#070b0e"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="47.4" fill="url(#gg)"/>
  <circle cx="50" cy="50" r="47.4" stroke="#1fa94f" stroke-width="2"/>
  <ellipse cx="49" cy="52" rx="37" ry="19" transform="rotate(-18 49 52)"
    stroke="#5c6676" stroke-width="1.9" opacity=".95"/>
  <path d="M27.5 73.5 50 24.5 72.5 73.5" stroke="url(#ag)" stroke-width="10"
    stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M37 53h26" stroke="#a9f0c0" stroke-width="8.5" stroke-linecap="round" opacity=".16"/>
  <path d="M75.75 32.7A37 19 -18 0 1 81.2 53" stroke="#4bb265" stroke-width="1.9"
    stroke-linecap="round"/>
  <circle cx="75.75" cy="32.7" r="5" fill="#7fe39c" stroke="#070b0e" stroke-width="2.2"/>
</svg>`

const tick = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M2.5 7.5 5.5 10.5 11.5 3.5" stroke="#4bb265" stroke-width="2.2"
    stroke-linecap="round" stroke-linejoin="round"/></svg>`

const lockup = (s = 44) => `<div class="lockup">${mark(s)}<span>ArixPro</span></div>`

const foot = (meta) =>
  `<div class="foot"><div class="site">arixpro.com</div><div class="meta">${meta}</div></div>`

/** One 16:9 photo card: lockup, eyebrow + headline, body, footer. */
const photo = ({ eyebrow, headline, body, meta, pad = 56 }) => `
<div class="frame" style="width:1024px;height:576px;padding:${pad}px">
  ${lockup()}
  <div>
    <div class="eyebrow">${eyebrow}</div>
    <h1 style="margin-top:14px;font-size:40px">${headline}</h1>
    ${body ?? ''}
  </div>
  ${foot(meta)}
</div>`

const pages = {}

/* 1. Logo. Square, full bleed, the crop lands on artwork. */
pages['logo-720x720'] = {
  w: 720, h: 720,
  html: `<div style="width:720px;height:720px;background:#070b0e;display:flex;
    align-items:center;justify-content:center">${mark(720)}</div>`,
}

/* 2. Cover. The one line the brand leads with everywhere. */
pages['cover-1024x576'] = {
  w: 1024, h: 576,
  html: `<div class="frame" style="width:1024px;height:576px;padding:66px">
    ${lockup(52)}
    <div>
      <div class="eyebrow">LIVE ONLINE CLASSES</div>
      <h1 style="margin-top:20px">Learn to Code.<br><span class="dim">Build for Real</span><span class="dot">.</span></h1>
      <div class="sub">Python, Web, Backend and AI. Taught live, explained in Urdu,
        technical terms in English.</div>
    </div>
    ${foot('LAHORE<br>TAUGHT ONLINE')}
  </div>`,
}

/* 3. What we teach. The four course tracks, nothing invented. */
pages['photo-01-courses-1024x576'] = {
  w: 1024, h: 576,
  html: photo({
    eyebrow: 'WHAT WE TEACH',
    headline: 'Four tracks<span class="dot">.</span>',
    meta: 'ONE-ON-ONE<br>SMALL LIVE BATCHES',
    body: `<div class="cards">
      <div class="card"><div class="n">01</div><div class="t">Python Programming</div>
        <div class="d">Syntax to functions, files and real scripts</div></div>
      <div class="card"><div class="n">02</div><div class="t">Web Development</div>
        <div class="d">HTML, CSS, JavaScript, React</div></div>
      <div class="card"><div class="n">03</div><div class="t">Backend Development</div>
        <div class="d">FastAPI, PostgreSQL, Git</div></div>
      <div class="card"><div class="n">04</div><div class="t">AI and Automation</div>
        <div class="d">Scripts and tools that do the boring work</div></div>
    </div>`,
  }),
}

/* 4. How a class actually runs. Specifics, per BRAND.md voice. */
pages['photo-02-how-classes-run-1024x576'] = {
  w: 1024, h: 576,
  html: photo({
    eyebrow: 'HOW A CLASS RUNS',
    headline: 'Everything is taught live<span class="dot">.</span>',
    meta: 'TAUGHT LIVE<br>QUESTIONS IN CLASS',
    body: `<div class="rows">
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>Ask a question while the code is still on screen.</b></div></div>
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>One-on-one mentorship,</b> <span>or a small live batch</span></div></div>
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>You type the code.</b> <span>We do not demo at you</span></div></div>
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>Every module ends in a working project</b></div></div>
    </div>`,
  }),
}

/* 5. Real code. A traceback and the one-line fix, which is what teaching looks like. */
pages['photo-03-real-code-1024x576'] = {
  w: 1024, h: 576,
  html: `<div class="frame" style="width:1024px;height:576px;padding:50px 56px">
    ${lockup()}
    <div>
      <div class="eyebrow">WHAT A LESSON LOOKS LIKE</div>
      <h1 style="margin-top:12px;font-size:40px">We read the error, then fix it<span class="dot">.</span></h1>
      <div class="term">
        <div class="bar"><i></i><i></i><i></i><span class="name">total.py</span></div>
        <pre>qty = <span class="kw">input</span>(<span class="st">"How many? "</span>)
price = <span class="st">250</span>
<span class="kw">print</span>(qty * price)

<span class="er">TypeError: can't multiply sequence by non-int</span>
<span class="cm"># qty came from input(), so it is still a string</span>
<span class="ok">qty = int(input("How many? "))</span></pre>
      </div>
    </div>
    ${foot('CONCEPTS IN URDU<br>CODE IN ENGLISH')}
  </div>`,
}

/* 6. The differentiator. */
pages['photo-04-urdu-first-1024x576'] = {
  w: 1024, h: 576,
  html: photo({
    eyebrow: 'THE LANGUAGE',
    headline: 'Explained in the language<br><span class="dim">you think in</span><span class="dot">.</span>',
    meta: 'BEGINNERS<br>UNIVERSITY STUDENTS<br>FRESH GRADUATES',
    body: `<div class="sub">Concepts in Urdu. <span style="color:#f4f7fa">variable</span>,
      <span style="color:#f4f7fa">function</span> and <span style="color:#f4f7fa">deploy</span>
      stay in English, because that is how the industry actually talks.</div>
      <div class="chips" style="margin-top:22px">
        <span class="chip on">Python</span><span class="chip on">React</span>
        <span class="chip on">FastAPI</span><span class="chip on">PostgreSQL</span>
        <span class="chip on">Git</span>
      </div>`,
  }),
}

/* 7. Proof of work. */
pages['photo-05-projects-1024x576'] = {
  w: 1024, h: 576,
  html: photo({
    eyebrow: 'WHAT YOU LEAVE WITH',
    headline: 'A GitHub profile<br><span class="dim">with real projects on it</span><span class="dot">.</span>',
    meta: 'EVERY MODULE<br>ENDS IN A PROJECT',
    body: `<div class="term" style="margin-top:22px">
      <div class="bar"><i></i><i></i><i></i><span class="name">terminal</span></div>
      <pre><span class="ac">$</span> git commit -m <span class="st">"add checkout total"</span>
<span class="cm">[main 4f1c9a2] add checkout total</span>
<span class="ac">$</span> git push
<span class="ok">To github.com/your-name/first-project.git</span></pre>
    </div>`,
  }),
}

/* 8. How to start. Contact values mirror src/lib/site.ts. */
pages['photo-06-start-1024x576'] = {
  w: 1024, h: 576,
  html: photo({
    eyebrow: 'HOW TO START',
    headline: 'Message us and say<br><span class="dim">where you are stuck</span><span class="dot">.</span>',
    meta: 'BASED IN LAHORE<br>TAUGHT ONLINE ACROSS PAKISTAN',
    body: `<div class="rows" style="margin-top:26px">
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>WhatsApp</b> <span>+92 312 0418701</span></div></div>
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>arixpro.com</b> <span>course outlines and fees</span></div></div>
      <div class="row"><div class="tick">${tick}</div><div class="txt">
        <b>support.arixpro@gmail.com</b></div></div>
    </div>`,
  }),
}

mkdirSync(out, { recursive: true })

for (const [name, page] of Object.entries(pages)) {
  const file = join(work, `${name}.html`)
  writeFileSync(
    file,
    `<!doctype html><meta charset="utf-8"><style>${css}</style>${page.html}`,
  )
  execFileSync(
    CHROME,
    [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--default-background-color=00000000',
      `--window-size=${page.w},${page.h}`,
      '--virtual-time-budget=8000',
      `--screenshot=${join(out, `${name}.png`)}`,
      `file://${file}`,
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  )
  console.log(`${name}.png  ${page.w}x${page.h}`)
}

rmSync(work, { recursive: true, force: true })
