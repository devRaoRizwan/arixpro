# ArixPro brand and content spec

Paste the prompt below whenever you want a new social post, banner or graphic.
Everything it references is defined in this file, so you never have to explain
the brand again.

---

## The prompt

> Make me a [Instagram carousel / LinkedIn post / Facebook post / story] about
> [TOPIC].
>
> Follow `brand/BRAND.md` exactly: colours, fonts, layout rules, logo usage and
> voice. Generate the graphics as PNGs at the correct platform size and write
> the caption for each platform.
>
> Do not invent numbers, student counts, placement rates, testimonials or
> partnerships. If a claim needs a fact I have not given you, ask me for it.

Add any of these when they apply:

> - Include a call to action pointing at [arixpro.com / WhatsApp / link in bio]
> - Make it [light / dark] theme
> - Keep it to [N] slides
> - This is for [beginners / university students / working developers]

---

## Colours

The palette is two neutral ramps plus one accent. Never introduce a second
accent hue. Red appears only for form errors.

### Dark theme (default for social graphics)

| Token | Hex | Use |
| --- | --- | --- |
| `sf-950` | `#06080a` | Page background |
| `sf-900` | `#0a0d11` | Cards, raised panels |
| `sf-850` | `#0e1217` | Inset chips, code blocks |
| `sf-800` | `#12171d` | Hairlines, dividers |
| `sf-700` | `#1e2530` | Borders |
| `sf-600` | `#2a333f` | Hover borders |
| `ct-50`  | `#f4f7fa` | Headings |
| `ct-100` | `#e4e9f0` | Strong body text |
| `ct-300` | `#a3aebe` | Secondary text, de-emphasised headline halves |
| `ct-400` | `#7c8798` | Muted labels, captions |
| `ct-500` | `#5c6676` | Faint metadata |
| `ac-400` | `#4bb265` | **Primary accent.** Eyebrows, marks, key punctuation |
| `ac-300` | `#7fcb92` | Accent highlight, gradient light end |
| `ac-500` | `#2f9449` | Accent pressed, gradient mid |
| `ac-600` | `#1e7738` | Gradient dark end |

Graphic-only greens used in the logo artwork: `#7fe39c` (light end of the A
gradient), `#12933b` (dark end), `#17a34c` (mark rim), `#070b0e` (mark ground).

### Light theme

| Token | Hex | Use |
| --- | --- | --- |
| `sf-950` | `#eef1f6` | Page background, tinted so white cards read as raised |
| `sf-900` | `#ffffff` | Cards |
| `sf-850` | `#e6eaf0` | Inset chips |
| `sf-800` | `#dde3ea` | Hairlines |
| `sf-700` | `#c8d1db` | Borders |
| `ct-50`  | `#0b1119` | Headings |
| `ct-300` | `#414b59` | Secondary text |
| `ct-400` | `#565f6c` | Muted labels |
| `ct-500` | `#626a77` | Faint metadata |
| `ac-400` | `#0a6b28` | **Primary accent on light.** Darker, for contrast |
| `ac-300` | `#075c22` | Accent text on light backgrounds |

The accent inverts between themes. On dark it is bright (`#4bb265`); on light it
is dark (`#0a6b28`). Never use the dark-theme green on a white background, it
fails contrast.

### Effects

```
grid lines   dark  rgb(255 255 255 / 0.035)   light  rgb(15 23 42 / 0.055)
grid size    64px or 72px squares
glow         radial-gradient(58% 46% at 22% 8%, rgba(75,178,101,.26), transparent 70%)
```

Grid plus a single top-left green glow is the standard graphic background. Do
not stack multiple glows or use more than one per composition.

---

## Typography

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display, headlines | **Plus Jakarta Sans** | 800 | Letter-spacing `-0.03em` to `-0.04em`, line-height `1.0` to `1.06` |
| Body, UI | **Inter** | 400, 500, 600 | Line-height `1.45` to `1.6` |
| Labels, code, metadata | **JetBrains Mono** | 500, 700 | Uppercase, letter-spacing `0.24em` for eyebrows |

Full stacks:

```css
--font-display: 'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui, sans-serif;
--font-sans:    'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-mono:    'JetBrains Mono', ui-monospace, 'SFMono-Regular', 'Menlo', monospace;
```

Load from Google Fonts:

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@600;800&display=swap
```

**Headline treatment.** Split a two-sentence headline across two tones: the
first half in `ct-50`, the second in `ct-300`, and the final full stop in
`ac-400`. That single green dot is the signature. Example:

> **Learn to Code.** *Build for Real*<span style="color:#4bb265">.</span>

---

## Logo usage

Three forms, by size. Using the wrong one is the most common mistake.

| Form | File | Use when |
| --- | --- | --- |
| **Mark** | `brand/logo/mark-1024.png` | Profile pictures, post corners, anything under ~200px |
| **Seal** | `brand/logo/badge-1024.png` | Covers, banners, large hero placements with room to breathe |
| **Simplified** | `public/favicon.svg` | 16 to 32px only. Circle and chevron, no orbit |

The seal already contains the words `ARIXPRO` and `LEARN TO CODE`. **Never place
a wordmark next to it** or the name appears twice.

The mark pairs with a wordmark freely, which is what
`brand/logo/wordmark-lockup-2400x600.png` does.

Clear space around any logo: at least half the logo's width on every side.

---

## Post layout conventions

Standard three-band composition, top to bottom:

1. **Top.** Mark plus `ArixPro` wordmark, horizontal, gap about 25% of mark size
2. **Middle.** Mono eyebrow in `ac-400`, uppercase, letter-spacing `0.26em`,
   then the headline, then one supporting line in `ct-300`
3. **Bottom.** `arixpro.com` in mono on the left, secondary metadata in
   `ct-400` right-aligned

Padding: about 9% of the shorter edge. On a 1080px square that is 96px.

Backgrounds: `sf-950` ground, grid overlay, one green glow top-left.

---

## Platform sizes

| Platform | Size | Notes |
| --- | --- | --- |
| Instagram feed, square | 1080 x 1080 | Carousels outperform single images |
| Instagram story, reel cover | 1080 x 1920 | Keep content clear of top and bottom 250px |
| LinkedIn post image | 1200 x 627 | Same file works for Facebook |
| LinkedIn page cover | 1128 x 191 | |
| LinkedIn profile banner | 1584 x 396 | |
| Facebook cover | 1640 x 856 | Mobile crops the sides, keep content centred |
| Profile picture, all platforms | 1000 x 1000 | Cropped to a circle everywhere, keep art full-bleed |
| Open Graph, website | 1200 x 630 | |

---

## Voice

Write like a person who teaches, not like a brand. Short sentences. Specifics
over adjectives.

**Open with a claim someone could disagree with.** That is what makes a reader
stop. "Most people who quit coding were never bad at it" works. "We are excited
to announce" does not.

### Never use

Em dashes. Thrilled to announce. Excited to share. Empowering. Unlock your
potential. Journey. Cutting-edge. Seamless. Elevate. Dive into. Passionate
about. Game-changer. In today's fast-paced world. Three-adjective stacks.

### Always

- Say what actually happens in a class: "ask a question while the code is still
  on screen" beats "interactive learning"
- Name real technologies: Python, React, FastAPI, PostgreSQL, Git
- Keep technical terms in English even in Urdu-facing copy
- Mention the Urdu-friendly teaching where relevant, it is the differentiator

### Never claim

Student counts. Placement rates. Salary figures. Partnerships. Accreditation.
Awards. Invented testimonials or student names. If a post needs a number that
does not exist yet, leave it out.

---

## Facts you can safely state

- Courses: Python Programming, Web Development, Backend Development, AI and
  Automation
- Formats: one-on-one mentorship, and small live batches
- Everything is taught live
- Every module ends in a working project, kept on GitHub
- Concepts explained in Urdu, technical terms stay in English
- Audience: beginners, university students, fresh graduates
- Based in Lahore, taught online across Pakistan
- Website `arixpro.com`, WhatsApp `+92 312 0418701`,
  email `support.arixpro@gmail.com`

Contact values live in `src/lib/site.ts`. If they change there, update this
file too.
