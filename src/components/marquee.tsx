"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
  slow = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  slow?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "marquee-track",
          slow ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        <div className="flex shrink-0 items-center gap-16 pr-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
