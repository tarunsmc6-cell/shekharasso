import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Briefings on tax, accounting, and corporate-law questions that arise for founders, boards, and family offices.",
};

const briefings = [
  {
    slug: "sample-briefing",
    category: "Tax · Cross-border",
    title:
      "Reading the GAAR notification: what founders actually need to file.",
    summary:
      "GAAR is invoked far less often than it is feared. The filings that matter — and the disclosures that do not — are narrower than most founders assume.",
    lastReviewed: "May 2026",
    minutes: "6 min read",
  },
  {
    slug: "sample-briefing-2",
    category: "Corporate Law",
    title:
      "Drafting the right of first refusal: five clauses founders agree to too quickly.",
    summary:
      "ROFR clauses look mechanical at signing. The mechanics matter at exit. Five drafting points that change who gets to decide when the company is sold.",
    lastReviewed: "May 2026",
    minutes: "8 min read",
  },
  {
    slug: "sample-briefing-3",
    category: "US CPA · India–US Corridor",
    title:
      "If you took a US W-2 and own an Indian company: a short checklist.",
    summary:
      "Substantial-presence, treaty-tiebreaker, FBAR, Form 5471, Form 8938 — and the reading of each that most clients miss the first year.",
    lastReviewed: "May 2026",
    minutes: "7 min read",
  },
];

export default function InsightsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        index="01"
        title={<>Briefings.</>}
        lede="Short, sourced briefings on the questions that come up at the intersection of tax, accounting, and corporate law. Written for the reader who has retained counsel before."
      />

      <section className="border-t border-brand-rule">
        <ul className="mx-auto max-w-[1280px] px-6 md:px-10 divide-y divide-brand-rule">
          {briefings.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/insights/${b.slug}`}
                className="group block py-12 md:py-16 transition-colors hover:bg-brand-cream-50 -mx-6 px-6 md:-mx-10 md:px-10"
              >
                <div className="grid gap-8 md:grid-cols-12 items-start">
                  <div className="md:col-span-3">
                    <p className="eyebrow eyebrow--accent">{b.category}</p>
                    <p className="mt-3 text-[12.5px] text-brand-ink/55">
                      Last reviewed {b.lastReviewed} &middot; {b.minutes}
                    </p>
                  </div>
                  <div className="md:col-span-8 md:col-start-5">
                    <h2 className="font-serif text-2xl md:text-[32px] leading-[1.15] text-brand-navy text-balance max-w-[28ch]">
                      {b.title}
                    </h2>
                    <p className="mt-4 max-w-[60ch] text-[15.5px] leading-relaxed text-brand-ink/80">
                      {b.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-brand-navy group-hover:gap-3 transition-[gap]">
                      Read briefing <span aria-hidden>&rsaquo;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-rule bg-brand-cream-50 py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="eyebrow mb-3">Notice</p>
          <p className="max-w-[80ch] text-[13px] leading-relaxed text-brand-ink/70">
            Briefings are provided for general informational purposes only
            and do not constitute legal, tax, accounting, or financial
            advice. No advisor&ndash;client relationship is created by
            reading these pages. Jurisdiction-specific rules may apply.
          </p>
        </div>
      </section>
    </>
  );
}
