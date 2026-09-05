# LinkedIn Company Page: ArixPro

Every field LinkedIn asks for during setup, with the value to paste. Voice and
claims follow `brand/BRAND.md`: no student counts, placement rates, awards or
partnerships, because none of those exist yet.

Assets from `python3 tools/linkedin.py`:

| Field | File | Size |
| --- | --- | --- |
| Logo | `brand/avatar/linkedin-profile-1000.png` | 1000 x 1000 (min 300) |
| Cover | `brand/cover/linkedin-page-cover-1128x191.png` | 1128 x 191 |

---

## 1. The public URL is taken

`/company/` and `/in/` are separate namespaces, so `linkedin.com/in/arixpro`
is not the conflict. The cause is almost certainly the page you deleted:
LinkedIn holds a deleted page's vanity URL rather than releasing it.

Pick one of these instead. They are ordered by preference:

```
arixpro-pk          <- recommended. Short, geo-relevant, reads as official
arixprohq
arixpro-institute
arixpro-academy
```

`arixpro-pk` is the pick because it stays close to the brand, matches the
Instagram handle `arixpro.pk`, and does not look like a placeholder the way
`arixpro1` or `arixpro-official` would.

**Before settling for it**, try to get the original back. LinkedIn support can
sometimes reactivate a recently deleted page or release its URL, and a page that
is reactivated keeps whatever followers it had. Worth one message to them; the
slug is permanent-ish once you take a new one.

---

## 2. Fields LinkedIn asks for at creation

| Field | Value | Notes |
| --- | --- | --- |
| Name | `ArixPro` | |
| LinkedIn public URL | `arixpro-pk` | See above |
| Website | `https://arixpro.com` | |
| Industry | **E-Learning Providers** | See below |
| Company size | Answer honestly | See below |
| Organization type | See below | |
| Logo | `brand/avatar/linkedin-profile-1000.png` | |
| Tagline | See section 3 | 120 char limit |

### Industry

**E-Learning Providers** is the pick. It is what coding schools that teach live
online sit under, so it puts the page in the same set LinkedIn already shows for
those searches.

The precise alternative is **Technical and Vocational Training**, which is
arguably a better literal description of a coding institute but a much smaller
pool. If you later add in-person-only classes in Lahore, switch to that.

Avoid **Education Administration Programs**. That one is for bodies that run
schools, not for the teaching itself.

### Company size

LinkedIn's smallest bracket is **0-1 employees**, then **2-10 employees**.

Pick the true one. An inflated size is a claim you cannot support, and it is
the sort of thing that gets noticed the moment someone asks who the instructors
are. `0-1` is completely normal for a founder-led institute and costs nothing.

### Organization type

- **Sole Proprietorship** if ArixPro is you, unregistered
- **Privately Held** if it is a registered company
- **Self-Employed** works too, but reads smaller than Sole Proprietorship

Pick on the legal reality, not on which sounds larger.

---

## 3. Tagline

Shows directly under the page name in search results and on the page itself.
120 character limit; this is 97.

```
Learn to Code. Build for Real. Live Python, web, backend and AI classes. Lahore and online.
```

The tagline is indexed, so it front-loads the brand line and then spends the
rest of its characters on the four things someone would search for.

---

## 4. About / Overview

2,000 character limit on Company Pages, which is 600 fewer than a personal
profile, so this is tighter than the founder About. About 1,500 characters.

```
Most people who quit programming were never bad at it. They were handed the wrong sequence, the wrong material, and nobody to ask when something broke at 11pm.

ArixPro is a coding institute based in Lahore, teaching students across Pakistan online. Everything is live. Not a recording, not a playlist you work through alone.

WHAT WE TEACH

Python. Fundamentals, object-oriented code, data structures, APIs, automation.
Web Development. Semantic HTML, modern CSS, JavaScript, React, and the workflow professionals use.
Backend Development. FastAPI, REST design, PostgreSQL, authentication, testing, deployment.
AI and Automation. Building on LLM APIs, retrieval, and scripts that do real work.

HOW IT WORKS

Two formats. One on one mentorship is scheduled around you and moves at your pace. Live batches stay small, five or ten students, so everyone writes code on the call.

Concepts are explained in Urdu whenever that makes them land faster. Technical terms stay in English, because that is how documentation, error messages and interviews are written.

Every module ends in something that runs. A project on your GitHub with your commits on it, not a certificate.

For complete beginners, university students, fresh graduates and working professionals fitting sessions around a job.

arixpro.com | support.arixpro@gmail.com | WhatsApp +92 312 0418701
```

---

## 5. Location

```
Country:  Pakistan
City:     Lahore
State:    Punjab
```

Mark it as the primary location. If you do not want a street address public,
LinkedIn accepts a city-level location without one.

---

## 6. After the page exists

1. **Custom button.** Set it to "Visit website" pointing at `https://arixpro.com`.
   It is the only always-visible call to action on the page.
2. **Hashtags.** A page can follow three. Use `#coding`, `#python`,
   `#learntocode` so the page can comment as itself in those feeds.
3. **Link your Experience entry.** On `linkedin.com/in/arixpro`, edit the
   "Founder and Instructor" role to point at this page. The role then shows the
   logo, and your profile becomes a follower path to the page.
4. **Invite connections** to follow the page. LinkedIn gives a limited monthly
   credit for this and it is the fastest legitimate way off zero followers.
5. **Put the URL back on the website.** Once the slug is final, the company URL
   goes back into `src/lib/site.ts` and the `sameAs` block in `index.html`.
   Tell me the final URL and I will wire it in. That `sameAs` entry is what
   tells Google which LinkedIn entity is ArixPro, and a personal profile does
   not carry that signal.
