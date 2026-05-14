# CLAUDE.md

> Project brief for Claude Code. Read this before writing a single line of code.
> Persona: I am a Chartered Accountant, US CPA, and Corporate Lawyer with 20+ years advising founders, boards, and family offices. I also build product. Harvard. Treat me as the principal — write code I'd ship to a Fortune 500 GC's inbox.

---

## 1. Project

A consulting website for a boutique practice covering:
- Chartered Accountancy (audit, tax, statutory compliance)
- US CPA services (US tax, GAAP, cross-border structuring)
- Corporate & commercial law (entity formation, contracts, M&A, governance, regulatory)

The site is the **first business development asset**. It must convert sophisticated buyers (founders, CFOs, GCs, family offices) into discovery calls. It is not a brochure. It is a credibility instrument.

---

## 2. Non-negotiables

1. **Trust before traffic.** Every design and copy decision optimizes for perceived competence and discretion, not SEO theatrics. If a choice trades trust for traffic, reject it.
2. **Compliance-aware copy.** No guaranteed outcomes. No "we will save you X%." No regulated terms misused (e.g., "audit" used loosely, "fiduciary" used loosely, "tax advice" without disclaimers). Treat ABA Model Rules 7.1–7.3 and ICAI/AICPA advertising norms as binding constraints on marketing copy.
3. **No legal/tax advice on the site.** All content is informational. Every long-form piece carries the standard disclaimer (see §9).
4. **Privacy first.** No third-party trackers on intake forms. No chatbots that capture matter facts. Conflict-check workflow before any consultation booking.
5. **Accessibility is law, not a feature.** WCAG 2.2 AA minimum. Keyboard-navigable. Screen-reader sane.
6. **Performance is brand.** LCP < 1.8s, CLS < 0.05, INP < 200ms on a mid-tier mobile. A slow site signals a slow practice.

---

## 3. Tech stack

Pick the stack below unless I explicitly override.

- **Framework:** Next.js 14+ (App Router), TypeScript strict mode
- **Styling:** Tailwind CSS + shadcn/ui primitives. No CSS-in-JS runtime.
- **Content:** MDX for long-form (insights, briefings). Frontmatter for metadata.
- **Forms:** React Hook Form + Zod. Server actions for submission. No client-side secrets.
- **Email/intake:** Resend or Postmark. Plain-text confirmations. Encrypted at rest.
- **Hosting:** Vercel (or Cloudflare Pages). Edge functions for form handlers.
- **Analytics:** Plausible or Fathom. **No Google Analytics, no Meta Pixel, no LinkedIn Insight on the intake flow.**
- **CMS (optional):** Sanity or Contentlayer. Only if the engagement model requires non-dev edits.
- **Testing:** Vitest + Playwright. Lighthouse CI on every PR.

Reject: jQuery, Bootstrap, WordPress, page builders, AI-generated stock photography of "diverse people in suits."

---

## 4. Information architecture

```
/                       Home — positioning, signature services, proof
/practice
  /chartered-accountancy
  /us-cpa
  /corporate-law
/sectors                Optional: sectors served (e.g., startups, family offices, cross-border)
/insights               Long-form briefings (MDX)
  /[slug]
/about                  Principal bio, credentials, bar/ICAI/AICPA numbers
/engage                 How we work — engagement models, fee philosophy
/contact                Conflict-checked intake form
/legal
  /disclaimer
  /privacy
  /terms
```

Every practice page must answer, above the fold: **who this is for, what we do, what it costs to start a conversation, and what happens next.**

---

## 5. Design system

**Voice:** Restrained. Senior. No exclamation marks. No "passionate about." No "we are a team of." Lead with the client's problem, not our pedigree.

**Type:** A serif for headings (Source Serif 4, Lyon, or Tiempos if licensed). A clean sans for body (Inter, Söhne if licensed). Two typefaces, max. Generous line-height (1.55–1.7 on body).

**Color:** A near-black on warm off-white. One restrained accent (oxblood, deep navy, or forest — pick one and stay disciplined). No gradients. No glassmorphism. No neon.

**Layout:** 12-col grid, 72–80ch measure on long-form. Whitespace is the design. If a section feels "empty," it is probably correct.

**Imagery:** Editorial. Original photography of the practice, the city, the work — or nothing. No stock handshakes. No AI faces.

**Motion:** Subtle. `prefers-reduced-motion` respected. No parallax. No scrolljacking.

**Components to build first:** Header, Footer, ServiceCard, InsightCard, Disclosure (FAQ), IntakeForm, EngagementCTA, PrincipalBio, CredentialBar.

---

## 6. Content rules

- Write at a sophisticated-buyer reading level. Assume the reader is a CFO or a founder who has retained counsel before.
- Use specific verbs: *structure, opine, file, negotiate, defend, draft, review.* Avoid *help, assist, support, empower.*
- Quantify where defensible ("We have closed 40+ cross-border transactions since 2018"), but never project outcomes for the reader.
- Every insight article: 800–1,800 words, one clear thesis, citations to statute/case/standard where applicable, author byline, last-reviewed date.
- Practice pages: problem → approach → deliverables → engagement model → FAQs → CTA. In that order.

---

## 7. Intake form requirements

Fields, in order:
1. Name
2. Work email
3. Organization (optional)
4. Jurisdiction(s) involved
5. Matter category (CA / CPA / Corporate Law / Not sure)
6. Brief description (free text, 500 char cap, with a visible note: *"Do not include confidential or privileged information until we confirm no conflict exists."*)
7. Preferred contact method
8. Source (optional)

Behavior:
- Conflict-check disclaimer visible **before** submit.
- No autosave of free-text to localStorage.
- Submission posts to a server action that emails the principal — no third-party CRM webhook by default.
- Confirmation page restates the no-privilege-yet warning and gives expected response time (1 business day).

---

## 8. SEO & schema

- `Organization`, `ProfessionalService`, `Person` (principal), `Article` (insights), `BreadcrumbList`, `FAQPage` schema where applicable.
- One H1 per page. Descriptive `<title>` and `<meta description>` per route — never templated.
- Open Graph images generated per insight via `next/og`.
- `sitemap.xml`, `robots.txt`, canonical tags.
- Do not buy backlinks. Do not stuff city pages.

---

## 9. Standard disclaimer (use verbatim in footer + insight pages)

> The content on this site is provided for general informational purposes only and does not constitute legal, tax, accounting, or financial advice. No attorney-client, CPA-client, or advisor-client relationship is created by your use of this site or by any communication with the firm until a written engagement letter is executed. Past results do not guarantee future outcomes. Jurisdiction-specific rules may apply; consult qualified counsel in your jurisdiction.

Privacy page must disclose: what is collected (form fields, IP, basic analytics), how long it is retained, who has access, and how to request deletion.

---

## 10. Code conventions

- TypeScript strict. No `any`. No `@ts-ignore` without a comment explaining why.
- Server Components by default. Client Components only when interactive.
- Co-locate component, test, and styles. Folder per component.
- Naming: `PascalCase` components, `camelCase` functions, `kebab-case` files for routes, `SCREAMING_SNAKE_CASE` for env.
- Commit style: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
- One concern per PR. No drive-by refactors.
- Every form, every fetch, every external call: error state, loading state, empty state. All three. Always.

---

## 11. What I want from you, Claude

- **Push back.** If I ask for something that hurts trust, performance, or compliance — say so and propose the better path.
- **Show diffs, not essays.** When you change code, summarize in one line. I read the diff.
- **No filler.** Don't pad responses with "Great question!" or summaries of what you just did.
- **Cite the rule.** When a design or code choice is driven by a standard (WCAG, OWASP, ABA, ICAI, AICPA, Next.js docs), name the standard.
- **Stop and ask** before: installing a new dependency, changing the design tokens, touching the intake form, or editing anything under `/legal`.

---

## 12. Definition of done

A page or feature is done when:
1. It renders correctly on mobile (375px), tablet (768px), and desktop (1280px+).
2. Lighthouse: Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO ≥ 95.
3. Keyboard-only navigation completes the primary task.
4. Forms validate server-side, not just client-side.
5. Copy has been read aloud once. If it sounds like a brochure, rewrite it.
6. Tests pass. Types check. No console warnings.

---

*Last reviewed: 2026-05-15.*
