import Link from "next/link";
import { Magnetic } from "@/components/magnetic";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ember text-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
          [ 08 · Begin ]
        </div>
        <div className="mt-8 font-serif text-[clamp(3rem,10vw,12rem)] leading-[0.88] tracking-mega-tight text-pretty">
          The first <em>thirty</em> <br />
          minutes are <br />
          <span className="inline-flex items-center gap-6">
            always <em className="underline decoration-ink/40 underline-offset-[0.12em]">yours.</em>
          </span>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-8">
          <p className="max-w-md text-ink/80 text-lg text-pretty">
            No pitch. No panel of unfamiliar faces. A partner on a call, reading the same facts
            you&apos;re reading, giving you an honest read.
          </p>
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-5 text-bone font-mono text-xs uppercase tracking-[0.22em] hover:bg-ink-700 transition-colors"
              data-cursor="begin"
            >
              Request the thirty →
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
