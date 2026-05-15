import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shekhar & Associates is a boutique practice led by a Chartered Accountant, US CPA, and Corporate Lawyer with 20+ years advising founders, boards, and family offices.",
};

const credentials = [
  {
    label: "Chartered Accountant (India)",
    body: "Practising member, The Institute of Chartered Accountants of India (ICAI).",
    note: "Membership No. — on request",
  },
  {
    label: "Certified Public Accountant (US)",
    body: "Licensed CPA, American Institute of CPAs (AICPA) and the relevant US state board.",
    note: "License No. — on request",
  },
  {
    label: "Advocate",
    body: "Enrolled with the Bar Council; practice limited to transactional and advisory corporate-law work.",
    note: "Enrollment No. — on request",
  },
  {
    label: "Education",
    body: "Harvard. Twenty-plus years advising founders, boards, and family offices in India and across the India–US corridor.",
  },
];

const principles = [
  {
    title: "Senior attention or none.",
    body: "Every engagement is led by the principal. Where the right answer is junior delegation, we will say so and decline the work.",
  },
  {
    title: "Three disciplines, one accountable person.",
    body: "Chartered accountancy, US CPA, and corporate law sit under one practice. The principal who signs your audit reads your shareholder agreement.",
  },
  {
    title: "Written advice, defensible positions.",
    body: "Advice that matters is given in writing, with the standards or statutes it relies on cited in the file. Verbal sketches are sketches; engagements are written.",
  },
  {
    title: "Discretion is the default.",
    body: "We do not publish client names, matters, or transaction values. The firm does not appear on lists or in directories that would require us to.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        index="01"
        title={<>A boutique practice, by design.</>}
        lede={
          <>
            Shekhar &amp; Associates is led by a single principal &mdash; a
            Chartered Accountant, a US Certified Public Accountant, and a
            Corporate Lawyer &mdash; with twenty-plus years advising founders,
            boards, and family offices.
          </>
        }
        aside={
          <div className="space-y-3">
            <p className="eyebrow">Locations</p>
            <p>
              Engagements are accepted globally and conducted remotely or in
              person, by appointment. Filings are made in the jurisdictions
              required by the matter.
            </p>
          </div>
        }
      />

      {/* Principal */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="02">Principal</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-display-sm font-semibold text-brand-navy text-balance max-w-[20ch]">
              One person, fully accountable for the file.
            </h2>
            <div className="prose-body mt-8">
              <p>
                The practice is structured around a single principal so that
                the person who scopes the engagement is also the person who
                signs the deliverable. There is no associate handoff, no
                review-only partner, and no committee.
              </p>
              <p>
                Most engagements involve coordination with specialist
                counsel &mdash; litigation, regulatory, foreign tax,
                jurisdiction-specific compliance &mdash; and the principal
                remains responsible for the matter end-to-end.
              </p>
              <p>
                We accept a limited number of mandates each quarter. The
                acceptance criteria are straightforward: the matter must
                require senior attention, we must be the right firm for it,
                and there must be no conflict.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="03">Credentials</SectionLabel>
          </div>
          <ul className="md:col-span-8 md:col-start-5 divide-y divide-brand-rule">
            {credentials.map((c) => (
              <li key={c.label} className="py-6 first:pt-0">
                <p className="eyebrow eyebrow--accent">{c.label}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-ink/85 max-w-[60ch]">
                  {c.body}
                </p>
                {c.note && (
                  <p className="mt-2 text-[12px] text-brand-ink/55">
                    {c.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="04">Principles</SectionLabel>
          </div>
          <ol className="md:col-span-8 md:col-start-5 divide-y divide-brand-rule">
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
      </section>

      {/* CTA */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="05">Next step</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance max-w-[20ch]">
              Tell us what you&rsquo;re solving for.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-3">
            <ButtonLink href="/contact" variant="primary">
              Begin a conversation
            </ButtonLink>
            <Link href="/engage" className="link-quiet text-sm text-brand-ink/70">
              How we work &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
