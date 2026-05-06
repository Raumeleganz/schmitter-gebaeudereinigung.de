"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AreaItem = {
  image: string;
  title: string;
  locations: string[];
};

// Helper function to create URL-friendly slugs (KORREKTE Umlaut-Konvertierung!)
const toSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')   // ä → ae (nicht a!)
    .replace(/ö/g, 'oe')   // ö → oe (nicht o!)
    .replace(/ü/g, 'ue')   // ü → ue (nicht u!)
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

function AreaCard({ area, index }: { area: AreaItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-out will-change-transform ${
        isVisible ? 'animate-zoom-in' : 'scroll-hidden'
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={area.image}
          alt={area.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay - PROFI: Smooth Fade beim Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ease-out group-hover:opacity-90"></div>

        {/* Title on Image - PROFI: Smooth Slide Up beim Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-white mb-2">
            {area.title}
          </h3>
          <div className="flex items-center text-blue-300 text-sm font-semibold">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {area.locations.length} Standorte
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="flex flex-wrap gap-2">
          {area.locations.map((location, idx) => (
            <Link
              key={idx}
              href={`/einsatzgebiete/${toSlug(location)}`}
              className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-[transform,shadow,border-color,background-color,color] duration-200 ease-out cursor-pointer hover:scale-105 hover:shadow-md will-change-transform"
            >
              {location}
              <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/40 rounded-2xl transition-[border-color] duration-300 ease-out pointer-events-none"></div>
    </div>
  );
}

export default function Areas() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const areas: AreaItem[] = [
    {
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80&fm=webp",
      title: "Düsseldorf & Umgebung",
      locations: ["Düsseldorf", "Neuss", "Meerbusch", "Ratingen", "Erkrath"]
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&fm=webp",
      title: "Köln & Region",
      locations: ["Köln", "Bonn", "Leverkusen", "Bergisch Gladbach", "Hürth"]
    },
    {
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fm=webp",
      title: "Ruhrgebiet",
      locations: ["Essen", "Dortmund", "Bochum", "Duisburg", "Gelsenkirchen"]
    },
    {
      image: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&q=80&fm=webp",
      title: "Münsterland",
      locations: ["Münster", "Coesfeld", "Warendorf", "Borken", "Steinfurt"]
    },
    {
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80&fm=webp",
      title: "Bergisches Land",
      locations: ["Wuppertal", "Solingen", "Remscheid", "Velbert", "Hilden"]
    },
    {
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80&fm=webp",
      title: "Weitere NRW-Regionen",
      locations: ["Aachen", "Mönchengladbach", "Krefeld", "Bielefeld", "Paderborn"]
    }
  ];

  return (
    <section id="areas" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in-up' : 'scroll-hidden'
          }`}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
            <span className="mx-4 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Standorte
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Wir sind in ganz<br />
            <span className="text-blue-600">NRW für Sie da</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professionelle Gebäudereinigung von Düsseldorf bis Dortmund, 
            von Köln bis Münster – zuverlässig und termingerecht.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.map((area, index) => (
            <AreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

