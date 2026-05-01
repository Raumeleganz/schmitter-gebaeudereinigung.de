"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const testimonials = [
    {
      rating: 5,
      text: "Hervorragender Service! Unser Büro wird seit 2 Jahren von ABED gereinigt. Immer pünktlich, gründlich und professionell.",
      author: "Maria Schmidt",
      position: "Geschäftsführerin, Tech Solutions GmbH"
    },
    {
      rating: 5,
      text: "Sehr zuverlässig und flexibel. Die Kommunikation ist ausgezeichnet und die Qualität der Arbeit ist erstklassig.",
      author: "Thomas Müller",
      position: "Facility Manager, Office Park Berlin"
    },
    {
      rating: 5,
      text: "Die Bauendreinigung war perfekt. Alles glänzte und wir konnten pünktlich einziehen. Absolut empfehlenswert!",
      author: "Andrea Weber",
      position: "Projektleiterin, Bauhaus Properties"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in-up' : 'scroll-hidden'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Das sagen unsere Kunden</h2>
          <p className="text-xl text-gray-600">Vertrauen Sie auf die Erfahrung anderer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
            <div 
              key={index} 
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`bg-gray-50 p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'scroll-hidden'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-gray-600 text-sm">{testimonial.position}</div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

