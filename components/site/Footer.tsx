import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { flags, site } from "../lib/site";

export function Footer() {
  const disabled = flags.comingSoon;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-bold text-slate-900">{site.name}</div>
            <div className="mt-1 text-sm text-slate-600">{site.location}</div>
          </div>

          <div className="flex gap-6 text-sm font-semibold">
            {disabled ? (
              <>
                <span className="text-slate-400 opacity-50 cursor-not-allowed">
                  Szolgáltatások
                </span>
                <span className="text-slate-400 opacity-50 cursor-not-allowed">
                  Árak
                </span>
                <span className="text-slate-400 opacity-50 cursor-not-allowed">
                  Kapcsolat
                </span>
              </>
            ) : (
              <>
                <Link
                  className="text-slate-700 hover:text-slate-900"
                  href="/services"
                >
                  Szolgáltatások
                </Link>
                <Link
                  className="text-slate-700 hover:text-slate-900"
                  href="/pricing"
                >
                  Árak
                </Link>
                <Link
                  className="text-slate-700 hover:text-slate-900"
                  href="/contact"
                >
                  Kapcsolat
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
