import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a brief description of the matter. We reply within one business day and run a conflict check before substantive discussion begins.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        index="01"
        title={<>Begin a conversation.</>}
        lede="Send a paragraph describing the matter. We confirm whether we are the right firm, run a conflict check, and propose a brief introductory call."
        aside={
          <div>
            <p className="eyebrow mb-2">Direct line</p>
            <a
              href="mailto:contact@shekhar-associates.com"
              className="link-quiet text-brand-navy"
            >
              contact@shekhar-associates.com
            </a>
            <p className="mt-3 text-brand-ink/65">
              Replies within one business day.
            </p>
            <p className="mt-3 text-brand-ink/65">
              The form below sends directly to the principal. We do not
              route intake through a third-party CRM.
            </p>
          </div>
        }
      />

      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02">Intake</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance">
              A few details.
            </h2>
            <div className="prose-body mt-6">
              <p className="text-[14.5px]">
                These fields tell us what we need to run a conflict check
                and route the matter. Keep the description high-level.
                Privileged or confidential information should wait until
                we confirm we can act.
              </p>
              <p className="text-[14.5px]">
                We typically reply within one business day. If we are not
                the right firm for the matter, we will say so directly and,
                where appropriate, refer.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <IntakeForm />
          </div>
        </div>
      </section>
    </>
  );
}
