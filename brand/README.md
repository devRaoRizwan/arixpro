# ArixPro brand kit

Two marks, one family.

- **Mark** (`logo/mark-1024.png`) — the chevron A with its orbit. Used for every
  profile picture, because it stays legible at 40px where a wordmark does not.
- **Seal** (`logo/badge-1024.png`) — the full emblem with `ARIXPRO` and
  `LEARN TO CODE` around the rim. Used on covers and anywhere with room to
  breathe.

Brand green is `#4bb265` on dark and `#0a6b28` on light. Ground is `#070b0e`.

## Where each file goes

| File | Upload to |
| --- | --- |
| `avatar/instagram-profile-1080.png` | Instagram profile picture |
| `avatar/whatsapp-profile-1000.png` | WhatsApp / WhatsApp Business profile |
| `avatar/linkedin-profile-1000.png` | LinkedIn page logo |
| `avatar/facebook-profile-1080.png` | Facebook page profile picture |
| `avatar/github-avatar-1000.png` | GitHub organisation avatar |
| `cover/linkedin-page-cover-1128x191.png` | LinkedIn **company page** cover |
| `cover/linkedin-profile-cover-1584x396.png` | LinkedIn **personal profile** banner |
| `cover/facebook-cover-1640x856.png` | Facebook page cover |
| `cover/whatsapp-background-1080x1920.png` | WhatsApp chat wallpaper, or a Status / Story post |
| `logo/wordmark-lockup-2400x600.png` | Email signatures, slide decks, wide headers |
| `logo/badge-1024.png` | Standalone emblem, transparent background |
| `logo/mark-1024.png` | Standalone mark, transparent background |

All five avatars are the same artwork at the size each platform prefers. If you
only keep one, keep `logo/mark-1024.png` and let the platform resize it.

## Why the avatars are full-bleed

Instagram, WhatsApp, LinkedIn and Facebook all crop profile pictures to a
circle. The avatar files carry the dark ground edge to edge so the crop lands on
artwork rather than on a corner, and the chevron sits well inside the safe
circle so nothing important is clipped.

## The site uses a third, simpler form

`public/favicon.svg` and the navbar mark drop the orbit entirely. At 16 to 32px
the ellipse turns to mush, so those keep only the circle and the chevron. Same
family, less detail, which is the same reason NASA pairs the meatball with the
worm.

## Regenerating

The artwork is plain SVG rendered to PNG through headless Chrome, so any of it
can be redrawn at any size without loss of quality.
