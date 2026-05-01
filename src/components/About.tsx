"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const features = [
    {
      title: "Erfahrenes Fachpersonal",
      description: "Geschulte und zuverlässige Mitarbeiter mit langjähriger Erfahrung in der professionellen Gebäudereinigung.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Umweltfreundliche Reinigung",
      description: "Wir verwenden ausschließlich ökologische Reinigungsmittel für Ihre Gesundheit und unsere Umwelt.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Flexible Einsatzzeiten",
      description: "Reinigung auch außerhalb der Geschäftszeiten – ganz nach Ihren individuellen Anforderungen.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Qualitätsgarantie",
      description: "100% Zufriedenheitsgarantie mit regelmäßigen Qualitätskontrollen für erstklassige Ergebnisse.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Image */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-700 ${
              headerVisible ? 'animate-fade-in-up' : 'scroll-hidden'
            }`}
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&fm=webp"
                alt="ABED Team bei der Arbeit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay with Logo/Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 inline-block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15+</p>
                      <p className="text-sm text-gray-600 font-semibold">Jahre Erfahrung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-50 rounded-full -z-10 hidden lg:block"></div>
          </div>

          {/* Right Side - Content */}
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              contentVisible ? 'animate-fade-in-up' : 'scroll-hidden'
            }`}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="mx-4 text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Warum ABED?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mit über 15 Jahren Erfahrung in der Gebäudereinigung sind wir Ihr zuverlässiger Partner für höchste Qualität und Kundenzufriedenheit in ganz NRW.
            </p>

            {/* Features List */}
            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-6 py-4 border border-gray-200">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold text-gray-900">ISO 9001 zertifiziert</span>
          </div>
          
          <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-6 py-4 border border-gray-200">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold text-gray-900">Versichert & haftbar</span>
          </div>
          
          <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-6 py-4 border border-gray-200">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold text-gray-900">DSGVO-konform</span>
          </div>
        </div>
      </div>
    </section>
  );
}

