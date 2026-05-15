import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Shekhar & Associates collects, uses, retains, and deletes personal information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal / Privacy"
        index="B"
        title={<>Privacy.</>}
        lede="What we collect through this website, how long we keep it, who can see it, and how to ask us to delete it."
      />

      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="eyebrow">Last reviewed</p>
            <p className="mt-2 text-[14px] text-brand-ink/80">May 2026</p>
          </aside>
          <article className="md:col-span-8 md:col-start-5 article">
            <h2>What we collect</h2>
            <p>
              We collect three categories of information through this
              website. First, the fields you submit through the intake
              form: name, work email, organization (if provided), the
              jurisdictions involved in your matter, the matter category,
              your brief description of the matter, your preferred
              contact method, and (optionally) how you heard about the
              firm. Second, basic technical information our hosting
              provider records when any web page is requested: IP
              address, browser type and version, the URL requested, and
              the timestamp. Third, aggregate usage analytics: which
              pages are viewed and for how long, collected without
              third-party tracking cookies. We do not use Google
              Analytics, Meta Pixel, or LinkedIn Insight on the intake
              flow.
            </p>

            <h2>How we use it</h2>
            <p>
              Information submitted through the intake form is used to
              respond to your inquiry, run a conflict check, and
              determine whether the firm can accept the matter. Technical
              information from our hosting provider is used to operate
              the site, diagnose errors, and detect abuse. Aggregate
              analytics are used to understand which content on the site
              is read.
            </p>
            <p>
              We do not sell, rent, or trade your personal information.
              We do not use it to send marketing communications you have
              not requested.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Intake-form submissions are retained for as long as is
              reasonably necessary to evaluate the matter and, if an
              engagement is opened, in accordance with the
              record-retention requirements of the relevant professional
              body (ICAI, AICPA, and the applicable bar council). Where
              no engagement results, intake submissions are deleted at
              the earlier of (a) twelve months from the date of
              submission and (b) your written request. Hosting-provider
              access logs are retained for a maximum of ninety days.
              Aggregate analytics do not contain personally identifiable
              information.
            </p>

            <h2>Who can see it</h2>
            <p>
              Intake-form submissions are sent directly to the principal.
              We do not route intake through a third-party CRM or
              marketing platform. Where we engage a subcontracted
              professional to assist on a matter, that person is bound
              by the same confidentiality and conflict-check rules as
              the firm. Hosting-provider logs are accessible to the
              hosting provider under their standard service terms.
            </p>

            <h2>Cookies</h2>
            <p>
              The site does not set tracking cookies. A small,
              first-party cookie is used to remember whether you have
              dismissed in-page notices, where applicable. No cookies are
              used on the intake form.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to
              access, correct, or delete personal information we hold
              about you, and to object to or restrict its processing. To
              exercise these rights, please write to{" "}
              <a
                className="link-quiet text-brand-navy"
                href="mailto:privacy@shekhar-associates.com"
              >
                privacy@shekhar-associates.com
              </a>
              . We will respond within thirty days. Where information is
              part of an active engagement file, our ability to delete
              may be limited by the record-retention rules referenced
              above; we will explain any such limitation in writing.
            </p>

            <h2>Children</h2>
            <p>
              This website is not directed to children under the age of
              eighteen, and we do not knowingly collect personal
              information from them.
            </p>

            <h2>Changes</h2>
            <p>
              We may amend this notice from time to time. The
              &ldquo;Last reviewed&rdquo; date at the top of this page
              reflects the most recent amendment. Material changes will
              be highlighted on this page for thirty days following the
              amendment.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
