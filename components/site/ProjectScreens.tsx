import { PortfolioScreenshotSlot } from "./PortfolioScreenshotSlot";
import type { Lang } from "@/components/lib/i18n";

export function ProjectScreens({ slug, lang }: { slug: string; lang: Lang }) {
  const en = lang === "en";
  if (slug !== "menutivo" && slug !== "molnar-diagnostic") return null;
  const menutivo = slug === "menutivo";
  return (
    <div className="mt-12 border-t border-slate-200 pt-10">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        {en ? "A look inside the application" : "Nézz bele az alkalmazásba"}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
        {menutivo
          ? en
            ? "Screenshots from local development tests, with sample restaurants and orders. The discovery image uses substituted test names. Click to enlarge."
            : "Képernyőképek a helyi fejlesztői tesztekből, mintaéttermekkel és tesztrendelésekkel. Az étteremkereső képén a neveket semleges tesztnevekre cseréltem. Kattints a nagyításhoz."
          : en
            ? "Archived development screenshots from versions 0.5 and 0.3. They illustrate the interface and workflow, not the latest release or a customer's service result."
            : "Korábbi fejlesztői képernyők a 0.5-ös és 0.3-as verzióból. A felületet és a vizsgálati menetet mutatják, nem a legfrissebb kiadást vagy egy ügyfél javítási eredményét."}
      </p>
      <div className="mt-7 grid items-start gap-6 lg:grid-cols-2">
        <PortfolioScreenshotSlot
          folder={slug}
          lang={lang}
          filename={menutivo ? "01-discover-v2.png" : "01-assessment.png"}
          label={
            menutivo
              ? en
                ? "Restaurant discovery"
                : "Étteremkereső és felfedezés"
              : en
                ? "Assessment and findings"
                : "Állapotfelmérés és megállapítások"
          }
          description={
            menutivo
              ? en
                ? "Search, category filters and restaurant cards in one view."
                : "Keresés, kategóriaszűrés és étteremkártyák egy felületen."
              : en
                ? "Findings are linked to their evidence and distinguished from unavailable readings."
                : "A megállapításokhoz bizonyíték tartozik; a nem értékelhető adatok külön jelölést kapnak."
          }
          fit={menutivo ? "cover" : "contain"}
          objectPosition="top"
        />
        <PortfolioScreenshotSlot
          folder={slug}
          lang={lang}
          filename={menutivo ? "02-table-order.png" : "02-hardware.png"}
          label={
            menutivo
              ? en
                ? "Shared table on mobile"
                : "Közös asztal mobilon"
              : en
                ? "Hardware inventory and service view"
                : "Gépleltár és szerviznézet"
          }
          description={
            menutivo
              ? en
                ? "Orders from several devices, payment item selection and calling a waiter. The enlarged screenshot shows the full mobile screen."
                : "Több telefon rendelései, fizetendő tételek kiválasztása és pincérhívás. Nagyítva a teljes mobilképernyő látható."
              : en
                ? "Memory information, expansion checks and targeted printer investigation."
                : "Memóriaadatok, bővítési szempontok és célzott nyomtatóvizsgálat."
          }
          fit={menutivo ? "cover" : "contain"}
          objectPosition="top"
        />
      </div>
    </div>
  );
}
