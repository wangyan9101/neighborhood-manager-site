import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: LinkButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();

  if (!href) {
    return (
      <span className={`${classes} button-disabled`} aria-disabled="true">
        {children}
      </span>
    );
  }

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
