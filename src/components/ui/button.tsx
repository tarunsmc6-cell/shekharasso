import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/magnetic";

type ButtonVariant = "filled" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
  arrow?: boolean;
};

const base =
  "relative inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] transition-colors";

const variants: Record<ButtonVariant, string> = {
  filled: "bg-bone text-ink hover:bg-ember",
  outline: "border border-bone/30 text-bone hover:border-bone hover:bg-bone hover:text-ink",
  ghost: "text-bone hover:text-ember",
};

export function ButtonLink({
  href,
  children,
  variant = "filled",
  className,
  magnetic = true,
  arrow = true,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  const content = (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
      {arrow && <span className="text-lg leading-none">→</span>}
    </Link>
  );
  return magnetic ? <Magnetic>{content}</Magnetic> : content;
}

export function Button({
  children,
  variant = "filled",
  className,
  arrow = true,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <Magnetic>
      <button className={cn(base, variants[variant], className)} {...rest}>
        {children}
        {arrow && <span className="text-lg leading-none">→</span>}
      </button>
    </Magnetic>
  );
}
