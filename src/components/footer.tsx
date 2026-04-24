import Link from "next/link";
import { Marquee } from "@/components/marquee";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-ink pt-24 pb-8 border-t border-bone/10">
      <Marquee className="border-y border-bone/10 py-10" slow>
        <span className="font-serif italic text-5xl md:text-7xl text-bone/90">
          Counsel without compromise
        </span>
        <span className="text-ember text-4xl">✦</span>
        <span className="font-serif italic text-5xl md:text-7xl text-bone/90">
          Capital with conscience
        </span>
        <span className="text-ember text-4xl">✦</span>
        <span className="font-serif italic text-5xl md:text-7xl text-bone/90">
          Strategy with edge
        </span>
        <span className="text-ember text-4xl">✦</span>
      </Marquee>

      <div className="mx-auto mt-24 grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
            [ Get in touch / 006 ]
          </div>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
            Tell us what&apos;s <em className="text-ember">at stake.</em>
          </h2>
          <p className="mt-6 max-w-md text-bone/70 text-pretty">
            We reply to qualified inquiries within one business day. Confidentiality is assumed
            from first contact.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-ink font-mono text-xs uppercase tracking-[0.22em] hover:bg-ember transition-colors"
            data-cursor="write us"
          >
            Begin a conversation
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-6">
            Practice
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services#legal" className="link-underline">Legal</Link></li>
            <li><Link href="/services#finance" className="link-underline">Finance</Link></li>
            <li><Link href="/services#regulatory" className="link-underline">Regulatory</Link></li>
            <li><Link href="/services#private" className="link-underline">Private Client</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-6">
            Firm
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="link-underline">About</Link></li>
            <li><Link href="/work" className="link-underline">Work</Link></li>
            <li><Link href="/insights" className="link-underline">Insights</Link></li>
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 mb-6">
            Offices
          </div>
          <ul className="space-y-4 text-sm text-bone/75">
            <li>
              <div className="text-bone">Mumbai</div>
              <div className="text-bone/60">Nariman Point · Level 14</div>
            </li>
            <li>
              <div className="text-bone">Bengaluru</div>
              <div className="text-bone/60">UB City · Vittal Mallya Road</div>
            </li>
            <li>
              <div className="text-bone">Singapore</div>
              <div className="text-bone/60">Raffles Place · One Raffles Quay</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-[1600px] flex-col-reverse gap-6 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="font-serif text-[clamp(3rem,12vw,14rem)] leading-[0.85] tracking-mega-tight -mx-1">
          SHEKHAR<span className="text-ember">&</span>ASSOCIATES
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1600px] flex-col-reverse gap-3 px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 md:flex-row md:items-center md:justify-between md:px-10">
        <div>© {year} Shekhar & Associates · Bar Council No. MH/01824</div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
            Taking on new matters · Q{Math.ceil((new Date().getMonth() + 1) / 3)} {year}
          </span>
          <Link href="#" className="link-underline">Privacy</Link>
          <Link href="#" className="link-underline">Disclosures</Link>
        </div>
      </div>
    </footer>
  );
}
