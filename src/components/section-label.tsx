import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="inline-block h-px w-8 bg-brand-rule" aria-hidden />
      {index && <span className="eyebrow">{index}</span>}
      <span className="eyebrow">{children}</span>
    </div>
  );
}
