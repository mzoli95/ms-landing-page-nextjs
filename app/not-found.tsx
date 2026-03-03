import { getLangFromCookies } from "@/components/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/components/lib/dictionary";

export default async function NotFound() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);
  const content = t.notFound;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {content.eyebrow}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/">{content.home}</Button>
            <Button href="/contact" variant="ghost">
              {content.contact}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
