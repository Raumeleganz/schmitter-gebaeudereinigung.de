"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&fm=webp",
      title: "Gebäudereinigung in NRW – einfach sauber gemacht",
      subtitle: "Klarer Plan, fixes Team, keine Überraschungen",
      description:
        "Ob Büro, Praxis oder Treppenhaus: Wir reinigen dort, wo Sie es brauchen – in ganz Nordrhein-Westfalen. Sie sagen uns, wie oft und was wir machen sollen. Wir halten uns dran.",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fm=webp",
      title: "Büroreinigung, die auch Montag funktioniert",
      subtitle: "Ohne Schnickschnack – dafür gründlich",
      description:
        "Schreibtische, Küche, Toiletten, Böden: alles wird in einem Rhythmus gepflegt, der zu Ihnen passt (täglich, wöchentlich oder flexibel). Ihr Büro soll gut riechen, gut aussehen und für Gäste stimmig sein.",
    },
    {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80&fm=webp",
      title: "Sauberkeit mit Hirn – seit über 15 Jahren",
      subtitle: "Seriös, freundlich, mit ordentlicher Chemie",
      description:
        "Wir sind zertifiziert, halten Standards ein und mögen trotzdem einen lockeren Ton. Für Sie heißt das: weniger Kleingedrucktes-Geschwurbel – mehr konkrete Leistungen, feste Absprachen und ein Team, das nicht nur „irgendwie“ wischt.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden mt-20">
      {/* Background Slider - Alle Bilder gleichzeitig rendern */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Nur aktiver Slide: keine überlagerten absoluten Texte */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 font-semibold mb-4">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mb-6">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons mit Framer Motion */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/kontakt"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-500 font-bold shadow-xl hover:shadow-2xl"
              >
                <span>Kostenlos Angebot holen</span>
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg hover:bg-white/20 hover:border-white transition-all duration-500 font-bold"
              >
                Unsere Leistungen
              </motion.a>
            </div>

            {/* Trust Indicators mit Stagger Animation */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              {[
                "15+ Jahre unterwegs",
                "Überall in NRW im Einsatz",
                "Fest zertifiziert & versichert",
              ].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 text-white"
                >
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator mit Animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
