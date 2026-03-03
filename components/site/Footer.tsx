import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { flags, site } from "../lib/site";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function Footer({ lang }: { lang: Lang }) {
  const disabled = flags.comingSoon;
  const t = getDictionary(lang);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-bold text-slate-900">
              {site.name}
            </div>
            <div className="mt-1 text-sm text-slate-600">
              {t.footer.location}
            </div>
          </div>

          <div className="flex gap-6 text-sm font-semibold">
            {disabled ? (
              <>
                <span className="text-slate-400 opacity-50 cursor-not-allowed">
                  {t.footer.services}
                </span>
                <span className="text-slate-400 opacity-50 cursor-not-allowed">
                  {t.footer.pricing}
                </span>
                <span className="text-slate-400 opacity-50 cursor-not-allowed">
                  {t.footer.contact}
                </span>
              </>
            ) : (
              <>
                <Link
                  className="text-slate-700 hover:text-slate-900"
                  href="/services"
                >
                  {t.footer.services}
                </Link>
                <Link
                  className="text-slate-700 hover:text-slate-900"
                  href="/pricing"
                >
                  {t.footer.pricing}
                </Link>
                <Link
                  className="text-slate-700 hover:text-slate-900"
                  href="/contact"
                >
                  {t.footer.contact}
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}
        </div>
      </Container>
    </footer>
  );
}
