import { getLangFromCookies } from "@/components/lib/i18n";
import { ProjectNavigation } from "@/components/site/ProjectNavigation";

export default async function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLangFromCookies();
  return (
    <>
      <ProjectNavigation lang={lang} />
      {children}
    </>
  );
}
