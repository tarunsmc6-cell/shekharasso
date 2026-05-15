import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Message received",
  description:
    "Your intake submission has been received. We will respond within one business day.",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Received"
        index="A"
        title={<>Thank you. We have your note.</>}
        lede="We aim to respond within one business day. If your matter is time-sensitive, please say so in a brief follow-up email."
      />

      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="01">What happens next</SectionLabel>
          </div>
          <ol className="md:col-span-8 md:col-start-5 divide-y divide-brand-rule">
            <li className="grid grid-cols-[auto_1fr] gap-x-6 py-6 first:pt-0">
              <span className="font-serif text-3xl text-brand-navy/40 tabular-nums">
                01
              </span>
              <div>
                <h2 className="font-serif text-xl text-brand-navy">
                  Conflict check
                </h2>
                <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-ink/80">
                  The principal reviews the submission and confirms there
                  is no conflict with an existing client and that the
                  matter falls within our practice.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[auto_1fr] gap-x-6 py-6">
              <span className="font-serif text-3xl text-brand-navy/40 tabular-nums">
                02
              </span>
              <div>
                <h2 className="font-serif text-xl text-brand-navy">
                  Initial response
                </h2>
                <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-ink/80">
                  Within one business day. Either a proposal to schedule a
                  brief introductory call, a written request for
                  additional context, or an honest note that we are not
                  the right firm for this matter.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[auto_1fr] gap-x-6 py-6">
              <span className="font-serif text-3xl text-brand-navy/40 tabular-nums">
                03
              </span>
              <div>
                <h2 className="font-serif text-xl text-brand-navy">
                  Engagement letter
                </h2>
                <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-brand-ink/80">
                  If we proceed, scope, deliverables, fees, and
                  confidentiality terms are set out in writing.
                  Substantive work begins once the engagement letter is
                  countersigned.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* No-privilege-yet warning per CLAUDE.md §7. */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-12">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="eyebrow mb-3">Important — please read</p>
          <p className="max-w-[80ch] text-[14px] leading-relaxed text-brand-ink/80">
            Submitting this form does <strong>not</strong> create an
            attorney&ndash;client, CPA&ndash;client, or advisor&ndash;client
            relationship, and the information you have sent is{" "}
            <strong>not yet privileged</strong>. Privilege attaches only
            after a written engagement letter has been countersigned.
            Until then, please do not send additional confidential or
            privileged material.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="02">In the meantime</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance max-w-[24ch]">
              You may find these useful.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-3">
            <ButtonLink href="/engage" variant="secondary">
              How we work
            </ButtonLink>
            <Link
              href="/insights"
              className="link-quiet text-sm text-brand-ink/70"
            >
              Read recent briefings &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
