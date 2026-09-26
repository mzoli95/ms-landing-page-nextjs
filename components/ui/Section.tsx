import { cn } from "../lib/utils";
import { Container } from "./Container";

export function Section({
  heading = "h2",
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  heading?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const Heading = heading;
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {eyebrow}
            </div>
          )}
          <Heading className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </Heading>
          {description && (
            <p className="mt-4 text-base leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
