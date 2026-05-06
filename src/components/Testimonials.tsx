"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Item = {
  rating: number;
  text: string;
  author: string;
  position: string;
};

function TestimonialCard({ testimonial, index }: { testimonial: Item; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-gray-50 p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-500 ${
        isVisible ? "animate-fade-in-up" : "scroll-hidden"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
      <div className="font-semibold text-gray-900">{testimonial.author}</div>
      <div className="text-gray-600 text-sm">{testimonial.position}</div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const testimonials: Item[] = [
    {
      rating: 5,
      text: "Läuft. Unser Büro wird seit Jahren von Schmitter sauber gemacht – pünktlich, ohne Gequatsche. Wenn mal was klemmt, ist am nächsten Tag wieder Ruhe im Gebälk.",
      author: "Maria Schmidt",
      position: "Geschäftsführerin, Tech Solutions GmbH",
    },
    {
      rating: 5,
      text: "Vor allem: Verlässlich. Termine klemmen, kurzfristige Extra-Runden – haben wir mehrfach probiert und es hat einfach funktioniert. Sowas entspannt Facility-Menschen mehr als neues Kaffeepad.",
      author: "Thomas Müller",
      position: "Facility Manager",
    },
    {
      rating: 5,
      text: "Nach der Bau-Endreinigung war alles wieder hell statt graustichig-glänzend. Übernahme mit dem Vermieter lief ohne Scham-Momente. Würden wir wieder buchen.",
      author: "Andrea Weber",
      position: "Projektleitung, Bauhaus Properties",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "animate-fade-in-up" : "scroll-hidden"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kunden, die keine Romane schreiben wollten</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kurz gefasst, weil Arbeit wartet – und wer braucht schon drei Seiten Lob für saubere Toiletten?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
