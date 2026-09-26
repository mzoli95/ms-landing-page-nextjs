import { cn } from "../lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition duration-300 ease-out hover:shadow-lg hover:shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20 dark:hover:border-slate-600 dark:hover:shadow-black/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
