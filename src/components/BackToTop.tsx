"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Zeige Button ab 300px Scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
          aria-label="Zurück nach oben"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

