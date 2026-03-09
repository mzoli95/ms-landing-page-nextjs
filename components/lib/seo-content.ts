export type SeoContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoPageEntry = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  keywords: string[];
  summary: string;
  serviceList?: string[];
  sections: SeoContentSection[];
  ctaTitle: string;
  ctaText: string;
};

export const serviceLandingPages: SeoPageEntry[] = [
  {
    slug: "automatizalas",
    title: "Adminisztráció automatizálása és vállalkozások digitalizálása",
    description:
      "Adminisztráció automatizálása és vállalkozások digitalizálása KKV-knak: Excel helyett átlátható folyamatok, státuszkövetés és kevesebb kézi munka.",
    eyebrow: "SEO céloldal",
    intro:
      "Sok kis- és középvállalkozás ma is Excelben, e-mailekben és fejben próbálja összetartani a napi működést. Ilyenkor nem az a legnagyobb gond, hogy nincs még egy új szoftver, hanem az, hogy ugyanazokat az adatokat több helyen kell vezetni, a teendők könnyen szétesnek, és a csapat túl sok időt tölt manuális adminisztrációval. Az automatizálás és a digitalizálás erre ad gyakorlati választ.",
    keywords: [
      "automatizálás kkv",
      "adminisztráció automatizálás",
      "folyamat automatizálás",
      "excel automatizálás",
      "siófok automatizálás",
      "somogy automatizálás",
    ],
    summary:
      "Automatikus emlékeztetők, státuszváltások, űrlapok, adatátadás és átláthatóbb napi működés magyar KKV-knak.",
    serviceList: [
      "határidő és státusz emlékeztetők",
      "beérkező érdeklődések és űrlapok rendezése",
      "adatátadás több rendszer vagy táblázat között",
      "adminisztrációs folyamatok egyszerűsítése",
      "heti vagy havi összefoglalók automatizálása",
    ],
    sections: [
      {
        title: "Mikor érdemes automatizálni?",
        paragraphs: [
          "Ha ugyanazt az adatot több helyre kell beírni, ha állandóan határidőkre kell emlékeztetni valakit, vagy ha a csapat túl sok időt visz el táblázatok frissítésére, akkor az automatizálás már rövid távon is megtérülhet.",
          "A legtöbb kisvállalkozásnál nem egy nagy rendszer hiányzik, hanem 1-2 jól megválasztott automatizált lépés, amely csökkenti a hibák számát és kiszámíthatóbbá teszi a működést.",
          "Gyakori helyzet, hogy a cég már érzi a növekedésből fakadó nyomást, de még minden félkézi módon működik. Ebben a fázisban egy egyszerűen bevezethető automatizálás sokkal többet ér, mint egy túlméretezett rendszer, amit senki nem használ majd napi szinten.",
        ],
        bullets: [
          "űrlapok és érdeklődések automatikus rendezése",
          "határidő és státusz emlékeztetők e-mailben",
          "adatok átvitele több használt eszköz között",
          "egyszerű riportok automatikus előállítása",
        ],
      },
      {
        title: "Milyen feladatokat lehet gyorsan kiváltani?",
        paragraphs: [
          "Gyakori példa a beérkező ajánlatkérések automatikus rögzítése, a nyitott feladatok heti összefoglalója, vagy a nem fizetett számlák emlékeztetése. Ezek kis scope-pal is elindíthatók.",
          "A cél nem az, hogy mindent egyszerre alakítsunk át, hanem hogy ott kezdjünk, ahol most a legtöbb idő és pénz folyik el.",
          "A jól megválasztott első lépés jellemzően nem látványos, hanem hasznos. Például ha végre nem kell kézzel összeírni a nyitott feladatokat, vagy ha nem veszik el egy érdeklődő csak azért, mert több csatornán érkezett be az információ.",
        ],
      },
      {
        title: "Mi változik a mindennapi működésben?",
        paragraphs: [
          "A csapat kevesebbet keresgél, kevesebb az utólagos pontosítás, és gyorsabban látszik, mi a következő lépés. Ez különösen fontos olyan KKV-knál, ahol a vezető sokszor egyszerre értékesít, szervez és adminisztrál.",
          "Az automatizálás célja nem az, hogy minden folyamat teljesen embermentes legyen, hanem az, hogy a visszatérő, kiszámítható adminisztratív terhek ne vigyék el a napot az érdemi munkától.",
        ],
      },
      {
        title: "Lokális és országos együttműködés",
        paragraphs: [
          "Siófokon, Ságváron, a Balaton környékén és Somogy megye más településein személyes egyeztetés is lehetséges, országosan pedig online együttműködéssel dolgozom.",
          "Ez akkor is jól működik, ha a cég több helyszínen használja ugyanazokat a folyamatokat, mert a digitalizálás és az automatizálás távolról is jól tervezhető és bevezethető.",
          "A gyakorlatban ez azt jelenti, hogy a felmérés, a prototípus, az építés és az átadás is lehet fokozatos, így a napi működés közben sem áll meg a cég. Ez különösen fontos ott, ahol nincs külön belső IT vagy fejlesztői csapat.",
        ],
      },
    ],
    ctaTitle: "Automatizálnál 1-2 visszatérő lépést?",
    ctaText:
      "Írd meg röviden, hol csúszik el a napi munka, és javaslok egy gyors, fokozatosan bevezethető megoldást.",
  },
  {
    slug: "belso-rendszerek",
    title: "Belső webes rendszerek fejlesztése KKV-knak",
    description:
      "Belső webes rendszerek fejlesztése Excel helyett: ügyfélkezelés, státuszkövetés, jogosultságok és átlátható napi működés magyar KKV-knak.",
    eyebrow: "SEO céloldal",
    intro:
      "Amikor egy vállalkozás kinövi az Excelt, általában nem egyik napról a másikra történik a váltás. Először csak több lesz az adat, aztán egyre többen nyúlnak hozzá, végül már senki nem biztos benne, melyik a legfrissebb verzió. A belső webes rendszer ott segít, ahol az Excel már nem átlátható, a manuális nyilvántartás pedig túl sok hibát és bizonytalanságot okoz.",
    keywords: [
      "belső rendszer fejlesztés",
      "excel helyett belső rendszer",
      "egyedi ügyfélkezelő rendszer",
      "kkv belső rendszer",
      "siófok szoftverfejlesztés",
      "somogy rendszerfejlesztés",
    ],
    summary:
      "Egyedi, fokozatosan építhető belső webes rendszerek ügyfél-, munka-, státusz- és adatkezelésre.",
    serviceList: [
      "ügyfél- és munkanyilvántartó rendszerek",
      "státuszkezelés és feladatkövetés",
      "jogosultságkezelés és hozzáférések",
      "dokumentum- és adatkezelési modulok",
      "összefoglalók, exportok és riportok",
    ],
    sections: [
      {
        title: "Miért nő ki egy cég az Excelből?",
        paragraphs: [
          "Az Excel sokszor jó indulásra, de gyorsan szűk keresztmetszetté válik, amikor többen dolgoznak ugyanazzal az adattal, amikor jogosultságokra van szükség, vagy amikor keresni kell a legfrissebb információt.",
          "Ilyenkor egy egyszerű belső rendszer nagyobb rendet, kevesebb hibát és jobb vezetői rálátást adhat, anélkül hogy túl bonyolulttá válna.",
          "A probléma jellemzően nem maga az Excel, hanem az, hogy olyan feladatra próbálják használni, amire már nem alkalmas. Ha külön táblákban vannak az ügyfelek, a feladatok, a státuszok és a pénzügyi adatok, akkor a napi működés előbb-utóbb lelassul és bizonytalanná válik.",
        ],
      },
      {
        title: "Milyen modulokkal érdemes indulni?",
        paragraphs: [
          "Tipikusan az ügyféladatok, a munkafolyamat státuszai, a felelősök és a határidők kerülnek az első verzióba. Ez már önmagában is komoly javulást hozhat a napi működésben.",
          "Később ehhez jöhet dokumentumkezelés, riportok, ügyfélportál vagy további automatizálás, de az első cél mindig a gyorsan használható alapverzió.",
          "A jó induló rendszer nem akar mindent egyszerre megoldani. Először azt érdemes lefedni, amit a csapat naponta használ, mert ebből látszik meg a leghamarabb, hogy valóban csökken-e a káosz és gyorsul-e a működés.",
        ],
        bullets: [
          "ügyfél- és munkanyilvántartás",
          "státuszok és felelősök kezelése",
          "jogosultságok és hozzáférések",
          "összefoglalók és exportok",
        ],
      },
      {
        title: "Mitől lesz használható egy belső rendszer?",
        paragraphs: [
          "Attól, hogy a valós munkafolyamatokra épül, nem pedig egy általános sablonra. Ha a rendszer azt a logikát követi, ahogyan a cég ténylegesen dolgozik, akkor gyorsabban elfogadja a csapat, és kisebb lesz az ellenállás a bevezetéskor.",
          "A cél itt sem a marketinges csillogás, hanem a stabil, érthető és naponta használható működés. Egy jó belső rendszerben mindenki gyorsabban megtalálja, amit keres, és pontosabban látja, mi a következő feladata.",
        ],
      },
      {
        title: "Kinek való ez a megközelítés?",
        paragraphs: [
          "Szolgáltató cégeknek, kisebb csapatoknak és olyan KKV-knak, ahol már sok adat, ügyfél vagy visszatérő folyamat fut egyszerre. Különösen hasznos akkor, ha a csapat Siófokon, Somogy megyében vagy akár országosan több helyről dolgozik.",
          "A legtöbb esetben nem egy komplett vállalatirányítási rendszer a jó válasz, hanem egyedi, fokozatosan bővíthető webes felület, amely pontosan arra koncentrál, ami most visszafogja a működést.",
        ],
      },
    ],
    ctaTitle: "Excel helyett saját belső rendszert szeretnél?",
    ctaText:
      "Egy rövid egyeztetés után meg tudom mondani, mi kerüljön bele az első használható verzióba.",
  },
  {
    slug: "dashboardok",
    title: "Dashboardok és riportok KKV-knak",
    description:
      "Dashboardok és riportok KKV-knak: pénzügyi és működési adatok átlátható, döntéstámogató megjelenítése Excel helyett.",
    eyebrow: "SEO céloldal",
    intro:
      "Sok cégben az a legnagyobb probléma, hogy vannak adatok, csak éppen nem lehet gyorsan dönteni belőlük. A számok több Excelben, külön rendszerben vagy e-mailekben vannak szétszórva, ezért a vezetői riport mindig késik, vagy túl sok kézi munkával áll össze. A dashboard és a jól felépített riport azért hasznos, mert pár másodperc alatt mutatja meg azt, ami a napi döntéshez tényleg fontos.",
    keywords: [
      "riport dashboard",
      "dashboardok kkv-knak",
      "vezetői dashboard",
      "kkv riportok",
      "pénzügyi dashboard",
      "excel riport kiváltás",
      "somogy dashboard fejlesztés",
    ],
    summary:
      "Átlátható dashboardok és riportok a fontos pénzügyi, működési és értékesítési mutatókhoz.",
    serviceList: [
      "vezetői dashboardok kialakítása",
      "pénzügyi és működési riportok",
      "értékesítési és utánkövetési összefoglalók",
      "exportok könyveléshez vagy megbeszélésekhez",
      "egyedi mutatók és státusznézetek",
    ],
    sections: [
      {
        title: "Milyen kérdésekre adjon választ egy dashboard?",
        paragraphs: [
          "Mennyi a nyitott munka, melyik ügyféllel mi a következő lépés, hol késik a folyamat, hogyan állnak a bevételek és a kintlévőségek. Ezek azok a kérdések, amelyekre napi szinten gyors válasz kell.",
          "Ha ezeket csak kézi Excel összesítéssel lehet előállítani, akkor a riport túl lassú lesz, és a döntés is késve érkezik meg.",
          "A legtöbb KKV-nál nem az a gond, hogy nincs adat, hanem az, hogy nincs egy közös nézet, ami összerendezi. Emiatt túl sok idő megy el egyeztetésre, visszakérdezésre és manuális kimutatások készítésére.",
        ],
      },
      {
        title: "Mitől lesz hasznos egy vezetői riport?",
        paragraphs: [
          "Nem a sok grafikon a lényeg, hanem az, hogy a valóban fontos mutatók legyenek szem előtt. Egy jól megtervezett dashboard egy helyen mutatja a napi működés, a pénzügy és az értékesítés legfontosabb jeleit.",
          "A rendszer lehet egyszerű, de legyen megbízható, érthető és gyorsan frissíthető.",
          "A jó riport nem csak szép, hanem cselekvésre alkalmas. Rögtön látszik belőle, hol csúszik a folyamat, melyik ügyfél igényel figyelmet, hol nő a kintlévőség, vagy melyik területből hiányzik pontos adat.",
        ],
        bullets: [
          "bevétel és kiadás áttekintése",
          "nyitott ajánlatok és utánkövetések",
          "elakadt vagy csúszó feladatok",
          "export könyveléshez vagy vezetői egyeztetéshez",
        ],
      },
      {
        title: "Miért fontos ez Excel helyett?",
        paragraphs: [
          "Excelben is lehet riportot építeni, de ha a frissítés minden alkalommal kézi munka, akkor a számok könnyen elavulnak. Egy jól kialakított dashboardnál kisebb a hibalehetőség, gyorsabb a frissülés, és a vezetői döntés valósabb képre épül.",
          "Ez különösen fontos olyan vállalkozásoknál, ahol több ember több adatforrással dolgozik egyszerre, és a napi működés túl gyors ahhoz, hogy egy hetente egyszer frissített táblázat valódi támaszt adjon.",
        ],
      },
      {
        title: "Helyi fókusz, országos használhatóság",
        paragraphs: [
          "Siófoki, ságvári és balaton környéki vállalkozásoknak ugyanúgy készíthető ilyen megoldás, mint országosan működő cégeknek. A riportok legnagyobb előnye, hogy távoli csapatoknál is egységes képet adnak.",
          "A megvalósítás lehet egyszerű első verzióval induló, majd fokozatosan bővíthető. Így nem kell hónapokig várni arra, hogy végre egy helyen láthatóvá váljanak a fontos számok.",
        ],
      },
    ],
    ctaTitle: "Szeretnéd egy képernyőn látni a fontos számokat?",
    ctaText:
      "Megnézzük, melyik 3-5 mutató adná a legnagyobb napi rálátást a céged működésére.",
  },
  {
    slug: "pc-szerviz",
    title: "PC szerviz és kisebb IT karbantartás Siófokon",
    description:
      "PC szerviz és kisebb IT karbantartás Siófokon, Ságváron és Somogy megyében: Windows újratelepítés, SSD és RAM bővítés, hibafeltárás.",
    eyebrow: "Lokális SEO oldal",
    intro:
      "A kisebb IT vagy PC karbantartási feladatok sokszor akkor válnak sürgőssé, amikor már megakasztják a napi munkát. Lassú indulás, lefagyás, eltűnő fájlok, hibás Windows vagy túl kevés memória: ezek nem csak kényelmetlen problémák, hanem konkrét kiesést okoznak magánszemélyeknek és kisebb vállalkozásoknak is. A cél itt nem a túlmagyarázott technikai szöveg, hanem a gyors és érthető megoldás.",
    keywords: [
      "pc szerviz siófok",
      "számítógép szerviz siófok",
      "pc szerviz somogy",
      "ssd bővítés siófok",
      "windows újratelepítés siófok",
      "balaton környéke pc segítség",
    ],
    summary:
      "Windows újratelepítés, adatmentés, SSD vagy RAM bővítés, hibafeltárás és kisebb helyi IT segítség Siófokon és környékén.",
    serviceList: [
      "Windows újratelepítés és adatmentés",
      "SSD vagy RAM bővítés",
      "lassú gép diagnosztika és optimalizálás",
      "új laptop vagy PC beüzemelése",
      "kisebb céges géppark karbantartása",
    ],
    sections: [
      {
        title: "Milyen hibákkal érdemes segítséget kérni?",
        paragraphs: [
          "Ha a laptop lassan indul, gyakran lefagy, furcsán zajos, nem indul el rendesen, vagy rendszeresen hibákat dob, akkor általában megéri egy gyors állapotfelmérés.",
          "Sok esetben nem új gépre van szükség, hanem SSD bővítésre, RAM növelésre, vírusirtásra vagy egy tiszta rendszerkarbantartásra.",
          "Ez különösen igaz akkor, ha a gép alapvetően megfelelne a feladatra, csak az évek alatt tele lett felesleges szoftverekkel, elmaradtak a frissítések, vagy a hardver már nem bírja a mai terhelést.",
        ],
        bullets: [
          "Windows újratelepítés és adatmentés",
          "SSD vagy RAM bővítés",
          "lassulás és lefagyás okának feltárása",
          "új gép beüzemelése és átköltöztetés",
        ],
      },
      {
        title: "Mikor elég a karbantartás, és mikor kell csere?",
        paragraphs: [
          "Nem minden lassú gép öreg vagy menthetetlen. Sok esetben egy SSD csere, memória bővítés vagy tiszta rendszertelepítés töredék áron ad érezhető gyorsulást egy új géphez képest.",
          "A cél az, hogy ne felesleges vásárlás legyen a megoldás. Először érdemes felmérni, hogy javítással, bővítéssel vagy újratelepítéssel visszahozható-e a stabil működés.",
        ],
      },
      {
        title: "Mely területeken elérhető?",
        paragraphs: [
          "Siófokon, Ságváron, a Balaton környékén és Somogy megye több pontján vállalok PC szervizhez kapcsolódó segítséget. Egyes esetekben távoli eléréssel is megoldható a hibaelhárítás.",
          "Ez különösen hasznos helyi vállalkozásoknak, ahol egy-egy leálló gép azonnal megakasztja az adminisztrációt vagy a napi munkát.",
          "Kisebb cégeknél az is gyakori igény, hogy ne csak egyetlen hibát kelljen megoldani, hanem legyen valaki, aki időnként átnézi a gépeket, a frissítéseket és a működési állapotot.",
        ],
      },
      {
        title: "Magánszemélyeknek és kisvállalkozásoknak",
        paragraphs: [
          "A szolgáltatás egyszerre szól magánfelhasználóknak és kisebb cégeknek. Ha 2-5 gépből álló kisebb gépparkot kell stabilan tartani, az is megoldható havi karbantartási formában.",
          "A kommunikáció itt is egyszerű és egyenes: mi a hiba, mit érdemes vele csinálni, mennyire sürgős, és melyik megoldás a racionális. Ez a megközelítés gyorsabbá teszi a döntést és csökkenti a felesleges köröket.",
        ],
      },
    ],
    ctaTitle: "Lassú a gép vagy nem indul rendesen?",
    ctaText:
      "Írd meg a hibajelenséget, és megmondom, érdemes-e javítani, bővíteni vagy újratelepíteni.",
  },
];

export const articlePages: SeoPageEntry[] = [
  {
    slug: "hogyan-digitalizalj-egy-kkv-t",
    title: "Hogyan digitalizálj egy KKV-t lépésről lépésre?",
    description:
      "Gyakorlati útmutató KKV digitalizáláshoz: hol érdemes kezdeni, mit érdemes mérni, és hogyan lehet fokozatosan kiváltani a kézi adminisztrációt.",
    eyebrow: "Tudástár",
    intro:
      "A KKV digitalizálás akkor működik jól, ha nem eszközlistával indul, hanem a napi elakadások feltérképezésével.",
    keywords: [
      "hogyan digitalizálj egy kkv-t",
      "kkv digitalizálás",
      "kisvállalkozás digitalizálás",
      "digitalizáció lépésről lépésre",
    ],
    summary:
      "Fokozatos digitalizálás KKV-knak: problématérkép, prioritások, pilot és bővítés.",
    sections: [
      {
        title: "1. Ne szoftverrel kezdj, hanem problémalistával",
        paragraphs: [
          "Írd össze, hol megy el a legtöbb idő: ajánlatadás, státuszkövetés, számlakövetés, dokumentumkeresés, ügyfélkommunikáció. A digitalizálás ott hoz gyors eredményt, ahol most is folyamatos a kézi terhelés.",
          "Ez azért fontos, mert sok cég túl nagy megoldásban kezd gondolkodni, miközben elég lenne 1-2 kulcslépést rendbe tenni.",
        ],
      },
      {
        title: "2. Válaszd ki a legnagyobb gyorsnyereséget",
        paragraphs: [
          "A legjobb első projekt általában egy olyan kis fejlesztés vagy automatizálás, amely rögtön láthatóan csökkenti a káoszt. Például egy belső státuszkezelő, automatikus emlékeztető vagy havi összefoglaló riport.",
        ],
        bullets: [
          "mi ismétlődik naponta vagy hetente",
          "hol keletkezik a legtöbb hiba",
          "melyik adat hiányzik leggyakrabban a döntéshez",
        ],
      },
      {
        title: "3. Pilot, mérés, bővítés",
        paragraphs: [
          "Egy kisebb első verzióval gyorsan kiderül, hogy a csapat tényleg használja-e az új megoldást. Ha igen, már valós működésre lehet építeni a következő modult vagy automatizálást.",
          "Ez a fokozatos út biztonságosabb és költséghatékonyabb, mint egyszerre mindent lecserélni.",
        ],
      },
    ],
    ctaTitle: "Digitalizálnád a működést, de nem tudod hol kezdd?",
    ctaText:
      "Egy rövid felmérés alapján kijelölhető az első olyan lépés, ami valóban időt spórol a csapatnak.",
  },
  {
    slug: "excel-helyett-belso-rendszer",
    title: "Excel helyett belső rendszer: mikor éri meg váltani?",
    description:
      "Mikor nő ki egy cég az Excelből? Gyakorlati jelek, kockázatok és váltási szempontok belső rendszer fejlesztés előtt.",
    eyebrow: "Tudástár",
    intro:
      "Az Excel nem rossz eszköz, de egy ponton túl túl sok manuális munkát, hibalehetőséget és bizonytalanságot visz be a működésbe.",
    keywords: [
      "excel helyett belső rendszer",
      "mikor kell belső rendszer",
      "excel kiváltása",
      "egyedi rendszer fejlesztés",
    ],
    summary:
      "Az Excel kiváltásának jelei: több felhasználó, jogosultságok, státuszok, riportok és nő a hibaarány.",
    sections: [
      {
        title: "Milyen jelek mutatják, hogy kevés az Excel?",
        paragraphs: [
          "Ha több verzió kering ugyanarról a fájlról, ha nem egyértelmű, ki módosított valamit, ha gyakori a kézi másolás, vagy ha már külön oszloplogikákkal próbáljátok lekövetni a státuszokat, akkor a rendszer kinőtte az eredeti keretet.",
        ],
        bullets: [
          "egyszerre többen szerkesztik ugyanazt",
          "nincs tiszta jogosultságkezelés",
          "nehéz visszakeresni a legfrissebb állapotot",
          "riportokat külön kell összerakni kézzel",
        ],
      },
      {
        title: "Mit ad ehhez képest egy belső rendszer?",
        paragraphs: [
          "Egy belső rendszer központi adatkezelést, státuszlogikát, jogosultságokat, gyors keresést és megbízhatóbb riportolást ad. Nem kell minden feladathoz óriásrendszerre gondolni: már egy egyszerű saját felület is sokat javíthat a napi működésen.",
        ],
      },
      {
        title: "Hogyan érdemes váltani?",
        paragraphs: [
          "Először azt kell meghatározni, hogy melyik munkafolyamatot használja naponta a csapat. Ebből készülhet egy első, szűkebb verzió, ami később fokozatosan bővíthető további modulokkal és riportokkal.",
        ],
      },
    ],
    ctaTitle: "Megnéznéd, kinőtte-e a céged az Excelt?",
    ctaText:
      "Átbeszéljük a jelenlegi működést, és kiderül, hogy már most érdemes-e saját belső rendszerben gondolkodni.",
  },
  {
    slug: "hogyan-automatizalhato-az-adminisztracio",
    title: "Hogyan automatizálható az adminisztráció egy kisvállalkozásban?",
    description:
      "Példák adminisztráció automatizálásra kisvállalkozásoknak: emlékeztetők, űrlapok, adatátadás, státuszkezelés és riportok.",
    eyebrow: "Tudástár",
    intro:
      "Az adminisztráció automatizálása nem azt jelenti, hogy minden folyamatot robotizálni kell, hanem azt, hogy a visszatérő, kiszámítható lépések ne kézzel történjenek.",
    keywords: [
      "hogyan automatizálható az adminisztráció",
      "adminisztráció automatizálás",
      "kisvállalkozás automatizálás",
      "folyamat automatizálás kkv",
    ],
    summary:
      "Az admin automatizálás tipikus területei: emlékeztetők, adatmásolás, státuszkezelés, ajánlatkövetés és riportálás.",
    sections: [
      {
        title: "Hol a legnagyobb a nyereség?",
        paragraphs: [
          "Ott, ahol ugyanazokat az adatokat újra és újra fel kell vinni, ahol az ügyfelek vagy a kollégák állandó visszajelzést kérnek, és ahol a hónap végén kézzel kell összerakni az összefoglalókat.",
        ],
      },
      {
        title: "Konkrét automatizálási példák",
        paragraphs: [
          "Automatikus e-mail emlékeztető fizetési határidő előtt, beérkező űrlapok rögzítése belső nézetbe, státuszváltáskor ügyfélértesítés, heti vezetői összefoglaló a nyitott feladatokról. Ezek a példák gyorsan bevezethetők és könnyen mérhetők.",
        ],
        bullets: [
          "érdeklődő -> ajánlat -> utánkövetés folyamat",
          "számlák és kintlévőségek követése",
          "belső feladatok státuszkövetése",
          "dokumentumok és jóváhagyások rendezése",
        ],
      },
      {
        title: "Miért fontos a fokozatosság?",
        paragraphs: [
          "Az automatizálás akkor marad használható, ha a csapat érti és elfogadja. Ezért érdemes először csak 1-2 fájó ponttal kezdeni, majd a napi tapasztalatok alapján bővíteni a rendszert.",
        ],
      },
    ],
    ctaTitle: "Kézi admin helyett egyszerűbb működést szeretnél?",
    ctaText:
      "Megmutatom, mely admin lépések automatizálhatók gyorsan és melyikből lesz valódi megtakarítás.",
  },
];

export function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((entry) => entry.slug === slug);
}

export function getArticlePage(slug: string) {
  return articlePages.find((entry) => entry.slug === slug);
}
