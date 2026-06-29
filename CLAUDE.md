
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

---

## Session 3 fixes & final wiring (today)

### Landing page fixes (finnex-landing)
- Removed all mentions of RVO, IND, DFIs as named target audiences
- Hero body, CTA, and partners section rewritten for two-sided platform positioning
- "For farmers" and "For investors" two-column section replaces partner pills
- All mailto: links replaced with href="#" (to be wired in future)
- "Submit your project" and "Start your application →" both now point to https://finnex-app-production.up.railway.app/farmer/apply
- Commits: 203db4b (copy reposition), 64aeeec (farmer form link fix)

### Farmer form fix (finnex-app)
- app/farmer/apply/page.tsx is now fully public — no auth required
- Removed AppShell with investor nav, role badge, and user avatar
- Replaced with clean minimal nav: FINNEX. logo only (Playfair Display, #15803d)
- Form logic (4 steps, validation, submit) untouched
- middleware.ts confirmed: /farmer/apply is not protected (matcher only covers /dashboard/* /admin/*)
- Commit: 04f05fc

### Full platform flow (working end to end)
1. finnex.capital → "Submit your project" → /farmer/apply (public)
2. Farmer completes 4-step form → POST /api/farmer/apply → scored → saved to Supabase as "pending"
3. Admin logs in at /admin → reviews submission → Approve or Reject
4. Approved projects appear on /dashboard (investors only, invite-only access)
5. Admin invites investor via email → magic link → investor sets password → sees approved projects
6. Investor clicks project → full 6-dimension detail page

### Known todos
- app.finnex.capital custom domain for finnex-app (still on Railway URL)
- Branded Supabase email templates for investor invites
- Delete or replace test submissions ("erf", "Test Farm") before real demo
- Farmer confirmation email after submission
- Approve test projects from /admin to populate investor dashboard
