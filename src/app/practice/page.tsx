import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Three disciplines under one roof: chartered accountancy, US CPA services, and corporate & commercial law.",
};

const areas = [
  {
    href: "/practice/chartered-accountancy",
    title: "Chartered Accountancy",
    summary:
      "Statutory audit, tax compliance, financial reporting, and assurance for closely-held companies, founder-led businesses, and family-owned groups.",
    services: [
      "Statutory & tax audit",
      "Income tax & GST advisory",
      "Internal financial controls (IFC)",
      "Group consolidations",
      "Transfer pricing documentation",
    ],
  },
  {
    href: "/practice/us-cpa",
    title: "US CPA",
    summary:
      "US federal and state tax filings, US GAAP reporting, and structuring for India–US corridor founders, dual-resident families, and businesses with US nexus.",
    services: [
      "US individual & entity tax (1040, 1120, 1065)",
      "FBAR / FATCA reporting",
      "GAAP/IFRS bridges",
      "Transfer pricing — US side",
      "Cross-border structuring opinions",
    ],
  },
  {
    href: "/practice/corporate-law",
    title: "Corporate & Commercial Law",
    summary:
      "Entity formation, shareholder agreements, commercial contracts, governance frameworks, M&A advisory, and regulatory counsel.",
    services: [
      "Incorporation & shareholder agreements",
      "Founder & investor documents",
      "Commercial contracts review",
      "M&A — buy-side & sell-side support",
      "Governance & secretarial",
    ],
  },
];

export default function PracticeIndex() {
  return (
    <>
      <PageHero
        eyebrow="Practice"
        index="01"
        title={<>Three disciplines, one principal.</>}
        lede="Chartered accountancy, US CPA, and corporate law each demand a different fluency. We hold all three so the advice you receive on one is informed by the consequences in the others."
      />

      <section className="border-t border-brand-rule">
        <ul className="mx-auto max-w-[1280px] px-6 md:px-10 divide-y divide-brand-rule">
          {areas.map((a) => (
            <li key={a.href}>
              <Link
                href={a.href}
                className="group block py-14 md:py-20 transition-colors hover:bg-brand-cream-50 -mx-6 px-6 md:-mx-10 md:px-10"
              >
                <div className="grid gap-8 md:grid-cols-12 items-start">
                  <h2 className="md:col-span-5 font-serif text-display-sm font-semibold leading-[1.05] text-brand-navy text-balance">
                    {a.title}
                  </h2>
                  <div className="md:col-span-6 md:col-start-7">
                    <p className="text-[17px] leading-relaxed text-brand-ink/85 max-w-[55ch]">
                      {a.summary}
                    </p>
                    <ul className="mt-6 grid gap-1.5 sm:grid-cols-2 text-[14px] text-brand-ink/70">
                      {a.services.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-navy" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-brand-navy group-hover:gap-3 transition-[gap]">
                      View practice page <span aria-hidden>&rsaquo;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
