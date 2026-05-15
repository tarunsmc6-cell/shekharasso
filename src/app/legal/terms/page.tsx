import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms governing use of this website. These terms do not govern professional engagements, which are documented separately in a written engagement letter.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal / Terms"
        index="C"
        title={<>Terms.</>}
        lede="The terms below govern your use of this website. They do not govern engagements, which are documented separately in a written engagement letter."
      />

      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="eyebrow">Last reviewed</p>
            <p className="mt-2 text-[14px] text-brand-ink/80">May 2026</p>
          </aside>
          <article className="md:col-span-8 md:col-start-5 article">
            <h2>Use of this website</h2>
            <p>
              You may read, print, and share content from this website
              for personal, non-commercial reference. Republishing
              briefings, in whole or in substantial part, requires the
              firm&rsquo;s prior written consent. Any republication must
              credit the firm and retain the &ldquo;last reviewed&rdquo;
              date and the standard disclaimer.
            </p>

            <h2>No advice; no engagement</h2>
            <p>
              Nothing on this site constitutes legal, tax, accounting, or
              financial advice. Use of the site does not create an
              advisor&ndash;client relationship. See the{" "}
              <a className="link-quiet text-brand-navy" href="/legal/disclaimer">
                Disclaimer
              </a>{" "}
              for the full notice.
            </p>

            <h2>Accuracy and currency</h2>
            <p>
              We aim to publish accurate information and to mark
              materials with a &ldquo;last reviewed&rdquo; date.
              Statutes, standards, and regulatory notifications change;
              the firm does not warrant that any content remains current
              or applicable to your facts.
            </p>

            <h2>Third-party links</h2>
            <p>
              Some pages may link to third-party websites. The firm does
              not control and is not responsible for the content,
              accuracy, or practices of any third party.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The wordmark, monogram, and original written content on
              this site are the property of the firm. The visual
              identity, including typography and the brand palette, is
              copyrighted as a whole. The firm&rsquo;s logo may not be
              used without written permission.
            </p>

            <h2>Disclaimer of warranties</h2>
            <p>
              The site is provided on an &ldquo;as is&rdquo; basis. To
              the extent permitted by law, the firm disclaims all
              warranties, express or implied, including warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by law, the firm shall not be
              liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or in
              connection with your use of, or inability to use, the
              site.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of India. The courts
              of competent jurisdiction in the principal&rsquo;s place
              of practice shall have exclusive jurisdiction over any
              dispute arising out of or in connection with these terms,
              subject to applicable conflict-of-laws principles.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms should be sent to{" "}
              <a
                className="link-quiet text-brand-navy"
                href="mailto:contact@shekhar-associates.com"
              >
                contact@shekhar-associates.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
