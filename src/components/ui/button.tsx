import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button type={type} className={cn(variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
