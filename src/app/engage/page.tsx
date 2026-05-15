import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How we engage",
  description:
    "Engagement models, fee philosophy, and what to expect from first contact through closing a matter at Shekhar & Associates.",
};

const steps = [
  {
    title: "First contact",
    body: "You send a paragraph through the intake form describing the matter at a high level. Do not include confidential or privileged information at this stage. We reply within one business day.",
  },
  {
    title: "Conflict check",
    body: "Before any substantive discussion, we confirm there is no conflict with an existing client and that the matter falls within our practice. If we cannot act, we say so and, where appropriate, refer.",
  },
  {
    title: "Scoping call",
    body: "A brief introductory call — typically thirty minutes, no charge — to confirm scope, jurisdiction, and timing. We agree on what success looks like before we agree on fees.",
  },
  {
    title: "Engagement letter",
    body: "Scope, deliverables, fees, timeline, and confidentiality terms set out in writing. Substantive work begins once the engagement letter is countersigned.",
  },
  {
    title: "Delivery",
    body: "Work is delivered against the engagement letter. Significant scope changes are agreed in writing before work begins on them. We do not bill for scope creep.",
  },
  {
    title: "Closing",
    body: "Files are closed under a written closing memorandum. Working papers and engagement records are retained as required by the relevant professional body.",
  },
];

const feeModels = [
  {
    label: "Fixed fee",
    body: "Standalone matters with defined deliverables — a shareholder agreement, an annual audit, a US return. The fee is agreed before work begins and does not change unless scope does.",
  },
  {
    label: "Capped time",
    body: "Transactions and structuring opinions where the work is bounded but not fully predictable. We bill against time, capped at an agreed maximum, and stop at the cap.",
  },
  {
    label: "Retainer",
    body: "Recurring counsel for clients who need ongoing access — typically founders mid-round or family offices in active deployment. Monthly retainer with a defined scope of hours.",
  },
  {
    label: "Hourly",
    body: "Reserved for the rare matter where neither fixed-fee nor capped time is appropriate. Hourly engagements are quoted at the principal&rsquo;s rate, agreed in advance.",
  },
];

export default function EngagePage() {
  return (
    <>
      <PageHero
        eyebrow="Engage"
        index="01"
        title={<>How we work.</>}
        lede="Engagements begin with a brief introductory call, a written scope, and a conflict check. Fees are agreed in advance — fixed-fee, capped-time, or retainer — depending on the matter."
      />

      {/* Process */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="02">Process</SectionLabel>
          </div>
          <ol className="md:col-span-8 md:col-start-5 divide-y divide-brand-rule">
            {steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-x-6 py-6 first:pt-0"
              >
                <span className="font-serif text-3xl text-brand-navy/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-ink/80">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fee philosophy */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="03">Fees</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-display-sm font-semibold text-brand-navy text-balance max-w-[18ch]">
              Fees are agreed before work begins.
            </h2>
            <p className="prose-body mt-6">
              We do not bill against an open meter. Every engagement is
              quoted in writing against a defined scope. If the scope changes
              in a way that affects the fee, we revise the estimate before
              continuing &mdash; not after the work is done.
            </p>

            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {feeModels.map((m) => (
                <li
                  key={m.label}
                  className="border border-brand-rule bg-brand-cream p-6"
                >
                  <p className="eyebrow eyebrow--accent">{m.label}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-brand-ink/85">
                    {m.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Confidentiality & conflicts */}
      <section className="border-t border-brand-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="04">Confidentiality</SectionLabel>
          </div>
          <div className="md:col-span-8 md:col-start-5 prose-body">
            <p>
              We treat the contents of any matter, including its existence,
              as confidential from first contact. We do not list clients, do
              not publish transaction values, and do not use matters in
              marketing without explicit written consent.
            </p>
            <p>
              <strong className="font-medium text-brand-navy">
                Privilege does not attach by default.
              </strong>{" "}
              An advisor&ndash;client privilege under the relevant
              jurisdiction&rsquo;s rules begins only when a written
              engagement letter is in place. Until then, please limit your
              communications to a high-level description of the matter. We
              say this on the intake form for the same reason.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="05">Next step</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance">
              Begin a conversation.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-3">
            <ButtonLink href="/contact" variant="primary">
              Open intake form
            </ButtonLink>
            <Link
              href="/practice"
              className="link-quiet text-sm text-brand-ink/70"
            >
              Practice areas &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
