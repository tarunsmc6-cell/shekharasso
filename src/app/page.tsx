import Link from "next/link";
import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Shekhar & Associates — Chartered Accountancy, US CPA, Corporate Law",
  description:
    "A boutique consulting firm advising founders, boards, and family offices on chartered accountancy, US CPA services, and corporate & commercial law.",
};

const practices = [
  {
    href: "/practice/chartered-accountancy",
    label: "Chartered Accountancy",
    summary:
      "Statutory audit, tax compliance, and assurance for closely-held companies and growth-stage businesses.",
    services: [
      "Statutory & tax audit",
      "Indian income-tax & GST",
      "Group consolidations",
    ],
  },
  {
    href: "/practice/us-cpa",
    label: "US CPA",
    summary:
      "US federal and state tax, US GAAP reporting, and cross-border structuring for India–US corridor clients.",
    services: [
      "US federal & state tax",
      "US GAAP financial reporting",
      "Cross-border structuring",
    ],
  },
  {
    href: "/practice/corporate-law",
    label: "Corporate & Commercial Law",
    summary:
      "Entity formation, commercial contracts, corporate governance, M&A advisory, and regulatory counsel.",
    services: [
      "Formation & shareholder agreements",
      "Commercial contracts",
      "M&A & governance",
    ],
  },
];

const principles = [
  {
    title: "Senior-led, by engagement.",
    body: "Every mandate is led by the principal. We accept work only where senior attention is the right answer.",
  },
  {
    title: "Discretion is the default.",
    body: "We do not publish client names or matters. Confidentiality protections begin at first contact.",
  },
  {
    title: "Cross-jurisdictional by design.",
    body: "Chartered accountancy, US CPA, and corporate-law expertise sit under one roof, with one principal accountable.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 md:pt-48 pb-24 md:pb-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <SectionLabel>Boutique consulting</SectionLabel>
          <h1 className="mt-8 font-serif text-display-lg font-semibold text-brand-navy text-balance max-w-[20ch]">
            Counsel for decisions that cannot be undone.
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-7 font-serif text-2xl md:text-[26px] leading-[1.4] text-brand-ink/85 text-pretty max-w-[60ch]">
              Shekhar &amp; Associates is a boutique practice in chartered
              accountancy, US CPA services, and corporate &amp; commercial
              law. We advise founders, boards, and family offices on the
              filings, structures, and contracts that compound for a decade.
            </p>
            <div className="md:col-span-4 md:col-start-9 flex flex-col items-start justify-end gap-4">
              <ButtonLink href="/contact" variant="primary">
                Begin a conversation
              </ButtonLink>
              <Link
                href="/engage"
                className="link-quiet text-sm text-brand-ink/70"
              >
                How we work &rsaquo;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="border-y border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="01">Practice</SectionLabel>
              <h2 className="mt-6 font-serif text-display-md font-semibold text-brand-navy text-balance max-w-[18ch]">
                Three disciplines, one principal.
              </h2>
            </div>
            <Link
              href="/practice"
              className="link-quiet text-sm text-brand-ink/80"
            >
              All practice areas &rsaquo;
            </Link>
          </div>

          <ul className="mt-16 grid gap-px bg-brand-rule md:grid-cols-3">
            {practices.map((p) => (
              <li key={p.href} className="bg-brand-cream-50">
                <Link
                  href={p.href}
                  className="group block h-full p-8 md:p-10 transition-colors hover:bg-brand-cream"
                >
                  <p className="eyebrow eyebrow--accent">{p.label}</p>
                  <h3 className="mt-4 font-serif text-2xl md:text-3xl leading-tight text-brand-navy">
                    {p.summary}
                  </h3>
                  <ul className="mt-6 space-y-1.5 text-[14px] text-brand-ink/75">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-navy" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-brand-navy group-hover:gap-3 transition-[gap]">
                    Learn more <span aria-hidden>&rsaquo;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel index="02">Principles</SectionLabel>
              <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance">
                Why clients return.
              </h2>
            </div>
            <ol className="md:col-span-8 divide-y divide-brand-rule">
              {principles.map((p, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-8 first:pt-0"
                >
                  <span className="font-serif text-3xl text-brand-navy/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-navy">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-ink/80">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Engagement preview */}
      <section className="border-y border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="03">Engagement</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance max-w-[20ch]">
              We accept a limited number of mandates each quarter.
            </h2>
            <p className="mt-6 max-w-[60ch] text-brand-ink/80">
              Engagements begin with a brief introductory call, a written
              scope, and a conflict check. Fees are agreed in advance &mdash;
              fixed-fee, retainer, or capped &mdash; depending on the
              matter.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-3">
            <ButtonLink href="/engage" variant="secondary">
              Read our engagement model
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary">
              Begin a conversation
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="04">Insights</SectionLabel>
              <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance">
                Briefings.
              </h2>
            </div>
            <Link
              href="/insights"
              className="link-quiet text-sm text-brand-ink/80"
            >
              All briefings &rsaquo;
            </Link>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            <li>
              <Link href="/insights/sample-briefing" className="group block">
                <p className="eyebrow">Tax · Cross-border</p>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-tight text-brand-navy max-w-[26ch]">
                  Reading the GAAR notification: what founders actually need
                  to file.
                </h3>
                <p className="mt-3 text-[14px] text-brand-ink/65">
                  Sample briefing &middot; last reviewed May 2026
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/insights/sample-briefing-2"
                className="group block"
              >
                <p className="eyebrow">Corporate Law</p>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-tight text-brand-navy max-w-[26ch]">
                  Drafting the right of first refusal: five clauses founders
                  agree to too quickly.
                </h3>
                <p className="mt-3 text-[14px] text-brand-ink/65">
                  Sample briefing &middot; last reviewed May 2026
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
