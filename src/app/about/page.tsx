import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { SplitReveal, Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { ButtonLink } from "@/components/ui/button";

export const metadata = {
  title: "About · Shekhar & Associates",
  description:
    "A boutique advisory practice in Mumbai, Bengaluru, and Singapore. Meet the partners.",
};

const team = [
  {
    name: "Arjun Shekhar",
    role: "Founding Partner",
    bio: "Former Senior Partner, Magic-Circle India practice. Lead counsel on 40+ M&A transactions above ₹500 Cr.",
    credentials: "LL.M (Harvard) · AoR, Supreme Court of India",
    focus: "M&A · Capital Markets",
  },
  {
    name: "Meera Iyer",
    role: "Partner, Finance & Tax",
    bio: "Previously with Big Four transaction advisory. Architect of the firm's cross-border tax structures.",
    credentials: "CA · CFA · B.Com (Hons) Delhi",
    focus: "Tax · Structuring",
  },
  {
    name: "Rohan Verma",
    role: "Partner, Disputes",
    bio: "Appears regularly before NCLT, NCLAT, and the Bombay High Court. Designated Senior Advocate, 2023.",
    credentials: "Sr. Advocate · LL.M (Oxford)",
    focus: "Disputes · Arbitration",
  },
  {
    name: "Priya Khanna",
    role: "Partner, Private Client",
    bio: "Advises single-family offices across India, Singapore, and the GCC on succession and governance.",
    credentials: "STEP Fellow · LL.M (NUS)",
    focus: "Trusts · Succession",
  },
];

const timeline = [
  { year: "1998", event: "Founded in Nariman Point as a two-partner firm." },
  { year: "2004", event: "First cross-border M&A mandate; Mauritius structuring." },
  { year: "2011", event: "Bengaluru office opens to serve founder-led technology clients." },
  { year: "2016", event: "Admitted as amicus on a reported Supreme Court tax matter." },
  { year: "2019", event: "Singapore bench opens; GCC corridor practice launched." },
  { year: "2024", event: "Designated as one of India's Most Innovative Law Firms by FT Asia-Pacific." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page opening */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="01">About the Firm</SectionLabel>
          <h1 className="mt-8 font-serif text-display-lg leading-[0.9] tracking-mega-tight text-balance">
            <SplitReveal text="Small by design." /> <br />
            <em className="text-ember">
              <SplitReveal text="Senior by default." delay={0.15} />
            </em>
          </h1>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5 md:col-start-2">
              <p className="font-serif text-2xl leading-[1.3] text-pretty">
                We are a partnership of twelve—four of whom are on this page. Every matter is led
                by a partner with skin in its outcome.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-8 text-bone/70 text-pretty leading-relaxed">
              <p>
                Founded in 1998 as a chambers practice, Shekhar & Associates was built on a single
                conviction: that the clients who most need considered counsel are the least likely
                to get it from firms organized for scale.
              </p>
              <p className="mt-4">
                We remain deliberately small. We expect to know every matter on our desk by name.
                We turn work away when we cannot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee className="border-y border-bone/10 py-6" slow>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">Bar Council of India</span>
        <span className="text-ember">/</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">Singapore Institute of Arbitrators</span>
        <span className="text-ember">/</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">International Bar Association</span>
        <span className="text-ember">/</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">SEBI Registered Merchant Banker Advisors</span>
        <span className="text-ember">/</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">ICAI Audit Firm Affiliation</span>
        <span className="text-ember">/</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">STEP India</span>
        <span className="text-ember">/</span>
      </Marquee>

      {/* Philosophy */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="02">Philosophy</SectionLabel>
          <div className="mt-10 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="font-serif text-display-md leading-[0.95] text-balance">
                A practice, not a <em className="text-ember">platform.</em>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-8 text-lg leading-relaxed text-bone/80 text-pretty">
              <p>
                Law is not volume. Finance is not tooling. The moments our clients hire us for are
                specific, often irreversible, and require a single person to have held every thread
                in their hand.
              </p>
              <p>
                Our firm is organized so that person exists. They are a partner. You have their
                number. And their calendar will never contain a matter they did not choose to take.
              </p>
              <p className="font-serif italic text-ember text-xl">
                — A. Shekhar, Founding Partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-bone text-ink py-32 md:py-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <SectionLabel index="03" className="text-ink/50">
                <span className="text-ember">Partners</span>
              </SectionLabel>
              <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance max-w-[18ch]">
                The people you <em className="text-ember">actually work with.</em>
              </h2>
            </div>
            <p className="max-w-sm text-ink/70">
              Every client is assigned a lead partner at intake. No bait-and-switch. No associate
              hand-off.
            </p>
          </div>

          <div className="mt-20 grid gap-px bg-ink/10 md:grid-cols-2">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="group relative bg-bone p-10 md:p-14 hover:bg-ember/10 transition-colors h-full">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ink/20 bg-bone-300 font-serif text-4xl italic">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-serif text-3xl leading-tight">{p.name}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                          {p.role}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-8 text-ink/80 leading-relaxed text-pretty">{p.bio}</p>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
                    <span>{p.credentials}</span>
                    <span className="text-ember">{p.focus}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel index="04">Timeline</SectionLabel>
          <h2 className="mt-6 font-serif text-display-md leading-[0.95] text-balance max-w-[18ch]">
            Twenty-eight years, <em className="text-ember">built on referrals.</em>
          </h2>
          <ul className="mt-20 space-y-0 divide-y divide-bone/10 border-y border-bone/10">
            {timeline.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-12 items-baseline gap-6 py-8 md:py-10 group hover:bg-bone/5 -mx-6 px-6 md:-mx-10 md:px-10 transition-colors"
              >
                <span className="col-span-3 md:col-span-2 font-serif text-4xl md:text-6xl text-ember tabular-nums">
                  {t.year}
                </span>
                <span className="col-span-9 md:col-span-10 font-serif text-xl md:text-3xl leading-[1.15] text-pretty">
                  {t.event}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] border-t border-bone/10 pt-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-serif text-display-md leading-[0.95] text-balance">
                Want to meet the partner who&apos;d take your call?
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6 justify-end">
              <p className="text-bone/70 text-pretty">
                Send a paragraph describing the matter. We&apos;ll tell you—honestly—whether we&apos;re
                the right firm for it.
              </p>
              <ButtonLink href="/contact" variant="filled">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
