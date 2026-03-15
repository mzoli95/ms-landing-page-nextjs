"use client";

import Link from "next/link";
import { cn } from "../lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  onClick,
  variant = "primary",
  className,
  children,
  type,
  disabled,
}: {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

  const styles: Record<Variant, string> = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400",
    secondary:
      "border border-white/20 bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white/40",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-900/5 focus-visible:ring-slate-300 dark:text-slate-100 dark:hover:bg-slate-100/10",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed pointer-events-none hover:translate-y-0 active:scale-100";

  const cls = cn(base, styles[variant], disabled && disabledStyles, className);

  if (href) {
    return (
      <Link
        className={cls}
        href={disabled ? "#" : href}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.();
        }}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className={cls}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
