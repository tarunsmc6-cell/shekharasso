import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { ButtonLink } from "@/components/ui/button";

type Briefing = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  lastReviewed: string;
  minutes: string;
  author: string;
  body: React.ReactNode;
};

const briefings: Briefing[] = [
  {
    slug: "sample-briefing",
    category: "Tax · Cross-border",
    title: "Reading the GAAR notification: what founders actually need to file.",
    dek: "GAAR is invoked far less often than it is feared. The filings that matter — and the disclosures that do not — are narrower than most founders assume.",
    lastReviewed: "May 2026",
    minutes: "6 min read",
    author: "Principal, Shekhar & Associates",
    body: (
      <>
        <p>
          The General Anti-Avoidance Rule (GAAR) is one of the most discussed
          and least invoked provisions in Indian tax law. Chapter X-A of the
          Income-tax Act, 1961, as introduced by the Finance Act, 2012 and
          notified into effect from 1 April 2017, gives the Revenue the power
          to recharacterise an &ldquo;impermissible avoidance arrangement&rdquo;
          and tax its substance. Founders read this and assume the worst.
          The data does not support the worst.
        </p>
        <h2>The narrow gateway</h2>
        <p>
          Section 96 sets out four positive limbs of impermissibility. An
          arrangement must (a) create rights or obligations not ordinarily
          created at arm&rsquo;s length, (b) result, directly or indirectly,
          in misuse or abuse of the Act, (c) lack commercial substance, or
          (d) be carried out in a manner not ordinarily employed for bona
          fide purposes. A finding of fact, recorded by the Assessing
          Officer, is required against each limb the Revenue intends to
          rely on.
        </p>
        <p>
          That is a higher evidentiary bar than the transfer-pricing
          adjustments founders are used to seeing. It is also a procedurally
          slower one: an Approving Panel under Section 144BA must clear an
          invocation, and panels are headed by High Court judges.
        </p>
        <h2>What does this mean for founders?</h2>
        <p>
          Three points are worth holding in mind. First, structuring
          decisions that have a real commercial purpose &mdash; a holding
          company in a treaty jurisdiction set up to hold operating
          subsidiaries, with directors and substance &mdash; are not the
          paradigm GAAR cases. Second, the disclosure that triggers
          attention is rarely the holding structure itself; it is the
          internal pattern of payments that the structure routes. Third,
          contemporaneous documentation matters more than ex-post
          justification.
        </p>
        <h2>The filings that matter</h2>
        <p>
          For most founders, the operative documents are not anti-GAAR
          memos. They are: the transfer-pricing study under Section 92D and
          the accompanying Form 3CEB; the Master File and CbCR under
          Section 92D(4) where thresholds are met; and the income-tax return
          schedules that describe related-party transactions and overseas
          assets. Get these right and the GAAR conversation, if it arises,
          starts from a defensible position.
        </p>
        <h2>What we tell clients</h2>
        <p>
          Do not over-engineer disclosures. Do document commercial purpose
          contemporaneously. Where a transaction is significant, take a
          written opinion before signing &mdash; not after the assessment
          notice.
        </p>
      </>
    ),
  },
  {
    slug: "sample-briefing-2",
    category: "Corporate Law",
    title: "Drafting the right of first refusal: five clauses founders agree to too quickly.",
    dek: "ROFR clauses look mechanical at signing. The mechanics matter at exit. Five drafting points that change who gets to decide when the company is sold.",
    lastReviewed: "May 2026",
    minutes: "8 min read",
    author: "Principal, Shekhar & Associates",
    body: (
      <>
        <p>
          A right of first refusal sits in every venture-stage shareholder
          agreement. Founders rarely negotiate it hard at signing because
          the document feels mechanical and the leverage is elsewhere. Five
          drafting points are worth looking at again before the term sheet
          is closed.
        </p>
        <h2>One — Trigger scope</h2>
        <p>
          A ROFR triggered by &ldquo;any transfer&rdquo; is not the same as
          one triggered by &ldquo;any sale to a third party.&rdquo; The
          first sweeps in transfers to family trusts, holding companies, and
          estate vehicles; the second does not. Founders who later
          restructure for succession or tax frequently find their own
          documents in the way of their planning.
        </p>
        <h2>Two — Match-or-decline mechanics</h2>
        <p>
          Some ROFR clauses require the rightholder to match the third
          party&rsquo;s offer exactly. Others permit the rightholder to
          purchase at a price determined by an independent valuer. The two
          look similar; in a contested exit they are not.
        </p>
        <h2>Three — Drag interaction</h2>
        <p>
          A drag-along that triggers above a threshold can override a ROFR
          held by minority shareholders. Or it can be expressly subordinated
          to the ROFR. The default depends on the order of operations the
          drafter chose. Read both clauses together.
        </p>
        <h2>Four — Time windows</h2>
        <p>
          Thirty days to exercise a ROFR is industry standard; sixty is
          generous; fifteen is hostile. The window controls whether a real
          third-party buyer remains at the table during the exercise period.
          For a founder who would prefer the third-party sale to close, a
          shorter window is friendlier.
        </p>
        <h2>Five — Tag-along reciprocity</h2>
        <p>
          A ROFR for the company without a corresponding tag-along for
          minority holders is one-sided. A tag-along without a ROFR is
          incomplete. The two clauses move together and should be drafted
          together.
        </p>
        <h2>What we tell clients</h2>
        <p>
          Read the ROFR, the drag, and the tag-along as one document. Run
          the worst-case exit through them on paper, before signing.
          Whatever the model is, the model determines who decides when the
          company is sold.
        </p>
      </>
    ),
  },
  {
    slug: "sample-briefing-3",
    category: "US CPA · India–US Corridor",
    title: "If you took a US W-2 and own an Indian company: a short checklist.",
    dek: "Substantial-presence, treaty-tiebreaker, FBAR, Form 5471, Form 8938 — and the reading of each that most clients miss the first year.",
    lastReviewed: "May 2026",
    minutes: "7 min read",
    author: "Principal, Shekhar & Associates",
    body: (
      <>
        <p>
          A founder takes a US W-2 role at a portfolio company. The Indian
          operating company remains in their name. The first US tax filing
          they make &mdash; or fail to make &mdash; sets the position for
          the next several years.
        </p>
        <h2>Residency</h2>
        <p>
          The substantial-presence test under IRC §7701(b) counts days
          across a three-year window. The India&ndash;US DTAA tiebreaker
          (Article 4) can override the SPT result where the facts support
          it. Both calculations live in the file; the position taken on the
          return needs to match.
        </p>
        <h2>FBAR</h2>
        <p>
          FinCEN Form 114 reports foreign financial accounts where the
          aggregate value exceeded USD 10,000 at any point in the year.
          Signature authority alone &mdash; without ownership &mdash;
          triggers the filing. Indian bank accounts, demat accounts, and
          some PMS accounts all qualify.
        </p>
        <h2>Form 5471</h2>
        <p>
          A US person who owns a controlled foreign corporation files Form
          5471. The category determines the schedules and the depth of
          information. For a founder who owns 100% of an Indian private
          limited company, the form is typically Category 4 or Category 5,
          with full schedules. The penalty for non-filing starts at USD
          10,000 per year, per entity.
        </p>
        <h2>Form 8938</h2>
        <p>
          The FATCA Form 8938 reports specified foreign financial assets at
          aggregate values that vary by filing status and residency.
          Overlaps with the FBAR but is not identical; the IRS receives
          both.
        </p>
        <h2>What we tell clients</h2>
        <p>
          Make the residency call first, with the workings retained. Then
          map the entity to the right forms. Then make the filings on time.
          Most penalties in this area arise from late filings, not from
          contested positions.
        </p>
      </>
    ),
  },
];

export async function generateStaticParams() {
  return briefings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = briefings.find((x) => x.slug === slug);
  if (!b) return { title: "Insights" };
  return {
    title: b.title,
    description: b.dek,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = briefings.find((x) => x.slug === slug);
  if (!b) return notFound();

  return (
    <>
      <PageHero
        eyebrow={`Insights / ${b.category}`}
        index="A"
        title={<>{b.title}</>}
        lede={b.dek}
        aside={
          <div className="space-y-2">
            <p className="eyebrow">Last reviewed</p>
            <p>{b.lastReviewed}</p>
            <p className="text-brand-ink/55">{b.minutes}</p>
            <p className="text-brand-ink/55">{b.author}</p>
          </div>
        }
      />

      <section className="border-t border-brand-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel index="01">Briefing</SectionLabel>
          </div>
          <article className="md:col-span-8 md:col-start-5 article">
            {b.body}
          </article>
        </div>
      </section>

      {/* Disclaimer per CLAUDE.md §9 — every insight page carries it. */}
      <section className="border-t border-brand-rule bg-brand-cream-50 py-12">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="eyebrow mb-3">Notice</p>
          <p className="max-w-[80ch] text-[12.5px] leading-relaxed text-brand-ink/70">
            The content on this site is provided for general informational
            purposes only and does not constitute legal, tax, accounting, or
            financial advice. No attorney&ndash;client, CPA&ndash;client, or
            advisor&ndash;client relationship is created by your use of this
            site or by any communication with the firm until a written
            engagement letter is executed. Past results do not guarantee
            future outcomes. Jurisdiction-specific rules may apply; consult
            qualified counsel in your jurisdiction.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="02">Next step</SectionLabel>
            <h2 className="mt-6 font-serif text-display-sm font-semibold text-brand-navy text-balance max-w-[24ch]">
              If this raised a question about a specific matter:
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-3">
            <ButtonLink href="/contact" variant="primary">
              Begin a conversation
            </ButtonLink>
            <Link
              href="/insights"
              className="link-quiet text-sm text-brand-ink/70"
            >
              Back to briefings &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
