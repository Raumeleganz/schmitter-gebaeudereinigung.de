"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-gray-900 pr-8">
                {item.question}
              </span>
              
              {/* Icon */}
              <div className={`flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Answer Panel */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                {item.answer.split('\n').map((paragraph, i) => (
                  <p key={i} className={i > 0 ? 'mt-3' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

