import { localizedMetadata } from "@/components/lib/localized-metadata";
import { ToyzumiStory } from "@/components/site/ToyzumiStory";
import { ToyzumiStatus } from "@/components/site/ToyzumiStatus";
import { ProjectEngineering } from "@/components/site/ProjectEngineering";
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

const hungarianMetadata: Metadata = {
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

const getCapabilities = (en: boolean) => [
  {
    icon: ShoppingCart,
    title: en ? "Connected shopping journey" : "Összefüggő vásárlási út",
    text: en
      ? "Searchable and filterable catalogue, product variants, guest and account baskets, wishlists, preorders, multi-step checkout and order tracking."
      : "Kereshető és szűrhető katalógus, termékváltozatok, vendég- és fiókos kosár, kívánságlista, előrendelés, több lépéses checkout és rendeléskövetés.",
  },
  {
    icon: PackageCheck,
    title: en ? "From order to fulfilment" : "Rendeléstől a teljesítésig",
    text: en
      ? "Payments, invoicing, order statuses, packing queues, shipping, refunds, preorders and returns in one business workflow."
      : "Fizetés, számlázás, rendelésállapotok, csomagolási munkasor, szállítás, visszatérítés, előrendelések és visszaküldések egy üzleti folyamatban.",
  },
  {
    icon: Boxes,
    title: en ? "Inventory and procurement" : "Készlet és beszerzés",
    text: en
      ? "Stock movements, reservations, low-stock alerts, purchase orders, supplier imports and inventory analysis to support decisions."
      : "Készletmozgások, foglalások, alacsony készletszint, beszerzési rendelések, beszállítói import és döntést segítő készletelemzés.",
  },
  {
    icon: HeartHandshake,
    title: en ? "Loyalty and customer retention" : "Hűség és ügyfélmegtartás",
    text: en
      ? "A ten-level loyalty programme built on points and XP, with product, coupon and shipping rewards and a full transaction history."
      : "Pont- és XP-alapú, tízszintes hűségprogram aktiválható termék-, kupon- és szállítási jutalmakkal, teljes tranzakciótörténettel.",
  },
  {
    icon: MessagesSquare,
    title: en ? "Real-time customer support" : "Valós idejű ügyfélszolgálat",
    text: en
      ? "Guest and account chat, queues, agent assignment, typing indicators, image sharing, archiving, ticket conversion and satisfaction ratings."
      : "Vendég és regisztrált chat, várólista, ügyintézőhöz rendelés, gépelési állapot, képküldés, archiválás, ticket-konverzió és elégedettségmérés.",
  },
  {
    icon: Megaphone,
    title: en ? "Marketing and CMS" : "Marketing és CMS",
    text: en
      ? "Multilingual campaign editor, audiences, scheduled delivery, event-driven automation, delivery tracking, blog and content management."
      : "Többnyelvű kampányszerkesztő, célközönségek, időzített kiküldés, eseményalapú automatizmusok, kézbesítési követés, blog és tartalomkezelés.",
  },
];

const getScheduledJobs = (en: boolean) => [
  {
    icon: RefreshCw,
    title: en ? "Financial reconciliation" : "Pénzügyi egyeztetés",
    text: en
      ? "Rechecking uncertain payments and refunds, processing the outbox and recovering pending invoices."
      : "Bizonytalan fizetések és visszatérítések újraellenőrzése, outbox feldolgozás és függő számlák helyreállítása.",
  },
  {
    icon: Clock3,
    title: en ? "Lifecycle and retention" : "Életciklus és megőrzés",
    text: en
      ? "Log archiving, notification cleanup, GDPR export expiry, account-deletion grace periods, and cleanup of abandoned baskets and checkout drafts."
      : "Logarchiválás, értesítéstakarítás, GDPR-exportok lejárata, fióktörlési türelmi idő, elhagyott kosarak és checkout-vázlatok tisztítása.",
  },
  {
    icon: Workflow,
    title: en ? "Catalogue and fulfilment" : "Katalógus és teljesítés",
    text: en
      ? "Scheduled product publishing, preorder checks, linking guest orders to accounts and synchronising Keycloak users."
      : "Időzített termékpublikálás, előrendelések ellenőrzése, vendégrendelések fiókhoz kapcsolása és Keycloak-felhasználók szinkronizálása.",
  },
  {
    icon: Megaphone,
    title: en ? "Communication" : "Kommunikáció",
    text: en
      ? "Processing transactional emails, stock and review notifications, campaigns and event-driven marketing automation."
      : "Tranzakciós e-mailek, készlet- és értékelési értesítések, kampányok és eseményvezérelt marketingautomatizmusok feldolgozása.",
  },
];

const getScheduledJobExamples = (en: boolean) => [
  {
    icon: RefreshCw,
    title: en ? "Recovering pending invoices" : "Függő számlák helyreállítása",
    schedule: en ? "Every 5 minutes" : "5 percenként",
    text: en
      ? "The job requeues stuck, failed or unsent invoices in batches of up to 50. It first reconciles uncertain provider responses using an external identifier. If the result cannot be established safely, it alerts an administrator instead of blindly repeating the operation."
      : "A job a beragadt, hibás vagy még el nem küldött számlákat legfeljebb 50-es kötegekben újra sorba állítja. A bizonytalan szolgáltatói választ előbb külső azonosító alapján egyezteti; ha ez nem dönthető el biztonságosan, nem ismétli meg vakon a műveletet, hanem adminriasztást küld.",
  },
  {
    icon: Clock3,
    title: en ? "Scheduled product publishing" : "Időzített termékpublikálás",
    schedule: en ? "Configurable cron schedule" : "konfigurálható cron szerint",
    text: en
      ? "The job publishes only products that are not deleted, have Scheduled status and are due. It records the publication time, clears the used schedule, then saves and logs the result."
      : "A job csak a nem törölt, Scheduled állapotú és már esedékes termékeket publikálja. Egy lépésben rögzíti a publikálás idejét, törli a már felhasznált ütemezést, majd elmenti és naplózza az eredményt.",
  },
];

function ScreenshotNote({ en }: { en: boolean }) {
  return (
    <div className="mb-7 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
      <p>
        {en
          ? "These screenshots document the 1.1.5 staging environment. Products, users and figures are demonstration data, not production business results. Text within the original screenshots remains in the language of the captured interface."
          : "A képernyők az 1.1.5-ös staging környezetből származnak. A rajtuk látható termékek, felhasználók és számértékek demonstrációs mintaadatok, nem produkciós üzleti eredmények. A képeken belüli szöveg az eredeti felület nyelvét őrzi."}
      </p>
    </div>
  );
}

export default async function ToyzumiCaseStudyPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const capabilities = getCapabilities(en);
  const scheduledJobs = getScheduledJobs(en);
  const scheduledJobExamples = getScheduledJobExamples(en);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "ToyZumi",
            description: en
              ? "An independently developed commerce and operations platform, demonstrated in a staging environment."
              : "Saját fejlesztésű e-kereskedelmi és operációs platform, staging környezetben bemutatva.",
            url: `${site.url}/portfolio/toyzumi`,
            image: `${site.url}/portfolio/toyzumi/00-portfolio-cover.png`,
            inLanguage: lang,
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
              {en
                ? "A system under active development, demonstrated in staging. The screenshots below document version 1.1.5."
                : "Aktív fejlesztés alatt álló, staging környezetben bemutatott rendszer. Az alábbi képernyőképek az 1.1.5-ös állapotot dokumentálják."}
            </p>
            <div className="mt-9">
              <Link
                href="/contact?topic=development"
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
      <ToyzumiStatus lang={lang} />
      <Container className="py-8">
        <ProjectEngineering id="toyzumi" lang={lang} />
      </Container>
      <ToyzumiStory lang={lang} />
      <div id="technikai-reszletek" className="case-anchor" />
      <Section
        eyebrow={en ? "The challenge" : "A feladat"}
        title={
          en ? "More than a template webshop" : "Nem egy újabb sablon-webshop"
        }
        description={
          en
            ? "The challenge was to keep the entire retail operation traceable, automated and extensible behind a simple customer interface."
            : "A kihívás az volt, hogy a vásárló számára egyszerű felület mögött a teljes kereskedelmi működés követhető, automatizálható és hosszú távon bővíthető maradjon."
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              en ? "One business data model" : "Egy üzleti adatmodell",
              en
                ? "The catalogue, product variants, customers, stock, orders, payments and campaigns work as connected processes rather than isolated tables."
                : "A katalógus, termékváltozatok, ügyfelek, készlet, rendelések, fizetések és kampányok nem elszigetelt táblákban, hanem összefüggő folyamatként működnek.",
            ],
            [
              "02",
              en
                ? "Administration built for daily work"
                : "Napi munkára tervezett admin",
              en
                ? "The admin interface provides urgent work queues, global search, alerts and direct actions rather than simply exposing database records."
                : "Az adminfelület nem adatbázis-szerkesztő: sürgős munkasorokat, globális keresést, figyelmeztetéseket és közvetlen beavatkozási pontokat ad.",
            ],
            [
              "03",
              en ? "A documented path forward" : "Dokumentált fejlődési út",
              en
                ? "The staging state, remaining risks and tasks before production are documented, measurable and prioritised."
                : "A staging állapot, a maradék kockázatok és a production előtti feladatok dokumentáltak, mérhetők és prioritás szerint végrehajthatók.",
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
        eyebrow={en ? "Customer experience" : "Vásárlói élmény"}
        title={
          en
            ? "Quick product discovery and a straightforward shopping journey"
            : "Gyors termékfelfedezés, egyszerű vásárlási út"
        }
        description={
          en
            ? "Behind the dark visual identity designed for collectors is a responsive, three-language web application with server-side rendering."
            : "A sötét, gyűjtői világra szabott saját arculat mögött reszponzív, SSR-képes és háromnyelvű webalkalmazás működik."
        }
        className="bg-slate-50"
      >
        <ScreenshotNote en={en} />
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Storefront"
            label={
              en
                ? "Homepage and product discovery"
                : "Főoldal és termékfelfedezés"
            }
            filename="01-storefront.png"
            description={
              en
                ? "Categories, campaigns, preorders, stock indicators and quick shopping actions in a distinctive, clear interface."
                : "Kategóriavilágok, kampányok, előrendelések, készletállapotok és gyors vásárlási műveletek egy karakteres, mégis áttekinthető felületen."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Catalogue" : "Katalógus"}
            label={
              en
                ? "Searchable and filterable product catalogue"
                : "Kereshető és szűrhető termékkatalógus"
            }
            filename="02-products.png"
            description={
              en
                ? "Full-text search, category, brand and product-line filters, relevance sorting, status indicators and stock notifications."
                : "Szabadszavas keresés, kategória-, márka- és termékvonal-szűrők, relevancia szerinti rendezés, állapotjelzők és készletértesítések."
            }
          />
        </div>
      </Section>

      <Section
        eyebrow={en ? "Responsive interface" : "Reszponzív felület"}
        title={
          en
            ? "The shopping experience works on mobile too"
            : "A teljes vásárlói élmény mobilon is használható"
        }
        description={
          en
            ? "The catalogue, filters and account navigation adapt to smaller screens, with rearranged controls, cards and menus."
            : "A termékkatalógus, a szűrés és a fióknavigáció nem az asztali nézet összenyomott változata: a kezelőszervek, a kártyák és a menük a kisebb kijelzőhöz rendeződnek át."
        }
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Mobile catalogue" : "Mobil katalógus"}
            label={
              en
                ? "Product listings and filters on mobile"
                : "Terméklista és szűrés mobilnézetben"
            }
            filename="18-products-mobile.png"
            className="aspect-[360/800]"
            fit="contain"
            description={
              en
                ? "Search, quick categories, sorting and filters with accessible controls and a two-column product grid."
                : "Keresés, gyors kategóriák, rendezés és szűrés egy kézzel is elérhető vezérlőkkel, kéthasábos termékráccsal."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Mobile navigation" : "Mobil navigáció"}
            label={
              en
                ? "Account and admin menus on mobile"
                : "Fiók- és adminmenü mobilnézetben"
            }
            filename="19-account-menu-mobile.png"
            className="aspect-[360/800]"
            fit="contain"
            description={
              en
                ? "Account, shopping, settings and admin features are shown in a clear, full-height menu tailored to the user's role."
                : "A szerepkörhöz igazodó fiók-, vásárlási, beállítási és adminfunkciók áttekinthető, teljes magasságú menüben jelennek meg."
            }
          />
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#dbeafe] bg-[#eff6ff] p-5 text-sm leading-6 text-[#334155] dark:border-[#1e3a5f] dark:bg-[#0f2747] dark:text-[#dbeafe]">
          <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#1d4ed8] dark:text-[#60a5fa]" />
          <p>
            {en
              ? "The mobile interface retains desktop features while making the dense admin and shopping navigation touch-friendly and focused."
              : "A mobilnézet megtartja a desktop funkcióit, miközben a sűrű admin- és kereskedelmi navigáció érintésbarát, fókuszált felületté alakul."}
          </p>
        </div>
      </Section>

      <Section
        eyebrow={en ? "From basket to order" : "Kosártól a rendelésig"}
        title={
          en
            ? "Every checkout step belongs to the same business transaction"
            : "A vásárlási folyamat minden lépése egy üzleti tranzakció része"
        }
        description={
          en
            ? "The basket, discounts, shipping fees, payment, stock reservations and order documents use the same server-side calculations, keeping totals and statuses consistent throughout."
            : "A kosár, a kedvezmények, a szállítási díj, a fizetés, a készletfoglalás és a rendelési dokumentumok ugyanabból a szerveroldali számításból épülnek fel, így az ügyfél végig következetes összegeket és állapotokat lát."
        }
      >
        <ScreenshotNote en={en} />
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Basket and coupon" : "Kosár és kupon"}
            label={
              en ? "Real-time basket summary" : "Valós idejű kosárösszesítés"
            }
            filename="12-cart-coupon.png"
            className="aspect-[16/11]"
            fit="contain"
            description={
              en
                ? "Net and gross totals, VAT, discounts, shipping thresholds, personal loyalty coupons and stock limits together, recalculated on the server."
                : "Nettó és bruttó összeg, ÁFA, kedvezmény, szállítási küszöb, személyes hűségkupon és készletkorlát egy helyen, szerveroldali újraszámítással."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Payment integration" : "Fizetési integráció"}
            label={
              en
                ? "Barion and alternative payment methods"
                : "Barion és alternatív fizetési módok"
            }
            filename="13-checkout-barion.png"
            className="aspect-[16/11]"
            fit="contain"
            description={
              en
                ? "Cash on delivery, bank transfer and Barion card payment. Online payment redirects to the provider's secure interface; ToyZumi does not store card details."
                : "Utánvét, banki átutalás és Barion kártyás fizetés. Online fizetéskor az ügyfél a szolgáltató biztonságos felületére kerül; a ToyZumi nem tárol kártyaadatot."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Checkout"
            label={
              en
                ? "Order review before payment"
                : "Rendelésellenőrzés fizetés előtt"
            }
            filename="14-checkout-review.png"
            className="aspect-[4/5]"
            fit="contain"
            description={
              en
                ? "A final review of items, packages, shipping, taxes and totals, with the required legal acknowledgements before placing an order with a payment obligation."
                : "Tételek, csomagképzés, szállítás, adótartalom és végösszeg utolsó ellenőrzése, kötelező jogi elfogadásokkal a fizetéssel járó megrendelés előtt."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Customer account" : "Ügyfélfiók"}
            label={
              en ? "A traceable order lifecycle" : "Követhető rendelési életút"
            }
            filename="15-order-tracking.png"
            className="aspect-[4/5]"
            fit="contain"
            description={
              en
                ? "A status timeline, payment status, packages and items, tracking and downloadable order documents in one view."
                : "Állapot-idővonal, fizetési státusz, csomagok és tételek, nyomkövetés, valamint letölthető rendelési dokumentumok egyetlen nézetben."
            }
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              en ? "Idempotent payments" : "Idempotens fizetés",
              en
                ? "Repeated callbacks or user attempts do not create duplicate financial operations."
                : "Az ismételt callback vagy felhasználói próbálkozás nem hoz létre kétszeres pénzügyi műveletet.",
            ],
            [
              en ? "Provider verification" : "Provider-visszaellenőrzés",
              en
                ? "The backend verifies payment status with the provider rather than relying solely on the browser's return URL."
                : "A fizetési állapotot a backend nem csak a böngésző visszatérési URL-jéből fogadja el, hanem a szolgáltatónál is ellenőrzi.",
            ],
            [
              en ? "Recoverable workflows" : "Helyreállítható folyamat",
              en
                ? "Uncertain payments, pending invoices and refunds can be processed again through scheduled reconciliation."
                : "A bizonytalan fizetések, függő számlák és visszatérítések ütemezett egyeztetéssel újra feldolgozhatók.",
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
        eyebrow={en ? "Identity and access" : "Identity és hozzáférés"}
        title={
          en
            ? "Sign-in uses a dedicated security service"
            : "A bejelentkezés külön biztonsági szolgáltatásra épül"
        }
        description={
          en
            ? "Passwords are handled outside the webshop interface. The branded Keycloak identity layer provides standard OIDC Authorization Code + PKCE flows, roles and separate customer, support and admin access."
            : "A jelszókezelés nem a webshop felületén történik. A saját arculatú Keycloak identity-réteg szabványos OIDC Authorization Code + PKCE folyamatot, szerepköröket és elkülönített ügyfél-, support- és adminhozzáférést biztosít."
        }
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Keycloak"
            label={
              en
                ? "Branded, separate sign-in"
                : "Saját arculatú, elkülönített bejelentkezés"
            }
            filename="03-keycloak-login.png"
            description={
              en
                ? "Users get a consistent ToyZumi experience while a dedicated identity service handles authentication."
                : "A felhasználó egységes ToyZumi-élményt kap, miközben a hitelesítést dedikált identity rendszer kezeli."
            }
          />
          <div className="space-y-4">
            {[
              en
                ? "Separate Customer, SupportAgent and Admin roles"
                : "Customer, SupportAgent és Admin szerepkörök elkülönítése",
              en
                ? "Token validation for issuer, audience, lifetime and signature"
                : "Issuer-, audience-, lifetime- és aláírás-ellenőrzött tokenek",
              en
                ? "Backend permission and resource-ownership checks"
                : "Backend oldali jogosultsági és erőforrás-tulajdonosi kontroll",
              en
                ? "Email verification and secure password workflows"
                : "E-mail-ellenőrzés és biztonságos jelszófolyamatok",
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
        eyebrow={en ? "Privacy" : "Adatvédelem"}
        title={
          en
            ? "Self-service personal data export"
            : "Önkiszolgáló személyesadat-export"
        }
        description={
          en
            ? "Customers can request a portable export of their data from their account. Authorised administrators can also start the export, with an audit trail."
            : "A vásárló a saját fiókjából kérheti a róla tárolt adatok hordozható exportját; ugyanez megfelelő jogosultsággal, auditáltan az adminfelületről is elindítható."
        }
        className="bg-slate-50"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              en ? "Prepared in the background" : "Háttérben készül",
              en
                ? "The request starts a Hangfire job that collects account, order and consent data and packages it into a ZIP archive."
                : "A kérés Hangfire-feladatot indít, amely összegyűjti a kapcsolódó fiók-, rendelési és hozzájárulási adatokat, majd ZIP-csomagot készít.",
            ],
            [
              en ? "Protected download" : "Védett letöltés",
              en
                ? "The export uses a time-limited token tied to the user and cannot be downloaded again after a successful download."
                : "A kész export időkorlátos, a felhasználóhoz kötött tokennel érhető el, és sikeres letöltés után nem tölthető le újra.",
            ],
            [
              en ? "Automatic deletion" : "Automatikus törlés",
              en
                ? "A daily retention job removes downloaded or expired files from storage. Requests and downloads leave an audit trail."
                : "A letöltött vagy lejárt fájlokat a napi retention job eltávolítja a tárhelyről; a kérés és a letöltés auditnyomot hagy.",
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
        eyebrow={en ? "Operations" : "Operáció"}
        title={
          en
            ? "An admin interface that makes daily tasks visible"
            : "Az adminfelület a napi teendőket teszi láthatóvá"
        }
        description={
          en
            ? "The back office forms work queues, flags problematic cases and links directly to the relevant administrative actions."
            : "A háttérrendszer nemcsak adatokat tárol: munkasorokat képez, jelzi a problémás ügyeket és közvetlenül a megfelelő adminisztrációs felületre vezet."
        }
        className="bg-slate-50"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Back office"
            label={
              en ? "Operational admin dashboard" : "Operatív admin áttekintő"
            }
            filename="05-admin-dashboard.png"
            description={
              en
                ? "Orders awaiting payment, packing or dispatch, returns, support cases, low stock and other urgent tasks in one place."
                : "Fizetésre váró, csomagolandó és feladandó rendelések, visszaküldések, support ügyek, alacsony készlet és egyéb sürgős teendők egy helyen."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Order management" : "Rendeléskezelés"}
            label={
              en
                ? "Filterable fulfilment queue"
                : "Szűrhető teljesítési munkasor"
            }
            filename="05b-order-management.png"
            description={
              en
                ? "Payment and fulfilment statuses, problematic orders, search and operational views for packing, shipping and invoicing."
                : "Fizetési és teljesítési állapotok, problémás rendelések, keresés és a csomagoláshoz, szállításhoz, számlázáshoz vezető operációs nézetek."
            }
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
        eyebrow={en ? "Catalogue and data import" : "Katalógus és adatbetöltés"}
        title={
          en
            ? "Turn supplier spreadsheets into validated product data"
            : "A beszállítói táblázatból ellenőrzött termékadat lesz"
        }
        description={
          en
            ? "Suppliers do not need to use the same XLSX format. Columns can be mapped to ToyZumi fields, mappings saved as supplier profiles, and imports previewed and validated before execution."
            : "A rendszer nem várja el, hogy minden nagykereskedő ugyanazt az XLSX-formátumot használja: az oszlopok saját ToyZumi-mezőkhöz rendelhetők, a leképezés beszállítói profilként elmenthető, az import pedig előnézettel és validációval futtatható."
        }
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Bulk product management" : "Tömeges termékkezelés"}
            label={en ? "XLSX upload and import" : "XLSX-feltöltés és import"}
            filename="16-bulk-product-import.png"
            className="aspect-[16/11]"
            fit="contain"
            description={
              en
                ? "Bulk import of products, variants, stock, prices, preorders, tags and attributes in atomic operations of up to 500 products."
                : "Termékek, variánsok, készlet, árak, előrendelések, címkék és attribútumok tömeges betöltése akár 500 termékes, atomi műveletben."
            }
          />
          <Card className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">
              {en
                ? "Beyond copying Excel rows by hand"
                : "Nem kézi Excel-másolás"}
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                en
                  ? "Worksheet selection and file preview"
                  : "Munkalap kiválasztása és fájlelőnézet",
                en
                  ? "Automatic column mapping with manual adjustments"
                  : "Automatikus, majd kézzel finomítható oszlop-mapping",
                en
                  ? "Default values for missing supplier fields"
                  : "Alapértelmezett értékek a hiányzó beszállítói mezőkhöz",
                en
                  ? "Reusable profiles saved for each supplier"
                  : "Beszállítónként elmenthető, újrahasználható profilok",
                en
                  ? "Separate validation, error lists and a preview of changes before import"
                  : "Külön validálás, hibajegyzék és import előtti változás-előnézet",
                en
                  ? "Download converted ToyZumi XLSX files or import directly into the database"
                  : "Konvertált ToyZumi XLSX letöltése vagy közvetlen adatbázis-import",
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
        eyebrow={
          en ? "Real-time customer support" : "Valós idejű ügyfélszolgálat"
        }
        title={
          en
            ? "Conversations survive the closing of the chat window"
            : "A beszélgetés nem vész el a chatablak bezárásával"
        }
        description={
          en
            ? "The SignalR support system connects quick communication with structured case management."
            : "A SignalR-alapú support rendszer a gyors kommunikációt strukturált ügykezeléssel kapcsolja össze."
        }
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Realtime support"
            label={en ? "Admin support chat" : "Admin ügyfélszolgálati chat"}
            filename="04-admin-chat.png"
            description={
              en
                ? "Queues, assigned conversations, guest and registered customers, search and live status indicators."
                : "Várólista, ügyintézőhöz rendelt beszélgetések, vendég- és regisztrált ügyfelek, keresés és élő állapotjelzések."
            }
          />
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <MessagesSquare className="h-6 w-6 text-blue-700" />
              <h2 className="text-lg font-bold text-slate-900">
                {en
                  ? "Follow the entire life of a case"
                  : "A teljes ügy életútja követhető"}
              </h2>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                en
                  ? "Start conversations as a guest or a signed-in customer"
                  : "Vendégként és bejelentkezett fiókkal is indítható beszélgetés",
                en
                  ? "Agent queues and ownership assignment"
                  : "Ügyintézői várólista és felelőshöz rendelés",
                en
                  ? "Real-time messages, typing indicators and image sharing"
                  : "Valós idejű üzenet, gépelési állapot és képmegosztás",
                en
                  ? "Archive and retrieve closed conversations"
                  : "Lezárt beszélgetések archiválása és későbbi visszakeresése",
                en
                  ? "Convert more complex cases into tickets"
                  : "Összetettebb ügyek hibajeggyé alakítása",
                en
                  ? "Customer satisfaction ratings and auditable communication"
                  : "Ügyfél-elégedettségi értékelés és auditálható kommunikáció",
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
        eyebrow={en ? "Loyalty programme" : "Hűségprogram"}
        title={
          en
            ? "A configurable retention system, beyond a points balance"
            : "Nem egyszerű pontegyenleg, hanem konfigurálható megtartási rendszer"
        }
        description={
          en
            ? "Customers see a clear progression path. The business can manage incentives through levels, conditions, expiry dates and different reward types."
            : "A vásárló átlátható fejlődési utat, a vállalkozás pedig szintekkel, feltételekkel, érvényességgel és különböző jutalomtípusokkal kezelhető ösztönzőrendszert kap."
        }
        className="bg-slate-50"
      >
        <ScreenshotNote en={en} />
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Programme overview" : "Bemutatkozó oldal"}
            label={en ? "From points to rewards" : "Pontoktól a jutalomig"}
            filename="06-loyalty-public.png"
            description={
              en
                ? "A plain-language explanation of points, XP, the ten levels and available product, coupon and shipping rewards."
                : "Közérthető magyarázat a pont- és XP-gyűjtésről, a tíz szintről és az elérhető termék-, kupon- vagy szállítási jutalmakról."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Customer account" : "Ügyfélfiók"}
            label={
              en
                ? "Personal level, XP and available rewards"
                : "Saját szint, XP és aktiválható jutalmak"
            }
            filename="07-loyalty-account.png"
            description={
              en
                ? "Current level, next threshold, earned and activated rewards, point transactions and conditions in one place."
                : "Aktuális szint, következő küszöb, megszerzett és aktivált jutalmak, pontmozgások és feltételek egy helyen."
            }
          />
          <div className="lg:col-span-2 lg:mx-auto lg:w-2/3">
            <PortfolioScreenshotSlot
              lang={lang}
              badge={en ? "Coupon system" : "Kuponrendszer"}
              label={
                en
                  ? "Point redemption and personal coupons"
                  : "Pontbeváltás és személyes kuponok"
              }
              filename="08-coupons.png"
              description={
                en
                  ? "Individual coupons generated from points, with expiry dates and conditions, an active coupon list and redemption history."
                  : "Pontokból generált, lejárattal és felhasználási feltételekkel kezelt egyedi kuponok, aktív kuponlista és beváltási előzmények."
              }
            />
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              en ? "Weighted reward probabilities" : "Súlyozott jutalomesély",
              en
                ? "Administrators can assign weights to rewards. The system calculates and displays the actual percentage chance for each prize."
                : "Az admin jutalmonként súlyt adhat meg; a rendszer ebből kiszámítja és megjeleníti az egyes nyeremények tényleges százalékos esélyét.",
            ],
            [
              en
                ? "Stock-aware product rewards"
                : "Készletérzékeny termékjutalom",
              en
                ? "Select a specific variant or filter by category and tag. Unavailable products are excluded from the available rewards."
                : "Megadható konkrét termékváltozat vagy kategória- és címkeszűrés. A nem elérhető termék nem kerül a választható jutalmak közé.",
            ],
            [
              en ? "Controlled redemption" : "Ellenőrzött beváltás",
              en
                ? "Each level reward can be claimed once per user. The system records the assigned product or individual coupon and its fulfilment."
                : "Egy szint jutalma felhasználónként egyszer igényelhető; a rendszer a kiosztott terméket vagy az egyedi kupont és a teljesítést is rögzíti.",
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
        eyebrow={
          en ? "Marketing, CMS and analytics" : "Marketing, CMS és elemzés"
        }
        title={
          en
            ? "Content and communication managed from the same system"
            : "A tartalom és a kommunikáció is ugyanabból a rendszerből kezelhető"
        }
        description={
          en
            ? "Campaigns are traceable workflows linked to audiences, languages, schedules and events."
            : "A kampányok nem különálló e-mailek: célközönséghez, nyelvhez, időponthoz és eseményhez köthető, követhető üzleti folyamatok."
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioScreenshotSlot
            lang={lang}
            badge={en ? "Analytics" : "Elemzés"}
            label={
              en
                ? "Statistics and management reports"
                : "Statisztikák és vezetői kimutatások"
            }
            filename="09-statistics.png"
            description={
              en
                ? "Views built from sales, operational and customer data, including costs, anomalies and configurable analytics settings."
                : "Értékesítési, működési és ügyféladatokból képzett áttekintések, költségek, anomáliák és konfigurálható elemzési beállítások."
            }
          />
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Messaging studio"
            label={
              en
                ? "Campaign and content editor"
                : "Kampány- és tartalomszerkesztő"
            }
            filename="10-marketing-cms.png"
            description={
              en
                ? "A multilingual, block-based email editor with live previews, audience selection, scheduling and event-driven automation."
                : "Többnyelvű, blokkalapú e-mail-szerkesztő valós idejű előnézettel, célközönséggel, időzítéssel és eseményalapú automatizmusokkal."
            }
          />
        </div>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <PortfolioScreenshotSlot
            lang={lang}
            badge="Consent-aware analytics"
            label={
              en
                ? "Global Google Analytics and GTM switch"
                : "Google Analytics és GTM globális kapcsoló"
            }
            filename="17-analytics-consent.png"
            className="aspect-[16/6]"
            fit="contain"
            description={
              en
                ? "External analytics can be controlled globally and only starts for visitors who consent to analytics cookies."
                : "A külső mérés globálisan szabályozható, és csak az analitikai cookie-khoz hozzájáruló látogatóknál indul el."
            }
          />
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-700" />
              <h2 className="text-lg font-bold text-slate-900">
                {en
                  ? "First-party demand signals in the backend"
                  : "Saját keresleti jelzések a backendben"}
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {en
                ? "Alongside GA4, the system aggregates search terms, results and search intent in its own database. Searches, wishlists, stock shortages and sales signals contribute to a scored demand indicator."
                : "A GA4 mellett a rendszer saját adatbázisában is összesíti a keresési kifejezéseket, találatokat és keresési szándékokat. A keresések, kívánságlisták, készlethiányok és értékesítési jelek pontozott keresleti mutatóvá állnak össze."}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {en
                ? "This goes beyond traffic reporting: administrators can receive procurement recommendations, suggested quantities and next actions when preparing a supplier order."
                : "Ez nem pusztán látogatottsági riport: az admin beszerzési ajánlást, javasolt mennyiséget és teendőt kaphat a következő beszállítói rendelés előkészítéséhez."}
            </p>
          </Card>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              en ? "Campaigns" : "Kampányok",
              en
                ? "Audience, language variant, schedule, template and delivery status."
                : "Célközönség, nyelvi változat, ütemezés, sablon és kézbesítési állapot.",
            ],
            [
              en ? "Automation" : "Automatizmusok",
              en
                ? "Communication triggered by basket, order, stock or customer events."
                : "Kosár-, rendelés-, készlet- vagy ügyféleseményre induló kommunikáció.",
            ],
            [
              "CMS",
              en
                ? "Manage blog posts, promotional banners and commerce content without developer intervention."
                : "Blog, promóciós sávok és kereskedelmi tartalmak kezelése fejlesztői beavatkozás nélkül.",
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
        eyebrow={en ? "Automated operations" : "Automatizált működés"}
        title={
          en
            ? "The system keeps working when nobody is in the admin interface"
            : "A rendszer akkor is dolgozik, amikor senki nincs az adminfelületen"
        }
        description={
          en
            ? "Sixteen documented background processes handle financial reconciliation, data retention, catalogue scheduling and reliable communication processing. Two examples from the code:"
            : "Tizenhat dokumentált háttérfolyamat gondoskodik a pénzügyi egyeztetésről, az adatmegőrzésről, a katalógus időzítéséről és a kommunikáció megbízható feldolgozásáról. Két konkrét példa a kódból:"
        }
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

      <div id="mernoki-hatter" className="case-anchor" />
      <Section
        eyebrow={en ? "Engineering background" : "Mérnöki háttér"}
        title={
          en
            ? "Built to be inspected and verified"
            : "Nemcsak elkészült, hanem ellenőrizhető is"
        }
        description={
          en
            ? "The portfolio demonstrates the systems design and quality assurance work behind the screens."
            : "A portfólió értékét nem önmagában a képernyők adják, hanem az a rendszertervezési és minőségbiztosítási munka, amely mögöttük van."
        }
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <TestTube2 className="h-7 w-7 text-blue-700" />
            <div className="mt-5 text-3xl font-black text-slate-900">
              371 / 371
            </div>
            <h3 className="mt-2 font-bold text-slate-900">
              {en ? "Passing automated tests" : "Sikeres automatizált teszt"}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {en
                ? "The documented 1.1.5 snapshot records 140 passing frontend tests and 231 passing backend tests. The repository also includes nine Playwright E2E scenarios."
                : "140 frontend- és 231 backendteszt sikeres a dokumentált 1.1.5-ös pillanatképben; emellett kilenc Playwright E2E-forgatókönyv található a repóban."}
            </p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-7 w-7 text-blue-700" />
            <h3 className="mt-5 font-bold text-slate-900">
              {en
                ? "Transaction and access controls"
                : "Tranzakciós és hozzáférési kontrollok"}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {en
                ? "Idempotent payment operations, provider verification, outbox and reconciliation, permission policies, rate limiting, auditing and correlation IDs."
                : "Idempotens fizetési műveletek, provider-oldali visszaellenőrzés, outbox és reconciliation, jogosultsági policyk, rate limit, audit és correlation ID."}
            </p>
          </Card>
          <Card className="p-6">
            <Languages className="h-7 w-7 text-blue-700" />
            <div className="mt-5 text-3xl font-black text-slate-900">
              HU · EN · DE
            </div>
            <h3 className="mt-2 font-bold text-slate-900">
              {en ? "Three-language interface" : "Háromnyelvű felület"}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {en
                ? "4,225 aligned translation keys per language, light and dark themes, responsive interfaces and server-side rendering for search visibility."
                : "4 225 egyeztetett lokalizációs kulcs nyelvenként, világos és sötét téma, reszponzív felületek és SSR-alapú keresőoptimalizálhatóság."}
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {en ? "Technology foundations" : "Technológiai alapok"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {en
                ? "An independently deployable, server-rendered frontend, a backend API as the business source of truth, a separate identity service and containerised deployment."
                : "Külön telepíthető, szerveroldalon renderelhető frontend, üzleti igazságforrásként működő backend API, elkülönített identitásszolgáltatás és konténerizált telepítési útvonal."}
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
                {en
                  ? "An engineering approach to delivery"
                  : "Érett fejlesztési szemlélet"}
              </h2>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                en
                  ? "Generated, typed frontend API client"
                  : "Generált, típusos frontend API-kliens",
                en
                  ? "Database migrations and audit logs"
                  : "Adatbázis-migrációk és auditnaplók",
                en
                  ? "Liveness and readiness health checks"
                  : "Live és ready health checkek",
                en
                  ? "Release and deployment logs"
                  : "Release- és telepítési napló",
                en
                  ? "A documented production-readiness plan"
                  : "Dokumentált production-readiness terv",
                en
                  ? "CI/CD with build, test and migration gates"
                  : "CI/CD build-, teszt- és migrációs kapukkal",
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
            lang={lang}
            badge={en ? "Architecture" : "Architektúra"}
            label={
              en
                ? "A layered system with independently deployable services"
                : "Rétegzett, külön telepíthető rendszer"
            }
            filename="11-architecture.png"
            className="aspect-[1362/782]"
            description={
              en
                ? "Angular SSR client, ASP.NET Core API, Keycloak identity, SQL Server and S3-compatible object storage behind a protected reverse proxy and an internal Docker network."
                : "Angular SSR webkliens, ASP.NET Core API, Keycloak identity, SQL Server és S3-kompatibilis objektumtár védett reverse proxy és belső Docker-hálózat mögött."
            }
          />
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
          <strong>
            {en ? "Documented release status:" : "Dokumentált kiadási állapot:"}
          </strong>{" "}
          {en
            ? "The 1.1.5 review identified private file storage, privileged MFA, malware scanning and infrastructure hardening as pre-production tasks. This historical review is not a current production certification."
            : "Az 1.1.5-ös felülvizsgálat a privát fájltárolást, a privilegizált MFA-t, a malware-szkennelést és az infrastruktúra megerősítését élesítés előtti feladatként jelölte. Ez a korábbi felülvizsgálat nem a jelenlegi éles üzem tanúsítása."}
        </div>
      </Section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                {en
                  ? "Your solution may be much smaller."
                  : "Nem mindig kell ekkora rendszer."}
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                {en
                  ? "ToyZumi demonstrates how thoroughly I can design and implement a complex workflow. For your business, we first look at whether configuring an existing tool, adding an integration or building a small, focused web application would be enough."
                  : "A ToyZumi azt mutatja meg, milyen mélységig tudok egy összetett folyamatot végiggondolni és megvalósítani. A te vállalkozásodnál először azt nézzük meg, elég-e egy meglévő eszköz jó beállítása, egy integráció vagy egy kisebb, célzott webalkalmazás."}
              </p>
            </div>
            <Link
              href="/contact?topic=development"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#fff] px-4 py-2.5 text-sm font-bold text-[#020617] transition hover:-translate-y-0.5 hover:bg-[#eff6ff] lg:mt-0"
            >
              {en ? "Describe my problem" : "Megírom a problémát"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/portfolio/toyzumi");
}
