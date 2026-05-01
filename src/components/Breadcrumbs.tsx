"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Labels für bessere Darstellung
const labelMap: Record<string, string> = {
  // Hauptseiten
  "leistungen": "Leistungen",
  "bueroreinigung": "Büroreinigung",
  "unterhaltsreinigung": "Unterhaltsreinigung",
  "praxisreinigung": "Praxisreinigung",
  "glasreinigung": "Glasreinigung",
  "industriereinigung": "Industriereinigung",
  "einsatzgebiete": "Einsatzgebiete",
  "kontakt": "Kontakt",
  "ueber-uns": "Über uns",
  "preiskalkulator": "Preiskalkulator",
  "faq": "FAQ",
  "impressum": "Impressum",
  "datenschutz": "Datenschutz",
  "agb": "AGB",
  
  // Städte (Slug → Anzeigename) - ALLE 90 Städte aus NRW
  "koeln": "Köln",
  "duesseldorf": "Düsseldorf",
  "dortmund": "Dortmund",
  "essen": "Essen",
  "duisburg": "Duisburg",
  "bochum": "Bochum",
  "wuppertal": "Wuppertal",
  "bielefeld": "Bielefeld",
  "bonn": "Bonn",
  "muenster": "Münster",
  "moenchengladbach": "Mönchengladbach",
  "gelsenkirchen": "Gelsenkirchen",
  "aachen": "Aachen",
  "krefeld": "Krefeld",
  "oberhausen": "Oberhausen",
  "hagen": "Hagen",
  "hamm": "Hamm",
  "muelheim-an-der-ruhr": "Mülheim an der Ruhr",
  "leverkusen": "Leverkusen",
  "solingen": "Solingen",
  "herne": "Herne",
  "neuss": "Neuss",
  "paderborn": "Paderborn",
  "bottrop": "Bottrop",
  "recklinghausen": "Recklinghausen",
  "remscheid": "Remscheid",
  "bergisch-gladbach": "Bergisch Gladbach",
  "moers": "Moers",
  "siegen": "Siegen",
  "guetersloh": "Gütersloh",
  "witten": "Witten",
  "iserlohn": "Iserlohn",
  "dueren": "Düren",
  "ratingen": "Ratingen",
  "luenen": "Lünen",
  "marl": "Marl",
  "velbert": "Velbert",
  "minden": "Minden",
  "troisdorf": "Troisdorf",
  "viersen": "Viersen",
  "rheine": "Rheine",
  "luedenscheid": "Lüdenscheid",
  "castrop-rauxel": "Castrop-Rauxel",
  "gladbeck": "Gladbeck",
  "dorsten": "Dorsten",
  "detmold": "Detmold",
  "arnsberg": "Arnsberg",
  "bocholt": "Bocholt",
  "lippstadt": "Lippstadt",
  "dinslaken": "Dinslaken",
  "luebbecke": "Lübbecke",
  "kerpen": "Kerpen",
  "wesel": "Wesel",
  "grevenbroich": "Grevenbroich",
  "herten": "Herten",
  "bergheim": "Bergheim",
  "dormagen": "Dormagen",
  "unna": "Unna",
  "langenfeld": "Langenfeld",
  "willich": "Willich",
  "huerth": "Hürth",
  "hilden": "Hilden",
  "meerbusch": "Meerbusch",
  "pulheim": "Pulheim",
  "wesseling": "Wesseling",
  "euskirchen": "Euskirchen",
  "niederkassel": "Niederkassel",
  "erkelenz": "Erkelenz",
  "sankt-augustin": "Sankt Augustin",
  "koenigswinter": "Königswinter",
  "bruehl": "Brühl",
  "siegburg": "Siegburg",
  "hennef": "Hennef",
  "kleve": "Kleve",
  "frechen": "Frechen",
  "uebach-palenberg": "Übach-Palenberg",
  "kamp-lintfort": "Kamp-Lintfort",
  "erkrath": "Erkrath",
  "meckenheim": "Meckenheim",
  "mettmann": "Mettmann",
  "rheinbach": "Rheinbach",
  "gevelsberg": "Gevelsberg",
  "emsdetten": "Emsdetten",
  "schwerte": "Schwerte",
  "erftstadt": "Erftstadt",
  "rheda-wiedenbrueck": "Rheda-Wiedenbrück",
  "buende": "Bünde",
  "kaarst": "Kaarst",
  "meschede": "Meschede",
  "schwelm": "Schwelm",
};

interface BreadcrumbsProps {
  customLabels?: Record<string, string>;
}

export default function Breadcrumbs({ customLabels = {} }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Home page hat keine Breadcrumbs
  if (pathname === "/") return null;
  
  // Pfad in Teile zerlegen
  const pathSegments = pathname.split("/").filter(Boolean);
  
  // Kombiniere Standard-Labels mit Custom-Labels
  const combinedLabels = { ...labelMap, ...customLabels };

  // Schema.org JSON-LD für SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://datra-gebaeudereinigung.de"
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": combinedLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        "item": `https://datra-gebaeudereinigung.de/${pathSegments.slice(0, index + 1).join("/")}`
      }))
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD Markup für Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visuelles Breadcrumb UI */}
      <nav 
        className="bg-gradient-to-r from-gray-50 to-blue-50 py-4 px-6 rounded-xl mb-8 shadow-sm border border-gray-100"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center flex-wrap space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span className="ml-1 font-medium">Home</span>
            </Link>
          </li>

          {/* Dynamische Breadcrumb-Links */}
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;
            const label = combinedLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <li key={href} className="flex items-center">
                {/* Separator */}
                <svg className="w-5 h-5 text-gray-400 mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
                
                {/* Link oder aktueller Text */}
                {isLast ? (
                  <span className="text-blue-600 font-bold">
                    {label}
                  </span>
                ) : (
                  <Link 
                    href={href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

