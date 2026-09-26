import { ToyzumiStory } from "@/components/site/ToyzumiStory";
import { site } from "@/components/lib/site";
import { pageMetadata } from "@/components/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Check,
  Clock3,
  Database,
  HeartHandshake,
  Languages,
  LockKeyhole,
  Megaphone,
  MessagesSquare,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PortfolioScreenshotSlot } from "@/components/site/PortfolioScreenshotSlot";
import { getLangFromCookies } from "@/components/lib/i18n";

export const metadata: Metadata = {
  ...pageMetadata(
    "ToyZumi 1.1.5 – egyedi e-kereskedelmi és operációs platform",
    "ToyZumi esettanulmány: saját fejlesztésű webshop, adminisztráció, készlet, rendelésfeldolgozás, valós idejű support, hűségprogram, CMS és marketingautomatizálás.",
    "/portfolio/toyzumi",
    "/portfolio/toyzumi/00-portfolio-cover.png",
  ),
  title: "ToyZumi 1.1.5 – egyedi e-kereskedelmi és operációs platform",
  description:
    "ToyZumi esettanulmány: saját fejlesztésű webshop, adminisztráció, készlet, rendelésfeldolgozás, valós idejű support, hűségprogram, CMS és marketingautomatizálás.",
  alternates: { canonical: "/portfolio/toyzumi" },
};

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Összefüggő vásárlási út",
    text: "Kereshető és szűrhető katalógus, termékváltozatok, vendég- és fiókos kosár, kívánságlista, előrendelés, több lépéses checkout és rendeléskövetés.",
  },
  {
    icon: PackageCheck,
    title: "Rendeléstől a teljesítésig",
    text: "Fizetés, számlázás, rendelésállapotok, csomagolási munkasor, szállítás, visszatérítés, előrendelések és visszaküldések egy üzleti folyamatban.",
  },
  {
    icon: Boxes,
    title: "Készlet és beszerzés",
    text: "Készletmozgások, foglalások, alacsony készletszint, beszerzési rendelések, beszállítói import és döntést segítő készletelemzés.",
  },
  {
    icon: HeartHandshake,
    title: "Hűség és ügyfélmegtartás",
    text: "Pont- és XP-alapú, tízszintes hűségprogram aktiválható termék-, kupon- és szállítási jutalmakkal, teljes tranzakciótörténettel.",
  },
  {
    icon: MessagesSquare,
    title: "Valós idejű ügyfélszolgálat",
    text: "Vendég és regisztrált chat, várólista, ügyintézőhöz rendelés, gépelési állapot, képküldés, archiválás, ticket-konverzió és elégedettségmérés.",
  },
  {
    icon: Megaphone,
    title: "Marketing és CMS",
    text: "Többnyelvű kampányszerkesztő, célközönségek, időzített kiküldés, eseményalapú automatizmusok, kézbesítési követés, blog és tartalomkezelés.",
  },
];

const scheduledJobs = [
  {
    icon: RefreshCw,
    title: "Pénzügyi egyeztetés",
    text: "Bizonytalan fizetések és visszatérítések újraellenőrzése, outbox feldolgozás és függő számlák helyreállítása.",
  },
  {
    icon: Clock3,
    title: "Életciklus és megőrzés",
    text: "Logarchiválás, értesítéstakarítás, GDPR-exportok lejárata, fióktörlési türelmi idő, elhagyott kosarak és checkout-vázlatok tisztítása.",
  },
  {
    icon: Workflow,
    title: "Katalógus és teljesítés",
    text: "Időzített termékpublikálás, előrendelések ellenőrzése, vendégrendelések fiókhoz kapcsolása és Keycloak-felhasználók szinkronizálása.",
  },
  {
    icon: Megaphone,
    title: "Kommunikáció",
    text: "Tranzakciós e-mailek, készlet- és értékelési értesítések, kampányok és eseményvezérelt marketingautomatizmusok feldolgozása.",
  },
];

const scheduledJobExamples = [
  {
    icon: RefreshCw,
    title: "Függő számlák helyreállítása",
    schedule: "5 percenként",
    text: "A job a beragadt, hibás vagy még el nem küldött számlákat legfeljebb 50-es kötegekben újra sorba állítja. A bizonytalan szolgáltatói választ előbb külső azonosító alapján egyezteti; ha ez nem dönthető el biztonságosan, nem ismétli meg vakon a műveletet, hanem adminriasztást küld.",
  },
  {
    icon: Clock3,
    title: "Időzített termékpublikálás",
    schedule: "konfigurálható cron szerint",
    text: "A job csak a nem törölt, Scheduled állapotú és már esedékes termékeket publikálja. Egy lépésben rögzíti a publikálás idejét, törli a már felhasznált ütemezést, majd elmenti és naplózza az eredményt.",
  },
];

function ScreenshotNote() {
  return (
    <div className="mb-7 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
      <p>
        A képernyők az 1.1.5-ös staging környezetből származnak. A rajtuk
        látható termékek, felhasználók és számértékek demonstrációs mintaadatok,
        nem produkciós üzleti eredmények.
      </p>
    </div>
  );
}

export default async function ToyzumiCaseStudyPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "ToyZumi",
            description:
              "Saját fejlesztésű e-kereskedelmi és operációs platform, staging környezetben bemutatva.",
            url: `${site.url}/portfolio/toyzumi`,
            image: `${site.url}/portfolio/toyzumi/00-portfolio-cover.png`,
            inLanguage: "hu",
            creator: { "@id": `${site.url}#org` },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#071126] py-16 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.26),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(6,182,212,0.16),transparent_30%)]" />
        <Container className="relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#94a3b8] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />{" "}
            {en ? "Back to portfolio" : "Vissza a munkákhoz"}
          </Link>
          <div className="mt-9 max-w-5xl">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-200">
                E-commerce
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                Full-stack
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-200">
                B2C + back office
              </span>
              <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">
                1.1.5 · staging
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              ToyZumi
              <span className="mt-4 block max-w-3xl text-2xl font-medium leading-tight text-[#c6f36b] sm:text-4xl">
                {en
                  ? "Built for collectors. Informed by demand."
                  : "Gyűjtőknek építve. Keresletre hangolva."}
              </span>
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-[#cbd5e1] sm:text-xl">
              {en
                ? "A custom commerce and operations platform that connects the storefront with inventory, fulfilment, customer service, loyalty, marketing and operational control."
                : "Saját fejlesztésű e-kereskedelmi és operációs platform, amely a vásárlói felületet a készlettel, a rendelésteljesítéssel, az ügyfélszolgálattal, a hűségprogrammal, a marketinggel és az operációs felügyelettel köti össze."}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#94a3b8]">
              Aktív fejlesztés alatt álló, staging környezetben bemutatott
              rendszer. Az alábbi képernyőképek az 1.1.5-ös állapotot
              dokumentálják.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#fff] px-4 py-2.5 text-sm font-bold text-[#020617] transition hover:-translate-y-0.5 hover:bg-[#eff6ff]"
              >
                {en
                  ? "Discuss a similar project"
                  : "Hasonló projektről beszéljünk"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
        <Container className="relative mt-8">
          <nav
            aria-label={
              en ? "Case study chapters" : "Az esettanulmány fejezetei"
            }
            className="flex flex-wrap gap-3 text-sm"
          >
            <a
              className="rounded-full border border-white/20 px-4 py-3 text-white hover:bg-white/10"
              href="#uzleti-ertek"
            >
              {en ? "Business value" : "Mire ad megoldást?"}
            </a>
            <a
              className="rounded-full border border-white/20 px-4 py-3 text-white hover:bg-white/10"
              href="#technikai-reszletek"
            >
              {en ? "Technical details" : "Képernyők és technikai részletek"}
            </a>
            <Link
              className="rounded-full border border-white/20 px-4 py-3 text-white hover:bg-white/10"
              href="/usecases/kereslet-es-keszlet"
            >
              {en ? "Demand planning guide" : "Keresletből beszerzés"}
            </Link>
          </nav>
        </Container>
      </section>

      <Container className="pt-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
          <strong className="text-slate-900">
            {en ? "Where can you see it? " : "Hol nézhető meg? "}
          </strong>
          {en
            ? "The ToyZumi demo opens in a new tab in the staging environment. The screenshots below document an earlier development version; the current interface may differ. "
            : "A ToyZumi demója új böngészőfülön, a staging környezetben nyílik meg. Az alábbi képernyőképek egy korábbi fejlesztési verziót dokumentálnak; az aktuális felület eltérhet. "}
          <a
            href="https://staging.toyzumi.hu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
          >
            {en ? "Open ToyZumi demo ↗" : "ToyZumi demó megnyitása ↗"}
          </a>
        </div>
      </Container>
      <ToyzumiStory lang={lang} />
      <div id="technikai-reszletek" className="case-anchor" />
      <Section
        eyebrow="A feladat"
        title="Nem egy újabb sablon-webshop"
        description="A kihívás az volt, hogy a vásárló számára egyszerű felület mögött a teljes kereskedelmi működés követhető, automatizálható és hosszú távon bővíthető maradjon."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              "Egy üzleti adatmodell",
              "A katalógus, termékváltozatok, ügyfelek, készlet, rendelések, fizetések és kampányok nem elszigetelt táblákban, hanem összefüggő folyamatként működnek.",
            ],
            [
              "02",
              "Napi munkára tervezett admin",
              "Az adminfelület nem adatbázis-szerkesztő: sürgős munkasorokat, globális keresést, figyelmeztetéseket és közvetlen beavatkozási pontokat ad.",
            ],
            [
              "03",
              "Dokumentált fejlődési út",
              "A staging állapot, a maradék kockázatok és a production előtti feladatok dokumentáltak, mérhetők és prioritás szerint végrehajthatók.",
            ],
          ].map(([number, title, text]) => (
            <Card key={number} className="p-6">
              <div className="text-sm font-black text-blue-600">{number}</div>
              <h2 className="mt-4 text-lg font-bold text-slate-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Vásárlói élmény"
        title="Gyors termékfelfedezés, egyszerű vásárlási út"
        description="A sötét, gyűjtői világra szabott saját arculat mögött reszponzív, SSR-képes és háromnyelvű webalkalmazás működik."
        className="bg-slate-50"
      >
        <ScreenshotNote />
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            badge="Storefront"
            label="Főoldal és termékfelfedezés"
            filename="01-storefront.png"
            description="Kategóriavilágok, kampányok, előrendelések, készletállapotok és gyors vásárlási műveletek egy karakteres, mégis áttekinthető felületen."
          />
          <PortfolioScreenshotSlot
            badge="Katalógus"
            label="Kereshető és szűrhető termékkatalógus"
            filename="02-products.png"
            description="Szabadszavas keresés, kategória-, márka- és termékvonal-szűrők, relevancia szerinti rendezés, állapotjelzők és készletértesítések."
          />
        </div>
      </Section>

      <Section
        eyebrow="Reszponzív felület"
        title="A teljes vásárlói élmény mobilon is használható"
        description="A termékkatalógus, a szűrés és a fióknavigáció nem az asztali nézet összenyomott változata: a kezelőszervek, a kártyák és a menük a kisebb kijelzőhöz rendeződnek át."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <PortfolioScreenshotSlot
            badge="Mobil katalógus"
            label="Terméklista és szűrés mobilnézetben"
            filename="18-products-mobile.png"
            className="aspect-[360/800]"
            fit="contain"
            description="Keresés, gyors kategóriák, rendezés és szűrés egy kézzel is elérhető vezérlőkkel, kéthasábos termékráccsal."
          />
          <PortfolioScreenshotSlot
            badge="Mobil navigáció"
            label="Fiók- és adminmenü mobilnézetben"
            filename="19-account-menu-mobile.png"
            className="aspect-[360/800]"
            fit="contain"
            description="A szerepkörhöz igazodó fiók-, vásárlási, beállítási és adminfunkciók áttekinthető, teljes magasságú menüben jelennek meg."
          />
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#dbeafe] bg-[#eff6ff] p-5 text-sm leading-6 text-[#334155] dark:border-[#1e3a5f] dark:bg-[#0f2747] dark:text-[#dbeafe]">
          <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#1d4ed8] dark:text-[#60a5fa]" />
          <p>
            A mobilnézet megtartja a desktop funkcióit, miközben a sűrű admin-
            és kereskedelmi navigáció érintésbarát, fókuszált felületté alakul.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Kosártól a rendelésig"
        title="A vásárlási folyamat minden lépése egy üzleti tranzakció része"
        description="A kosár, a kedvezmények, a szállítási díj, a fizetés, a készletfoglalás és a rendelési dokumentumok ugyanabból a szerveroldali számításból épülnek fel, így az ügyfél végig következetes összegeket és állapotokat lát."
      >
        <ScreenshotNote />
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            badge="Kosár és kupon"
            label="Valós idejű kosárösszesítés"
            filename="12-cart-coupon.png"
            className="aspect-[16/11]"
            fit="contain"
            description="Nettó és bruttó összeg, ÁFA, kedvezmény, szállítási küszöb, személyes hűségkupon és készletkorlát egy helyen, szerveroldali újraszámítással."
          />
          <PortfolioScreenshotSlot
            badge="Fizetési integráció"
            label="Barion és alternatív fizetési módok"
            filename="13-checkout-barion.png"
            className="aspect-[16/11]"
            fit="contain"
            description="Utánvét, banki átutalás és Barion kártyás fizetés. Online fizetéskor az ügyfél a szolgáltató biztonságos felületére kerül; a ToyZumi nem tárol kártyaadatot."
          />
          <PortfolioScreenshotSlot
            badge="Checkout"
            label="Rendelésellenőrzés fizetés előtt"
            filename="14-checkout-review.png"
            className="aspect-[4/5]"
            fit="contain"
            description="Tételek, csomagképzés, szállítás, adótartalom és végösszeg utolsó ellenőrzése, kötelező jogi elfogadásokkal a fizetéssel járó megrendelés előtt."
          />
          <PortfolioScreenshotSlot
            badge="Ügyfélfiók"
            label="Követhető rendelési életút"
            filename="15-order-tracking.png"
            className="aspect-[4/5]"
            fit="contain"
            description="Állapot-idővonal, fizetési státusz, csomagok és tételek, nyomkövetés, valamint letölthető rendelési dokumentumok egyetlen nézetben."
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              "Idempotens fizetés",
              "Az ismételt callback vagy felhasználói próbálkozás nem hoz létre kétszeres pénzügyi műveletet.",
            ],
            [
              "Provider-visszaellenőrzés",
              "A fizetési állapotot a backend nem csak a böngésző visszatérési URL-jéből fogadja el, hanem a szolgáltatónál is ellenőrzi.",
            ],
            [
              "Helyreállítható folyamat",
              "A bizonytalan fizetések, függő számlák és visszatérítések ütemezett egyeztetéssel újra feldolgozhatók.",
            ],
          ].map(([title, text]) => (
            <Card key={title} className="p-5">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Identity és hozzáférés"
        title="A bejelentkezés külön biztonsági szolgáltatásra épül"
        description="A jelszókezelés nem a webshop felületén történik. A saját arculatú Keycloak identity-réteg szabványos OIDC Authorization Code + PKCE folyamatot, szerepköröket és elkülönített ügyfél-, support- és adminhozzáférést biztosít."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <PortfolioScreenshotSlot
            badge="Keycloak"
            label="Saját arculatú, elkülönített bejelentkezés"
            filename="03-keycloak-login.png"
            description="A felhasználó egységes ToyZumi-élményt kap, miközben a hitelesítést dedikált identity rendszer kezeli."
          />
          <div className="space-y-4">
            {[
              "Customer, SupportAgent és Admin szerepkörök elkülönítése",
              "Issuer-, audience-, lifetime- és aláírás-ellenőrzött tokenek",
              "Backend oldali jogosultsági és erőforrás-tulajdonosi kontroll",
              "E-mail-ellenőrzés és biztonságos jelszófolyamatok",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"
              >
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Adatvédelem"
        title="Önkiszolgáló személyesadat-export"
        description="A vásárló a saját fiókjából kérheti a róla tárolt adatok hordozható exportját; ugyanez megfelelő jogosultsággal, auditáltan az adminfelületről is elindítható."
        className="bg-slate-50"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Háttérben készül",
              "A kérés Hangfire-feladatot indít, amely összegyűjti a kapcsolódó fiók-, rendelési és hozzájárulási adatokat, majd ZIP-csomagot készít.",
            ],
            [
              "Védett letöltés",
              "A kész export időkorlátos, a felhasználóhoz kötött tokennel érhető el, és sikeres letöltés után nem tölthető le újra.",
            ],
            [
              "Automatikus törlés",
              "A letöltött vagy lejárt fájlokat a napi retention job eltávolítja a tárhelyről; a kérés és a letöltés auditnyomot hagy.",
            ],
          ].map(([title, text]) => (
            <Card key={title} className="p-6">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Operáció"
        title="Az adminfelület a napi teendőket teszi láthatóvá"
        description="A háttérrendszer nemcsak adatokat tárol: munkasorokat képez, jelzi a problémás ügyeket és közvetlenül a megfelelő adminisztrációs felületre vezet."
        className="bg-slate-50"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            badge="Back office"
            label="Operatív admin áttekintő"
            filename="05-admin-dashboard.png"
            description="Fizetésre váró, csomagolandó és feladandó rendelések, visszaküldések, support ügyek, alacsony készlet és egyéb sürgős teendők egy helyen."
          />
          <PortfolioScreenshotSlot
            badge="Rendeléskezelés"
            label="Szűrhető teljesítési munkasor"
            filename="05b-order-management.png"
            description="Fizetési és teljesítési állapotok, problémás rendelések, keresés és a csomagoláshoz, szállításhoz, számlázáshoz vezető operációs nézetek."
          />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.slice(0, 4).map(({ icon: Icon, title, text }) => (
            <Card key={title} className="p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Katalógus és adatbetöltés"
        title="A beszállítói táblázatból ellenőrzött termékadat lesz"
        description="A rendszer nem várja el, hogy minden nagykereskedő ugyanazt az XLSX-formátumot használja: az oszlopok saját ToyZumi-mezőkhöz rendelhetők, a leképezés beszállítói profilként elmenthető, az import pedig előnézettel és validációval futtatható."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <PortfolioScreenshotSlot
            badge="Tömeges termékkezelés"
            label="XLSX-feltöltés és import"
            filename="16-bulk-product-import.png"
            className="aspect-[16/11]"
            fit="contain"
            description="Termékek, variánsok, készlet, árak, előrendelések, címkék és attribútumok tömeges betöltése akár 500 termékes, atomi műveletben."
          />
          <Card className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">
              Nem kézi Excel-másolás
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Munkalap kiválasztása és fájlelőnézet",
                "Automatikus, majd kézzel finomítható oszlop-mapping",
                "Alapértelmezett értékek a hiányzó beszállítói mezőkhöz",
                "Beszállítónként elmenthető, újrahasználható profilok",
                "Külön validálás, hibajegyzék és import előtti változás-előnézet",
                "Konvertált ToyZumi XLSX letöltése vagy közvetlen adatbázis-import",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-slate-600"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Valós idejű ügyfélszolgálat"
        title="A beszélgetés nem vész el a chatablak bezárásával"
        description="A SignalR-alapú support rendszer a gyors kommunikációt strukturált ügykezeléssel kapcsolja össze."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <PortfolioScreenshotSlot
            badge="Realtime support"
            label="Admin ügyfélszolgálati chat"
            filename="04-admin-chat.png"
            description="Várólista, ügyintézőhöz rendelt beszélgetések, vendég- és regisztrált ügyfelek, keresés és élő állapotjelzések."
          />
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <MessagesSquare className="h-6 w-6 text-blue-700" />
              <h2 className="text-lg font-bold text-slate-900">
                A teljes ügy életútja követhető
              </h2>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Vendégként és bejelentkezett fiókkal is indítható beszélgetés",
                "Ügyintézői várólista és felelőshöz rendelés",
                "Valós idejű üzenet, gépelési állapot és képmegosztás",
                "Lezárt beszélgetések archiválása és későbbi visszakeresése",
                "Összetettebb ügyek hibajeggyé alakítása",
                "Ügyfél-elégedettségi értékelés és auditálható kommunikáció",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-slate-600"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Hűségprogram"
        title="Nem egyszerű pontegyenleg, hanem konfigurálható megtartási rendszer"
        description="A vásárló átlátható fejlődési utat, a vállalkozás pedig szintekkel, feltételekkel, érvényességgel és különböző jutalomtípusokkal kezelhető ösztönzőrendszert kap."
        className="bg-slate-50"
      >
        <ScreenshotNote />
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            badge="Bemutatkozó oldal"
            label="Pontoktól a jutalomig"
            filename="06-loyalty-public.png"
            description="Közérthető magyarázat a pont- és XP-gyűjtésről, a tíz szintről és az elérhető termék-, kupon- vagy szállítási jutalmakról."
          />
          <PortfolioScreenshotSlot
            badge="Ügyfélfiók"
            label="Saját szint, XP és aktiválható jutalmak"
            filename="07-loyalty-account.png"
            description="Aktuális szint, következő küszöb, megszerzett és aktivált jutalmak, pontmozgások és feltételek egy helyen."
          />
          <div className="lg:col-span-2 lg:mx-auto lg:w-2/3">
            <PortfolioScreenshotSlot
              badge="Kuponrendszer"
              label="Pontbeváltás és személyes kuponok"
              filename="08-coupons.png"
              description="Pontokból generált, lejárattal és felhasználási feltételekkel kezelt egyedi kuponok, aktív kuponlista és beváltási előzmények."
            />
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              "Súlyozott jutalomesély",
              "Az admin jutalmonként súlyt adhat meg; a rendszer ebből kiszámítja és megjeleníti az egyes nyeremények tényleges százalékos esélyét.",
            ],
            [
              "Készletérzékeny termékjutalom",
              "Megadható konkrét termékváltozat vagy kategória- és címkeszűrés. A nem elérhető termék nem kerül a választható jutalmak közé.",
            ],
            [
              "Ellenőrzött beváltás",
              "Egy szint jutalma felhasználónként egyszer igényelhető; a rendszer a kiosztott terméket vagy az egyedi kupont és a teljesítést is rögzíti.",
            ],
          ].map(([title, text]) => (
            <Card key={title} className="p-5">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Marketing, CMS és elemzés"
        title="A tartalom és a kommunikáció is ugyanabból a rendszerből kezelhető"
        description="A kampányok nem különálló e-mailek: célközönséghez, nyelvhez, időponthoz és eseményhez köthető, követhető üzleti folyamatok."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            badge="Elemzés"
            label="Statisztikák és vezetői kimutatások"
            filename="09-statistics.png"
            description="Értékesítési, működési és ügyféladatokból képzett áttekintések, költségek, anomáliák és konfigurálható elemzési beállítások."
          />
          <PortfolioScreenshotSlot
            badge="Messaging studio"
            label="Kampány- és tartalomszerkesztő"
            filename="10-marketing-cms.png"
            description="Többnyelvű, blokkalapú e-mail-szerkesztő valós idejű előnézettel, célközönséggel, időzítéssel és eseményalapú automatizmusokkal."
          />
        </div>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <PortfolioScreenshotSlot
            badge="Consent-aware analytics"
            label="Google Analytics és GTM globális kapcsoló"
            filename="17-analytics-consent.png"
            className="aspect-[16/6]"
            fit="contain"
            description="A külső mérés globálisan szabályozható, és csak az analitikai cookie-khoz hozzájáruló látogatóknál indul el."
          />
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Saját keresleti jelzések a backendben
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A GA4 mellett a rendszer saját adatbázisában is összesíti a
              keresési kifejezéseket, találatokat és keresési szándékokat. A
              keresések, kívánságlisták, készlethiányok és értékesítési jelek
              pontozott keresleti mutatóvá állnak össze.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ez nem pusztán látogatottsági riport: az admin beszerzési
              ajánlást, javasolt mennyiséget és teendőt kaphat a következő
              beszállítói rendelés előkészítéséhez.
            </p>
          </Card>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              "Kampányok",
              "Célközönség, nyelvi változat, ütemezés, sablon és kézbesítési állapot.",
            ],
            [
              "Automatizmusok",
              "Kosár-, rendelés-, készlet- vagy ügyféleseményre induló kommunikáció.",
            ],
            [
              "CMS",
              "Blog, promóciós sávok és kereskedelmi tartalmak kezelése fejlesztői beavatkozás nélkül.",
            ],
          ].map(([title, text]) => (
            <Card key={title} className="p-5">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Automatizált működés"
        title="A rendszer akkor is dolgozik, amikor senki nincs az adminfelületen"
        description="Tizenhat dokumentált háttérfolyamat gondoskodik a pénzügyi egyeztetésről, az adatmegőrzésről, a katalógus időzítéséről és a kommunikáció megbízható feldolgozásáról. Két konkrét példa a kódból:"
        className="bg-slate-50"
      >
        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          {scheduledJobExamples.map(({ icon: Icon, title, schedule, text }) => (
            <Card
              key={title}
              className="border-blue-200 p-6 ring-1 ring-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-blue-700">
                    {schedule}
                  </div>
                  <h3 className="mt-1 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {scheduledJobs.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Mérnöki háttér"
        title="Nemcsak elkészült, hanem ellenőrizhető is"
        description="A portfólió értékét nem önmagában a képernyők adják, hanem az a rendszertervezési és minőségbiztosítási munka, amely mögöttük van."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <TestTube2 className="h-7 w-7 text-blue-700" />
            <div className="mt-5 text-3xl font-black text-slate-900">
              371 / 371
            </div>
            <h3 className="mt-2 font-bold text-slate-900">
              Sikeres automatizált teszt
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              140 frontend- és 231 backendteszt sikeres a dokumentált 1.1.5-ös
              pillanatképben; emellett kilenc Playwright E2E-forgatókönyv
              található a repóban.
            </p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-7 w-7 text-blue-700" />
            <h3 className="mt-5 font-bold text-slate-900">
              Tranzakciós és hozzáférési kontrollok
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Idempotens fizetési műveletek, provider-oldali visszaellenőrzés,
              outbox és reconciliation, jogosultsági policyk, rate limit, audit
              és correlation ID.
            </p>
          </Card>
          <Card className="p-6">
            <Languages className="h-7 w-7 text-blue-700" />
            <div className="mt-5 text-3xl font-black text-slate-900">
              HU · EN · DE
            </div>
            <h3 className="mt-2 font-bold text-slate-900">
              Háromnyelvű felület
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              4 225 egyeztetett lokalizációs kulcs nyelvenként, világos és sötét
              téma, reszponzív felületek és SSR-alapú keresőoptimalizálhatóság.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Technológiai alapok
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Külön telepíthető, szerveroldalon renderelhető frontend, üzleti
              igazságforrásként működő backend API, elkülönített
              identitásszolgáltatás és konténerizált telepítési útvonal.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Angular 21",
                "TypeScript",
                "NgRx",
                "SSR",
                "ASP.NET Core 10",
                "EF Core",
                "SQL Server",
                "SignalR",
                "Keycloak",
                "Hangfire",
                "Docker",
                "Barion",
                "Számlázz.hu",
                "SendGrid",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Érett fejlesztési szemlélet
              </h2>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Generált, típusos frontend API-kliens",
                "Adatbázis-migrációk és auditnaplók",
                "Live és ready health checkek",
                "Release- és telepítési napló",
                "Dokumentált production-readiness terv",
                "CI/CD build-, teszt- és migrációs kapukkal",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-slate-600"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-8">
          <PortfolioScreenshotSlot
            badge="Architektúra"
            label="Rétegzett, külön telepíthető rendszer"
            filename="11-architecture.png"
            className="aspect-[1362/782]"
            description="Angular SSR webkliens, ASP.NET Core API, Keycloak identity, SQL Server és S3-kompatibilis objektumtár védett reverse proxy és belső Docker-hálózat mögött."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
          <strong>Transzparens státusz:</strong> az alapfunkciók működnek és
          teszteltek, de az oldal nem állít kész produkciós üzemet. Az élesítés
          előtt többek között a privát fájltárolás, a privilegizált MFA, a
          malware-szkennelés és néhány infrastruktúra-hardening feladat lezárása
          szükséges.
        </div>
      </Section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Nem mindig kell ekkora rendszer.
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                A ToyZumi azt mutatja meg, milyen mélységig tudok egy összetett
                folyamatot végiggondolni és megvalósítani. A te vállalkozásodnál
                először azt nézzük meg, elég-e egy meglévő eszköz jó beállítása,
                egy integráció vagy egy kisebb, célzott webalkalmazás.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#fff] px-4 py-2.5 text-sm font-bold text-[#020617] transition hover:-translate-y-0.5 hover:bg-[#eff6ff] lg:mt-0"
            >
              Megírom a problémát <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
