# Allover Healthcare Group — Homepage Redesign Concept

A bespoke, homepage-only redesign **concept** for **Allover Healthcare Group LLC**
([alloverhealthcaregroup.com](https://www.alloverhealthcaregroup.com/)), built to
demonstrate how the organization's website could become a modern, credible,
compassionate and conversion-focused experience.

> This is a **sales/presentation concept only** — not a production deployment. It
> does not edit, overwrite or interfere with the existing website. Referral,
> registration and demo actions link out to the organization's existing live
> processes so the concept never presents a fake "secure" form.

---

## Creative direction

**Concept line:** *Connected Care. Practical Support. Stronger Communities.*

The design is built around a **connected-pathways / overlapping-circles motif**
(see `PathwayMotif.tsx`) — a quiet visual system that says Allover connects
individuals, families, providers, technology, education and community resources.
Refinement comes from composition, disciplined typography, generous spacing,
restrained color and authentic-first imagery — not from flashy effects.

- **Type:** Fraunces (editorial serif headings) + Inter (highly readable UI/body),
  responsive `clamp()` sizing, sentence case, short measure.
- **Color:** sampled directly from the authentic logo — deep royal **navy**
  (`#002080`), bright **azure** (`#00a0f0`) and a silver swoosh. Navy **primary**
  + **healthcare** accent, a readable **azure** for technology, bright sky for
  accents/focus/motif, and warm **amber** for the academy (its one differentiator).
  Tokens live in `tailwind.config.js` and are WCAG-AA oriented (deep-navy body
  text on cool off-white; the bright azure is reserved for large/decorative use).

## How the three divisions are organized

The homepage deliberately makes **healthcare the primary conversion focus** while
presenting technology and education as complementary:

- **Allover Healthcare** — the dominant panel in the three-division section, its
  own full services grid, the pathway selector, and the referral flow. CTA: *Make
  a referral / Explore services*.
- **Allover CareWare** — a visually distinct navy/blue technology band with a
  clearly-labeled *conceptual* product preview (no fabricated real UI). CTA:
  *Request a demo*.
- **Allover Academy** — a warm-amber education band listing verified programs.
  CTA: *Browse programs / Register for a class*.

Each audience gets its own CTA — no vague "Learn More" funnel.

## Components created

`CrisisUtilityBar` · `SiteHeader` (+ desktop nav) · `MobileNavigation`
(focus-trapped drawer) · `HeroSection` · `TrustStrip` · `DivisionOverview` ·
`HealthcareServices` · `AudiencePathways` (accessible tab pattern) ·
`ReferralProcess` · `CommunityCareSection` · `CareWareFeature` · `AcademyFeature`
· `MissionValues` · `FinalCTA` · `LocationContact` · `SiteFooter` ·
`MobileActionBar` · `PathwayMotif`.

Content, contact details, links, disclaimers and the concept-badge toggle are
centralized in `src/config/site.ts` and `src/config/content.ts`.

## Local images

All authentic assets live in **`public/images/allover/`** with a full
**`asset-manifest.json`** (original URL, dimensions, type, usage, whether used).

Used in the concept: `AlloverLogo.png`, `favicon.ico`, `prp-Services.png`,
`about.png`, `SubHome.png`.

**Omitted / unusable images:** the source site's other images are informal
clip-art (`Therapy.png` "Time to Heal" clock, `Outpatient.png` CBT diagram,
`PRP-Programs.png` "We Can Help" sticky note) or too small (72×72 thumbnails,
150×100 photos). These were kept in the asset folder but excluded from the
polished homepage. Because no strong first-party hero photograph exists, the hero
uses a premium typographic composition with the brand motif plus the one usable
group-session photo in an editorial frame.

## ⚠️ Client confirmation required

The following were intentionally **omitted or qualified** and need the
organization to confirm before publication:

1. **CARF accreditation** — `carf.png` is held in the asset folder only and **not
   shown**. Verify current CARF status and covered programs before any seal or
   "accredited" language appears.
2. **Maryland licensing, Medicaid participation, MVA approval, CDC recognition**
   for T2 DPP — none claimed; verify before adding.
3. **Office hours** — none invented (source has no reliable org-wide schedule).
4. **After-hours line behavior** — shown as "after-hours contact," never as a
   24-hour crisis service. Confirm intended behavior.
5. **Evening/weekend Academy classes** — mentioned only generically; confirm.
6. **Court / MVA / license / insurance outcomes** — none guaranteed; any benefit
   language must be verified.
7. **Referral form** — links to the existing live process; a production build
   needs a HIPAA-appropriate backend before collecting any PHI.
8. **Autism-waiver respite & supported-employment specifics** — qualified with
   "where available/verified."

No staff, clinicians, credentials, testimonials, reviews, success rates,
timelines or prices were invented.

## Safeguards included

- Crisis strip (988 / 911) distinct from Allover's after-hours number.
- No fake secure forms; "don't send PHI by email" notices where relevant.
- MedicalOrganization schema with real NAP only — no aggregateRating, hours or
  unverified credentials.

## Accessibility

WCAG 2.2 AA target: skip link, semantic landmarks, single H1, logical headings,
visible focus rings, keyboard-operable menu + pathway tabs, focus-trapped mobile
drawer (Escape + body-scroll lock), descriptive alt text, ≥44px touch targets,
`prefers-reduced-motion` honored.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Deploy to Vercel

Framework preset **Vite** (see `vercel.json`). Build `npm run build`, output
`dist`. Import the repo in Vercel and deploy — no environment variables required.

## Status

- ✅ Compiles cleanly (`tsc -b && vite build`, no TypeScript errors).
- ✅ Production preview serves with all assets (HTTP 200).
- ✅ Built responsive (320 → 1920px) with a fixed mobile action bar + safe-area
  padding; verify visually on deploy.
