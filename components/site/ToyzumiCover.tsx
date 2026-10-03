import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Lang } from "@/components/lib/i18n";

export function ToyzumiCover({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <Link
      href="/portfolio/toyzumi"
      className="group block min-w-0 overflow-hidden rounded-2xl border border-white/20 bg-[#10192b] shadow-2xl transition hover:border-[#c6f36b]/60"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <span className="text-sm font-semibold text-[#f6f8fd]">ToyZumi</span>
        <span className="text-xs text-[#c6f36b]">
          {en ? "Featured project · staging" : "Kiemelt projekt · staging"}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src="/portfolio/toyzumi/02-products.png"
          alt={
            en
              ? "ToyZumi product catalogue with filters, stock indicators and preorder options"
              : "A ToyZumi termékkatalógusa szűrőkkel, készletjelzésekkel és előrendeléssel"
          }
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          preload
          className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-[#bec9dd]">
        <span>
          {en
            ? "Product catalogue · project screenshot"
            : "Termékkatalógus · saját projekt képernyőképe"}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-[#c6f36b]"
        />
      </div>
    </Link>
  );
}
