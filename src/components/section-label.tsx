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
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60",
        className
      )}
    >
      <span className="inline-block h-[1px] w-8 bg-bone/40" />
      {index && <span className="text-ember">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
