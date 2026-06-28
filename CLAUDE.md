
---

## Landing page rebuild — finnex.capital (today)

### What was built
- Rebuilt `finnex-landing` (`app/page.tsx`) for institutional audiences: RVO, IND, DFIs
- Committed as `8140d39` via Claude Code in Cursor

### Design
- Dark forest green palette: `#0A1A0F` bg, `#B8D4C0` sage text, `#4ADE80` signal green accent
- Fonts: Playfair Display (headlines), Inter (body), JetBrains Mono (data/labels)
- All styles in a single CSS string — no Tailwind, no CSS modules
- Class names prefixed `fn-` to avoid global collisions
- Responsive breakpoints at 920px and 560px

### Sections
1. Sticky nav — FINNEX. logo, 4 links, "Request access" button
2. Two-column hero — headline with <em>institutional</em> in signal green + animated score card
3. Score card — Nakuru Maize Cooperative, score counts 0→83 on load, 6 dimension bars animate in with staggered 75ms delays
4. Stats bar — 6× dimensions, 48h turnaround, 12+ countries, 100% admin reviewed
5. How it works — 3 steps (01 Farmer onboarding, 02 Scoring engine, 03 Investor dashboard)
6. Scoring model — D1–D6 dimension cards with descriptions
7. Partners row — RVO, IND, IFC, FMO, AfDB, CDC Group
8. CTA + footer

### DNS / deployment
- Domain: `finnex.capital` registered on Hostinger
- DNS: ALIAS `@` → `n3umwhdo.up.railway.app`, TXT `_railway-verify` already set
- Hostinger converts CNAME on root (@) to ALIAS automatically — this is expected behaviour
- SSL provisioned automatically by Railway via Let's Encrypt
- `finnex.capital` is live and HTTPS

### Key lesson
- Root domain CNAME on Hostinger becomes ALIAS — not a bug
- Railway needs its specific subdomain (e.g. `n3umwhdo.up.railway.app`) not the generic `finnex-landing-production.up.railway.app` for custom domain validation
