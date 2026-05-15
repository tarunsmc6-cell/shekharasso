import type { ReactNode } from "react";
import { SectionLabel } from "@/components/section-label";

type PageHeroProps = {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, index, title, lede, aside }: PageHeroProps) {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <SectionLabel index={index}>{eyebrow}</SectionLabel>
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-9 font-serif text-display-lg font-semibold text-brand-navy text-balance">
            {title}
          </h1>
          {(lede || aside) && (
            <div className="md:col-span-7 md:col-start-1 lg:col-start-1">
              {lede && (
                <p className="font-serif text-2xl md:text-[26px] leading-[1.4] text-brand-ink/85 text-pretty max-w-[60ch]">
                  {lede}
                </p>
              )}
            </div>
          )}
          {aside && (
            <div className="md:col-span-4 md:col-start-9 text-sm leading-relaxed text-brand-ink/70">
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
